<template>
  <v-container class="fill-height justify-center">
    <v-col cols="12" md="6" lg="4" sm="7">
      <v-form ref="form_login" @submit.prevent="check_login">
        <v-card class="pa-5" rounded="lg" elevation="5">
          <v-card-title class="my-3 justify-center">
            <v-divider class="mr-2" />
            <span class="font-weight-black text-h4" :class="$vuetify.theme.dark&&'text-glow'">
              {{ $t('login.title') }}
            </span>
            <v-divider class="ml-2" />
          </v-card-title>
          <v-card-text class="pb-1">
            <v-text-field
              id="email"
              ref="email"
              v-model="email"
              autofocus
              outlined
              required
              validate-on-blur
              prepend-inner-icon="mdi-account-outline"
              :label="$t('login.email')"
              placeholder="youemail@gmail.com"
              :rules="[
                v => !!v || $t('login.val_data'),
                v => /.+@.+\..+/.test(v) || $t('login.val_email'),
                check_gmail || $t('forgot.no_gmail')
              ]"
            />
            <v-text-field
              id="password"
              ref="password"
              v-model="password"
              counter
              validate-on-blur
              outlined
              required
              placeholder="Password"
              prepend-inner-icon="mdi-lock-outline"
              :label="$t('login.password')"
              :append-icon="showicon ? (showpass ? 'mdi-eye' : 'mdi-eye-off') : ''"
              :type="showpass ? 'text' : 'password'"
              :rules="[
                (v) => !!v || $t('login.val_password'),
                (v) => v.length >= 8 || $t('login.val_min8')
              ]"
              @click:append="showpass = !showpass"
            />
            <v-checkbox
              v-model="remember"
              :label="$t('login.remember')"
              class="mt-0 mb-n2 ml-2 pt-0"
            />
            <v-btn
              large
              block
              rounded
              class="btn-glow btn-gradient"
              type="submit"
              color="primary"
              v-text="$t('login.btn')"
            />
          </v-card-text>
          <v-card-actions class=" justify-center">
            <v-btn
              text
              color="primary"
              class="text-capitalize"
              :to="localePath('/forgotpassword')"
              v-text="$t('login.forgot')"
            />
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  auth: 'guest',
  data: () => ({
    email: '',
    password: '',
    showpass: false,
    remember: false,
    lock_id: 5,
    showicon: false
  }),
  head () {
    return {
      title: this.$t('login.title')
    }
  },
  computed: {
    check_gmail () {
      return this.email.includes('@gmail.com')
    }
  },
  watch: {
    password (val) {
      val ? this.showicon = true : this.showicon = false
    },
    showpass (val) {
      if (val) {
        setTimeout(() => { this.showpass = false }, 1000)
      }
    },
    async lock_id (val) {
      if (val < 0) {
        const data = this.FormData({ email: this.email })
        await this.$axios.$post('/login/locked_user', data).then((res) => {
          if (res.success) {
            this.$store.commit('SET_ERROR', 'Email Is Locked')
            this.lock_id = 5
          }
        })
      }
    }
  },
  created () {
    this.email = this.$cookies.get('email') || ''

    // eslint-disable-next-line no-console
    console.log(this.$route.fullPath)
  },
  methods: {
    FormData (obj) {
      const data = new FormData()
      for (const key in obj) {
        data.append(key, obj[key])
      }
      return data
    },
    async check_login () {
      if (!this.email) {
        this.$refs.email.focus()
      } else if (!this.password) {
        this.$refs.password.focus()
      } else if (this.$refs.form_login.validate()) {
        this.$store.commit('SET_OVERLAY', true)
        const data = { email: this.email, password: this.password }
        await this.$axios.$post('/login/check_login', data).then((res) => {
          setTimeout(() => {
            if (res.error_email) {
              this.email = ''
              this.$refs.email.focus()
              this.$store.commit('SET_ERROR', this.$t('login.email_no_match'))
            } else if (res.errorpassword) {
              this.lock_id--
              this.password = ''
              this.$refs.password.focus()
              this.$store.commit('SET_ERROR', this.$t('login.pass_no_match'))
            } else if (res.success) {
              this.$auth.loginWith('local', { data }).then(() => {
                if (this.remember) {
                  this.$cookies.set('email', this.email)
                } else {
                  this.$cookies.remove('email')
                }
                this.$store.commit('SET_OVERLAY', false)
              })
            } else {
              this.email = ''
              this.password = ''
              this.$refs.email.focus()
              this.$store.commit('SET_ERROR', 'ERROR LOGIN')
            }
            this.$store.commit('SET_OVERLAY', false)
          }, 1000)
        })
      }
    }
  }
}
</script>
