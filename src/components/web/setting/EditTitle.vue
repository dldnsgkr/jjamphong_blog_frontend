<script setup lang="ts">
import { ref } from 'vue';
import ListUi from './listUi.vue';
import BasicInput from '../common/input/BasicInput.vue';
import BasicButton from '../common/button/BasicButton.vue';

const titleEdit = ref(false);
const handleTitleEdit = () => {
  titleEdit.value = false;
};
</script>

<template>
  <ListUi
    text="벨로그 제목"
    description="개인 페이지의 좌측 상단에 나타나는 페이지
          제목입니다."
  >
    <template #element1>
      <p v-if="titleEdit === false">jacelee.log</p>
      <BasicInput v-else />
    </template>
    <template #element2>
      <span
        v-if="titleEdit === false"
        class="switching-text bright"
        style="align-self: flex-start"
        @click="titleEdit = true"
      >
        수정
      </span>
      <BasicButton
        v-else
        text="변경"
        button-round="round-sm"
        :click-event="handleTitleEdit"
      />
    </template>
  </ListUi>
</template>

<style scoped lang="scss">
p {
  color: #495057;
}
</style>
