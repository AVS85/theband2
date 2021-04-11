<template>
<section class="container index_section7">
	<div class="row justify-content-between">
		<div class="col-12">
			<h2 class="section_title">Раскажите <br>о вашем проекте:</h2>
		</div>

		<div class="w-100"></div>
		
		<div class="col-lg-6">
			<div class="profile">
				<div class="profile_foto"></div>
				<div class="profile-name text1">Светлана Савина</div>
				<div class="profile-msg text2">Привет! Я помогу запустить ваш проект</div>
			</div>	
		</div>
		<div class="col-lg-6">
			<form class="form" action="">
				<input type="text" class="input_main" placeholder="Имя и фамилия">
				<input type="text" class="input_main" placeholder="E-mail">
				<input type="text" class="input_main" placeholder="+7(000)000-00-00">
				<input type="text" class="input_main" placeholder="Чем вам помочь?">
				<input type="text" class="input_main" placeholder="Опишите задачу: ситуацию, цель, бюджет, сроки">
				<p class="confidence_msg">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <span>политикой конфиденциальности</span></p>
				<button type="submit" class="btn_main btn_main-second1">Отправить</button>
			</form>
		</div>
	</div>
	</section>
</template>

<style lang="sass">
.index_section7
	.form
		display: flex
		align-items: center
		flex-direction: column
		input
			background-color: transparent
			border: 0
			border-bottom: 1px solid $grey_dark2
			color: $grey_dark2
			font-size: 15px
			padding: 10px 5px
			width: 100%
			margin-bottom: 40px
			&::placeholder
				color: $grey_dark2
		.confidence_msg
			font-size: 12px
			line-height: 12px
			span
				color: $green_acc
		button
			margin-top: 45px
	.profile
		margin-bottom: 45px
		.profile_foto
			background-image: url('/employees/savina.png')
			background-repeat: no-repeat
			background-position: center center
			background-size: contain
			height: 220px
			width: 220px
			border-radius: 110px
		.profile-name
			font-weight: bold
			margin: 20px 0 10px 0
		.profile-msg
</style>