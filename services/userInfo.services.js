export function getUserInfoAPI(that) {
	return that.$api({
		url: '/users/get_user',
		method: 'GET',
	});
}
