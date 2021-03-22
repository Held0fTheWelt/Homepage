<template>
  <div class="projectDetails">
    <h1>{{project.title}}</h1>
    <span>@ {{project.location}} on {{project.date}}</span>
    <p>{{project.description}}</p>    
  </div>
</template>

<script>
import ProjectsComponent from "@/components/Project.vue";
import EventService from "@/services/EventService.js";

export default {  
  data(){
    return {
      projects : null
    }
  }
  ,
  created(){
      // fetch event (by id) and set local data
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>