<template>
<div>

	<section class="container section1">
		<div class="row">
			<div class="col-5 sideA">
				<h1>Аналитичекое бюро</h1>
				<p>Достигаем цели, фокусируясь на смысле. <br>Помогаем ясно и убедительно рассказать вашу идею с помощью логики, цифр и визуальных коммуникаций</p>
				<button class="btn_main btn_main-first">Обсудить проект</button>
			</div>
		</div>
	</section>

	<Section2 id="about"/>
	<Section3 id="services"/>
	<Section4 />
	<Section5 />
	<Section6 />
	<Section7 id="contacts"/>

</div>
</template>

<script>
import Section2 from '/components/index/Section2.vue'
import Section3 from '/components/index/Section3.vue'
import Section4 from '/components/index/Section4.vue'
import Section5 from '/components/index/Section5.vue'
import Section6 from '/components/index/Section6.vue'
import Section7 from '/components/index/Section7.vue'
export default {
	components: {
		Section2,
		Section3,
		Section4,
		Section5,
		Section6,
		Section7,
	},
	head() {
		return {
			title: "TheBand",
			link: [{ rel: "canonical", href: `https://theband.design${this.$route.path}` }],
			meta: [
				{	hid: "description",	name: "description", content: "TheBand"	},
				{	hid: "keywords", name: "keywords", content: "TheBand" },
				// { property: "og:title", content: this.content?.meta?.opengraph?.title },
				// {
				// property: "og:description",
				// content: this.content?.meta?.opengraph?.description,
				// },
				// { property: "og:image", content: this.content?.meta?.opengraph?.image },
				// { property: "og:type", content: this.content?.meta?.opengraph?.type },
				// { property: "og:url", content: this.content?.meta?.opengraph?.url },
			],
		};
	},
}
</script>

<style lang="sass">
section
	// border: 1px solid grey
	padding-top: 105px
	padding-bottom: 105px
	.section_title
		margin-bottom: 40px
	.section_subtitle
		margin-top: -20px
.section1
	.sideA
		p
			margin: 20px 0
		button
			margin: 40px 0
</style>
