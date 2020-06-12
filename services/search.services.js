export function elasticSearchAPI(that, params) {
	return that.$api({
		url: '/foods/search',
		method: 'GET',
		params,
	});
}

export function advanceSearchAPI(that, data) {
	return that.$api({
		url: '/foods/search',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify(data),
	});
}
