<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card class="">
      <v-form ref="form_add_edit" @submit.prevent="save">
        <v-card-title class="px-5">
          <span class="headline">{{ FormTitle }}</span>
          <v-spacer />
          <v-btn icon @click="dialog=false">
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-divider />
        <v-card-text class="px-5">
          <v-row>
            <v-col cols="12" class="py-0">
              <v-text-field
                id="fname"
                v-model="person.fname"
                label="ชื่อ"
                :rules="[v => !!v||'enter_name']"
                dense
                filled
                validate-on-blur
              />
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field
                id="fname"
                v-model="person.lname"
                label="นามสกุล"
                dense
                filled
                :rules="[v => !!v || 'enter_lname']"
                validate-on-blur
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                id="age"
                v-model="person.age"
                v-mask="'###'"
                dense
                validate-on-blur
                label="อายุ"
                filled
                :rules="[v => !!v || 'enter_age']"
              />
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-select
                id="gender"
                v-model="person.gender"
                :items="['ชาย', 'หญิง']"
                filled
                label="เพศ"
                :rules="[v => !!v || 'enter_gender']"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                id="number"
                v-model="person.number"
                v-mask="'###'"
                dense
                validate-on-blur
                label="บ้านเลขที่"
                filled
                :rules="[v => !!v || 'enter_number']"
              />
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-select
                id="checkedby"
                v-model="person.checkedby"
                :items="['ATK', 'โรงพยาบาล']"
                filled
                label="ตรวจโดย"
                :rules="[v => !!v || 'enter_checkedby']"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider />
        <v-card-actions class="pb-5 px-10">
          <v-btn block color="success" large type="submit">
            {{ mode=='add'?'SAVE':'UPDATE' }}
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'FormUsers',
  data: () => ({
    dialog: false,
    mode: '',
    person: {
      fname: '',
      lname: '',
      age: '',
      gender: '',
      number: '',
      checkedby: ''
    },
    items: [{ text: 'ATK' }, { text: 'โรงพยาบาล' }]
  }),
  computed: {
    FormTitle () {
      return this.mode === 'add' ? 'เพิ่มผู้ติดเชื้อวันนี้' : 'แก้ไขผู้ติดเชื้อวันนี้'
    }
  },
  watch: {
    mode (val) {
      if (val === 'add') {
        this.reset_form()
      }
    }
  },
  methods: {
    open (mode, data) {
      this.dialog = true
      this.mode = mode
      if (data) {
        this.person = { ...data }
      }
    },
    close () {
      this.dialog = false
      this.reset_form()
    },
    reset_form () {
      this.person = {
        fname: '',
        lname: '',
        age: '',
        gender: '',
        number: '',
        checkedby: ''
      }
    },
    save () {
      if (this.$refs.form_add_edit.validate()) {
        this.$emit(this.mode, this.person)
      }
    }
  }
}
</script>

<style>

</style>
