<template>
  <v-container class="home" >
      <v-row>
        <v-col>
          <v-card class="mx-auto">
            <SiteDashboard/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="mx-auto">
            <ProjectDashboard/>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SiteDashboard from '@/components/dashboard/SiteDashboard.vue';
import ProjectDashboard from '@/components/dashboard/ProjectDashboard.vue';

export default {
      name: "Home",  
  
    components: {
      SiteDashboard,
    ProjectDashboard,
  },
};
</script>

<style scoped>
h1{
   text-align: center;
   width: 100%;
}

.v-card{
  width: 75%;
  padding:0.75%;
}
</style>