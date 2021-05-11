<template>
	<div class="scrolltop-wr"
	v-bind:class="{active: isShow}"
	@click="scrollTo"
	>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isShow: false,
			offset: 300,
			y: 0
		}
	},
	// computed:{
	// 	direction(){
	// 		return this.y
	// 	}
	// },
	mounted(){
		window.addEventListener('scroll', () => {
			(pageYOffset > this.offset) ? this.isShow = true : this.isShow = false
			// console.log(pageYOffset);
		});
	},
	methods:{
		scrollTo(){
			window.scrollTo({
				top: 0,
    		behavior: "smooth"
			})
		}
	}

}
</script>

<style lang="sass">
.scrolltop-wr
	border: 2px solid $grey_dark2
	border-radius: 5px
	position: fixed
	bottom: 50px
	right: 20px
	display: flex
	height: 35px
	width: 35px

	background-image: url('/icons/arrow-sm.svg')
	background-size: 75%
	background-repeat: no-repeat
	background-position: center
	transition: opacity .25s
	transform: rotate(-90deg)
	opacity: 0
	cursor: pointer
	z-index: 9999
	&.active
		opacity: 1
	&:hover
		border-color: $green_acc
</style>