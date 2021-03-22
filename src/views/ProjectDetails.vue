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
      project : null,
      id:1
    }
  }
  ,
created(){
    EventService.getProject  (this.id)
      .then(response =>{
        this.project = response.data
      })
      .catch(error => {
        console.log(error)
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>