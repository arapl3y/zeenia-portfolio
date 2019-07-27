<template>
  <header :class="{ dark: isDark }" class="column h-padded container">
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

    <div class="nav">
      <nuxt-link v-if="!isDark" :to="{ path: '/about'}" tag="span" class="link">
        about me
      </nuxt-link>

      <nuxt-link v-else :to="{ path: '/'}" tag="span" class="link">
        close
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
  position: relative;

  &.dark {
    background-color: $black;
    color: #fff;
    margin: 0;
    align-items: center;
    justify-content: center;
    display: flex;

    div {
      margin-top: 2rem;
    }

    .logo {
      max-width: 10rem;
    }
  }
}

.logo {
  cursor: pointer;
}

.nav {
  position: absolute;
  right: 1rem;
  top: 25%;
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
