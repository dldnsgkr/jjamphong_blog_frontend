<script setup lang="ts">
import ListUi from './ListUi.vue';
import SwitchToggleUi from '../common/ui/SwitchToggleUi.vue';
</script>

<template>
  <ListUi
    text="이메일 수신 설정"
    description="회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다."
  >
    <template #element1>
      <div class="input-wrapper">
        <div class="toggle-wrapper">
          <p>댓글 알림</p>
          <SwitchToggleUi />
        </div>
        <div class="toggle-wrapper">
          <p>밸로그 업데이트 소식</p>
          <SwitchToggleUi />
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
  .toggle-wrapper {
    display: flex;
    max-width: 18rem;
    justify-content: space-between;
  }
}
</style>
