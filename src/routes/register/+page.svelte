<script lang="ts">
  import { goto } from "$app/navigation";
  import { API_ENDPOINTS } from "$lib/api";
  import { Button } from "$lib/components/ui/button/index.js";
  import z from "zod";

  let email = $state("");
  let password = $state("");
  let confirmPassword = $state("");
  let name = $state("");
  let branch = $state("");
  let year = $state("");
  let error = $state(false);
  let errorMessage = $state("");

  const schema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    name: z.string().min(1, "Name is required"),
    branch: z.string().min(1, "Branch is required"),
    year: z.string().min(1, "Year is required"),
  });

  const register = async () => {
    if (password !== confirmPassword) {
      errorMessage = "Passwords do not match!";
      error = true;
      setTimeout(() => {
        error = false;
      }, 3000);
      return;
    }

    error = false;
    errorMessage = "";
    try {
      schema.parse({ email, password, name, branch, year });
      try {
        const res = await fetch(`${API_ENDPOINTS.REGISTER}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name,
            branch,
            emailID: email,
            year,
            password,
          }),
        });

        const responseData = await res.json();

        if (responseData.message === "Member added!") {
          goto("/login");
        } else {
          errorMessage = responseData.message;
          error = true;
          setTimeout(() => {
            error = false;
          }, 3000);
        }
      } catch (error) {
        console.error("Registration failed:", error);
        error = true;
        errorMessage =
          "An error occurred during registration. Please try again.";
        setTimeout(() => {
          error = false;
        }, 3000);
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        err.issues;
        error = true;
        errorMessage = err.issues[0].message;
        setTimeout(() => {
          error = false;
        }, 3000);
      }
    }
  };
</script>

<svelte:head>
  <title>Register | Coding Club TKMCE</title>
</svelte:head>

<div
  class="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20"
>
  <div class="w-full max-w-4xl relative z-10">
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-white mb-2">Register</h1>
      <p class="text-green-500 font-medium"># Your adventure starts here</p>
    </div>

    <form class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Name -->
        <div class="space-y-2">
          <label for="name" class="text-sm font-medium text-gray-400"
            >Name</label
          >
          <input
            type="text"
            id="name"
            required
            bind:value={name}
            class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        <!-- Branch -->
        <!-- Branch -->
        <div class="space-y-2">
          <label for="branch" class="text-sm font-medium text-gray-400"
            >Branch</label
          >
          <select
            id="branch"
            required
            bind:value={branch}
            class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
          >
            <option value="" disabled selected>Select Branch</option>
            <option value="CS">CS</option>
            <option value="AI">AI</option>
            <option value="ER">ER</option>
            <option value="EEE">EEE</option>
            <option value="EEE">ECE</option>
            <option value="Mech">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Chem">Chemical</option>
          </select>
        </div>

        <!-- Year dropdown input -->
        <!-- Year dropdown -->
        <div class="space-y-2">
          <label for="year" class="text-sm font-medium text-gray-400"
            >Year</label
          >
          <select
            id="year"
            required
            bind:value={year}
            class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
          >
            <option value="" disabled selected>Select Year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <!-- Email -->
        <div class="space-y-2">
          <label for="email" class="text-sm font-medium text-gray-400"
            >Email</label
          >
          <input
            required
            type="email"
            id="email"
            bind:value={email}
            placeholder="example@gmail.com"
            class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white placeholder:text-gray-600 focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        <!-- Password -->
        <div class="space-y-2">
          <label for="password" class="text-sm font-medium text-gray-400"
            >Password</label
          >
          <input
            required
            type="password"
            id="password"
            bind:value={password}
            class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        <!-- Confirm Password -->
        <div class="space-y-2">
          <label
            for="confirm-password"
            class="text-sm font-medium text-gray-400">Confirm Password</label
          >
          <input
            required
            type="password"
            id="confirm-password"
            bind:value={confirmPassword}
            class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
      </div>

      <div class="pt-4">
        <Button
          type="submit"
          onclick={register}
          class="w-full md:w-auto px-12 py-6 text-lg bg-primary hover:bg-primary/90 rounded-lg transition-all duration-300"
        >
          Register
        </Button>
      </div>
    </form>

    <div class="mt-6 text-sm text-gray-400">
      Already have an account?
      <a href="/login" class="text-primary hover:underline">Login here</a>
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
