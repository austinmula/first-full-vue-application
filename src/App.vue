<template>
  <router-link to="/">Home</router-link>
  <router-view />
  <h2>{{ greeting }}</h2>
</template>

<script>
export default {
  data() {
    return {
      greeting: "Hello World",
    };
  },
};
</script>

<style></style>
