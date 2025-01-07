<script setup lang="ts">
type FloatAreaPropsType = {
  top?: string;
  right?: string;
  left?: string;
};
const props = withDefaults(
  defineProps<FloatAreaPropsType>(),
  {
    top: '0px',
    left: '0px',
    right: '0px',
  }
);
</script>

<template>
  <div
    class="sticky-container"
    :style="{
      top: props.top,
      left: props.left,
      right: props.right,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.sticky-container ::v-deep {
  position: sticky;
  height: 10px;
  z-index: 1;
}
</style>
