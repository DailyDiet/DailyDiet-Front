<template>
	<div>
		<div :class="$style.headerImage">
			<PlanGenerator @update="generatePlan" />
		</div>
		<div :class="$style.breaker"></div>
		<div :class="$style.breakerImage"></div>
	</div>
</template>

<script>
import PlanGenerator from '~/components/plan_generator/PlanGenerator.vue';

export default {
	components: { PlanGenerator },
	methods: {
		generatePlan(params) {
			this.$router.push({
				name: 'plan',
				params: {
					dietCalorie: params.calorie,
					dietMeal: params.meal,
				},
			});
		},
	},
};
</script>

<style module lang="scss">
.breaker {
	background-color: #343a40;
	height: 50vh;
}
.breakerImage {
	height: 60vh;
	background-image: url('../assets/images/friners.jpg');
	background-size: cover;

	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.headerImage {
	height: 100vh;
	background-image: url('../assets/images/bgblur.png');
	background-size: cover;

	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
