<script setup lang="ts">
import { Teleport, watch, type Component } from 'vue';
type TeleportViewPropsType = {
  backgroundComponent: Component;
  activateBackground: boolean;
  modalComponent?: Component;
  modalBackgroundHandler: () => void;
};
const {
  backgroundComponent,
  modalBackgroundHandler,
  modalComponent,
  activateBackground,
} = defineProps<TeleportViewPropsType>();
</script>

<template>
  <Teleport to="body">
    <component
      :is="backgroundComponent"
      :activateBackground="activateBackground"
      :modalComponent="modalComponent"
      :modalBackgroundHandler="modalBackgroundHandler"
    />
  </Teleport>
</template>

<style scoped lang="scss"></style>
