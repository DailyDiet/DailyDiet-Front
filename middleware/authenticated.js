import Cookie from 'js-cookie';
export default function ({ redirect }) {
	if (!Cookie.get('auth')) {
		return redirect('/login');
	}
}
