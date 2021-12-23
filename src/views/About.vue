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
        <div class="main-menu">
          <ul class="flex flex-row place-content-end">
            <li class="text-sm p-2">
              <a>
                <router-link to="/">Home</router-link>
              </a>
            </li>
            <li class="text-sm p-2">
              <a>
                <router-link to="/about">About</router-link>
              </a>
            </li>
            <li class="text-sm p-2">
              <a>
                <router-link to="/contact">Contact</router-link>
              </a>
            </li>
          </ul>
        </div>

        <!-- Theme Switch -->
        <label class="theme-switch pl-5 h-9 relative w-17" for="checkbox">
          <input class="invisible" type="checkbox" id="checkbox" />
          <div @click="toggleSwitch" class="slider round"></div>
        </label>
      </nav>

      <!-- Page Title -->
      <div class="w-full mt-12">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none m-0 pb-1"
        >
          About
        </h1>
      </div>
    </header>

    <!-- Page Title -->
    <section class="w-full flex flex-wrap wave-section p-6">
      <svg
        class="pl-6 pr-6 pb-6 wave-top"
        width="100%"
        height="175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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

      <figure class="">
        <img class="opacity-80 p-12 mb-2" :src="images.imageTwo" alt="" />
      </figure>

      <svg
        class="pl-6 pr-6 pb-6"
        width="100%"
        height="249"
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

    <!-- About Intro -->
    <section class="w-full h-full flex-wrap p-12">
      <div class="">
        <div
          class="flex flex-row justify-center items-center xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse"
        >
          <div class="basis-2/3 max-w-2/3">
            <h3
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none pb-2 md:pb-6"
            >
              Hello, I'm Matthew. I design and code for the web.
            </h3>

            <div class="custom-link">
              <a
                href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/"
                target="_blank"
                rel="noopener"
                >More about that here</a
              >
              <span></span> <i></i>
            </div>

            <p class="text-sm sm:text-lg pt-3">
              I'm a Full Stack Developer with a passion for developing beautiful
              and functional websites and applications. I have 2 years of
              experience designing for web but am most passionate about solving
              real-world problems utilizing technology at the intersection of
              design and code.
            </p>
          </div>

          <div class="flex items-center justify-center place-">
            <img
              class="shadow-md object-contain rounded-2xl h-full w-full max-w-lg p-12 mb-12 -mt-28"
              :src="images.imageOne"
              alt="picture of Matthew"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Skills ----------------------------- -->
    <section class="p-12">
      <div class="container">
        <div class="col-12">
          <h6
            class="flex font-medium tracking-normal uppercase text-lg sm:text-xl"
          >
            SKILLS
          </h6>

          <p class="tracking-wide mb-10 font-light text-sm sm:text-lg">
            I love learning new things. Here are a few topics I am proficient
            in:
          </p>
        </div>

        <div
          class="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col"
        >
          <figure
            class="flex flex-col h-full m-4 border-solid border-1 hover:blur-10 hover:opacity-5 transition-all delay-75"
          >
            <img
              class="max-h-24 opacity-30 p-4 object-contain relative"
              :src="icons.ui"
              alt="ui design and planning icon"
            />
            <figcaption class="p-5 text-center">
              <span class="text-md font-light mb-3">01</span>
              <h4 class="text-lg font-semibold mb-0">UI DESIGN + PLANNING</h4>
            </figcaption>
          </figure>

          <figure
            class="flex flex-col h-full m-4 border-solid border-1 hover:blur-10 hover:opacity-5 transition-all delay-75"
          >
            <img
              class="max-h-24 opacity-30 p-4 object-contain relative"
              :src="icons.front"
              alt="front end development icon"
            />
            <figcaption class="p-5 text-center">
              <span class="text-md font-light mb-3">02</span>
              <h4 class="text-lg font-semibold mb-0">FRONT END DEVELOPMENT</h4>
            </figcaption>
          </figure>

          <figure
            class="flex flex-col h-full m-4 border-solid border-1 hover:blur-10 hover:opacity-5 transition-all delay-75"
          >
            <img
              class="max-h-24 opacity-30 p-4 object-contain relative"
              :src="icons.back"
              alt="back end development icon"
            />
            <figcaption class="p-5 text-center">
              <span class="text-md font-light mb-3">03</span>
              <h4 class="text-lg font-semibold mb-0">BACK END DEVELOPMENT</h4>
            </figcaption>
          </figure>

          <figure
            class="flex flex-col h-full m-4 border-solid border-1 hover:blur-10 hover:opacity-5 transition-all delay-75"
          >
            <img
              class="max-h-24 opacity-30 p-4 object-contain relative"
              :src="icons.ux"
              alt="ux best practices icon"
            />
            <figcaption class="p-5 text-center">
              <span class="text-md font-light mb-3">04</span>
              <h4 class="text-lg font-semibold mb-0">UX BEST PRACTICES</h4>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Technologies ------------------- -->
    <section class="w-full flex flex-col p-12">
      <div class="w-full pr-4">
        <div class="flex flex-col flex-wrap text-left w-full mb-20">
          <h6
            class="flex font-medium tracking-normal uppercase text-lg sm:text-xl"
          >
            TECHNOLOGIES
          </h6>
          <p class="tracking-wide mb-10 font-light text-sm sm:text-lg">
            Some tech I'm currently working with.
          </p>
        </div>

        <ul class="flex flex-row w-3/4 text-center">
          <li class="wow fadeInUp w-1/5 m-0 list-none" data-wow-delay="0.50s">
            <figure class="w-full mb-10 items-center p-6">
              <img
                class="self-center"
                :src="logos.vue"
                width="73"
                alt="react logo"
              />
            </figure>
          </li>

          <li class="wow fadeInUp w-1/5 m-0 list-none" data-wow-delay="0.60s">
            <figure class="w-full mb-10 items-center p-6">
              <img
                class="self-center"
                :src="logos.react"
                height="73"
                alt="redux logo"
              />
            </figure>
          </li>

          <li class="wow fadeInUp w-1/5 m-0 list-none" data-wow-delay="0.70s">
            <figure class="w-full mb-10 items-center p-6">
              <img
                class="self-center"
                :src="logos.mongo"
                width="73"
                alt="mongo logo"
              />
            </figure>
          </li>

          <li class="wow fadeInUp w-1/5 m-0 list-none" data-wow-delay="0.80s">
            <figure class="w-full mb-10 items-center p-6">
              <img
                class="self-center"
                :src="logos.express"
                height="73"
                alt="express logo"
              />
            </figure>
          </li>

          <li class="wow fadeInUp w-1/5 m-0 list-none" data-wow-delay="0.90s">
            <figure class="w-full mb-10 items-center p-6">
              <img
                class="self-center"
                :src="logos.node"
                height="73"
                alt="node logo"
              />
            </figure>
          </li>
        </ul>

        <ul class="flex flex-row w-3/4 text-center">
          <li class="wow fadeInUp w-1/5 m-0 list-none" data-wow-delay="1s">
            <figure class="w-full mb-10 items-center p-6">
              <img
                class="self-center"
                :src="logos.nuxt"
                width="73"
                alt="next logo"
              />
            </figure>
          </li>

          <li class="wow fadeInUp w-1/5 m-0 list-none" data-wow-delay="1.1s">
            <figure class="w-full mb-10 items-center p-6">
              <img
                class="self-center"
                :src="logos.next"
                width="73"
                height="73"
                alt="prisma logo"
              />
            </figure>
          </li>

          <li class="wow fadeInUp w-1/5 m-0 list-none" data-wow-delay="1.2s">
            <figure class="w-full mb-10 items-center p-6">
              <img
                class="coder self-center"
                :src="images.imageFour"
                height="73"
                alt="prisma logo"
              />
            </figure>
          </li>

          <li class="wow fadeInUp w-1/5 m-0 list-none" data-wow-delay="1.3s">
            <figure class="w-full mb-10 items-center p-6">
              <img
                class="self-center"
                :src="logos.graphQl"
                height="73"
                alt="graphql logo"
              />
            </figure>
          </li>

          <li class="wow fadeInUp w-1/5 m-0 list-none" data-wow-delay="1.4s">
            <figure class="w-full mb-10 items-center p-6">
              <img
                class="self-center"
                :src="logos.aws"
                width="73"
                alt="gatsby logo"
              />
            </figure>
          </li>
        </ul>
      </div>
    </section>

    <!-- Explore Ideas -->
    <section class="p-12">
      <div class="container wow fadeInUp">
        <h2 class="flex font-thin tracking-normal uppercase text-lg sm:text-xl">
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
        imageOne: require("../assets/images/matty6.jpeg"),
        imageTwo: require("../assets/images/code.jpeg"),
        imageThree: require("../assets/logo.png"),
        imageFour: require("../assets/images/coder-zen.png"),
      },
      logos: {
        express: require("../assets/images/express-logo.png"),
        aws: require("../assets/images/aws-logo.png"),
        graphQl: require("../assets/images/graphql-logo.svg"),
        mongo: require("../assets/images/mongodb-logo.svg"),
        nuxt: require("../assets/images/nuxt.png"),
        node: require("../assets/images/node-logo.svg"),
        next: require("../assets/images/next-logo.svg"),
        redux: require("../assets/images/redux-logo.svg"),
        react: require("../assets/images/react-logo.svg"),
        vue: require("../assets/logo.png"),
      },
      icons: {
        ui: require("../assets/images/icon01.svg"),
        front: require("../assets/images/icon02.svg"),
        back: require("../assets/images/icon03.svg"),
        ux: require("../assets/images/icon04.svg"),
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

<style lang="scss">
.theme-switch-wrapper {
  em {
    margin-left: 10px;
    font-size: 1rem;
  }
}
.theme-switch {
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display: none;
}

.slider {
  background-color: #607d8c;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 26px;
}

input:checked + .slider {
  background-color: #b3bc6d;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
  background-color: grey;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
