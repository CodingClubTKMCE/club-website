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
      name: "Rayah Ruquiah",
      role: "Chief Coordinator",
      image: "/images/Rayah.jpeg",
      linkedin: "http://www.linkedin.com/in/rayahruquiah/",
    },
  ];

  const programCore = [
    {
      name: "Michael",
      role: "ProgramCore",
      image: "/images/Michael.jpeg",
      linkedin: "https://www.linkedin.com/in/sivanandana-j-p-33a763328",
    },
    {
      name: "Haya",
      role: "ProgramCore",
      image: "/images/Haya.jpeg",
      linkedin: "https://www.linkedin.com/in/haya-sreekumar-pillai-a2174a32a",
    },
    {
      name: "Ann",
      role: "ProgramCore",
      image: "/images/Ann.jpeg,
      linkedin: "https://www.linkedin.com/in/ann-nova-966682380",
    },
    {
      name: "Vinay",
      role: "ProgramCore",
      image: "/images/Vinay.jpeg,
      linkedin: "https://www.linkedin.com/in/vinaysnairr/",
    },
    {
      name: "Aaisha",
      role: "ProgramCore",
      image: "/images/Aaisha.jpeg,
      linkedin: "http://www.linkedin.com/in/aaisha-sidhik-",
    },
  ];


  const finance = [
    {
      name: "Kevin",
      role: "Finance Head",
      image: "/images/Kevin.png",
      linkedin: "https://www.linkedin.com/in/kevin-reji-42b893218?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  const mediaTeam = [
    {
      name: "Siddharth",
      role: "Media Team",
      image: "/images/Siddharth.jpeg",
      linkedin: "https://www.linkedin.com/in/anish-ramdas-65ab14376",
    },
    {
      name: "Abhinand",
      role: "Media Team",
      image: "/images/Abhinand.jpeg",
      linkedin: "https://www.linkedin.com/in/sreya-s-aa6a2336b",
    },
    {
      name: "Anushka",
      role: " Media Team",
      image: "/images/Anushka.jpeg",
      linkedin: "http://www.linkedin.com/in/anushka-unmesh-a-82a2b6397?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  const docTeam = [
    {
      name: "Nikhil",
      role: "Documentation",
      image: "/images/Nikhil.jpeg",
      linkedin: "https://www.linkedin.com/in/nikhil--johnson/",
    },
    {
      name: "Fahad",
      role: "Documentation",
      image: "/images/Fahad.jpeg",
      linkedin: "https://www.linkedin.com/in/fahad-s-rahuman-96612b36b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Hafia",
      role: "Documentation",
      image: "/images/Hafia.jpeg",
      linkedin: "https://www.linkedin.com/in/haifa-muhammed-ali-etp-489375380",
    },
  ];

  const designTeam = [
    {
      name: "Saniya",
      role: "Design",
      image: "/images/Saniya.jpeg",
      linkedin: "https://www.linkedin.com/in/saniya-jose-93407b328/",
    },
    {
      name: "Bhagath",
      role: "Design",
      image: "/images/Bhagath.jpeg",
      linkedin: "https://www.linkedin.com/in/angelina-rose-9b312b324",
    },
    {
      name: "Sayooj",
      role: "Design",
      image: "/images/Sayooj.jpeg",
      linkedin: "https://www.linkedin.com/in/sayooj-op",
    },
    {
      name: "Gopika",
      role: "Design",
      image: "/images/Gopika.jpeg",
      linkedin: "https://www.linkedin.com/in/gopika-sanjay-28aa35375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  const technicalTeam = [
    {
      name: "Ankitha",
      role: "Technical",
      image: "/images/Ankitha.png",
      linkedin: "https://www.linkedin.com/in/ankitha-s-4333863b5?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Athulyathej",
      role: "Technical",
      image: "/images/Athulyathej.jpeg",
      linkedin: "https://www.linkedin.com/in/athulyathej-u-40b81637a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Abhiram",
      role: "Technical",
      image: "/images/Abhiram.jpeg",
      linkedin: "http://www.linkedin.com/in/abhiram-a-v,
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
        class="text-6xl md:text-8xl font-bold text-[#3d3d3d] mb-4 tracking-tighter uppercase select-none"
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

    
    <!-- Media Team --> 
    <section class="mb-24"> 
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center"> 
        Media Team 
      </h2> 
      <div 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center" 
      > 
        {#each mediaTeam as member} 
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
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center"
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
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center"
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
