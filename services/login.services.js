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

export function modifyPasswordAPI(that, data) {
	return that.$api({
		url: '/users/signup/modify',
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify(data),
	});
}
