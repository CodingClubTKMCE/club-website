<script lang="ts">
import "../app.css";
import { resolve } from "$app/paths";
import { page } from "$app/state";
import favicon from "$lib/assets/favicon.svg";
import logo from "$lib/assets/logo.png";
import { Button } from "$lib/components/ui/button/index";
import Mail from "@lucide/svelte/icons/mail";
import { Github, Instagram, Linkedin, Menu, X } from "lucide-svelte";

let mobileMenuOpen = $state(false);

const toggleMobileMenu = () => {
  mobileMenuOpen = !mobileMenuOpen;
};

const navLinks = [
  { href: "/" as const, label: "Home", match: "/" },
  { href: "/events" as const, label: "Events", match: "/events" },
  { href: "/execom" as const, label: "Execom", match: "/execom" },
];
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col bg-black">
  <header class="bg-black border-b border-gray-800 sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <a href={resolve("/")} title="Coding Club TKMCE" class="flex-shrink-0">
          <img class="h-12 w-auto md:h-14" src={logo} alt="Coding Club TKMCE" />
        </a>

        <nav class="hidden md:flex items-center gap-2">
          {#each navLinks as link (link.href)}
            <a
              href={resolve(link.href)}
              class="
                px-6 py-2.5 text-white rounded-full transition-all duration-200 {page.url.pathname === link.match || page.url.pathname.startsWith(link.match) && link.match !== '/'
                ? 'bg-neutral-800 font-medium'
                : 'hover:bg-neutral-800/50'}
              "
            >
              {link.label}
            </a>
          {/each}
        </nav>

        <div class="hidden md:block">
          <Button variant="outline" size="sm" class="gap-2">
            <Mail class="w-4 h-4" />
            Login
          </Button>
        </div>

        <button
          onclick={toggleMobileMenu}
          class="md:hidden p-2 text-white hover:bg-neutral-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {#if mobileMenuOpen}
            <X class="w-6 h-6" />
          {:else}
            <Menu class="w-6 h-6" />
          {/if}
        </button>
      </div>

      {#if mobileMenuOpen}
        <nav class="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
          <div class="flex flex-col gap-2">
            {#each navLinks as link (link.href)}
              <a
                href={resolve(link.href)}
                onclick={toggleMobileMenu}
                class="
                  px-4 py-3 text-white rounded-lg transition-all {page.url.pathname === link.match || page.url.pathname.startsWith(link.match) && link.match !== '/'
                  ? 'bg-neutral-800 font-medium'
                  : 'hover:bg-neutral-800/50'}
                "
              >
                {link.label}
              </a>
            {/each}
            <div class="mt-2 px-4">
              <Button variant="outline" size="sm" class="w-full gap-2">
                <Mail class="w-4 h-4" />
                Login
              </Button>
            </div>
          </div>
        </nav>
      {/if}
    </div>
  </header>

  <main class="flex-1 bg-amber-700 from-gray-900 via-gray-800 to-gray-900">
    <slot />
  </main>

  <footer class="bg-[#0a0a0a] text-gray-400 border-t border-gray-800">
    <div class="container mx-auto px-4 py-8 md:py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div class="flex flex-col items-center md:items-start">
          <img src={logo} alt="Coding Club TKMCE" class="h-12 w-auto mb-1" />
          <p class="text-xs text-center md:text-left mt-1">
            Empowering coders at TKM College of Engineering
          </p>
        </div>

        <div class="text-center md:text-left">
          <h3 class="text-white font-semibold text-base mb-3">Quick Links</h3>
          <ul class="space-y-2">
            {#each navLinks as link (link.href)}
              <li>
                <a
                  href={resolve(link.href)}
                  class="hover:text-white transition-colors inline-block"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <div class="text-center md:text-left">
          <h3 class="text-white font-semibold text-base mb-3">Contact Info</h3>
          <div class="space-y-2">
            <p class="flex items-start gap-3 justify-center md:justify-start">
              <svg
                class="w-5 h-5 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-sm"
              >TKM College of Engineering, Karicode, Kollam</span>
            </p>
            <p class="flex items-center gap-3 justify-center md:justify-start">
              <svg
                class="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:codingclub@tkmce.ac.in"
                class="hover:text-white transition-colors text-sm"
              >
                codingclub@tkmce.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-3">
          <p class="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Coding Club TKMCE. All Rights Reserved.
          </p>

          <div class="flex gap-4">
            <a
              href="https://github.com/CodingClubTKMCE"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-lg"
              aria-label="GitHub"
            >
              <Github class="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/codingclub-tkmce"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin class="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/codingclub_tkmce/"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-lg"
              aria-label="Instagram"
            >
              <Instagram class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
