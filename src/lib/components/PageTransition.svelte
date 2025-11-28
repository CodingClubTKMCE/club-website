<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import logo from "$lib/assets/logo.svg";

    let { key } = $props();
    let visible = $state(false);

    // Trigger animation on key change (navigation)
    $effect(() => {
        if (key) {
            visible = true;
            setTimeout(() => {
                visible = false;
            }, 1500); // Duration of the full transition
        }
    });
</script>

{#if visible}
    <div
        class="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
        transition:fade={{ duration: 300 }}
    >
        <div class="relative w-full h-full">
            <!-- Logo Animation: Starts at top-left (navbar position) and falls down -->
            <img
                src={logo}
                alt="Loading..."
                class="absolute w-12 h-auto"
                in:fly={{ y: -50, duration: 800, easing: cubicOut }}
                out:fly={{
                    y: 100,
                    opacity: 0,
                    duration: 1000,
                    easing: cubicOut,
                }}
                style="top: 20px; left: 5%;"
            />
        </div>
    </div>
{/if}
