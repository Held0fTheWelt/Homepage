<template>
  <v-card class="mx-auto project-xs">
    <v-row><v-col class="12">Test</v-col></v-row>
    <v-row cols="12" class="hoverData">
      <v-col>
        <v-img v-bind:src="image()" alt="Project Image" />
      </v-col>
    </v-row>
    <v-row class="hoverData {'pad-xs' : $vuetify.breakpoint.xs}">
      <v-col cols="12" class="gal_center">
        <v-pagination
          v-model="currentID"
          :length="3"
          circle
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// <v-card v-if="$vuetify.breakpoint.smAndDown" class="mx-auto project-xs">

export default {
  name: 'SimpleGallery',
  methods: {
    // click: function (left) {
    //   if (left === true) {
    //     if (this.currentID > 1) {
    //       this.currentID--
    //     }
    //   } else {
    //     if (this.currentID < 3) {
    //       this.currentID++
    //     }
    //   }
    // },
    // select: function (id) {
    //   this.currentID = id
    //   global.vm.$forceUpdate()
    // },
    image: function () {
      console.log(this.currentID)
      return require('@/assets/images/projects/' +
        this.project.id +
        '/screenshots/' +
        this.currentID +
        '.png')
    },
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentID: 1,
      clickLeft: require('@/assets/images/util/arrow_left.png'),
      clickRight: require('@/assets/images/util/arrow_right.png'),
      selection: require('@/assets/images/util/dot.png'),
      selected: require('@/assets/images/util/dotselected.png'),
      // image: require('@/assets/images/projects/' +
      //   this.project.id +
      //   '/screenshots/' +
      //   this.currentID +
      //   '.png'),
    }
  },
  created() {
    this.currentID = 1
  },
}
</script>

<style scoped>
.alilgn {
  align-self: center;
}
.gal_but_selected {
}
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
