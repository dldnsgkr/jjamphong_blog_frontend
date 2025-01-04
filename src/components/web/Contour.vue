<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

type ButtonPropsType = {
  marginTop?: string;
  marginBottom?: string;
};

const props = withDefaults(defineProps<ButtonPropsType>(), {
  marginTop: '2rem',
  marginBottom: '1.5rem',
});
</script>

<template>
  <div
    class="underLine"
    :style="{
      marginTop: props.marginTop,
      marginBottom: props.marginBottom,
    }"
  ></div>
</template>

<style scoped lang="scss">
.underLine {
  width: 100%;
  height: 1px;
  background-color: #e9ecef;
}
</style>
