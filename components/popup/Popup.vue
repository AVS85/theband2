<template>
	<section class="popup__wrapper"> 
		<button class="btnClosePopup" @click="() => this.$emit('closePopup')"/>	

		<div class="slot">
			<slot></slot>
		</div>

	</section>
</template>

<script>
export default {
	props: {
		isShow: Boolean

	},
	data() {
		return {
		}
	},
	mounted(){
		// console.log('this.$refs');

	}
}

</script>
<style lang="sass" scoped>
.popup__wrapper	
	// border: 2px solid red
	display: flex
	align-items: center
	background-color: rgba($grey_lite1, 1)
	position: fixed
	// max-height: calc(100vh)
	// height: 100%
	// width: 100%
	padding: 80px 5vw
	top: 0
	left: 0
	right: 0
	bottom: 0
	z-index: 999
	button.btnClosePopup
		position: absolute
		background-color: transparent
		background-image: url(./icons/close.svg)
		background-repeat: no-repeat
		background-size: contain
		border: 0
		height: 24px
		width: 24px
		right: 20px
		top: 35px
	.slot
		position: relative
		display: flex
		// border: 2px solid $grey_dark1
		width: 100%
		height: 100%
		
</style>