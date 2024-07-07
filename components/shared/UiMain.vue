<template>
	<main class="main">
		<UiContainer>
			<slot />
		</UiContainer>
	</main>
</template>

<script lang="ts" setup>
	import UiContainer from '@/components/shared/UiContainer.vue';
</script>

<style lang="scss" scoped>
	.main {
		flex-grow: 1;
	}
</style>