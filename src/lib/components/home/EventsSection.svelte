<script lang="ts">
    import EventCard from "$lib/components/EventCard.svelte";
    import { Calendar } from "lucide-svelte";

    const events = [
        {
            title: "Introduction to Web Development",
            date: "Oct 15, 2025",
            location: "Main Auditorium",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "Hackathon 2025: Build the Future",
            date: "Nov 05, 2025",
            location: "CS Department",
            image: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "AI & Machine Learning Workshop",
            date: "Nov 20, 2025",
            location: "Seminar Hall",
            image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "Open Source Contribution Guide",
            date: "Dec 10, 2025",
            location: "Online",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
        },
    ];
</script>

<section class="pt-12 pb-24 bg-black/50 relative">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between mb-12">
            <div>
                <div class="inline-flex items-center gap-2 text-primary mb-2">
                    <Calendar class="w-5 h-5" />
                    <span class="font-medium">Mark Your Calendars</span>
                </div>
                <h2 class="text-4xl font-bold text-white">Upcoming Events</h2>
            </div>
            <a
                href="/events"
                class="hidden md:block text-gray-400 hover:text-primary transition-colors"
                >View All Events &rarr;</a
            >
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each events as event}
                <EventCard {...event} />
            {/each}
        </div>

        <div class="mt-8 text-center md:hidden">
            <a href="/events" class="text-primary font-medium hover:underline"
                >View All Events &rarr;</a
            >
        </div>
    </div>
</section>
