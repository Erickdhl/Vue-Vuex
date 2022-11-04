<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>qwerty </h1>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Primary</button>
    <button @click="gotoDaybook" class="btn btn-success">Primary</button>
  </div>
</template>

<script>
export default {
  methods: {
    gotoDaybook() {
      this.$router.push({ name: 'no-entry'})
    }
  }
}
</script>



