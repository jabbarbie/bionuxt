<template>
  <div class="container">
    <div class="row py-4 d-flex justify-content-between">

      <div class="col-6 text-muted text-small">
         Copyright <a href="/">Probio System</a>  All Rights Reserved 
      </div>
      <div class="col-6 d-inline-flex justify-content-end text-danger">
<!-- 
        <a href="#" class="" ><instagram theme="outline" size="18" fill="#fff"/></a>
        <a href="#" class="btn btn-up btn-oval btn-sm" ><facebook theme="outline" size="18" fill="#fff"/></a> -->


      </div>
    </div>
  </div>
</template>

<script>

// import { Instagram, Facebook } from '@icon-park/vue-next';
export default {
  name: 'Footers',
  data() {
    return {
      sosmed: [
        {nama: 'instagram', link: 'https://instagram.com/', icon: ''}
      ]
    }
  },
  components: {
    // Instagram, Facebook
  }
}
</script>

<style>
footer {
  font-size: .9rem;
  /* border-top: 5px solid var(--warna-hijau); */
}
footer a {
  text-decoration: none;
  font-weight: 500;
  color: var(--text-gray)
}

/* Card */
.card {
  border-width: 0;
}
.card-header {
  padding: 1rem .5rem;
}
.card-title {
  line-height: 1.2rem;
  font-size: 1rem;
  font-weight: 450;
}
</style>