<template>
<section class="container mpSection">
	<div class="row">
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
</template>

<script>
export default {
	props: {
		title: ''
	}
}
</script>

<style lang="sass">
section.mpSection
	// border: 1px solid grey
	font-family: 'textMedium'
	padding-top: 60px
	padding-bottom: 60px
	header
		font-family: 'headerBold'
		font-size: 32px
		line-height: 40px
		margin-bottom: 60px
		text-transform: uppercase
	section.content_wrapper
		// border: 1px solid grey

</style>