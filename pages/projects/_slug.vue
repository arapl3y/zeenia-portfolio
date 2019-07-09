<template>
  <div class="container h-padded">
    <h2>{{ project.title }}</h2>
    <p>{{ project.body }}</p>
    <div class="img-container">
      <img :src="project.thumbnail">
    </div>


    <div class="suggestions">
      <p>Something else to check out</p>

      <img :src="randomProject.thumbnail">
      <p>{{ randomProject.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectProfile',
  computed: {
    project() {
      return this.$store.getters.getProjectBySlug(this.$route.params.slug)
    },
    randomProject() {
      return this.$store.getters.getRandomProject
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 10rem;
}

.img-container {
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 0 auto;
  }
}

.suggestions {
  margin-top: 10rem;

  img {
    width: 30rem;
  }
}
</style>
