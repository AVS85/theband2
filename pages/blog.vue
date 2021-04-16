<template>
<div>
	<div class="container blogpage">
		<div class="row">
			<div class="col-sm-6 col-md-4 col-lg-3"
			v-for="(item, i) in article" :key="i">
				<article class="blog">
					<div class="blog_img-wrapper">
						<div class="blog_img-wrapper-bg" :style="`background-image: url('${item.img}')`"></div>
					</div>
					<div class="blog_title h5">
						<nuxt-link :to="item.link">{{item.title}}</nuxt-link>
					</div>
					<div class="blog_subtitle text2">
						<nuxt-link :to="item.link">{{item.subtitle}}</nuxt-link>
					</div>
					<button class="blog_btn-readmore">Подробнее</button>
				</article>
			</div>
		</div>

	</div>
	<Subscribe />
</div>
</template>

<script>
export default {
	data() {
		return {
			article: []
		}
	},
	mounted(){
		this.$axios('/blog/blog.json')
		.then(res => {
			this.article = res.data
			console.log(res)
		})
	}
}
</script>

<style lang="sass">
.blogpage
	padding-top: 45px
article.blog
	// border: 1px solid red
	margin: 35px 0
	.blog_img-wrapper
		width: 100%
		padding-top: 65% //* 1:1 Aspect Ratio */
		position: relative
		margin-bottom: 12px
		.blog_img-wrapper-bg
			position: absolute
			border-radius: 5px
			top: 0
			left: 0
			bottom: 0
			right: 0
			background-repeat: no-repeat
			background-size: cover
			background-position: center
	.blog_title
		margin-bottom: 12px
		font-weight: bold
	.blog_subtitle
		margin: 12px 0
	.blog_btn-readmore
		border: 0
		position: relative
		font-size: 12px
		padding: 0
		color: $elem
		background: transparent
		&::after
			content: ''
			position: absolute
			// border: 1px solid red
			background-image: url('/icons/arrow-sm.svg')
			background-size: contain
			height: 10px
			min-width: 14px
			top: calc(50% - 5px)
			margin-left: 10px
</style>