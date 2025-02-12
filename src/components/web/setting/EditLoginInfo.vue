<script setup lang="ts">
import { ref } from 'vue';
import ListUi from './ListUi.vue';
import BasicInput from '../common/input/BasicInput.vue';
import BasicButton from '../common/button/BasicButton.vue';

const loginEdit = ref(false);
const handleTitleEdit = () => {
  loginEdit.value = false;
};
</script>

<template>
  <ListUi
    text="로그인 정보"
    description="로그인 시 입력할 정보 입니다."
  >
    <template #element1>
      <span
        v-if="loginEdit === false"
        class="switching-text bright"
        style="align-self: flex-start"
        @click="loginEdit = true"
      >
        수정
      </span>
      <div v-else class="input-wrapper">
        <BasicInput
          placeholder="이메일(아이디)을 입력하세요."
        />
        <BasicInput placeholder="패스워드를 입력하세요." />
        <div style="margin-top: 1rem; align-self: end">
          <BasicButton
            text="변경"
            button-round="round-sm"
            :click-event="handleTitleEdit"
          />
        </div>
      </div>
    </template>
  </ListUi>
</template>

<style scoped lang="scss">
p {
  color: #495057;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
