export function elasticSearchAPI(that, params) {
	return that.$api({
		url: '/foods/search',
		method: 'GET',
		params,
	});
}
