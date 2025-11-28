<script lang="ts">
    import ProfileCard from "$lib/components/ProfileCard.svelte";
    import { Users } from "lucide-svelte";

    const coreTeam = [
        {
            name: "Alex Johnson",
            role: "President",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
        },
        {
            name: "Sarah Williams",
            role: "Vice President",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        },
        {
            name: "Michael Chen",
            role: "Secretary",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
        },
    ];

    const coordinators = [
        {
            name: "Emily Davis",
            role: "Tech Lead",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
        },
        {
            name: "David Wilson",
            role: "Event Lead",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        },
        {
            name: "Jessica Taylor",
            role: "Media Lead",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
        },
        {
            name: "James Brown",
            role: "Outreach Lead",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
        },
    ];
</script>

<section class="py-24 relative overflow-hidden">
    <!-- Background decoration -->
    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10"
    ></div>

    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 text-primary mb-2">
                <Users class="w-5 h-5" />
                <span class="font-medium">Meet the Team</span>
            </div>
            <h2 class="text-4xl font-bold text-white mb-4">Program Core</h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
                The minds behind the magic.
            </p>
        </div>

        <!-- Core Team -->
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            {#each coreTeam as member}
                <ProfileCard
                    {...member}
                    socials={{
                        github: "#",
                        linkedin: "#",
                        email: "test@example.com",
                    }}
                />
            {/each}
        </div>

        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-white mb-4">
                Program Coordinators
            </h2>
        </div>

        <!-- Coordinators -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {#each coordinators as member}
                <ProfileCard
                    {...member}
                    socials={{ github: "#", linkedin: "#" }}
                />
            {/each}
        </div>
    </div>
</section>
