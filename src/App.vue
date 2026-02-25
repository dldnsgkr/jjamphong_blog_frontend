<script setup lang="ts">
import ClientHeader from '@components/web/ClientHeader.vue';
import ClientFooter from '@components/web/ClientFooter.vue';
import TeleportView from '@components/universal/TeleportView.vue';
import { RouterView } from 'vue-router';
import { useModalStore } from '@stores/modalStore';
import ModalBackground from '@components/universal/ModalBackground.vue';
import { storeToRefs } from 'pinia';
import { onBeforeMount, ref } from 'vue';
import { refreshToken } from '@services/auth.service';
import { useAuthStore } from '@stores/authStore';

const modalStore = useModalStore();
const authStore = useAuthStore();
const { modalState, modalView } = storeToRefs(modalStore);
const { handleModalState } = useModalStore();

const ready = ref(false);

// 앱 최초 진입 시 refresh API를 호출하여 로그인 상태를 복구한다.
// (accessToken이 메모리에만 저장되므로 새로고침 시 재발급 필요)
onBeforeMount(async () => {
  try {
    const res = await refreshToken();

    authStore.setAccessToken(res.contents.accessToken);

    authStore.setUpUserInfo();
  } catch (e) {
    // 토큰 없으면 그냥 진행
  } finally {
    ready.value = true;
  }
});
</script>

<template>
  <template v-if="ready">
    <ClientHeader />
    <RouterView :key="$route.path" />
    <ClientFooter />
    <TeleportView
      :background-component="ModalBackground"
      :activateBackground="modalState"
      :modal-component="modalView"
      :modalBackgroundHandler="handleModalState"
    ></TeleportView>
  </template>
</template>

<style scoped></style>
