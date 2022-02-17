<template>
  <v-container class="fill-height justify-center">
    <v-col cols="12" md="8">
      <v-row justify="end" align="center">
        <v-col
          cols="12"
          md="5"
        >
          <v-card flat>
            <v-card-title>
              <v-spacer />
              <span>อัปเดตล่าสุด {{ getdatenow }}</span>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-card dark color="error" height="200">
            <v-card-title class="justify-center">
              <span class="text-h4">ติดเชื้อเพิ่มวันนี้</span>
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-center">
                <span class="white--text text-h2 font-weight-bold">
                  + 1,000
                </span>
              </div>
              <v-divider class="white mt-2" />
              <div
                class="d-flex justify-space-around pt-2"
              >
                <div class="d-flex flex-column">
                  <div class="text-center">
                    ATK
                  </div>
                  <v-divider />
                  <div class="text-center">
                    1,000
                  </div>
                </div>
                <v-divider vertical class="white" />
                <div class="d-flex flex-column">
                  <div class="text-center">
                    โรงพยาบาล
                  </div>
                  <v-divider />
                  <div class="text-center">
                    1,000
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card dark color="green lighten-1" height="200">
            <v-card-title class="justify-center">
              <span class="text-h4">หายป่วยวันนี้</span>
            </v-card-title>
            <v-divider />
            <v-card-text>
              <div class="d-flex justify-center">
                <span class="white--text text-h2 font-weight-bold">
                  1,000
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-card dark color="error" height="120">
            <v-card-title class="justify-center">
              <span>ป่วยสะสม</span>
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-center">
                <span class="white--text text-h5 font-weight-bold">
                  0000
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card dark color="success" height="120">
            <v-card-title class="justify-center">
              <span>หายป่วยสะสม</span>
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-center">
                <span class="white--text text-h5 font-weight-bold">
                  0000
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-card dark color="cyan" height="120">
            <v-card-title class="justify-center">
              <span>กำลังรักษา</span>
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-center">
                <span class="white--text text-h5 font-weight-bold">
                  0000
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card dark color="grey" height="120">
            <v-card-title class="justify-center">
              <span>เสียชีวิต</span>
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-center">
                <span class="white--text text-h5 font-weight-bold">
                  0000
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    getdatenow () {
      let today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
      const yyyy = today.getFullYear()

      today = `${dd}/${mm}/${yyyy}`
      return today
    }
  }
}
</script>
