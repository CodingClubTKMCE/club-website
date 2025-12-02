<script lang="ts">
    import ProfileCard from "$lib/components/ProfileCard.svelte";
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    // Sample data with realistic images
    const faculty = {
        name: "Dr. Shameem Ansar",
        role: "Faculty Incharge",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
        linkedin: "#",
    };

    const chiefCoordinators = [
        {
            name: "Alan Saji",
            role: "Chief Coordinator",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Shikha Rajeev",
            role: "Chief Coordinator",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
    ];

    const programCore = [
        {
            name: "Shawn Sabu",
            role: "Member",
            image: "/shawn-sabu.jpg",
            linkedin: "#",
        },
        {
            name: "John Doe",
            role: "Member",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Jane Smith",
            role: "Member",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
    ];

    const programCoordinators = [
        {
            name: "Alan Saji",
            role: "Head",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Sarah Johnson",
            role: "Head",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
    ];

    const finance = [
        {
            name: "Finance Lead",
            role: "Head",
            role: "Head",
            image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 1",
            role: "Member",
            image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 2",
            role: "Member",
            image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 3",
            role: "Member",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
    ];

    const prTeam = [
        {
            name: "PR Lead",
            role: "Head",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 1",
            role: "Member",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 2",
            role: "Member",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 3",
            role: "Member",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
    ];

    const docTeam = [
        {
            name: "Doc Lead",
            role: "Head",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 1",
            role: "Member",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 2",
            role: "Member",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
    ];

    const designTeam = [
        {
            name: "Design Lead",
            role: "Head",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 1",
            role: "Member",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 2",
            role: "Member",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 3",
            role: "Member",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
    ];

    const technicalTeam = [
        {
            name: "Tech Lead",
            role: "Head",
            image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 1",
            role: "Member",
            image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 2",
            role: "Member",
            image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
        {
            name: "Member 3",
            role: "Member",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
            linkedin: "#",
        },
    ];

    let mounted = $state(false);
    onMount(() => {
        mounted = true;
    });
</script>

<svelte:head>
    <title>Execom | Coding Club TKMCE</title>
</svelte:head>

{#if mounted}
    <div
        class="pt-28 pb-16 container mx-auto px-4"
        transition:fade={{ duration: 300 }}
    >
        <!-- Header with CORE text -->
        <div class="text-center mb-20">
            <h1
                class="text-6xl md:text-8xl font-bold text-[#0d0d0d] mb-4 tracking-tighter uppercase select-none"
            >
                CORE
            </h1>
        </div>

        <!-- Faculty & Chief Coordinators Section -->
        <div class="relative max-w-5xl mx-auto mb-32">
            <!-- Faculty at Top Center -->
            <div class="flex justify-center mb-12">
                <ProfileCard {...faculty} size="large" />
            </div>

            <!-- Chief Coordinators Below -->
            <div class="flex flex-wrap justify-center gap-8 md:gap-16">
                {#each chiefCoordinators as member}
                    <ProfileCard {...member} size="medium" />
                {/each}
            </div>
        </div>

        <hr class="border-white/10 mb-20 max-w-6xl mx-auto" />

        <!-- Program Core -->
        <section class="mb-24">
            <h2
                class="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
                Program Core
            </h2>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center"
            >
                {#each programCore as member}
                    <ProfileCard {...member} size="medium" />
                {/each}
            </div>
        </section>

        <hr class="border-white/10 mb-20 max-w-6xl mx-auto" />

        <!-- Program Coordinators -->
        <section>
            <h2
                class="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
                Program Coordinators
            </h2>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto justify-items-center"
            >
                {#each programCoordinators as member}
                    <ProfileCard {...member} size="medium" />
                {/each}
            </div>
        </section>

        <hr class="border-white/10 mb-20 max-w-6xl mx-auto" />

        <!-- Finance Team -->
        <section class="mb-24">
            <h2
                class="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
                Finance Team
            </h2>
            <div class="flex justify-center max-w-5xl mx-auto">
                {#each finance as member}
                    <ProfileCard {...member} size="medium" />
                {/each}
            </div>
        </section>

        <hr class="border-white/10 mb-20 max-w-6xl mx-auto" />

        <!-- Design Team -->
        <section class="mb-24">
            <h2
                class="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
                Design Team
            </h2>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto justify-items-center"
            >
                {#each designTeam as member}
                    <ProfileCard {...member} size="medium" />
                {/each}
            </div>
        </section>

        <hr class="border-white/10 mb-20 max-w-6xl mx-auto" />

        <!-- Technical Team -->
        <section class="mb-24">
            <h2
                class="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
                Technical Team
            </h2>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto justify-items-center"
            >
                {#each technicalTeam as member}
                    <ProfileCard {...member} size="medium" />
                {/each}
            </div>
        </section>

        <hr class="border-white/10 mb-20 max-w-6xl mx-auto" />

        <!-- Public Relations Team -->
        <section class="mb-24">
            <h2
                class="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
                Public Relations Team
            </h2>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto justify-items-center"
            >
                {#each prTeam as member}
                    <ProfileCard {...member} size="medium" />
                {/each}
            </div>
        </section>

        <hr class="border-white/10 mb-20 max-w-6xl mx-auto" />

        <!-- Documentation Team -->
        <section>
            <h2
                class="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
                Documentation Team
            </h2>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center"
            >
                {#each docTeam as member}
                    <ProfileCard {...member} size="medium" />
                {/each}
            </div>
        </section>
    </div>
{/if}
