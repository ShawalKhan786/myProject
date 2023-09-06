<template>
  <v-card class="header" :style="{ top: scrollingUp ? '0' : '-100px' }">
    <v-row>
      <v-col cols="12">
        <v-toolbar height="65" style="background-color: rgb(255, 255, 255)">
          <img
            src="ShawalKhanlogo.png"
            height="60"
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
          <div class="button mt-12">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <router-link to="/">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    About Me
                  </button>
                </router-link>
              </li>
              <li class="nav-item" role="presentation">
                <router-link to="about">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Purpose
                  </button>
                </router-link>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Contact
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="disabled-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#disabled-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="disabled-tab-pane"
                  aria-selected="false"
                  disabled
                >
                  Disabled
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="disabled-tab-pane"
                role="tabpanel"
                aria-labelledby="disabled-tab"
                tabindex="0"
              >
                ...
              </div>
            </div>
          </div>

          <div class="menu">
            <v-row justify="center">
              <div class="mx-4 hidden-sm-and-down"></div>
              <v-btn data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                ><span
                  class="mdi mdi-menu mdi-36px"
                  style="color: rgb(48, 47, 47)"
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
                  >
                  <br />

                  <router-link to="about">
                    <button data-bs-dismiss="offcanvas">
                      About
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
<style>
.header {
  position: fixed; /* Set the header to be fixed */
  top: 0; /* Position at the top of the viewport */
  width: 100%; /* Make the header span the full width of the viewport */
  z-index: 1000;
  background-color: rgba(8, 8, 8, 0.8);
  transition: top 0.5s ease;
}
.button {
  margin-top: 35px;
  margin-right: 35px;
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
.button button:hover {
  /* Apply styles for hover state */
  color: #f40303; /* Change this to your desired hover background color */
  /* You can also modify other styles like text color, border, etc. */
}

.v-list-item:hover {
  color: #615d5d; /* Change this to your desired hover text color */
  /* You can also modify other styles like background color, border, etc. */
}
.menu {
  display: none; /* Hide the div by default */
  margin-top: 30px;
  color: #f40303;
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
</style>
