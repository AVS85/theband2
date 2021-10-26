<template>
<div>
	<button @click="onClick">{{title}}</button>
</div>
</template>

<script>
export default {
	props:{
		title: String
	},
	methods:{
		onClick(){ this.$emit('onClick') }
	}
}
</script>

<style lang="sass" scoped>
button
	background-color: transparent
	border: 1px solid $green_acc
	border-radius: 5px
	color: $green_acc
	font-size: 18px
	font-family: 'headerSemiBold'
	line-height: 24px
	height: 50px
	min-width: 100%
	padding: 15px
</style>