<template>
  <Header class="d-flex justify-content-center align-items-center" 
  :class="landing? 'full':'half' " 
  
  :style="`background-image: url(${imageHeader})`  ">

      <Navbars></Navbars>
      <div class="container px-0" >

      <div v-if="landing" class="col-md-12  p-0 d-flex justify-content-between" id="slide">
          <div class="col-md-6 text-left p-0 ">
              <div id="slogan">
                  <h1>Probio </h1>
                  <h1>System</h1>
              </div>
              
              <p>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi non nisi expedita! Recusandae tempore, iusto perferendis exercitationem adipisci a quisquam nemo ipsam rem eligendi nobis, tempora nesciunt unde vero sunt.
              </p>
              <div class="sosmed d-flex" >
                    <a v-for="s in sosmed" :key="s.name" :title="s.alt" :href="s.link">
                      <fa :icon="['fab', s.icon]" fill="green"  color="white" />
                      <span>{{ s.name }}</span>
                    </a>
              </div>
              <!-- <button class="btn btn-primary btn-sm">Contact Me</button> -->
          </div>
          <div class="col-md-6 text-right">
              
             <p>Scroll Ke Bawah</p>

          </div>
      </div>
      </div>
  </Header>
</template>

<script>
export default {
    props: ['landing', 'background'],
    data() {
        return {
            imageHeader: '',
            sosmed: [
                {name: 'facebook', alt: 'Probio System', link: 'https://fb.me/probiosystem', icon: 'facebook-f'},
                {name: 'twitter', alt: 'Probio System', link: 'https://twitter.com/probiosystem', icon: 'twitter'},
                {name: 'instagram', alt: 'Probio System', link: 'https://instagram.com/probiosystem', icon: 'instagram'},
                {name: 'whatsapp', alt: 'Probio System', link: 'https://wa.me', icon: 'whatsapp'},
                {name: 'telegram', alt: 'Probio System', link: 'https://t.me/probiosystem', icon: 'telegram'},
            ]
        }
    },
    mounted() {
        this.infoWeb()
    },
    methods: {
        infoWeb(){
            if (this.landing){
                this.imageHeader = '~@/assets/img/hero.jpg'
            }else{
                this.imageHeader = this.background
            }
        }
    },

}
</script>

<style lang="scss" scoped>
// $imageLink: '~@/assets/img/hero.jpg';

.full { height: 100vh }
.half { height: 80vh }
header {
    position: relative;
    font-family: var(--font-utama);
    text-align: center;
    
    background-color: gray;
    background-color: $bg-green;
    // background-image: url($imageLink); 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    font-size: 1rem;
    color: white;

    #slide {
        margin-top: 10vh;
        $bayangan: 0px 2px 0;
        div:nth-child(1){
            #slogan {
                display: flex;
                flex-direction: column;
                margin-bottom: 1.3em;
                h1 {
                    
                    font-size: 4.5em;
                    font-weight: bold;
                    // text-transform: uppercase;
                    font-weight: 550;
                    letter-spacing: -2px;
                    line-height: .5em;
                    word-spacing: - .1em;


                    &:nth-child(1){
                        text-shadow: $bayangan rgba($color: black, $alpha: .5);
                    }

                    &:nth-child(2){
                        text-shadow: $bayangan rgba($color: black, $alpha: .5);

                        margin-right: .2em;
                        color: $bg-orange;
                    }
                }

                
            }
            
          
          
        }
        // Slide yg kanan
        div:nth-child(2){
            display: flex;
            justify-content: flex-end;

            p {
                color: rgba( #fff, .8 );
                letter-spacing: .4em;
                transform: rotate(90deg);
            }
            div {
                background-color: #fff;
                width: 200px;
                height: 200px;
                box-shadow: 2px 2px 10px rgb(104, 104, 104);
                transform: rotate(-2deg);
            }
        }
    }
    &::before {
        // Untuk handle background, supaya bisa diatur brighnest / filternya
        position: absolute;
        content:"";
        background-color: rgba(0, 0, 0, 0.6);
        filter: grayscale(0.5);
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .sosmed {
        a {
            display: flex;
            // justify-content: start;
            align-items: center;
            width: auto;
            background-color: $bg-primary;
            margin-right: .45vw;
            font-size: .8em;
            cursor: pointer;
            transition: linear .2s;
            $warna-deskripsi: rgba($color: #fff, $alpha: .8);
            border-radius: 50%;
            opacity: .9;
            color: white;
            &:hover {
                background-color: $bg-orange;
                border-radius: 0;
                span {
                    display: block;
                }
            }
            span {
                margin-right: .7rem;
                display: none;
            }
            $icon-width: 30px;
            $icon-padding: 8px;
            svg {
                display: block;
                background-color: inherit;
                color: $warna-deskripsi;
                padding: $icon-padding !important;
                border-radius: 50%;
                height: $icon-width;
                width: $icon-width;
            }
        }
    }
}
</style>