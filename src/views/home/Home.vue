<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import Evaluation from '@/views/evaluation/Evaluation.vue'
import { useCounterStore } from '@/stores/counter'

const useStore = useCounterStore()

const data = ref([])

const activeIndex = ref(0)

export interface food {
	name: string
	quality: number
	glycemicIndex: string
	level: number
	imgUrl: string
	content: string
	category_id: string
}

interface arrItem {
	text: string
	children: food[]
}

const dataFn = async () => {
	const res = await axios.get('http://zyxcl.xyz/exam_api/food')
	const arr: arrItem = []
	res.data.value.forEach((item: food) => {
		const child = []
		item.list.forEach((val: any, num: number) => {
			let bol = JSON.parse(<string>localStorage.getItem('data')).some(
				v => v.name === val.name,
			)
			const obj = { text: val.name, id: num, bol, ...val }
			child.push(obj)
		})
		arr.push({ text: item.name, children: [...child] })
	})
	console.log(arr)
	data.value = [...arr]
}
dataFn()

const choose = (item): void => {
	const index = useStore.chosen.findIndex(val => val.name === item.name)
	console.log(index)
	if (index >= 0) {
		item.bol = false
		useStore.del(index, item)
	} else {
		item.bol = true
		useStore.change(item)
	}
	localStorage.setItem('data', JSON.stringify(useStore.chosen))
}
</script>

<template>
	<div class="main">
		<van-tree-select v-model:main-active-index="activeIndex" :items="data">
			<template #content v-if="data.length > 0">
				<van-grid :border="false" :column-num="3">
					<van-grid-item
						v-for="(item, index) in data[activeIndex].children"
						:key="item.text"
						:class="{ chosed: item.bol }"
						@click="choose(item)">
						<van-image :src="item.imgUrl" />
						<p>{{ item.text }}</p>
					</van-grid-item>
				</van-grid>
			</template>
		</van-tree-select>
		<footer>
			<Evaluation v-show="useStore.chosen.length > 0" />
		</footer>
	</div>
</template>

<style scoped lang="scss">
.main {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	> div {
		flex-shrink: 0;
	}
}
.van-tree-select {
	flex: 1;
}
footer {
	flex-shrink: 0;
}
.van-grid-item {
	border: 0.1rem solid #ffffff;
}
.chosed {
	border: 0.1rem solid #ff0000 !important;
}
</style>
