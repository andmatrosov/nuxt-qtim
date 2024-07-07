<template>
	<footer class="footer">
		<UiContainer>
			<div class="footer-info">
				<div class="footer-info__heading">
					<p>Is there a project?</p>
					<h3><span>Let’s work</span> <span>together</span></h3>
				</div>
				<div class="footer-info__contacts">
					<UiFooterContacts :contacts="footerContacts" />
				</div>
			</div>

			<div class="footer-bottom">
				<UiNavList :navList="footerLinksFirst" decorated />
				<a href="#header" class="footer-goback">
					<span>Go</span>
				</a>
				<UiNavList :navList="footerLinksSecond" decorated />
			</div>
		</UiContainer>
	</footer>
</template>

<script lang="ts" setup>
import UiContainer from './shared/UiContainer.vue';
import UiFooterContacts from './UiFooterContacts.vue';
import { type FooterContacts } from '~/types/types';
import UiNavList from "~/components/shared/UiNavList.vue";

const footerLinksFirst = [
	{name: 'Facebook', path: "https://fecebook.com"},
	{name: 'Instagram', path: "https://instagram.com"},
	{name: 'Telegram', path: "https://t.me/andrew_deweb"},
];

const footerLinksSecond = [
	{name: 'Behance', path: "https://www.behance.net"},
	{name: 'LinkedIn', path: "https://www.linkedin.com/"},
	{name: 'Policy Privacy', path: "/"},
];

const footerContacts: FooterContacts[] = [
	{
		title: 'For all questions',
		phone: {
			title: '+7 (920) 278—00—68',
			number: '+79202780068'
		},
		email: 'qtim@agency.com'
	},
	{
		title: 'Office in Russia',
		addres: '139 Ruben Station Lake Drew, NM 52678',
		messanger: 'https://t.me/andrew_deweb'
	},
	{
		title: 'Office in Dubai',
		addres: '139 Ruben Station Lake Drew, NM 52678',
		messanger: 'https://t.me/andrew_deweb'
	}
]

</script>

<style lang="scss" scoped>
.footer {
	$footer: &;
	background-color: #E2BEFF;
	padding-top: 140px;
	overflow: hidden;

	&-info {
		display: flex;
		justify-content: space-between;

		&__heading {
			width: 42%;

			p {
				margin-top: 0;
				font-size: 16px;
				margin-bottom: 56px;
			}

			h3 {
				margin: 0;
				position: relative;
				font-size: 112px;
				line-height: 1;
				font-weight: normal;
				width: min-content;

				span {
					position: relative;
				}

				span:first-child {
					&::before {
						content: "";
						position: absolute;
						width: calc(100% - 9px);
						height: 1px;
						background-color: #010101;
						top: 94px;
						left: 9px;
					}
				}

				span:last-child {
					&::after {
						content: "";
						position: absolute;
						width: calc(100% - 9px);
						height: 1px;
						background-image: linear-gradient(to right, #010101 19%, transparent 19%, transparent 40%, #010101 40%);
						top: 94px;
						left: 9px;
					}
				}

				&::after {}
			}
		}

		&__contacts {
			width: 33%;
			padding-top: 75px;
			padding-bottom: 240px;
		}
	}

	&-bottom {
		position: relative;
		display: flex;
		padding: 30px 0;
		align-items: center;
		justify-content: space-between;
		#{$footer}-goback {
			$size: 358px;
			position: absolute;
			bottom: calc($size / -2);
			left: 50%;
			display: inline-block;
			width: $size;
			height: $size;
			background-color: #010101;
			border-radius: 50%;
			color: #fff;
			font-size: 32px;
			text-align: center;
			transform: translateX(-50%);

			span {
				display: inline-block;
				margin-top: 50%;
				transform: translateY(calc(-100% - 25px));
			}
		}
	}
}
</style>