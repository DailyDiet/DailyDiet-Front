<template>
	<div>
		<b-card
			:class="[$style.mealCard, 'mt-5']"
			style="width: 320px;"
			@click="$emit('update', meal.id)"
		>
			<template #header>
				<div class="d-flex align-items-center justify-content-between">
					<div>
						<div :class="$style.maelTitle">{{ meal.title }}</div>
						<div :class="$style.extra">
							{{ meal.nutrition.calories }} Calories
						</div>
					</div>
					<div>
						<b-icon-info-circle id="nutrition" />
						<b-tooltip target="nutrition" placement="right">
							<p
								v-for="(item, index) in renderNutrition"
								:key="index"
								class="m-0"
							>
								{{ item[0] }} : {{ item[1] }}
							</p>
						</b-tooltip>
					</div>
				</div>
			</template>
			<b-card-body class="p-0">
				<b-img
					:src="meal.image || placeholder"
					rounded
					center
					:width="278"
					:height="208"
				/>
			</b-card-body>
		</b-card>
	</div>
</template>

<script>
export default {
	props: {
		meal: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		placeholder:
			'https://snappfood.ir/bundles/bodofoodfrontend/images/vendor/placeholder-new.jpg',
	}),
	computed: {
		renderNutrition() {
			const nutrition = Object.entries(this.meal.nutrition);
			return nutrition;
		},
	},
};
</script>

<style module lang="scss">
.extra {
	text-overflow: ellipsis;
	font-size: 12px;
	color: #9c9c9c;
	line-height: 12px;
	font-weight: normal;
	padding-top: 5px;
}
.mealCard {
	&:hover {
		cursor: pointer;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
	}
}

.maelTitle {
	width: 200px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
