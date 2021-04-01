<template>
    <v-container id="Portfolio" >
      <v-row>
        <v-col cols="12">
          <ProjectsComponent v-for="project in projects" :key="project.id" :project="project" class="projectComponent"/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import ProjectsData from '@/assets/data/projects/projects.json';
import ProjectsComponent from '@/components/projects/Projects.vue';
export default {
    name: "Portfolio",  
  
    components: {
      ProjectsComponent,
  },
  data(){
    return {
      projects: ProjectsData.projects      
    }
  }
}
</script>

<style scoped>

</style>