-<script lang="ts">
import "../app.css";
import { resolve } from "$app/paths";
import { page } from "$app/state";
import favicon from "$lib/assets/favicon.svg";
import illustration from "$lib/assets/homepage_image.png";
import logo from "$lib/assets/logo.svg";
import { Button } from "$lib/components/ui/button/index";
import Mail from "@lucide/svelte/icons/mail";
import { Github, Instagram, Linkedin, Menu, X } from "lucide-svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col bg-black">
  <header class="bg-black sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <a href={resolve("/")} title="Coding Club TKMCE" class="shrink-0">
          <img
            class="h-12 w-auto md:h-14 fill-white"
            src={logo}
            alt="Coding Club TKMCE"
          />
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

  <main class="flex-1 bg-black">
    <div class="max-w-screen mx-auto bg-[#1D1D1D]">
      <div class="grid lg:grid-cols-2 mt-12 gap-12 items-center text-white">
        <div class="p-25">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Inspiring minds<br />
            to <span class="text-purple-400">Code</span>, Innovate,<br />
            and <span class="text-purple-400">Learn</span> every day
          </h1>
          <Button
            class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            Join
          </Button>
        </div>
      </div>
      <div class="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-center">
            <div class="w-full max-w-2xl -mb-12">
              <img
                src={illustration}
                alt="Coding club illustration showing person with telescope and mountain scene"
                class="w-full h-auto"
              />
            </div>
          </div>
          <div class="max-w-3xl mx-auto">
            <div class="bg-[#1D1D1D] rounded-lg p-8 md:p-10">
              <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                Coding club TKMCE is an initiative to inculcate the culture of
                programming and development in our institute. We create a
                platform which allows students to gain assistance and mentorship
                to enhance their coding ability. We ensure that every student
                here at TKMCE should have an opportunity to learn how to code
                and develop a passion for it. Our aim is to impart and instill
                this culture of learning-by-practice among students and to guide
                them to solve real world problems. Our team organises a
                multitude of events throughout the year.
              </p>
            </div>
          </div>
        </div>

        <div class="py-24 px-4">
              <div class="container mx-auto max-w-7xl">
                <!-- Section Header -->
                <div class="text-center mb-16">
                  <div class="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full mb-4">
                    <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span class="text-purple-400 text-sm font-medium">Our Purpose</span>
                  </div>
                  <h2 class="text-4xl md:text-5xl font-bold mb-4">
                    Vision & Mission
                  </h2>
                  <p class="text-gray-400 max-w-2xl mx-auto">
                    Driving innovation and excellence in coding education
                  </p>
                </div>

                <!-- Cards Grid -->
                <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <!-- Vision Card -->
                  <div class="group relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"></div>
                    <div class="relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-gray-800 hover:border-purple-500/50 transition-all duration-300 rounded-xl p-8 md:p-10">
                      <div class="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 class="text-2xl font-bold text-white mb-4">Vision</h3>
                      <p class="text-gray-400 leading-relaxed">
                        To inculcate the culture of programming and development among students,
                        creating a community where every aspiring coder can enhance their abilities
                        and unlock their full potential in the world of technology.
                      </p>
                    </div>
                  </div>

                  <!-- Mission Card -->
                  <div class="group relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50"></div>
                    <div class="relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-gray-800 hover:border-blue-500/50 transition-all duration-300 rounded-xl p-8 md:p-10">
                      <div class="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke-width="2"/>
                          <circle cx="12" cy="12" r="6" stroke-width="2"/>
                          <circle cx="12" cy="12" r="2" stroke-width="2"/>
                        </svg>
                      </div>
                      <h3 class="text-2xl font-bold text-white mb-4">Mission</h3>
                      <p class="text-gray-400 leading-relaxed">
                        To create a platform that fosters learning-by-practice, providing mentorship
                        and assistance to students and professionals. We organize diverse events
                        throughout the year to solve real-world problems and build practical skills.
                      </p>
                    </div>
                  </div>
                </div>

                <Carousel.Root>
                  <Carousel.Content>
                    <Carousel.Item>...</Carousel.Item>
                    <Carousel.Item>...</Carousel.Item>
                    <Carousel.Item>...</Carousel.Item>
                  </Carousel.Content>
                  <Carousel.Previous />
                  <Carousel.Next />
                </Carousel.Root>

                <div class="items-center mt-1.5">
                    <p>
                        Coding club TKMCE is an initiative to inculcate the culture of programming and development in our institute. We create a platform which allows students to gain assistance and mentorship to enhance their coding ability. We ensure that every student here at TKMCE should have an opportunity to learn how to code and develop a passion for it. Our aim is to impart and instill this culture of learning-by-practice among students and professionals alike, and to that end, our team organizes a multitude of events throughout the year
                    </p>

                </div>
      </div>
    </div>
    <slot />
  </main>

  <Footer />
</div>
