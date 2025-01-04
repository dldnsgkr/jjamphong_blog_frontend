<script setup lang="ts">
type ButtonPropsType = {
  text: string;
  class?: 'grassButton' | 'basicButton';
};
const props = withDefaults(defineProps<ButtonPropsType>(), {
  class: 'basicButton',
});
</script>

<template>
  <button :class="props.class">{{ props.text }}</button>
</template>

<style scoped lang="scss">
.round-button {
  height: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  transition:
    color 0.3s ease,
    background 0.3s ease;
  cursor: pointer;
}

.basicButton {
  @extend .round-button;
  border: 1px solid black;
  background-color: #ffffff;
  &:hover {
    color: #ffffff;
    background: black;
  }
}

.grassButton {
  @extend .round-button;
  border: 1px solid #12b886;
  color: #12b886;
  background-color: #ffffff;
  &:hover {
    color: #ffffff;
    background: #12b886;
  }
}
</style>
