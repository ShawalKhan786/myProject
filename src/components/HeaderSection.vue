<template>
  <v-card
    class="header"
    height="80"
    style="background-color: rgb(255, 255, 255)"
  >
    <v-row>
      <v-col cols="12">
        <v-toolbar height="80" style="background-color: rgb(255, 255, 255)">
          <img
            src="ShawalKhan.png"
            height="60"
            class="ml-9"
            style="border-radius: 30px"
          />

          <p class="ml-3 mt-1" style="font-size: 26px; font-weight: bold; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ">
            Shawal Khan
          </p>

          <v-spacer></v-spacer>

          <div class="button d-none d-sm-block">
            <button
              class="ml-3 mr-3"
            
              v-for="(page, index) in pages"
              :key="index"
            >
              {{ page }}
            </button>
          </div>
          <div class="menu">
            <v-row justify="center">
              <div class="mx-4 hidden-sm-and-down"></div>

              <v-menu transition="slide-x-reverse-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ma-2"
                    v-bind="props"
                    style="color: rgb(48, 47, 47)"
                  >
                    <span
                      class="mdi mdi-menu mdi-36px"
                      style="color: rgb(48, 47, 47)"
                    ></span>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item   style="font-size: 16px; font-weight: bold; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif "
                    class="ml-3"
                    v-for="(page, index) in pages"
                    :key="index"
                    >{{ page }}</v-list-item
                  >
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
  name: "HeaderSection",
  components: {},
  data() {
    return {
      pages: ["Home", "About", "Career", "Youtube", "Contact"],
    };
  },
};
</script>
<style>
.header {
  position: fixed; /* Set the header to be fixed */
  width: 100%; /* Make the header span the full width of the viewport */
  z-index: 1000;
}
.button {
  margin-top: 50px;
  margin-right: 35px;
  font-size: 20px;
 font-family: 'Times New Roman', Times, serif;
  color: #3e08d2;
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
  color: #f40303; /* Change this to your desired hover text color */
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
</style>
