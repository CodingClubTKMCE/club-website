<script lang="ts">
// @ts-nocheck
import { goto } from "$app/navigation";
import { API_ENDPOINTS } from "$lib/api";
import { Button } from "$lib/components/ui/button/index.js";
import { auth } from "$lib/stores/auth";
import { role } from "$lib/stores/role";
import { onMount } from "svelte";
import { z } from "zod";

let email = $state("");
let password = $state("");
let error = $state(false);
let errorMessage = $state("");
let isLoading = $state(false);

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

onMount(() => {
  // If already logged in, redirect to profile
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (token) {
      if (userRole === "true") {
        goto("/admin");
      } else {
        goto("/profile");
      }
    }
  }
});

const login = async () => {
  if (typeof window === "undefined") return;

  error = false;
  errorMessage = "";
  isLoading = true;

  try {
    schema.parse({ email, password });

    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ emailID: email, password: password }),
      });

      const data = await response.json();

      if (data.message === "Login successful") {
        localStorage.setItem("userID", data.user.id);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.isAdmin ? "true" : "false");

        auth.login(data.token);

        if (data.user.isAdmin) {
          role.login(data.user.isAdmin);
          await goto("/admin");
        } else {
          await goto("/profile");
        }
      } else {
        errorMessage = data.message;
        error = true;
        isLoading = false;
        setTimeout(() => {
          error = false;
        }, 3000);
      }
    } catch (err) {
      console.error("Login failed:", err);
      error = true;
      errorMessage = "An error occurred during login. Please try again.";
      isLoading = false;
      setTimeout(() => {
        error = false;
      }, 3000);
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(err.issues[0].message);
      error = true;
      errorMessage = err.issues[0].message;
      isLoading = false;
      setTimeout(() => {
        error = false;
      }, 3000);
    }
  }
};
</script>

<svelte:head>
  <title>Login | Coding Club TKMCE</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
  <div class="w-full max-w-md relative z-10">
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-white mb-2">Login</h1>
      <p class="text-green-500 font-medium"># Hi, Welcome Back</p>
    </div>

    {#if error}
      <div class="bg-red-500/10 border border-red-500/50 rounded-xl p-4 mb-6">
        <p class="text-red-400 text-sm">{errorMessage}</p>
      </div>
    {/if}

    <form on:submit|preventDefault={login} class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          bind:value={email}
          class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
          placeholder="you@example.com"
          required
          disabled={isLoading}
        />
      </div>

      <div>
        <label
          for="password"
          class="block text-sm font-medium text-gray-300 mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          bind:value={password}
          class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
          placeholder="••••••••"
          required
          disabled={isLoading}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        class="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition"
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>

    <div class="mt-6 text-center">
      <p class="text-gray-400 text-sm">
        Don't have an account?
        <a
          href="/register"
          class="text-green-500 hover:text-green-400 font-medium transition"
        >
          Register here
        </a>
      </p>
    </div>
  </div>
</div>
