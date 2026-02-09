<script setup lang="ts">
import DialogContainer from '@components/web/common/container/DialogContainer.vue';
import LoginImage from '@components/web/common/image/LoginImage.vue';
import { ref, watch } from 'vue';
import Login from './Login.vue';
import Signup from './Signup.vue';
import { useModalStore } from '@stores/modalStore';

// 로그인/회원가입 모드 상태
const isLogin = ref(true);

// 로그인/회원가입 모드 토글
const toggleMode = () => {
  isLogin.value = !isLogin.value;
};

const modalStore = useModalStore();

// 모달의 여,닫음 여부에 따른 login form으로 상태 초기화
watch(
  () => modalStore.modalState,
  (newState, oldState) => {
    if (newState === false) {
      isLogin.value = true;
    }
  }
);
</script>

<template>
  <DialogContainer width="42rem">
    <div class="login-container">
      <div class="login-image-container">
        <LoginImage />
        <p>환영합니다!</p>
      </div>
      <Transition name="form-slide" mode="out-in">
        <div
          class="form-wrapper"
          :key="isLogin ? 'login' : 'register'"
        >
          <Login v-if="isLogin" />
          <Signup v-else />
        </div>
      </Transition>
      <Transition name="fade-slide" mode="out-in">
        <p
          class="form-switching"
          :key="isLogin ? 'login' : 'register'"
        >
          <template v-if="isLogin">
            계정이 없으신가요?
            <span @click="toggleMode()">회원가입</span>
          </template>

          <template v-else>
            이미 계정이 있으신가요?
            <span @click="toggleMode()">로그인</span>
          </template>
        </p>
      </Transition>
    </div>
  </DialogContainer>
</template>

<style lang="scss">
.login-container {
  display: flex;
  height: 100%;
  .login-image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 35%;
    height: 100%;
    background-color: #f8f9fa;
    p {
      font-size: xx-large;
    }
  }
  .form-wrapper {
    width: 65%;
    .login-form-container {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 4rem 2rem;
      width: 100%;
      height: 100%;
      h3 {
        margin-bottom: 1.5rem;
      }
      h4 {
        color: #868e96;
        font-weight: 600;
      }
      .login-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .social-login-form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2.5rem;
        .social-login-buttons {
          align-self: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 80%;
        }
      }
    }
  }
  .form-switching {
    position: absolute;
    bottom: 2%;
    right: 2%;
    color: #12b886;
    span {
      cursor: pointer;
      font-weight: 700;
    }
  }

  // 폼 토글 애니메이션
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.15s ease;
  }

  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(6px);
  }

  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-6px);
  }

  // 폼 전환 애니메이션
  .form-slide-enter-active,
  .form-slide-leave-active {
    transition: all 0.35s ease;
  }

  .form-slide-enter-from {
    opacity: 0;
    transform: translateX(20px);
  }

  .form-slide-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }
}
</style>
