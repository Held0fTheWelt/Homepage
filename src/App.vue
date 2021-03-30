<template>
  <v-app id="vApp">
    <Navbar />
    <!-- <v-main> -->
      <v-main id="content">
        <router-view></router-view>
      </v-main>
    <!-- </v-main> -->
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "App",  
  
  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#content
{
 width: 100%; 
}
</style>
