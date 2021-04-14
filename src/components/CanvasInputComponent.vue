<template>
  <div v-if="height" class="mx-auto">
    <v-stage :config="configKonva">
      <v-layer>
        <v-circle @mousedown="draw" :config="configCircle"></v-circle>
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
    itemRowBackground: function (item) {
      return item.status === 'Ready'
        ? 'style-ok'
        : item.status === 'Open'
        ? 'style-open'
        : 'style-new'
    },
    draw: function (e) {
      this.configCircle.x = e.clientX
      this.configCircle.y = e.clientY
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
        radius: 250,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
      },
    }
  },
  created() {
    console.log('Transport Parameter width ' + this.width)
    console.log('Transport Parameter height ' + this.height)
    console.log('Inner Value Default width ' + this.configKonva.width)
    console.log('Inner Value Default height ' + this.configKonva.height)
    this.configKonva.width = this.width
    this.configKonva.height = this.height
    console.log('Inner Value with Parameter width ' + this.width)
    console.log('Inner Value with Parameter height ' + this.height)
  },
}
</script>

<style scoped>
.canvasInput {
  width: 100%;
  height: 100%;
}
</style>
