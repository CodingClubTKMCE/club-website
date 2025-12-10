<script lang="ts">
  //@ts-nocheck
  import { API_ENDPOINTS } from "$lib/api";
  import EventCard from "$lib/components/EventCard.svelte";
  import { Calendar } from "lucide-svelte";

  let events = $state([]);
  let upcomingEvents = $state([]);

  async function getEvents() {
    try {
      const response = await fetch(API_ENDPOINTS.EVENT);
      const data = await response.json();
      events = data;
      events.map((event) => {
        if (isUpcoming(event.eventDate)) {
          upcomingEvents.push(event);
        }
      });
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }

  // function to check if an event is upcoming or in the past... event date is in the format 2025-09-22T00:00:00.000Z
  function isUpcoming(eventDate) {
    const eventDateObj = new Date(eventDate);
    const currentDate = new Date();
    return eventDateObj >= currentDate;
  }

  getEvents();
</script>

<section class="pt-12 pb-24 bg-black/50 relative">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between mb-12">
      <div>
        <div class="inline-flex items-center gap-2 text-primary mb-2">
          <Calendar class="w-5 h-5" />
          <span class="font-medium">Mark Your Calendars</span>
        </div>
        <h2 class="text-4xl font-bold text-white">Upcoming Events</h2>
      </div>
      <a
        href="/events"
        class="hidden md:block text-gray-400 hover:text-primary transition-colors"
        >View All Events &rarr;</a
      >
    </div>

    {#if upcomingEvents.length == 0}
      <h1 class="text-gray-500 text-xl">No upcoming events right now...</h1>
    {/if}

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each upcomingEvents as event}
        <EventCard {...event} />
      {/each}
    </div>

    <div class="mt-8 text-center md:hidden">
      <a href="/events" class="text-primary font-medium hover:underline"
        >View All Events &rarr;</a
      >
    </div>
  </div>
</section>
