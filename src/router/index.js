import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/HomeView.vue'),
		},
		{
			path: '/cart',
			name: 'Cart',
			component: () => import('../views/CartDemo.vue'),
		},
		{
			path: '/todo',
			name: 'Todo',
			component: () => import('../views/TodoDemo.vue'),
		},
	],
})

export default router
