<template>
  <v-container>
    <v-row justify="center">
      <div class="py-5">
        <h1>Welcome to Admin</h1>
      </div>
    </v-row>
    <v-item-group>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-item>
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                class="d-flex align-center justify-center"
                height="200"
                @click="topup=true"
              >
                <div class="d-flex flex-column">
                  <v-icon class="text-h1" :color="hover ? 'grey' : ''">
                    mdi-account-multiple-plus-outline
                  </v-icon>
                  <p class="text-center text-h5 font-weight-black">
                    <span :class="hover ? 'grey--text' : ''">เพิ่มผู้ติดเชื้อ</span>
                  </p>
                </div>
              </v-card>
            </v-hover>
          </v-item>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-item v-slot="{ toggle }">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                class="d-flex align-center justify-center"
                height="200"
                @click="toggle"
              >
                <div class="d-flex flex-column">
                  <v-icon class="text-h1" :color="hover ? 'grey' : ''">
                    mdi-cash-plus
                  </v-icon>
                  <p class="text-center text-h5 font-weight-black">
                    <span :class="hover ? 'grey--text' : ''">เพิ่มผู้บริจาค</span>
                  </p>
                </div>
              </v-card>
            </v-hover>
          </v-item>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-item v-slot="{ toggle }">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                class="d-flex align-center justify-center"
                height="200"
                @click="toggle"
              >
                <div class="d-flex flex-column">
                  <v-icon class="text-h1" :color="hover ? 'grey' : ''">
                    mdi-account-group-outline
                  </v-icon>
                  <p class="text-center text-h5 font-weight-black">
                    <span :class="hover ? 'grey--text' : ''">ยอดผู้ติดเชื้อ</span>
                  </p>
                </div>
              </v-card>
            </v-hover>
          </v-item>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-item v-slot="{ toggle }">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                class="d-flex align-center justify-center"
                height="200"
                @click="toggle"
              >
                <div class="d-flex flex-column">
                  <v-icon class="text-h1" :color="hover ? 'grey' : ''">
                    mdi-printer
                  </v-icon>
                  <p class="text-center text-h5 font-weight-black">
                    <span :class="hover ? 'grey--text' : ''">Print ยอดผู้ป่วย</span>
                  </p>
                </div>
              </v-card>
            </v-hover>
          </v-item>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-item v-slot="{ toggle }">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                class="d-flex align-center justify-center"
                height="200"
                @click="toggle"
              >
                <div class="d-flex flex-column">
                  <v-icon class="text-h1" :color="hover ? 'grey' : ''">
                    mdi-printer
                  </v-icon>
                  <p class="text-center text-h5 font-weight-black">
                    <span :class="hover ? 'grey--text' : ''">Print ยอดผู้บริจาค</span>
                  </p>
                </div>
              </v-card>
            </v-hover>
          </v-item>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-item v-slot="{ toggle }">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                class="d-flex align-center justify-center"
                height="200"
                @click="toggle"
              >
                <div class="d-flex flex-column">
                  <v-icon class="text-h1" :color="hover ? 'grey' : ''">
                    mdi-hand-coin-outline
                  </v-icon>
                  <p class="text-center text-h5 font-weight-black">
                    <span :class="hover ? 'grey--text' : ''">ยอดบริจาค</span>
                  </p>
                </div>
              </v-card>
            </v-hover>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
export default {
  name: 'AdminPage'
}
</script>

<style>

</style>
