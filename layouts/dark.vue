<template>
  <div class="root">
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>


<style scoped lang="scss">
.root {
  background-color: $black;
  color: #fff;
}
</style>
