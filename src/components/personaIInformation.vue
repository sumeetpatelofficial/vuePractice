<template>
  <div>
    <div class="heading-section">
      <div class="heading-icon">
        <img :src="componentValue.icon" alt="" srcset="">
      </div>
      <h5>{{componentValue.Name}}</h5>
    </div>

    <b-form @submit.prevent.stop="saveUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="">First Name</label>
            <b-form-input
              id="firstName"
              name="First Name"
              v-model="user.firstName"
              type="text"
              placeholder="Enter First Name"
              v-validate="{ required: true}"
              :state="validateState('First Name')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-danger" id="input-1-live-feedback">{{
              veeErrors.first("First Name")
            }}</b-form-invalid-feedback>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Last Name</label>
            <b-form-input
              id="lastName"
              name="Last Name"
              v-model="user.lastName"
              type="text"
              placeholder="Enter Last Name"
              v-validate="{ required: true}"
              :state="validateState('Last Name')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-danger" id="input-1-live-feedback">{{
              veeErrors.first("Last Name")
            }}</b-form-invalid-feedback>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Email Address</label>
            <b-form-input
              id="email"
              name="email"
              type="email"
              v-model="user.email"
              placeholder="Enter Email"
              v-validate="{ required: true, email: true }"
              :state="validateState('email')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-danger" id="input-1-live-feedback">{{
              veeErrors.first("email")
            }}</b-form-invalid-feedback>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Phone Number</label>
            <b-form-input
              id="phone"
              name="phone"
              type="text"
              v-model="user.contact"
              placeholder="+1 123 456 7890"
              v-validate="{ required: true, digits:10 }"
              :state="validateState('phone')"
            ></b-form-input>
            <b-form-invalid-feedback class="text-danger" id="input-1-live-feedback">{{
              veeErrors.first("phone")
            }}</b-form-invalid-feedback>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="">Gender</label>
            <b-form-radio-group
              v-model="user.gender"
              class="button-radio">
              <b-form-radio 
                v-for="(gender, g) in ['Male', 'Female', 'Others']"
                :key="g"
                :value="gender"
                name="radio_group_gender"
                >{{gender}}</b-form-radio>
            </b-form-radio-group>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="">Password</label>            
            <password name="password" v-model="user.password" :default-class="'form-control'" :toggle="true" :badge="false" :secure-length="9" />
            <b-form-invalid-feedback class="text-danger" id="input-1-live-feedback">{{
              veeErrors.first("password")
            }}</b-form-invalid-feedback>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <b-button type="submit" variant="success">continue to address</b-button>
        <!-- <b-link class="text-light-gray ml-5">skip for now</b-link> -->
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Password from 'vue-password-strength-meter';
@Component({
  components:{
    Password
  }
})
export default class personaIInformation extends Vue {
  @Prop() componentValue:any;
  users: any = [];
  user: any = {
    firstName:"Sumeet",
    lastName:"Patel",
    email: "abc@def.com",
    contact: "7383128210",
    gender: "Male",
    isActive: true,
    type:"user",
    password:"Sam@12108",
    addressInformation:[],
    cardDetails:[],
    userImage:null
  };
  enableButton:any=false;
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

  mounted() {
    // this.users = this.$store.state.user;
  }

  saveUser() {
    this.$validator.validateAll().then((result) => {
      if (result) {
        this.enableButton = true;        
        // this.users = this.$store.state.user;
        this.$store.dispatch("addNewUser", this.user);
        this.$emit('incrementComponent', this.componentValue)
      }
    })    
  }

  changeChecked(index: any) {
    this.$store.dispatch("changeStatus", index);
  }
}
</script>

<style scoped></style>
