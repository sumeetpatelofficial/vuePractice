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
            <b-link @click="logout()"><span class="material-icons-outlined">logout</span></b-link>
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
    this.stickyHeader()
  }   

  changeThemeMode(e:any){  
    document.documentElement.className = e ? 'dark':'light';
    this.$store.dispatch('changedTheme', e)
  }

  logout(){
    this.$store.dispatch('LoggedInUser', null);    
    this.$router.push("/login");
  }

  stickyHeader(){
    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });
  }
}
</script>

<style scoped></style>
