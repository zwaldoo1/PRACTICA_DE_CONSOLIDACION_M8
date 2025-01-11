import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Guides from '../pages/Guides.vue';
import Resorts from '../pages/Resorts.vue';
import Resort from '../pages/Resort.vue';
import Booking from '../pages/Booking.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/guides', name: 'Guides', component: Guides },
  { path: '/resorts', name: 'Resorts', component: Resorts },
  { path: '/resort/:id', name: 'Resort', component: Resort },
  { path: '/booking', name: 'Booking', component: Booking },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../pages/NotFound.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;