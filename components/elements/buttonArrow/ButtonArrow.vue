<template>
<div>
	<button :class="icon" @click="onClick"></button>
</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String
		}
	},
	methods: {
		onClick(){
			this.$emit('onClick')
		},
	}

}
</script>

<style lang="sass" scoped>
div
	display: flex
	align-items: center
	button
		height: 24px
		width: 24px
		background-image: url(./imgs/icon.svg)
		background-repeat: no-repeat
		background-size: contain
		border: 0
		transition: .25s

		&:hover
			background-image: url(./imgs/icon-hover.svg)
			
		&.prev
			transform: rotate(180deg)
			background-image: url(./imgs/icon.svg)
			&:hover
				background-image: url(./imgs/icon-hover.svg)
</style>