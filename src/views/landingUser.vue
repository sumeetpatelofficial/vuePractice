<template>
  <div>
    <Header />
    <div class="page-area">
      <Home />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Home from "@/views/Home.vue";

@Component({
  components: {
    Header,
    Home
  },
})
export default class userLanding extends Vue {}
</script>

<style scoped></style>
