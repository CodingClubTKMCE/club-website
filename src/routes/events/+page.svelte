<script lang="ts">
// @ts-nocheck
import { API_ENDPOINTS } from "$lib/api";
import EventCard from "$lib/components/EventCard.svelte";
import { auth } from "$lib/stores/auth";
import { onMount } from "svelte";

let events = $state([]);
let pastEvents = $state([]);
let upcomingEvents = $state([]);
let registeredEvents = $state([]);
let loggedIn = $state(false);
let token = $state(null);

token = $auth;

async function getEvents() {
  try {
    const response = await fetch(API_ENDPOINTS.EVENT);
    const data = await response.json();
    events = data;
    events.map((event) => {
      if (isUpcoming(event.eventDate)) {
        upcomingEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    });
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

function isUpcoming(eventDate) {
  const eventDateObj = new Date(eventDate);
  const currentDate = new Date();
  return eventDateObj >= currentDate;
}

async function getRegisteredEvents() {
  try {
    const token = $auth;
    const response = await fetch(API_ENDPOINTS.REGISTERED_EVENTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await response.json();
    registeredEvents = data;
  } catch (error) {
    console.error("Error fetching registered events:", error);
  }
}

onMount(() => {
  getEvents();
  if (token || localStorage.getItem("token") != null) {
    loggedIn = true;
    getRegisteredEvents();
  }
});
</script>

<svelte:head>
  <title>Events | Coding Club TKMCE</title>
</svelte:head>

<div class="pt-32 pb-16 container mx-auto px-4">
  <!-- Upcoming Events -->
  <section class="mb-20">
    <div class="flex items-center gap-2 mb-8">
      <h1 class="text-3xl md:text-4xl font-bold text-white border-b-4 border-blue-500 pb-1 inline-block">
        Upcoming Events
      </h1>
    </div>

    {#if upcomingEvents.length == 0}
      <h1 class="text-gray-500 text-xl">No upcoming events right now...</h1>
    {/if}
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each upcomingEvents as event}
        <EventCard
          {...event}
          registered={loggedIn ? registeredEvents.includes(event._id) : false}
          {loggedIn}
        />
      {/each}
    </div>
  </section>
  <!-- Past events -->
  <section class="mb-20">
    <div class="flex items-center gap-2 mb-8">
      <h1 class="text-3xl md:text-4xl font-bold text-white border-b-4 border-blue-500 pb-1 inline-block">
        Past Events
      </h1>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each pastEvents as event}
        <EventCard {...event} registered={true} />
      {/each}
    </div>
  </section>
</div>
