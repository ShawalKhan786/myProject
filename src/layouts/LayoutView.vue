<!-- Layout.vue -->
<template>


    <div>
      <HeaderSection/>
      <main>
        <router-view></router-view>
      </main>
      <social-links></social-links>
      <FooterSection/>
    </div>
  </template>
  
  <script>
  import SocialLinks from '@/components/SocialLinks.vue';
  import HeaderSection from '@/components/HeaderSection.vue';
  import FooterSection from '@/components/FooterSection.vue';
  
  export default {
    name: "LayoutView",
    components: {
      HeaderSection,
      SocialLinks,
      FooterSection,
    },
  };
  </script>
  <style scoped>
.social {
  position: fixed;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 965px) {
  .social {
    display: none;
  }
}

.social font-awesome-icon {
  margin-bottom: 10px;
}
</style>
  