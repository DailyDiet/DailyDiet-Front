<template>
	<b-container :class="$style.dietBox">
		<b-row>
			<b-col
				v-for="item in filterOptions"
				:key="`diet_category_${item.id}`"
				:class="$style.foods"
				cols="4"
				sm="2"
			>
				<PlanGeneratorSelector
					v-model="activePlan"
					:plan-name="item.title"
				>
					<template #content>
						<div :class="$style.items">
							<img
								:src="
									require(`../../assets/images/filter-diet/${item.imageUrl}.png`)
								"
								:class="$style.image"
								:alt="item.title"
							/>
							<span style="font-size: 13px;">{{
								item.title
							}}</span>
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
		>
			<b-form-spinbutton
				id="calories"
				v-model="value"
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
				v-model="selectedMeal"
				:class="{ [$style.selectMeal]: true }"
				text-field="title"
				:options="mealsOptions"
			/>
		</b-form-group>
		<b-button
			variant="success"
			:class="{ ['my-3']: true, [$style.selectMeal]: true }"
			style="margin: 0px auto;"
			@click="generatePlan"
		>
			Generate
		</b-button>
		<PlanGeneratorModal />
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
	data: () => ({
		filterOptions: [
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
		mealsOptions: [
			{ title: '1 meal', value: 1 },
			{ title: '2 meals', value: 2 },
			{ title: '3 meals', value: 3 },
			{ title: '4 meals', value: 4 },
			{ title: '5 meals', value: 5 },
			{ title: '6 meals', value: 6 },
			{ title: '7 meals', value: 7 },
			{ title: '8 meals', value: 8 },
			{ title: '9 meals', value: 9 },
		],
		selectedMeal: 1,
		activePlan: '',
		value: 0,
	}),
	methods: {
		generatePlan() {
			this.$router.push('plan');
		},
	},
};
</script>

<style module lang="scss">
.dietBox {
	background-color: #ffffff;
	border-radius: 10px;
	max-width: 750px;
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
	width: 50%;
	@media (max-width: #{$desktop-width}) {
		width: 100%;
	}
}
.generateButton {
}
</style>
