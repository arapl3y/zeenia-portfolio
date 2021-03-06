<template>
  <div v-if="project" class="container h-padded">
    <h2 v-html="project.title" />
    <p>{{ tags }}</p>
    <p v-html="project.intro" />


    <div class="content-container">
      <ImageItem v-if="project.thumbnail" :source="project.thumbnail" />

      <template v-for="(value, index) in project.descriptionTexts">
        <div :key="index">
          <ImageItem v-if="value.descriptionImage" :source="value.descriptionImage" class="description-image" />
          <p v-if="value.descriptionText" v-html="value.descriptionText" class="description-text" />
        </div>
      </template>
    </div>


    <nuxt-link :to="{ name: 'projects-slug', params: { slug: randomProjectSlug } }" class="suggestions" tag="div">
      <p>Something else to check out</p>

      <ImageItem :source="randomProject.thumbnail" />
      <p v-html="randomProject.title" />
      <p>{{ tags }}</p>
    </nuxt-link>
  </div>
</template>

<script>
import ImageItem from '@/components/ImageItem.vue'

export default {
  name: 'ProjectProfile',
  components: {
    ImageItem
  },
  transition(to, from) {
    return !from ? 'slide-left' : 'slide-right'
  },
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
      return this.$store.getters.getOtherRandomProject(this.$route.params.slug)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 15rem;

  @media (min-width: $mid) {
    margin-top: 30rem;
  }
}

h2 {
  margin-bottom: 5rem;

  @media (min-width: $mid) {
    margin-bottom: 10rem;
  }
}

p {
  align-self: flex-start;
  width: 100%;

  @media (min-width: $mid) {
    width: 50%;
  }
}

.content-container {
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  p {
    width: 100%;
    margin-top: 8rem;
  }

  & > figure {
    margin: 0 auto;
    position: relative;
    z-index: 3;
    width: 100%;

    @media (min-width: $mid) {
      max-width: 60rem;
    }
  }

  div {
    display: inline-block;
    margin: 5rem 0 4rem 0;
    max-width: 40rem;

    figure {
      max-width: 100%;
      position: relative;
      z-index: 3;
    }

    &:nth-of-type(3n + 1) {
      align-self: flex-start;
    }

    &:nth-of-type(3n + 2) {
      align-self: center;
    }

    &:nth-of-type(3n + 3) {
      align-self: flex-end;
    }

    @media (min-width: $mid) {
      margin: 10rem 0 8rem 0;
    }
  }
}

.suggestions {
  margin-top: 10rem;
  cursor: pointer;
  display: inline-block;

  p {
    width: 100%;

    &:first-of-type {
      margin-bottom: 5rem;
    }
  }

  figure {
    width: 100%;
    transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);

    &:hover {
      transform: scale(1.01) translateZ(0);
      box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
      backface-visibility: hidden;
    }

    @media (min-width: $mid) {
      width: 40rem;
    }
  }
}
</style>
