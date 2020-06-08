<template>
	<b-container :class="$style.dietBox">
		<b-form-group
			class="mt-3"
			label-cols-sm="3"
			label-cols-lg="3"
			label="I want to eat"
			label-for="calories"
			:description="bmi"
		>
			<b-form-spinbutton
				id="calories"
				v-model="calorie"
				min="0"
				max="100000"
				step="100"
				inline
			/>
			<label for="calories">Calories</label>
			<b-link v-b-modal.question_form_modal class="ml-2">
				<i class="fas fa-calculator" /> Not sure?
			</b-link>
		</b-form-group>
		<b-form-group
			label-cols-sm="3"
			label-cols-lg="3"
			label="in"
			label-for="meal"
		>
			<b-form-select
				id="meal"
				v-model="mealSelected"
				:class="{ [$style.selectMeal]: true }"
				text-field="title"
				:options="mealOptions"
			/>
		</b-form-group>
		<b-button
			variant="success"
			:class="['my-3', $style.selectMeal]"
			@click="generatePlan"
		>
			Generate
		</b-button>
		<PlanGeneratorModal @update="setCalorie" />
	</b-container>
</template>

<script>
import PlanGeneratorModal from './PlanGeneratorModal';
import { getDietPlanAPI } from '~/services';

export default {
	components: {
		PlanGeneratorModal,
	},
	props: {
		plan: {
			type: Object,
			default: null,
		},
	},
	data: () => ({
		mealSelected: 'yevade',
		mealOptions: [
			{ title: '1 meal', value: 'yevade' },
			{ title: '2 meals', value: 'dovade' },
			{ title: '3 meals', value: 'sevade' },
		],
		calorie: 0,
		bmi: '',
	}),
	mounted() {
		if (this.plan && this.plan.dietCalorie) {
			this.calorie = this.plan.dietCalorie;
			this.mealSelected = this.plan.dietMeal;
			this.generatePlan();
		}
	},
	methods: {
		setCalorie(data) {
			this.calorie = data.calorie.calorie;
			this.bmi = `Your BMI status is " ${data.bmi.bmi_status} " and it's ${data.bmi.bmi_value}`;
		},
		generatePlan() {
			if (this.$route.name === 'index') {
				const payload = {
					calorie: this.calorie,
					meal: this.mealSelected,
				};
				this.$emit('update', payload);
			}

			getDietPlanAPI(this, this.mealSelected, this.calorie)
				.then(({ data: { diet } }) => {
					const meals = [];
					diet.forEach((item, index) => {
						if (index < diet.length - 1) {
							meals.push(item);
						}
					});
					this.$emit('plan', meals, diet[diet.length - 1]);
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
.dietBox {
	background-color: #ffffff;
	border-radius: 10px;
	max-width: 750px;
	padding: 10px;
	display: flex;
	flex-direction: column;
}

.foods {
	padding: 0px;
}

.items {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.image {
	width: 50px;
	height: 50px;
}
$desktop-width: 576px;
.selectMeal {
	margin: 0px auto;
	width: 50%;
	@media (max-width: #{$desktop-width}) {
		width: 100%;
	}
}
</style>
