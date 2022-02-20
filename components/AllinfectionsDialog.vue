<template>
  <v-dialog v-model="dialog" max-width="700">
    <v-card>
      <v-card-title>
        ผู้ติดเชื้อวันนี้
        <v-spacer />
        <v-btn icon @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-title>
        <v-spacer />
        <div class="d-inline-flex">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            filled
            dense
          />
        </div>
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="lists" :search="search" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search: '',
    headers: [
      {
        text: '#',
        align: 'start',
        value: 'id'
      },
      {
        text: 'ชื่อ สกุล',
        value: 'name'
      },
      {
        text: 'บ้านเลขที่',
        value: 'number'
      },
      {
        text: 'อายุ',
        value: 'age'
      },
      {
        text: 'เพศ',
        value: 'gender'
      },
      {
        text: 'วันที่ตรวจ',
        value: 'date_infection'
      },
      {
        text: 'สถานะ',
        value: 'status'
      }
    ],
    lists: []
  }),
  async fetch () {
    this.lists = await this.$axios.$post('/infections/listall').then(res => res)
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
