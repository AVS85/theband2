<template>
	<section class="wrapper">

		<aside class="issuesToSolve">
			<div
			class="item"
			:class="{active: i==activeIndex}"
			v-for="(item, i) in alltTypeList" :key="i"
			@click="activeIndex = i"
			>{{item.title}}</div>
		</aside>


		<article>
			<div class="top__panel">

				<header>{{activeItem.title}}</header>

				<div class="gallery">


					<!-- <swiper ref="swServices" :options="swServicesOptions">
						<swiper-slide v-for="(item, i) in alltTypeList" :key="i">
								{{i}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque autem pariatur cumque ullam. Qui molestiae harum cupiditate ratione eum optio quam atque pariatur non provident. Omnis rem ipsam id perspiciatis?
								Consequatur, reprehenderit placeat voluptatem quaerat libero recusandae corporis aperiam illo aspernatur officia deserunt delectus esse reiciendis eaque ipsam numquam quo quod, at mollitia. Culpa corporis quaerat non odio rerum autem.
						</swiper-slide>
					</swiper> -->


				</div>

				<div class="buttons">
					<BtnArrow icon="prev" />
					<BtnArrow	icon="next" />
				</div>

			</div>

			<div class="bottom__panel">
				<div class="title">Проект в цифрах:</div>
				<div class="details">
					<div class="detail icon1">
						<!-- <div class="icon icon1" /> -->
							<span>26 слайдов</span>
					</div>
					<div class="detail icon2">
						<!-- <div class="icon icon2" /> -->
							<span>12 дней</span> на реализацию
					</div>
					<div class="detail icon3">
						<!-- <div class="icon icon3" /> -->
							<span>9 человек</span> в команде проекта
					</div>
				</div>
			</div>
		</article>

	</section>
</template>



<script src="./Section2_js.js" />
<style  src="./Section2.sass" lang="sass" scoped />
