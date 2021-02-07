<template>
<div>
		<Headers :background="post.thumbnail" />
		<Detail :comment="comment" :post="post" />
</div>

	
	
</template>

<script>

export default {

	data() {
		return {
			landing: true,
			comment: false
		}
	},
	async asyncData(context){
		console.log(context.params.id);
		const slug = context.params.id

		let api = ((context.isDev)?'http://localhost:8000/api/articles/':'ipa/api/articles/') + slug
		
		const data = await fetch(api).then((res) => res.json())
		const post = data.articles

		console.log(post);
		// const title = "sate"
		return { post, slug }
		// console.log(this.title);
	},
	// fetchOnServer: true,




		
}
</script>