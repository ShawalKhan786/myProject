<template>

    <v-card height="70" style="background-color: #030e52">
  
<v-toolbar style="background-color:#030e52">
  <div class="ml-6 mt-6">
  <p style="font-size: small;  color: white">© 2023 ShawalKhan All Rights Reserved.</p> 
</div>
<br>
<SocialLinks class="mt-6" />
<v-spacer></v-spacer>
<div class="mr-6 mt-6">
<p style="font-size: small; color: white">Developed by: Shawal Khan  </p>
</div>
</v-toolbar>

    </v-card>

  
   </template>
   
   <script>
  import SocialLinks from './SocialLinks.vue';
   export default {
     name: 'FooterSection',
     components: {
    SocialLinks,
  },
   
      
    
   }
   </script>