<script setup lang="ts">
import { watch, type Component } from 'vue';
type ModalBackgroundPropsType = {
  activateBackground: boolean;
  modalComponent: Component;
  modalBackgroundHandler: () => void;
};
const {
  activateBackground,
  modalComponent,
  modalBackgroundHandler,
} = defineProps<ModalBackgroundPropsType>();
// Watch for changes in activateBackground
watch(
  () => activateBackground,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
);
</script>

<template>
  <div
    class="modal-background-wrapper"
    :class="activateBackground ? 'active' : 'hid'"
  >
    <div class="modal-wrapper">
      <component
        :is="modalComponent"
        :activateBackground="activateBackground"
        @close="modalBackgroundHandler"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-background-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition:
    opacity 0.3s ease,
    z-index 0s linear 0.3s;
  overflow: auto;
  &.active {
    z-index: 5;
    opacity: 1;
    transition:
      opacity 0.3s ease,
      z-index 0s linear;
  }
  &.hid {
    z-index: -1;
  }
  .modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
