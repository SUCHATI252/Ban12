<template>
  <v-container class="fill-height justify-center">
    <app-bar />
    <v-col md="6" lg="4" sm="7">
      <v-form ref="form_forgot" @submit.prevent="forgot">
        <v-card class="pa-5" rounded="lg" elevation="5">
          <v-alert
            v-model="forgot_alert_success"
            dense
            text
            type="success"
          >
            The code and link has been sent to {{ email_text }}.
            <br>
            Please check your email.
          </v-alert>
          <v-sheet v-if="!forgot_alert_success">
            <v-card-title class="pb-1 title justify-center">
              <div>
                <div class="d-flex align-start justify-center">
                  <v-icon size="100" v-text="'mdi-lock-reset'" />
                </div>
                <div class="d-flex align-end justify-center" :class="$vuetify.theme.dark&&'text-glow'">
                  <span class="text-h4 font-weight-bold" v-text="$t('forgot.title')" />
                </div>
              </div>
            </v-card-title>
            <v-card-text class="pt-0 pb-1">
              <v-sheet class="pb-5 text-center">
                <span class="caption grey--text text--darken-1" v-text="$t('forgot.sub_email_title')" />
                <br>
                <span class="caption grey--text text--darken-1" v-text="$t('forgot.sub_email')" />
              </v-sheet>
              <v-text-field
                v-model="email"
                :rules="[
                  v => !!v || $t('forgot.val_data'),
                  v => /.+@.+\..+/.test(v) || $t('forgot.val_email'),
                  check_gmail || $t('forgot.no_gmail')
                ]"
                placeholder="yourname@gmail.com"
                prepend-inner-icon="mdi-email-outline"
                :label="$t('forgot.email')"
                validate-on-blur
                outlined
                autofocus
                type="email"
              />
              <v-btn
                large
                block
                rounded
                class="btn-glow btn-gradient"
                type="submit"
                color="primary"
                v-text="$t('forgot.send')"
              />
            </v-card-text>
            <v-card-actions class=" justify-center">
              <v-btn
                text
                color="primary"
                class="text-capitalize"
                :to="localePath('/login')"
                v-text="$t('forgot.back')"
              />
            </v-card-actions>
          </v-sheet>
        </v-card>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'ForgotpasswordPage',
  auth: 'guest',
  data: () => ({
    email: '',
    email_text: '',
    forgot_alert_success: false
  }),
  head () {
    return {
      title: this.$t('forgot.title')
    }
  },
  computed: {
    check_gmail () {
      return this.email.includes('@gmail.com')
    }
  },
  methods: {
    FormData (obj) {
      const Data = new FormData()
      for (const key in obj) {
        Data.append(key, obj[key])
      }
      return Data
    },
    async forgot () {
      if (this.$refs.form_forgot.validate()) {
        this.$store.commit('SET_OVERLAY', true)
        const data = this.FormData({ email: this.email })
        await this.$axios.$post('/forgotpassword/sendcode', data).then((res) => {
          setTimeout(() => {
            this.$store.commit('SET_OVERLAY', false)
            if (res.success) {
              this.email_text = this.email
              this.email = ''
              this.forgot_alert_success = true
              setTimeout(() => {
                this.$router.push({ path: this.localePath('/resetpassword'), query: { token: res.token } })
              }, 3000)
            } else if (res.noactivate) {
              this.email = '1'
              this.$refs.email.focus()
              this.$store.commit('SET_ERROR', 'This is Username NO Activate')
            } else if (res.exit_email) {
              this.email = '2'
              this.$refs.email.focus()
              this.$store.commit('SET_ERROR', 'exit_email')
            } else if (res.no_send) {
              this.email = '3'
              this.$refs.email.focus()
              this.$store.commit('SET_ERROR', 'No_Send')
            } else {
              this.$store.commit('SET_ERROR', 'NO_User')
              this.email = '4'
              this.$refs.email.focus()
            }
          }, 1000)
        })
      }
    }
  }
}
</script>
