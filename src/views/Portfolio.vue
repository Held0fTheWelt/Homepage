<template>
  <div class="projects">
    <h1>My Projects at SAE Bochum 09/2017 - 03/2019</h1>    
      <!-- Display Project Data -->
      <ProjectsComponent v-for="project in projects" :key="project.id" :project="project" class="projectComponent"/>    
  </div>
</template>

<script>
import ProjectsComponent from "@/components/Project.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "Projects",
  components: {
    ProjectsComponent
  },
  data(){
    return {
      projects : null
    }
  },
  created(){
    EventService.getProjects  ()
      .then(response =>{
        this.projects = response.data
      })
      .catch(error => {
        console.log(error)
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects{
  display:flex;
  flex-direction: column;
  align-items: center;
}

.projectComponent{
  float:left;
}
</style>