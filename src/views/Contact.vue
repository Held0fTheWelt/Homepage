<template>
    <v-container >
      <v-row>
        <v-col>
          <v-card id="Contact" class="mx-auto">
            <h1>Contact</h1>
            <v-text-field label="Name" type="text"/>
            <v-text-field label="Email" type="email"/>
            <v-autocomplete label="Which type of Message do you want to send?" :items="messageType"></v-autocomplete>
            <v-textarea label="Message" type="text" no-resize></v-textarea>
            <v-btn type="submit" color="primary">Submit</v-btn>
            <!-- <v-textarea label="Message" type="text"><v-textarea> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      messageType : [
        'My Games',
        'This Site',
        'Private',
      ]
    }
  }
}
</script>

<style scoped>
#Contact{
  width: 35%;
  padding:2%;
}
</style>