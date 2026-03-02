<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import ListUi from './ListUi.vue';
import BasicInput from '../common/input/BasicInput.vue';
import BasicButton from '../common/button/BasicButton.vue';
import { useAuthStore } from '@stores/authStore';
import { storeToRefs } from 'pinia';
import { updateUser } from '@services/auth.service';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const socialEdit = ref(false);

const editSocial = ref({
  social_instagram: '',
  social_slack: '',
  social_discord: '',
  social_github: '',
  social_phone: '',
  social_facebook: '',
  email: '',
});

watch(
  user,
  (newUser) => {
    if (newUser) {
      const userObj = user.value;

      editSocial.value = {
        social_instagram: userObj.social_instagram,
        social_slack: userObj.social_slack,
        social_discord: userObj.social_discord,
        social_github: userObj.social_github,
        social_phone: userObj.social_phone,
        social_facebook: userObj.social_facebook,
        email: userObj.email,
      };
    }
  },
  { immediate: true }
);

const handleSocialEdit = () => {
  socialEdit.value = false;

  user.value = { ...user.value, ...editSocial.value };

  updateUser({
    ...editSocial.value,
  });
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
        <BasicInput
          v-model="editSocial.social_instagram"
          placeholder="instagram 계정을 입력하세요."
        />
        <BasicInput
          v-model="editSocial.social_slack"
          placeholder="슬랙 email을 입력하세요"
        />
        <BasicInput
          v-model="editSocial.social_discord"
          placeholder="Discord 계정 email을 입력하세요."
          autocomplete="email"
        />
        <BasicInput
          v-model="editSocial.social_github"
          placeholder="Github 계정을 입력하세요."
          autocomplete="email"
        />
        <BasicInput
          v-model="editSocial.social_phone"
          placeholder="개인 휴대전화번호를 입력하세요."
        />
        <BasicInput
          v-model="editSocial.social_facebook"
          placeholder="https://www.facebook.com/"
        />
        <BasicInput
          v-model="editSocial.email"
          placeholder="이메일을 입력하세요."
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
