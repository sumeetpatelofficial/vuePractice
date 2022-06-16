<template>
  <div>   
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item href="#foo" active>Personal Information</b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>

    <b-container>
      <div class="form-div">
        <div class="row">
          <div class="col-md-7">
            <div class="heading-section">
              <div class="heading-icon">
                <img :src="profileIcon" alt="" srcset="">
              </div>
              <h5>Personal Information</h5>
            </div>

            <PersonaIInformation />
          </div>
          <div class="offset-md-1 col-md-4" v-if="$screen.width > 768">
            <div class="card card-light-gray mb-5">
              <div class="card-body">
                <h5 class="mb-3">Hi there, welcome here</h5>
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
            </div>

            <div class="card overflow-hidden">
              <img :src="userImage" alt="" srcset="">
              <div class="card-body">
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <b-button class="mt-5" variant="light-info" block>Upload a Photo</b-button>
              </div>
            </div>
          </div>
        </div>      
      </div>
    </b-container>

    <!-- <div class="container py-5">
      <b-button v-b-modal.modal-1 variant="primary" class="mb-3">New Use</b-button>
      <b-list-group>
        <template v-if="users.length">
          <b-list-group-item
            v-for="user, i in users" :key="i">
            <div class="row d-flex align-items-center">
              <div class="col-auto">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="user.checked"
                  name="checkbox-1"
                  @change="changeChecked(i)"
                >
                </b-form-checkbox>
              </div>
              <div class="col-auto">
                <b-avatar></b-avatar>
              </div>
              <div class="col">
                <span :style="user.checked?'text-decoration:line-through':null" :class="{'font-italic':user.checked}">
                {{user.name}}
                </span>
              </div>
            </div>                        
          </b-list-group-item>
        </template>
        <template v-else>
          <b-list-group-item>No Users Found !!</b-list-group-item>
        </template>
      </b-list-group>
    </div>

    <div class="container">
      <h5 class="user-type">Suggestion Invitations</h5>
      <div class="row">
        <div class="col-6">
          <contact-card />
        </div>
      </div>      
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonaIInformation from "@/components/personaIInformation.vue";
@Component({
  components:{
    PersonaIInformation
  }
})
export default class Home extends Vue {    
  profileIcon:any=require("@/assets/images/profile.svg")
  userImage:any=require("@/assets/images/userimage.jpg")
}
</script>
