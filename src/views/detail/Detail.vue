<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.query)
</script>

<template>
	<div>{{ route.query }}</div>
</template>

<style scoped lang="scss"></style>
