<script setup lang="ts">
import EditEmail from '@components/web/setting/EditEmail.vue';
import EditLoginInfo from '@components/web/setting/EditLoginInfo.vue';
import EditSecession from '@components/web/setting/EditSecession.vue';
import EditSocial from '@components/web/setting/EditSocial.vue';
import EditTheme from '@components/web/setting/EditTheme.vue';
import EditTitle from '@components/web/setting/EditTitle.vue';
import UserInfo from '@components/web/setting/UserInfo.vue';
</script>

<template>
  <main class="setting-container">
    <div class="setting-wrapper">
      <UserInfo />
      <div class="userInfo-detail-list">
        <EditTitle />
        <EditSocial />
        <EditLoginInfo />
        <EditEmail />
        <EditTheme />
        <EditSecession />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.setting-container {
  width: 100%;
  height: 100%;
  padding-bottom: 8rem;
  display: flex;
  justify-content: center;
  .setting-wrapper {
    width: 768px;
  }
  .userInfo-detail-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
  }
}
</style>
