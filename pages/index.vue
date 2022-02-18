<template>
  <v-container class="fill-height justify-center">
    <v-col cols="12" md="8">
      <v-row justify="end" align="center">
        <v-col
          cols="12"
          md="4"
        >
          <v-card flat>
            <v-card-text class="pa-1">
              <div class="d-flex justify-end">
                <span>อัปเดตล่าสุด {{ getdatenow }}</span>
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
          <v-card dark color="error" height="200">
            <v-card-title class="justify-center">
              <span class="text-h4">ติดเชื้อเพิ่มวันนี้</span>
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-center">
                <span class="white--text text-h2 font-weight-bold">
                  {{ infections_today }}
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
                    {{ ATK }}
                  </div>
                </div>
                <v-divider vertical class="white" />
                <div class="d-flex flex-column">
                  <div class="text-center">
                    โรงพยาบาล
                  </div>
                  <v-divider />
                  <div class="text-center">
                    {{ hospital }}
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
          <v-card dark color="success" height="200">
            <v-card-title class="justify-center">
              <span class="text-h4">หายป่วยวันนี้</span>
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-center">
                <span class="white--text text-h2 font-weight-bold">
                  {{ well_today }}
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
                  {{ infections_accumulated }}
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
                  {{ well_accumulated }}
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
                  {{ is_healing }}
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
                  {{ died }}
                </span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
        >
          <v-card dark color="primary" to="/donate" height="150">
            <v-card-title class="justify-center">
              <span class="text-h4">ยอดบริจาค</span>
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-center">
                <span class="white--text text-h3 font-weight-bold">
                  {{ donate }} ฿
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
import moment from 'moment'
export default {
  name: 'IndexPage',
  data: () => ({
    infections_today: '000',
    hospital: '000',
    ATK: '000',
    well_today: '000',
    infections_accumulated: '000',
    well_accumulated: '000',
    is_healing: '000',
    died: '000',
    donate: '10,000'
  }),
  computed: {
    getdatenow () {
      moment.locale('th')
      return moment().format('L LT')
    }
  }
}
</script>
