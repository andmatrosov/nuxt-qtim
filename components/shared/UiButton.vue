<template>
	<button class="button" >
		<slot />
	</button>

</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
	.button {
		padding: 16px 32px;
		border-radius: 40px;
		font-size: 20px;
		color: #fff;
		background-color: #101010;
		border: none;
		cursor: pointer;
		transition: background-color .3s ease-in-out;
		&:hover {
			background-color: #2a2a2a;
		}
	}
</style>