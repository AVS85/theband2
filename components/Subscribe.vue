<template>
<section class="container subscribe">
	<div class="row justify-content-between">
		<div class="col-md-6">
			<h2 class="section_title">Полезно и бесплатно</h2>
			<p class="section_subtitle text2">Раз в неделю пишем вам о новостях в мире визуальных коммуникаций и рассказываем об обновлениях в блоге. Никакой рекламы.</p>
		</div>
	</div>

	<form class="row form" action="">
	<!-- <div class="row"> -->
		<div class="col-md-4">
				<input type="text" class="form_input" placeholder="Имя и фамилия">
		</div>
		<div class="col-md-4">
				<input type="text" class="form_input" placeholder="E-mail">
		</div>
		<div class="col-md-4">
				<button type="submit" class="btn_main btn_main-second1">Отправить</button>
		</div>
	
	<!-- </div> -->
	</form>


		<div class="row">
			<div class="col-lg-7">
				<p class="confidence_msg">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <span>политикой конфиденциальности</span></p>
			</div>
		</div>

	</section>
</template>

<style lang="sass">
.subscribe

	.form
		// display: flex
		input
			// margin: 0 30px
	.confidence_msg
		font-size: 12px
		line-height: 12px
		margin-top: 10px
		span
			color: $green_acc
</style>