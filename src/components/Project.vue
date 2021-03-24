<template>
  <router-link class="projectLink" :to="{name: 'ProjectDetails' , params: {id: project.id }}">
    <div class="project">
        <div class="project-image-small">
          <!-- Image goes here -->
          <img v-bind:src="image" alt="Project Image"/>
        </div>
        <!-- Display Data-->
        <span>@ {{project.location}} on {{project.date}}</span>
        <h4>{{project.title}}</h4>
        <p>{{project.description}}</p>
    </div>
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
}

img {
	object-fit: contain;
	width:50%;
	height:80%;
  float:left;
}

h3 {
  margin: 40px 0 0;
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
  padding: 20px;
  width: 600px;
  height: 170px;
  cursor: pointer;
  border: 1px solid #666666;
  margin-bottom: 18px;  
}

.project :hover{
  transform: scale(1.03);
  /* box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2); */
}

.projectLink {
  text-decoration: none;
  color: #f3f3f3;
}

</style>
