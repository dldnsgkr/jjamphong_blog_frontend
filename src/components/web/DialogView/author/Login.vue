<script setup lang="ts">
import BasicButton from '@components/web/common/button/BasicButton.vue';
import DialogContainer from '@components/web/common/container/DialogContainer.vue';
import BasicInput from '@components/web/common/input/BasicInput.vue';
import LoginImage from './LoginImage.vue';
import Github from '@components/web/common/icon/Github.vue';
import Facebook from '@components/web/common/icon/Facebook.vue';
import Google from '@components/web/common/icon/Google.vue';
import { getRequest } from '@utils/httpsClient';

const testApi = () => {
  getRequest('users/12');
};
</script>

<template>
  <DialogContainer width="42rem" height="38rem">
    <div class="login-container">
      <div class="login-image-container">
        <LoginImage />
        <p>환영합니다!</p>
      </div>
      <div class="login-form-container">
        <h3>로그인</h3>
        <div class="login-form">
          <h4>ID or Email</h4>
          <BasicInput
            input-style="login-input"
            placeholder="Login"
          />
        </div>
        <div class="login-form">
          <h4>Password</h4>
          <BasicInput
            type="password"
            input-style="login-input"
            placeholder="Password"
          />
        </div>
        <BasicButton
          text="로그인"
          button-style="grassButton"
          :click-event="() => testApi()"
        />
        <div class="social-login-form">
          <h4>소셜 계정으로 로그인</h4>
          <div class="social-login-buttons">
            <Github />
            <Google />
            <Facebook fill-color="rgb(59, 89, 152)" />
          </div>
        </div>
      </div>
      <p class="form-switching">
        aldjhskfa;slfja;sldflad;sfjasdl;fjalsd;
      </p>
    </div>
  </DialogContainer>
</template>

<style scoped lang="scss">
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
  .login-form-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 4rem 2rem;
    width: 65%;
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
      margin-bottom: 2.5rem;
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
  .form-switching {
    position: absolute;
    bottom: 2%;
    right: 2%;
    color: #12b886;
  }
}
</style>
