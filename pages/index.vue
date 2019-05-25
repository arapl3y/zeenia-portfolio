<template>
  <section>
    <ul>
      <li v-for="project in projectPosts">
        {{ project.title }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    projectPosts() {
      return this.$store.state.projectPosts
    }
  }
}
</script>

<style>
</style>
