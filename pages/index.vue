<template>
  <v-container class="fill-height justify-center">
    <v-col cols="12" md="8">
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-card>
            <v-card-title>
              <span class="text-h4">วันนี้</span>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
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
                <span class="white--text text-h2 font-weight-bold">+ 000</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
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
                <span class="text-h2 font-weight-bold">+ 000</span>
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
          <v-card color="success" height="100">
            sssss
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card color="error" height="100">
            sssss
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-card color="success" height="100">
            sssss
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card color="error" height="100">
            sssss
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
