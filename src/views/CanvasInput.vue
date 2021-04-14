<template>
  <div>
    <CanvasInput :width="width" :height="height"></CanvasInput>
  </div>
</template>

<script>
import CanvasInput from '@/components/CanvasInputComponent.vue'
export default {
  components: {
    CanvasInput,
  },
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  created() {
    console.log('Outer Window' + window.innerWidth)
    console.log('Outer Window' + window.innerHeight)
  },
}
</script>

<style scoped></style>
