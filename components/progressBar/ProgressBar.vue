<template>
	<div class="wrapperProgressbar">
		<div v-if="type === 'dash'" 
		class="type__dash__wrapper">
			<div 
			v-for="(item, i) in count" :key="i" 
			class="item"
			:class="{active: i == activeindex}"
			></div>
		</div>

		<div v-if="type === 'line'" 
		class="type__line__wrapper">
			<div class="shutter" :style="`width: ${progress}%`">

			</div>
		</div>



	</div>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'line'
		},
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
	},
	computed:{
		compIndexActiveSlide(){
			let {count, progress} = this
			console.log(count);
			return progress/100
		}
	}
}
</script>

<style lang="sass" scoped>
.type__dash__wrapper
	// border-top: 1px solid $grey_dark2
	display: flex
	.item
		background-color: $grey_dark2
		width: 17px
		height: 3px
		margin: 3px
		transition: .325s
		&.active
			transition: .325s
			
			background-color: $green_acc
			width: 34px


.type__line__wrapper
	// border-top: 1px solid $grey_dark2
	background-color: rgba($grey_dark2, .25 )
	// height: 2px
	width: 100%	
	.shutter
		border: 1px solid $green_acc
		background-color: $green_acc
		transition: .725s
		width: 100px



</style>