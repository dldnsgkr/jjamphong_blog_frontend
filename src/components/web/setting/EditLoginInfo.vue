<script setup lang="ts">
import { ref, watch } from 'vue';
import ListUi from './ListUi.vue';
import BasicInput from '../common/input/BasicInput.vue';
import BasicButton from '../common/button/BasicButton.vue';
import { useAuthStore } from '@stores/authStore';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { UpdateLoginInfoSchema } from '@schema/Auth.schema';
import ErrorText from '../common/ErrorText.vue';
import { updateUser } from '@services/auth.service';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const loginEdit = ref(false);

const { handleSubmit, errors, defineField } = useForm({
  validationSchema: toTypedSchema(UpdateLoginInfoSchema),
  initialValues: {
    provider_id: user.value.provider_id,
    password: '',
    passwordChk: '',
  },
});

const [provider_id, provider_idAttrs] =
  defineField('provider_id');
const [password, passwordAttrs] = defineField('password');
const [passwordChk, passwordChkAttrs] =
  defineField('passwordChk');

const handleLoginInfoEdit = handleSubmit(async (values) => {
  updateUser({
    provider_id: values.provider_id,
    ...(values.password && { password: values.password }),
  });

  loginEdit.value = false;
});

watch(
  user,
  (newUser) => {
    if (newUser) {
      const userObj = user.value;

      provider_id.value = userObj.provider_id;
    }
  },
  { immediate: true }
);
</script>

<template>
  <ListUi
    text="로그인 정보"
    description="로그인 시 입력할 정보 입니다."
  >
    <template #element1>
      <span
        v-if="loginEdit === false"
        class="switching-text bright"
        style="align-self: flex-start"
        @click="loginEdit = true"
      >
        수정
      </span>
      <form
        v-else
        @submit="handleLoginInfoEdit"
        class="input-wrapper"
      >
        <BasicInput
          v-model="provider_id"
          placeholder="아이디를 입력하세요."
        />
        <ErrorText :text="errors.provider_id" />
        <BasicInput
          v-model="password"
          placeholder="변경하실 패스워드를 입력하세요."
        />
        <ErrorText :text="errors.password" />
        <BasicInput
          v-model="passwordChk"
          placeholder="변경하실 패스워드 확인해주세요."
        />
        <ErrorText :text="errors.passwordChk" />
        <div style="margin-top: 1rem; align-self: end">
          <BasicButton
            type="submit"
            text="변경"
            button-round="round-sm"
          />
        </div>
      </form>
    </template>
  </ListUi>
</template>

<style scoped lang="scss">
p {
  color: #495057;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
