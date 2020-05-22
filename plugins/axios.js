import Cookie from 'js-cookie';

export default function ({ $axios }, inject) {
	const headers = {
		Accept: 'text/plain, */*',
	};
	const tokens = Cookie.getJSON('auth');
	if (tokens) {
		headers.Authorization = `Bearer ${tokens.access_token}`;
	}

	const api = $axios.create({
		headers,
	});

	api.setBaseURL(process.env.apiBaseUrl);

	inject('api', api);

	if (tokens) {
		setInterval(() => {
			api({
				url: '/users/auth',
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${tokens.refresh_token}`,
				},
			}).then(res => {
				console.log(res);
			});
		}, 1000 * 60 * 15);
	}
}
