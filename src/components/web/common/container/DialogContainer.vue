<script setup lang="ts">
import { useModalStore } from '@stores/modalStore';
import CloseX from '../icon/CloseX.vue';

type DialogContainerType = {
  width?: string;
  height?: string;
  disCloseBtn?: boolean;
};

const { width = '60%' } =
  defineProps<DialogContainerType>();

const { handleModalState } = useModalStore();
</script>

<template>
  <section class="dialog-container" :style="{ width }">
    <CloseX
      class="icon-close"
      @click="handleModalState"
      :fillColor="'rgba(88, 101, 242, 0.5)'"
    />
    <slot />
  </section>
</template>

<style scoped lang="scss">
.dialog-container {
  position: relative;
  background-color: #fff;
}
.icon-close {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
</style>
