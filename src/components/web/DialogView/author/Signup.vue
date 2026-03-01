<script setup lang="ts">
import BasicInput from '@components/web/common/input/BasicInput.vue';
import BasicButton from '@components/web/common/button/BasicButton.vue';
import ErrorText from '@components/web/common/ErrorText.vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import {
  NicknameSchema,
  SignupSchema,
  type NicknameSchemaType,
  type SignupSchemaType,
} from '@schema/Auth.schema';
import { reactive } from 'vue';
import PopupComponent from '@components/universal/PopupComponent.vue';
import type {
  PopupFunc,
  PopupProps,
} from 'types/common/popup.types';
import { signup } from '@services/auth.service';
import { successToast } from '@utils/toast';

const props = defineProps<{
  toggleMode: () => void;
}>();

// popup 컨트롤 용 ref
const popupRef: PopupProps & PopupFunc = reactive({
  modelValue: false,
  type: 'modal',
});

// 회원가입 값
const initialValues: SignupSchemaType = {
  mode: 'signup',
  provider_id: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// 회원가입 form
const { values, errors, handleSubmit, defineField } =
  useForm({
    validationSchema: toTypedSchema(SignupSchema),
    initialValues,
  });

// 회원가입 value 접근용 field
const [provider_id, provider_idAttrs] =
  defineField('provider_id');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [confirmPassword, confirmPasswordAttrs] = defineField(
  'confirmPassword'
);

// 회원가입 요청 func
const onSubmitSignup = handleSubmit(async (values) => {
  try {
    const { mode, ...obj } = values;
    // 회원가입 요청
    const response = await signup(obj);

    // 성공시 nickname 등록 단계로 이동
    if (response.code === 201) {
      successToast({
        message:
          '회원가입에 성공했습니다!\n(닉네임은 내 프로필로 가셔서 수정 가능합니다)',
      });
      props.toggleMode();
    }
  } catch (error: any) {
    popupRef.type = 'alert';
    popupRef.modelValue = true;
    popupRef.message = error.message;
  }
});
</script>

<template>
  <Transition name="form-slide" mode="out-in">
    <form
      key="signup"
      @submit="onSubmitSignup"
      class="login-form-container"
    >
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
          autocomplete="email"
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
          autocomplete="new-password"
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
          autocomplete="new-password"
        />
        <ErrorText :text="errors.confirmPassword" />
      </div>

      <BasicButton
        type="submit"
        text="회원가입"
        button-style="grassButton"
      />
    </form>
  </Transition>

  <PopupComponent
    v-model="popupRef.modelValue"
    :type="popupRef.type"
    :message="popupRef.message"
    @confirm="popupRef.onConfirm"
    :confirm-text="popupRef.confirmText"
  ></PopupComponent>
</template>
