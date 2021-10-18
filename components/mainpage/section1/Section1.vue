<template>
	<section class="container section">
		<div class="row justify-content-between">
			<div class="col-12">
				<div class="title">
					Сервис <span>презентаций</span> <br>для бизнеса и стартапов
				</div>
			</div>
		</div>
		<div class="row justify-content-end">
			<div class="col-auto actions">
				<div class="actions__text">Помогаем достигать цели, фокусируясь <br>на смысле</div>
				<div class="actions__button"></div>
			</div>
		</div>
	</section>
</template>

<style lang="sass" scoped>
section
	border: 1px solid red
	padding: 130px 0
	color: $textMain
	.title
		// border: 1px solid red
		font-family: 'headerBold'
		font-size: 60px
		line-height: 86px
		text-transform: uppercase
		margin-bottom: 32px
		@media (max-width: 768px)
			font-size: 40px
			line-height: 64px
		span
			background: $green_acc
			border-radius: 43px
			color: #fff
			padding: 5px 20px
	.actions
		display: flex
		align-items: center
		&__text
			font-size: 20px
			line-height: 32px
		&__button
			background-image: url(./img/button.svg)	
			background-repeat: no-repeat
			background-size: contain
			height: 140px
			width: 170px
			margin: 0 70px
			@media (max-width: 768px)
				margin: 0
</style>