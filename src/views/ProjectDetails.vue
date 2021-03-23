<template>
  <div class="projectDetails" v-if="project">
    <h1>{project.title}</h1>
    <span>@ {project.location} on {project.date}</span>
    <p>{project.description}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      project: null,
    };
  },
  created() {
    EventService.getProject(this.id)
      .then((response) => {
        this.project = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
//<!-- Add "scoped" attribute to limit CSS to this component only <style scoped></style>-->
</script>