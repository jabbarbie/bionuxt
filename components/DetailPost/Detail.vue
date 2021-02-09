<template>
  <main class="container px-0">
    <section id="post-header">

      <div class="row d-flex justify-content-center">
        <div class="col-8">
          <h1>{{ post.title }}</h1>
          <p>Ditulis oleh : {{ post.author.nama }} - Tanggal : 07 Januari 2021</p>
        </div>
      </div>

    </section>
    <section id="post-body" v-html="post.content"></section>
    <section id="post-footer"></section>
  </main>
</template>

<script>
export default {
  props: ['comment','post'],
  data() {
    return {
      f: this.$props.post.title
    }
  },
  head(){
    return {

      title: this.$props.post.title
    }
  }
}
</script>

<style lang="scss" scope>
main {
  position: relative;
  margin-top: -40vh;
  font-size: 1.5rem;

  $warna-bg: white;
  #post-header {
    color: #fff !important;
    text-align: center;
    h1 {
      font-size: 1.2em;
      line-height: 1.5em;
      font-weight: 700;
      text-shadow: 2px 2px 2px black;
    }
    p {
      font-size: .6em;
      font-weight: 400;
    }
  }
  #post-body {
    background-color: $warna-bg;
    min-height: 20em;
    font-size: .75em;
    line-height: 2em;
    margin-bottom: 2rem;

    h1,h2,h3,h4,h5,h6 {
      color: $bg-primary;
      margin-top: 1em;
    }
  }
  
  #post-footer {
    background-color: $warna-bg;
  }
  section{
    padding: 2vw;
    margin-bottom: 1vh;
  }
}
</style>