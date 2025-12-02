<script lang="ts">
    import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-svelte";
    import logo from "$lib/assets/logo.svg";

    const currentYear = new Date().getFullYear();
</script>

<footer class="bg-black border-t border-white/10 pt-16 pb-8">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <!-- Brand -->
            <div class="col-span-1 md:col-span-2 space-y-2">
                <a href="/" class="block w-fit">
                    <img
                        src={logo}
                        alt="Coding Club TKMCE"
                        class="h-50 w-auto"
                    />
                </a>
                <p class="text-gray-400 max-w-sm leading-relaxed">
                    Empowering the next generation of developers at TKM College
                    of Engineering. Join us to code, innovate, and build the
                    future.
                </p>
            </div>

            <!-- Quick Links -->
            <div class="space-y-4">
                <h3 class="text-white font-semibold text-lg">Quick Links</h3>
                <ul class="space-y-2">
                    {#each ["Home", "Events", "Execom", "Login"] as item}
                        <li>
                            <a
                                href={item === "Home"
                                    ? "/"
                                    : `/${item.toLowerCase()}`}
                                class="text-gray-400 hover:text-primary transition-colors duration-200"
                            >
                                {item}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Contact -->
            <div class="space-y-4">
                <h3 class="text-white font-semibold text-lg">Contact</h3>
                <ul class="space-y-3">
                    <li class="flex items-start gap-3 text-gray-400">
                        <MapPin class="w-5 h-5 shrink-0 text-primary mt-1" />
                        <span
                            >TKM College of Engineering,<br />Karicode, Kollam</span
                        >
                    </li>
                    <li>
                        <a
                            href="mailto:codingclub@tkmce.ac.in"
                            class="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                        >
                            <Mail class="w-5 h-5 shrink-0 text-primary" />
                            <span>codingclub@tkmce.ac.in</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div
            class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
            <p class="text-gray-500 text-sm">
                &copy; {currentYear} Coding Club TKMCE. All rights reserved.
            </p>

            <div class="flex gap-4">
                {#each [{ icon: Github, href: "https://github.com/CodingClubTKMCE" }, { icon: Linkedin, href: "https://www.linkedin.com/company/codingclub-tkmce" }, { icon: Instagram, href: "https://www.instagram.com/codingclub_tkmce/" }] as social}
                    <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                    >
                        <social.icon class="w-5 h-5" />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</footer>
