<template>
     <v-card class="header" :style="{ top: scrollingUp ? '0' : '-100px' }">
 

    <v-row>
      <v-col cols="12">
        <v-toolbar height="65" style="background-color: rgb(255, 255, 255)">
          <img
            src="ShawalKhan.png"
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
            Shawal Khan
           
        </h1>

          <v-spacer></v-spacer>

          <div class="button d-none d-sm-block">
            <router-link class="ml-3 mr-3" to="/">About Me</router-link>
            <router-link class="ml-3 mr-3" to="about">About</router-link>
          </div>
          <div class="menu">
            <v-row justify="center">
              <div class="mx-4 hidden-sm-and-down"></div>

              <v-menu transition="slide-x-reverse-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    v-bind="props"
                    style="color: rgb(255, 254, 254)"
                  >
                    <span
                      class="mdi mdi-menu mdi-36px"
                      style="color: rgb(48, 47, 47)"
                    ></span>
                  </v-btn>
                </template>
                <v-list>
  <v-list-item class="hide-on-md">
    <div class="ml-3 mr-3">
      <router-link to="/">Home</router-link>
    </div>
    <div class="ml-3 mr-3">
      <router-link to="about">About</router-link>
    </div>
  </v-list-item>
</v-list>
              </v-menu>
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
  transition: top .5s ease;
}
.button {
  margin-top: 35px;
  margin-right: 35px;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  color: #000000;
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
@media (max-width: 600px) {
  .menu {
    display: block; /* Show the div only for small screens */
  }
}
.v-list-item {
  padding-block: 120px;
}
@media (min-width: 600px) {
  .hide-on-md {
    display: none; /* Hide the list item on medium and larger screens */
  }
}
.hide-on-md {
    display: flex;
    flex-direction: column; /* This makes the items stack vertically */
  }
</style>
