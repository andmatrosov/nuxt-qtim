<template>
	<header class="header" id="header">
			<UiContainer class="header-container" fluid>
				<NuxtLink to="/" class="header-logo">
					<UiLogo />
				</NuxtLink>

				<UiNavList :navList="HeaderMenu" size="medium"  />

				<button class="header-language">
					<UiIcon name="flagUK" />
				</button>

				<UiButton tag="button" @click="letsWorkHandler">Let's work</UiButton>
			</UiContainer>
	</header>
</template>

<script lang="ts" setup>
	import UiContainer from '@/components/shared/UiContainer.vue';
	import UiLogo from './shared/UiLogo.vue';
	import UiNavList from './shared/UiNavList.vue';
	import UiIcon from './shared/UiIcon.vue';
import UiButton from './shared/UiButton.vue';

	type NavItem = {
		name: string
		path: string
	}
	
	const HeaderMenu: NavItem[] = [
		{
			name: 'Works',
			path: '/'
		},
		{
			name: 'About',
			path: '/'
		}
	]

	const letsWorkHandler = () => {
		alert("Let's Work!")
	}

</script>

<style lang="scss" scoped>
	.header {
		padding: 35px 0;
		&-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&-logo {
			margin-right: auto;
		}

		&:deep(.nav) {
			margin-right: 74px;
		}

		&-language {
			width: 52px;
			height: 52px;
			padding: 12px;
			border: 2px solid #E5E5E5;
			border-radius: 50%;
			background-color: #fff;
			margin-right: 16px;
			cursor: pointer;
			transition: background-color .3s ease-in-out;
			&:hover {
				background-color: #E5E5E5;
			}
		}
	}
</style>