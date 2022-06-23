<template>
  <div>
    <div class="heading-section">
      <div class="heading-icon">
        <img :src="componentValue.icon" alt="" srcset="" />
      </div>
      <h5>{{ componentValue.Name }}</h5>
    </div>
    <form>
      <div class="custom-image-upload" v-if="ImageURL == ''">
        <b-form-file
          ref="imageUpload"
          class="fileUpload"
          plain
          name="hotelImage"
          accept="image/jpeg, image/png, image/jpg"
          @change="userimageUpload($event)"
        ></b-form-file>
        <div class="image-upload-button">
          <span class="square"></span>
          <span class="circle"></span>
          <span class="diagonal"></span>
        </div>
        <span class="upload-text">Select an image</span>
      </div>
      <div class="profile-image-preview" v-if="ImageURL != ''">
        <div class="image-preview">
          <div class="content">
            <img :src="ImageURL" alt="" srcset="" />
          </div>
        </div>
        <b-link class="remove-image" @click="removeImage"
          ><span class="material-icons-outlined">close</span></b-link
        >
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
export default class uploadImage extends Vue {
  @Prop() componentValue: any;
  ImageURL: any = "";

  userimageUpload(e: { target: { files: any[] } }) {
    const file = e.target.files[0];
    let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(file.name)) {
      this.ImageURL = "";
      return false;
    } else {
      if (file) {
        let reader = new FileReader();
        reader.onload = (e1: any) => {
          this.ImageURL = e1.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeImage() {
    console.log("clicked");
    this.ImageURL = "";
  }
}
</script>

<style scoped></style>
