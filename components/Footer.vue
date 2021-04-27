<template>
<footer>
	<div class="container">
		<div class="row row_top">
			<div class="col-lg-auto logo">
				<nuxt-link to="/">
					<img src="/logo-theband.png" alt="logo">
				</nuxt-link>
			</div>
			<div class="col-lg-auto menu">
					<ul>
						<li><nuxt-link :to="{ path: '/', hash:'#about'}">О нас</nuxt-link></li>
						<li><nuxt-link :to="{ path: '/', hash:'#services'}">Услуги</nuxt-link></li>
						<li><nuxt-link :to="{ path: '/', hash:'#contacts'}">Контакты</nuxt-link></li>
						<!-- <li><nuxt-link :to="{ path: '/blog'}">Блог</nuxt-link></li> -->
					</ul>
			</div>
			<div class="col-lg-auto social">
				<a href="https://www.facebook.com/TheBand.Slides/">
					<img src="/icons/social-vk.svg" alt="theband.design-vk">
				</a>
				<a href="">
					<img src="/icons/social-fb.svg" alt="theband.design-fb">
				</a>
				<a href="">
					<img src="/icons/social-in.svg" alt="theband.design-in">
				</a>
			</div>
		</div>

		<div class="row row_bottom">
			<div class="order-lg-3 col-lg-auto col_bottom contacts">
				<ul>
					<li>theband@gmail com</li>
					<li>+7 (999) 999-99-99</li>
				</ul>
			</div>
			<div class="order-lg-1 col-lg-auto col_bottom">
				<ul>
					<li>Пользовательское соглашение</li>
					<li>Соглашение о персональных данных</li>
					<li>Политика рекламной рассылки </li>
				</ul>
			</div>
			<div class="order-lg-2 col-lg-auto col_bottom copyright">
				<ul>
					<li>2021 © The Band.Slides Все права защищены</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
</template>

<style lang="sass">
footer
	// border: 1px solid $elem
	display: flex
	align-items: center
	background-color: $grey_lite1
	.row_top
		border-bottom: 1px solid $elem
		display: flex
		justify-content: space-between
		align-items: center
		padding: 20px 0 20px 0
		@media (max-width: 998px)
			justify-content: center
		.logo
			// border: 1px solid red
			display: flex
			justify-content: center
			img
				height: 37px
				margin-top: 30px
				margin-bottom: 30px
		.menu
			// border: 1px solid red
			display: flex
			align-self: center
			justify-content: center
			font-size: 18px
			ul
				// border: 1px solid grey
				display: flex
				margin: 0
				padding: 0
				@media (max-width: 991px)
					display: block
				li
					// border: 1px solid rede: none
					font-size: 18px
					line-height: 18px
					padding: 0 16px
					list-style: none
					text-align: center
					@media (max-width: 998px)
						margin: 14px 0
					a
						color: $text1
		.social
			// border: 1px solid red
			display: flex
			justify-content: center
			margin-top: 20px
			margin-bottom: 20px
			img
				margin: 5px

	.row_bottom
		// border: 1px solid red
		display: flex
		justify-content: space-between
		align-items: flex-end
		font-size: 12px
		padding: 40px 0 50px 0
		@media (max-width: 998px)
			justify-content: center
		.col_bottom
			display: flex
			justify-content: center
			ul
				margin: 0
				padding: 0
				li
					list-style: none
					padding: 7px 0
					@media (max-width: 992px)
						text-align: center
						justify-content: center
		.copyright
			display: flex
			color: $grey_dark2
			font-size: 12px
		.contacts
			font-weight: bold
			@media (max-width: 992px)
				margin-bottom: 30px

</style>

<script>
export default {
	mounted(){
	}
}
</script>
