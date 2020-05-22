import Vue from 'vue';

Vue.mixin({
	methods: {
		$toastErrors(err) {
			let errors =
				err.response && err.response.data && err.response.data.errors;

			if (errors) {
				const errKeys = Object.keys(errors);
				errKeys.forEach(error => {
					this.$bvToast.toast(errors[error], {
						title: error,
						variant: 'danger',
						solid: true,
					});
				});
			} else {
				errors = err.response && err.response.data;
				const errKeys = Object.keys(errors);
				errKeys.forEach(error => {
					this.$bvToast.toast(errors[error], {
						title: error,
						variant: 'danger',
						solid: true,
					});
				});
			}
		},
	},
});
