<template>
        <video autoplay controls>
          <source v-bind:src="video" type="video/mp4" />
          <!-- <source src="../assets/Logo.ogg" type="video/ogg"> -->
          Ihr Browser kann dieses Video nicht wiedergeben.<br />
          Dieser Film zeigt einen Trailer zum Projekt.
        </video>
</template>

<script>
export default {
  data() {
    return {
      video: require('@/assets/videos/Logo.mp4'),
    }
  },
}
</script>

<style scoped>
video {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>
