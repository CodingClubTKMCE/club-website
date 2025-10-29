<script lang="ts">
import "../app.css";
import { resolve } from "$app/paths";
import { page } from "$app/state";
import favicon from "$lib/assets/favicon.svg";
import logo from "$lib/assets/logo.png";
import { Button } from "$lib/components/ui/button/index";
import Mail from "@lucide/svelte/icons/mail";
import { Github, Instagram, Linkedin } from "lucide-svelte";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<section class="min-h-screen flex flex-col bg-black">
  <header class="bg-black">
    <div class="container mx-auto flex flex-col-1 justify-between items-center">
      <a href={resolve("/")} title="logo">
        <img class="w-auto h-auto" src={logo} alt="club logo" />
      </a>
      <nav class="bg-black px-8 py-4">
        <div class="flex items-center gap-4">
          <a
            href={resolve("/")}
            class="{page.url.pathname === '/' ? 'rounded-full bg-neutral-800' : ''} px-8 py-3 text-white transition hover:bg-neutral-700"
          >
            Home
          </a>
          <a
            href={resolve("/")}
            class="{page.url.pathname.startsWith('/events') ? 'rounded-full bg-neutral-800' : ''} px-8 py-3 text-white transition hover:text-gray-300"
          >
            Events
          </a>
          <a
            href={resolve("/")}
            class="{page.url.pathname.startsWith('/execom') ? 'rounded-full bg-neutral-800' : ''} px-8 py-3 text-white transition hover:text-gray-300"
          >
            Execom
          </a>
        </div>
      </nav>
      <Button variant="outline" size="sm">
        <Mail />
        Login
      </Button>
    </div>
  </header>
  <main class="flex-1 bg-gray-500">
    <slot />
  </main>
  <footer>
    <footer class="bg-[#1a1a1a] text-gray-400 py-6 px-3">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div class="text-white font-bold text-lg mb-2">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href={resolve("/")}
                  class="hover:text-white transition-colors"
                >Home</a>
              </li>
              <li>
                <a
                  href={resolve("/")}
                  class="hover:text-white transition-colors"
                >Events</a>
              </li>
              <li>
                <a
                  href={resolve("/")}
                  class="hover:text-white transition-colors"
                >Execom</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">Contact Info</h3>
            <div class="space-y-2">
              <p class="flex items-start gap-2">
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
                <span>TKM College of Engineering, Karicode, Kollam</span>
              </p>
              <p class="flex items-center gap-2">
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
                  class="hover:text-white transition-colors"
                >
                  codingclub@tkmce.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="mt-4 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm">© Coding Club TKMCE - All Rights Reserved</p>

          <div class="flex gap-4">
            <a
              href={resolve("/")}
              class="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href={resolve("/")}
              class="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href={resolve("/")}
              class="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </footer>
</section>
