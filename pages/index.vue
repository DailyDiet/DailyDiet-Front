<template>
	<div v-scroll-spy="{ data: 'section' }">
		<div :class="$style.section1">
			<b-row class="m-0 w-100">
				<b-col lg="1" md="2" sm="1"></b-col>
				<b-col lg="5" md="5" sm="10" class="text-center">
					<h1>About Daily Diet</h1>
					<p style="font-size: 24px;">
						We're a small team focused on providing tools and
						support for people who want to take control over their
						nutrition. Given the saturation of information in the
						diet industry, we focus on more pragmatic elements of
						healthy eating such as planning and cooking.
					</p>
					<b-button
						id="next_section"
						@click="$auth.loggedIn ? $scrollTo(1) : $scrollTo(3)"
					>
						Let's start
					</b-button>
				</b-col>
				<b-col lg="6" md="5" sm="1"> </b-col>
			</b-row>
		</div>
		<div :class="$style.section2">
			<span :class="$style.searchFood">Get Your Diet Plan</span>
			<PlanGenerator
				@update="generatePlan"
				@step="$auth.loggedIn ? null : $scrollTo(3)"
			/>
		</div>
		<div :class="$style.section3">
			<b-row class="w-100">
				<b-col lg="3" sm="0"></b-col>
				<b-col
					lg="6"
					sm="12"
					class="d-flex justify-content-center align-items-center flex-column"
				>
					<span :class="$style.searchFood">Search Food</span>
					<b-input-group size="lg">
						<b-form-input
							v-model="searchInput"
							placeholder="Search"
							@keyup.enter="goToSearchPage"
						/>
						<b-input-group-append>
							<b-button @click="goToSearchPage">
								<i class="fas fa-search"></i>
							</b-button>
						</b-input-group-append>
					</b-input-group>
				</b-col>
				<b-col lg="3" sm="0"></b-col>
			</b-row>
		</div>
		<div v-if="!$auth.loggedIn" :class="$style.section4">
			<b-row class="m-0 w-100">
				<b-col lg="6" md="2" sm="1"></b-col>
				<b-col lg="4" md="5" sm="10" class="text-center">
					<h3>Please Sign in or Sign up</h3>
					<b-button @click="$router.push('login')">
						sign in / sign up
					</b-button>
				</b-col>
				<b-col lg="2" md="5" sm="1"> </b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import PlanGenerator from '~/components/plan_generator/PlanGenerator.vue';

export default {
	components: { PlanGenerator },
	data: () => ({ searchInput: '' }),
	methods: {
		generatePlan(params) {
			this.$router.push({
				name: 'plan',
				params: {
					dietCalorie: params.calorie,
					dietMeal: params.meal,
				},
			});
		},
		goToSearchPage() {
			if (!this.$auth.loggedIn) {
				this.$router.push('login');
				return;
			}
			this.$router.push({
				name: 'search',
				query: {
					query: this.searchInput,
				},
			});
		},
	},
};
</script>

<style module lang="scss">
.searchFood {
	font-size: 40px;
	color: #ff773d;
	font-weight: bold;
	text-align: center;
}
.section1 {
	height: 100vh;
	background-image: url('../assets/images/section1.jpg');
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.section2 {
	background-color: #fff2d0;
	height: 100vh;
	background-image: url('../assets/images/section2.png');
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.section3 {
	background-color: #fff2d0;
	height: 100vh;
	background-image: url('../assets/images/section3.png');
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.section4 {
	height: 100vh;
	background-image: url('../assets/images/section4.png');
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
