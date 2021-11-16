<template>
	<section class="container section">
		<div class="row justify-content-between">
			<div class="col-12">
				<div class="title">
					Сервис <span class="img">C</span> <span class="label">презентаций</span> <br>для бизнеса и стартапов
				</div>
			</div>
		</div>
		<div class="row justify-content-end">
			<div class="col-lg-5 actions">
				<div class="actions__text">Помогаем достигать цели, фокусируясь на&nbsp;смысле</div>
			</div>
			<div class="col-auto actions">
				<div class="actions__button" @click="() => this.$scrollTo('#contacts')"></div>
			</div>
		</div>
	</section>
</template>

<script>
// import Btn from '/img/button.svg'
export default {
	// components: { Btn }
}
</script>
<style lang="sass" scoped>
section
	// border: 1px solid red
	padding-bottom: 130px
	padding-top: 130px
	color: $textMain
	@media (max-width: 768px)
		padding-bottom: 64px
		padding-top: 64px
	.title
		// border: 1px solid red
		font-family: 'headerBold'
		font-size: 60px
		line-height: 86px
		text-transform: uppercase
		margin-bottom: 32px
		span.img
			display: inline 
			background-color: transparent
			background-image: url(./img/1.svg)
			background-position: center
			background-repeat: no-repeat
			background-size: contain
			border-radius: 0
			color: transparent
			// padding: 0

		span.label
			background: $grey_lite1
			border-radius: 43px
			// color: #fff
			padding: 5px 20px
		@media (max-width: 768px)
			font-size: 40px
			line-height: 64px
			margin-bottom: 16px

		@media (max-width: 360px)
			font-size: 32px
			line-height: 48px
	.actions
		display: flex
		align-items: center
		&__text
			// border: 1px solid red
			margin-bottom: 16px
			font-size: 20px
			line-height: 32px
			@media (max-width: 768px)
				font-size: 16px
				line-height: 24px
		&__button
			// border: 1px solid red
			background-image: url(./img/button.svg)	
			background-repeat: no-repeat
			background-size: contain
			height: 140px
			width: 170px
			margin: 0 70px
			cursor: pointer
			transition: .25s
			&:hover
				background-image: url(./img/button-hover.svg)	
				
			@media (max-width: 768px)
				margin: 0
				height: 104px

</style>