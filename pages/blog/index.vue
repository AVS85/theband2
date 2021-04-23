<template>
<div class="article-wrapper">
	<div class="container">
		<div class="row">
			<div class="col-lg-9">
				<button class="article_btn-rollback" @click="$router.go(-1)">Вернуться назад</button>
				<h1 class="article_title">{{title}}</h1>
				<span class="text2">{{subtitle}}</span>
				<div class="article_tags">
					<button class="btn_tags btn_tags-blue">Презентация</button>
					<button class="btn_tags btn_tags-green">Исследование</button>
				</div>
			</div>
			<div class="w-100"></div>
			<div class="col">
				<div class="article_img">
					<div class="article_img-bg" :style="`background-image: url('${imgReview}')`" />
				</div>
			</div>
			<div class="w-100"></div>
			<div class="col-md-4">
				<div class="article_author">
					<span>Автор статьи</span>
					<div class="article_author-about">
						<div class="article_author-about-img" :style="`background-image: url('/blog/article-01.png')`"></div>
						<div>
							<div class="article_author-about-name">Герман Селихов</div>
							<div class="article_author-about-desc">Пишу статьи о тонкостях публичных выступлений и презентаций</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row">
			<div class="col-md-8 offset-md-2">
				<article class="article-wysiwyg" v-html="content"></article>
			</div>
		</div>
	</div>
	<Subscribe />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	async asyncData({$axios, isDev, route, store, env, params, query, req, res, redirect, error}) {
	},

	data() {
		return {
			posts: null, 
		}
	},

	computed:{
		...mapGetters({
			article: 'getBlogArticle'
		}),
		title(){ return this.article?.acf?.title || '' },
		subtitle(){ return this.article?.acf?.title || '' },
		imgReview(){ return this.article?.acf?.img_review || '' },
		content(){ return this.article?.content?.rendered || '' }
	},

	mounted(){
		if (!this.article.acf) this.$router.push('/blog')
	}
}
</script>

<style lang="sass">
.article-wrapper
	padding: 50px 0
	.article_btn-rollback
		border: 0
		position: relative
		font-size: 12px
		color: $elem
		background: transparent
		padding-left: 20px
		&::before
			content: ''
			position: absolute
			// border: 1px solid red
			background-image: url('/icons/arrow-sm.svg')
			background-size: contain
			transform: rotate(180deg)
			height: 10px
			width: 14px
			top: calc(50% - 5px)
			left: 0px
	.article_title
		font-size: 30px
		line-height: 34px
		margin: 20px 0
	.article_tags
		margin: 0 0 35px 0
	.article_img
		width: 100%
		padding-top: 30% //* 1:1 Aspect Ratio */
		position: relative
		margin-bottom: 12px
		.article_img-bg
			position: absolute
			border-radius: 15px
			top: 0
			left: 0
			bottom: 0
			right: 0
			background-repeat: no-repeat
			background-size: cover
			background-position: 0
	.article_author
		font-size: 12px
		.article_author-about
			display: flex
			align-items: center
			// margin: 5px 0
			.article_author-about-img
				border-radius: 56px
				min-height: 56px
				min-width: 56px
				margin: 10px 15px 0 0 
			.article_author-about-name
				font-size: 15px
				line-height: 25px
				font-weight: bold
			.article_author-about-desc
				font-size: 12px
				line-height: 12px
	article
		padding: 80px 0
</style>