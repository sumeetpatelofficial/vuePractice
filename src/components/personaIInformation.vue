<template>
  <div>
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
      </div>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.name"
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Favorite Food:"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="user.food"
          :options="foods"
          class="form-control"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox v-model="user.checked">Active</b-form-checkbox>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class personalInformation extends Vue {
  users: any = [];
  user: any = {
    email: "",
    name: "",
    food: null,
    checked: false,
  };

  foods: any = [
    { text: "Select One", value: null },
    "Carrots",
    "Beans",
    "Tomatoes",
    "Corn",
  ];

  mounted() {
    this.users = this.$store.state.user;
  }

  saveUser() {
    this.$store.dispatch("addNewUser", this.user);
    this.users = this.$store.state.user;
  }

  changeChecked(index: any) {
    this.$store.dispatch("changeStatus", index);
  }
}
</script>

<style scoped></style>
