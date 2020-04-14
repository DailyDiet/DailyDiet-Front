export function calculateCalorieAPI(that, data) {
	return that.$api({
		url: '/calculate/calorie',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify(data),
	});
}

export function calculateBmiAPI(that, data) {
	return that.$api({
		url: '/calculate/bmi',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify(data),
	});
}
