<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let { children } = $props();
</script>

<div
  class="min-h-screen flex flex-col bg-black text-white font-sans antialiased"
>
  <Navbar />

  <main class="flex-1 relative">
    {@render children()}
  </main>

  <Footer />
</div>
