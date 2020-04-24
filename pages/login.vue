<template>
	<div>
		<div :class="$style.headerImage">
			<b-form v-if="show" :class="$style.form" @submit="onSubmit">
				<b-card-group>
					<b-card header-tag="header" footer-tag="footer">
						<template #header>
							<h6 class="mb-0">Login</h6>
						</template>
						<b-form-group
							id="input-group-1"
							label="Email"
							label-for="input-1"
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
							label="Password"
							label-for="input-2"
						>
							<b-form-input
								id="input-2"
								v-model="form.name"
								required
								placeholder="Enter password"
							></b-form-input>
						</b-form-group>

						<b-button type="submit" variant="primary">
							Login
						</b-button>
					</b-card>
				</b-card-group>
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
		show: true,
	}),
	methods: {
		onSubmit(evt) {
			evt.preventDefault();
			alert(JSON.stringify(this.form));
		},
	},
};
</script>

<style module lang="scss">
.form {
	// background-color: aliceblue;
	// padding: 10px;
	// border-radius: 10px;
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
