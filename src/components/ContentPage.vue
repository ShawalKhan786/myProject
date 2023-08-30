<template>

<v-container  style="background-color: #ffffff; ">

    <v-card class="mt-15" height="1000px" style="background-color: #eeeeee;" >
    
      <v-card
    class="mx-auto"
    max-width="1000"
   
  >
    <template v-slot:title>
      <div class="text-center align-center">
        <p style="font-family: 'Times New Roman', Times, serif; font-weight: bold;" >Welcome To My World!!!</p>
        <v-divider></v-divider>
      </div>
    </template>

    <v-card-text>
      This website is under process and alot of things coming soon....
    </v-card-text>
  </v-card>
  <v-row>
    <v-col cols="3">
      <v-card class="mt-6 ml-3" height="400px">
        This website is under process and alot of things coming soon....</v-card>
    </v-col>
    <v-col cols="9">
      <v-card class="mt-6 mr-3" height="400px">
        This website is under process and alot of things coming soon....
    </v-card>
    </v-col>
  </v-row>
 
    

 
       
     <!-- This is a Social Links Section -->
  <div class="social">
    <a
              href="https://www.linkedin.com/in/shawalibrahimkhan/"
              target="_blank"
              rel="noopener noreferrer"
            >   <span class="mdi mdi-linkedin mdi-24px" style="color: #3b5998;"></span> </a>
            <a
              href="https://www.xing.com/profile/ShawalIbrahim_Khan/cv"
              target="_blank"
              rel="noopener noreferrer"
            >   <span class="mdi mdi-xing mdi-24px" style="color: #156b64;"></span> </a>
   
    <a
              href="https://www.youtube.com/channel/UCKuXOibGrYaw6vHJwHhxREQ"
              target="_blank"
              rel="noopener noreferrer"
            >  <span class="mdi mdi-youtube mdi-24px" style="color: #ee1010;"></span>    
          </a>
          <a
              href="https://www.facebook.com/shawalkhnz"
              target="_blank"
              rel="noopener noreferrer"
            >  <span class="mdi mdi-facebook mdi-24px" style="color: #3b5998;"></span></a>
            <a
              href="https://www.instagram.com/shawalkhanofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >  <span class="mdi mdi-instagram mdi-24px" style="color: #e44b2d;"></span> </a>
            <a
              href="https://www.tiktok.com/@www.shawalkhan.com?_t=8fH0hWqBLjb&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            > 
          
            <img src="tiktok.png"  alt="" width="22" height="22"> </a>
           
           
          </div>
        </v-card>
        </v-container>
     
     
</template>
<script>



export default {
  name: "ContentPage",
  components: {

  },
  data() {
    return {
      items: [
        {
          src: "ShawalKhan.png",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
<style>
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
