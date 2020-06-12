<template>
	<div>
		<b-container class="mt-5">
			<b-row>
				<b-col cols="12">
					<h2>About Daily Diet</h2>
					<p>
						We're a small team on providing tools and support for
						people who want to take control over their nutrition.
						Given the saturation of information in the diet
						industry, we focus on more pragmatic elements of healthy
						eating such as planning and cooking. This site is the
						latest part of our ongoing project to make effective
						nutrition strategies available to everyone, especially
						people who are too busy to get started on their own.
						What began as Swole.me, a simple tool to help
						bodybuilders hit macronutrient requirements created by
						just Louis, has grown into the current service supported
						by a small and dedicated team.
					</p>
				</b-col>
				<b-col v-for="(person, index) in persons" :key="index" lg="3">
					<b-card class="my-3">
						<div :class="$style.profileAvatar">
							<a target="blank" :href="person.link">
								<b-avatar
									button
									:src="person.image"
									size="10rem"
								/>
							</a>
							<h5 class="mt-3">{{ person.name }}</h5>
							<h6>{{ person.position }}</h6>
						</div>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	data: () => ({
		persons: [
			{
				name: 'Dr. Amin Gheibi',
				position: 'Supervisor',
				image:
					'https://media-exp1.licdn.com/dms/image/C5603AQFXU3dx1Fsp-w/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=5h2txB5zax3AXDX-4cRXKwKfq_Q8uMIw0SObw2jG0Yg',
				link: 'https://www.linkedin.com/in/amingheibi/',
			},
			{
				name: 'Kimia Ghaffari',
				position: 'Mentor',
				image:
					'https://media-exp1.licdn.com/dms/image/C5603AQHr6fSM8YRNWg/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=VfjPRp6TKI4ciPdqyUEcbaRzwvLh8pU0TRwoh1XlApU',
				link: 'https://www.linkedin.com/in/kimia-ghaffari-b36812139/',
			},
			{
				name: 'Iman Malekian',
				position: 'Front End developer',
				image:
					'https://media-exp1.licdn.com/dms/image/C4D03AQFX9E0HSDZtqg/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=zUUP7e-f9jgrzpgnh738adIyYTh5Epsv66ejc6RT8rM',
				link: 'https://www.linkedin.com/in/iman-malekian-9a4727120/',
			},
			{
				name: 'Hossein Malekpour',
				position: 'Back End developer',
				image:
					'https://media-exp1.licdn.com/dms/image/C4D03AQHKenVlBsSZww/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=cV4AeHftUvzH-_1VLWiLDJWWBhfRmjeldBD7wcR1hi8',
				link: 'https://www.linkedin.com/in/mohammadhossein-malekpour/',
			},
			{
				name: 'Yassaman Ommi',
				position: 'Back End developer',
				image:
					'https://media-exp1.licdn.com/dms/image/C4E03AQFKdylSEWvZ9g/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=zpoe5Rs1rkLCRK1QkGzkX_JFoRgm2JiE3fO7nBlAyTM',
				link: 'https://www.linkedin.com/in/yassaman-ommi/',
			},
			{
				name: 'Nima Afshar',
				position: 'Back End developer',
				image:
					'https://media-exp1.licdn.com/dms/image/C4D03AQHilMXqP1N1Yw/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=ot3pc-Gzef5rlfWMczwKsg4Yxoom9QOqrnzo7CgyEyM',
				link: 'https://www.linkedin.com/in/nimaafsharh/',
			},
		],
	}),
};
</script>

<style module lang="scss">
.profileAvatar {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.profileSocial {
	display: flex;
	width: 50%;
	font-size: 35px;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	.item {
		&:hover {
			color: #1da1f2;
		}
	}
}
</style>
