<template>
  <div class="logo">
    <video autoplay loop muted id="logoVideo">
      <source src="../assets/videos/Logo.mp4" type="video/mp4"> 
      <!-- <source src="../assets/Logo.ogg" type="video/ogg"> -->
      Ihr Browser kann dieses Video nicht wiedergeben.<br/>
      Dieser Film zeigt ein Logo Animation. 
      Sie können ihn sie <a href="#">https://www.youtube.com/watch?v=Y_kQ8DO3Wuw</a> abrufen.
    </video>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#logoVideo
{
    position:absolute;
    z-index:0;
    left: 0;
    top: -75px;
    width:"200";
    height:"200";

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
</style>
