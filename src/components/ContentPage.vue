<template>

    

    <v-card class="ml-1" height="1000px" >
     
  
 
        </v-card>
 
  <div class="social">
            <font-awesome-icon 
              :icon="['fab', 'facebook']"
              style="color: #1877f2"
            /> 
            &nbsp;
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              style="color: #1da1f2"
            />
            &nbsp;
            <a
              href="https://www.youtube.com/channel/UCKuXOibGrYaw6vHJwHhxREQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon
                :icon="['fab', 'youtube']"
                style="color: #ff0000"
              />
            </a>
          </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faYoutube /* Add more icons here */,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faTwitter, faYoutube /* Add more icons here */);
export default {
  name: "ContentPage",
  components: {
    FontAwesomeIcon,
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
