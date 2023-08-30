<template>

    

    <v-card class="ml-1" height="1000px" >
      <div>
  
  </div>
 
 
        </v-card>
       
  <div class="social">
    <span class="mdi mdi-linkedin mdi-24px" style="color: #3b5998;"></span>
    <span class="mdi mdi-xing mdi-24px" style="color: #156b64;"></span>
   
    <a
              href="https://www.youtube.com/channel/UCKuXOibGrYaw6vHJwHhxREQ"
              target="_blank"
              rel="noopener noreferrer"
            >  <span class="mdi mdi-youtube mdi-24px" style="color: #ee1010;"></span>    
          </a>
          <span class="mdi mdi-facebook mdi-24px" style="color: #3b5998;"></span>
          <span class="mdi mdi-instagram mdi-24px" style="color: #e44b2d;"></span>
          <span class="mdi mdi-tiktok mdi-24px" style="color: #e44b2d;"></span>
          
            
           
           
          </div>
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
