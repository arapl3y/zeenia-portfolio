<template>
  <figure v-lazyload class="image__wrapper">
    <div class="loading-circle image__loader" />
    <img
      :data-url="source"
      class="image__item"
      alt="project.title"
    >
  </figure>
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
    source: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
figure {
  margin: 0;
}

.image {
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &.loaded {
      .image {
        &__item {
          visibility: visible;
          opacity: 1;
        }

        &__loader {
          display: none;
        }
      }
    }
  }

  &__loader {
    position: absolute;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ffd874;
    animation: pulse-circle 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
  }

  &__item {
    width: 100%;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
