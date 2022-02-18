<template>
  <v-app dark>
    <v-app-bar dense flat color="transparent" :class="!$vuetify.theme.dark && 'blue lighten-5'">
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
        <v-btn x-small>
          th
        </v-btn>
        <v-btn x-small>
          en
        </v-btn>
      </v-btn-toggle>
    </v-app-bar>
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
