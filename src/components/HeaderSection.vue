<template>
  <v-card class="header" :style="{ top: scrollingUp ? '0' : '-100px' }">
    <v-row>
      <v-col cols="12">
        <v-toolbar height="65" style="background-color: rgb(255, 255, 255)">
          <img
            src="ShawalKhanlogo.png"
            height="50"
            max-width="60%"
            class="ml-9"
            style="border-radius: 30px"
          />

          <h1
            class="ml-3 mt-1"
            style="
              font-weight: bold;
              color: #050404;

              font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                serif;
            "
          >
            <!-- Shawal Khan -->
          </h1>

          <v-spacer></v-spacer>

          <div class="button">
            <router-link to="home" class="no-underline">
              <button class="ml-6 mt-4 mr-5">Home</button>
            </router-link>

            <router-link to="resume" class="no-underline">
              <button class=" ml-6 mt-4 mr-5">Resume</button>
            </router-link>
            <router-link to="about" class="no-underline">
              <button class="ml-6 mt-4 mr-5">Contact</button>
            </router-link>
          </div>

          <div class="menu">
            <v-row justify="center">
              <div class="mx-4 hidden-sm-and-down"></div>
              <v-btn data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                ><span
                  class="mdi mdi-menu mdi-36px"
                  style="color: rgb(31, 70, 245)"
                ></span
              ></v-btn>

              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                style="max-width: 300px"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <router-link to="/">
                    <button data-bs-dismiss="offcanvas">
                      Home
                    </button></router-link
                  ><br />
                  <router-link to="/resume">
                    <button data-bs-dismiss="offcanvas">
                      Resume
                    </button></router-link
                  >
                  <br />

                  <router-link to="/about">
                    <button data-bs-dismiss="offcanvas">
                      Contact
                    </button></router-link
                  >
                </div>
              </div>
            </v-row>
          </div>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      scrollPos: 0,
      scrollingUp: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > this.scrollPos) {
        // Scrolling down
        this.scrollingUp = false;
      } else {
        // Scrolling up
        this.scrollingUp = true;
      }

      this.scrollPos = currentScrollPos;
    },
  },
};
</script>
<style scoped>
.header {
  position: fixed; /* Set the header to be fixed */
  top: 0; /* Position at the top of the viewport */
  width: 100%; /* Make the header span the full width of the viewport */
  z-index: 1000;
  background-color: rgba(8, 8, 8, 0.8);
  transition: top 0.5s ease;
}
.button {
  display: flex; /* Use Flexbox to create a horizontal layout */

  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  color: #000000;
}
@media (max-width: 800px) {
  .button {
    display: none; /* Hide the button */
  }
}

.social {
  margin-bottom: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}

.v-list-item:hover {
  color: #615d5d; /* Change this to your desired hover text color */
  /* You can also modify other styles like background color, border, etc. */
}
.menu {
  display: none; /* Hide the div by default */
  margin-top: 30px;
}

/* Media query for small screens */
@media (max-width: 800px) {
  .menu {
    display: block; /* Show the div only for small screens */
  }
}

.hide-on-md {
  display: flex;
  flex-direction: column; /* This makes the items stack vertically */
}
.no-underline {
  text-decoration: none !important;
}
</style>
