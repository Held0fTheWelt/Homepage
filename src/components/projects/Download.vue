<template>
  <v-card class="vCard_Download">
    <v-card-title>
      <h1>Download Material</h1>
    </v-card-title>
    <v-card-text class="vCard_Download_Text">
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8" class="text-center"
          ><v-btn class="btn_Download" depressed elevation="2" raised
            >Download GDD</v-btn
          ></v-col
        ><v-col cols="2"></v-col
      ></v-row>
      <v-row
        ><v-col cols="2"></v-col
        ><v-col cols="8" class="text-center"
          ><v-btn class="btn_Download" depressed elevation="2" raised
            >Download Source</v-btn
          ><v-col cols="2"></v-col></v-col
      ></v-row>
      <v-row
        ><v-col cols="2"></v-col
        ><v-col cols="8" class="text-center"
          ><v-btn class="btn_Download" depressed elevation="2" raised
            >Download Client</v-btn
          ></v-col
        ><v-col cols="2"></v-col
      ></v-row>
      <v-row
        ><v-col cols="2"></v-col
        ><v-col cols="8" class="text-center">
          <v-btn class="btn_Download" depressed elevation="2" raised
            >Run Webclient</v-btn
          ></v-col
        ><v-col cols="2"></v-col
      ></v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {},
}
</script>

<style scoped>
h1 {
  text-align: center;
  width: 100%;
}

.vCard_Download {
  padding: 2%;
}

.vCard_Download_Text {
  margin-top: 4%;
}
.btn_Download {
  align-self: center;
  width: 100%;
}
</style>
