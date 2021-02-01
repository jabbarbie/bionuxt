<template>
<div>

<div id="posts" class="mb-5"></div>
<div class="bg-white   w-100 " id="post">
	<header-post />	
	
		<div class="row d-flex-justify-content-start bg-body py-3 pb-5">
			<div class="col-md-12">
			
			<div class="container p-0">
				<!-- Start Wrapper Posts -->
				<div class="d-flex justify-content-center" v-if=loading>
					<loader  />
				</div>
				<div class="DaftarPost  " >

					<div class="post"  v-for="post in posts" :key="post.title" >
						
						<CardPost 
							:title=post.title 
							:image=post.urlToImage 
							:date=post.publishedAt
							:description=post.description
						/>

					</div>

				</div>

			</div>
		</div>

	</div>
</div>
</div>
</template>

<script>
const apinews = "5c47d1673ca24cedab7ac11205bdea66"


import HeaderPost from './HeaderPost.vue'
import CardPost from './CardPost.vue'
import Loader from '@/components/Loader.vue'

import axios from 'axios'
import {
	defineComponent,
	useFetch,
	ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
	components: {
		HeaderPost,
		CardPost,
		Loader
	},
	setup() {
		const loading = ref(true)
		const posts = ref([]) 

		const { fetch, fetchState } = useFetch(async () => {
			const res = await await axios.get('http://newsapi.org/v2/top-headlines?country=id&apiKey=' + apinews)
			let articles = res.data.articles.filter(e => e.description != null)
		
			posts.value = articles.slice(0,8)
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

<style>

#post {
	min-height: 100vh;
}
.DaftarPost {
	columns: 4;
	/* column-gap: 10px; */
}

</style>