<template>
    <div class="login-page">
        <div class="login-card">
            <div class="login-card-header">
                <h3>Login</h3>
                <p>let’s see who is in your contact list</p>
            </div>
            <div class="login-card-body">
                <div class="form-group">
                    <label for="">Email / Username</label>
                    <b-form-input
                        id="input-1"                    
                        type="email"
                        placeholder="Enter First Name"
                    ></b-form-input>
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <b-form-input
                        id="input-1"                    
                        type="password"
                        placeholder="**********"
                    ></b-form-input>
                </div>
            </div>
            <div class="login-card-footer">
                <b-button variant="primary" block>Sign in</b-button>
                <p>Now have an account yet <b-link>sign up</b-link></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Login extends Vue {
        
    }
</script>

<style scoped>
    
</style>