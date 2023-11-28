<template>
    <!-- Logo -->
    <header class="flex  h-24 shadow background1 fixed top-0 w-full z-50">
        <p class="md:w-1/4 w-1/2 justify-end self-center text-center text-lg">
        <span class="bg-black text-white py-2 px-4 rounded-full">P</span
        ><span class="p-1">Pierre Monnier.</span>
        </p>
    <!-- Logo -->
    <!-- link for phone -->

        <nav
        class="text-right flex justify-end self-center w-full absolute md:hidden">
        <button id="toggleNav" class="p-4 ">
            <span class="material-symbols-outlined">menu</span>
        </button>
        </nav>

    <!-- end link for phone -->
    <!-- link for computer -->

        <nav class="my-auto hidden ml-auto  md:block flex-col text-right" id="navLinks">
            <ul class="md:flex text-lg justify-end blurNav shadow sm:shadow-none mt-24 md:mt-0 mr-2">
                <li class="md:p-7 p-4 hover:underline md:hover:scale-110 hover:scale-105  hover:rounded-lg md:hover:scale-105 border-solid border-black border-2 md:border-0 text-center">
                <a href="#home" class="nav-link" @click.prevent="scrollToSection('home')">Home</a>
                </li>
                <li class="md:p-7 p-4 hover:underline md:hover:scale-110 hover:scale-105  hover:rounded-lg md:hover:scale-105 border-solid border-black border-2 md:border-0 text-center">
                <a href="#about-me" class="nav-link" @click.prevent="scrollToSection('about-me')">About Me</a>
                </li>
                <li class="md:p-7 p-4 md:hover:scale-110 hover:underline hover:scale-105 hover:rounded-lg md:hover:scale-105 border-solid border-black border-2 md:border-0 text-center">
                <a href="#projects" class="nav-link" @click.prevent="scrollToSection('projects')">Projects</a>
                </li>
                <li class="p-5 self-center md:bg-black md:text-white md:mr-4 hover:scale-105 hover:rounded-lg border-solid border-black border-2 md:border-0">
                <a href="#contact" class="nav-link" @click.prevent="scrollToSection('contact')">Contact Me</a>
                </li>
            </ul>
        </nav>

        <!-- end link for computer -->

    </header>
</template>
  
  
<script>
    export default {
    name: 'NavbarTop',
    mounted() {
        const toggleNav = document.getElementById('toggleNav');
        const navLinks = document.getElementById('navLinks');

        toggleNav.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        });

        const x = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            if (
            scrollPosition >= section.offsetTop - 100 &&
            scrollPosition <
                section.offsetTop + section.offsetHeight - 100
            ) {
            x.forEach((navLink) => {
                navLink.classList.remove('active');
            });
            x[index].classList.add('active');
            }
        });
        });
    },
    };
</script>