import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { food } from '@/views/home/Home.vue'

export const useCounterStore = defineStore('counter', () => {
	const chosen = ref(
		localStorage.getItem('data')
			? JSON.parse(<string>localStorage.getItem('data'))
			: [],
	)
	const change = (item: food): void => {
		chosen.value.push(item)
	}
	const del = (index: number, item: food): void => {
		console.log(item)
		chosen.value.splice(index, 1)
	}

	return {
		chosen,
		change,
		del,
	}
})
