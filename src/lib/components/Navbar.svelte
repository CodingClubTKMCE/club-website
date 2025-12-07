<script lang="ts">
  import { page } from "$app/state";
  import logo from "$lib/assets/logo.svg";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Menu, X, Mail } from "lucide-svelte";
  import { onMount } from "svelte";

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);

  let token = $state();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/execom", label: "Execom" },
  ];

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
    document.body.style.overflow = "";
  }

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener("scroll", handleScroll);

    const fetchToken = async () => {
      token = await localStorage.getItem("token");
    };
    fetchToken();

    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent {isScrolled
    ? 'bg-black/80 backdrop-blur-md border-white/10 py-3'
    : 'bg-transparent py-5'}"
>
  <div class="container mx-auto px-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="relative z-50" onclick={closeMobileMenu}>
      <img src={logo} alt="Coding Club TKMCE" class="h-30 w-auto md:auto" />
    </a>

    <!-- Desktop Nav -->
    <nav
      class="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm"
    >
      {#each navLinks as link}
        <a
          href={link.href}
          class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group {page
            .url.pathname === link.href
            ? 'text-white bg-white/10'
            : 'text-gray-400 hover:text-white hover:bg-white/5'}"
        >
          {link.label}
          {#if page.url.pathname === link.href}
            <span class="absolute inset-0 rounded-full ring-1 ring-white/20"
            ></span>
          {/if}
        </a>
      {/each}
    </nav>

    <!-- Desktop Actions -->
    <div class="hidden md:flex items-center gap-4">
      <!-- Login button if no token -->
      {#if !token}
        <Button
          href="/login"
          variant="outline"
          class="bg-white/5 text-white rounded-full px-6 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300"
        >
          Login
        </Button>
      {:else}
        <Button
          href="/profile"
          variant="outline"
          class="bg-white/5 text-white rounded-full px-6 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300"
          >Profile</Button
        >
      {/if}
    </div>

    <!-- Mobile Toggle -->
    <button
      class="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
      onclick={toggleMobileMenu}
      aria-label="Toggle menu"
    >
      {#if isMobileMenuOpen}
        <X class="w-6 h-6" />
      {:else}
        <Menu class="w-6 h-6" />
      {/if}
    </button>
  </div>
</header>

<!-- Mobile Drawer -->
{#if isMobileMenuOpen}
  <div
    class="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden transition-all duration-300"
    role="dialog"
    aria-modal="true"
  >
    <nav class="flex flex-col items-center gap-6">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-2xl font-medium text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 {page
            .url.pathname === link.href
            ? 'text-white scale-110'
            : ''}"
          onclick={closeMobileMenu}
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <div class="flex flex-col gap-4 w-full max-w-xs px-8">
      {#if !token}
        <Button
          href="/login"
          variant="outline"
          class="w-full justify-center py-6 text-lg border-white/20 text-black hover:text-white hover:bg-white/10"
          onclick={closeMobileMenu}
        >
          Login
        </Button>
      {:else}
        <Button
          href="/profile"
          variant="outline"
          class="w-full justify-center py-6 text-lg border-white/20 text-black hover:text-white hover:bg-white/10"
          onclick={closeMobileMenu}
        >
          Profile
        </Button>
      {/if}
    </div>
  </div>
{/if}
