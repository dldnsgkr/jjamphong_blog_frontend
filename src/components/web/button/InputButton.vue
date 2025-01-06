<script setup lang="ts">
type ButtonPropsType = {
  text: string;
  color?: 'basic';
  animationtype?: 'bright';
  width?: string;
};
const props = withDefaults(defineProps<ButtonPropsType>(), {
  color: 'basic',
  width: '6rem',
});
</script>

<template>
  <button
    :class="[props.color, props.animationtype]"
    :style="{ width }"
  >
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
button {
  height: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.basic {
  color: #fff;
  background-color: #12b886;
  border: none;
  cursor: pointer;
}

.bright {
  transition: filter 0.3s ease;
  &:hover {
    filter: brightness(1.2);
  }
}
</style>
