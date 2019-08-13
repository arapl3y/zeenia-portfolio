<template>
  <div v-if="loading" class="loading-container">
    <div class="loading-circle" />
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  },
  transition: 'fade'
}
</script>

<style scoped>
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-circle {
  display: block;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  background-color: #ffd874;
  animation: pulse-circle 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
}
</style>
