<template>
  <nuxt-link :to="{ name: 'projects-slug', params: { slug: slug } }" tag="div">
    <img v-lazy="project.thumbnail" alt="">
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
  z-index: 3;
  margin-bottom: 8rem;
  cursor: pointer;

  p {
    margin: 0.5rem 0;
  }

  img {
    transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);

    &:hover {
      transform: scale(1.01) translateZ(0);
      box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
      backface-visibility: hidden;
    }
  }

  &:nth-of-type(3n + 1) {
    align-self: flex-start;

    img {
      max-width: 100%;

      @media (min-width: $small) {
        max-width: 20rem;
      }

      @media (min-width: $mid) {
        max-width: 30rem;
      }

      @media (min-width: $big) {
        max-width: 40rem;
      }
    }
  }

  &:nth-of-type(3n + 2) {
    align-self: center;

    img {
      max-width: 100%;

      @media (min-width: $small) {
        max-width: 10rem;
      }

      @media (min-width: $mid) {
        max-width: 20rem;
      }

      @media (min-width: $big) {
        max-width: 30rem;
      }
    }
  }

  &:nth-of-type(3n + 3) {
    align-self: flex-end;

    img {
      max-width: 100%;

      @media (min-width: $small) {
        max-width: 10rem;
      }

      @media (min-width: $mid) {
        max-width: 20rem;
      }

      @media (min-width: $big) {
        max-width: 30rem;
      }
    }
  }
}
</style>
