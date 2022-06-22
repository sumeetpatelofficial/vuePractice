<template>
  <div>
    <div class="heading-section">
      <div class="heading-icon">
        <img :src="componentValue.icon" alt="" srcset="">
      </div>
      <h5>{{componentValue.Name}}</h5>
    </div>

    <form @submit.prevent.stop="saveUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="">First Name</label>
            <b-form-input
              id="input-1"
              v-model="user.firstName"
              type="email"
              placeholder="Enter First Name"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Last Name</label>
            <b-form-input
              id="input-1"
              v-model="user.lastName"
              type="email"
              placeholder="Enter Last Name"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Email Address</label>
            <b-form-input
              id="input-2"
              v-model="user.email"
              placeholder="Enter Email"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Phone Number</label>
            <b-form-input
              id="input-2"
              v-model="user.contact"
              placeholder="+1 123 456 7890"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="">Gender</label>
            <b-form-radio-group v-model="user.gender" class="button-radio">
              <b-form-radio v-for="gender, g in ['Male', 'Female', 'Others']" :key="g" :value="gender">{{gender}}</b-form-radio>
            </b-form-radio-group>
          </div>
        </div>

        <div class="col-md-12">
          <div class="form-group">
            <label for="">Password</label>            
            <password v-model="user.password" :default-class="'form-control'" :toggle="true" :badge="false" :secure-length="9" />
          </div>
        </div>
      </div>

      <div class="mt-5">
        <b-button type="submit" variant="success">continue to address</b-button>
        <b-link class="text-light-gray ml-5">skip for now</b-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Password from 'vue-password-strength-meter'
@Component({
  components:{
    Password
  }
})
export default class personaIInformation extends Vue {
  @Prop() componentValue:any;
  users: any = [];
  user: any = {
    firstName:"",
    lastName:"",
    email: "",
    contact: "",
    gender: "Male",
    isActive: true,
    type:"user",
    password:"",
  };

  mounted() {
    this.users = this.$store.state.user;
  }

  saveUser() {
    this.$store.dispatch("addNewUser", this.user);
    this.users = this.$store.state.user;
    this.$emit('incrementComponent', this.componentValue)
  }

  changeChecked(index: any) {
    this.$store.dispatch("changeStatus", index);
  }
}
</script>

<style scoped></style>
