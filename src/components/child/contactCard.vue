<template>
    <div class="contact-card">
        <div class="contact-card-image">
            <div class="content">
                <!-- <img src="" alt="" srcset=""> -->
            </div>
        </div>
        <div class="contact-card-detail">
            <h4>Donna Hicks</h4>
            <h6>Admin</h6>
            <p>Finance & Admin Dept.</p>
        </div>
        <div class="contact-card-action">
            <b-link class="remove"><span class="material-icons">close</span></b-link>
            <b-link class="check"><span class="material-icons">check</span></b-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class contactCard extends Vue {
        
    }
</script>

<style scoped lang="scss">
    .contact-card{
        position: relative;
        background: #ffffff;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        padding: 25px 0;
        align-items: center;
        box-shadow:
        0 20px 15px rgba(0, 0, 0, 0.03),
        0 40px 30px rgba(0, 0, 0, 0.04),
        0 100px 80px rgba(0, 0, 0, 0.05);
        &-image{
            position: relative;
            width: 80px;
            height: 80px;
            background: #f2f2f2;
            border-radius: 50%;
            margin: 0 15px; 
            flex: 0 0 80px;           
        }
        &-detail{
            flex: auto;
            margin: 0 15px; 
            h4{
                color: #143655;
                margin-bottom: 15px;
            }
            h6{
                color: #143655;
                margin-bottom: 0;
            }
            p{
                color: #929292;
                margin-bottom: 0;
            }
        }
        &-action{
            position: relative;
            margin: 0 15px;
            display: flex;
            a{
                position: relative;
                display: inline-block;
                width: 35px;
                height: 35px;
                border-radius:50%;
                text-align: center;
                margin-left: 8px;
                span{
                    line-height: 35px;
                }
                &.remove{
                    background: rgba($color: #FF0000, $alpha: 0.1);
                    span{
                        color: #FF0000;
                    }
                }
                &.check{
                    background: #3CDC04;
                    span{
                        color: #ffffff;
                    }
                }
                &:first-child{
                    margin-left: 0;
                }
            }
        }
    }
</style>