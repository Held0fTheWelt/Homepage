<template>
  <v-card id="login" class="mx-auto mt-5" width="400">
    <v-card-title>
      <h1>Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Username" prepend-icon="mdi-account-circle" />
        <v-text-field
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer />
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    showPassword: false,
  }),
}
</script>

<style scoped>
#login {
  padding-top: 30px;
}
</style>
