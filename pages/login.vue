<template>
	<div>
		<div :class="$style.headerImage">
			<b-form
				v-if="show"
				:class="$style.form"
				@submit="onSubmit"
				@reset="onReset"
			>
				<b-form-group
					id="input-group-1"
					label="Email address:"
					label-for="input-1"
					description="We'll never share your email with anyone else."
				>
					<b-form-input
						id="input-1"
						v-model="form.email"
						type="email"
						required
						placeholder="Enter email"
					></b-form-input>
				</b-form-group>

				<b-form-group
					id="input-group-2"
					label="Your Name:"
					label-for="input-2"
				>
					<b-form-input
						id="input-2"
						v-model="form.name"
						required
						placeholder="Enter name"
					></b-form-input>
				</b-form-group>

				<b-form-group
					id="input-group-3"
					label="Food:"
					label-for="input-3"
				>
					<b-form-select
						id="input-3"
						v-model="form.food"
						:options="foods"
						required
					></b-form-select>
				</b-form-group>

				<b-form-group id="input-group-4">
					<b-form-checkbox-group
						id="checkboxes-4"
						v-model="form.checked"
					>
						<b-form-checkbox value="me"
							>Check me out</b-form-checkbox
						>
						<b-form-checkbox value="that"
							>Check that out</b-form-checkbox
						>
					</b-form-checkbox-group>
				</b-form-group>

				<b-button type="submit" variant="primary">Submit</b-button>
				<b-button type="reset" variant="danger">Reset</b-button>
			</b-form>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data: () => ({
		form: {
			email: '',
			name: '',
			food: null,
			checked: [],
		},
		foods: [
			{ text: 'Select One', value: null },
			'Carrots',
			'Beans',
			'Tomatoes',
			'Corn',
		],
		show: true,
	}),
	methods: {
		onSubmit(evt) {
			evt.preventDefault();
			alert(JSON.stringify(this.form));
		},
		onReset(evt) {
			evt.preventDefault();
			// Reset our form values
			this.form.email = '';
			this.form.name = '';
			this.form.food = null;
			this.form.checked = [];
			// Trick to reset/clear native browser form validation state
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
	},
};
</script>

<style module lang="scss">
.form {
	background-color: aliceblue;
	padding: 10px;
	border-radius: 10px;
}
.headerImage {
	height: 100vh;
	background-image: url('../assets/images/bgblur.png');
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
