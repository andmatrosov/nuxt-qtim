<template>
	<nav class="pagination">
		<button
				v-if="currentPage !== 1"
				class="pagination__button pagination__button--prev"
				@click="prevPage"
				:disabled="currentPage === 1">
			<UiIcon name="chevron"/>
		</button>
		<button
				v-for="page in pages"
				:key="page"
				class="pagination__button"
				:class="{ 'pagination__button--active': page === currentPage }"
				@click="changePage(page)">
			{{ page }}
		</button>
		<button
				v-if="currentPage !== totalPages"
				class="pagination__button pagination__button--next"
				@click="nextPage"
				:disabled="currentPage === totalPages">
			<UiIcon name="chevron"/>
		</button>
	</nav>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useBlogsStore } from '~/stores/blogs'
import UiIcon from "~/components/shared/UiIcon.vue";

const store = useBlogsStore()

const currentPage = computed(() => store.currentPage)
const totalPages = computed(() => store.totalPages)

const pages = computed(() => {
	const range = []
	const total = totalPages.value
	const current = currentPage.value

	if (total <= 5) {
		for (let i = 1; i <= total; i++) {
			range.push(i)
		}
	} else if (current <= 3) {
		range.push(1, 2, 3, 4, 5)
	} else if (current >= total - 2) {
		for (let i = total - 4; i <= total; i++) {
			range.push(i)
		}
	} else {
		range.push(current - 2, current - 1, current, current + 1, current + 2)
	}

	return range
})

const prevPage = () => {
	if (currentPage.value > 1) {
		store.currentPage -= 1
	}
}

const nextPage = () => {
	if (currentPage.value < totalPages.value) {
		store.currentPage += 1
	}
}

const changePage = (page: number) => {
	store.currentPage = page
}
</script>

<style lang="scss" scoped>
.pagination {
	display: flex;
	gap: 8px;
}

.pagination__button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 44px;
	height: 44px;
	border: 1px solid #ccc;
	background: #f5f5f5;
	cursor: pointer;
	transition: background 0.3s;
	border-radius: 12px;
	font-size: 16px;
	line-height: .5;

	&--prev:deep(svg) {
		transform: rotate(180deg);
	}
}

.pagination__button--active {
	background: #000;
	color: #fff;
}

.pagination__button:disabled {
	cursor: not-allowed;
	opacity: 0.5;
}

.pagination__button:hover:not(:disabled) {
	background: #ddd;
}
</style>