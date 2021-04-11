<template>
<section class="container index_section2">
	<div class="row justify-content-between">
		<div class="col-md-5">
			<h2 class="section_title">Главная ценность нашего дела в том, что сложное становится простым.</h2>
			<p class="section_subtitle text2">И клиентам это нравится</p>
		</div>
		<div class="col-md-6">
			<div class="items">
				<div class="item">
					<div class="title h1">82%</div>
					<div class="desc">клиентов считают классным, что мы челленджим идею в процессе работы</div>
				</div>
				<div class="item">
					<div class="title h1">90%</div>
					<div class="desc">ценят, что мы с нуля пересобираем логику и структуру презентации</div>
				</div>
				<div class="item">
					<div class="title h1">70%</div>
					<div class="desc">клиентов с помощью наших презентаций достигли своей цели</div>
				</div>
				<div class="item">
					<div class="title h1">55%</div>
					<div class="desc">возвращаются к нам снова</div>
				</div>
			</div>
		</div>
	</div>
	</section>
</template>

<style lang="sass">
.index_section2
	.items
		display: flex
		flex-wrap: wrap
		.item
			// border: 1px solid grey
			width: calc(50% - 30px)
			margin: 15px
			@media (max-width: 998px)
				width: 100%
				margin: 15px 0

			.title
				font-weight: 900
			.desc
				font-style: normal
				font-weight: normal
				font-size: 15px
				line-height: 20px
</style>