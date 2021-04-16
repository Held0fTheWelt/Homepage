<template>
  <v-container v-if="url">
    <v-row cols="12" class="hoverData">
      <v-col>
        <v-img
          v-if="isImage()"
          v-bind:src="image"
          alt="Project Image"
          rel="preload"
        />
        <div v-else>
          <video v-if="getVideo()" autoplay controls preload>
            <source :src="video" type="video/mp4" />
            <!-- <source src="../assets/Logo.ogg" type="video/ogg"> -->
            Ihr Browser kann dieses Video nicht wiedergeben.<br />
            Dieser Film zeigt einen Trailer zum Projekt.
          </video>
        </div>
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
  computed: {
    image() {
      return require('@/assets/images/projects/' + this.url[this.currentID - 1])
    },
  },
  methods: {
    getVideo() {
      console.log('/'+this.url[this.currentID - 1]+'/')
      // let string = this.url[this.currentID - 1]
      // string.replace("'","")
      // this.video =  require(string)
      this.video = require('@/assets/videos/projects/1/Trailer.mp4')
      return true
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
    id: {
      type: String,
      require: true,
    },
    count: {
      type: Number,
      required: true,
    },
    videos: {
      type: Array,
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
      clickLeft: require('@/assets/images/util/arrow_left.png'),
      clickRight: require('@/assets/images/util/arrow_right.png'),
      selection: require('@/assets/images/util/dot.png'),
      selected: require('@/assets/images/util/dotselected.png'),
      video: require('@/assets/videos/Logo.mp4'),
    }
  },
  created() {
    this.currentID = 1
    this.video = require(
        this.id)
  },
}
//  @/assets/videos/projects in ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SimpleGallery.vue?vue&type=script&lang=js&
</script>

<style scoped>
.alilgn {
  align-self: center;
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
