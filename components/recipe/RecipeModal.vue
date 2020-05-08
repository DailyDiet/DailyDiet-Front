<template>
	<b-modal
		id="recipe"
		:title="recipe.food_name"
		size="lg"
		centered
		hide-footer
	>
		<div style="padding: 0px 20px;">
			<b-row>
				<b-col cols="12" md="3" sm="6">
					<b-img
						:src="recipe.primary_image"
						rounded
						fluid
						center
						:class="$style.image"
					/>
				</b-col>
				<b-col cols="12" sm="6">
					<b-row>
						<b-col cols="6" style="padding-top: 10px;">
							<b-img
								:src="
									require('~/assets/images/icon-mortar-pestle.png')
								"
								width="25"
								height="25"
							/>
							{{ recipe.prep_time }} mins to prep
						</b-col>
						<b-col cols="6" style="padding-top: 10px;">
							<b-img
								:src="
									require('~/assets/images/icon-frying-pan.png')
								"
								width="25"
								height="25"
							/>
							{{ recipe.cook_time }} mins to cook
						</b-col>
					</b-row>
				</b-col>
			</b-row>
			<b-tabs class="mt-5" fill>
				<b-tab title="Ingredients" active>
					<div
						v-for="(ingredient, index) in recipe.ingredients"
						:key="index"
						:class="$style.foodItem"
					>
						<b-row>
							<b-col cols="4" :class="$style.foodColumn">
								<b-img
									width="50"
									height="50"
									fluid
									rounded
									:src="ingredient.food.primary_thumbnail"
								/>
							</b-col>
							<b-col cols="8">
								<b-row>
									<b-col cols="6">
										<div>
											{{ ingredient.food.food_name }}
										</div>
										<div :class="$style.extra">
											{{ ingredient.preparation }}
										</div>
									</b-col>
									<b-col cols="6">
										<div>
											{{ ingredient.amount }}
											{{ ingredient.units }}
										</div>
										<div :class="$style.extra">
											{{ ingredient.grams }} grams
										</div>
									</b-col>
								</b-row>
							</b-col>
						</b-row>
					</div>
				</b-tab>
				<b-tab title="Directions">
					<b-row>
						<b-col cols="12">
							<b-row
								v-for="(direction, index) in recipe.directions"
								:key="index"
								cols="12"
								:class="$style.directions"
							>
								<b-col md="2">Step {{ index + 1 }}</b-col>
								<b-col md="10">
									{{ direction.text }}
								</b-col>
								<hr />
							</b-row>
						</b-col>
					</b-row>
				</b-tab>
			</b-tabs>
		</div>
	</b-modal>
