<template>
    <div>
        <Header />
        <div class="page-area">
            <div class="container">
                <code class="prettyprint">
                {{JSON.stringify($store.state.user, null, 8)}}
                </code>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Header from "@/components/Header.vue";

    @Component({
        components: {
            Header
        },
    })
    export default class UserProfile extends Vue {
        
    }
</script>

<style scoped>

</style>