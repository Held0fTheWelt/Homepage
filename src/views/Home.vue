<template>
  <v-container class="home" >
      <v-row>
        <v-col>
          <v-card class="mx-auto {'.v-card-xs' : $vuetify.breakpoint.xs, '.v-card-big' : $vuetify.breakpoint.mdAndUp}">
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
      <v-row>
        <v-col>
            <LogoVideo/>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import LogoVideo from '@/components/site/LogoVideo.vue';
import SiteDashboard from '@/components/dashboard/SiteDashboard.vue';
import ProjectDashboard from '@/components/dashboard/ProjectDashboard.vue';

export default {
      name: "Home",  
  
    components: {
      LogoVideo,
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

.v-card-xs{
  width: 98%;
  padding:0.15%;
}

.v-card-big{
  width: 75%;
  padding:0.75%;
}
</style>