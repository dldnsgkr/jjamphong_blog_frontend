<script setup lang="ts">
import BasicInput from '@components/web/common/input/BasicInput.vue';
import BasicButton from '@components/web/common/button/BasicButton.vue';
import ErrorText from '@components/web/common/ErrorText.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import {
  SignupSchema,
  type SignupType,
} from '@schema/Login.schema';
import { postRequest } from '@utils/httpsClient';
import { ref } from 'vue';

// 로그인/회원가입 모드 상태
const step = ref(1);

// 로그인/회원가입 모드 토글
const nextStep = () => {
  step.value = step.value + 1;
};

const initialValues: SignupType = {
  mode: 'signup',
  provider_id: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const { values, errors, handleSubmit, defineField } =
  useForm({
    validationSchema: toTypedSchema(SignupSchema),
    initialValues,
  });

const [provider_id, provider_idAttrs] =
  defineField('provider_id');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [confirmPassword, confirmPasswordAttrs] = defineField(
  'confirmPassword'
);

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await postRequest('auth/signup', {
      provider_id: values.provider_id,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
    console.log(response);

    if (response.code === 201) {
      nextStep();
    }
  } catch (error) {
    console.error('Signup failed:', error);
  }
});
</script>

<template>
  <Transition name="form-slide" mode="out-in">
    <template v-if="step === 1">
      <form @submit="onSubmit" class="login-form-container">
        <h3>회원가입</h3>

        <div class="login-form">
          <h4>ID</h4>
          <BasicInput
            input-style="login-input"
            v-model="provider_id"
            placeholder="ID"
          />
          <ErrorText :text="errors.provider_id" />
        </div>

        <div class="login-form">
          <h4>Email</h4>
          <BasicInput
            input-style="login-input"
            v-model="email"
            placeholder="Email"
          />
          <ErrorText :text="errors.email" />
        </div>

        <div class="login-form">
          <h4>Password</h4>
          <BasicInput
            input-style="login-input"
            type="password"
            v-model="password"
            placeholder="Password"
          />
          <ErrorText :text="errors.password" />
        </div>

        <div class="login-form">
          <h4>Password 확인</h4>
          <BasicInput
            input-style="login-input"
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm Password"
          />
          <ErrorText :text="errors.confirmPassword" />
        </div>

        <BasicButton
          type="submit"
          text="회원가입"
          button-style="grassButton"
        />
      </form>
    </template>
    <template v-else>
      <form></form>
    </template>
  </Transition>
</template>
