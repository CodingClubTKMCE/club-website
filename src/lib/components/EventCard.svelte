<script lang="ts">
    import { Calendar, MapPin, ArrowRight } from "lucide-svelte";
    import { Button } from "$lib/components/ui/button/index.js";

    interface Props {
        title: string;
        date: string;
        location: string;
        image: string;
        link?: string;
    }

    let { title, date, location, image, link = "#" }: Props = $props();
</script>

<div
    class="group relative bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col h-full"
>
    <!-- Image Container -->
    <div class="relative h-48 overflow-hidden">
        <div
            class="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent z-10 opacity-60"
        ></div>
        <img
            src={image}
            alt={title}
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
            class="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2"
        >
            <Calendar class="w-3 h-3 text-primary" />
            <span class="text-xs text-white font-medium">{date}</span>
        </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-grow">
        <h3
            class="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-primary transition-colors"
        >
            {title}
        </h3>

        <div class="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <MapPin class="w-4 h-4" />
            <span>{location}</span>
        </div>

        <div class="mt-auto">
            <Button
                href={link}
                class="w-full bg-white/5 hover:bg-primary hover:text-white text-white border border-white/10 transition-all duration-300 group/btn"
            >
                Register Now
                <ArrowRight
                    class="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
                />
            </Button>
        </div>
    </div>
</div>
