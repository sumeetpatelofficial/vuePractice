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
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Name on Card</label>
            <b-form-input
              id="input-1"
              v-model="firstName"
              type="email"
              placeholder="Enter Name On Card"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Card Number</label>
            <b-form-input
              id="input-1"
              v-model="firstName"
              type="email"
              placeholder="Enter Card Number"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">Expiry Date</label>
            <b-form-input
              id="input-1"
              v-model="firstName"
              type="email"
              placeholder="Enter Expiry Date"
            ></b-form-input>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="">CVV</label>
            <b-form-input
              id="input-1"
              v-model="firstName"
              type="email"
              placeholder="Enter CVV"
            ></b-form-input>
          </div>
        </div>        
      </div>
      <div class="mt-5">
        <b-button variant="success">save &amp; complete</b-button>
    </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class cardInformation extends Vue {
    @Prop() componentValue:any;
}
</script>

<style scoped></style>
