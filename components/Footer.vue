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
						<li><a v-scroll-to="'#about'" href="#">О нас</a></li>
						<li><a v-scroll-to="'#services'" href="#">Услуги</a></li>
						<li><a v-scroll-to="'#contacts'" href="#">Контакты</a></li>
					</ul>
			</div>
			<div class="col-lg-auto social">
				<a href="#" target="_blank"
				:style="`background-image: url(/icons/instagram.svg)`">
				</a>
				<a href="https://www.facebook.com/106060577827669/posts/163244842109242/" target="_blank"
				:style="`background-image: url(/icons/facebook.svg)`">
				</a>
				<a href="https://t.me/thebandslides" target="_blank"
				:style="`background-image: url(/icons/telegram.svg)`">
				</a>
			</div>
		</div>

		<div class="row row_bottom">
			<div class="order-lg-3 col-lg-auto col_bottom contacts">
				<ul>
					<li>the.band@inbox.ru</li>
					<li>+7 (925) 709 7259</li>
				</ul>
			</div>
			<div class="order-lg-1 col-lg-auto col_bottom">
				<ul>
					<li><a href="/doc/theband-aggrement.pdf" target="_blank">Договор оферта</a></li>
					<li><a href="/doc/theband-privacy-policy.pdf" target="_blank">Политика конфиденциальности</a></li>
					<li><a href="/doc/theband-terms-of-use.pdf" target="_blank">Пользовательское соглашение</a></li>
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
			a
				// border: 1px solid red
				border-radius: 45px
				height: 32px
				width: 32px
				margin: 5px
				background-color: $grey_dark2
				background-size: 50%
				background-repeat: no-repeat
				background-position: center center


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
