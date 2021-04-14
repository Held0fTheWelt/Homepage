<template>
  <div v-if="isEnabled" class="mx-auto">
    <v-stage
      v-if="height"
      :config="configKonva"
      @mousedown="mousePressed($event)"
      @mouseup="mouseReleased()"
      @mousemove="mouseMoved($event)"
      @mouseenter="mouseEntered()"
      @mouseleave="mouseLeft()"
      @wheel="mouseWheel($event)"
      :v-touch:start="touchStart('Start')"
      :v-touch:end="touchRelease()"
      :v-touch:moving="touchMove('End')"
    >
      <v-layer>
        <v-circle v-if="isShowingCircle()" :config="configCircle"></v-circle>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
export default {
  props: {
    enabled: {
      type: Boolean,
      required: true,
    },
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
    mouseEntered: function () {
      if (this.mouseIsPressed === true) {
        this.configCircle.showCircle = true
      }
    },
    mouseLeft: function () {
      this.configCircle.showCircle = false
    },
    touchStart: function (event) {
      console.log(event)
    },
    touchRelease: function () {},
    touchMove: function (event) {
      console.log(event)
    },
    mouseWheel: function (event) {
      if (event.evt.deltaY < 0) {
        console.log('Scrolling upwards ' + event.evt.deltaY)
      } else {
        console.log('Scrolling downwards ' + event.evt.deltaY)
      }
    },
    mouseMoved: function (event) {
      if (this.mouseIsPressed === true) {
        this.configCircle.x = event.evt.layerX
        this.configCircle.y = event.evt.layerY
        // console.log(
        //   'Mouse Position X ' +
        //     this.configCircle.x +
        //     ' Mouse Position Y ' +
        //     this.configCircle.y
        // )
        // console.log(
        //   'Mouse Position X% ' +
        //     this.configCircle.x / this.configKonva.width +
        //     ' Mouse Position Y% ' +
        //     this.configCircle.y / this.configKonva.height
        // )
      }
    },
    mousePressed: function (event) {
      console.log(event.evt.button)
      if (event.evt.button === 0) {
        this.configCircle.x = event.evt.layerX
        this.configCircle.y = event.evt.layerY
        //   console.log('Mouse Position X ' + this.configCircle.x)
        //   console.log('Mouse Position Y ' + this.configCircle.y)
        this.configCircle.showCircle = true
        this.mouseIsPressed = true
      }
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
      isEnabled: this.enabled,
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
