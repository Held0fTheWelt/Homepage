<template>
  <v-container class="projectDetails mx-auto" v-if="project">
    <div v-if="$vuetify.breakpoint.smAndDown">
      <v-card>
        <v-row>
          <v-col cols="12">
            <Gallery
              v-bind:id="1"
              v-bind:count="4"
              v-bind:videos="[4]"
              v-bind:url="[
                getImageURL(1),
                getImageURL(2),
                getImageURL(3),
                getVideoURL(),
              ]"
            />
          </v-col>
        </v-row>
        <v-row class="alignCenter">
          <v-col
            ><h1>{{ project.title }}</h1>
          </v-col>
        </v-row>
        <v-row class="alignCenter">
          <v-col>@ {{ project.location }} on {{ project.date }} </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ project.description }}
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ project.shortStory }}
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-card class="projectTop">
        <v-row>
          <v-col cols="7">
            <Gallery
              :mp4="require(``+getVideoURL())"
              :count="4"
              :videos="[4]"
              :url="[
                getImageURL(1),
                getImageURL(2),
                getImageURL(3),
                getVideoURL(),
              ]"
            />
          </v-col>
          <v-col cols="5">
            <v-row class="alignCenter">
              <v-col
                ><h1>{{ project.title }}</h1>
              </v-col>
            </v-row>
            <v-row class="alignCenter">
              <v-col>@ {{ project.location }} on {{ project.date }} </v-col>
            </v-row>
            <v-row>
              <v-col>
                {{ project.description }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                {{ project.shortStory }}
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <v-row>
      <v-col cols="4"> <Specs :project="project" /></v-col>
      <v-col cols="4"> <Log /></v-col>
      <v-col cols="4"> <Download /></v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
// <video autoplay controls id="logoVideo">
//   <source v-bind:src="video" type="video/mp4" />
//   <!-- <source src="../assets/Logo.ogg" type="video/ogg"> -->
//   Ihr Browser kann dieses Video nicht wiedergeben.<br />
//   Dieser Film zeigt einen Trailer zum Projekt.
// </video>

import EventService from '@/services/EventService.js'
import Download from '@/components/projects/Download.vue'
import Log from '@/components/projects/Log.vue'
import Specs from '@/components/projects/Specs.vue'
// import Client from '@/components/projects/WebClient.vue'
import Gallery from '@/components/SimpleGallery.vue'
export default {
  props: {
    id: {
      type: String,
      require: true,
    },
  },
  components: {
    // Client,
    Gallery,
    Log,
    Specs,
    Download,
  },
  methods: {
    getVideoURL: function () {
       return `@/assets/videos/projects/${this.id}/Trailer.mp4`
    },
    getImageURL: function (currentShot) {
      return `${this.id}/screenshots/` + currentShot + '.jpg'
    },
  },
  data() {
    return {
      project: null,
      video: null,
    }
  },
  created() {
    let result = this.id - 1
    this.project = EventService.getProject(result)
  },
}
//<!-- Add "scoped" attribute to limit CSS to this component only <style scoped></style>-->
</script>

<style scoped>
.alignCenter {
  text-align: center;
}
.projectTop {
  padding: 2%;
  margin-bottom: 1%;
}
video {
  object-fit: contain;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
