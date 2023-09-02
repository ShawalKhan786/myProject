<!-- Layout.vue -->
<template>
    <div>
      <HeaderSection/>
      <main>
        <router-view></router-view>
      </main>
      <FooterSection/>
    </div>
  </template>
  
  <script>
  import HeaderSection from '@/components/HeaderSection.vue';
  import FooterSection from '@/components/FooterSection.vue';
  
  export default {
    name: "LayoutView",
    components: {
      HeaderSection,
      FooterSection,
    },
  };
  </script>
  