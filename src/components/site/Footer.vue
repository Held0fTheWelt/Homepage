<template>
  <div id="Footer">
    <v-footer :v-bind="localAttrs" :padless="padless">
      <v-card flat tile width="100%" class="grey darken-4 text-center">
        <v-card-text>
          <v-btn
            v-for="(item, link) in links"
            :key="link"
            class="mx-4"
            icon
            :href="item.url"
          >
            <v-icon size="24px"> {{ item.icon }} </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Yves Tanas</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: ['mdi-home', 'mdi-email', 'mdi-facebook', 'mdi-linkedin'],
    items: ['default', 'absolute', 'fixed'],
    links: [
      {
        icon: 'mdi-home',
        url: '/',
        href: false,
      },
      {
        icon: 'mdi-email',
        url: '/contact',
        href: false,
      },
      {
        icon: 'mdi-facebook',
        url: 'https://www.facebook.com/hollywood.006/',
        href: true,
      },
      {
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/yves-tanas-ba6b05ba/',
        href: true,
      },
    ],

    padless: false,
    variant: 'default',
  }),
  methods: {
    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
}
</script>

<style scoped>
#Footer {
  background: #000;
}
</style>
