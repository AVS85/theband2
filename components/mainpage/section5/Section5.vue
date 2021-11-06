<template>
<section class="wrapper">
	<Popup
	v-if="isShowZoom"
	@closePopup="isShowZoom = !isShowZoom">
		<div class=" popupGallery">
			<swiper 
			:options="{...swOptions_portfolio_popup, initialSlide: clickedIndex}">
				<swiper-slide v-for="(item, i) in projectsItems" :key="i"
				:style="`background-image: url('${item.imgs[0].img_link}')`">
				</swiper-slide>
			</swiper>
		</div>
	</Popup>

	<div class="wrapperBtnConnected__top d-none d-md-block">
		<BtnMain 
		type="type1"
		title="Связаться" @onClick="scrollToContactForm" />
	</div>

	<div class="row">
		<div class="col-12">
			<div class="mainGallery">

				<swiper ref="swPortfolio" :options="swOptions_portfolio">
					<swiper-slide  
					v-for="(item, i) in projectsItems" :key="i">
						<div class="innerSlideWrapper">
							<img 
							:src="`${item.imgs[0].img_link}`"
							alt="">
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div class="control">
				<div class="buttons">
					<BtnArrow icon="prev" @onClick="prevSlide" />
					<BtnArrow	icon="next" @onClick="nextSlide" />
				</div>
				<div class="pb">
					<ProgressBar :progress="progress" />
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col d-md-none">
			<div class="wrapperBtnConnected__bottom">
				<BtnMain title="Связаться" @onClick="scrollToContactForm" />
			</div>
		</div>
	</div>
</section>
</template>

<style  src="./Section5.sass" lang="sass" scoped />
<script src="./Section5js.js" />