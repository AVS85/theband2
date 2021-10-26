<template>
	<section class="wrapper">
		<div class="row">

			<div class="col-4">
				<aside class="issuesToSolve">
					<div
					class="item"
					:class="{active: i==activeIndex}"
					v-for="(item, i) in projectsList" :key="i"
					@click="activeIndex = i"
					>{{item.task}}</div>
				</aside>
			</div>

			<div class="col-8">
				<article>
					<div class="top__panel">
						<header>{{activeProject.task || 0}}</header>
						<div class="gallery">
							<swiper ref="swTasks" :options="swOptions">
								<swiper-slide v-for="(item, i) in activeProject.imgs" :key="i">
									<img :src="item.img_link" alt="">
									<p>{{`${i+1}. ${item.title}`}}</p>
								</swiper-slide>
							</swiper>
						</div>
						<div class="buttons">
							<BtnArrow icon="prev" @onClick="prevSlide" />
							<BtnArrow	icon="next" @onClick="nextSlide" />
						</div>
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
