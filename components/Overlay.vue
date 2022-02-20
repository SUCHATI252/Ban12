<template>
  <v-overlay :value="$store.state.overlay">
    <v-progress-circular
      indeterminate
      size="64"
    />
  </v-overlay>
</template>

<script>
export default {
  name: 'OverLay',
  watch: {
    '$store.state.overlay' (val) {
      if (val) {
        setTimeout(() => {
          this.$store.commit('SET_OVERLAY', false)
        }, 6000)
      }
    }
  }
}
</script>
