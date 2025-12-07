<script lang="ts">
  //@ts-nocheck
  import EventCard from "$lib/components/EventCard.svelte";
  import { API_ENDPOINTS } from "$lib/api";

  let events = $state([]);

  async function getEvents() {
    try {
      const response = await fetch(API_ENDPOINTS.EVENT);
      const data = await response.json();
      events = data;
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }

  getEvents();
</script>

<svelte:head>
  <title>Events | Coding Club TKMCE</title>
</svelte:head>

<div class="pt-32 pb-16 container mx-auto px-4">
  <!-- Upcoming Events -->
  <section class="mb-20">
    <div class="flex items-center gap-2 mb-8">
      <h1
        class="text-3xl md:text-4xl font-bold text-white border-b-4 border-blue-500 pb-1 inline-block"
      >
        Upcoming Events
      </h1>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each events as event}
        <EventCard {...event} />
      {/each}
    </div>
  </section>
</div>
