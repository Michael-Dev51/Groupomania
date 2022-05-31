<template>
	<div class="profile_picture">
		<img src = '../assets/user-circle.svg' crossorigin class="image" alt="Photo de profil"/>
	</div>
</template>

<script>
	export default {
		name: 'ProfilePicture',
		props: ['src']
	}
</script>

<style lang="scss">
	.image {
		object-fit: cover;
		width: 3rem;
		height: 3rem;
		margin: 0.1rem 0 0.1rem 1rem;		
	}
</style>