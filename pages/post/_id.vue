<template>
<div>
		<NavbarsHeader v-if="$device.isMobile" />
		<Headers   v-else   :background="post.thumbnail"  />
		<Detail :comment="comment" :post="post" />
		<Footers />
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

		let api = 'https://probiosystem.com/ipa/api/post/' + slug
		// let api = ((context.isDev)?'http://localhost:8000/api/post/':'ipa/api/post/') + slug
		
		const data = await fetch(api).then((res) => res.json())
		const post = data.Post

		console.log(post);
		// const title = "sate"
		return { post, slug }
		// console.log(this.title);
	},
	// fetchOnServer: true,
}
</script>

<style lang="scss">
	body {
		background-color: white ;
	}
</style>