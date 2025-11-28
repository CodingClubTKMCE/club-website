<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
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
            <p class="text-green-500 font-medium">
                # Your adventure starts here
            </p>
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
                        class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>

                <!-- Branch -->
                <div class="space-y-2">
                    <label
                        for="branch"
                        class="text-sm font-medium text-gray-400">Branch</label
                    >
                    <input
                        type="text"
                        id="branch"
                        class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>

                <!-- Batch -->
                <div class="space-y-2">
                    <label for="batch" class="text-sm font-medium text-gray-400"
                        >Batch</label
                    >
                    <input
                        type="text"
                        id="batch"
                        class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>

                <!-- Year -->
                <div class="space-y-2">
                    <label for="year" class="text-sm font-medium text-gray-400"
                        >Year</label
                    >
                    <input
                        type="text"
                        id="year"
                        class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>

                <!-- Email -->
                <div class="space-y-2">
                    <label for="email" class="text-sm font-medium text-gray-400"
                        >Email</label
                    >
                    <input
                        type="email"
                        id="email"
                        placeholder="example@gmail.com"
                        class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white placeholder:text-gray-600 focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>

                <!-- Phone -->
                <div class="space-y-2">
                    <label for="phone" class="text-sm font-medium text-gray-400"
                        >Phone</label
                    >
                    <input
                        type="tel"
                        id="phone"
                        placeholder="XXXXXXXXXX"
                        class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white placeholder:text-gray-600 focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>

                <!-- Password -->
                <div class="space-y-2">
                    <label
                        for="password"
                        class="text-sm font-medium text-gray-400"
                        >Password</label
                    >
                    <input
                        type="password"
                        id="password"
                        class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>

                <!-- Confirm Password -->
                <div class="space-y-2">
                    <label
                        for="confirm-password"
                        class="text-sm font-medium text-gray-400"
                        >Confirm Password</label
                    >
                    <input
                        type="password"
                        id="confirm-password"
                        class="w-full bg-[#1a1a1a] border-none rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>
            </div>

            <div class="pt-4">
                <Button
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
</div>
