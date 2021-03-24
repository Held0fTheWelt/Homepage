<template>
  <div class="projectDetails" v-if="project">
    <div class="project-image-small">
      <img v-bind:src="image" alt="Project Image"/>
    </div>
    <h1>{{project.title}}</h1>
    <span class="location">@ {{project.location}} on {{project.date}}</span>
    <p>{{project.description}}</p>
    <p class="shortStory">{{project.shortStory}}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      project: null,
      image : null
    };
  },
  created() {
    EventService.getProject(this.id)
      .then((response) => {
        this.project = response.data;
        this.image = require('../assets/images/projects/' + this.project.id + '/image_big_logo.png');
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
//<!-- Add "scoped" attribute to limit CSS to this component only <style scoped></style>-->
</script>

<style scoped>
.shortStory{
  padding-left: 80px;
  text-align: left;
  white-space: pre;
  line-height: 1.2em;
}

h1 {
  /* text-align: center; */
}

.location{
  /* text-align: center; */
}

p{
   white-space: pre;
   line-height: 1.6em;
}

img {
	object-fit: contain;
	width:50%;
	height:80%;
  padding-left: 20px;
  padding-right: 20px;
  float:left;
}
</style>