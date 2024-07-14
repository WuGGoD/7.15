import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Test from '@/views/test/Test.vue'
import Detail from '@/views/detail/Detail.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/test',
			name: 'test',
			component: Test,
		},
		{
			path: '/detail',
			name: 'detail',
			component: Detail,
		},
	],
})

export default router
