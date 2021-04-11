<template>
  <v-card v-if="project" class="specs">
    <v-card-title>
      <h1>Specifications</h1>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" class="specsData">
          <h3>Minimum Specifications:</h3>
          <br />
          <!-- Operating Sytem: {{ project.specs.requirements[0].system }}<br /> -->
          <pre>Sytem: &#09;&#09;{{ project.specs.requirements[0].system }}<br /></pre>
          <pre>Processor: &#09;{{ project.specs.requirements[0].cpu }}<br /></pre>
          <pre>Memory: &#09;{{ project.specs.requirements[0].ram }}<br /></pre>
          <pre>Graphice: &#09;{{ project.specs.requirements[0].gpu }}<br /></pre>
          <pre>Storage: &#09;{{ project.specs.requirements[0].storage }}<br /></pre>
          <pre>Equipment:</pre>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="specsData">
          <!-- Operating Sytem: {{ project.specs.requirements[0].system }}<br /> -->
          <pre>Current Engine: &#09;&#09;{{ project.specs.engine }}<br /></pre>
          <pre>Programming Language: &#09;{{ project.specs.language }}<br /></pre>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      require: true,
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  width: 100%;
  margin-bottom: 4%;
}
.specs {
  height: 100%;
}
.specsData {
  padding-left: 5%;
}
</style>
