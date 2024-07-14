<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import type { food } from '@/views/home/Home.vue'

const useStore = useCounterStore()

const del = (index: number, item: food): void => {
	useStore.del(index, item)
}
</script>

<template>
	<!--	<van-floating-panel :content-draggable="false">-->
	<div class="container">
		<h1>
			<i>已选食物({{ useStore.chosen.length }})</i>
			<van-button type="default" to="/test">去测评</van-button>
		</h1>
		<van-grid :border="false" :column-num="3">
			<van-grid-item v-for="(item, index) in useStore.chosen" :key="item.name">
				<p>{{ item.name }}</p>
				<span @click="del(index, item)">x</span>
			</van-grid-item>
		</van-grid>
	</div>
	<!--	</van-floating-panel>-->
</template>

<style scoped lang="scss">
.container {
	width: 100%;
}
h1 {
	display: flex;
	justify-content: space-between;
}
p {
	position: relative;
}
span {
	position: absolute;
	right: 0;
	top: 0;
}
</style>
