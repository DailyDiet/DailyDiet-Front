export function getDataAPI(that) {
	return that.$api({
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		url: '/calculate/bmi',
		data: JSON.stringify({
			height: 180,
			weight: 80,
		}),
	});
}
