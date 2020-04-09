<template>
	<div>
		<div :class="$style.headerImage">
			<div class="d-flex flex-column">
				<PlanCard v-for="meal in meals" :key="meal.id" :meal="meal" />
			</div>
		</div>
	</div>
</template>

<script>
import PlanCard from '~/components/plans/PlanCard.vue';
export default {
	components: {
		PlanCard,
	},
	data: () => ({
		meals: [
			{ id: 1, title: 'Breakfast', calories: 1232 },
			{ id: 2, title: 'Lunch', calories: 1506 },
		],
	}),
};
</script>

<style module lang="scss">
.headerImage {
	height: 100vh;
	background-image: url('../assets/images/bgblur.png');
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
