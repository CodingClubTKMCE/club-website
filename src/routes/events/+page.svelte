<script lang="ts">
    import EventCard from "$lib/components/EventCard.svelte";
    import { Calendar, Clock } from "lucide-svelte";

    // Placeholder data matching the screenshot style
    const upcomingEvents = [
        {
            title: "Code to Career: Pre-placement Talk",
            date: "October 8, 2025 at 12:30 AM",
            location: "Google Meet",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
            link: "#",
        },
        {
            title: "Code to Career: Pre-placement Talk",
            date: "October 8, 2025 at 12:30 AM",
            location: "Google Meet",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
            link: "#",
        },
        {
            title: "Code to Career: Pre-placement Talk",
            date: "October 8, 2025 at 12:30 AM",
            location: "Google Meet",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
            link: "#",
        },
        {
            title: "Code to Career: Pre-placement Talk",
            date: "October 8, 2025 at 12:30 AM",
            location: "Google Meet",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
            link: "#",
        },
    ];

    const previousEvents = Array(8).fill({
        title: "Code to Career: Pre-placement Talk",
        date: "October 8, 2025 at 12:30 AM",
        location: "Google Meet",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
        link: "#",
    });
</script>

<svelte:head>
    <title>Events | Coding Club TKMCE</title>
</svelte:head>

<div class="pt-32 pb-16 container mx-auto px-4">
    <!-- Upcoming Events -->
    <section class="mb-20">
        <div class="flex items-center gap-2 mb-8">
            <h1
                class="text-3xl md:text-4xl font-bold text-white border-b-4 border-blue-500 pb-1 inline-block"
            >
                Upcoming Events
            </h1>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each upcomingEvents as event}
                <EventCard {...event} />
            {/each}
        </div>
    </section>

    <!-- Previous Events -->
    <section>
        <div class="flex items-center gap-2 mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-white">
                Previous Events
            </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each previousEvents as event}
                <EventCard {...event} />
            {/each}
        </div>
    </section>
</div>
