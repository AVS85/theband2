<template>
<div 
	class="root"
	:style="`background-color: ${rootBgColor}`"
	>
	<!-- :style="`background-color: ${classRoot}`" -->
	<section class="mpSection"
		:class="container">

		<div class="row" v-if="title">
			<div class="col">
				<header>{{title}}</header>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<section class="content_wrapper">
					
					<slot></slot>

				</section>
			</div>
		</div>
	</section>
</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: null
		},
		container: {
			type: String,
			default: 'container'
		},
		rootBgColor: {
			type: String,
			default: 'transparent'
		}
	}
}
</script>

<style lang="sass">
.root
	background-color: transparent
section.mpSection
	// border: 1px solid grey
	font-family: 'textMedium'
	padding-top: 60px
	padding-bottom: 60px
	@media (max-width: 768px)
		padding-top: 40px
		padding-bottom: 40px
	header
		font-family: 'headerBold'
		font-size: 32px
		line-height: 40px
		margin-bottom: 60px
		text-transform: uppercase
		@media (max-width: 768px)
			font-size: 24px
			line-height: 32px
			margin-bottom: 32px
	section.content_wrapper
		// border: 1px solid grey

</style>