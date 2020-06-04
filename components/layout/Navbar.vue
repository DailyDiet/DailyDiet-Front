<template>
	<b-navbar toggleable="md" type="dark" variant="dark" fixed="top" sticky>
		<b-navbar-brand href="/">
			<b-img
				rounded
				src="../../assets/images/logo.jpg"
				width="30"
				height="30"
			/>
		</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse" />

		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav v-if="$auth.loggedIn">
				<b-nav-item @click="$router.push('dashboard')">
					Dashboard
				</b-nav-item>
				<b-nav-item @click="$router.push('plan')">Plan</b-nav-item>
			</b-navbar-nav>
			<b-navbar-nav v-if="!isSearchPage" class="ml-auto">
				<b-input-group size="sm">
					<b-form-input
						v-model="searchInput"
						placeholder="Search"
						@keyup.enter="goToSearchPage"
					/>
					<b-input-group-append>
						<b-button size="sm" @click="goToSearchPage">
							<i class="fas fa-search"></i>
						</b-button>
					</b-input-group-append>
				</b-input-group>
			</b-navbar-nav>
			<b-navbar-nav
				:class="{
					['ml-2']: !$isMobile,
					['ml-auto']: isSearchPage,
				}"
			>
				<b-nav-item-dropdown v-if="$auth.loggedIn" right>
					<template #button-content>
						<i
							style="font-size: 20px;"
							class="fas fa-user-circle"
						></i>
					</template>
					<b-dropdown-item @click="$router.push('profile')">
						Profile
					</b-dropdown-item>
					<b-dropdown-divider></b-dropdown-divider>
					<b-dropdown-item v-b-modal.modify_password>
						Modify Password
					</b-dropdown-item>
					<b-dropdown-item @click="$auth.logout()">
						Sign Out
					</b-dropdown-item>
				</b-nav-item-dropdown>

				<b-button
					v-else
					size="sm"
					class="my-2 my-sm-1"
					@click="$router.push('login')"
				>
					Sign in
				</b-button>
			</b-navbar-nav>
		</b-collapse>
		<b-modal
			id="modify_password"
			title="Modify password"
			hide-footer
			size="sm"
		>
			<Modify />
		</b-modal>
	</b-navbar>
</template>
<script>
import Modify from '~/components/Modify.vue';

export default {
	components: {
		Modify,
	},
	data: () => ({
		searchInput: '',
		isLoading: false,
	}),
	computed: {
		isSearchPage() {
			return this.$route.name === 'search';
		},
	},
	methods: {
		goToSearchPage() {
			console.log('debugger');
			this.$router.push({
				name: 'search',
				query: {
					query: this.searchInput,
				},
			});
		},
		logOut() {
			this.isLoading = true;
			this.$auth.logout().finally(() => {
				this.isLoading = false;
			});
		},
	},
};
</script>
