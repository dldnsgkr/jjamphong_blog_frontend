<script setup lang="ts">
import ClientHeader from '@components/web/ClientHeader.vue';
import ClientFooter from '@components/web/ClientFooter.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <ClientHeader />
    <RouterView />
    <ClientFooter />
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0 4rem;
}
@media (max-width: 768px) {
  .wrapper {
    padding: 0 1rem;
  }
}
</style>
