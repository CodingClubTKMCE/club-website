<script lang="ts">
  import { API_ENDPOINTS } from "$lib/api";
  import { auth } from "$lib/stores/auth";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  interface Registration {
    name: string;
    year: string;
    branch: string;
    eventName: string;
    registeredAt: string;
  }

  let registrations: Registration[] = $state([]);
  const token = $auth;

  async function getRegistrations() {
    const res = await fetch(API_ENDPOINTS.EVENT_REGISTRATIONS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({ eventId: data.event }),
    });
    const resdata = await res.json();
    registrations = resdata;
  }

  onMount(() => {
    getRegistrations();
  });
</script>

<div class="pt-40 px-32">
  <section
    class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 flex flex-col"
  >
    <div class="flex items-center justify-between gap-2 mb-3">
      <div>
        <h2 class="text-lg font-semibold text-white">Recent Registrations</h2>
        <p class="text-gray-400 text-xs mt-1">
          Latest students who registered for events.
        </p>
      </div>
    </div>

    <div
      class="flex-1 overflow-hidden rounded-xl border border-white/10 bg-black/40"
    >
      <div class="max-h-80 overflow-auto custom-scroll">
        <table class="min-w-full text-xs">
          <thead class="bg-white/5 border-b border-white/10 sticky top-0 z-10">
            <tr class="text-gray-400 text-[11px] uppercase tracking-wide">
              <th class="px-4 py-2 text-left">User</th>
              <th class="px-4 py-2 text-left">Year / Branch</th>
              <th class="px-4 py-2 text-left">Event</th>
              <th class="px-4 py-2 text-right">When</th>
            </tr>
          </thead>
          <tbody>
            {#if registrations.length === 0}
              <tr>
                <td
                  colspan="4"
                  class="px-4 py-6 text-center text-gray-500 text-xs"
                >
                  No registrations yet.
                </td>
              </tr>
            {:else}
              {#each registrations as reg}
                <tr
                  class="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td class="px-4 py-2 text-white">
                    {reg.name}
                  </td>
                  <td class="px-4 py-2 text-gray-300">
                    {reg.year} • {reg.branch}
                  </td>
                  <td class="px-4 py-2 text-gray-300">
                    {reg.eventName}
                  </td>
                  <td class="px-4 py-2 text-gray-400 text-right">
                    {reg.registeredAt}
                  </td>
                </tr>
              {/each}
            {/if}
          </tbody>
        </table>
      </div>
    </div>
  </section>
</div>
