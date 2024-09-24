<script setup lang="ts">
import { Teleport, type Component } from 'vue';
type TeleportViewPropsType = {
  backgroundComponent: Component;
  activateBackground: boolean;
  modalComponent: Component;
  modalBackgroundHandler: () => void;
};
const props = defineProps<TeleportViewPropsType>();
</script>

<template>
  <Teleport to="body">
    <component
      :is="props.backgroundComponent"
      :activateBackground="props.activateBackground"
      :modalComponent="props.modalComponent"
      :modalBackgroundHandler="modalBackgroundHandler"
    />
  </Teleport>
</template>

<style scoped lang="scss"></style>
