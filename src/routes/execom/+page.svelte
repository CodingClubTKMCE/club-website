<script lang="ts">
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  // Sample data with realistic images
  const faculty = {
    name: "Dr. Shameem Ansar",
    role: "Faculty Incharge",
    image: "/images/Shameem.png",
  };

  const chiefCoordinators = [
    {
      name: "Alan Saji",
      role: "Chief Coordinator",
      image: "/images/Alan.png",
      linkedin: "https://www.linkedin.com/in/alansj",
    },
    {
      name: "Shikha Rajeev",
      role: "Chief Coordinator",
      image: "/images/Shikha.png",
      linkedin: "https://www.linkedin.com/in/shikha-rajeev-586808300",
    },
  ];

  const programCore = [
    {
      name: "Sivanandana",
      role: "ProgramCore",
      image: "/images/Sivanandana.png",
      linkedin: "https://www.linkedin.com/in/sivanandana-j-p-33a763328",
    },
    {
      name: "Haya",
      role: "ProgramCore",
      image: "/images/Haya.png",
      linkedin: "https://www.linkedin.com/in/haya-sreekumar-pillai-a2174a32a",
    },
    {
      name: "Sreeram",
      role: "ProgramCore",
      image: "/images/Sreeram.png",
      linkedin: "https://www.linkedin.com/in/sreeram-paruvayakode-ab84a6332",
    },
  ];

  const programCoordinators = [
    {
      name: "Asiya",
      role: "Program Coordinator",
      image: "/images/Asiya.png",
      linkedin: "https://www.linkedin.com/in/asiya-salam",
    },
    {
      name: "Rayah",
      role: "Program Coordinator",
      image: "/images/Rayah.png",
      linkedin: "https://www.linkedin.com/in/rayah-ruquiah-912880282",
    },
  ];

  const finance = [
    {
      name: "Jobin",
      role: "Finance Head",
      image: "/images/Jobin.png",
      linkedin: "https://www.linkedin.com/in/jobin-a-j-75b249324",
    },
  ];

  const prTeam = [
    {
      name: "Anish",
      role: "Public Relations",
      image: "/images/Anish.png",
      linkedin: "https://www.linkedin.com/in/anish-ramdas-65ab14376",
    },
    {
      name: "Sreya S",
      role: "Public Relations",
      image: "/images/Sreya S.png",
      linkedin: "https://www.linkedin.com/in/sreya-s-aa6a2336b",
    },
    {
      name: "Kevin",
      role: " Public Relations",
      image: "/images/Kevin.png",
      linkedin: "https://www.linkedin.com/in/kevin-reji-42b893218/",
    },
  ];

  const docTeam = [
    {
      name: "Harisankar",
      role: "Documentation",
      image: "/images/Harisankar.png",
      linkedin: "https://www.linkedin.com/in/harisankar-s-0741b22a4",
    },
    {
      name: "Shadha",
      role: "Documentation",
      image: "/images/Shadha.png",
      linkedin: "https://www.linkedin.com/in/shadhashareef05",
    },
    {
      name: "Sreya",
      role: "Documentation",
      image: "/images/Sreya M.png",
      linkedin: "https://www.linkedin.com/in/sreya-maxwel-40b443328",
    },
  ];

  const designTeam = [
    {
      name: "Dino",
      role: "Design",
      image: "/images/Dino.png",
      linkedin: "https://www.linkedin.com/in/dino-saji-sam-",
    },
    {
      name: "Angelina",
      role: "Design",
      image: "/images/Angelina.png",
      linkedin: "https://www.linkedin.com/feed/",
    },
    {
      name: "Joshua",
      role: "Design",
      image: "/images/Joshua.png",
      linkedin: "https://www.linkedin.com/feed/",
    },
    {
      name: "Saniya",
      role: "Design",
      image: "/images/Saniya.png",
      linkedin: "https://www.linkedin.com/in/saniya-jose-93407b328",
    },
  ];

  const technicalTeam = [
    {
      name: "Swarag",
      role: "Technical",
      image: "/images/Swarag.png",
      linkedin: "https://www.linkedin.com/in/swarag-siby",
    },
    {
      name: "Sreedhar",
      role: "Technical",
      image: "/images/Sreedhar.png",
      linkedin: "https://in.linkedin.com/in/sreedhar-santhosh-a3772b227",
    },
    {
      name: "Shawn",
      role: "Technical",
      image: "/images/Shawn.png",
      linkedin: "https://www.linkedin.com/in/shawn-sabu-790739322",
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
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
