export function createNewPostAPI(that, data) {
	return that.$api({
		url: '/blog/posts/new/',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		data: JSON.stringify(data),
	});
}

export function getAllPostsAPI(that) {
	return that.$api({
		url: '/blog/',
		method: 'GET',
	});
}

export function deletePostAPI(that, postId) {
	return that.$api({
		url: `/posts/delete/${postId}/`,
		method: 'DELETE',
	});
}
