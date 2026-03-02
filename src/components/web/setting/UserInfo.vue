<script setup lang="ts">
import BasicButton from '@components/web/common/button/BasicButton.vue';
import BasicInput from '@components/web/common/input/BasicInput.vue';
import FileInput from '@components/web/common/input/FileInput.vue';
import WritterImage from '@components/web/common/ui/WritterImage.vue';
import { updateUser } from '@services/auth.service';
import { useAuthStore } from '@stores/authStore';
import { getRequest } from '@utils/httpsClient';
import { promiseToast } from '@utils/toast';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';

//
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

// 수정 활성화 여부
const nameEdit = ref(false);

const editNickname = ref('');
const editExplain = ref('');

const startEdit = () => {
  editNickname.value = user.value.nickname;
  editExplain.value = user.value.user_explain ?? '';
  nameEdit.value = true;
};

const handleNameEdit = () => {
  user.value.nickname = editNickname.value;
  user.value.user_explain = editExplain.value;

  nameEdit.value = false;
  updateUser({
    nickname: editNickname.value,
    userExplain: editExplain.value,
  });
  // promiseToast({
  //   promise: new Promise<ResponseType<unknown>>(
  //     (resolve) => {
  //       setTimeout(async () => {
  //         const result = await getRequest('users/12');
  //         resolve(result);
  //         editState.name = false;
  //       }, 3000);
  //     }
  //   ),
  // });
  // promiseToast({ promise: getRequest('users/12') });
};

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;
  console.log(files);
  if (files && files.length > 0) {
    console.log('Selected file:', files[0]);
    input.value = '';
  }
};

const handleImageDelete = () => {
  promiseToast({ promise: getRequest('users/12') });
};

watch(
  user,
  (newUser) => {
    if (newUser) {
      editNickname.value = newUser.nickname;
      editExplain.value = newUser.user_explain;
    }
  },
  { immediate: true }
);
</script>

<template>
  <section class="userInfo-container">
    <div class="userInfo-image">
      <WritterImage style-class="settingImage" />
      <FileInput :change-event="handleImageUpload" />
      <BasicButton
        button-style="transparent"
        button-round="round-sm"
        text="이미지 제거"
        animationtype="darken-transparent"
        :click-event="handleImageDelete"
      />
    </div>
    <div class="userInfo-edit-form">
      <div v-if="nameEdit === false" class="userInfo-info">
        <h3>{{ user.nickname }}</h3>
        <p>{{ user.user_explain }}</p>
        <span
          class="switching-text bright"
          style="align-self: flex-start"
          @click="nameEdit = true"
        >
          수정
        </span>
      </div>
      <div v-else class="userInfo-edit">
        <BasicInput
          v-model="editNickname"
          placeholder="닉네임을 입력해주세요."
        />
        <BasicInput
          v-model="editExplain"
          placeholder="자기를 소개하는 글을 작성을 작성해주세요.(100자 이내)"
        />
        <BasicButton
          width="5rem"
          button-round="round-sm"
          text="저장"
          :click-event="handleNameEdit"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.userInfo-container {
  display: flex;
  width: 100%;
  padding-top: 1.5rem;
  // background-color: red;
  .userInfo-image {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 1.5rem;
  }
  .userInfo-edit-form {
    flex-grow: 1;
    border-left: 1px solid #f1f3f5;
    padding-left: 1.5rem;
    .userInfo-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      h3 {
        font-size: 2.5rem;
      }
      p {
        color: #868e96;
      }
    }
    .userInfo-edit {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      > :nth-child(3) {
        align-self: flex-end;
      }
    }
  }
}
</style>
