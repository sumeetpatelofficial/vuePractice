<template>
  <b-form novalidate @submit.stop.prevent="checkLogin">
    <div class="login-page">
      <div class="login-card">
        <div class="login-card-header">
          <h3>Login</h3>
          <p>let's see who is in your contact list</p>
        </div>
        <div class="login-card-body">
          <div class="form-group">
            <label for="">Email / Username</label>
            <b-form-input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Username"
              v-validate="{ required: true, email: true }"
              :state="validateState('email')"
              v-model="user.email"
            ></b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">{{
              veeErrors.first("email")
            }}</b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <b-form-input
              type="password"
              id="password"
              name="password"
              placeholder="**********"
              v-model="user.password"
              :state="validateState('password')"
              v-validate="'required'"
            ></b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">{{
              veeErrors.first("password")
            }}</b-form-invalid-feedback>
          </div>
        </div>
        <div class="login-card-footer">
          <b-button type="submit" variant="primary" block>
            <b-spinner v-if="showLoading" small variant="light"></b-spinner>
            Sign in</b-button
          >
          <p>Now have an account yet <b-link>sign up</b-link></p>
        </div>
      </div>
    </div>
  </b-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  user: any = {
    email: "",
    password: "",
  };
  showLoading: any = false;
  veeFields: any;
  veeErrors: any;

  validateState(ref: any) {
    if (
      this.veeFields[ref] &&
      (this.veeFields[ref].dirty || this.veeFields[ref].validated)
    ) {
      return !this.veeErrors.has(ref);
    }
    return null;
  }

  checkLogin() {
    const email = "admin@abc.com";
    const pass = "1234";
    this.$validator.validateAll().then((result) => {
      if (result) {
        this.showLoading = true;        
        setTimeout(() => {
          if (this.user.email == email && this.user.password == pass) {
            this.$router.push("/user");
          } else {
            console.log("wrong username or password");
          }
          this.showLoading = false;
        }, 2000);
      }
    });    
  }
}
</script>

<style scoped></style>
