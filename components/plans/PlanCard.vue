<template>
	<div>
		<b-card
			:class="[$style.mealCard, 'mt-5']"
			style="width: 320px;"
			@click="$emit('update')"
		>
			<template #header>
				<div class="d-flex align-items-center justify-content-between">
					<div>
						<div>{{ meal.title }}</div>
						<div :class="$style.extra">
							{{ meal.calories }} Calories
						</div>
					</div>
					<div>
						<b-icon-info-circle />
					</div>
				</div>
			</template>
			<b-img fluid :src="meal.image" rounded />
			<b-card-text :class="[$style.extra, 'text-center']">
				{{ meal.name }}
			</b-card-text>
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
</style>
