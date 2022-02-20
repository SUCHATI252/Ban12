<template>
  <div>
    <v-form @submit.prevent="go">
      <v-text-field
        id="email"
        ref="email"
        v-model="email"
      />
      <v-btn type="submit">
        click
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data: () => ({
    imput1: ''
  }),
  methods: {
    FormData (obj) {
      const data = new FormData()
      for (const key in obj) {
        data.append(key, obj[key])
      }
      return data
    },
    go () {
      // const data = this.FormData({ name: this.input })
      // eslint-disable-next-line no-console
      console.log(this.email)
      const dd = this.email
      const s = this.$axios.$post('/test', { name: dd }).then(res => res.name)
      // eslint-disable-next-line no-console
      console.log(s)
    }
  }
}
</script>

<style>

</style>
