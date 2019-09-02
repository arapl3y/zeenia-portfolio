<template>
  <div class="about container">
    <ImageItem :source="aboutData.thumbnail" class="profile-image h-padded" />

    <div class="row h-padded">
      <p v-html="aboutData.description" />
    </div>

    <div class="row h-padded">
      <p v-html="aboutData.industries" />
    </div>

    <div class="row h-padded">
      <p v-html="aboutData.experience" />
    </div>

    <div class="row h-padded">
      <p v-html="aboutData.hobbies" />
    </div>

    <div class="row h-padded">
      <p v-html="aboutData.social" />
    </div>
  </div>
</template>

<script>
import ImageItem from '@/components/ImageItem.vue'

export default {
  name: 'About',
  components: {
    ImageItem
  },
  layout: 'dark',
  computed: {
    aboutData() {
      return this.$store.state.aboutData[0]
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  max-width: 60em;

  & > div:nth-child(2) {
    @media (min-width: $mid) {
      margin-top: 15rem;
    }
  }

  &.row {
    justify-content: flex-start;
  }

  & .row:nth-of-type(odd) {
    @media (min-width: $mid) {
      justify-content: flex-start;
    }
  }

  & .row:nth-of-type(even) {
    @media (min-width: $mid) {
      justify-content: flex-end;
    }
  }
}

.row {
  margin-top: 5rem;
  width: 100%;
  display: flex;
  align-items: center;

  p {
    width: 100%;
    font-size: 1.75rem;
    margin: 0;
    z-index: 1;
    mix-blend-mode: difference;

    @media (min-width: $mid) {
      max-width: 20rem;
    }

    @media (min-width: $mega) {
      max-width: 20rem;
      font-size: 2rem;
    }
  }
}

.profile-image {
  width: 100%;
  margin-top: 5rem;

  @media (min-width: $mid) {
    position: fixed;
    z-index: 0;
    max-width: 30rem;
    top: 15rem;
  }

  @media (min-width: $mega) {
    max-width: 40rem;
  }
}
</style>
