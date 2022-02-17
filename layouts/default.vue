<template>
  <v-app dark>
    <v-main :class="!$vuetify.theme.dark && 'blue lighten-5'">
      <Nuxt />
    </v-main>
    <snack-bar />
    <overlay />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
