<script setup lang="ts">
import BasicButton from '@components/web/common/button/BasicButton.vue';
import BasicInput from '@components/web/common/input/BasicInput.vue';
import WritterImage from '@components/web/common/ui/WritterImage.vue';
import { reactive } from 'vue';

const editState = reactive({
  name: false,
});

const handleNameEdit = () => {
  editState.name = false;
};
</script>

<template>
  <main class="setting-container">
    <section class="userInfo-container">
      <div class="userInfo-image">
        <WritterImage style-class="settingImage" />
        <BasicButton
          button-round="round-sm"
          text="이미지 업로드"
          animationtype="bright"
        />
        <BasicButton
          button-style="transparent"
          button-round="round-sm"
          text="이미지 제거"
          animationtype="darken-transparent"
        />
      </div>
      <div class="userInfo-edit-form">
        <div
          v-if="editState.name === false"
          class="userInfo-info"
        >
          <h3>이운학</h3>
          <p>Programmer</p>
          <p
            class="switching-text bright"
            @click="editState.name = true"
          >
            수정
          </p>
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
  </main>
</template>

<style scoped lang="scss">
.setting-container {
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  .userInfo-container {
    display: flex;
    width: 768px;
    padding-top: 1.5rem;
    // background-color: red;
    .userInfo-image {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
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
}
</style>
