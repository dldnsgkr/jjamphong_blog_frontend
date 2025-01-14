<script setup lang="ts">
import Bell from '@components/web/common/icon/Bell.vue';
import Search from '@components/web/common/icon/Search.vue';
import { ref, watch } from 'vue';
import SearchBar from './dialogView/SearchBar.vue';
import { useRoute, useRouter } from 'vue-router';
import BasicButton from './common/button/BasicButton.vue';
import { useModalStore } from '@stores/modalStore';
import Login from './dialogView/author/Login.vue';

const route = useRoute();

const router = useRouter();

const { openModal } = useModalStore();

/** header UI 상태 조건 */
const isSpecificRoute = ref(route.path === '/');

/**
 * search modal 활성화 function
 */
function openSearchModal() {
  openModal(SearchBar);
}

/**
 * main page로 이동
 */
function openLoginModal() {
  openModal(Login);
}

/**
 * header UI 상태 변경 watcher
 */
watch(
  () => route.path,
  (newPath) => {
    isSpecificRoute.value = newPath === '/';
  }
);
</script>

<template>
  <header class="client-header">
    <div class="basic-header-wrapper">
      <div
        v-if="isSpecificRoute"
        class="logo"
        @click="router.push({ path: '/' })"
      >
        Eclectic Explorations
      </div>
      <div v-else class="logo">사용자임</div>
      <div class="function-wrapper">
        <Search @click="openSearchModal" />
        <Bell />
        <BasicButton
          text="로그인"
          :click-event="() => openLoginModal()"
        />
        <!-- <BasicButton text="팔로우" /> -->
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.client-header {
  display: flex;
  flex-direction: column;
  padding: 0 8%;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
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
