<template>
  <div>
    <div class="heading-section">
      <div class="heading-icon">
        <img :src="componentValue.icon" alt="" srcset="" />
      </div>
      <h5>{{ componentValue.Name }}</h5>
    </div>

    <form @submit.prevent.stop="saveUser">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="">Address Line 1</label>
            <b-form-input
              id="input-1"
              v-model="firstName"
              type="email"
              placeholder="Enter Address Line 1"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="">Address Line 2</label>
            <b-form-input
              id="input-1"
              v-model="firstName"
              type="email"
              placeholder="Enter Address Line 2"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">City</label>
            <b-form-input
              id="input-1"
              v-model="firstName"
              type="email"
              placeholder="Enter City"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">State</label>
            <b-form-input
              id="input-1"
              v-model="firstName"
              type="email"
              placeholder="Enter State"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Contry</label>
            <b-form-input
              id="input-1"
              v-model="firstName"
              type="email"
              placeholder="Enter Country"
            ></b-form-input>
          </div>
        </div>
      </div>
        <div class="mt-5">
            <b-button variant="success">continue to card details</b-button>
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
}
</script>

<style scoped></style>
