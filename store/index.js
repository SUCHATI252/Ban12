export const state = () => ({
  loading_dialog: false,
  overlay: false,
  snackbar: {
    show: false,
    type: null,
    msg: ''
  },
  autobackup: false
})

export const mutations = {
  LOADIND_DIALOG (state, data) {
    state.loading_dialog = data
  },
  SET_OVERLAY (state, data) {
    state.overlay = data
  },
  SET_SUCCESS (state, msg) {
    state.snackbar = { show: true, type: 'success', msg }
  },
  SET_ERROR (state, msg) {
    state.snackbar = { show: true, type: 'error', msg }
  },
  CLEAR_SNACKBAR (state) {
    state.snackbar = { show: false, type: null, msg: '' }
  },
  BACKUP (state, data) {
    state.autobackup = data
  }
}
