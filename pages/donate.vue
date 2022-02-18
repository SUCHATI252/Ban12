<template>
  <v-container>
    <v-card class="pa-5">
      <v-card-title>
        <span class="text-h5 font-weight-bold">
          ยอดผู้บริจาค
        </span>
      </v-card-title>
      <v-card-title>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              filled
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-card flat>
              <v-card-title class="justify-end">
                <span class="text-h4 font-weight-bold">000,000 ฿</span>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-card-title>
      <v-divider />
      <v-data-table :headers="headers" :items="lists" :search="search">
        <!-- <template #body="{ items }">
          <thead>
            <tr>
              <th v-text="'#'" />
              <th v-text="'วันที่บริจาค'" />
              <th v-text="'ผู้บริจาค'" />
              <th v-text="'รายการ'" />
              <th v-text="'จำนวน'" />
              <th v-text="'หน่วย'" />
              <th v-text="'หมายเหตุ'" />
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td v-text="index+1" />
              <td v-text="item.date" />
              <td v-text="item.name" />
              <td v-text="item.list" />
              <td v-text="item.qty" />
              <td v-text="item.count" />
              <td v-text="item.note" />
            </tr>
          </tbody>
        </template> -->
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'DonatePage',
  data: () => ({
    search: '',
    headers: [
      {
        text: '#',
        align: 'start',
        value: 'index'
      },
      {
        text: 'วันที่บริจาค',
        value: 'date'
      },
      {
        text: 'ผู้บริจาค',
        value: 'name'
      },
      {
        text: 'รายการ',
        value: 'list'
      },
      {
        text: 'จำนวน',
        value: 'qty'
      },
      {
        text: 'หน่วย',
        value: 'count'
      },
      {
        text: 'หมายเหตุ',
        value: 'note'
      }
    ],
    lists: [
      { index: +1, date: '00/00/000', name: 'นาย test test', list: 'เงินสด', qty: '0,000', count: 'บาท', note: 'โอนผ่านธนาคาร' }
    ]
  })
}
</script>
