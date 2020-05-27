<template>
	<div>
		<div :class="$style.headerImage">
			<PlanGenerator
				v-scroll-spy-link="{ selector: 'button.selectMeal_1-g6P' }"
				:plan="$route.params"
				@plan="setPlan"
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
							v-for="food in foods"
							:key="food.id"
							:meal="food"
							@update="getFoodRecipe"
						/>
					</b-card-group>
				</div>
			</b-container>
		</div>
		<RecipeModal :show="show" :reciped="recipe" @close="closeRecipeModal" />
	</div>
</template>

<script>
import PlanCard from '~/components/plans/PlanCard.vue';
import PlanGenerator from '~/components/plan_generator/PlanGenerator.vue';
import RecipeModal from '~/components/recipe/RecipeModal.vue';
import { getRecipeAPI } from '~/services';

export default {
	components: {
		PlanCard,
		PlanGenerator,
		RecipeModal,
	},
	data: () => ({
		section: 0,
		show: false,
		meals: [],
		recipe: null,
		foods: [],
	}),
	mounted() {
		if (this.$route.params && this.$route.params.dietType) {
			this.$scrollTo(0);
		}
	},
	methods: {
		setPlan(foods) {
			this.foods = foods;
		},
		closeRecipeModal() {
			this.show = false;
		},
		getFoodRecipe(id) {
			getRecipeAPI(this, id)
				.then(({ data }) => {
					this.show = true;
					this.recipe = data;
				})
				.catch(err => {
					console.error(err);
					this.$toastErrors(err);
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
}
.dayPlanSection {
	height: 100vh;
}
</style>
