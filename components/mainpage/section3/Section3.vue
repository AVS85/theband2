<template>
	<section class="wrapper">
		<div class="row services"
		v-for="(el,i) in servicesList" :key="i">

				<div class="col-4">
					<div class="title"
					:class="el.iconClass">
						{{el.title}}
						<div class="subtitle">{{el.subtitle}}</div>
					</div>
				</div>
				<div class="col-6">
					<div class="desc" v-html="el.subtitle"></div>
				</div>
				<div class="col-2">
					<div class="cost">от {{el.price}}&#8381;</div>
				</div>

		</div>
	</section>
</template>

<style  src="./Section3.sass" lang="sass" scoped />
<script src="./Section3js.js" />
