<template>
	<div class="progressbar">
		<div class="progressbar__shutter" :style="`width: ${progress}%`"></div>
	</div>
</template>

<script>
export default {
	props: {
		count: {
			type: Number,
			default: 0
		}, 
		activeindex:{
			type: Number,
			default: 0
		}, 
		progress: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style lang="sass" scoped>
.progressbar
	// border-top: 1px solid $grey_dark2
	background-color: rgba($grey_dark2, .25 )
	// height: 2px
	width: 100%	
	&__shutter
		border: 1px solid $green_acc
		background-color: $green_acc
		transition: .725s
		width: 100px
</style>