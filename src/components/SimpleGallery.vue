<template>
  <v-card class="mx-auto project-xs">
    <v-row><v-col class="12">Test</v-col></v-row>
    <v-row cols="12" class="hoverData">
      <v-col>
        <v-img v-bind:src="image" alt="Project Image" />
      </v-col>
    </v-row>
    <v-row cols="12" class="hoverData {'pad-xs' : $vuetify.breakpoint.xs}">
      <v-col class="gal_left" cols="1">
        <v-img
          v-on:click="click(true)"
          class="gal_but_left"
          v-bind:src="clickLeft"
          alt="Click Left Button"
        />
      </v-col>
      <v-col class="gal_center">
        <v-row >
          <v-col><v-spacer /></v-col>
          <v-col cols="1">
            <v-img
              class="gal_but_select"
              v-bind:src="selection"
              v-on:click="select(1)"
              alt="Click First Image"
            >
              <v-img
                v-if="currentID == 1"
                class="gal_but_selected"
                v-bind:src="selected"
                alt="First Image selected"
              />
            </v-img>
          </v-col>
          <v-col cols="1">
            <v-img
              class="gal_but_select"
              v-bind:src="selection"
              v-on:click="select(2)"
              alt="Click First Image"
            >
              <v-img
                v-if="currentID == 2"
                class="gal_but_selected"
                v-bind:src="selected"
                alt="First Image selected"
              />
            </v-img>
          </v-col>
          <v-col cols="1">
            <v-img
              class="gal_but_select"
              v-bind:src="selection"
              v-on:click="select(3)"
              alt="Click First Image"
            >
              <v-img
                v-if="currentID == 3"
                class="gal_but_selected"
                v-bind:src="selected"
                alt="First Image selected"
              />
            </v-img>
          </v-col>
          <v-col><v-spacer /></v-col>
        </v-row>
      </v-col>
      <v-col class="gal_right" cols="1">
        <v-img
          v-on:click="click(false)"
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
  methods: {
    click: function (left) {
      if (left === true) {
        if (this.currentID > 1) {
          this.currentID--
        }
      } else {
        if (this.currentID < 3) {
          this.currentID++
        }
      }
    },
    select: function (id) {
        this.currentID = id;
        global.vm.$forceUpdate();
      }
    
  },
  props: {
    id: {
      type: Number,
    },
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
      selection: require('@/assets/images/util/dot.png'),
      selected: require('@/assets/images/util/dotselected.png'),
      currentID: 0,
    }
  },
  created() {
    this.id = 1
    this.currentID = this.id
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
