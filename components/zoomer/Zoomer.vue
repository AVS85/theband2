<template>
	<section class="zoomer__wrapper"> 
		zoomer
		<button class="close" />	
	</section>
</template>

<script>
export default {
	data() {
		return {
			isShow: false
		}
	},
}

</script>
<style lang="sass" scoped>
.zoomer__wrapper	
	border: 1px solid red
	background-color: $grey_lite1
	position: fixed
	min-height: 100vh
	width: 100%
	padding: 80px 0
	top: 0
	left: 0
	z-index: 999
	button.close
		position: absolute
		background-image: url(./icons/close.svg)
		background-repeat: no-repeat
		background-size: contain
		height: 45px
		width: 45px
		right: 20px
		top: 35px
</style>