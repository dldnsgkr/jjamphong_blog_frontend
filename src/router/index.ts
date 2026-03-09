import Alert from '@components/web/dialogView/Alert.vue';
import { useAuthStore } from '@stores/authStore';
import { useModalStore } from '@stores/modalStore';
import Home from '@views/Home.vue';
import ItemDetail from '@views/ItemDetail.vue';
import Setting from '@views/Setting.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        requiresAuth: false,
      },
    },
    { path: '/item/:itemId', component: ItemDetail },
    {
      path: '/userInfo',
      component: Setting,
      meta: {
        requiresAuth: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const { openModal } = useModalStore();

  const isLoggedIn = !!authStore.accessToken;

  // 로그인 필요한 페이지
  if (to.meta.requiresAuth && !isLoggedIn) {
    openModal(Alert);
    // return next('/');
  }

  // 특정 역할 필요한 페이지
  // if (to.meta.role && to.meta.role !== userRole) {
  //   return next('/403'); // 접근 거부 페이지
  // }

  next();
});

export default router;
