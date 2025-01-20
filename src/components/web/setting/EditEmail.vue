<script setup lang="ts">
import { ref } from 'vue';
import ListUi from './ListUi.vue';
import SwitchToggleUi from '../common/ui/SwitchToggleUi.vue';

const emailEdit = ref(false);
const handleSocialEdit = () => {
  emailEdit.value = false;
};
</script>

<template>
  <ListUi
    text="이메일 주소"
    description="회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다."
  >
    <template #element1>
      <div class="input-wrapper">
        <SwitchToggleUi />
        <SwitchToggleUi />
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
