<script setup lang="ts">
import { computed } from 'vue';

type ArrowPropsType = {
  rotate: 'left' | 'right' | 'top' | 'bottom';
};
const { rotate } = defineProps<ArrowPropsType>();

const computedRotation = computed(() => {
  switch (rotate) {
    case 'left':
      return 'rotate(0deg)';
    case 'right':
      return 'rotate(180deg)';
    case 'top':
      return 'rotate(90deg)';
    case 'bottom':
      return 'rotate(270deg)';
    default:
      return 'rotate(0deg)';
  }
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="24"
    viewBox="0 0 24 24"
    :style="{
      fill: 'rgb(18, 184, 134)',
      transform: computedRotation,
    }"
  >
    <path
      d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"
    ></path>
  </svg>
</template>
