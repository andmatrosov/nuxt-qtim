<template>
	<div class="articles">
		<h1 class="page-title">Articles</h1>
		<div v-if="loadStatus === 'loaded'" class="articles-list">
			<div v-for="article in paginatedArticles" :key="article.title">
				<div class="card">
					<div class="card-content">
						<div class="card-picture">
							<img :src="article.image" :alt="article.title">
						</div>
						<p class="card-text">
							{{ article.preview }}
						</p>
						<div class="card-bottom">
							<NuxtLink class="card-link" :to="'/blogs/'+ article.id">Read more</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="loader" v-else>
			<h1>Loading...</h1>
		</div>
		<UiPagination v-if="loadStatus === 'loaded'"/>
	</div>
</template>

<script lang="ts" setup>
import { useBlogsStore } from '~/stores/blogs'
import { onMounted, computed } from 'vue'
import UiPagination from "~/components/shared/UiPagination.vue";

const store = useBlogsStore()
const loadStatus = computed(() => store.status)
const paginatedArticles = computed(() => store.paginatedArticles)

</script>

<style lang="scss" scoped>
	.articles {
		padding-bottom: 140px;
		&-list {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(200px, 280px));
			grid-gap: 32px;
			margin-bottom: 50px;
		}

		.page-title {
			margin-bottom: 39px;
		}
	}

	.loader {
		height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;

		h1 {
			font-size: 60px;
			color: transparent;
			background-image: linear-gradient(90deg, #000 30%, rgba(255, 255, 255, .2) 50%, #000 70% );
			-webkit-background-clip: text;
			background-clip: text;
			background-size: 300px 300px;
			background-position: 0 0;
			animation: wave 3.5s linear infinite;
		}
	}


	@keyframes wave {
		from {
			background-position-x: -150px;
		}
		to {
			background-position-x: 450px;
		}
	}

	.card{
		$card: &;
		position: relative;
		bottom: 0;
		height: 378px;

		&-content {
			position: absolute;
			width: 100%;
			left: 0;
			bottom: 0;
		}
		&-picture {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 280px;
			height: 280px;
			overflow: hidden;
			margin-bottom: 24px;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		&-text {
			display: -webkit-box;
			font-size: 20px;
			line-height: 1.2;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			max-height: 2lh;
			overflow: hidden;
			margin-bottom: 12px;
		}

		&-bottom {
			max-height: 0;
			overflow: hidden;
			transition: max-height .4s ease;
		}

		&:hover {
			#{$card}-bottom {
				max-height: 99px;
			}
		}

		&-link {
			font-size: 20px;
			color: #E2BEFF;
			text-decoration: none;
		}
	}
</style>