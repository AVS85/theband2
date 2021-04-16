<template>
<div class="article-wrapper">
	<div class="container">
		<div class="row">
			<div class="col-lg-9">
				<button class="article_btn-rollback" @click="$router.go(-1)">Вернуться назад</button>
				<h1 class="article_title">История презентаций: как появились PowerPoint и Keynote (часть 2)</h1>
				<span class="text2">Каким был первый софт для оформления слайдов</span>
				<div class="article_tags">
					<button class="btn_tags btn_tags-blue">Презентация</button>
					<button class="btn_tags btn_tags-green">Исследование</button>
				</div>
			</div>
			<div class="w-100"></div>
			<div class="col">
				<div class="article_img">
					<div class="article_img-bg" :style="`background-image: url('/blog/article-01.png')`"></div>
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

				<article class="article-wysiwyg">

					<ul>
						<li>Почему миру был нужен PowerPoint</li>
						<li>Как PowerPoint вышел на рынок</li>
						<li>Что умела первая программа</li>
						<li>Что умела первая программа</li>
						<li>Как развивался PowerPoint</li>
						<li>Выводы</li>
					</ul>
					<p>Мы уже рассказали вам о первых технологиях для отображения слайдов: презентации с текстом, инфографикой и картинками появились задолго до изобретения привычного нам PowerPoint. Но подготовка материалов отнимала много времени и сил. Даже незатейливые текстовые слайды оставались роскошью – до тех пор, пока не был создан удобный графический редактор.Давайте разберемся, почему потребность в автоматизации работы стояла так остро, и как развивались первые программы для создания презентаций.</p>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni error voluptatibus illo eius, asperiores cupiditate tempore delectus? Nesciunt dolore magni ratione saepe voluptatum nulla quisquam autem soluta quidem adipisci perspiciatis, fugiat corporis aliquam incidunt deleniti error ex et nam tempore exercitationem. Quis exercitationem corrupti ab alias rem eligendi cumque. Illo!</p>
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ex iure tempore ipsa quas minima fugiat cupiditate nostrum, rerum sequi rem modi cumque eos numquam eligendi deserunt autem blanditiis veniam doloribus voluptatem porro provident illum magni quod. Temporibus sunt, perferendis dolorum, veniam porro cum culpa modi incidunt ducimus similique vel perspiciatis consectetur amet ullam. Nam vitae ea distinctio odio vero voluptatibus ratione vel magni, exercitationem, enim mollitia necessitatibus. Corporis voluptates aliquam vel explicabo exercitationem aut?</p>
					<h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore libero similique incidunt illo!</h3>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt reiciendis minus quibusdam sequi blanditiis dolore, labore ipsam ipsa laborum, officia consequuntur delectus placeat sapiente. Sit suscipit repellat illo at inventore officia tenetur deserunt?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat corrupti magni ut maxime consequuntur quae delectus distinctio quo dolorum officia, nulla dolor, vero illo eligendi fugiat sit quisquam enim? Magnam non iure voluptatibus quisquam beatae, nihil aliquam similique ipsam, voluptatum vitae sint consectetur minima iusto explicabo quae soluta excepturi dignissimos? Dolores vel maxime alias, consequatur dicta earum iusto odio error harum illo! Odio maxime iusto soluta quaerat, quia ab, corrupti assumenda dolorem libero dolor dolorum itaque aut expedita earum. Repellat hic expedita ducimus, dolores facere in qui eos voluptatibus?</p>
				</article>
				
			</div>
		</div>
	</div>
	<Subscribe />
</div>
</template>
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