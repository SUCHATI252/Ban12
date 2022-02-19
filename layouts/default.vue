<template>
  <v-app dark>
    <v-app-bar app dense flat color="transparent" :class="!$vuetify.theme.dark && 'blue lighten-5'">
      <v-spacer />
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            id="theme-guest"
            aria-label="theme-dark"
            icon
            class="mr-3"
            v-bind="attrs"
            @click="$vuetify.theme.dark=!$vuetify.theme.dark"
            v-on="on"
          >
            <v-icon>mdi-invert-colors</v-icon>
          </v-btn>
        </template>
        <span>{{ $vuetify.theme.dark?'Light':'Dark' }}</span>
      </v-tooltip>
      <v-btn-toggle dense>
        <v-btn :to="switchLocalePath('th')" x-small>
          th
        </v-btn>
        <v-btn :to="switchLocalePath('en')" x-small>
          en
        </v-btn>
      </v-btn-toggle>
    </v-app-bar>
    <v-main :class="!$vuetify.theme.dark && 'blue lighten-5'">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head () {
    return {
      htmlAttrs: { lang: this.$i18n.locale }
    }
  },
  watch: {
    '$vuetify.theme.dark' (val) {
      this.$cookies.set('Dark', val)
    }
  },
  beforeCreate () {
    this.$vuetify.theme.dark = (this.$cookies.get('Dark') === true)
  }
}
</script>
