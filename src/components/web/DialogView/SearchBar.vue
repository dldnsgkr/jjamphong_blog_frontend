<script setup lang="ts">
import iconSearch from '@assets/icon/icon-search.svg';
import BlogItemBoxSkeleton from '../common/skeleton/BlogItemBoxSkeleton.vue';
import CloseX from '../common/icon/CloseX.vue';
type SearchBarPropsType = {
  activateBackground: boolean;
};

const { activateBackground } =
  defineProps<SearchBarPropsType>();
const emit = defineEmits();
const closeModal = () => {
  emit('close');
};
</script>

<template>
  <div class="search-wrapper">
    <div class="search-bar-wrapper">
      <div class="search-bar-aria">
        <img class="icon-search" :src="iconSearch" />
        <input placeholder="검색어를 입력해주세요." />
      </div>
      <CloseX class="icon-close" @click="closeModal" />
    </div>
    <div class="search-list-wrapper">
      <div class="search-list-sort">
        <BlogItemBoxSkeleton />
        <BlogItemBoxSkeleton />
        <BlogItemBoxSkeleton />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-wrapper {
  width: 100%;
}
.search-bar-wrapper {
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: end;
  .search-bar-aria {
    position: relative;
    width: 79.2%;
    height: 5rem;
    padding: 0.5rem;
    padding-left: 5rem;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #f3f3f3;
    box-sizing: border-box;
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
    width: 3rem;
    height: 3rem;
    right: 4.5rem;
    bottom: 3.5rem;
    cursor: pointer;
  }
}
.search-list-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  .search-list-sort {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    width: 79.2%;
  }
}
</style>
