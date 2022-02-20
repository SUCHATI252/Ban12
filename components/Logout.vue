<template>
  <v-dialog v-model="dialog_logout" width="320">
    <v-card>
      <v-card-title class="headline">
        Logout
      </v-card-title>
      <v-divider />
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur.
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn color="success" @click="$auth.logout()">
          yes
        </v-btn>
        <v-btn color="error" @click="dialog_logout = false">
          no
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LogOut',
  data: () => ({
    dialog_logout: false
  }),
  methods: {
    open () {
      this.dialog_logout = true
    }
  }
}
</script>
