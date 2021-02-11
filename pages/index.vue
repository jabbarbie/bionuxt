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
  layout: (ctx) => ctx.$device.isMobile ? 'mobile' : 'default',
  data() {
    return {
      landing: true
    }
  },
  // layout: 'mobile'
}
</script>

