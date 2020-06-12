<template>
	<div>
		<b-container>
			<b-row class="d-flex justify-content-center">
				<b-row class="w-100">
					<b-col lg="3" sm="0"></b-col>
					<b-col lg="6" sm="12">
						<b-input-group class="mt-5">
							<b-form-input
								v-model="search.value"
								placeholder="Search"
								@keyup.enter="fetchElasticSearch"
							/>
							<b-input-group-append>
								<b-button @click="fetchElasticSearch">
									<i class="fas fa-search"></i>
								</b-button>
								<b-button v-b-toggle.sidebar-filter>
									<i class="fas fa-filter"></i>
								</b-button>
							</b-input-group-append>
						</b-input-group>
					</b-col>
					<b-col lg="3" sm="0"></b-col>
				</b-row>
				<div
					v-if="!isLoading"
					class="d-flex justify-content-center align-items-center flex-column"
				>
					<b-card-group
						v-if="foods.length"
						class="justify-content-center"
						deck
					>
						<PlanCard
							v-for="food in foods"
							:key="food.id"
							:meal="food"
							@update="getFoodRecipe"
						/>
					</b-card-group>
					<h5 v-else class="mt-3">Not found</h5>
					<b-pagination
						v-if="foods.length"
						v-model="search.page"
						:total-rows="totalRows"
						class="mt-3"
					/>
				</div>
				<b-spinner v-else variant="info" class="mt-5"></b-spinner>
			</b-row>
		</b-container>
		<RecipeModal :show="show" :reciped="recipe" @close="closeRecipeModal" />
		<b-sidebar id="sidebar-filter" title="Filter" backdrop>
			<div class="px-3 py-2">
				<b-form-input
					v-model="search.value"
					class="my-2"
					placeholder="Enter your food"
				/>
				<b-form-select
					v-model="selectedCategory"
					class="my-2"
					:options="categoryOptions"
					value-field="key"
					text-field="title"
				>
					<template #first>
						<b-form-select-option :value="null" disabled>
							-- Select category --
						</b-form-select-option>
					</template>
				</b-form-select>
				<b-form-tags
					v-model="ingredients"
					class="my-2"
					placeholder="Enter ingredients id's"
					:tag-validator="tagValidator"
				/>
				<b-button block @click="fetchElasticSearch">
					Search
				</b-button>
			</div>
		</b-sidebar>
	</div>
</template>

<script>
import { elasticSearchAPI, getRecipeAPI } from '~/services';
import PlanCard from '~/components/plans/PlanCard.vue';
import RecipeModal from '~/components/recipe/RecipeModal.vue';

export default {
	components: { PlanCard, RecipeModal },
	data: () => ({
		foods: [],
		placeholder:
			'https://snappfood.ir/bundles/bodofoodfrontend/images/vendor/placeholder-new.jpg',
		show: false,
		recipe: null,
		isLoading: false,
		search: {
			value: '',
			page: 1,
			offset: 12,
		},
		totalRows: 0,
		ingredients: [],
		selectedCategory: null,
		categoryOptions: [
			{
				key: 'mostly_meat',
				title: 'Mostly meat',
			},
			{
				key: 'appetizers',
				title: 'Appetizers',
			},
			{
				key: 'drink',
				title: 'Drink',
			},
			{
				key: 'main_dish',
				title: 'Main dish',
			},
			{
				key: 'sandwich',
				title: 'Sandwich',
			},
			{
				key: 'dessert',
				title: 'Dessert',
			},
			{
				key: 'breakfast',
				title: 'Breakfast',
			},
			{
				key: 'protein_shake',
				title: 'Protein shake',
			},
			{
				key: 'salad',
				title: 'Salad',
			},
			{
				key: 'pasta',
				title: 'Pasta',
			},
			{
				key: 'other',
				title: 'Other',
			},
		],
	}),
	watch: {
		'search.page'() {
			this.fetchElasticSearch();
		},
	},
	mounted() {
		if (this.$route.query && this.$route.query.query) {
			this.search.value = this.$route.query.query;
			this.fetchElasticSearch();
		}
	},
	methods: {
		tagValidator(tag) {
			return !isNaN(tag);
		},
		fetchElasticSearch() {
			this.isLoading = true;
			const params = {
				query: this.search.value,
				page: this.search.page,
				per_page: this.search.offset,
			};

			if (this.selectedCategory) {
				params.category = this.selectedCategory;
			}
			if (this.ingredients.length) {
				params.ingredients = this.ingredients.join(',');
			}

			this.$router.push({
				query: {
					query: this.search.value,
					category: this.category,
					ingredients: this.ingredients.join(','),
					page: this.search.page,
					per_page: this.search.offset,
				},
			});

			elasticSearchAPI(this, params)
				// eslint-disable-next-line camelcase
				.then(({ data: { results, total_results_count } }) => {
					// eslint-disable-next-line camelcase
					this.totalRows = total_results_count;
					this.foods = results;
				})
				.catch(err => {
					console.error(err);
					this.$toastErrors(err);
				})
				.finally(() => {
					this.isLoading = false;
				});
		},
		closeRecipeModal() {
			this.show = false;
		},
		getFoodRecipe(id) {
			getRecipeAPI(this, id)
				.then(({ data }) => {
					this.show = true;
					this.recipe = data;
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
.headerImage {
	height: 100vh;
	background-image: url('../assets/images/bgblur.png');
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
