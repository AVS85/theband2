<template>
	<section class="wrapper">

		<!-- mobile -->
		<div class="row d-md-none">
			<div class="col-12">
				<swiper ref="swServices" :options="swOptions">
					<swiper-slide  
					v-for="(el,i) in servicesList" :key="i">
						<div class="services">

							<div class="title"
							:class="el.iconClass">
								{{el.title}}
								<div class="subtitle">{{el.subtitle}}</div>
							</div>
							
							<div class="price">
								<div class="value">
									от
									<span>{{parseInt(el.price).toLocaleString()}}&#8381;</span>
								</div>
								<button></button>
							</div>

							<div class="desc" v-html="el.descHhtml"></div>

						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="col">
				<div class="control">
					<div class="pb">
						<ProgressBar :progress="progress" />
					</div>
					<div class="buttons">
						<BtnArrow icon="prev" @onClick="prevSlide" />
						<BtnArrow	icon="next" @onClick="nextSlide" />
					</div>
				</div>
			</div>
		</div>



		<!-- desktop -->
		<div class="row services d-none d-md-flex"
		v-for="(el,i) in servicesList" :key="i">
				<div class="col-lg-4">
					<div class="title"
					:class="el.iconClass">
						{{el.title}}
						<div class="subtitle">{{el.subtitle}}</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="desc" v-html="el.descHhtml"></div>
				</div>
				<div class="col-lg-2">
					<div class="price">
						<div class="value">
							от
							<span>{{parseInt(el.price).toLocaleString()}}&#8381;</span>
						</div>
						<button></button>
					</div>
				</div>
		</div>

	</section>
</template>

<style  src="./Section3.sass" lang="sass" scoped />
<script src="./Section3js.js" />
