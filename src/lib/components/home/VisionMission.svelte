<script lang="ts">
    import { Eye, Target, Heart } from "lucide-svelte";
</script>

<section class="pt-3 pb-24 relative overflow-hidden bg-black">
    <div class="container mx-auto px-4">
        <!-- Description Text -->
        <div class="max-w-4xl mx-auto text-center mb-20 relative z-10">
            <div
                class="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl"
            >
                <p class="text-gray-300 text-lg md:text-xl leading-relaxed">
                    Coding club TKMCE is an initiative to inculcate the culture
                    of programming and development in our institute. We create a
                    platform which allows students to gain assistance and
                    mentorship to enhance their coding ability. We ensure that
                    every student here at TKMCE should have an opportunity to
                    learn how to code and develop a passion for it. Our aim is
                    to impart and instill this culture of learning-by-practice
                    among students and professionals alike, and to that end, our
                    team organizes a multitude of events throughout the year.
                </p>
            </div>
        </div>

        <!-- Cards -->
        <div
            class="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto relative z-10 perspective-1000"
        >
            <!-- Vision Card -->
            <div
                class="group relative flex-1 transition-all duration-500 hover:z-20 hover:scale-105"
            >
                <div
                    class="h-full bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center shadow-xl transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]"
                >
                    <!-- Purple Eye Icon -->
                    <div class="mb-8 relative">
                        <div
                            class="absolute inset-0 bg-primary/20 blur-xl rounded-full"
                        ></div>
                        <Eye class="w-16 h-16 text-primary relative z-10" />
                    </div>

                    <h3 class="text-3xl font-bold text-white mb-6">Vision</h3>
                    <p class="text-gray-400 leading-relaxed">
                        To inculcate the culture of programming and development
                        among students and to enhance their coding ability.
                    </p>
                </div>
            </div>

            <!-- Mission Card (Center - Prominent) -->
            <div
                class="group relative flex-1 transition-all duration-500 hover:z-20 hover:scale-110 z-10 -my-4 md:-my-8"
            >
                <div
                    class="h-full bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(139,92,246,0.25)] relative overflow-hidden"
                >
                    <!-- Purple Target Icon -->
                    <div class="mb-8 relative">
                        <div
                            class="absolute inset-0 bg-primary/20 blur-xl rounded-full"
                        ></div>
                        <Target class="w-16 h-16 text-primary relative z-10" />
                    </div>

                    <h3 class="text-3xl font-bold text-white mb-6">Mission</h3>
                    <p class="text-gray-400 leading-relaxed">
                        To create a platform to impart and instill this culture
                        of learning-by-practice among students and professionals
                        alike, and to that end, our team organizes a multitude
                        of events throughout the year.
                    </p>
                </div>
            </div>

            <!-- Vision Card (Duplicate for symmetry as per screenshot suggestion or just another value card) -->
            <div
                class="group relative flex-1 transition-all duration-500 hover:z-20 hover:scale-105"
            >
                <div
                    class="h-full bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center shadow-xl transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]"
                >
                    <!-- Purple Heart Icon -->
                    <div class="mb-8 relative">
                        <div
                            class="absolute inset-0 bg-primary/20 blur-xl rounded-full"
                        ></div>
                        <Heart class="w-16 h-16 text-primary relative z-10" />
                    </div>

                    <h3 class="text-3xl font-bold text-white mb-6">Values</h3>
                    <p class="text-gray-400 leading-relaxed">
                        To inculcate the culture of programming and development
                        among students and to enhance their coding ability.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .perspective-1000 {
        perspective: 1000px;
    }
</style>
