<template>
  <div>
    <h1>Register here</h1>

    <input
      type="email"
      v-model="email"
      name="email"
      id=""
      placeholder="email"
    />
    <br />
    <input
      type="password"
      v-model="password"
      name="password"
      id=""
      placeholder="password"
    />
    <br />
    <input type="submit" @click="register" value="Register" />
  </div>
</template>

<script>
import authenticationService from "@/services/authenticationService";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
