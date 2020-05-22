<template>
	<div>{{ $store.state }}</div>
</template>
<script>
export default {
	middleware: 'auth',
};
</script>
