<template>
<div>
  <Headers/>
  <Kotaks/> 
  <Abouts/> 
  <DaftarPost/>
  <Sosmed/>
  <Footers/>
</div>
</template>


<script>
import Headers from '@/components/Landing/Headers.vue'
import Kotaks from '@/components/Landing/Kotaks.vue'
import Abouts from '@/components/Landing/Abouts.vue'
import DaftarPost from '@/components/Landing/Post/DaftarPost.vue'
import Sosmed from '@/components/Landing/Sosmed.vue'
import Footers from '@/components/Landing/Footers.vue'

export default {
  components: {
    Headers,
    Kotaks,
    Abouts,
    DaftarPost,
    Sosmed,
    Footers
  }
}
</script>

