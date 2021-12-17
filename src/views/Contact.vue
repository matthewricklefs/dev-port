<template>
  <div class="theme-switch-wrapper" data-theme="light">
    <!-- Preloader -->
    <!-- <div class="preloader page-loaded"> -->
    <!-- :: before -->
    <!-- <div class="inner">
        <figure class="logo">
          <img src="" alt="logo" />
        </figure>
        <span class="percentage">1</span>
      </div> -->
    <!-- ::after -->
    <!-- </div> -->

    <!-- <div class="transition-overlay"> -->
    <!-- ::before -->
    <!-- </div> -->

    <!-- Navigation -->
    <div class="navigation-menu" name="theme">
      <div class="inner">
        <div class="side-menu">
          <ul>
            <li>
              <a href="about.html">About</a>
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
            <!-- <li>
              <a>
                <router-link to="/projects">Projects</router-link>
              </a>
            </li> -->
            <li>
              <a>
                <router-link to="/contact">Contact</router-link>
              </a>
            </li>
          </ul>
        </div>

        <!-- Hamburger Icon -->
        <!-- <div class="hamburger-menu" id="hamburger-menu">
          <div class="burger" @click.prevent="toggleTheme">
            <svg
              id="burger-svg"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <title>Show / Hide Navigation</title>
              <rect class="burger-svg__base" width="50" height="50"></rect>
              <g class="burger-svg__bars">
                <rect
                  class="burger-svg__bar burger-svg__bar-1"
                  x="14"
                  y="18"
                  width="22"
                  height="2"
                  data-svg-origin="25 19"
                  style="
                    transform: matrix(1, 0, 0, 1, 0, 0);
                    transform-origin: 0px 0px 0px;
                  "
                ></rect>
                <rect
                  class="burger-svg__bar burger-svg__bar-2"
                  x="14"
                  y="24"
                  width="22"
                  height="2"
                  data-svg-origin="25 25"
                  style="
                    transform-origin: 0px 0px 0px;
                    transform: matrix(1, 0, 0, 1, 0, 0);
                    opacity: 1;
                  "
                ></rect>
                <rect
                  class="burger-svg__bar burger-svg__bar-3"
                  x="14"
                  y="30"
                  width="22"
                  height="2"
                  data-svg-origin="25 31"
                  style="
                    transform: matrix(1, 0, 0, 1, 0, 0);
                    transform-origin: 0px 0px 0px;
                  "
                ></rect>
              </g>
            </svg>
          </div>
        </div> -->

        <!-- Theme Switch -->
        <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" />
          <div @click="toggleSwitch" class="slider round"></div>
        </label>
      </nav>

      <!-- Page Title ------------------ -->
      <div class="page-title">
        <div class="container">
          <h2>Contact</h2>
        </div>
      </div>
    </header>

    <!-- Map ------------------ -->
    <section class="page-header">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96724.4207209076!2d-73.96888929428283!3d40.747987121652464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1639781504575!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>

    <!-- Contact Details ------------------ -->
    <section class="contact">
      <div class="container">
        <div class="row">
          <div class="col-md-6 wow fadeInUp">
            <h5>LOCATION</h5>
            <address>
              Brooklyn<br />
              New York<br />
              USA
            </address>
          </div>

          <div class="col-12 wow fadeInUp">
            <h5>REACH ME</h5>
            <a
              class="btn-email"
              data-clipboard-text="ricklefsmatthew1003@gmail.com"
            >
              <span>Click</span> to copy my email address to your clipboard.
            </a>
          </div>

          <!-- Form ------------------ -->
          <div class="col-lg-7 wow fadeInUp">
            <div class="contact-form">
              <h5>CONTACT FORM</h5>

              <form id="contact" name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <div class="form-group">
                  <label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autocomplete="off"
                      required
                    />
                    <span class="label-up">Your name</span>
                  </label>
                </div>

                <div class="form-group">
                  <label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autocomplete="off"
                      required
                    />
                    <span class="label-up">E-mail</span>
                  </label>
                </div>

                <div class="form-group">
                  <label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autocomplete="off"
                      required
                    />
                    <span class="label-up">Phone number</span>
                  </label>
                </div>

                <div class="form-group">
                  <label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      autocomplete="off"
                      required
                    />
                    <span class="label-up">Subject</span>
                  </label>
                </div>

                <div class="form-group">
                  <label>
                    <textarea
                      name="message"
                      id="message"
                      autocomplete="off"
                      required
                    ></textarea>
                    <span class="label-up">Message</span>
                  </label>
                </div>

                <div class="form-group">
                  <button id="submit" type="submit" name="submit">
                    <strong>Send<b></b> <i></i></strong>
                  </button>
                </div>
              </form>

              <div class="form-group">
                <div
                  id="success"
                  class="alert alert-success wow fadeInUp"
                  role="alert"
                >
                  Thank you for your message! I will be in contact shortly.
                </div>

                <div
                  id="error"
                  class="alert alert-danger wow fadeInUp"
                  role="alert"
                >
                  Something went wrong, please try refreshing and submitting the
                  form again.
                </div>
              </div>
            </div>
          </div>
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

          <!-- <div
            class="row-3 wow fadeInUp"
            style="visibility: visible; animation-name: fadeInUp"
          >
            <h5>Goodbye!</h5>
            <address>
              <a href="contact.html">Contact Form</a>
            </address>
          </div> -->

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
// @ is an alias to /src
import "@/assets/styles.scss";
// import WOW from "wowjs";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      images: {
        imageOne: require("../assets/images/matty6.jpeg"),
        imageTwo: require("../assets/images/code.jpeg"),
        imageThree: require("../assets/logo.png"),
      },
      logos: {
        express: require("../assets/images/express-logo.png"),
        gatsby: require("../assets/images/gatsby-logo.svg"),
        graphQl: require("../assets/images/graphql-logo.svg"),
        mongo: require("../assets/images/mongodb-logo.svg"),
        next: require("../assets/images/next-logo.svg"),
        node: require("../assets/images/node-logo.svg"),
        prisma: require("../assets/images/prisma-logo.svg"),
        redux: require("../assets/images/redux-logo.svg"),
        react: require("../assets/images/react-logo.svg"),
      },
      icons: {
        ui: require("../assets/images/icon01.svg"),
        front: require("../assets/images/icon02.svg"),
        back: require("../assets/images/icon03.svg"),
        ux: require("../assets/images/icon04.svg"),
      },
    };
  },
  mounted() {
    // new WOW.WOW({
    //   boxClass: "wow",
    //   animateClass: "animated",
    //   live: true,
    //   offset: 50,
    // })
    //   .init()
    //   .sync();
    // console.log("Component mounted.");
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
