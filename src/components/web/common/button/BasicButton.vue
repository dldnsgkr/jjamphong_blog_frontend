<script setup lang="ts">
type ButtonPropsType = {
  text: string;
  buttonRound?: 'round-sm' | 'round-lg';
  buttonStyle?:
    | 'basic'
    | 'transparent'
    | 'basicButton'
    | 'grassButton';
  animationtype?:
    | 'bright'
    | 'darken'
    | 'darken-transparent';
  width?: string;
  clickEvent?: (e: MouseEvent) => void;
  type?: 'submit' | 'button';
};
const {
  buttonRound = 'round-lg',
  buttonStyle = 'basic',
  width,
  animationtype = '',
  text,
} = defineProps<ButtonPropsType>();
</script>

<template>
  <button
    :class="[buttonStyle, animationtype, buttonRound]"
    :style="{ width }"
    @click="clickEvent"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
button {
  cursor: pointer;
  transition:
    color 0.3s ease,
    background 0.3s ease;
}
// buttonRound
.round-lg {
  height: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
}

.round-sm {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

// buttonStyle
.basic {
  color: #fff;
  background-color: #12b886;
  border: none;
}

.transparent {
  background-color: transparent;
  color: #12b886;
  border: none;
}

.basicButton {
  border: 1px solid black;
  background-color: #ffffff;
  &:hover {
    color: #ffffff;
    background-color: black;
  }
}

.grassButton {
  border: 1px solid #12b886;
  color: #12b886;
  background-color: #ffffff;
  &:hover {
    color: #ffffff;
    background-color: #12b886;
  }
}

// animationtype
.darken-transparent {
  transition: background 0.3s ease;
  &:hover {
    background: #e0e0e0;
  }
}
</style>
