<template>
  <div class="theme-switch-wrapper" data-theme="light">
    <!-- Navigation -->
    <div class="navigation-menu" name="theme">
      <div class="inner">
        <div class="side-menu">
          <ul>
            <li>
              <a>
                <router-link to="/about">About</router-link>
              </a>
            </li>
            <li>
              <a href="projects.html">Projects</a>
            </li>
            <li>
              <a href="contact.html">Content</a>
            </li>
          </ul>
        </div>

        <!-- Ham Contents -->
        <div class="sides">
          <div>
            <h1>Thanks for stopping by!</h1>
            <p>
              I'm currently open to new opportunities. If you think I might be a
              good fit for your next project,
              <a href="/contact.html" class="white-text">
                <strong>let's chat!</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <aside class="left-side">
      <a href="" class="logo sticky">
        <img :src="images.imageThree" alt="Matthew Ricklefs Logo" />
      </a>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/matthew-ricklefs-13284a1b9/">
            LINKEDIN
          </a>
        </li>
        <li>
          <a href="https://github.com/matthewricklefs">GITHUB</a>
        </li>
      </ul>
      <a href="" class="gotop"> </a>
    </aside>

    <!-- Header -->
    <header class="header">
      <nav class="navbar">
        <!-- Main Menu -->
        <div class="main-menu">
          <ul>
            <li>
              <a>
                <router-link to="/">Home</router-link>
              </a>
            </li>
            <li>
              <a>
                <router-link to="/about">About</router-link>
              </a>
            </li>
            <li>
              <a>
                <router-link to="/contact">Contact</router-link>
              </a>
            </li>
          </ul>
        </div>

        <!-- Theme Switch -->
        <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" />
          <div @click="toggleSwitch" class="slider round"></div>
        </label>
      </nav>

      <!-- Page Title -->
      <div class="headlines">
        <div class="container">
          <h1>
            Hello, I'm Matthew.
            <br />
            Full Stack Developer
            <br />
            based in New York
          </h1>
        </div>
      </div>
    </header>

    <!-- Page Title -->
    <section class="page-header wave-section">
      <svg
        width="100%"
        height="172"
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

      <figure>
        <img :src="images.imageTwo" alt="" />
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
    <section class="works">
      <div class="container">
        <!-- Project Content List Items -->
        <ul>
          <!-- See All Projects.. -->
          <li class="titles">
            <h2>Explore Projects</h2>
            <p>Check out some of my recent work.</p>
          </li>

          <li>
            <div class="project-box wow fadeInRight">
              <!-- TODO: Insert Projects here -->
              <figure class="project-image reveal-effect masker wow">
                <a href="">
                  <img :src="images.imageTwo" alt="" />
                </a>
              </figure>

              <div class="project-content">
                <h3>
                  <a href="">Project 0</a>
                </h3>
                <small>Website for testing lorem ipsum lorem ipsum</small>
              </div>
            </div>
          </li>

          <li>
            <div class="project-box wow fadeInLeft">
              <!-- TODO: Insert Projects here -->
              <figure class="project-image reveal-effect masker wow">
                <a href="">
                  <img :src="images.imageTwo" alt="" />
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

          <li>
            <div class="project-box wow fadeInRight">
              <!-- TODO: Insert Projects here -->
              <figure class="project-image reveal-effect masker wow">
                <a href="">
                  <img :src="images.imageTwo" alt="" />
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

          <li>
            <div class="project-box wow fadeInLeft">
              <!-- TODO: Insert Projects here -->
              <figure class="project-image reveal-effect masker wow">
                <a href="">
                  <img :src="images.imageTwo" alt="" />
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

          <li class="titles">
            <div class="custom-link">
              <a href="">VIEW MORE PROJECTS</a>
              <span></span>
              <i></i>
            </div>
          </li>
        </ul>
      </div>
      <!-- View More Projects... -->
      <div class="custom-link">
        <a href="">VIEW MORE PROJECTS</a>
        <span></span>
        <i></i>
      </div>
    </section>

    <!-- Explore Ideas -->
    <section class="work-with-us">
      <div class="container wow fadeInUp">
        <h2
          style="
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
          "
        >
          EXPLORE IDEAS
        </h2>
        <p
          style="
            font-size: 20px;
            line-height: 1.5;
            margin-bottom: 40px;
            font-weight: 300;
          "
        >
          Need a developer for your next project? Let's work together.
        </p>
        <div class="custom-link">
          <a href="/contact.html">Contact Me</a>
          <span></span>
          <i></i>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div
            class="row-1 wow fadeInUp"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <figure class="logo sticky">
              <a href="/index.html">
                <img :src="images.imageThree" alt="Matthew Ricklefs Logo"
              /></a>
            </figure>
          </div>

          <div
            class="row-2 wow fadeInUp"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <h5>Location</h5>
            <address>
              Brooklyn,<br />
              New York<br />
              USA
            </address>
          </div>

          <div
            class="row-3 wow fadeInUp"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <h5>Say Hello</h5>
            <address>
              <a href="contact.html">Contact Form</a>
            </address>
          </div>

          <div
            class="row-4 wow fadeInUp"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <div class="sub-footer">
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>

              <span>© 2021 Matthew Ricklefs - All rights Reserved.</span>
            </div>
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
