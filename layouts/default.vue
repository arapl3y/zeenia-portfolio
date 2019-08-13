<template>
  <div class="root">
    <div v-if="!loading">
      <app-header />
      <nuxt />
    </div>

    <loading :loading="loading" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import Loading from '@/components/loading.vue'

export default {
  components: {
    AppHeader,
    Loading
  },
  data: () => ({
    loading: true
  }),
  mounted() {
    setTimeout(() => (this.loading = false), 1000)
  }
}
</script>


<style lang="scss" scoped>
.root {
  background-color: #fff;
  color: $black;
}
</style>
