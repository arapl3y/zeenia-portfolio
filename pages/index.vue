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
      return this.$store.getters.getProjects
    }
  },
  transition(to, from) {
    return !from ? 'slide-right' : 'slide-left'
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 18rem;

  @media (min-width: $mid) {
    margin-top: 30rem;
  }
}
</style>
