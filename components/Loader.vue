<template>
  <div>
    <img :src=icon />
  </div>
</template>

<script>

export default {
  data() {
    return {
      icon: require('@/assets/img/spin.svg')
    }
  },
}
</script>