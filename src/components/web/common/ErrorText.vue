<script setup lang="ts">
import { ref, watch } from 'vue';

type ErrorPropsType = {
  text?: string;
};

const { text = '' } = defineProps<ErrorPropsType>();
const showText = ref<string>(text);
const animationClass = ref<string>('');

watch(
  () => text,
  (newText) => {
    if (!!newText) {
      showText.value = newText;
      animationClass.value = 'slide-down';
    } else if (!newText) {
      animationClass.value = 'slide-up';
    }
  }
);
</script>

<template>
  <p :class="['text', animationClass]">{{ showText }}</p>
</template>

<style scoped lang="scss">
// 슬라이드다운 애니메이션 정의
@keyframes slide-down {
  0% {
    transform: translateY(-10px);
    opacity: 0;
    max-height: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    max-height: 100px; // 이 값을 높게 설정하여 텍스트가 충분히 보이도록 합니다
  }
}

// 슬라이드업 애니메이션 정의
@keyframes slide-up {
  0% {
    transform: translateY(0);
    opacity: 1;
    max-height: 100px;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
    max-height: 0;
  }
}

.text {
  overflow: hidden;
  font-size: 14px;
  color: #f56565;
  white-space: pre-line;
  word-break: keep-all;

  // 슬라이드다운 애니메이션 클래스
  &.slide-down {
    animation: slide-down 0.5s ease forwards;
  }

  // 슬라이드업 애니메이션 클래스
  &.slide-up {
    animation: slide-up 0.5s ease forwards;
  }
}
</style>
