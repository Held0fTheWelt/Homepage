<template>
  <v-container class="projectDetails mx-auto" v-if="project">
    <!-- <div class="project-image-small">
      <img v-bind:src="image" alt="Project Image"/>
    </div> -->
    <v-row>
      <v-col cols="5">
        <video autoplay controls id="logoVideo">
          <source v-bind:src="video" type="video/mp4" />
          <!-- <source src="../assets/Logo.ogg" type="video/ogg"> -->
          Ihr Browser kann dieses Video nicht wiedergeben.<br />
          Dieser Film zeigt einen Trailer zum Projekt.
        </video>
      </v-col>
      <v-col cols="7">
        <vcard>
          <v-card-title
            ><h1>{{ project.title }}</h1></v-card-title
          >
          <v-card-text>
            <v-row>
              <v-col>
                <span class="location"
                  >@ {{ project.location }} on {{ project.date }}</span
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>{{ project.description }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>{{ project.shortStory }}</p>
              </v-col>
            </v-row>
          </v-card-text>
        </vcard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  data() {
    return {
      project: null,
      video: null,
    }
  },
  created() {
    EventService.getProject(this.id)
      .then((response) => {
        this.project = response.data
        this.video = require('../assets/videos/Projects/' +
          this.project.id +
          '/Trailer.mp4')
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
//<!-- Add "scoped" attribute to limit CSS to this component only <style scoped></style>-->
</script>

<style scoped>
.shortStory {
  padding-left: 45%;
  text-align: left;
  white-space: pre;
  line-height: 1.2em;
}

h1 {
  /* text-align: center; */
}

.location {
  /* text-align: center; */
}

p {
  white-space: pre;
  line-height: 1.6em;
}

video {
  object-fit: contain;
  width: 100%;
  /*height:80%; */
  padding-left: 20px;
  padding-right: 20px;
  float: left;
}
</style>
