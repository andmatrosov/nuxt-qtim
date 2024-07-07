<template>
	<div class="container" :class="{ 'container-fluid': fluid }">
		<slot/>
	</div>
</template>

<script setup>
	const { fluid } = defineProps({
		fluid: Boolean
	})
</script>

<style lang="scss" scoped>
	.container {
		$padding-x: 40px;
		width: 100%;
		padding-left: $padding-x;
		padding-right: $padding-x;
		max-width: calc(1216px + ($padding-x * 2));
		margin: 0 auto;

		&.container-fluid {
			max-width: calc(1380px + ($padding-x * 2));
		}
	}
</style>