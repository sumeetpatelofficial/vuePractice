<template>
    <div>
        {{mappedArray}}
        {{squaredValue}}
        {{oddNumber}}
        {{eventNumber}}
        {{reducedSum}}
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class jsPractice extends Vue {
        sampleArray:any = [1,5,3,8];
    
        mappedArray:any = this.sampleArray.map((item: any) => item*2);
        squaredValue:any = this.sampleArray.map((item: any) => Math.pow(item,2));

        oddNumber:any = this.sampleArray.filter((item: any) => item % 2 === 1);
        eventNumber:any = this.sampleArray.filter((item: any) => item % 2 === 0);

        reducedSum:any = this.sampleArray.reduce((result: any, num: any)=>{
            return result += num;
        })
            
    }
</script>

<style scoped>

</style>