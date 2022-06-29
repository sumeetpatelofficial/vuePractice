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
            <b-form-invalid-feedback id="input-1-live-feedback">{{veeErrors.first("email")}}</b-form-invalid-feedback>
            <!-- <span v-if="errors.has('email')" class="text-danger">Please enter username</span> -->
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <b-form-input
              type="password"
              id="password"
              name="password"
              placeholder="**********"
              v-model="user.password"
              v-validate="'required'"
            ></b-form-input>
            <!-- <span v-if="errors.has('password')" class="text-danger">Please enter password</span> -->
          </div>
        </div>
        <div class="login-card-footer">
          <b-button type="submit" variant="primary" block>Sign in</b-button>
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

  veeFields:any;
  veeErrors:any;

  validateState(ref:any) {
    if ( this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
        return !this.veeErrors.has(ref);
      }
      return null;
  }

  checkLogin() {
    const email = "admin@abc.com";
    const pass = "12345678";

    this.$validator.validateAll().then((result) => {
      if (result) {
        if (this.user.email == email && this.user.password == pass) {
          this.$router.push("/user");
        } else {
          console.log("wrong username or password");
        }
      }
    });
  }
}
</script>

<style scoped></style>
