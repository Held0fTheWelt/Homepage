<template>
  <v-card>
    <v-card-title>
      <h1>Download Material</h1>
    </v-card-title>
    <v-card-text>
      <v-row
        ><v-col cols="12" class="text-center"
          ><v-btn
            class="vCard_Download"
            depressed
            elevation="2"
            raised
            label="Download Source"
            >Download Source</v-btn
          ></v-col
        ></v-row
      >
      <v-row
        ><v-col cols="12" class="text-center"
          ><v-btn
            class="vCard_Download"
            depressed
            elevation="2"
            raised
            label="Download Source"
            >Download Client</v-btn
          ></v-col
        ></v-row
      >
      <v-row
        ><v-col cols="12" class="text-center"
        
          >
          <v-btn
            class="vCard_Download"
            depressed
            elevation="2"
            raised
            label="Download Source"
            >Run Webclient</v-btn
          ></v-col
        ></v-row
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  text-align: center;
  width: 100%;
}
.vCard_Download {
  
  align-self: center;
}
</style>
