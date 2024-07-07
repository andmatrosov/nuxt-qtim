<template>
	<div>
		<UiHeader />
		<UiMain >
			<slot/>
		</UiMain>
		<UiFooter />
	</div>
</template>

<script lang="ts" setup>
import UiHeader from '@/components/UiHeader.vue';
import UiMain from '@/components/shared/UiMain.vue';
import UiFooter from '@/components/UiFooter.vue';
import { useBlogsStore } from '~/stores/blogs'

import {onMounted} from "vue";

const store = useBlogsStore()


onMounted(() => {
	store.fetchBlogs()
})
</script>

<style lang="scss" scoped>

.router-link-exact-active {
	color: #010101;
	border-bottom: 1px solid #010101;
}

</style>