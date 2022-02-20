<template>
  <v-snackbar
    v-model="$store.state.snackbar.show"
    :color="$store.state.snackbar.type"
    timeout="5000"
    top
    class="pt-2"
  >
    {{ $store.state.snackbar.msg }}
    <template #action="{ attrs }">
      <v-btn
        id="close-snackbar"
        aria-label="close"
        icon
        v-bind="attrs"
        @click="$store.commit('CLEAR_SNACKBAR')"
      >
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  watch: {
    '$store.state.snackbar.show' (val) {
      val && setTimeout(() => this.$store.commit('CLEAR_SNACKBAR'), 5000)
    }
  }
}
</script>
