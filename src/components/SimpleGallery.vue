<template>
  <v-card class="mx-auto project-xs">
    <v-row cols="12" class="hoverData">
      <v-col>
        <v-img v-bind:src="image" alt="Project Image" />
      </v-col>
    </v-row>
    <v-row cols="12" class="hoverData {'pad-xs' : $vuetify.breakpoint.xs}">
      <v-col class="gal_left" cols="1">
        <v-img
          class="gal_but_left"
          v-bind:src="clickLeft"
          alt="Click Left Button"
        />
      </v-col>
      <v-col class="gal_center"     >
        Center
      </v-col>
      <v-col class="gal_right" cols="1">
        <v-img
          class="gal_but_right"
          v-bind:src="clickRight"
          alt="Click Right Button"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// <v-card v-if="$vuetify.breakpoint.smAndDown" class="mx-auto project-xs">

export default {
  name: 'SimpleGallery',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      image: require('@/assets/images/projects/' +
        this.project.id +
        '/image_big_logo.png'),
      clickLeft: require('@/assets/images/util/arrow_left.png'),
      clickRight: require('@/assets/images/util/arrow_right.png'),
    }
  },
}
</script>

<style scoped>
.gal_but_left {
}
.gal_but_right {
  float: right;
}

.gal_center {
  text-align: center;
}
h4,
h3 {
  text-align: center;
}

.project-xs .row .col {
  margin: 0%;
}

.hoverData :hover {
  transform: scale(1.03);
  /* box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2); */
}

.projectLink {
  text-decoration: none;
  color: #f3f3f3;
}

.project-large {
  cursor: pointer;
  border: 1px solid #666666;
  margin-bottom: 2%;
  width: 55%;
}

.project-xs {
  align-content: center;
  cursor: pointer;
  border: 1px solid #666666;
  margin-bottom: 2%;
  padding: 5%;
  width: 80%;
}
</style>
