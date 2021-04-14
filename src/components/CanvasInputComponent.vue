<template>
  <div v-if="height" class="mx-auto">
    <v-stage
      :config="configKonva"
      @mousedown="mousePressed($event)"
      @mouseup="mouseReleased()"
      @mousemove="mouseMoved($event)"
    >
      <v-layer>
        <v-circle
          v-if="isShowingCircle()"
          @mousedown="draw"
          :config="configCircle"
        ></v-circle>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  methods: {
    // mouseWheel: function (event) {
    //     console.log(event)
    // },
    mouseMoved: function (event) {
      if (this.mouseIsPressed === true) {
        this.configCircle.x = event.evt.layerX
        this.configCircle.y = event.evt.layerY
        // console.log('Mouse Position X ' + this.width)
        // console.log('Mouse Position Y ' + this.height)
      }
    },
    mousePressed: function (event) {
      this.configCircle.x = event.evt.layerX
      this.configCircle.y = event.evt.layerY
    //   console.log('Mouse Position X ' + this.width)
    //   console.log('Mouse Position Y ' + this.height)
      this.configCircle.showCircle = true
      this.mouseIsPressed = true
    },
    mouseReleased: function () {
      this.mouseIsPressed = false
      this.configCircle.showCircle = false
    },
    isShowingCircle: function () {
      return this.configCircle.showCircle
    },
  },
  data() {
    return {
      configKonva: {
        width: 2000,
        height: 1000,
      },
      configCircle: {
        x: 500,
        y: 500,
        radius: 5,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        showCircle: false,
      },
      mouseIsPressed: false,
    }
  },
  created() {
    // console.log('Transport Parameter width ' + this.width)
    // console.log('Transport Parameter height ' + this.height)
    // console.log('Inner Value Default width ' + this.configKonva.width)
    // console.log('Inner Value Default height ' + this.configKonva.height)
    this.configKonva.width = this.width
    this.configKonva.height = this.height
    // console.log('Inner Value with Parameter width ' + this.width)
    // console.log('Inner Value with Parameter height ' + this.height)
  },
}
</script>

<style scoped>
.canvasInput {
  width: 100%;
  height: 100%;
}
</style>
