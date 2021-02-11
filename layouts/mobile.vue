<template>
<div>
  <Headers :landing="landing" />
  <Kotaks/> 
  <Abouts/> 
  <DaftarPost/>
  <Footers/>
</div>
</template>
<script>
export default {
  data() {
    return {
      landing: true
    }
  }, 
}
</script>
<style lang="scss" scope>
  // html {
  //   font-size: 14px;
  // }
</style>