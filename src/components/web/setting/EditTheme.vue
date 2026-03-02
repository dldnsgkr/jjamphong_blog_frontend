<script setup lang="ts">
import { useAuthStore } from '@stores/authStore';
import Dark from '../common/icon/Dark.vue';
import Light from '../common/icon/Light.vue';
import ListUi from './ListUi.vue';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { updateUser } from '@services/auth.service';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const currentTheme = computed(
  () => user.value?.theme ?? ''
);
console.log(currentTheme.value);

const onClickThemeBtn = (
  value: 'light' | 'dark' | 'system'
) => {
  updateUser({
    theme: value,
  });

  user.value.theme = value;
};
</script>

<template>
  <ListUi text="테마">
    <template #element1>
      <div class="theme-button-wrapper">
        <div
          class="theme-button"
          :class="{ active: currentTheme === 'light' }"
          @click="() => onClickThemeBtn('light')"
        >
          <Light />
        </div>
        <div
          class="theme-button dark"
          :class="{ active: currentTheme === 'dark' }"
          @click="() => onClickThemeBtn('dark')"
        >
          <Dark />
        </div>
        <div
          class="theme-button system"
          :class="{ active: currentTheme === 'system' }"
          @click="() => onClickThemeBtn('system')"
        >
          <div><Light /></div>
          <div class="dark"><Dark /></div>
        </div>
      </div>
    </template>
  </ListUi>
</template>

<style scoped lang="scss">
.theme-button-wrapper {
  display: flex;
  gap: 1rem;
  .theme-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 5rem;
    border: 1px solid #f1f3f5;
    cursor: pointer;
    &.active {
      border: 1px solid #12b886;
    }
    &.dark {
      background-color: black;
    }
    &.system {
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        &:nth-child(2) {
          background-color: black;
        }
      }
    }
  }
}
</style>
