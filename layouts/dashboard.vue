<template>
  <v-app dark>
    <v-app-bar dense app>
      <v-toolbar-title v-text="'Dashboard'" />
      <v-spacer />
      <notification />
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

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="'Link Color'" />
          </v-list-item-content>
          <v-list-item-icon>
            <v-switch
              v-model="offon_linkcolor"
              :label="offon_linkcolor?'ON':'OFF'"
              class="ma-0 pa-0"
              inset
              hide-details
            />
          </v-list-item-icon>
        </v-list-item>

        <v-divider v-if="offon_linkcolor" />

        <v-list-item v-if="offon_linkcolor">
          <v-list-item-content>
            <v-item-group
              v-model="linkcolor"
              class="d-flex justify-space-between mb-3"
            >
              <v-item
                v-for="(col, index) in colors"
                :key="index"
                :value="col"
                class="mx-1"
              >
                <template #default="{ active }">
                  <v-avatar
                    size="30"
                    :color="col"
                    :class="active && 'v-settings__item--active'"
                    class="d-inline-block v-settings__item"
                    @click="linkcolor = col"
                  />
                </template>
              </v-item>
            </v-item-group>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="'Sidebar Image'" />
          </v-list-item-content>
          <v-list-item-icon>
            <v-switch
              v-model="offon_sidebarImage"
              :label="offon_sidebarImage ? 'ON' : 'OFF'"
              class="ma-0 pa-0"
              inset
              hide-details
            />
          </v-list-item-icon>
        </v-list-item>

        <v-divider />

        <v-list-item v-if="offon_sidebarImage">
          <v-list-item-content>
            <v-item-group
              v-model="image"
              class="d-flex justify-space-between mb-3"
            >
              <v-item
                v-for="(img, index) in images"
                :key="index"
                :value="img"
                class="mx-1"
              >
                <template #default="{ active, toggle }">
                  <v-sheet
                    :class="active && 'v-settings__item--active'"
                    class="d-inline-block v-settings__item rounded-lg"
                    @click="toggle((barImage = img))"
                  >
                    <v-img
                      class="rounded-lg"
                      :src="`/images/sidebar/sidebar-${img}.jpg`"
                      height="100"
                      width="43"
                    />
                  </v-sheet>
                </template>
              </v-item>
            </v-item-group>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-group>
          <template #activator>
            <v-list-item-content>
              <v-list-item-title v-text="'Backup Databases'" />
            </v-list-item-content>
          </template>

          <v-divider />

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="'Auto Backup'" />
            </v-list-item-content>
            <v-list-item-icon>
              <v-switch
                v-model="autobackup"
                :label="autobackup ? 'ON' : 'OFF'"
                class="ma-0 pa-0"
                inset
                hide-details
              />
            </v-list-item-icon>
          </v-list-item>

          <v-divider />

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn block :loading="backuploading" color="primary" @click="startBackup()">
                  backup now
                </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-divider />
      </v-list>
    </v-navigation-drawer>

    <overlay />
    <loading-dialog />
    <snack-bar />
    <logout ref="logout" />
  </v-app>
</template>

<script>
export default {
  name: 'DashboardLayout',
  data: () => ({
    mini: false,
    menus: [
      { link: '/dashboards/dashboard', text: 'Dashboard', icon: 'mdi-view-dashboard' },
      { link: '/dashboards/users', text: 'Users', icon: 'mdi-account-outline' },
      { link: '/dashboards/stores', text: 'Stores', icon: 'mdi-store-outline' },
      { link: '/dashboards/customers', text: 'Customers', icon: 'mdi-account-group-outline' },
      { link: '/dashboards/listsales', text: 'Listsale', icon: 'mdi-format-list-numbered' }
    ],
    setting: false,
    offon_sidebarImage: true,
    image: '1',
    barImage: '1',
    images: ['1', '2', '3', '4'],
    offon_linkcolor: false,
    linkcolor: 'primary',
    colors: ['primary', 'success', 'pink', 'red', 'teal', 'amber'],
    autobackup: null,
    backuploading: false
  }),
  async fetch () {
    this.autobackup = await this.$axios.$post('home/getsetting').then(res => res.data.auto_backup)
  },
  head () {
    return {
      title: 'Dashboard',
      htmlAttrs: { lang: this.$i18n.locale }
    }
  },
  computed: {
    confirm_password () {
      return this.new_pass_try === this.new_password
    }
  },
  watch: {
    '$vuetify.theme.dark' (val) {
      this.$cookies.set('dark', val)
    },
    '$vuetify.breakpoint.mdAndDown' (val) {
      this.mini = val
    },
    async autobackup (val) {
      const data = val ? 1 : 0
      await this.$axios.$post('home/setsetting', this.FormData({ autobackup: data }))
    }
    // ,
    // autobackup (val) {
    // this.$store.commit('BACKUP', val)
    // }
  },
  beforeCreate () {
    this.$vuetify.theme.dark = (this.$cookies.get('dark') === true)
  },
  methods: {
    FormData (obj) {
      const data = new FormData()
      for (const key in obj) {
        data.append(key, obj[key])
      }
      return data
    },
    async startBackup () {
      this.backuploading = true
      await this.$axios.$post('home/backup_database').then((res) => {
        setTimeout(() => {
          if (res.success) {
            this.$store.commit('SET_SUCCESS', 'BACKUP DATABASE SUCCESS...')
          } else {
            this.$store.commit('SET_ERROR', 'ERROR BACKUP')
          }
          this.backuploading = false
        }, 3000)
      })
    }
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
