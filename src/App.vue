<script setup lang="ts">
import ClientHeader from '@components/web/ClientHeader.vue';
import ClientFooter from '@components/web/ClientFooter.vue';
import TeleportView from '@components/universal/TeleportView.vue';
import { RouterView } from 'vue-router';
import { useModalStore } from '@stores/modalStore';
import ModalBackground from '@components/universal/ModalBackground.vue';
import { storeToRefs } from 'pinia';

const store = useModalStore();
const { modalState, modalView } = storeToRefs(store);
const { handleModalState } = useModalStore();
</script>

<template>
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

<style scoped></style>
