<template>
<div>

<div id="posts" class="mb-5"></div>
<div class="bg-white w-100 " id="post">
	<HeaderPost />	
	
		<div class="row d-flex-justify-content-start bg-body ">
			<div class="col-md-12 bg-secondary pt-5 ">
			
			<div class="container p-0">
				<!-- Start Wrapper Posts -->
				<div class="d-flex justify-content-center" v-if=loading>
					<loader  />
				</div>
				<div  :class="$device.isMobile? 'mobileDaftarPost':'DaftarPost'" >

					<div class="post"  v-for="post in posts" :key="post.title" >
						
						<CardPost 
							:title=post.title 
							:image=post.urlToImage 
							:date=post.publishedAt
							:description=post.description
							:slug=post.slug
						/>

					</div>

				</div>

			</div>

			<div class="col-md-12 text-center my-5">
				<button class="btn btn-sm btn-primary btn-outline-primary">Load More</button>
			</div>
		</div>

	</div>
</div>
</div>
</template>

<script>
const apinews = "5c47d1673ca24cedab7ac11205bdea66"

import axios from 'axios'
import {
	defineComponent,
	useFetch,
	ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
	setup() {
		const loading = ref(true)
		const posts = ref([]) 

		const { fetch, fetchState } = useFetch(async () => {
			// const api = 'https://newsapi.org/v2/top-headlines?country=id&apiKey='+ apinews

			// const api = '/ipa/api/articles'
			const api = 'http://localhost:8000/api/post'
			
			const res = await await axios.get(api)

			console.log(res.data.Post);
			
			// let post = res.data.post.filter(e => e.description != null)
			let post = res.data.Post.filter(e => e.description != null)

			.map(e => {
				if (e.description.split(0).length > 0){
					e.description = e.description.split('.')[0] 
				}
				return e
			})
		
			posts.value = post.slice(0,8)
			// data.jumlahpost = data.posts.length
			loading.value = false
		})

		fetch()
		return{
			posts,
			loading
		}
	},



})
</script>

<style lang="scss">
.mobileDaftarPost {
	columns: 1;
	.post {
		margin: auto;
		width: 90vw;
		break-inside: avoid;
		margin-bottom: 1rem;
	}
}
.DaftarPost {
	columns: 4;

	.post {
		break-inside: avoid;
		margin-bottom: 1rem;
	}

}

</style>