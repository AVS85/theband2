<template>
<header>
	<div class="container">
		<div class="row row_header">
			<div class="col-auto">
				<div class="logo">
					<nuxt-link to="/">
						<img src="/logo-theband.png" alt="logo">
					</nuxt-link>
				</div>
			</div>
			<div class="d-none d-lg-block col">
				<div class="menu">
					<ul>
						<li><nuxt-link to="/about">О нас</nuxt-link></li>
						<li><nuxt-link to="/services">Услуги</nuxt-link></li>
						<li><nuxt-link to="/contacts">Контакты</nuxt-link></li>
						<li><nuxt-link to="/blog">Блог</nuxt-link></li>
					</ul>
				</div>
			</div>
			<div class="d-none d-lg-block col-lg-auto">
				<button class="btn_main btn_main-second2">Связаться</button>
			</div>
		
			<div class="d-lg-none burger"></div>

		</div>
	</div>

</header>
</template>

<style lang="sass">
header
	// border: 1px solid $elem
	display: flex
	align-items: center
	background-color: #fff
	box-shadow: 0px -1px 32px -10px #EAEEF2
	.row_header
		align-items: center
		justify-content: space-between
		@media (max-width: 998px)
			justify-content: center

	.burger
		// border: 1px solid $elem
		position: absolute
		background-image: url(/icons/menu-burger.svg)
		background-repeat: no-repeat
		background-position: center
		background-size: contain
		// top: 37px
		right: 20px
		height: 30px
		width: 30px

	.logo
		display: flex
		align-items: center
		padding: 32px 16px 32px 0
		img
			width: 131px

	.menu
		// border: 1px solid red
		display: flex
		align-self: center
		ul
			// border: 1px solid grey
			display: flex
			margin: 0
			padding: 0
			li
				// border: 1px solid rede: none
				font-size: 18px
				line-height: 18px
				padding: 0 16px
				list-style: none
				a
					color: $text1
</style>

<script>
export default {
	mounted(){
	}
}
</script>
