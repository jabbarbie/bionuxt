<template>
  <div>
    <Navbars />
    <Nuxt />
    <Scrolls />

  </div>
</template>
<script>
import Navbars from '@/components/Landing/Header/Navbars.vue'
import Scrolls from '@/components/Scrolls.vue'
export default {
    components: {
        Navbars,
        Scrolls
    }
}
</script>
<style>
:root {
    --warna-hijau:#009970; /* 0, 153, 112*/
    --warna-gray: rgb(246, 246, 247);

    --text-gray: #36343a;
}
html { scroll-behavior: smooth; }
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    color: #2c3e50;
    background-color: var(--warna-gray);
}
a { color: unset; text-decoration: none !important; transition: .1s;}
a:hover {
    color: #017C5B;
}
.btn-oval {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    border: 2px solid var(--warna-hijau);
    background-color: var(--warna-hijau);
    color: white;
    font-weight: bold;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
}
.btn-oval:hover{
    color: var(--warna-hijau);
    background-color: #fff;
}
.btn-oval:active{
    border: none;
}
#tombolUp {
    position: absolute;
    bottom: 2vh; 
    right: 2vh;
}
.bg-body {
    background-color: rgb(246, 246, 247) !important;
}
.py-6 { padding-top: 7rem; padding-bottom: 7rem;}
</style>
