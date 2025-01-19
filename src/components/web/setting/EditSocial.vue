<script setup lang="ts">
import { ref } from 'vue';
import ListUi from './listUi.vue';
import BasicInput from '../common/input/BasicInput.vue';
import BasicButton from '../common/button/BasicButton.vue';

const socialEdit = ref(false);
const handleSocialEdit = () => {
  socialEdit.value = false;
};
</script>

<template>
  <ListUi
    text="소셜 정보"
    description="포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다."
  >
    <template #element1>
      <span
        v-if="socialEdit === false"
        class="switching-text bright"
        style="align-self: flex-start"
        @click="socialEdit = true"
      >
        정보 추가
      </span>
      <div v-else class="input-wrapper">
        <BasicInput placeholder="이메일을 입력하세요." />
        <BasicInput
          placeholder="Github 계정을 입력하세요."
        />
        <BasicInput
          placeholder="Twitter 계정을 입력하세요."
        />
        <BasicInput
          placeholder="https://www.facebook.com/"
        />
        <BasicInput
          placeholder="홈페이지 주소를 입력하세요."
        />
        <div style="margin-top: 1rem; align-self: end">
          <BasicButton
            text="저장"
            button-round="round-sm"
            :click-event="handleSocialEdit"
          />
        </div>
      </div>
    </template>
  </ListUi>
</template>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
