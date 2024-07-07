<template>
	<nav class="nav">
		<ul class="nav-list" >
			<li v-for="navItem in navList" class="nav-item" :key="navItem.name">
				<a v-if="navItem.path.startsWith('https:')" :href="navItem.path" :class="['nav-link', `nav-link--${size}`, decorated ? 'decorated' : '' ]" target="_blank">{{ navItem.name }}</a>
				<NuxtLink v-else :to="navItem.path" :class="['nav-link', `nav-link--${size}`, decorated ? 'decorated' : '' ]">{{ navItem.name }}</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup>

type NavItem = {
	name: string
	path: string
}

const { navList, decorated } = defineProps({
	navList: {
		type: Array as () => NavItem[],
		required: true
	},
	decorated: {
		type: Boolean,
		default: false
	},
	size: {
		type: String as () => 'small' | 'medium' | 'large',
		default: 'small'
	}
})
</script>

<style lang="scss" scoped>
	.nav {
		&-list {
			display: flex;
			gap: 30px;
			list-style: none;
			margin: 0;
			padding: 0;
		}

		&-link {
			$padding-x: 14px;
			display: inline-block;
			padding: 0 $padding-x;
			color: inherit;
			text-decoration: none;
			transition: color .3s ease-in-out;
			&:hover {
				color: #7841A6;
			}

			&--small {
				font-size: 16px;
			}

			&--medium {
				font-size: 20px;
			}

			&.decorated {
				position: relative;
				&::after {
					content: "";
					position: absolute;
					bottom:0;
					left: $padding-x;
					width: calc(100% - $padding-x * 2);
					height: 1px;
					background-color: #010101;

				}
			}
		}
	}
</style>