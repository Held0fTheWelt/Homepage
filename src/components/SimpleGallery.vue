<template>
  <v-container>
    <v-row cols="12" class="hoverData">
      <v-col>
        <v-img
          v-if="isImage()"
          v-bind:src="getImage()"
          alt="Project Image"
          rel="preload"
        />
        <video v-else autoplay controls preload>
          <source v-bind:src="currentVideo" type="video/mp4" rel="preload" />
          <!-- <source src="../assets/Logo.ogg" type="video/ogg"> -->
          Ihr Browser kann dieses Video nicht wiedergeben.<br />
          Dieser Film zeigt einen Trailer zum Projekt.
        </video>
      </v-col>
    </v-row>
    <v-row class="hoverData {'pad-xs' : $vuetify.breakpoint.xs}">
      <v-col cols="12" class="gal_center">
        <v-pagination
          v-model="currentID"
          :length="count"
          circle
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    getVideo: function () {
      console.log(this.url[this.currentID - 1])
      //   this.currentVideo = require(this.url[this.currentID] - 1);
    },
    getImage: function () {
      // Hier wird die url abgefragt
      return require('@/assets/images/projects/' +
        this.project.id +
        '/screenshots/' +
        this.currentID +
        '.jpg')
    },
    isImage: function () {
      for (let i = 0; i < this.videos.length; i++) {
        if (this.currentID == this.videos[i]) {
          return false
        }
      }
      return true
    },
  },
  props: {
    count: {
      type: Number,
      required: true,
    },
    videos: {
      type: Array,
      required: true,
    },
    project: {
      type: Object,
      required: true,
    },
    url: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentID: 1,
      currentVideo: require('@/assets/videos/Projects/' +
        this.project.id +
        '/Trailer.mp4'),
      clickLeft: require('@/assets/images/util/arrow_left.png'),
      clickRight: require('@/assets/images/util/arrow_right.png'),
      selection: require('@/assets/images/util/dot.png'),
      selected: require('@/assets/images/util/dotselected.png'),
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

/* .hoverData :hover {
  transform: scale(1.03);
   box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2); 
} */

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

video {
  object-fit: contain;
  width: 100%;
}
</style>
