<template>
  <b-navbar class="header-navbar" toggleable="sm" :type="themeMode? 'dark':'light'" :variant="themeMode? 'dark':'light'">
      <div class="container">
        <b-navbar-brand href="#"><img :src="logoImage" alt="" srcset=""></b-navbar-brand>
        
        <div class="header-menu ml-auto">
            <b-form-checkbox class="theme-switch" size="sm"
                @change="changeThemeMode"
                :title="themeMode ? 'Dark Mode':'Light Mode'"
                v-model="themeMode">
                <span class="material-icons">{{themeMode ? 'dark_mode':'light_mode'}}</span>                
            </b-form-checkbox>
            <b-link><span class="material-icons-outlined">notifications</span></b-link>
            <b-link><span class="material-icons-outlined">email</span></b-link>
            <b-link><b-avatar src="https://i.pravatar.cc/150?img=2"></b-avatar></b-link>
        </div>
      </div>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Header extends Vue {
  profileName: any = "";
  logoImage: any = require("@/assets/images/logo.svg");

  themeMode:any=this.$store.state.currentTheme;  

  mounted(){
    document.documentElement.className = this.themeMode ? 'dark':'light';
  }   

  changeThemeMode(e:any){  
    document.documentElement.className = e ? 'dark':'light';
    this.$store.dispatch('changedTheme', e)
  }
}
</script>

<style scoped></style>
