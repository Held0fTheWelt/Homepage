<template>
    <section class="section has-text-centered">
        <h1 class="title is-1">
            Your Window
        </h1>
        <h3 class="title is-3">
            Width: {{ window.width }} px<br/>
            Height: {{ window.height }} px
        </h3>
        <p class="has-text-white">
            &uarr;<br/>
            &larr; resize window &rarr;<br/>
            &darr;
        </p>
    </section>
</template>

<script>
new Vue({
    data: {
        window: {
            width: 0,
            height: 0
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }
});

</script>

<style scoped>

html, body, #app, section.section {
  height: 100%;
}

body {
    background: -webkit-linear-gradient($top-color, $bottom-color);
    background: -o-linear-gradient($top-color, $bottom-color);
    background: -moz-linear-gradient($top-color, $bottom-color);
    background: linear-gradient($top-color, $bottom-color);
}

section.section {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.title {
    color: white;
}
</style>