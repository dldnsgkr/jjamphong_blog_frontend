<script setup lang="ts">
import ClientHeader from '@components/web/ClientHeader.vue';
import ClientFooter from '@components/web/ClientFooter.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <ClientHeader />
  <RouterView :key="$route.path" />
  <ClientFooter />
</template>

<style scoped></style>
