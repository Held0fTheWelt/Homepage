<template>
  <div class="forms"  id="test">
    <h1>Forms Test Page</h1>

    <h3>Where is the question:</h3>
    <input type="text" placeholder="Test" class="field">

    <BaseInput v-model="event.title" label="Title" type="text"/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      event: {
        title: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forms{
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>