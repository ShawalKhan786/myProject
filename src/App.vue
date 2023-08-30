<template>
  <v-app>
    <v-main>
      <HeaderSection/>
      <ContentPage/>
      <FooterSection/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import ContentPage from './components/ContentPage.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',

  components: {
    HeaderSection,
    ContentPage,
    FooterSection
  },

  data: () => ({
    //
  }),
}
</script>
