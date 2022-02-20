<template>
  <v-app dark>
    <v-app-bar dense app>
      <v-app-bar-nav-icon @click="$router.go(-1)">
        <v-icon v-text="'mdi-arrow-left-circle'" />
      </v-app-bar-nav-icon>
      <v-toolbar-title v-text="'Dashboard'" />
      <v-spacer />
      <v-btn-toggle dense>
        <v-btn x-small :to="switchLocalePath('th')" v-text="'th'" />
        <v-btn x-small :to="switchLocalePath('en')" v-text="'en'" />
      </v-btn-toggle>
      <v-divider class="mx-3" inset vertical />
      <v-btn
        icon
        @click="setting = true"
      >
        <v-icon dark v-text="'mdi-cog-outline'" />
      </v-btn>
      <v-divider class="mx-3" inset vertical />
      <v-btn icon @click="$refs.logout.open()">
        <v-icon v-text="'mdi-power'" />
      </v-btn>
    </v-app-bar>

    <v-main :class="!$vuetify.theme.dark && 'blue lighten-5'">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer
      v-model="setting"
      app
      temporary
      right
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title" v-text="'Setting'" />
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="setting=false">
              <v-icon v-text="'mdi-close'" />
            </v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-divider />

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="'Dark Mode'" />
          </v-list-item-content>
          <v-list-item-icon>
            <v-switch
              v-model="$vuetify.theme.dark"
              :label="$vuetify.theme.dark ? 'ON' : 'OFF'"
              class="ma-0 pa-0"
              inset
              hide-details
            />
          </v-list-item-icon>
        </v-list-item>

        <v-divider />
      </v-list>
    </v-navigation-drawer>

    <loading-dialog />
    <overlay />
    <snack-bar />
    <logout ref="logout" />
  </v-app>
</template>

<script>
export default {
  name: 'DashboardLayout',
  data: () => ({
    setting: false
  }),
  head () {
    return {
      title: 'Dashboard',
      htmlAttrs: { lang: this.$i18n.locale }
    }
  },
  watch: {
    '$vuetify.theme.dark' (val) {
      this.$cookies.set('dark', val)
    }
  },
  beforeCreate () {
    this.$vuetify.theme.dark = (this.$cookies.get('dark') === true)
  }
}
</script>
<style>
  .v-avatar.v-settings__item,
  .v-settings__item > * {
    cursor: pointer;
  }
  .v-settings__item {
    border-width: 3px;
    border-style: solid;
    background-color: transparent !important;
    border-color: transparent !important;
  }
  .v-avatar.v-settings__item.v-settings__item--active,
  .v-settings__item--active {
    border-color: #00cae3 !important;
  }
</style>
