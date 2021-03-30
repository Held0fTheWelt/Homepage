<template>
  <router-link class="projectLink" :to="{name: 'Project' , params: {id: project.id }}">
    <v-card class="project mx-auto">
        <v-card-text>
        <v-row>
            <v-col cols="7"  class="hoverData">
                <!-- Image goes here -->
                <img v-bind:src="image" alt="Project Image"/>

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
        image : require('../assets/images/projects/' + this.project.id + '/image_big_logo.png')
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
   white-space: pre;
   line-height: 1.6em;
}

img {
    object-fit: scale-down;
    width: 100%;

}

h4, h3 {
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.project {
  cursor: pointer;
  border: 1px solid #666666;
  margin-bottom: 2%;  
  width: 55%;
}

.hoverData :hover{
  transform: scale(1.03);
  /* box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2); */
}

.projectLink {
  text-decoration: none;
  color: #f3f3f3;
}

</style>
