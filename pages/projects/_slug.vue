<template>
  <div class="container h-padded">
    <h2>{{ project.title }}</h2>
    <p> {{ tags }}</p>
    <p>{{ project.descriptionTexts[0] }}</p>



    <div class="img-container">
      <img :src="project.thumbnail">

      <p v-for="(text, index) in project.descriptionTexts.slice(1)" :key="index">
        {{ text }}
      </p>
    </div>


    <nuxt-link :to="{ name: 'projects-slug', params: { slug: randomProjectSlug } }" class="suggestions" tag="div">
      <p>Something else to check out</p>

      <img :src="randomProject.thumbnail">
      <p>{{ randomProject.title }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectProfile',
  computed: {
    project() {
      return this.$store.getters.getProjectBySlug(this.$route.params.slug)
    },
    randomProjectSlug() {
      return this.randomProject._path.split('/')[2]
    },
    tags() {
      return this.project.tags.join(' / ')
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

p {
  align-self: flex-start;
  width: 50%;
}

.img-container {
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  p {
    align-self: flex-end;
    width: 50%;
    margin-top: 8rem;
  }

  img {
    margin: 0 auto;
    max-width: 60rem;
  }
}

.suggestions {
  margin-top: 10rem;

  img {
    width: 30rem;
  }
}
</style>
