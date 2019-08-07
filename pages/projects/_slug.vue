<template>
  <div v-if="project" class="container h-padded">
    <h2 v-html="project.title" />
    <p> {{ tags }}</p>
    <p v-html="project.intro" />



    <div class="content-container">
      <img v-lazy="project.thumbnail">

      <template v-for="(value, index) in project.descriptionTexts">
        <div :key="index">
          <img v-lazy="value.descriptionImage" class="description-image">
          <p v-html="value.descriptionText" class="description-text" />
        </div>
      </template>
    </div>


    <nuxt-link :to="{ name: 'projects-slug', params: { slug: randomProjectSlug } }" class="suggestions" tag="div">
      <p>Something else to check out</p>

      <img v-lazy="randomProject.thumbnail">
      <p v-html="randomProject.title" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectProfile',
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
  margin-top: 30rem;
}

h2 {
  margin-bottom: 10rem;
}

p {
  align-self: flex-start;
  width: 50%;
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

  & > img {
    margin: 0 auto;
    max-width: 60rem;
    position: relative;
    z-index: 3;
  }

  div {
    display: inline-block;
    margin: 10rem 0 8rem 0;
    max-width: 40rem;

    img {
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
  }

  // .description-image {
  //   max-width: 30rem;
  // }
}

.suggestions {
  margin-top: 10rem;
  cursor: pointer;
  display: inline-block;

  img {
    width: 30rem;
    transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);

    &:hover {
      transform: scale(1.01) translateZ(0);
      box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
      backface-visibility: hidden;
    }
  }
}
</style>
