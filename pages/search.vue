<template>
	<div>
		<b-container fluid>
			<b-row class="d-flex justify-content-center">
				<b-card
					v-for="item in search"
					:key="item.id"
					:title="item.title"
					:img-src="item.image"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 300px;"
					class="m-2"
				>
					<!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
				</b-card>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	data: () => ({
		search: [
			{
				id: 33538,
				calories: 557,
				fat: 28.3,
				fiber: 2.8,
				protein: 11.2,
				category: 'pasta               ',
				image:
					'https://images.eatthismuch.com/images/food_icons_v3/spaghetti.png',
				title: 'Spaghetti with olive oil and garlic sauce',
				link: '/foods/recipe/33538',
			},
			{
				id: 905979,
				calories: 423,
				fat: 12.3,
				fiber: 4,
				protein: 24.2,
				category: 'pasta               ',
				image:
					'https://images.eatthismuch.com/images/food_icons_v3/spaghetti.png',
				title: 'Spaghetti with Meat Sauce',
				link: '/foods/recipe/905979',
			},
			{
				id: 938719,
				calories: 166,
				fat: 4.5,
				fiber: 1.2,
				protein: 8.6,
				category: 'pasta               ',
				image:
					'https://images.eatthismuch.com/images/food_icons_v3/spaghetti.png',
				title: 'Spaghetti Nests',
				link: '/foods/recipe/938719',
			},
			{
				id: 45973,
				calories: 384,
				fat: 19.2,
				fiber: 1.4,
				protein: 17.6,
				category: 'pasta               ',
				image:
					'https://images.eatthismuch.com/site_media/thmb/45282_erin_m_aae38a6f-3ce6-4e19-b490-0660f19cd362.png',
				title: 'Spaghetti Carbonara',
				link: '/foods/recipe/45973',
			},
			{
				id: 1493432,
				calories: 591,
				fat: 15.8,
				fiber: 4.7,
				protein: 16.7,
				category: 'pasta               ',
				image:
					'https://images.eatthismuch.com/site_media/thmb/45484_simmyras_6fa53636-8e2c-4eea-a446-d8dbdaa70b95.png',
				title: 'Spaghetti with Mushrooms, Garlic and Oil',
				link: '/foods/recipe/1493432',
			},
			{
				id: 45545,
				calories: 343,
				fat: 14.5,
				fiber: 2.8,
				protein: 8.5,
				category: 'main_dish           ',
				image:
					'https://images.eatthismuch.com/site_media/thmb/347160_DivaAsiene_38bb6b41-149d-4dfb-bdb3-3700143897f7.png',
				title: 'Broccoli Spaghetti Soup',
				link: '/foods/recipe/45545',
			},
			{
				id: 45594,
				calories: 593,
				fat: 21,
				fiber: 7.4,
				protein: 22.7,
				category: 'pasta               ',
				image:
					'https://images.eatthismuch.com/site_media/thmb/334029_courtneydesire_cfa4932d-13cc-4825-9249-3ecd3dad82a3.png',
				title: 'Spaghetti alla Puttanesca',
				link: '/foods/recipe/45594',
			},
			{
				id: 933771,
				calories: 1723,
				fat: 58.3,
				fiber: 19.8,
				protein: 72.2,
				category: 'pasta               ',
				image:
					'https://images.eatthismuch.com/site_media/thmb/906951_goldtbird_2f639279-371c-44f6-8aca-b44fb96e02a4.png',
				title: 'Lemon Zest Shrimp Over Spaghetti',
				link: '/foods/recipe/933771',
			},
			{
				id: 940700,
				calories: 467,
				fat: 14.4,
				fiber: 3.7,
				protein: 15.9,
				category: 'pasta               ',
				image:
					'https://images.eatthismuch.com/images/food_icons_v3/spaghetti.png',
				title: 'One-Pot Spaghetti with Fresh Tomato Sauce',
				link: '/foods/recipe/940700',
			},
			{
				id: 976257,
				calories: 646,
				fat: 18,
				fiber: 8.2,
				protein: 35.8,
				category: 'pasta               ',
				image:
					'https://images.eatthismuch.com/site_media/thmb/210950_FierceSappho_efcdad76-fcc4-44a5-8f32-34efa3e812ec.png',
				title: 'Spaghetti Bolognese',
				link: '/foods/recipe/976257',
			},
		],
	}),
};
</script>

<style module lang="scss">
.headerImage {
	height: 100vh;
	background-image: url('../assets/images/bgblur.png');
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
