<template>
<div id="wrapper-mobile" class="d-flex justify-content-center align-items-center">
  <div class="d-flex flex-column justify-content-center">
    <h1>Page Not Found</h1>
    <h2>Untuk Mode Smartphone</h2>
    <h3>Sepertinya belum bisa diakses</h3>
    <p> Silahkan kunjugi lagi nanti</p>
  </div>
</div>
</template>

<style lang="scss" scope>

#wrapper-mobile {
  background-color: $bg-primary;
  color: white;
  widows: 100vw;
  height: 100vh;
  text-align: center;

  div {
    width: 80%;
    h1 {
      font-size: 2rem;
      font-weight: 600;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      padding: .6rem 0 ;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    h3{
      font-size: 1.2rem;
    }
    p {

      margin-top: 1rem;
      text-align: center;
      font-weight: 500;
    }
  }
}
</style>