<template>
	<div class="contacts">
		<div v-for="contact in contacts" class="contacts-item">
			<h4 class="contacts-item__title">{{ contact.title }}</h4>
			<a v-if="contact.phone" :href="'tel:' + contact.phone.number" class="contacts-item__text">{{ contact.phone.title
				}}</a>
			<a v-if="contact.email" :href="'mailto:' + contact.email" class="contacts-item__text">{{ contact.email }}</a>
			<p v-if="contact.addres" class="contacts-item__text">{{ contact.addres }}</p>
			<a v-if="contact.messanger" :href="contact.messanger" target="_blank" class="contacts-item__btn">
				<UiIcon name="telegram" />
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
import UiIcon from "~/components/shared/UiIcon.vue";
import { type FooterContacts } from '~/types/types';



const { contacts } = defineProps({
	contacts: {
		type: Array as () => FooterContacts[],
		required: true
	}
})

</script>

<style lang="scss" scoped>
.contacts {
	display: flex;
	flex-direction: column;
	gap: 36px;
	max-width: 176px;

	&-item{
		display: flex;
		flex-direction: column;
		gap: 4px;
		&__title {
			font-weight: normal;
			font-size: 16px;
			margin-top: 0;
			margin-bottom: 8px;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		&__btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 32px;
			height: 32px;
			background-color: #010101;
			border-radius: 50%;
			color: #fff;
			margin-top: 4px;
			&:deep(svg){
				width: 12px;
				height: 12px;
			}
		}
	}
}
</style>