<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <video autoplay controls>
          <source v-bind:src="video" type="video/mp4" />
          <!-- <source src="../assets/Logo.ogg" type="video/ogg"> -->
          Ihr Browser kann dieses Video nicht wiedergeben.<br />
          Dieser Film zeigt einen Trailer zum Projekt.
        </video>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VideoComponent',
  props: {
    msg: String,
    required: true,
  },
  data() {
    return {
      video: require(this.msg),
    }
  },
}
</script>

<style scoped>
video {
  object-fit: contain;
  width: 100%;
}
</style>
