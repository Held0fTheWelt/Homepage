<template>
    <v-row class="home">
      <v-col cols="12">
        <LogoVideo />
      </v-col>
    </v-row>
</template>

<script>
// @ is an alias to /src
import LogoVideo from '@/components/site/LogoVideo.vue'

export default {
  name: 'Home',

  components: {
    LogoVideo,
  },
}
</script>

<style scoped>

.home, .container{width: 100%; height: 100%;}
.row {margin: 0;}
.home .col{
padding:0;
}

h1 {
  text-align: center;
  width: 100%;
}

.v-card-xs {
  width: 98%;
  padding: 0.15%;
}

.v-card-big {
  width: 75%;
  padding: 0.75%;
}
</style>
