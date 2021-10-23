<template>
	<div class="progressbar">
		<div class="progressbar__shutter" :style="`width: ${progress}%`"></div>
	</div>
</template>

<script>
export default {
	props: {
		progress: {
			type: Number,
			default: 10
		}
	}
}
</script>

<style lang="sass" scoped>
.progressbar
	border: 1px solid red
	height: 2px
	width: 100%	
	transition: .25s
	&__shutter
		border: 1px solid red
		width: 100px
</style>