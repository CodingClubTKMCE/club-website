<script>
  //@ts-nocheck
  import { API_ENDPOINTS } from "$lib/api";

  let userID = "";
  let user = null;

  const fetchProfile = async () => {
    try {
      userID = localStorage.getItem("userID");

      if (!userID) return;

      const response = await fetch(`${API_ENDPOINTS.PROFILE}/${userID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await response.json();
      user = data;
    } catch (error) {
      console.error("Fetching profile failed:", error);
    }
  };

  fetchProfile();

  function getInitials(name) {
    if (!name) return "CC";
    return name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0].toUpperCase())
      .join("");
  }
</script>

<!-- MAIN PAGE -->
<div class="min-h-screen bg-black text-gray-100 pt-32 pb-16 px-4">
  <div class="max-w-6xl mx-auto">
    <!-- Greeting + user summary -->
    <section class="grid grid-cols-1 md:grid-cols-[2fr,1.2fr] gap-8 mb-10">
      <!-- LEFT PANEL -->
      <div
        class="bg-gradient-to-br from-zinc-900/90 to-black border border-zinc-800/80 rounded-3xl p-8 shadow-xl"
      >
        <p class="text-xs uppercase tracking-[0.22em] text-gray-500 mb-3">
          Dashboard
        </p>

        <h1 class="text-3xl font-semibold tracking-tight mb-2">
          Welcome back,
          {#if user}
            <span
              class="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent"
            >
              {user.name}
            </span>
          {:else}
            Loading...
          {/if}
        </h1>

        <p class="text-sm text-gray-400 mb-6 max-w-md">
          Here’s a quick overview of your profile and event activity.
        </p>

        <!-- QUICK STATS -->
        {#if user}
          <div class="grid grid-cols-3 gap-4 text-sm">
            <div
              class="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3"
            >
              <p class="text-gray-500 mb-1">Year</p>
              <p class="text-gray-100 font-medium">{user.year}</p>
            </div>

            <div
              class="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3"
            >
              <p class="text-gray-500 mb-1">Branch</p>
              <p class="text-gray-100 font-medium">{user.branch}</p>
            </div>
          </div>
        {/if}
      </div>

      <!-- RIGHT PROFILE CARD -->
      <div
        class="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 flex flex-col"
      >
        {#if user}
          <div class="flex items-center gap-4 mb-6">
            <!-- Avatar -->
            <div
              class="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-800 flex items-center justify-center text-xl font-semibold shadow-xl"
            >
              {getInitials(user.name)}
            </div>

            <div>
              <p class="text-xs uppercase tracking-[0.22em] text-gray-500">
                Member Profile
              </p>
              <p class="text-lg font-semibold text-gray-100">{user.name}</p>
              <p class="text-xs text-gray-400 mt-1">
                {user.branch}, Year {user.year}
              </p>
            </div>
          </div>

          <!-- Meta Info -->
          <div class="space-y-2 text-xs text-gray-400 mb-6">
            <p class="flex items-center gap-2">
              <span class="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
              {user.emailID}
            </p>
            <p class="flex items-center gap-2">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Status:
              <span class="text-gray-200 font-medium ml-1">Active Member</span>
            </p>
          </div>
        {:else}
          <div class="animate-pulse text-gray-500">Loading profile...</div>
        {/if}
      </div>
    </section>

    <!-- Lower section: placeholder for events or registrations -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-8"></section>

    <!-- Logout -->
    <div class="mt-12">
      <button
        on:click={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("userID");
          window.location.href = "/";
        }}
        class="px-6 py-2 rounded-full bg-red-600/80 hover:bg-red-600 transition text-sm"
      >
        Logout
      </button>
    </div>
  </div>
</div>
