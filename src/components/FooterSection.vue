<template>



  <div height="200px" style="background-color: #4c6fb5;">
     




   
    <div class="container text-center" height="200px">
  <div class="row justify-content-md-center">
    <div class="col col-md text-left mt-3">
      <p style="color: aliceblue; font-weight: bold; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"> Developed by: Shawal Khan</p>
    </div>
    <div class="col col-md ">
      <social-links></social-links>
    </div>
    <div class="col col-md text-right mt-3">
      <p style="color: aliceblue; font-weight: bold; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">  © 2023 All Rights Reserved</p> 
 
    </div>
  </div>
  </div>
 
 
 

</div>

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
   <style scoped>
  .social{
display: flex;
justify-content: center;
margin-top: 10px
  }
  @media (min-width: 960px) {
  .social{
    display: none;
  }
}

</style>