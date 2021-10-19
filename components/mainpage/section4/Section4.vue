<template>
	<section class="wrapper">
		<div class="row services"
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
