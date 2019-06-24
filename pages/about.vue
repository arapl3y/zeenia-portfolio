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
  computed: {
    aboutData() {
      return this.$store.state.aboutData[0]
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  background-color: $black;
  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  max-width: 50rem;

  & .row:nth-of-type(odd) {
    justify-content: flex-start;
  }

  & .row:nth-of-type(even) {
    justify-content: flex-end;
  }
}

.row {
  width: 100%;
  display: flex;
  align-items: center;

  p {
    max-width: 15rem;
    font-size: 1.5rem;
    margin: 0;
    z-index: 1;
  }
}

.profile-image {
  max-width: 25rem;
  position: absolute;
  top: 15rem;
  z-index: 0;
}
</style>