</template>
<script>
export default {
	props: {
		dietType: {
			type: String,
			default: 'Anything',
		},
	},
	data: () => ({
		recipe: {
			id: 906370,
			food_name: 'Easy Sautéed Eggplant ',
			prep_time: 10,
			cook_time: 10,
			description: '',
			tag_cloud:
				'Olive oil "Easy Sautéed Eggplant " Spices and Herbs Vegetables and Vegetable Products Garlic Eggplant Fats and Oils Salt',
			servings: 4,
			category: null,
			images: [
				{
					id: 100318,
					image:
						'https://images.eatthismuch.com/site_media/img/906370_simmyras_91bd4f02-fc6e-406b-b228-e0727c80cdda.png',
					thumbnail:
						'https://images.eatthismuch.com/site_media/thmb/906370_simmyras_91bd4f02-fc6e-406b-b228-e0727c80cdda.png',
				},
				{
					id: 177248,
					image:
						'https://images.eatthismuch.com/site_media/img/906370_jaxxy7_f71a4b96-b19b-4394-afdb-ccd1d9dd6665.jpg',
					thumbnail:
						'https://images.eatthismuch.com/site_media/thmb/906370_jaxxy7_f71a4b96-b19b-4394-afdb-ccd1d9dd6665.jpg',
				},
				{
					id: 276463,
					image:
						'https://images.eatthismuch.com/site_media/img/906370_tabitharwheeler_dc6ccb76-90cd-4716-8523-8d6807aabe52.jpg',
					thumbnail:
						'https://images.eatthismuch.com/site_media/thmb/906370_tabitharwheeler_dc6ccb76-90cd-4716-8523-8d6807aabe52.jpg',
				},
			],
			primary_image:
				'https://images.eatthismuch.com/site_media/img/906370_tabitharwheeler_dc6ccb76-90cd-4716-8523-8d6807aabe52.jpg',
			primary_thumbnail:
				'https://images.eatthismuch.com/site_media/thmb/906370_tabitharwheeler_dc6ccb76-90cd-4716-8523-8d6807aabe52.jpg',
			source: 'eatthismuch.com',
			author_id: 1,
			date_created: '2017-11-21 15:23:28',
			nutrition: {
				calories: 126.7,
				carbs: 1.7,
				fats: 13.54,
				proteins: 0.3,
			},
			directions: [
				{
					id: 742032,
					text: 'Peel eggplant and cut into half-inch dice.',
				},
				{
					id: 742033,
					text:
						'Coat large skillet with olive oil over medium-high heat. Sauté eggplant cubes for 4-5 minutes, until tender.',
				},
				{
					id: 742034,
					text:
						'Add minced garlic and toss for a couple of minutes. Remove from heat.',
				},
				{
					id: 742035,
					text: 'Salt to taste.',
				},
				{
					id: 742036,
					text: 'Can be served hot or cold; enjoy!',
				},
			],
			ingredients: [
				{
					amount: 1,
					preparation: 'Cubes raw',
					units: 'cup, cubes',
					grams: 82,
					food: {
						food_name: 'Eggplant',
						primary_thumbnail:
							'https://images.eatthismuch.com/site_media/thmb/1975_erin_m_0ced66fb-605f-4cde-b20b-37d9786d88f4.png',
						nutrition: {
							calories: 20.5,
							carbs: 4.82,
							fats: 0.15,
							proteins: 0.8,
						},
					},
				},
				{
					amount: 4,
					preparation: 'Salad or cooking',
					units: 'tbsp',
					grams: 54,
					food: {
						food_name: 'Olive oil',
						primary_thumbnail:
							'https://images.eatthismuch.com/site_media/thmb/266_erin_m_4ba6ff1c-ff73-4e96-a5b3-b844d24d3719.png',
						nutrition: {
							calories: 119.34,
							carbs: 0,
							fats: 13.5,
							proteins: 0,
						},
					},
				},
				{
					amount: 2,
					preparation: 'Minced raw',
					units: 'cloves, minced',
					grams: 6,
					food: {
						food_name: 'Garlic',
						primary_thumbnail:
							'https://images.eatthismuch.com/site_media/thmb/1980_erin_m_f98b5b4d-2a03-4d86-b3bd-e5d021da7ab3.png',
						nutrition: {
							calories: 202.64,
							carbs: 44.96,
							fats: 0.68,
							proteins: 8.65,
						},
					},
				},
				{
					amount: 1,
					preparation: null,
					units: 'dash',
					grams: 0.4,
					food: {
						food_name: 'Salt',
						primary_thumbnail:
							'https://images.eatthismuch.com/site_media/thmb/221_ldementhon_f6cf3157-e6a4-49a4-97b7-40c5bc5b1403.jpg',
						nutrition: {
							calories: 0,
							carbs: 0,
							fats: 0,
							proteins: 0,
						},
					},
				},
			],
		},
	}),
	computed: {
		maxProgress() {
			const nutrition = this.recipe.nutrition;

			return (
				nutrition.calories +
				nutrition.carbs +
				nutrition.fats +
				nutrition.proteins
			);
		},
	},
};
</script>
<style module lang="scss">
.directions {
	border-bottom: 1px solid rgba(128, 128, 128, 0.5);
	padding: 10px 0px;
}
.image {
	max-height: 350px;
}
.items {
	display: flex;
	flex-wrap: nowrap;
	margin: 10px;
	margin-left: 0px;
	margin-right: 0px;
}
.foodColumn {
	display: flex;
	align-items: center;
}
.foodItem {
	margin: 5px;
	padding: 10px;
	border-radius: 8px;
	transition: 200ms;
	&:hover {
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
	}
}
.foodImage {
	min-width: 50px;
	flex: 0 0 50px;
	position: relative;
}
.extra {
	text-overflow: ellipsis;
	font-size: 12px;
	color: #9c9c9c;
	line-height: 12px;
	font-weight: normal;
	padding-top: 5px;
}
</style>
