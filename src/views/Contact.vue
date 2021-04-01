<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card id="Contact" class="mx-auto">
          <h1>Contact</h1>
          <v-form ref="contactForm" v-model="formValidity">
            <v-text-field
              label="Name"
              type="text"
              :rules="nameRules"
              v-model="name"
            ></v-text-field>
            <v-text-field
              label="Email"
              type="email"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-autocomplete
              label="Which type of Message do you want to send?"
              :items="messageType"
            ></v-autocomplete>
            <v-textarea label="Message" type="text" no-resize></v-textarea>
            <v-btn
              type="submit"
              color="primary"
              class="mr-4"
              :disabled="!formValidity"
              >Submit</v-btn
            >
            <v-btn color="success" class="mr-4" @click="validateForm"
              >Validate Form</v-btn
            >
            <v-btn color="warning" class="mr-4" @click="resetValidation"
              >Reset Validation</v-btn
            >
            <v-btn color="error" @click="resetForm">Reset</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    resetForm() {
      console.log('reset')
      this.$refs.contactForm.reset()
    },
    resetValidation() {
      console.log('reset validation')
      this.$refs.contactForm.resetValidation()
    },
    validateForm() {
      console.log('validate')
      this.$refs.contactForm.validate()
    },
  },
  data() {
    return {
      name: '',
      email: '',
      nameRules: [
        (value) => !!value || 'Name is required',
        (value) => value.length > 1 || 'Minimum Name length is 2',
      ],
      emailRules: [
        (value) => !!value || 'Email is required.',
        (value) => value.indexOf('@') !== 0 || 'Email should have a username.',
        (value) => value.includes('@') || 'Email should include an @ symbol.',
        (value) =>
          value.indexOf('.') - value.indexOf('@') > 1 ||
          'Email should contain a valid domain.',
        (value) =>
          value.includes('.') || 'Email should include a period symbol.',
        (value) =>
          value.indexOf('.') <= value.length - 3 ||
          'Email should contain a valid domain extension.',
      ],
      messageType: ['My Games', 'This Site', 'Private'],
      formValidity: false,
    }
  },
}
</script>

<style scoped>
#Contact {
  width: 35%;
  padding: 2%;
}
</style>
