<template>
  <header class="column h-padded container">
    <div class="horizontal upper">
      <h1>zeenia</h1>
      <nuxt-link :to="{ path: '/about'}" tag="span" class="link">
        about me
      </nuxt-link>
    </div>
    <h1 class="horizontal">
      kaur
    </h1>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 9rem;
}

.upper {
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;

  .menu {
    font-size: 1rem;
  }

  &:first-of-type {
    justify-content: flex-start;
  }

  &:last-of-type {
    justify-content: flex-end;
  }

  &.link {
    font-size: 1.875rem;
  }
}
</style>
