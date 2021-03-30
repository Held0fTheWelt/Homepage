<template>
    <v-card class="mx-auto mt-5 rounded" id="dashboard" >
      <v-card-title><h1 :class="{'xsFont' : $vuetify.breakpoint.xs, 'largeFont' : $vuetify.breakpoint.mdAndUp}">Project Dashboard</h1></v-card-title>
      <v-card-text>
        <v-data-table dense :headers="headers" :items="projects" :items-per-page="5" :class="{'xsFont' : $vuetify.breakpoint.xs, 'largeFont' : $vuetify.breakpoint.mdAndUp}" justify="center" ></v-data-table>
      </v-card-text>
    </v-card>
    
</template>

<script>
import Projects from '@/assets/data/projects/projects.json';
  export default {

    name:"ProjectDashboard",
   data(){
     return {

       headers:[
        {           
          text:'Project',
          align: 'left',
          sortable: 'true',
          value:'title'
        },
        {
          text:'Type',
          sortable: 'true',
          value:'type'
        },
        {
        text:'Status',
        sortable: 'true',
        value:'status'
        },
        {
          text:'Date',
          sortable: 'true',
          value:'date'
         },
       ],
        projects: Projects.projects
      }
   }
  }
</script>

<style scoped>
h1
{
  text-align: center;
  width: 100%;
}

#dashboard{
  width: 100%;
}


</style>