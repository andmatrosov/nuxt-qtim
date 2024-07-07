<template>
	<svg v-if="name === 'flagUK'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M23.8984 10.4348H13.5653H13.5653V0.101578C13.0529 0.034875 12.5305 0 12 0C11.4694 0 10.9471 0.034875 10.4348 0.101578V10.4347V10.4347H0.101578C0.034875 10.9471 0 11.4695 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347H10.4347V23.8984C10.9471 23.9651 11.4694 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653V13.5653H23.8984C23.9651 13.0529 24 12.5306 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z" fill="#D80027"/>
		<path d="M15.1304 15.1304L20.4852 20.4852C20.7315 20.239 20.9664 19.9817 21.1906 19.7148L16.6061 15.1304H15.1304V15.1304Z" fill="#D80027"/>
		<path d="M8.86951 15.1304H8.86941L3.51465 20.4851C3.76084 20.7314 4.01823 20.9664 4.28504 21.1905L8.86951 16.6059V15.1304Z" fill="#D80027"/>
		<path d="M8.86951 8.8696V8.86951L3.5147 3.51465C3.26842 3.76084 3.03348 4.01823 2.80933 4.28504L7.39384 8.86955H8.86951V8.8696Z" fill="#D80027"/>
		<path d="M15.1304 8.8698L20.4852 3.5149C20.239 3.26862 19.9817 3.03368 19.7148 2.80957L15.1304 7.39409V8.8698Z" fill="#D80027"/>
	</svg>
	<svg v-if="name === 'telegram'" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
		<path d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	<svg v-if="name === 'chevron'" xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
		<path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#494949" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
</template>

<script lang="ts" setup>
type Props = 'flagUK' | 'telegram' | 'chevron';


const { name } = defineProps({
	name: {
		type: String as () => Props,
		required: true
	}
})
</script>

