<template>
	<div>
		<Headers :mode='mode' :title="title" />
		<h1>{{ title }}</h1>
		</div>

	
	
</template>

<script>

export default {

	data() {
		return {
			mode: 'single',
			post: Object,
			// title: 'aaaaaaaaaaaaaaaaa'
		}
	},
	async asyncData(context){
		console.log(context.params.id);
		const title = context.params.id

		// console.log(slug);
		// let api = ((context.isDev)?'http://localhost:8000/api/articles/':'ipa/api/articles/') + slug
		
		// const data = await fetch(api).then((res) => res.json())
		// this.post = data.articles
		// // console.log(this.post.title);

		// this.title = 'sate'
		return { title }
		// console.log(this.title);
	},
	// fetchOnServer: true,




		
}
</script>