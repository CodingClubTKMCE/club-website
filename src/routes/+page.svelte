<script lang="ts">
  import Hero from "$lib/components/home/Hero.svelte";
  import VisionMission from "$lib/components/home/VisionMission.svelte";
  import EventsSection from "$lib/components/home/EventsSection.svelte";
  import TeamSection from "$lib/components/home/TeamSection.svelte";
</script>

<svelte:head>
  <title>Coding Club TKMCE | Code, Innovate, Learn</title>
  <meta
    name="description"
    content="The official website of Coding Club TKMCE. Join us to learn, build, and grow together."
  />
</svelte:head>

<div
  class="bg-black min-h-screen text-white selection:bg-primary/30 selection:text-white"
>
  <Hero />
  <VisionMission />
  <EventsSection />
  <TeamSection />
</div>
