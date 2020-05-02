<template>
	<b-modal id="recipe" title="Savory Crêpes" size="lg" centered>
		<div style="padding: 0px 20px;">
			<b-row>
				<b-col cols="12" md="3" sm="6">
					<b-img
						src="https://images.eatthismuch.com/site_media/img/925217_tabitharwheeler_10cee3d7-37af-4e6e-a1dd-1ba0e5988c77.jpg"
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
							10 mins to prep
						</b-col>
						<b-col cols="6" style="padding-top: 10px;">
							<b-img
								:src="
									require('~/assets/images/icon-frying-pan.png')
								"
								width="25"
								height="25"
							/>
							10 mins to cook
						</b-col>
					</b-row>
				</b-col>
			</b-row>
			<b-tabs class="mt-5" fill>
				<b-tab title="First" active>
					<div :class="$style.foodItem">
						<b-row>
							<b-col cols="4" :class="$style.foodColumn">
								<b-img
									width="50"
									height="50"
									fluid
									rounded
									src="https://images.eatthismuch.com/site_media/thmb/103_erin_m_f93c90cc-69c9-43cd-af35-349fefaa1b40.png"
								/>
							</b-col>
							<b-col cols="8">
								<b-row>
									<b-col cols="6">
										<div>Egg</div>
										<div :class="$style.extra">
											Whole, fresh eggs
										</div>
									</b-col>
									<b-col cols="6">
										<div>2 extra large</div>
										<div :class="$style.extra">
											112 grams
										</div>
									</b-col>
								</b-row>
							</b-col>
						</b-row>
					</div>
					<div :class="$style.foodItem">
						<b-row>
							<b-col cols="4" :class="$style.foodColumn">
								<b-img
									width="50"
									height="50"
									fluid
									rounded
									src="https://images.eatthismuch.com/site_media/thmb/103_erin_m_f93c90cc-69c9-43cd-af35-349fefaa1b40.png"
								/>
							</b-col>
							<b-col cols="8">
								<b-row>
									<b-col cols="6">
										<div>Egg</div>
										<div :class="$style.extra">
											Whole, fresh eggs
										</div>
									</b-col>
									<b-col cols="6">
										<div>2 extra large</div>
										<div :class="$style.extra">
											112 grams
										</div>
									</b-col>
								</b-row>
							</b-col>
						</b-row>
					</div>
					<div :class="$style.foodItem">
						<b-row>
							<b-col cols="4" :class="$style.foodColumn">
								<b-img
									width="50"
									height="50"
									fluid
									rounded
									src="https://images.eatthismuch.com/site_media/thmb/103_erin_m_f93c90cc-69c9-43cd-af35-349fefaa1b40.png"
								/>
							</b-col>
							<b-col cols="8">
								<b-row>
									<b-col cols="6">
										<div>Egg</div>
										<div :class="$style.extra">
											Whole, fresh eggs
										</div>
									</b-col>
									<b-col cols="6">
										<div>2 extra large</div>
										<div :class="$style.extra">
											112 grams
										</div>
									</b-col>
								</b-row>
							</b-col>
						</b-row>
					</div>
				</b-tab>
				<b-tab title="Second">
					<b-row>
						<b-col cols="12">
							<b-row
								v-for="(direction, index) in directions"
								:key="index"
								cols="12"
								:class="$style.directions"
							>
								<b-col md="2">{{ direction.step }}</b-col>
								<b-col md="10">
									{{ direction.description }}
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
		directions: [
			{
				step: 'Step 1',
				description:
					'In a large bowl combine all the ingredients and mix on high until smooth. Let the mixture sit for a few minutes or store in the fridge overnight for an easy breakfast (the mixture thickens a little).',
			},
			{ step: 'Step 2', description: 'Stir again just before using.' },
			{
				step: 'Step 3',
				description:
					'Heat a large cast iron skillet onto medium high. Have a pot holder close by (the handle gets very hot).',
			},
			{
				step: 'Step 4',
				description:
					'Pour a few tablespoons of the batter into the well greased skillet. With the pot holder on your hand, swirl the dough all around the pan to have a very thin layer of batter that covers the whole pan.',
			},
			{
				step: 'Step 5',
				description:
					'Cook for 2 minutes or until golden brown and cooked all the way through.',
			},
			{
				step: 'Step 6',
				description:
					'Remove from skillet and fill with desired fillings before rolling up. Enjoy!',
			},
		],
	}),
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
