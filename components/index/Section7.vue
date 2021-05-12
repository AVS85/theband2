<template>
<section class="container index_section7">
	<div class="row justify-content-between">
		<div class="col-12">
			<h2 class="section_title">Поделитесь <br>вашей идеей</h2>
		</div>

		<div class="w-100"></div>
		
		<div class="col-lg-6">
			<div class="profile">
				<div class="profile_foto"></div>
				<div class="profile-name text1">Куновская Юлия</div>
				<div class="profile-msg text2"><b>Привет! Поможем вашему бизнесу достичь цели</b></div>
				<div class="profile-msg text2">ex МегаФон, KidZania, WeWork</div>

			</div>	
		</div>
		<div class="col-lg-6">
			<!-- action="https://getform.io/f/3fb0ea34-2a92-41eb-a7e5-e3934ac8664a" -->
			<!-- method="post" -->
			<form 
			class="form"
			@submit.prevent="sendMsg"
			>
				<input type="text" name="name" class="input_main" placeholder="Как вас зовут?" required>
				<input type="text" name="email" class="input_main" placeholder="E-mail">
				<input type="text" name="phone" class="input_main" placeholder="+7(000)000-00-00" required>
				<input type="text" name="task" class="input_main" placeholder="Опишите задачу и сроки">
				<p class="confidence_msg">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <span>политикой конфиденциальности</span></p>
				<button type="submit" class="btn_main btn_main-second1">Отправить</button>
				<input type="hidden" id="captchaResponse" name="g-recaptcha-response">
			</form>
		</div>
	</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			task: ''
		}
	},
	methods: {
		sendMsg(){
			this.$axios.post("https://getform.io/f/3fb0ea34-2a92-41eb-a7e5-e3934ac8664a", {
				name: this.name,
				email: this.email,
				phone: this.phone,
				task: this.task
				// "g-recaptcha-response": grecaptcha.getResponse(),
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (response) {
				console.error(response);
			});
		}
	},
}
</script>

<style lang="sass">
.grecaptcha-badge
	position: fixed !important
	right: -320px !important
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
			background-image: url('/employees/kunovskaya.jpg')
			background-repeat: no-repeat
			background-position: center center
			background-size: contain
			height: 220px
			width: 220px
			border-radius: 110px
			filter: grayscale(1)
		.profile-name
			font-weight: bold
			margin: 20px 0 10px 0
		// .profile-msg
</style>