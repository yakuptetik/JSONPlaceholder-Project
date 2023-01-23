import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
		path: '/',
		name: 'Home',
		component: () => import('../views/HomeView.vue'),
	},
	{
		path: '/post/:id',
		name: 'Post',
		component: () => import('../views/PostDetailsPage.vue'),
	},

];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
