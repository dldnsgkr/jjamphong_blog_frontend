<script setup lang="ts">
import BlogItemBoxSkeleton from '@components/web/skeleton/BlogItemBoxSkeleton.vue';
import { watch, type Component } from 'vue';
type ModalBackgroundPropsType = {
  activateBackground: boolean;
  modalComponent: Component;
  modalBackgroundHandler: () => void;
};
const props = defineProps<ModalBackgroundPropsType>();
// Watch for changes in activateBackground
watch(
  () => props.activateBackground,
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
        :is="props.modalComponent"
        :activateBackground="activateBackground"
        @close="modalBackgroundHandler"
      />
      <div class="search-list-wrapper">
        <div class="search-list-sort">
          <BlogItemBoxSkeleton />
          <BlogItemBoxSkeleton />
          <BlogItemBoxSkeleton />
        </div>
      </div>
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
    z-index: 1;
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
    .search-list-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 2rem;
      .search-list-sort {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        width: 79.2%;
      }
    }
  }
}
</style>
