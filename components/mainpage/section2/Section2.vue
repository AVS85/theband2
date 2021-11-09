<template>
	<section class="wrapper">
		<div class="row">

			<div class="d-none d-lg-block col-lg-4">
				<aside class="desktop">
					<div
					class="item"
					:class="{active: i==activeIndex}"
					v-for="(item, i) in projectsList" :key="i"
					@click="onClickAsideItem(i)"
					>{{item.task}}</div>
				</aside>
			</div>

			<div class="d-lg-none col-12">
				<aside class="mobile">
					<div
					class="item" 
					:class="{isOpen: isShowDropDownList}"
					@click="isShowDropDownList = !isShowDropDownList"
					>
						{{activeProject.task}}
						<div class="dropdownlist__wrapper">

							<div class="dropdownlist"
							v-show="isShowDropDownList">
								<div
								class="dropdownlist__item"
								:class="{active: i==activeIndex}"
								v-for="(item, i) in projectsList" :key="i"
								@click.stop="onClickDropDownListItem(i)"
								>

								{{item.task}}
								</div>

							</div>
						</div>
					</div>
				</aside>
			</div>

			<div class="col-lg-8">
				<article>
					<div class="top__panel">
						<header class="d-none d-lg-block">{{activeProject.task || 0}}</header>
						<div class="gallery">
							<swiper ref="swTasks" :options="swOptions">
								<swiper-slide v-for="(item, i) in activeProject.imgs" :key="i">
									<img :src="item.img_link" alt="">
									<p>{{`${i+1}. ${item.title}`}}</p>
								</swiper-slide>
							</swiper>
						</div>
						<div class="buttons d-none d-lg-flex">
							<BtnArrow icon="prev" @onClick="prevSlide" />
							<BtnArrow	icon="next" @onClick="nextSlide" />
						</div>
					</div>

					<div class="middle_panel d-lg-none">
						<ProgressBar 
						type="dash"
						:count="progressBarItemsCount" 
						:activeindex="progressBarActiveIndex" 
						:progress="progress" />
					</div>

					<div class="bottom__panel">
						<div class="title">Проект в цифрах:</div>
						<div class="details">
							<div
							 class="detail"
							 v-for="(item, i) in activeProject.info" :key="i"
							 :class="item.icon"
							 v-html="item.desc" >
							</div>
						</div>

					</div>
				</article>
			</div>

		</div>	
	</section>
</template>



<script src="./Section2_js.js" />
<style  src="./Section2.sass" lang="sass" scoped />
