<template>
  <div class="mx-auto">
  <v-stage :config="configKonva">
    <v-layer>
      <v-circle :config="configCircle"></v-circle>
    </v-layer>
  </v-stage>
    </div>
</template>

<script>
export default {
  data() {
    return {
      configKonva: {
        width: 2000,
        height: 1200
      },
      configCircle: {
        x: 500,
        y: 500,
        radius: 250,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      }
    };
  }
}
</script>

<style scoped>
.canvasInput
{
    width: 100%;
    height: 100%;
}
</style>
