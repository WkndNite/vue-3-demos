import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/cart',
			name: 'Cart',
			component: () => import('../views/CartDemo.vue'),
		},
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/HomeView.vue'),
		},
	],
})

export default router
