<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import type { food } from '@/views/home/Home.vue'

const useStore = useCounterStore()
const router = useRouter()

const active = ref(0)
const data = ref([
	{
		tit: '放心食用',
		data: [],
	},
	{
		tit: '适量食用',
		data: [],
	},
	{
		tit: '建议少吃',
		data: [],
	},
])

useStore.chosen.forEach((item: food) => {
	if (item.glycemicIndex < 40) {
		data.value[0].data.push(item)
	} else if (item.glycemicIndex > 40 && item.glycemicIndex < 70) {
		data.value[1].data.push(item)
	} else {
		data.value[2].data.push(item)
	}
	console.log(data.value, active.value)
})
</script>

<template>
	<van-tabs v-model:active="active">
		<van-tab v-for="item in data" :title="item.tit">
			<van-card
				v-for="val in item.data"
				:key="val.name"
				:desc="val.content"
				:title="val.name"
				:thumb="val.imgUrl"
				@click="
					router.push({
						path: '/detail',
						query: val,
					})
				" />
		</van-tab>
	</van-tabs>
</template>

<style scoped lang="scss"></style>
