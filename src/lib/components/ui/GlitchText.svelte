<script lang="ts">
    import { onMount } from "svelte";

    let {
        text,
        class: className = "",
        speed = 50,
        duration = 1000,
        trigger = "load", // "load", "hover", "scroll"
    } = $props();

    const chars = "0123456789@#%&$*/+?!";
    let displayChars = $state(text.split(""));
    let isGlitching = $state(false);
    let intervals: any[] = [];

    function randomChar() {
        return chars[Math.floor(Math.random() * chars.length)];
    }

    function clearAllIntervals() {
        intervals.forEach((i) => clearInterval(i));
        intervals = [];
    }

    function startGlitch() {
        if (isGlitching) return;
        isGlitching = true;
        clearAllIntervals();

        // Scramble each character
        text.split("").forEach((char, index) => {
            if (char === " " || char === "\n") return;

            // Start scrambling immediately
            const interval = setInterval(() => {
                displayChars[index] = randomChar();
            }, speed);
            intervals.push(interval);

            // Resolve after random delay + stagger
            // Stagger based on index to create a wave effect
            const delay = Math.random() * 300 + index * 50;

            setTimeout(() => {
                clearInterval(interval);
                displayChars[index] = char;

                // Check if this was the last one roughly
                if (index === text.length - 1) {
                    setTimeout(() => {
                        isGlitching = false;
                        clearAllIntervals(); // Cleanup
                        displayChars = text.split(""); // Ensure clean state
                    }, 200);
                }
            }, delay);
        });
    }

    onMount(() => {
        if (trigger === "load" || trigger === "scroll") {
            // Simple load trigger for now, scroll would need IntersectionObserver
            setTimeout(startGlitch, 100);
        }
    });

    function handleMouseEnter() {
        if (trigger === "hover" || trigger === "load") {
            startGlitch();
        }
    }
</script>

<div
    class="relative inline-block {className}"
    onmouseenter={handleMouseEnter}
    role="button"
    tabindex="0"
>
    <!-- Placeholder for width stability -->
    <span class="invisible whitespace-pre">{text}</span>

    <!-- Animating layer -->
    <span class="absolute inset-0 z-10 whitespace-pre">
        {#each displayChars as char, i}
            <span class="inline-block">{char}</span>
        {/each}
    </span>

    {#if isGlitching}
        <!-- RGB Split Layers -->
        <span
            class="absolute top-0 left-0 -z-10 text-red-500 opacity-70 animate-glitch-1 select-none pointer-events-none"
            aria-hidden="true"
        >
            {text}
        </span>
        <span
            class="absolute top-0 left-0 -z-10 text-blue-500 opacity-70 animate-glitch-2 select-none pointer-events-none"
            aria-hidden="true"
        >
            {text}
        </span>
    {/if}
</div>

<style>
    @keyframes glitch-anim-1 {
        0% {
            clip-path: inset(20% 0 80% 0);
            transform: translate(-2px, 1px);
        }
        20% {
            clip-path: inset(60% 0 10% 0);
            transform: translate(2px, -1px);
        }
        40% {
            clip-path: inset(40% 0 50% 0);
            transform: translate(-2px, 2px);
        }
        60% {
            clip-path: inset(80% 0 5% 0);
            transform: translate(2px, -2px);
        }
        80% {
            clip-path: inset(10% 0 60% 0);
            transform: translate(-1px, 1px);
        }
        100% {
            clip-path: inset(30% 0 30% 0);
            transform: translate(1px, -1px);
        }
    }

    @keyframes glitch-anim-2 {
        0% {
            clip-path: inset(10% 0 60% 0);
            transform: translate(2px, -1px);
        }
        20% {
            clip-path: inset(80% 0 5% 0);
            transform: translate(-2px, 2px);
        }
        40% {
            clip-path: inset(30% 0 20% 0);
            transform: translate(2px, 1px);
        }
        60% {
            clip-path: inset(10% 0 80% 0);
            transform: translate(-1px, -2px);
        }
        80% {
            clip-path: inset(40% 0 10% 0);
            transform: translate(1px, 2px);
        }
        100% {
            clip-path: inset(50% 0 30% 0);
            transform: translate(-2px, 1px);
        }
    }

    .animate-glitch-1 {
        animation: glitch-anim-1 0.4s infinite linear alternate-reverse;
    }

    .animate-glitch-2 {
        animation: glitch-anim-2 0.4s infinite linear alternate-reverse;
    }
</style>
