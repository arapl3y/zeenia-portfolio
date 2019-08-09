<template>
  <header :class="{ dark: isDark }" class="h-padded container">
    <nav class="nav">
      <nuxt-link :class="{ show : !isDark}" :to="{ path: '/about'}" tag="span" class="link">
        about me
      </nuxt-link>

      <nuxt-link :class="{ show : isDark}" :to="{ path: '/'}" tag="span" class="link">
        close
      </nuxt-link>
    </nav>

    <div>
      <nuxt-link :to="{ path: '/' }" tag="div" class="logo">
        <template v-if="!isDark">
          <h1 class="horizontal">
            zeenia
          </h1>

          <h1 class="horizontal">
            kaur
          </h1>
        </template>


        <template v-else>
          <img src="/images/zk-logo.svg" class="logo">
        </template>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isDark: false
    }
  },
  watch: {
    $route: {
      handler(val) {
        if (val.path === '/about') {
          this.isDark = true
        } else {
          this.isDark = false
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 1;

  &.dark {
    position: static;
    color: #fff;
    margin: 0;
    align-items: center;
    justify-content: center;
    display: flex;

    .logo {
      max-width: 10rem;
    }

    @media (min-width: $mid) {
      position: fixed;
    }
  }
}

.logo {
  cursor: pointer;

  @media (min-width: $mid) {
    margin-top: 0.75rem;
  }
}

.nav {
  position: absolute;
  right: 0;
  top: 2.5rem;

  span {
    position: absolute;
    right: 0.5rem;
    opacity: 0;
    z-index: 0;
    transition: opacity 0.3s ease-in-out;
    width: 5rem;
    text-align: right;

    @media (min-width: $mid) {
      right: 1rem;
      top: 1.5rem;
    }

    &.show {
      opacity: 1;
      z-index: 1;
      width: 5rem;
    }
  }
}

h1 {
  margin: 0;
  line-height: 0.8;

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
