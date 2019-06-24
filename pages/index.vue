<template>
  <section class="container h-padded column">
    <template v-for="project in projectPosts">
      <project-card :project="project" />
    </template>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  computed: {
    projectPosts() {
      return this.$store.state.projectPosts
    }
  }
}
</script>

<style scoped>
</style>
