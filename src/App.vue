<template>
  <v-app id="vApp">
    <Navbar />
    <v-main id="content">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/site/Navbar.vue'
import Footer from '@/components/site/Footer.vue'

export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
}
</script>
<style>
#content {
  width: 100%;
}

table.v-table tbody td,
table.v-table tbody th {
  height: 19px;
}

/*** Fade Transitions */
/* Slide Left */
.slide-fade-enter {
  transform: translateX(10%);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10%);
  opacity: 0;
}

/* Slide Up */
.slide-up-enter {
  transform: translateY(10%);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.2s ease;
}

/*** Fade Transitions */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
