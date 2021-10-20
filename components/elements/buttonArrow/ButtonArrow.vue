<template>
<div>
	<button :class="icon"></button>
</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String
		}
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
		&.prev
			transform: rotate(180deg)
</style>