<script lang="ts">
  import { goto } from "$app/navigation";
  import { API_ENDPOINTS } from "$lib/api";
  import { Button } from "$lib/components/ui/button";
  import { CalendarDays, Plus, ArrowRight } from "lucide-svelte";
  import { onMount } from "svelte";

  interface Event {
    _id: string;
    eventName: string;
    eventDate: string;
    eventMode: string;
    eventVenue: string;
    registrations: number;
  }

  let events = $state<Event[]>([]);
  let upcomingEvents = $state<Event[]>([]);
  let pastEvents = $state<Event[]>([]);

  function isUpcoming(eventDate: string) {
    const eventDateObj = new Date(eventDate);
    const currentDate = new Date();
    return eventDateObj >= currentDate;
  }

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

  const handleCreateEvent = () => {
    goto("/admin/events/new");
    console.log("Create event clicked");
  };

  onMount(() => {
    const isAdmin = localStorage.getItem("role");
    if (isAdmin == "false") {
      goto("/profile");
    }
    getEvents();
  });
</script>

<svelte:head>
  <title>Admin Dashboard | Coding Club TKMCE</title>
</svelte:head>

<div class="min-h-screen pt-28 pb-16 px-4">
  <div class="container mx-auto space-y-8">
    <!-- Header -->
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-primary/70 mb-2">
          Admin Panel
        </p>
        <h1 class="text-3xl md:text-4xl font-bold text-white">Dashboard</h1>
        <p class="text-gray-400 mt-2 max-w-xl text-sm md:text-base">
          Manage events, monitor registrations, and keep track of club activity
          at a glance.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <Button
          onclick={handleCreateEvent}
          class="bg-primary text-white rounded-full px-6 py-2 text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] hover:bg-primary/90 transition-all"
        >
          <Plus class="w-4 h-4" />
          Create Event
        </Button>
      </div>
    </div>

    <!-- Stats -->

    <!-- Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-[2fr_1.4fr] gap-6">
      <!-- Upcoming Events -->
      <section
        class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 space-y-4"
      >
        <div class="flex items-center justify-between gap-2">
          <div>
            <h2 class="text-lg font-semibold text-white">Upcoming Events</h2>
            <p class="text-gray-400 text-xs mt-1">
              Quick overview of events and their registration status.
            </p>
          </div>
          <a
            href="/events"
            class="text-xs text-primary hover:text-primary/80 flex items-center gap-1"
          >
            View all
            <ArrowRight class="w-3 h-3" />
          </a>
        </div>

        <div class="space-y-3">
          {#if upcomingEvents.length === 0}
            <div class="text-sm text-gray-500 py-6 text-center">
              No upcoming events. Create one to get started.
            </div>
          {:else}
            {#each upcomingEvents as event}
              <div
                class="rounded-xl border border-white/10 bg-black/40 px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3 hover:border-primary/40 hover:bg-black/60 transition-all"
              >
                <div class="flex-1 space-y-1">
                  <h3 class="text-sm font-semibold text-white">
                    {event.eventName}
                  </h3>
                  <div class="flex flex-wrap gap-2 text-xs text-gray-400">
                    <span class="inline-flex items-center gap-1">
                      <CalendarDays class="w-3 h-3" />
                      {event.eventDate}
                    </span>
                    <span
                      class="px-2 py-0.5 rounded-full bg-white/5 border border-white/10"
                    >
                      {event.eventMode} • {event.eventVenue}
                    </span>
                  </div>
                </div>
                <div
                  class="flex items-center gap-3 justify-between sm:justify-end w-full sm:w-auto"
                >
                  <div class="text-right">
                    <a
                      class="text-xs text-gray-400 px-6 py-2 rounded-lg border-gray-400"
                      href={`/${event._id}`}>Registrations</a
                    >
                    <p class="text-sm font-semibold text-white">
                      {event.registrations}
                    </p>
                  </div>
                </div>
              </div>
            {/each}
          {/if}
        </div>
      </section>
    </div>
  </div>
</div>
