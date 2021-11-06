<template>
<div>
	<button @click="onClick" :class="type" >{{title}}</button>
</div>
</template>

<script>
export default {
	props:{
		title: String,
		type: {
			type: String,
			default: 'type1'
		}
	},
	methods:{
		onClick(){ this.$emit('onClick') }
	}
}
</script>

<style lang="sass" scoped>
button
	display: flex
	align-items: center
	justify-content: center
	border: 0
	border-radius: 5px
	font-size: 18px
	font-family: 'headerRegular'
	line-height: 18px
	height: 50px
	min-width: 100%
	width: 255px
	padding: 15px
	transition: .35s

	&.type1
		border-radius: 5px
		border: 2px solid #7ADAA2
		background-color: transparent
		color: #7ADAA2
		&:hover
			background-color: #7ADAA2
			color: #fff
		&:disabled
			background-color: #C0F1D4

	&.type2
		background-color: #344756
		color: #fff
		&:hover
			background-color: #BCC5D4
		&:disabled
			background-color: #E4E8EE
			
	&.type3
		background-color: #BCC5D4
		border: 0
		color: #fff
		&:hover
			background-color: #9EACC4
		&:disabled
			background-color: #E4E8EE

</style>