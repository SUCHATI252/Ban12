<template>
  <v-dialog v-model="dialog">
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
            max-with
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
        value: 'index'
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
        value: 'checked_by'
      },
      {
        text: 'สถานะ',
        value: 'status'
      }
    ],
    lists: [
      {
        index: +1,
        date: '00/00/000',
        name: 'นาย test test',
        number: '100',
        age: '20',
        gender: 'ชาย',
        checked_by: '19/02/2022',
        status: 'ATK'
      }
    ]
  }),
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
