<template>
  <div class="home">    
    <!-- <Header></Header> -->
    <b-navbar toggleable="sm" :type="themeMode? 'dark':'light'" :variant="themeMode? 'dark':'light'">
      <div class="container">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-form-checkbox switch size="sm"
        @change="changeThemeMode"
        v-model="themeMode">{{themeMode ? 'Dark Mode':'Light Mode'}}</b-form-checkbox>
      </div>
    </b-navbar>  
    <div class="container py-5">
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
      <div class="row">
        <div class="col-6">
          <contact-card />
        </div>
      </div>      
    </div>

    <b-modal centered size="lg" id="modal-1" @ok="saveUser()" title="Add New User">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="user.email"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.name"
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Favorite Food:" label-for="input-3">
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
    </b-modal>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import contactCard from "@/components/child/contactCard.vue"
@Component({
  components: {
    contactCard
  },
})
export default class Home extends Vue {
  users:any=[];
  themeMode:any=this.$store.state.currentTheme;
  user:any={
    email:'',
    name:'',
    food:null,
    checked:false,
  }

  foods:any= [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn']

  mounted(){
    this.users = this.$store.state.user;
    document.documentElement.className = this.themeMode ? 'dark':'light';
  }

  saveUser(){
    this.$store.dispatch('addNewUser',this.user);
    this.users = this.$store.state.user;
  }

  changeChecked(index:any){
    this.$store.dispatch('changeStatus',index);
  }

  changeThemeMode(e:any){  
    document.documentElement.className = e ? 'dark':'light';
    this.$store.dispatch('changedTheme', e)
  }

}
</script>

<style scoped>
  .form-group{
    margin-bottom: 20px;
  }
</style>
