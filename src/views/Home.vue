<template>
  <div
    class="theme-switch-wrapper xl:p-40 lg:pl-36 md:pl-32 sm:pl-24 pl-14"
    data-theme="light"
  >
    <!-- Sidebar -->
    <aside
      class="h-screen fixed left-0 top-0 flex items-center xl:w-36 lg:w-32 md:w-24 sm:w-16 w-12"
    >
      <a
        href=""
        class="w-full block h-10 text-center mt-8 transition-all ease-in-out opacity-0 transform translate-y-7"
      >
        <img
          class="h-10"
          :src="images.imageThree"
          alt="Matthew Ricklefs Logo"
        />
      </a>

      <ul
        class="flex flex-row justify-center items-center w-full block leading-normal m-0 mt-36 -ml-2 p-0 transform -rotate-90 origin-center left-1/2 top-1/2 text-center"
      >
        <li class="text-sm p-2">
          <a href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/">
            LINKEDIN
          </a>
        </li>

        <li class="text-sm p-2">
          <a href="https://github.com/matthewricklefs">GITHUB</a>
        </li>
      </ul>
    </aside>

    <!-- Header -->
    <header class="w-full">
      <nav class="w-full mb-0">
        <!-- Main Menu -->
        <div class="">
          <ul class="flex flex-row place-content-end">
            <li class="text-sm p-2">
              <a class="">
                <router-link to="/">HOME</router-link>
              </a>
            </li>
            <li class="text-sm p-2">
              <a class="">
                <router-link to="/about">ABOUT</router-link>
              </a>
            </li>
            <li class="text-sm p-2">
              <a class="">
                <router-link to="/contact">CONTACT</router-link>
              </a>
            </li>
          </ul>

          <!-- Theme Switch -->
          <label class="pl-5 theme-switch h-9 relative w-17" for="checkbox">
            <input class="invisible" type="checkbox" id="checkbox" />
            <div @click="toggleSwitch" class="slider round" />
          </label>
        </div>
      </nav>
    </header>

    <!-- Page Title -->
    <div class="w-full mt-12">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none m-0 pb-1"
      >
        Hello, I'm Matthew.
        <br />
        Full Stack Developer
        <br />
        based in New York
      </h1>
    </div>

    <!-- SVG Animation -->
    <section class="w-full flex flex-wrap wave-section">
      <svg
        width="100%"
        height="175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="wave-top"
      >
        <path fill="white" data-theme="light">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="6.66s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
        
                      M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
        
                      M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
        
                      M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                     "
          ></animate>
        </path>
      </svg>

      <figure class="w-full h-full m-0">
        <img class="w-full h-2/5" :src="images.imageTwo" alt="" />
      </figure>

      <svg
        width="100%"
        height="172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="white" data-theme="light">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="3.33s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
        
                      M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
        
                      M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
        
                      M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                     "
          ></animate>
        </path>
      </svg>
    </section>

    <!-- Projects -->
    <section class="p-12 h-full w-full pb-7">
      <!-- See All Projects.. -->
      <div class="flex flex-col items-start justify-end">
        <h2
          class="flex font-medium tracking-normal uppercase text-lg sm:text-xl"
        >
          Explore Projects
        </h2>

        <p class="tracking-wide mb-10 font-light text-xs">
          Check out some of my recent work.
        </p>
      </div>

      <!-- Project Content List Items -->
      <ul class="pr-10 flex flex-row flex-wrap justify-around">
        <li class="w-2/5 list-none basis-1/2">
          <div class="project-box wow fadeInRight">
            <!-- TODO: Insert Projects here -->
            <figure class="project-image reveal-effect masker wow">
              <a href="">
                <img class="rounded-l-full" :src="images.imageTwo" alt="" />
              </a>
            </figure>

            <div class="project-content">
              <h3 class="">
                <a href="">Project 0</a>
              </h3>
              <small>Website for testing lorem ipsum lorem ipsum</small>
            </div>
          </div>
        </li>

        <li class="w-2/5 list-none basis-1/2">
          <div class="project-box wow fadeInLeft">
            <!-- TODO: Insert Projects here -->
            <figure class="project-image reveal-effect masker wow">
              <a href="">
                <img class="rounded-r-full" :src="images.imageTwo" alt="" />
              </a>
            </figure>

            <div class="project-content">
              <h3>
                <a href="">Project 1</a>
              </h3>
              <small>Website for ...</small>
            </div>
          </div>
        </li>

        <li class="w-2/5 list-none basis-1/2">
          <div class="project-box wow fadeInRight">
            <!-- TODO: Insert Projects here -->
            <figure class="project-image reveal-effect masker wow">
              <a href="">
                <img class="rounded-l-full" :src="images.imageTwo" alt="" />
              </a>
            </figure>

            <div class="project-content">
              <h3>
                <a href="">Project 2</a>
              </h3>
              <small>Website for testing lorem ipsum lorem ipsum</small>
            </div>
          </div>
        </li>

        <li class="w-2/5 list-none basis-1/2">
          <div class="project-box wow fadeInLeft">
            <!-- TODO: Insert Projects here -->
            <figure class="project-image reveal-effect masker wow">
              <a href="">
                <img class="rounded-r-full" :src="images.imageTwo" alt="" />
              </a>
            </figure>

            <div class="project-content">
              <h3>
                <a href="">Project 3</a>
              </h3>
              <small>Website for ...</small>
            </div>
          </div>
        </li>
      </ul>

      <!-- View More Projects... -->
      <!-- <div class="custom-link">
        <router-link to="/contact">View More Projects</router-link>

        <span></span>

        <i></i>
      </div> -->
    </section>

    <!-- Explore Ideas -->
    <section class="p-12">
      <div class="container wow fadeInUp">
        <h2
          class="flex font-medium tracking-normal uppercase text-lg sm:text-xl"
        >
          EXPLORE IDEAS
        </h2>
        <p class="tracking-wide mb-10 font-light text-sm sm:text-lg">
          Need a developer for your next project? Let's work together.
        </p>

        <div class="custom-link form-group">
          <button class="rounded-lg" id="submit" type="submit" name="submit">
            <strong class="rounded-lg">
              <router-link to="/contact"><p>Contact Me</p></router-link>

              <b></b>
              <i></i>
            </strong>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="w-full md:p-24 sm:p-6 p-1">
      <div class="flex flex-col justify-around items-center">
        <div class="w-full flex flex-row sm:flex-row sm:justify-between">
          <div
            class="w-full wow fadeInUp flex flex-col place-items-start"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <h5 class="sm:text-md text-sm">Location</h5>

            <address class="sm:text-sm text-xs">
              Brooklyn, NY<br />
              USA
            </address>
          </div>

          <div
            class="w-full flex flex-col place-items-end"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <h5 class="wow fadeInUp sm:text-md text-sm">Say Hello</h5>

            <a class="sm:text-sm text-xs">
              <router-link to="/contact">Contact</router-link>
            </a>
          </div>
        </div>

        <div
          class="w-full flex flex-row basis-1/3 flex-wrap sm:flex-col"
          style="visibility: visible; animation-name: fadeInUp"
        >
          <div>
            <address>© 2021 Matthew Ricklefs - All Rights Reserved.</address>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import "@/assets/styles.scss";

export default {
  name: "Home",
  data() {
    return {
      images: {
        imageOne: require("../assets/images/matty4.jpeg"),
        imageTwo: require("../assets/images/code.jpeg"),
        imageThree: require("../assets/logo.png"),
      },
    };
  },
  methods: {
    toggleSwitch() {
      const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
      );
      function switchTheme(e) {
        if (e.target.checked) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.setAttribute("data-theme", "light");
        }
      }
      toggleSwitch.addEventListener("change", switchTheme, false);
    },
  },
};
</script>
