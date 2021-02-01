<template>
  <div class="text-center">
      <h1 v-if="error.statusCode === 404">Halaman tidak ditemukan</h1>
      <h1 v-else>Halaman beranda</h1>
      <nuxt-link to="/">Halaman Beranda</nuxt-link>
  </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error'

}
</script>

<style>

</style>