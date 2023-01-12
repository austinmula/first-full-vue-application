<template>
  <div>
    <div v-for="item in allProducts" :key="item.id">
      <h3>{{ item.title }}</h3>
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getAllProducts"]),
  },
  computed: { ...mapGetters(["allProducts"]) },
  created() {
    this.getAllProducts();
  },
};
</script>

<style></style>
