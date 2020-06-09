<template>
	<b-modal id="question_form_modal" title="Nutrition calculator" size="lg">
		<b-overlay :show="show" rounded="lg">
			<b-form @submit.prevent="calculateBmi">
				<b-form-group
					label-cols-lg="4"
					label="I want to"
					label-for="goal"
					style="white-space: nowrap;"
				>
					<b-form-radio-group
						id="goal"
						v-model="goalSelected"
						class="w-100"
						:options="goalOptions"
						button-variant="outline-primary"
						buttons
					/>
				</b-form-group>
				<b-form-group label-cols-lg="4" label="I am" label-for="gender">
					<b-form-radio-group
						id="gender"
						v-model="genderSelected"
						class="w-100"
						:options="genderOptions"
						button-variant="outline-primary"
						buttons
					/>
				</b-form-group>
				<b-form-group
					label-cols-lg="4"
					label="Height"
					label-for="height"
				>
					<b-row>
						<b-col lg="6" sm="12">
							<b-input-group>
								<template #append>
									<b-input-group-text
										:class="$style.unitLabel"
									>
										<strong>cm</strong>
									</b-input-group-text>
								</template>
								<b-form-input
									id="height"
									v-model="height"
									:class="$style.pairBtn"
									required
								/>
							</b-input-group>
						</b-col>
					</b-row>
				</b-form-group>
				<b-form-group
					label-cols-lg="4"
					label="Weight"
					label-for="weight"
				>
					<b-row>
						<b-col lg="6" sm="12">
							<b-input-group>
								<template #append>
									<b-input-group-text
										:class="$style.unitLabel"
									>
										<strong>kg</strong>
									</b-input-group-text>
								</template>
								<b-form-input
									id="weight"
									v-model="weight"
									:class="$style.pairBtn"
									required
								/>
							</b-input-group>
						</b-col>
					</b-row>
				</b-form-group>
				<b-form-group label-cols-lg="4" label="Age" label-for="age">
					<b-row>
						<b-col lg="6" sm="12">
							<b-input-group>
								<template #append>
									<b-input-group-text
										:class="$style.unitLabel"
									>
										<strong>years</strong>
									</b-input-group-text>
								</template>
								<b-form-input
									id="age"
									v-model="age"
									:class="$style.pairBtn"
									required
								/>
							</b-input-group>
						</b-col>
					</b-row>
				</b-form-group>
				<b-form-group
					label-cols-lg="4"
					label="Activity level"
					label-for="activityLeve"
				>
					<b-form-select
						id="activityLeve"
						v-model="activitySelected"
						:options="activityOptions"
					/>
				</b-form-group>
				<div class="w-100 d-flex justify-content-center">
					<b-button variant="primary" class="mt-4 w-50" type="submit">
						<i class="fas fa-calculator" /> Calculate
					</b-button>
				</div>
			</b-form>
			<template #overlay>
				<div class="text-center">
					<b-icon
						icon="stopwatch"
						font-scale="3"
						animation="cylon"
					></b-icon>
					<p id="cancel-label">Please wait...</p>
				</div>
			</template>
		</b-overlay>
		<template #modal-footer>
			<div class="w-100">
				<b-button
					variant="outline-primary"
					size="sm"
					class="float-right"
					@click="$bvModal.hide('question_form_modal')"
				>
					Close
				</b-button>
			</div>
		</template>
	</b-modal>
</template>
<script>
import { calculateCalorieAPI, calculateBmiAPI } from '~/services';
export default {
	data: () => ({
		show: false,
		dataEmited: {},

		goalSelected: 'maintain',
		goalOptions: [
			{ text: 'Lose weight', value: 'lose_weight' },
			{ text: 'Maintain', value: 'maintain' },
			{ text: 'Build muscle', value: 'build_muscle' },
		],
		genderSelected: 'male',
		genderOptions: [
			{ text: 'Male', value: 'male' },
			{ text: 'Female', value: 'female' },
		],
		height: '',
		weight: '',
		age: '',
		activitySelected: 'sedentary',
		activityOptions: [
			{ text: 'Little or no exercise', value: 'sedentary' },
			{
				text: 'Sports 1-3 days/week',
				value: 'lightly',
			},
			{
				text: 'Sports 3-5 days/week',
				value: 'moderately',
			},
			{
				text: 'Sports 6-7 days a week',
				value: 'very',
			},
			{
				text: 'Sports & Physical job or 2x training',
				value: 'extra',
			},
		],
	}),
	methods: {
		calculateCalorie() {
			const payload = {
				goal: this.goalSelected,
				gender: this.genderSelected,
				height: this.height,
				weight: this.weight,
				age: this.age,
				activity: this.activitySelected,
			};
			calculateCalorieAPI(this, payload)
				.then(({ data }) => {
					this.dataEmited.calorie = data;
					this.$emit('update', this.dataEmited);
					this.$bvModal.hide('question_form_modal');
				})
				.catch(err => {
					console.error(err);
					this.$bvToast.toast(err, {
						title: 'Error',
						variant: 'danger',
						solid: true,
					});
				})
				.finally(() => {
					this.show = false;
				});
		},
		calculateBmi() {
			this.show = true;
			const payload = {
				height: this.height,
				weight: this.weight,
			};
			calculateBmiAPI(this, payload)
				.then(({ data }) => {
					this.dataEmited.bmi = data;
					this.calculateCalorie();
				})
				.catch(err => {
					console.error(err);
					this.$bvToast.toast(err, {
						title: 'Error',
						variant: 'danger',
						solid: true,
					});
				});
		},
	},
};
</script>
<style module lang="scss">
.pairBtn {
	border-right: 0px;
}

.unitLabel {
	background-color: transparent;
	border-left: 0px;
}
</style>
