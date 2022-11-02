<template>
  <div>
    <b-container>
      <b-breadcrumb>
        <b-breadcrumb-item v-for="(item, i) in breadscrumbComponent" :key="i" :active="isCurrentComponent.Name == item.Name">
          {{ item.Name }}
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-container>
    <b-container>
      <div class="form-div">
        <div class="row">
          <div class="col-md-7">
            <keep-alive>
              <component
                @incrementComponent="nextComponent"
                :is="isCurrentComponent.componentName"
                :componentValue="isCurrentComponent"
              >
              </component>
            </keep-alive>
          </div>
          <div class="offset-md-1 col-md-4" v-if="$screen.width > 768">
            <div class="card card-light-gray mb-5">
              <div class="card-body">
                <h5 class="mb-3">Hi there, welcome here</h5>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>

            <div class="card overflow-hidden">
              <img :src="userImage" alt="" srcset="" />
              <div class="card-body">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <b-button class="mt-5" variant="light-info" block
                  >Upload a Photo</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonaIInformation from "@/components/personaIInformation.vue";
import addressInformation from "@/components/addressInformation.vue";
import cardInformation from "@/components/cardInformation.vue";
import uploadImage from "@/components/uploadImage.vue";
@Component({
  components: {
    PersonaIInformation,
    addressInformation,
    cardInformation,
    uploadImage,
  },
})
export default class Home extends Vue {
  profileIcon: any = require("@/assets/images/profile.svg");
  addressIcon: any = require("@/assets/images/address.svg");
  cardIcon: any = require("@/assets/images/card.svg");
  imageIcon: any = require("@/assets/images/profileImg.svg");
  userImage: any = require("@/assets/images/userimage.jpg");

  isCurrentComponent: any = {};
  breadscrumbComponent:any=[];

  userDetailComponents: any = [
    {
      id: 1,
      Name: "Personal Information",
      componentName: "PersonaIInformation",
      icon: this.profileIcon,
      isActive: true,
      isCompleted: true,
    },
    {
      id: 2,
      Name: "Address Information",
      componentName: "addressInformation",
      icon: this.addressIcon,
      isActive: false,
      isCompleted: false,
    },
    {
      id: 3,
      Name: "Card Details",
      componentName: "cardInformation",
      icon: this.cardIcon,
      isActive: false,
      isCompleted: false,
    },
    {
      id: 4,
      Name: "Upload Profile Image",
      componentName: "uploadImage",
      icon: this.imageIcon,
      isActive: false,
      isCompleted: false,
    },
  ];

  mounted() {
    this.isCurrentComponent = this.userDetailComponents[0]; 
    this.breadscrumbComponent = this.userDetailComponents.filter((b) => b.isCompleted == true); 
  }

  nextComponent(value) {
    let index = value.id - 1;
    Vue.set(this.userDetailComponents[index], "isActive", false);
    Vue.set(this.userDetailComponents[index + 1], "isActive", true);
    Vue.set(this.userDetailComponents[index + 1], "isCompleted", true);
    this.isCurrentComponent = this.userDetailComponents[index + 1];
    this.breadscrumbComponent = this.userDetailComponents.filter((b) => b.isCompleted == true);
  }
}
</script>
