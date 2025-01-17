<script setup lang="ts">
import BasicButton from '@components/web/common/button/BasicButton.vue';
import BasicInput from '@components/web/common/input/BasicInput.vue';
import FileInput from '@components/web/common/input/FileInput.vue';
import WritterImage from '@components/web/common/ui/WritterImage.vue';
import { getRequest } from '@utils/httpsClient';
import { promiseToast } from '@utils/toast';
import { ref } from 'vue';

const idNameEdit = ref(false);

const handleNameEdit = () => {
  idNameEdit.value = false;
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
  promiseToast({ promise: getRequest('users/12') });
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
      <div
        v-if="idNameEdit === false"
        class="userInfo-info"
      >
        <h3>이운학</h3>
        <p>Programmer</p>
        <span
          class="switching-text bright"
          style="align-self: flex-start"
          @click="idNameEdit = true"
        >
          수정
        </span>
      </div>
      <div v-else class="userInfo-edit">
        <BasicInput />
        <BasicInput />
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
  width: 768px;
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
