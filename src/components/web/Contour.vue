<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

type ButtonPropsType = {
  marginTop?: string;
  marginBottom?: string;
};

const { marginBottom = '1.5rem', marginTop = '2rem' } =
  defineProps<ButtonPropsType>();
</script>

<template>
  <div
    class="underLine"
    :style="{
      marginTop: marginTop,
      marginBottom: marginBottom,
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
