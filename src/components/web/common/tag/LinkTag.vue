<script setup lang="ts">
type ButtonPropsType = {
  text: string;
  link: string;
};
const { text, link } = defineProps<ButtonPropsType>();
</script>

<template>
  <RouterLink :to="link" style="text-decoration: none">
    <span class="round-tag">
      {{ text }}
    </span></RouterLink
  >
</template>

<style scoped lang="scss">
.round-tag {
  font-size: 0.9rem;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  background: #f8f9fa;
  color: #12b886;
  transition:
    color 0.3s ease,
    background 0.3s ease;
  &:hover {
    color: #ffffff;
    background: #12b886;
  }
}
</style>
