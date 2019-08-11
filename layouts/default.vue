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
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
}
</script>


<style lang="scss" scoped>
.root {
  background-color: #fff;
  color: $black;
}
</style>
