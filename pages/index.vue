<template>
	<div>
		<div :class="$style.headerImage">
			<PlanGenerator @update="generatePlan" />
		</div>
	</div>
</template>

<script>
import PlanGenerator from '~/components/plan_generator/PlanGenerator.vue';

export default {
	components: { PlanGenerator },
	data: () => ({}),
	methods: {
		generatePlan(params) {
			this.$router.push({
				name: 'plan',
				params: {
					dietType: params.dietType,
					dietCalorie: params.calorie,
					dietMeal: params.meal,
				},
			});
		},
	},
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
	flex-direction: column;
}
</style>
