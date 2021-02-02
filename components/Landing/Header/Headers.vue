<template>
  <Header class="d-flex justify-content-center align-items-center">
      <Navbars></Navbars>
      
      <div class="container">

      <div class="col-md-12  p-0 d-flex justify-content-between" id="slide">
          <div class="col-md-6 text-left p-0 ">
              <div id="slogan">
                  <h1>Probio</h1>
                  <h1>System</h1>
              </div>
              <p>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi non nisi expedita! Recusandae tempore, iusto perferendis exercitationem adipisci a quisquam nemo ipsam rem eligendi nobis, tempora nesciunt unde vero sunt.
              </p>
              <button class="btn btn-primary btn-sm">Contact Me</button>
          </div>
          <div class="col-md-6 text-right">
              
              <div class=""></div>

          </div>
      </div>
      </div>
  </Header>
</template>



<style lang="scss" scoped>
$imageLink: '~@/assets/img/hero.jpg';

header {
    position: relative;
    height: 100vh;
    font-family: var(--font-utama);
    text-align: center;
    
    background-color: gray;
    background-color: $bg-green;
    background-image: url($imageLink); 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    font-size: 1rem;
    color: white;

    #slide {

        $bayangan: 0px 2px 0;
        div:nth-child(1){
            #slogan {
                display: flex;

                h1 {
                    font-size: 3em;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-weight: 550;
                    letter-spacing: 2px;
                    line-height: 1.5em;
                    word-spacing: - .1em;


                    &:nth-child(1){
                        text-shadow: $bayangan rgba($color: black, $alpha: .5);
                    }

                    &:nth-child(2){
                        text-shadow: $bayangan rgba($color: black, $alpha: .5);

                        margin-left: .2em;
                        color: $bg-orange;
                    }
                }

                
            }
            
            p {
                width: 85%;
                color: rgba($color: #fff, $alpha: .8);
                line-height: 1.6em;
                font-size: 1.2em  t;
                font-weight: 200 ;
            }
        }
        // Slide yg kanan
        div:nth-child(2){
            display: flex;
            justify-content: flex-end;
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
}
</style>