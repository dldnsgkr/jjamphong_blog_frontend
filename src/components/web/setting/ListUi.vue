<script setup lang="ts">
type ListUiPropsType = {
  text: string;
  description?: string;
};

const { text, description } =
  defineProps<ListUiPropsType>();
</script>

<template>
  <div class="list-element">
    <div class="first-list">
      <h3>{{ text }}</h3>
      <slot name="element1"></slot>
      <slot name="element2"></slot>
    </div>
    <div>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-element {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-bottom: 1px solid #f1f3f5;
  .first-list {
    width: 100%;
    display: flex;
    gap: 1rem;
    > :last-child {
      margin-left: auto;
      border: none;
    }
    > :nth-child(2) {
      flex: 1;
    }
    h3 {
      width: 10rem;
    }
  }
  .description {
    margin-top: 1rem;
    color: #868e96;
    font-size: 0.875rem;
  }
}
</style>
