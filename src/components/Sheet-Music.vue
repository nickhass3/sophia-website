<template>
  <div class="wrapper">
    <h1>My Work</h1>
    <div class="products">
      <div class="product" v-for="composition in music" :key="composition.id">
        <h3>{{ composition.name }}</h3>
        <p>{{ composition.level }}</p>
        <p>{{ composition.instruments }}</p>
        <button class="auto"><a href="../assets/Files%20for%20website/Stitches.pdf" download="Stitches.pdf" style="text-decoration: none;">Download</a></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sheet-Music-List",
  props: {
    music: Array,
  },
  methods: {
  },
}
</script>

<style scoped>
* {
  margin: 10px 30px;
}
a {
  color: #900c3f;
}
a:hover {
  color: #d5a4b7;
}
.products {
  display: grid;
  /*flex-wrap: wrap;
  justify-content: space-around;*/
}

.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
}
</style>