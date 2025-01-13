<script setup lang="ts">
type TextAreaPropsType = {
  placeholder?: string;
  width?: string;
  height?: string;
};
const {
  placeholder,
  width = '100%',
  height = '100px',
} = defineProps<TextAreaPropsType>();
</script>

<template>
  <textarea
    :placeholder="placeholder"
    :style="{
      width: width,
      height: height,
      resize: 'none',
      border: '1px solid #F1F3F5',
      borderRadius: '0.5rem',
      padding: '1rem',
      outline: 'none',
      boxSizing: 'border-box',
    }"
  ></textarea>
</template>

<style scoped lang="scss"></style>
