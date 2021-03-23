<template>
  <div id="overlay">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Portfolio' }">Portfolio</router-link> |
      <router-link :to="{ name: 'About' }">About Me</router-link> |
      <router-link :to="{ name: 'Videos' }">Videos</router-link> |
      <router-link :to="{ name: 'Contact' }">Contact</router-link> |
      <router-link :to="{ name: 'Forms' }">Vue Forms</router-link> |
      <router-link :to="{ name: 'VueHome' }">Vue Home</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d8d8d8;
}
#overlay {
  position: relative;
  z-index: 1;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #999999;
}

#nav a.router-link-exact-active {
  color: #303294;
}

body {
  background: #000000;
}

h4 {
  font-size: 20px;
}
</style>
