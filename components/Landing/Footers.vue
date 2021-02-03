<template>
<footer class="py-1 mt-5">

  <div class="container">
    <div class="row d-flex justify-content-between">


      <div class="col-12 text-muted text-small ">
        &copy; 2021 | <a href="/">Probio System</a> 
      </div>

      <div class="col-12 text-muted text-small mt-2">
        <ul>
          <li v-for="links in sitemap" :key="links.title">
            <a href="">{{ links.title }}</a>
          </li>
        </ul>
      </div>




      

    </div>
  </div>
</footer>

</template>

<script>

// import { Instagram, Facebook } from '@icon-park/vue-next';
export default {
  name: 'Footers',
  data() {
    return {
      sitemap: [
        {title : 'About', link: '#'},
        {title : 'Disclammer', link: '#'},
        {title : 'Police', link: '#'},
        {title : 'Contact', link: '#'},
        {title : 'Sitemap', link: '#'},
      ],
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

<style lang="scss">
footer {
  font-size: .9rem;
  text-align: center;
  
  a {
    text-decoration: none;
    font-weight: 500;
    color: var(--text-gray)
  }

  ul {
    list-style: none;
    display: flex;
    text-align: center;
    justify-content: center;

    li {

      &:not(:last-child)::after {
        content: '/';
        margin: 0 1em
      }
    }
  }

}

</style>