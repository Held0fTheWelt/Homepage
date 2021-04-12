<template>
  <div class="d-flex align-center">
    <v-app-bar app color="#020202" dark>
      <v-img
        alt="Yves Tanas Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title id="pageTitle"
        >Yves Tanas - Game Programmer</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded to="/portfolio">Portfolio</v-btn>
      <v-btn text rounded to="/contact">Contact</v-btn>
      <v-btn text rounded to="/chart">Chart</v-btn>
      <v-btn text rounded to="/login">Login</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
#pageTitle {
  padding-left: 20px;
}
</style>
