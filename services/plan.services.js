export function getRecipeAPI(that, id) {
	return that.$api({
		url: `foods/recipe/${id}`,
		method: 'GET',
	});
}

export function getDietPlanAPI(that, meal, calorie) {
	return that.$api({
		url: `foods/${meal}/${calorie}`,
		method: 'GET',
	});
}
