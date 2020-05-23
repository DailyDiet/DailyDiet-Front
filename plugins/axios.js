export default function ({ $axios }, inject) {
	const headers = {
		Accept: 'text/plain, */*',
	};

	const api = $axios.create({
		headers,
	});

	inject('api', api);
}
