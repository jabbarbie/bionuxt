<template>
  <main class="container px-0">
    <section id="post-header">

      <div class="row d-flex justify-content-center">
        <div class="col-6">
          <h1>{{ post.title }}</h1>
          <p>Ditulis oleh : {{ post.author.nama }} - Tanggal : 07 Januari 2021</p>
        </div>
      </div>

    </section>
    <section id="post-body">{{ post.content }}</section>
    <section id="post-footer">footer {{ f }}</section>
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

<style lang="scss">
main {
  position: relative;
  margin-top: -40vh;
  font-size: 1.5rem;

  #post-header {
    color: #fff !important;
    text-align: center;
    h1 {
      font-size: 1.2em;
      line-height: 1.5em;
    }
    p {
      font-size: .7em;
      font-weight: 400;
    }
  }
  #post-body {
    background-color: #fff;
    min-height: 20em;
    font-size: .8em;
   
  }
  
  section{
    padding: 2vw;
    margin-bottom: 1vh;
  }
}
</style>