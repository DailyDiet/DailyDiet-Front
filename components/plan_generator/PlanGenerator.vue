<template>
	<b-container :class="$style.dietBox">
		<b-row>
			<b-col
				v-for="dietType in dietTypeOptions"
				:key="`diet_type_${dietType.id}`"
				:class="$style.foods"
				cols="4"
				sm="2"
			>
				<PlanGeneratorSelector
					v-model="dietTypeSelected"
					:plan-name="dietType.title"
				>
					<template #content>
						<div :class="$style.items">
							<img
								:src="
									require(`~/assets/images/filter-diet/${dietType.imageUrl}.png`)
								"
								:class="$style.image"
								:alt="dietType.title"
							/>
							<span style="font-size: 13px;">
								{{ dietType.title }}
							</span>
						</div>
					</template>
				</PlanGeneratorSelector>
			</b-col>
		</b-row>
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
		<b-button
			variant="success"
			:class="['my-3', $style.selectMeal]"
			@click="generatePlan"
		>
			Generate
		</b-button>
		<PlanGeneratorModal
			:diet-type="dietTypeSelected"
			@update="setCalorie"
		/>
	</b-container>
</template>

<script>
import PlanGeneratorModal from './PlanGeneratorModal';
import PlanGeneratorSelector from './PlanGeneratorSelector';

export default {
	components: {
		PlanGeneratorSelector,
		PlanGeneratorModal,
	},
	props: {
		plan: {
			type: Object,
			default: null,
		},
	},
	data: () => ({
		dietTypeSelected: 'Anything',
		dietTypeOptions: [
			{
				id: 1,
				title: 'Anything',
				imageUrl: 'icon-sandwich',
			},
			{
				id: 2,
				title: 'Paleo',
				imageUrl: 'icon-paleo-diet',
			},
			{
				id: 3,
				title: 'Vegetarian',
				imageUrl: 'icon-broccoli',
			},
			{
				id: 4,
				title: 'Vegan',
				imageUrl: 'icon-vegan-symbol',
			},
			{
				id: 5,
				title: 'Ketogenic',
				imageUrl: 'icon-no-gluten',
			},
			{
				id: 6,
				title: 'Mediterranean',
				imageUrl: 'icon-olive',
			},
		],
		calorie: 0,
		bmi: '',
	}),
	mounted() {
		if (this.plan && this.plan.dietType) {
			this.dietTypeSelected = this.plan.dietType;
			this.calorie = this.plan.dietCalories;
		}
	},
	methods: {
		setCalorie(data) {
			this.calorie = data.calorie.calorie;
			this.bmi = `Your BMI status is " ${data.bmi.bmi_status} " and it's ${data.bmi.bmi_value}`;
		},
		generatePlan() {
			const payload = {
				dietType: this.dietTypeSelected,
				calories: this.calorie,
			};
			this.$emit('update', payload);
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
