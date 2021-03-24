<template>
  <div class="project">
      <div class="project-image-small">
        <!-- Image goes here -->
        <img v-bind:src="image" alt="Project Image"/>
      </div>
      <!-- Display Data-->
      <span>@ {{project.location}} on {{project.date}}</span>
      <h4>{{project.title}}</h4>
  </div>
</template>

<script>
export default{
  name:'ProjectDetails',        
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
  width: 250px;
  cursor: pointer;
  border: 1px solid #666666;
  margin-bottom: 18px;
}

.project :hover{
  transform: scale(1.03);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
