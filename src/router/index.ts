import Home from '@views/Home.vue';
import ItemDetail from '@views/ItemDetail.vue';
import UserInfo from '@views/UserInfo.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/item/:itemId', component: ItemDetail },
    { path: '/userInfo', component: UserInfo },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
