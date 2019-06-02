<template>
  <header class="column h-padded container">
    <div class="horizontal upper">
      <span>zeenia</span>
      <span class="link">about me</span>
    </div>
    <span class="horizontal">kaur</span>
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

span {
  font-size: 16rem;
  font-weight: normal;
  color: $black;
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
