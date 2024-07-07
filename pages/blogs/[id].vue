<template>
	<div v-if="loadStatus === 'loaded'">
		<div v-if="article" class="article">
			<h1 class="page-title">Product {{ article.title }}</h1>
			<div class="article-image">
				<img :src="article.image" :alt="article.title">
			</div>
			<div class="article-content">
			<span class="article-category">
				About
			</span>
				<p class="article-text">
					{{article.description}}
				</p>
			</div>
		</div>
		<div v-else class="article article--empty">
			<h1>Article not found 🙁️</h1>
			<UiButton @click="goBackHandler">Go Back</UiButton>
		</div>
	</div>

	<div class="loader" v-else>
		<h1>Loading...</h1>
	</div>

</template>

<script lang="ts" setup>
	import UiButton from "@/components/shared/UiButton.vue";
	import { useBlogsStore } from '~/stores/blogs';
	import {computed} from "vue";

	const store = useBlogsStore()

	const articleId = computed(() => {
		const idParam = useRoute().params.id
		return Array.isArray(idParam) ? String(idParam[0]) : String(idParam)
	})
	const article = computed(() => store.getArticleById(articleId.value))
	const loadStatus = computed(() => store.status)


	const goBackHandler = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>
	.article {
		padding: 119px 0 80px;
		&--empty {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			min-height: 60vh;
			h1 {
				font-size: 50px;
			}
		}

		.page-title {
			margin-bottom: 73px;
		}

		&-image {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			aspect-ratio: 9 / 5;
			overflow: hidden;
			margin-bottom: 80px;

			img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}

		&-category {
			display: inline-block;
			font-size: 16px;
			line-height: 1;
			margin-bottom: 32px;
		}

		&-text {
			width: 58%;
			font-size: 36px;
			line-height: 1.24;
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
</style>