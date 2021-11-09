<template>
<section class="wrapper">
	<Popup
	v-if="isShowZoom"
	@closePopup="isShowZoom = !isShowZoom">
		<div class="popupGallery">
			<swiper 
			:options="{...swOptions_portfolio_popup, initialSlide: clickedIndex}">
				<swiper-slide v-for="(item, i) in projectsItems" :key="i"
				:style="`background-image: url('${item.imgs[0].img_link}')`">
				</swiper-slide>
			</swiper>
	    <div class="swButton_popup next">
				<!-- <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg> -->
			</div> 
  		<div class="swButton_popup prev">
				<!-- <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg> -->
			</div> 
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