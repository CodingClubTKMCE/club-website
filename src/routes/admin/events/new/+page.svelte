<script lang="ts">
  import { goto } from "$app/navigation";
  import { onDestroy } from "svelte";
  import { API_ENDPOINTS } from "$lib/api";

  // form state
  let eventName = $state("");
  let eventDescription = $state("");
  let eventDate = $state("");
  let eventVenue = $state("");
  let eventMode: "Online" | "Offline" | "Hybrid" = $state("Online");
  let eventImg = $state("");

  let loading = $state(false);
  let error = $state("");
  let success = $state("");

  const validate = () => {
    if (!eventName.trim()) return "Event name is required";
    if (!eventDescription.trim()) return "Event description is required";
    if (!eventDate) return "Event date is required";
    if (!eventVenue.trim()) return "Event venue is required";
    if (!eventMode) return "Event mode is required";
    return "";
  };

  async function submitForm() {
    error = "";
    success = "";
    const v = validate();
    if (v) {
      error = v;
      return;
    }

    loading = true;

    try {
      const payload: any = {
        eventName,
        eventDescription,
        eventDate,
        eventVenue,
        eventMode,
        eventImg,
      };

      const res = await fetch(API_ENDPOINTS.CREATE_EVENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // include cookies if your backend uses them
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        error = data?.message || "Failed to create event";
        loading = false;
        return;
      }

      success = "Event created!";
      goto("/events");
    } catch (err) {
      console.error(err);
      error = "Network error. Try again.";
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Create event • Coding Club</title>
</svelte:head>

<div class="min-h-screen px-4 pt-28 pb-16 container mx-auto">
  <div
    class="max-w-3xl mx-auto bg-[#0f0f0f] border border-white/6 rounded-2xl p-8 shadow-lg"
  >
    <h2 class="text-2xl font-bold text-white mb-2">Create event</h2>
    <p class="text-sm text-gray-400 mb-6">
      Add a new event — visitors will see this in the events list.
    </p>

    <form
      onsubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
      class="space-y-6"
    >
      <div>
        <label class="block text-sm text-gray-300 mb-2" for="eventname"
          >Event name</label
        >
        <input
          name="eventname"
          bind:value={eventName}
          class="w-full bg-[#111111] border border-white/6 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Code to Career"
        />
      </div>

      <div>
        <label class="block text-sm text-gray-300 mb-2" for="textarea"
          >Event description</label
        >
        <textarea
          name="textarea"
          bind:value={eventDescription}
          rows="5"
          class="w-full bg-[#111111] border border-white/6 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          placeholder="Describe the event..."
        ></textarea>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm text-gray-300 mb-2" for="eventdate"
            >Event date & time</label
          >
          <input
            name="eventdate"
            bind:value={eventDate}
            type="datetime-local"
            class="w-full bg-[#111111] border border-white/6 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label class="block text-sm text-gray-300 mb-2" for="eventvenue"
            >Venue</label
          >
          <input
            name="eventvenue"
            bind:value={eventVenue}
            placeholder="Google Meet / Auditorium"
            class="w-full bg-[#111111] border border-white/6 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
        <div>
          <label class="block text-sm text-gray-300 mb-2" for="eventmode"
            >Mode</label
          >
          <select
            name="eventmode"
            bind:value={eventMode}
            class="w-full bg-[#111111] border border-white/6 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option>Online</option>
            <option>Offline</option>
            <option>Hybrid</option>
          </select>
        </div>

        <div>
          <label class="block text-sm text-gray-300 mb-2" for="eventimg"
            >Event image (URL)</label
          >
          <input
            name="eventimg"
            type="text"
            bind:value={eventImg}
            placeholder="https://..."
            class="w-full bg-[#111111] border border-white/6 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="submit"
          class="inline-flex items-center justify-center px-6 py-3 bg-primary rounded-lg text-white font-semibold disabled:opacity-60"
          disabled={loading}
        >
          {#if loading}
            <svg
              class="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              ><circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle><path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path></svg
            >
            Creating...
          {:else}
            Create event
          {/if}
        </button>

        <button
          type="button"
          onclick={() => goto("/events")}
          class="px-4 py-3 border border-white/6 rounded-lg text-sm text-gray-300"
          >Cancel</button
        >
      </div>

      {#if error}
        <div class="mt-2 text-sm text-red-500">{error}</div>
      {/if}
      {#if success}
        <div class="mt-2 text-sm text-green-500">{success}</div>
      {/if}
    </form>
  </div>
</div>

<style>
  /* ensure primary color exists — you probably have this in your tailwind config */
  :global(.bg-primary) {
    background-color: #8b5cf6;
  }
  :global(.text-primary) {
    color: #8b5cf6;
  }
  :global(.ring-primary) {
    --tw-ring-color: rgba(139, 92, 246, 0.6);
  }
</style>
