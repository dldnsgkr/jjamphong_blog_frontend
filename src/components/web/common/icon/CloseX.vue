<script setup lang="ts">
type IconPropsType = {
  fillColor?: string;
};
const { fillColor = '#e8eaed' } =
  defineProps<IconPropsType>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    :style="{
      fill: fillColor,
      cursor: 'pointer',
    }"
  >
    <path
      d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
    />
  </svg>
</template>
