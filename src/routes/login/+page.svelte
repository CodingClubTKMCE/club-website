<script lang="ts">
  import { goto } from "$app/navigation";
  import { API_ENDPOINTS } from "$lib/api";

  import { Button } from "$lib/components/ui/button/index.js";

  let email = $state("");
  let password = $state("");
  let error = $state(false);
  let errorMessage = $state("");

  const login = async () => {
    try {
      const response = await fetch(`${API_ENDPOINTS.LOGIN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ emailID: email, password: password }),
      });

      const data = await response.json();
      if (data.message === "Login successful") {
        await localStorage.setItem("userID", data.user.id);
        await localStorage.setItem("token", data.token);
        goto("/profile");
      } else {
        errorMessage = data.message;
        error = true;
        setTimeout(() => {
          error = false;
        }, 3000);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
</script>

<svelte:head>
  <title>Login | Coding Club TKMCE</title>
</svelte:head>

<div
  class="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
>
  <div class="w-full max-w-md relative z-10">
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-white mb-2">Login</h1>
      <p class="text-green-500 font-medium"># Hi, Welcome Back</p>
    </div>

    <form class="space-y-6">
      <div class="space-y-2">
        <label for="email" class="text-sm font-medium text-gray-400"
          >Email</label
        >
        <input
          required
          type="email"
          id="email"
          placeholder="example@gmail.com"
          class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white placeholder:text-gray-600 focus:ring-1 focus:ring-primary transition-all"
          bind:value={email}
        />
      </div>

      <div class="space-y-2">
        <label for="password" class="text-sm font-medium text-gray-400"
          >Password</label
        >
        <input
          required
          type="password"
          id="password"
          placeholder="Enter your password"
          bind:value={password}
          class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
        />
        <div class="flex justify-end">
          <a href="#" class="text-xs text-gray-400 hover:text-white"
            >Forgot Password?</a
          >
        </div>
      </div>

      <Button
        type="submit"
        onclick={login}
        class="w-full py-6 text-lg bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300"
      >
        Login
      </Button>
    </form>

    <div class="mt-6 text-sm text-gray-400">
      Not registered yet?
      <a href="/register" class="text-primary hover:underline"
        >Create an account</a
      >
    </div>
  </div>
  {#if error}
    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg"
    >
      {errorMessage}
    </div>
  {/if}
</div>
