import Home from '@views/Home.vue';
import ItemDetail from '@views/ItemDetail.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/item/:itemId', component: ItemDetail },
  ],
});

export default router;
