<script setup>
import ModalBackground from '@components/universal/ModalBackground.vue';
import TeleportView from '@components/universal/TeleportView.vue';
import Bell from '@components/web/icon/Bell.vue';
import Search from '@components/web/icon/Search.vue';
import { ref } from 'vue';
import SearchBar from './input/SearchBar.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isSpecificRoute = route.path === '/';

const activateBackground = ref(false);

function modalBackgroundHandler() {
  activateBackground.value = !activateBackground.value;
}
</script>

<template>
  <header class="client-header">
    <div class="basic-header-wrapper">
      <div class="logo">Eclectic Explorations</div>
      <div class="function-wrapper">
        <Search @click="modalBackgroundHandler" />
        <Bell />
        <div class="header-button">새 글 작성</div>
        <div class="header-button">Login</div>
      </div>
    </div>
    <div v-if="isSpecificRoute"></div>
  </header>
  <TeleportView
    :background-component="ModalBackground"
    :activateBackground="activateBackground"
    :modal-component="SearchBar"
    :modalBackgroundHandler="modalBackgroundHandler"
  ></TeleportView>
</template>

<style lang="scss">
.client-header {
  display: flex;
  flex-direction: column;
  .basic-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .filter-header-wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>
