<template>
	<div v-scroll-spy="{ data: 'section' }">
		<div :class="$style.headerImage">
			<b-row class="m-0 w-100">
				<b-col lg="2" md="2" sm="1"></b-col>
				<b-col lg="5" md="5" sm="10" class="text-center">
					<h1>About Eat This Much</h1>
					<p style="font-size: 24px;">
						We're a small company focused on providing tools and
						support for people who want to take control over their
						nutrition. Given the saturation of information in the
						diet industry, we focus on more pragmatic elements of
						healthy eating such as planning, shopping and cooking.
					</p>
					<b-button id="next_section" @click="$scrollTo(1)">
						Lets start
					</b-button>
				</b-col>
				<b-col lg="5" md="5" sm="1"> </b-col>
			</b-row>
		</div>
		<div :class="$style.breaker">
			<PlanGenerator @update="generatePlan" @step="$scrollTo(2)" />
		</div>
		<div :class="$style.breakerImage">
			<b-row class="m-0 w-100">
				<b-col lg="6" md="2" sm="1"></b-col>
				<b-col lg="4" md="5" sm="10" class="text-center">
					<h3>Plase sign in or sign up</h3>
					<b-button @click="$router.push('login')">
						sign in / sign up
					</b-button>
				</b-col>
				<b-col lg="2" md="5" sm="1"> </b-col>
			</b-row>
		</div>
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
	background-color: #fff2d0;
	height: 100vh;
	background-image: url('../assets/images/p2.png');
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.breakerImage {
	height: 100vh;
	background-image: url('../assets/images/p3.png');
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.headerImage {
	height: 100vh;
	background-image: url('../assets/images/landing1.jpg');
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
