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

export function refreshTokenAPI(that) {
	return that.$api({
		url: '/users/auth',
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${that.$auth.$storage.getCookie(
				'refreshToken'
			)}`,
		},
	});
}

export function resendConfrimationAPI(that) {
	return that.$api({
		url: '/users/signup/resendConfrimation',
		method: 'GET',
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
