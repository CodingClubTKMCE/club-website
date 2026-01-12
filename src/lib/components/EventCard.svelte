<script lang="ts">
import { API_BASE_URL } from "$lib/api";
import { Button } from "$lib/components/ui/button/index.js";
import { auth } from "$lib/stores/auth";
import { ArrowRight, Calendar, Check, MapPin } from "lucide-svelte";

interface Props {
  _id: string;
  eventName: string;
  eventDate: string;
  eventVenue: string;
  eventImg: string;
  link?: string;
  registered: boolean;
  isAdmin: boolean;
  loggedIn: boolean;
}

let {
  _id: eventId,
  eventName,
  eventDate,
  eventVenue,
  eventImg,
  link = "#",
  registered,
  isAdmin,
  loggedIn,
}: Props = $props();

let message = $state("");

function processDate(isoDateString: any) {
  const date = new Date(isoDateString);

  const humanReadableDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const now = new Date();
  const isInThePast = date < now;

  return {
    readableDate: humanReadableDate,
    isPast: isInThePast,
  };
}

async function handleRegister(id: any) {
  const token = $auth;
  try {
    const res = await fetch(`${API_BASE_URL}/api/register/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    if (res.status === 201) {
      message = "Registration successful!";
      registered = true;
      setTimeout(() => {
        message = "";
      }, 3000);
    } else {
      message = "Already Registered.";
      setTimeout(() => {
        message = "";
      }, 3000);
    }
  } catch (err) {
    console.error("Registration failed", err);
  }
}
</script>

<div class="group relative bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col h-full">
  <!-- eventImg Container -->
  <div class="relative h-96 overflow-hidden">
    <div class="absolute inset-0 from-[#121212] to-transparent z-10 opacity-60">
    </div>
    <img
      src={eventImg}
      alt={eventName}
      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div class="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
      <Calendar class="w-3 h-3 text-primary" />
      <span class="text-xs text-white font-medium">{
        processDate(eventDate).readableDate
      }</span>
    </div>
  </div>

  <!-- Content -->
  <div class="p-6 flex flex-col">
    <h3 class="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors">
      {eventName}
    </h3>

    <div class="flex items-center gap-2 text-gray-400 text-sm mb-6">
      <MapPin class="w-4 h-4" />
      <span>{eventVenue}</span>
    </div>

    <div class="mt-auto">
      <!-- If event is in past dont show register button -->
      {#if !processDate(eventDate).isPast && !isAdmin && loggedIn}
        {#if !registered}
          <Button
            class="w-full bg-white/5 hover:bg-primary hover:text-white text-white border border-white/10 transition-all duration-300 group/btn"
            onclick={() => handleRegister(eventId)}
          >
            Register Now
            <ArrowRight
              class="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
            />
          </Button>
        {:else}
          <Button
            class="w-full bg-green-600 hover:bg-green-700 text-white border border-white/10 transition-all duration-300 cursor-default"
            disabled
          >
            Registered
            <Check class="w-4 h-4 ml-2" />
          </Button>
        {/if}
      {/if}
      {#if isAdmin}
        <a href={`/${eventId}`}>View registrations</a>
      {/if}
    </div>
  </div>
</div>

<!-- toast if registration is succesful -->
{#if message}
  <div
    class={`fixed bottom-4 left-1/2 transform -translate-x-1/2  text-white px-4 py-2 rounded shadow-lg z-50 ${
      message === "Registration successful!" ? "bg-green-600" : "bg-red-600"
    }`}
  >
    {message}
  </div>
{/if}
