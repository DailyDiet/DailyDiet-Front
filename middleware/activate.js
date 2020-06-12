export default function ({ redirect, $auth, route }) {
	const confirm = $auth.$storage.getCookie('dailyDietActivate');
	if (confirm && route.name === 'activate') {
		return redirect('/');
	}
	if (!confirm && route.name !== 'activate') {
		return redirect('/activate');
	} else if (route.name === 'activate') {
		return redirect('/');
	}
}
