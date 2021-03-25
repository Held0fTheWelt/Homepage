<template>
    <video autoplay controls  id="logoVideo">
        <source v-bind:src="video" type="video/mp4"> 
        <!-- <source src="../assets/Logo.ogg" type="video/ogg"> -->
        Ihr Browser kann dieses Video nicht wiedergeben.<br/>
        Dieser Film zeigt einen Trailer zum Projekt. 
    </video>
</template>

<script>

export default {
    name:'ProjectVideo',
    props:
    {
      project: {
        type: Object,
        required: true
      }
    },
    data(){
        return {
            video = require('../assets/videos/Projects/' + this.project.id + '/Trailer.mp4')
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video {
	object-fit: contain;
	width:40%;
	height:80%;
  padding-left: 20px;
  padding-right: 20px;
  float:left;
}
</style>
