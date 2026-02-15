<script setup lang="ts">
import BasicInput from '@components/web/common/input/BasicInput.vue';
import BasicButton from '@components/web/common/button/BasicButton.vue';
import ErrorText from '@components/web/common/ErrorText.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import {
  LoginSchema,
  type LoginSchemaType,
} from '@schema/Auth.schema';
import Github from '@components/web/common/icon/Github.vue';
import Google from '@components/web/common/icon/Google.vue';
import Facebook from '@components/web/common/icon/Facebook.vue';
import { login } from '@services/auth.service';
import { useAuthStore } from '@stores/authStore';
import { successToast } from '@utils/toast';
import { errorToastFunc } from '@utils/httpsClient';
import { useModalStore } from '@stores/modalStore';

const initialValues: LoginSchemaType = {
  mode: 'login',
  provider_id: '',
  password: '',
};

const authStore = useAuthStore();

const modalStore = useModalStore();

const { values, errors, handleSubmit, defineField } =
  useForm({
    validationSchema: toTypedSchema(LoginSchema),
    initialValues,
  });

const [provider_id, provider_idAttrs] =
  defineField('provider_id');
const [password, passwordAttrs] = defineField('password');

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await login({
      provider_id: values.provider_id,
      password: values.password,
    });

    // accessToken 전역 변수에 저장
    authStore.setAccessToken(
      response.contents?.accessToken
    );

    // user 정보저장
    authStore.setUpUserInfo();

    // 로그인, 회원가인 modal 닫기
    modalStore.handleModalState();

    // 성공 toast
    successToast({ message: response.message });
  } catch (error) {
    errorToastFunc(error);
  }
});
</script>

<template>
  <form @submit="onSubmit" class="login-form-container">
    <h3>로그인</h3>
    <div class="login-form">
      <h4>ID</h4>
      <BasicInput
        input-style="login-input"
        v-model="provider_id"
        placeholder="Login"
        autocomplete="username"
      />
      <ErrorText :text="errors.provider_id" />
    </div>

    <div class="login-form">
      <h4>Password</h4>
      <BasicInput
        input-style="login-input"
        type="password"
        v-model="password"
        placeholder="Password"
        autocomplete="current-password"
      />
      <ErrorText :text="errors.password" />
    </div>

    <BasicButton
      type="submit"
      text="로그인"
      button-style="grassButton"
    />
    <div class="social-login-form">
      <h4>소셜 계정으로 로그인</h4>
      <div class="social-login-buttons">
        <Github />
        <Google />
        <Facebook fill-color="rgb(59, 89, 152)" />
      </div>
    </div>
  </form>
</template>
