<script setup lang="ts">
type ButtonPropsType = {
  text: string;
  buttonStyle?: 'grassButton' | 'basicButton';
  clickEvent?: (e: MouseEvent) => void;
  type?: 'submit' | 'button';
};

const {
  text,
  buttonStyle = 'basicButton',
  type = 'button',
} = defineProps<ButtonPropsType>();
</script>

<template>
  <button
    :type="type"
    :class="buttonStyle"
    @click="clickEvent"
  >
    {{ text }}
  </button>
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
