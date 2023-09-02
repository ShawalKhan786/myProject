<template>
  <v-container style="background-color: #ffffff">
    <v-card class="mt-15" height="1000px" style="background-color: #eeeeee">
      <v-card style="background-color: #a6a6ad" >
        <div class="text-center align-center">
          <h1 class="mt-3"
            style="
              font-family: 'Times New Roman', Times, serif;
              font-weight: bold;
            color: rgb(255, 255, 255);"
            
          >
            Who AM I???
          </h1>
          <v-divider></v-divider>
          <br />

          <p style="color: rgb(255, 255, 255); font-weight: bold;">
            About Me: I'm Shawal Khan, a Master's student in Computer and
            Systems Engineering with two years of frontend development
            experience. <br />
            Passionate about tech innovation and user-centric design, I'm eager
            to contribute to cutting-edge projects and connect with like-minded
            professionals.
          </p>
        </div>

        <v-card-text> </v-card-text>
      </v-card>
      <v-row>
        <v-col cols="3">
          <v-card class="mt-6 ml-3" height="400px">
            This website is under process and alot of things coming
            soon....</v-card
          >
        </v-col>
        <v-col cols="9">
          <v-card class="mt-6 mr-3" height="400px">
            This website is under process and alot of things coming soon....
          </v-card>
        </v-col>
      </v-row>

      <!-- This is a Social Links Section -->
      <social-links />
    </v-card>
  </v-container>
</template>
<script>
import SocialLinks from "@/components/SocialLinks.vue";

export default {
  name: "HomeView",
  components: {
    SocialLinks,
  },
  data() {
    return {
     
    };
  },
};
</script>
<style scoped>
.social {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social font-awesome-icon {
  margin-bottom: 10px;
}
</style>
