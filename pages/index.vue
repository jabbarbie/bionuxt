<template>
<div>
  <Headers/>
  <Kotaks/> 
  <Abouts/> 
  <DaftarPost/>
  <Footers/>
</div>
</template>


<script>
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default'
  // layout: 'mobile'
}
</script>

