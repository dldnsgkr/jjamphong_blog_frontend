<script setup lang="ts">
import BasicButton from '../common/button/BasicButton.vue';
import ListUi from './ListUi.vue';
</script>

<template>
  <ListUi
    text="회원 탈퇴"
    description="탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다."
  >
    <template #element1>
      <BasicButton
        style="flex: none; margin: 0"
        text="회원 탈퇴"
        button-round="round-sm"
        buttonStyle="redButton"
        animationtype="bright"
      />
    </template>
  </ListUi>
</template>

<style scoped lang="scss"></style>
