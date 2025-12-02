<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import illustration from "$lib/assets/homepage_image.png";
    import GlitchText from "$lib/components/ui/GlitchText.svelte";
</script>

<section class="relative min-h-[90vh] flex items-center pt-32 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div
            class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"
        ></div>
    </div>

    <div class="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <!-- Text Content -->
        <div class="space-y-8 relative z-10">
            <h1
                class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
            >
                Inspiring minds <br />
                to <GlitchText
                    text="Code"
                    class="text-primary"
                    trigger="load"
                />, Innovate, <br />
                and <GlitchText
                    text="Learn"
                    class="text-primary"
                    trigger="load"
                />
                every day
            </h1>

            <div class="flex flex-wrap gap-4">
                <Button
                    href="/login"
                    class="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
                >
                    Join
                </Button>
            </div>
        </div>

        <!-- Image/Illustration -->
        <div class="relative lg:h-[600px] flex items-center justify-center">
            <div class="relative w-full max-w-lg aspect-square">
                <div
                    class="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-500/30 rounded-full blur-[60px]"
                ></div>
                <img
                    src={illustration}
                    alt="Coding Club Illustration"
                    class="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                />
            </div>
        </div>
    </div>
</section>
