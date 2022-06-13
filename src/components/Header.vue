<template>
     <header class="page-header">         
        <div class="row align-items-center d-flex justify-content-between">
            <div class="col-auto">
            <h4 class="page-title">Dashboard</h4>
            </div>
            <div class="col text-right">                
            <div class="d-flex justify-content-end">               
                <button type="button" class="btn-link btn"><i class="zmdi icon-search"></i></button>
                <button type="button" class="btn-link btn mr-3"><i class="zmdi icon-full-screen"></i></button>
                <b-dropdown id="dropdown-1" right variant="link" toggle-class="text-decoration-none">
                    <template #button-content>
                        <img src="https://m.jagranjosh.com/imported/images/E/GK/Amitabh-Bachchan-Biography.jpg" alt="profile-img" class="rounded-circle mr-2"> <span class="loginUsername">Amitabh</span>
                    </template>                    
                </b-dropdown>                                                 
            </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Header extends Vue {        
        profileName:any="";       
    }
</script>

<style scoped>

</style>