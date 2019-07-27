<template>
  <nuxt-link :to="{ name: 'projects-slug', params: { slug: slug } }" tag="div">
    <img :src="project.thumbnail" alt="">
    <p>{{ project.title }}</p>
    <p>{{ tags }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    slug() {
      return this.project._path.split('/')[2]
    },
    tags() {
      return this.project.tags.join(' / ')
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 8rem;
  cursor: pointer;

  &:nth-of-type(3n + 1) {
    align-self: flex-start;
    img {
      max-width: 40rem;
    }
  }

  &:nth-of-type(3n + 2) {
    align-self: center;

    img {
      max-width: 30rem;
    }
  }

  &:nth-of-type(3n + 3) {
    align-self: flex-end;

    img {
      max-width: 30rem;
    }
  }
}
</style>
