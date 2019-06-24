<template>
  <div>
    <img :src="project.thumbnail" alt="">
    <p>{{ project.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 8rem;

  &:nth-of-type(3n + 1) {
    align-self: flex-start;
  }

  &:nth-of-type(3n + 2) {
    align-self: center;
    img {
      width: 40rem;
    }
  }

  &:nth-of-type(3n + 3) {
    align-self: flex-end;
    img {
      width: 30rem;
    }
  }
}
</style>
