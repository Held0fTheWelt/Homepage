<template><div>
    <router-link class="projectLink" :to="{name: 'Project' , params: {id: project.id }}">
      <v-card v-if="$vuetify.breakpoint.smAndDown" class="mx-auto project-xs">
        <v-row>
          <v-col cols="12"  class="hoverData">
              <!-- Image goes here -->
              <v-img v-bind:src="image" alt="Project Image"/>
          </v-col>
        </v-row>
          <!-- Display Data-->
          <v-row cols="12"  class="hoverData">
              <v-col>
                  <h3 >@ {{project.location}} on {{project.date}}</h3> 
              </v-col>
          </v-row>
          <v-row cols="12"  class="hoverData">
              <v-col>
                  <h4>{{project.title}}</h4>                        
              </v-col>
          </v-row>
          <v-row cols="12"  class="hoverData">
              <v-col>
                  {{project.description}}
              </v-col>
          </v-row> 
          <v-row cols="12" class="hoverData {'pad-xs' : $vuetify.breakpoint.xs}">
              <v-col>
                  {{project.shortStory}}
              </v-col>
          </v-row> 
      </v-card>
      <v-card v-if="$vuetify.breakpoint.mdAndUp" class="mx-auto project-large">
          <v-card-text>
          <v-row>
              <v-col cols="7"  class="hoverData">
                  <!-- Image goes here -->
                  <v-img v-bind:src="image" alt="Project Image"/>

              </v-col>
              <v-col cols="5">
                  <!-- Display Data-->
                  <v-row  class="hoverData">
                      <v-col>
                          <h3>@ {{project.location}} on {{project.date}}</h3> 
                      </v-col>
                  </v-row>
                  <v-row  class="hoverData">
                      <v-col>
                          <h4>{{project.title}}</h4>                        
                      </v-col>
                  </v-row>
                  <v-row  class="hoverData">
                      <v-col>
                          {{project.description}}
                      </v-col>
                  </v-row> 
                  <v-row class="hoverData">
                      <v-col>
                          {{project.shortStory}}
                      </v-col>
                  </v-row>                
              </v-col>
          </v-row>     
          </v-card-text>   
      </v-card>
    </router-link>
          </div>
</template>

<script>
  export default{
    name:'Project',
    props:
    {
      project: {
        type: Object,
        required: true
      }
    },
    data(){
      return {
        image : require('@/assets/images/projects/' + this.project.id + '/image_big_logo.png')
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h4, h3 {
  text-align: center;
}

  .project-xs .row .col
{
  margin:0%;
  padding-left:5%;
}

.hoverData :hover{
  transform: scale(1.03);
  /* box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2); */
}

.projectLink {
  text-decoration: none;
  color: #f3f3f3;
}

.project-large {
    cursor: pointer;
    border: 1px solid #666666;
    margin-bottom: 2%;  
    width: 55%;
  }

  .project-xs {
    align-content:center;
    cursor: pointer;
    border: 1px solid #666666;
    margin-bottom: 2%;  
    padding: 5%;
    width: 80%;
  }
</style>
