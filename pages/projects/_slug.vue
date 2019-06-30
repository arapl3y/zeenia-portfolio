<template>
  <div>
    <h2>{{ project.title }}</h2>
    <p>{{ project.body }}</p>
    <img :src="project.thumbnail" >
  </div>
</template>

<script>
export default {
  name: 'ProjectProfile',
  computed: {
    project() {
      return this.$store.getters.getProjectBySlug(this.$route.params.slug)
    }
  }
}
</script>

<style>
</style>
