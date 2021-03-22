<template>
  <div class="home">
    <LogoVideo/>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HomeComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
    // <video width="1080" height="705" autoplay loop muted id="logoVideo">
    //   <source src="../assets/Logo.mp4" type="video/mp4"> 
    //   <!-- <source src="../assets/Logo.ogg" type="video/ogg"> -->
    //   Ihr Browser kann dieses Video nicht wiedergeben.<br/>
    //   Dieser Film zeigt ein Logo Animation. 
    //   Sie können ihn sie <a href="#">https://www.youtube.com/watch?v=Y_kQ8DO3Wuw</a> abrufen.
    // </video>


// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";
import LogoVideo from "@/components/LogoVideo.vue";

export default {
  name: "Home",
  components: {
    HomeComponent,
    LogoVideo,
  },
};
</script>

<style scoped>

.home{
  position:relative;
  margin-top: -150px;
}
</style>