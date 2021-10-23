<template>
<section class="wrapper">
	<div class="row">
		<div class="col-12">
			<swiper ref="swPortfolio" :options="swOptions_portfolio">
				<swiper-slide  
				v-for="(item, i) in projectsItems" :key="i">
					<div class="slide_img"
					:style="`background-image: url('${item.imgs[0].img_link}')`">
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div class="control">
				<div class="buttons">
					<BtnArrow icon="prev" @onClick="nextSlide" />
					<BtnArrow	icon="next" @onClick="nextSlide" />
				</div>
				<div class="pb">
					<ProgressBar :progress="progress" />
				</div>
			</div>
		</div>
	</div>
</section>
</template>

<style  src="./Section5.sass" lang="sass" scoped />
<script src="./Section5js.js" />