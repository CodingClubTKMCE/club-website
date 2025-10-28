<script lang="ts">
import "../app.css";
import { resolve } from "$app/paths";
import { page } from "$app/state";
import favicon from "$lib/assets/favicon.svg";
import logo from "$lib/assets/logo.png";
import { Button } from "$lib/components/ui/button/index";
import Mail from "@lucide/svelte/icons/mail";
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
</section>
