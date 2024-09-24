<script setup lang="ts">
import iconSearch from '@assets/icon/icon-search.svg';
import iconClose from '@assets/icon/icon-close.svg';
type SearchBarPropsType = {
  activateBackground: boolean;
};

const props = defineProps<SearchBarPropsType>();
const emit = defineEmits();
const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div class="search-bar-wrapper">
    <div class="search-bar-aria">
      <img class="icon-search" :src="iconSearch" />
      <input placeholder="검색어를 입력해주세요." />
    </div>
    <img
      class="icon-close"
      :src="iconClose"
      @click="closeModal"
    />
  </div>
</template>

<style scoped lang="scss">
.search-bar-wrapper {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: end;
  .search-bar-aria {
    position: relative;
    width: 70%;
    height: 3.5rem;
    padding: 0.5rem;
    padding-left: 5rem;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #f3f3f3;
    .icon-search {
      position: absolute;
      left: 0.8rem;
      top: 19%;
      width: 3rem;
    }
    input {
      margin: 0;
      padding: 0;
      font-size: 200%;
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      &::placeholder {
        color: rgba(0, 0, 0, 0.2); /* 연한 검정색 */
        opacity: 1; /* 브라우저에 따라 opacity 조정 */
      }
    }
  }
  .icon-close {
    position: absolute;
    width: 4%;
    height: 4%;
    right: 6%;
    top: 38%;
  }
}
</style>
