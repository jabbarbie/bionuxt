<template>
  <Header class="d-flex justify-content-center align-items-center">
      <Navbars></Navbars>

      <section id="header-info">
          <h1>Hai Selamat Datang</h1>
      </section>
  </Header>
</template>

<script>
import Navbars from '@/components/Landing/Header/Navbars.vue'


export default {
    data() {
        return {

        }
        
    },
    components: {
        Navbars,
    },
}
</script>

<style>

header {
    position: relative;
    width: 100vw;
    height: 100vh;
    border-bottom: 1px solid var(--color-utama);
    font-family: var(--font-utama);
    text-align: center;
    
    background-color: gray;
    background-image: url('~@/assets/img/hero.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
/* 
    z-index: -1; */
}
header::before{
    position: absolute;
    content:"";
    background-color: rgba(0, 0, 0, 0.6);
    filter: grayscale(0.5);
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
}

#header-info {
    position: relative;
    color: white !important;

    text-shadow: 2px 2px 3px black;
}
</style>