<template>
	<div>
		<b-container class="mt-5">
			<b-row v-if="!isLoading">
				<b-col lg="4" sm="12" :class="$style.profileAvatar">
					<b-avatar
						:text="avatarText"
						size="9rem"
						variant="primary"
					/>
				</b-col>
				<b-col lg="8" sm="12">
					<div v-if="userInfo" class="mt-5">
						<b-form-group
							label-cols-lg="3"
							label="Username"
							label-for="Username"
						>
							<b-input-group>
								<b-form-input
									id="Username"
									v-model="userInfo.full_name"
									disabled
								/>
							</b-input-group>
						</b-form-group>
						<b-form-group
							label-cols-lg="3"
							label="Email"
							label-for="Email"
						>
							<b-input-group>
								<b-form-input
									id="Email"
									v-model="userInfo.email"
									disabled
								/>
							</b-input-group>
						</b-form-group>
					</div>
				</b-col>
			</b-row>
			<b-row v-else>
				<b-col cols="12" :class="$style.profileAvatar">
					<b-spinner variant="info" class="mt-5"></b-spinner>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { getUserInfoAPI } from '~/services';

export default {
	middleware: 'auth',
	data: () => ({
		userInfo: null,
		isLoading: false,
	}),
	computed: {
		avatarText() {
			return this.userInfo && this.userInfo.full_name.slice(0, 2);
		},
	},
	mounted() {
		this.fetchUserInfo();
	},
	methods: {
		fetchUserInfo() {
			this.isLoading = true;
			getUserInfoAPI(this)
				.then(({ data }) => {
					this.userInfo = data;
					console.log(data);
				})
				.catch(err => {
					console.error(err);
					this.$toastErrors(err);
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
	},
};
</script>

<style module lang="scss">
.profileAvatar {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
