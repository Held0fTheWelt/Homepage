<template>
  <v-container id="Portfolio">
    <v-row>
      <v-col cols="12">
        <ProjectsComponent
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="projectComponent"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gsap from 'gsap'
import ProjectsData from '@/assets/data/projects/projects.json'
import ProjectsComponent from '@/components/projects/Projects.vue'
export default {
  name: 'Portfolio',
  components: {
    ProjectsComponent,
  },

  data() {
    return {
      projects: ProjectsData.projects,
    }
  },
  mounted() {
    gsap.from('.projectComponent', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1',
      stagger: {
        each: 0.1,
        from: 'top',
      },
    })
  },
}
</script>

<style scoped>
#content {
  background-color: rgba(0, 0, 0, 0);
  background-attachment: fixed;
  background-image: url('../assets/images/projects/preview.png');
}
</style>