<template>
<section class="wrapper">
	<div class="row justify-content-between">
		
		<div class="col-lg-4">
			<div class="profile">
				<div class="profile_foto"></div>
				<div class="profile-name text1">Куновская Юлия</div>
				<div class="profile-msg text2">Основатель и руководитель сервиса <br>The Band.</div>
				<div class="profile-msg text3">Опыт управления бизнес-подразделениями 15 лет. Продуктовая и предпринимательская экспертиза. <br>8 лет опыта создания презентаций для ТОП-менеджеров и акционеров</div>

			</div>	
		</div>
		<div class="col-lg-6">
			<form 
			class="form"
			ref="contactForm"
			accept-charset="UTF-8"
			@submit.prevent="sendMsg()"
			method="POST"
			v-if="!isSuccess"
			>
				<input v-model="name" type="text" name="name" class="input_main" placeholder="Как Вас зовут?" required>
				<input v-model="email" type="text" name="email" class="input_main" placeholder="E-mail">
				<input v-model="phone" type="text" name="phone" class="input_main" placeholder="+7 (000) 000-00-00" required>
				<input v-model="task" type="text" name="task" class="input_main" placeholder="Опишите задачу: ситуацию, цель, бюджет, сроки">
				<p class="confidence_msg">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <span><a href="/doc/theband-privacy-policy.pdf" target="_blank">политикой конфиденциальности</a></span></p>

				<ButtonMain 
				type="type2"
				title="Отправить"
				@onClick="() => this.$refs.contactForm.submit()" />

				<input type="hidden" id="captchaResponse" name="g-recaptcha-response">
			</form>
			<div 
			class="success" 
			v-if="isSuccess">
			<p>Заявка отправлена</p>
			<img src="/icons/success.svg" alt="">
			</div>
		</div>
	</div>
	</section>
</template>

<script>
import ButtonMain from '../../elements/buttonMain/ButtonMain.vue'

export default {
	components: {ButtonMain},
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			task: '',

			isSuccess: false,
			token: null
		}
	},

	mounted(){
		this.recapcha()
	},

	methods: {
		recapcha(){
			grecaptcha.execute('6LfK2NEaAAAAAP2vR6unr-w3QNOowHYAQ7yjy-jy', {
				action: 'homepage'
			})
			.then((token) => {
				document.getElementById('captchaResponse').value = token;
				console.log('token ', token);
				this.token = token
			});
		},
		sendMsg(){
			

			console.log(grecaptcha.getResponse);
			let data = {
				name: this.name,
				email: this.email,
				phone: this.phone,
				task: this.task,
				"g-recaptcha-response": this.token
				// "g-recaptcha-response": grecaptcha.getResponse()
			}

			this.$axios.post("https://getform.io/f/3fb0ea34-2a92-41eb-a7e5-e3934ac8664a", data)
			.then( (response) => {
				fbq('track', 'Lead'); // pixel
				
				// this.isSuccess = response.data.success ? true : false;
				this.isSuccess = (response.status == 200) ? true : false;
				console.log(response, this.isSuccess);
			})
			.catch( (response) => {
				console.error(response);
			});
		}
	},
}
</script>

<style lang="sass" scoped>
.grecaptcha-badge
	position: fixed !important
	right: -1320px !important


.wrapper
	.form
		display: flex
		align-items: center
		flex-direction: column
		a
			color: $green_acc
		input
			background-color: transparent
			border: 0
			border-bottom: 1px solid $grey_dark2
			color: $grey_dark1
			font-size: 16px
			line-height: 20px
			padding: 10px 5px
			width: 100%
			margin-bottom: 40px
			&::placeholder
				color: $grey_dark2
				font-family: 'textRegular'
				font-size: 16px
				line-height: 20px
		.confidence_msg
			font-size: 14px
			line-height: 16px
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
			font-size: 20px
			line-height: 24px
			font-weight: bold
			margin: 20px 0 10px 0
		.text2
			margin: 16px 0
			font-size: 16px
			line-height: 20px
			font-family: 'textRegular'
			font-weight: bold
		.text3
			margin: 16px 0
			font-size: 16px
			line-height: 20px
			font-family: 'textRegular'

		// .profile-msg
	.success
		// border: 1px solid red	
		text-align: center
		font-size: 20px
		line-height: 20px
		font-weight: bold
</style>