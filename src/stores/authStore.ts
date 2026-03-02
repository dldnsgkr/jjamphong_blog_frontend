// stores/auth.store.ts
import { myInfo } from '@services/auth.service';
import { defineStore } from 'pinia';
import type { MyInfoResType } from 'types/web/auth.types';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  /** 로그인시 가지게될 accessToken */
  const accessToken = ref<string | null>(null);

  /** user 정보 */
  const user = ref<MyInfoResType>({
    social_instagram: '',
    social_slack: '',
    social_discord: '',
    social_github: '',
    social_phone: '',
    social_facebook: '',
    email: '',
    blog_title: '',
    user_explain: '',
    nickname: '',
    provider: '',
    provider_id: '',
    profile_image_url: '',
  });

  /** 로그인 여부 */
  const isLoggedIn = computed(() => !!accessToken.value);

  /** accessToken 설정 함수 */
  function setAccessToken(token: string) {
    accessToken.value = token;
  }

  /** 로그인 정보 삭제 */
  function clearAuth() {
    accessToken.value = null;
    user.value = {
      social_instagram: '',
      social_slack: '',
      social_discord: '',
      social_github: '',
      social_phone: '',
      social_facebook: '',
      email: '',
      blog_title: '',
      user_explain: '',
      nickname: '',
      profile_image_url: '',
      provider: '',
      provider_id: '',
    };
  }

  async function setUpUserInfo() {
    const response = await myInfo();
    user.value = response.contents;
    console.log(user.value);
  }

  return {
    accessToken,
    user,
    isLoggedIn,
    setAccessToken,
    clearAuth,
    setUpUserInfo,
  };
});
