<template>
  <v-container class="fill-height justify-center">
    <app-bar />
    <v-col md="6" lg="4" sm="7">
      <v-form ref="form_reset" @submit.prevent="reset_password">
        <v-card class="pa-5" rounded="lg" elevation="5">
          <v-card-title class="mt-3 justify-center">
            <v-divider class="mr-2" />
            <span
              class="font-weight-black text-h4"
              :class="$vuetify.theme.dark&&'text-glow'"
              v-text="$t('resetpassword.title')"
            />
            <v-divider class="ml-2" />
          </v-card-title>
          <v-divider />
          <v-card-text>
            <label v-text="$t('resetpassword.code_lbl')" />
            <v-otp-input
              ref="code"
              v-model="code"
              length="6"
              type="number"
              @finish="$refs.new_password.focus()"
            />

            <v-text-field
              ref="new_password"
              v-model="new_password"
              counter
              outlined
              validate-on-blur
              prepend-inner-icon="mdi-key-outline"
              :label="$t('resetpassword.pass_new')"
              :append-icon="showicon ? (showpass ? 'mdi-eye' : 'mdi-eye-off') : ''"
              :type="showpass ? 'text' : 'password'"
              :rules="[
                (v) => !!v || $t('resetpassword.val_password'),
                (v) => v.length >= 8 || $t('resetpassword.val_min8')
              ]"
              @click:append="showpass = !showpass"
            />
            <v-text-field
              ref="new_pass_try"
              v-model="new_pass_try"
              counter
              outlined
              validate-on-blur
              prepend-inner-icon="mdi-key-outline"
              :label="$t('resetpassword.pass_confirm')"
              :append-icon="showicon2 ? (showpass2 ? 'mdi-eye' : 'mdi-eye-off') : ''"
              :type="showpass2 ? 'text' : 'password'"
              :rules="[
                (v) => !!v || $t('resetpassword.val_password'),
                (v) => v.length >= 8 || $t('resetpassword.val_min8'),
                confirm_password || $t('resetpassword.some_value')
              ]"
              @click:append="showpass2 = !showpass2"
            />
            <v-btn
              large
              block
              class="btn-glow btn-gradient"
              type="submit"
              color="primary"
              v-text="$t('resetpassword.save')"
            />
          </v-card-text>
          <v-card-actions class="mx-2">
            <v-spacer />
            <span class="caption grey--text" v-text="`${$t('resetpassword.time_left')} : ${Time}`" />
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'ResetpasswordPage',
  auth: 'guest',
  data: () => ({
    code: '',
    code_mask: '#',
    new_password: '',
    new_pass_try: '',
    showpass: false,
    showicon: false,
    showpass2: false,
    showicon2: false,
    Time: 300
  }),
  head () {
    return {
      title: this.$t('resetpassword.title')
    }
  },
  computed: {
    confirm_password () {
      return this.new_pass_try === this.new_password
    }
  },
  watch: {
    new_password (val) {
      val ? this.showicon = true : this.showicon = false
    },
    showpass (val) {
      val && setTimeout(() => { this.showpass = false }, 2000)
    },
    new_pass_try (val) {
      val ? this.showicon2 = true : this.showicon2 = false
    },
    showpass2 (val) {
      val && setTimeout(() => { this.showpass2 = false }, 2000)
    }
  },
  mounted () {
    if (!this.$route.query.token) {
      return this.$router.push(this.localePath('/login'))
    }
    this.checkTime()
    this.$refs.code.focus()
  },
  methods: {
    FormData (obj) {
      const Data = new FormData()
      for (const key in obj) {
        Data.append(key, obj[key])
      }
      return Data
    },
    async reset_password () {
      if (this.code.length < 6) {
        this.$refs.code.focus()
        this.code = ''
        this.$store.commit('SET_ERROR', this.$t('resetpassword.val_code'))
      } else if (this.$refs.form_reset.validate()) {
        this.$store.commit('SET_OVERLAY', true)
        const Data = this.FormData({
          token: this.$route.query.token,
          code: this.code,
          password: this.new_password
        })
        await this.$axios.$post('/resetpassword/changpassword', Data).then((res) => {
          setTimeout(() => {
            if (res.success) {
              this.$store.commit('SET_SUCCESS', 'Your password has been changed successfully.')
              setTimeout(() => {
                this.$router.push(this.localePath('/login'))
              }, 5000)
            } else if (res.exit_code) {
              this.$refs.code.focus()
              this.$store.commit('SET_ERROR', 'erroe code')
            } else if (res.exit_time) {
              this.$refs.code.focus()
              this.$store.commit('SET_ERROR', 'Expiration time')
            } else {
              this.$store.commit('SET_ERROR', 'There was an error resetting the password.')
              setTimeout(() => {
                this.$router.push(this.localePath('/login'))
              }, 5000)
            }
            this.code = ''
            this.new_password = ''
            this.new_pass_try = ''
            this.$store.commit('SET_OVERLAY', false)
          }, 1000)
        })
      }
    },
    checkTime () {
      if (this.Time > 0) {
        setTimeout(() => {
          this.Time -= 1
          this.checkTime()
        }, 1000)
      } else {
        return this.$router.push(/* this.localePath('/login') */)
      }
    }
  }
}
</script>
