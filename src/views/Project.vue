<template>
  <Project :id="id" />
  <!-- {id: project.id -->
</template>

<script>
import Project from '@/components/projects/Project.vue'

export default {
  props: ['id'],

  components: {
    Project,
  },
}
</script>
