<template>
  <div class="h-padded container">
    <img :src="project.thumbnail" alt="">
    <p>{{ project.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 50rem;
}
</style>
