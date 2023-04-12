<template>
  <div>
    <div class="heading-section">
      <div class="heading-icon">
        <img :src="componentValue.icon" alt="" srcset="" />
      </div>
      <h5>{{ componentValue.Name }}</h5>
    </div>

    <form @submit.prevent.stop="saveAddress">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="">Address Line 1</label>
            <b-form-input
              id="input-1"
              placeholder="Enter Address Line 1"
              v-model="addressInfo.addressLine1"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="">Address Line 2</label>
            <b-form-input
              id="input-1"
              placeholder="Enter Address Line 2"
              v-model="addressInfo.addressLine2"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">City</label>
            <b-form-input
              id="input-1"
              placeholder="Enter City"
              v-model="addressInfo.city"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">State</label>
            <b-form-input
              id="input-1"
              placeholder="Enter State"
              v-model="addressInfo.state"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Contry</label>
            <b-form-input
              id="input-1"
              placeholder="Enter Country"
              v-model="addressInfo.country"
            ></b-form-input>
          </div>
        </div>
      </div>
        <div class="mt-5">
            <b-button type="submit" variant="success">continue to card details</b-button>
            <b-link class="text-light-gray ml-5">skip for now</b-link>
        </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class addressInformation extends Vue {
    @Prop() componentValue:any;
    user:any='';
    addressInfo:any={
      addressLine1:'201-Sangee flats',
      addressLine2:'raghukul char rasta',
      city:'Vadodara',
      state:'Gujarat',
      country:'India'
    }

    mounted(){
      this.user = this.$store.state.user;
    }

    saveAddress(){
      this.$set(this.user, 'addressInformation', this.addressInfo)
      this.$store.dispatch("addNewUser", this.user);
      this.$emit('incrementComponent', this.componentValue)
    }
}
</script>

<style scoped></style>
