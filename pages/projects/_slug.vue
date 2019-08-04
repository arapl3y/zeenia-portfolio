<template>
  <div class="container h-padded">
    <h2>{{ project.title }}</h2>
    <p> {{ tags }}</p>
    <p>{{ project.descriptionTexts[0].descriptionText }}</p>



    <div class="content-container">
      <img v-lazy="project.thumbnail">

      <template v-for="(value, index) in project.descriptionTexts.slice(1)">
        <div :key="index">
          <img v-lazy="value.descriptionImage" class="description-image">
          <p class="description-text">
            {{ value.descriptionText }}
          </p>
        </div>
      </template>
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
  position: relative;
  z-index: 3;
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
  }

  div {
    display: inline-block;
    margin: 10rem 0 8rem 0;
    max-width: 40rem;

    img {
      max-width: 100%;
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
  }
}
</style>
