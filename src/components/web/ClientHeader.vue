<script setup>
import Bell from '@components/web/icon/Bell.vue';
import Search from '@components/web/icon/Search.vue';
</script>

<template>
  <header class="client-header">
    <div class="logo">Eclectic Explorations</div>
    <div class="function-wrapper">
      <Search />
      <Bell />
      <div class="header-button">새 글 작성</div>
      <div class="header-button">Login</div>
    </div>
  </header>
</template>

<style lang="scss">
.client-header {
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 2.4rem 0;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .function-wrapper {
    display: flex;
    align-items: center;
    padding: 2.4rem 0;
    gap: 1.2rem;
  }
}
</style>
