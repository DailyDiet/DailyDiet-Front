export function signUpAPI(that, data) {
	return that.$api({
		url: '/users/signup',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify(data),
	});
}
export function signInAPI(that, data) {
	return that.$api({
		url: '/users/signin',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify(data),
	});
}
