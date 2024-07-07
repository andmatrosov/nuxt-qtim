<template>
	<NuxtLayout>
		<div class="error-page">
			<h1>{{error.statusCode}}</h1>
			<h3>Oh, no!</h3>
			<p>{{ error.message }}</p>
		</div>
	</NuxtLayout>
</template>

<script setup>
	definePageMeta({
		layout: "default"
	})
	defineProps(['error'])
</script>

<style lang="scss" scoped>
	.error-page {
		height: 60vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h1 {
			margin: 0;
			line-height: 1;
			font-size: 120px;
		}
		h3 {
			margin: 0 0 20px;
			font-size: 40px;

		}
		p {
			font-size: 20px;
		}
	}
</style>