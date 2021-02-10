<template>
  <main class="container px-0">
    <section id="post-header" class="px-3">

      <div class="row d-flex justify-content-start">
        <div class="col-md-8 col-sm-12 p-0 m-0">
          
            <ul class="breadcrumb">
              <li>Berita</li>
            </ul>
          
          <h1 :class="sizeFont">{{ post.title }}</h1>
          <p>
            <span>
              <fa :icon="['fas', 'user-edit']"  /> {{ post.author.nama }}
            </span>
            <span>
              <fa :icon="['fas', 'calendar-alt']"  /> 10 Februari 2021
            </span>
          </p>
        </div>
      </div>

    </section>
    <div class="row d-flex justify-content-between">
      <div class="col-md-9 col-sm-12">
        <section id="post-body" v-html="post.content"></section>
        <section id="post-footer"></section>
      </div>

      <aside class="col-3">
        <div class="widget p-3">
          <h2>Penulis</h2>
          <div>

          </div>
        </div>
      </aside>
    </div>
  </main>
</template>

<script>
export default {
  props: ['comment','post'],
  data() {
    return {
      f: this.$props.post.title,
      sizeFont: 'font-biasa'
    }
  },
  mounted() {
    this.setFont()
  },
  head(){
    return {
      title: this.$props.post.title
    }
  },
  methods: {
    setFont(){
      if (this.$props.post.title.length > 55 ){
        this.sizeFont = 'font-kecil'
      } 
    }
  },
}
</script>

<style lang="scss" scope>
.font-biasa {
  font-size: 2.6em;
}
.font-kecil {
  font-size: 2.2em;
}
main {
  position: relative;
  margin-top: -55vh;
  font-size: 1.3rem;

  $warna-bg: white;
  #post-header {
    color: #fff !important;
    text-align: left;

    $font-header: .7em;
    h1 {
      line-height: 1.2em;
      font-weight: 700;
      // text-shadow: 2px 2px 2px black;
      // text-transform: uppercase;
    }
    p {
      font-size: $font-header;
      font-weight: 500;
      color: rgba($color: $bg-orange, $alpha: .7);
      font-weight: 500;
      letter-spacing: 1px;
      span {
        margin-right: .5em;
      }
    }
     // Untuk Breadcrumb
    ul.breadcrumb{
      font-size: $font-header - 0.1;
      list-style: none;
      background-color: unset !important;
      padding: 0;
      margin: 0 0 1.5rem 0;

      li {
        opacity: .8;
        letter-spacing: 1px;
        color: #efefef;
        background-color: gray;
        padding: .2em .7em;
        border-radius: 5px;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
  #post-body {
    background-color: $warna-bg;
    min-height: 20em;
    font-size: .8em;
    line-height: 1.7em;
    margin-bottom: 2rem;

    p {
      margin-bottom: 1em;
    }
    h1,h2,h3,h4,h5,h6 {
      color: $bg-primary;
      margin-top: 1em;
      margin-bottom: .5em;
      font-weight: 550;
    }
  }
  
  #post-footer {
    background-color: $warna-bg;
  }
  section{
    padding: 2vw;
    margin-bottom: 1vh;
  }

  aside {
    margin-top: 6.8vh;
    display: none;
    h2 {
      font-size: .89em;
      border-bottom: 2px $bg-gray solid;
      padding-bottom: .45em;
      font-weight: 550;
      color: rgba($color: #000000, $alpha: .6);
    }
    .widget {
      background-color: #fff;
      border-top-right-radius: 1em;
    }
  }

 
}
</style>