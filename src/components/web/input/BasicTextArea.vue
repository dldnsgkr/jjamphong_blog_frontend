<script setup lang="ts">
type TextAreaPropsType = {
  placeholder?: string;
  width?: string;
  height?: string;
};
const props = withDefaults(
  defineProps<TextAreaPropsType>(),
  {
    width: '100%',
    height: '100px',
  }
);
</script>

<template>
  <textarea
    :placeholder="props.placeholder"
    :style="{
      width: props.width,
      height: props.height,
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
