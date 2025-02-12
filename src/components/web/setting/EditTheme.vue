<script setup lang="ts">
import ListUi from './ListUi.vue';
</script>

<template>
  <ListUi text="테마">
    <template #element1>
      <div class="theme-button-wrapper">
        <div class="theme-button"></div>
        <div class="theme-button dark"></div>
        <div class="theme-button"></div>
      </div>
    </template>
  </ListUi>
</template>

<style scoped lang="scss">
.theme-button-wrapper {
  display: flex;
  gap: 1rem;
  .theme-button {
    width: 10rem;
    height: 5rem;
    border: 1px solid #f1f3f5;
  }
}
.light {
}

.dark {
  background-color: black;
}
</style>
