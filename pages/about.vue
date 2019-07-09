<template>
  <div class="about container">
    <div class="row h-padded">
      <p>{{ aboutData.description }}</p>
    </div>

    <img :src="aboutData.thumbnail" class="profile-image">

    <div class="row h-padded">
      <p>{{ aboutData.industries }}</p>
    </div>

    <div class="row h-padded">
      <p>{{ aboutData.experience }}</p>
    </div>

    <div class="row h-padded">
      <p>{{ aboutData.hobbies }}</p>
    </div>

    <div class="row h-padded">
      <p>{{ aboutData.social }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
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
  max-width: 50em;

  & .row:nth-of-type(odd) {
    justify-content: flex-start;
  }

  & .row:nth-of-type(even) {
    justify-content: flex-end;
  }
}

.row {
  margin-top: 5rem;
  width: 100%;
  display: flex;
  align-items: center;

  p {
    max-width: 20rem;
    font-size: 1.75rem;
    margin: 0;
    z-index: 1;
  }
}

.profile-image {
  position: fixed;
  max-width: 25rem;
  top: 15rem;
  z-index: 0;
}
</style>
