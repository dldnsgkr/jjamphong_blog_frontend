<script setup lang="ts">
import Arrow from '../icon/Arrow.vue';

type ButtonPropsType = {
  title: string;
  align: 'left' | 'right';
};
const { title, align } = defineProps<ButtonPropsType>();
</script>

<template>
  <div class="box-container">
    <div
      class="arrow-tag"
      :class="align"
      v-if="align == 'left'"
    >
      <Arrow :rotate="align" />
    </div>
    <div class="text-container">
      <p class="align-text" :style="{ textAlign: align }">
        {{
          align == 'left' ? '이전 포스트' : '다음 포스트'
        }}
      </p>
      <h3>{{ title }}</h3>
    </div>
    <div
      class="arrow-tag"
      :class="align"
      v-if="align === 'right'"
    >
      <Arrow :rotate="align" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.box-container {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 45%;
  max-width: 45%;
  gap: 1.25rem;
  background-color: #f8f9fa;
  cursor: pointer;

  &:hover .arrow-tag.left {
    transform: translateX(-5px);
    transition: transform 0.3s ease;
  }

  &:hover .arrow-tag.right {
    transform: translateX(5px);
    transition: transform 0.3s ease;
  }

  .arrow-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    padding: 0.1rem;
    border: solid 1px #12b886;
    border-radius: 50%;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;
    max-height: 100%;
    overflow: hidden;

    .align-text {
      font-size: 0.75rem;
      font-weight: bold;
      color: #495057;
    }

    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
}
</style>
