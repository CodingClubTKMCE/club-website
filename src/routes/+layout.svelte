<script lang="ts">
    import "../app.css";
    import favicon from "$lib/assets/favicon.svg";
    import logo from "$lib/assets/logo.png";
    import { resolve } from "$app/paths";
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<section class="min-h-screen flex flex-col bg-black">
    <header class="bg-black">
        <div class="container mx-auto p-6 flex justify-between items-center">
            <a href={resolve("/")} title="logo">
                <img class="w-[50px] h-[50px]" src={favicon} alt="club logo" />
            </a>
            <nav></nav>
        </div>
    </header>
    <main class="flex-1 bg-white">
        <slot />
    </main>
</section>
