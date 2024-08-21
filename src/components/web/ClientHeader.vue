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
      <button>새 글 작성</button>
      <button>Login</button>
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
  }
  .function-wrapper {
    display: flex;
    padding: 2.4rem 0;
    gap: 1rem;
  }
}
</style>
