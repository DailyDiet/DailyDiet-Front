<template>
	<div>
		<div :class="$style.headerImage">
			<PlanGenerator
				v-scroll-spy-link="{ selector: 'button.selectMeal_1-g6P' }"
				:plan="$route.params"
				@update="generatePlan"
			/>
		</div>
		<div
			v-scroll-spy="{ data: 'section', offset: 50 }"
			:class="$style.dayPlanSection"
		>
			<b-container fluid class="d-flex flex-column align-items-center">
				<h1 class="mt-5">Today's Meal Plan</h1>

				<div class="d-flex flex-row justify-content-center">
					<b-card-group class="justify-content-center" deck>
						<PlanCard
							v-for="meal in meals"
							:key="meal.id"
							v-b-modal.recipe
							:meal="meal"
						/>
					</b-card-group>
				</div>
			</b-container>
		</div>
		<RecipeModal />
	</div>
</template>

<script>
import PlanCard from '~/components/plans/PlanCard.vue';
import PlanGenerator from '~/components/plan_generator/PlanGenerator.vue';
import RecipeModal from '~/components/recipe/RecipeModal.vue';

export default {
	components: {
		PlanCard,
		PlanGenerator,
		RecipeModal,
	},
	data: () => ({
		section: 0,
		meals: [
			{
				id: 1,
				title: 'Breakfast',
				calories: 169,
				image:
					'https://images.eatthismuch.com/site_media/img/474379_basic_bob_85fdce86-d113-4bd1-959e-e7063f32c8ae.png',
				name: 'Blueberries',
			},
			{
				id: 2,
				title: 'Lunch',
				calories: 235,
				image:
					'https://images.eatthismuch.com/site_media/img/331996_tabitharwheeler_85efa3b3-f132-4690-ad3b-2758f7af21de.jpg',
				name: 'Cucumber & Hummus',
			},
			{
				id: 3,
				title: 'Dinner',
				calories: 200,
				image:
					'https://images.eatthismuch.com/site_media/img/906295_Shamarie84_573150c9-b179-488b-8c75-67424b8c4087.png',
				name: 'Pan Fried Fennel',
			},
		],
	}),
	mounted() {
		if (this.$route.params && this.$route.params.dietType) {
			this.$scrollTo(0);
		}
	},
	methods: {
		generatePlan() {},
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
}
.dayPlanSection {
	height: 100vh;
}
</style>
