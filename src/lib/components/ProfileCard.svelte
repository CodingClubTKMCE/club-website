<script lang="ts">
    import { Linkedin } from "lucide-svelte";
    import { fade } from "svelte/transition";

    interface Props {
        name: string;
        role: string;
        image: string;
        linkedin?: string;
        size?: "small" | "medium" | "large";
    }

    let { name, role, image, linkedin, size = "medium" }: Props = $props();
    let loaded = $state(false);

    const sizeClasses = {
        small: "w-40 h-40",
        medium: "w-48 h-48",
        large: "w-56 h-56",
    };
</script>

<div class="group relative flex flex-col items-center">
    <!-- Image Container with Purple Tint -->
    <div class="relative {sizeClasses[size]} mb-4">
        <div
            class="relative w-full h-full rounded-lg overflow-hidden bg-[#1a1a1a]"
        >
            {#if !loaded}
                <div
                    class="w-full h-full bg-[#2a2a2a] animate-pulse absolute inset-0"
                ></div>
            {/if}
            <img
                src={image}
                alt={name}
                class="w-full h-full object-cover transition-all duration-500"
                class:opacity-0={!loaded}
                class:opacity-100={loaded}
                onload={() => (loaded = true)}
            />
            <!-- Purple overlay that fades on hover -->
            <div
                class="absolute inset-0 bg-primary/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"
            ></div>
        </div>
    </div>

    <!-- Info Card -->
    <div
        class="bg-[#1a1a1a] rounded-lg px-4 py-3 min-w-[180px] flex items-center justify-between gap-3"
    >
        <div class="flex-1 text-left">
            <h3 class="text-sm font-semibold text-white leading-tight">
                {name}
            </h3>
            <p class="text-xs text-gray-400">{role}</p>
        </div>
        {#if linkedin}
            <a
                href={linkedin}
                target="_blank"
                class="text-gray-400 hover:text-primary transition-colors flex-shrink-0"
                aria-label="LinkedIn profile"
            >
                <Linkedin class="w-4 h-4" />
            </a>
        {/if}
    </div>
</div>
