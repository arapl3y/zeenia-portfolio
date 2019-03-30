<template>
  <section class="column h-padded container">
    <span class="horizontal">zeenia</span>
    <span class="horizontal">kaur</span>

    <p>product designer</p>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// .nav {
//   writing-mode: tb-rl;
//   transform: rotate(180deg);
// }

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
}
</style>
