<script setup lang="ts">
import Bell from '@components/web/common/icon/Bell.vue';
import Search from '@components/web/common/icon/Search.vue';
import {
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue';
import SearchBar from './dialogView/SearchBar.vue';
import { useRoute, useRouter } from 'vue-router';
import BasicButton from './common/button/BasicButton.vue';
import { useModalStore } from '@stores/modalStore';
import AuthDialog from './dialogView/author/AuthDialog.vue';
import { useAuthStore } from '@stores/authStore';
import { storeToRefs } from 'pinia';

// vue router 조정 hook
const route = useRoute();
const router = useRouter();

// login modal hook
const { openModal } = useModalStore();

// 로그인 한 유저 정보 hook
const authStore = useAuthStore();
const { user, isLoggedIn } = storeToRefs(authStore);

/** header UI 상태 조건 */
const isSpecificRoute = ref(route.path === '/');

// 로그인 시 보여지는 내 정보 select box 활성화 ref
const isOpenSelectBox = ref(false);
const selectBoxRef = ref<HTMLElement | null>(null);

const handleMenuClick = (callback?: () => void) => {
  isOpenSelectBox.value = false;

  if (callback) {
    callback();
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    isOpenSelectBox.value &&
    selectBoxRef.value &&
    !selectBoxRef.value.contains(event.target as Node)
  ) {
    isOpenSelectBox.value = false;
  }
};

/**
 * search modal 활성화 function
 */
function openSearchModal() {
  openModal(SearchBar);
}

/**
 * main page로 이동
 */
function openAuthModal() {
  openModal(AuthDialog);
}

/**
 * header UI 상태 변경 watcher
 */
watch(
  () => route.path,
  (newPath) => {
    isSpecificRoute.value = newPath === '/';
  }
);

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header class="client-header">
    <div class="basic-header-wrapper">
      <div
        v-if="isSpecificRoute"
        class="logo"
        @click="router.push({ path: '/' })"
      >
        Eclectic Explorations
      </div>
      <div v-else class="logo">사용자임</div>
      <div class="function-wrapper">
        <Search @click="openSearchModal" />
        <Bell />
        <BasicButton
          v-if="!isLoggedIn"
          type="button"
          text="로그인"
          button-style="basicButton"
          :click-event="() => openAuthModal()"
        />

        <div v-else class="user-info">
          <button
            class="user-info-btn"
            @click.stop="isOpenSelectBox = !isOpenSelectBox"
          >
            <div class="img-wp">
              <img
                v-if="user?.profile_image_url"
                :src="user.profile_image_url"
              />
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </button>

          <div
            v-if="isOpenSelectBox"
            class="user-selectbox"
            ref="selectBoxRef"
          >
            <ul>
              <li>내 블로그</li>
              <li>임시 글</li>
              <li>읽기 목록</li>
              <li
                @click="
                  handleMenuClick(() =>
                    router.push({ path: '/userinfo' })
                  )
                "
              >
                설정
              </li>
              <li>로그아웃</li>
            </ul>
          </div>
        </div>
        <!-- <BasicButton text="팔로우" /> -->
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.client-header {
  display: flex;
  flex-direction: column;
  padding: 0 8%;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  .basic-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      padding: 2.4rem 0;
      font-size: 1.5rem;
      cursor: pointer;
    }
    .function-wrapper {
      display: flex;
      align-items: center;
      padding: 2.4rem 0;
      gap: 1.2rem;
      .user-info {
        position: relative;
        .user-info-btn {
          display: flex;
          align-items: center;
          background-color: transparent;
          border: none;
          cursor: pointer;
          .img-wp {
            height: 2.5rem;
            width: 2.5rem;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.085);
            border-radius: 50%;
            overflow: hidden;
            transition: all 0.125s ease-in;
            .img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            }
          }
          svg {
            font-size: 1.5rem;
            margin-left: 0.25rem;
            color: #868e96;
            margin-right: -0.4375rem;
            transition: all 0.125s ease-in;
          }

          &:hover {
            .img-wp {
              box-shadow: 0 0 12px rgba(0, 0, 0, 0.18);
            }

            svg {
              color: #212529;
            }
          }
        }

        .user-selectbox {
          position: absolute;
          right: 0;
          z-index: 2;
          margin-top: 1rem;
          background-color: #fff;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
          ul {
            width: 12rem;
            li {
              color: #212529;
              padding: 0.75rem 1rem;
              line-height: 1.5;
              font-weight: 500;
              cursor: pointer;

              &:hover {
                color: #20c997;
                background-color: #f8f9fa;
              }
            }
          }
        }
      }
    }
  }
  .filter-header-wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>
