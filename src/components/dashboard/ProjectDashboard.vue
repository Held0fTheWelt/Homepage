<template>
  <v-card
    class="mx-auto rounded {'v-cardPad' : $vuetify.breakpoint.xs, 'v-card' : $vuetify.breakpoint.mdAndUp}"
    id="dashboard"
  >
    <v-card-title
      ><h1
        :class="{
          xsFont: $vuetify.breakpoint.xs,
          largeFont: $vuetify.breakpoint.mdAndUp,
        }"
      >
        Project Dashboard
      </h1></v-card-title
    >
    <v-card-text>
      <v-data-table
        dense
        :headers="headers"
        :items="projects"
        :items-per-page="5"
        :class="{
          xsFont: $vuetify.breakpoint.xs,
          largeFont: $vuetify.breakpoint.mdAndUp,
        }"
        justify="center"
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import Projects from '@/assets/data/projects/projects.json'
export default {
  name: 'ProjectDashboard',
  data() {
    return {
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: true,
          value: 'id',
        },
        {
          text: 'Project',
          align: 'left',
          sortable: false,
          value: 'title',
        },
        {
          text: 'Engine',
          sortable: 'true',
          value: 'category',
        },
        {
          text: 'Status',
          sortable: 'true',
          value: 'status',
        },
        {
          text: 'Date',
          sortable: 'true',
          value: 'date',
        },
      ],
      projects: Projects.projects,
    }
  },
}
</script>

<style scoped>
.v-cardPad {
  padding: 0%;
}

.v-card__title {
  padding: 2%;
}
h1 {
  text-align: center;
  width: 100%;
}

#dashboard {
  width: 100%;
}
</style>
