<template>
  <div class="wrapper">
    <h1>My Work</h1>
    <p><router-link to="/admin">Add music</router-link></p>
    <div class="products">
      <div class="product" v-for="composition in music" :key="composition.id">
        <h3>{{ composition.name }}</h3>
        <p>{{ composition.level }}</p>
        <p>{{ composition.instruments }}</p>
        <button class="auto"><a v-bind:href="'/Files-for-website/'+composition.download" v-bind:download="composition.download" style="text-decoration: none;">Download</a></button>
      </div>

      <div class="product" v-for="composition in items" :key="composition.id">
        <h3>{{ composition.name }}</h3>
        <p>{{ composition.level }}</p>
        <p>{{ composition.instruments }}</p>
        <button class="auto"><a v-bind:href="'/Files-for-website/'+composition.download" v-bind:download="composition.download" style="text-decoration: none;">Download</a></button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    }
  },
  name: "Sheet-Music-List",
  props: {
    music: Array,
  },
  //methods: {},
  created() {
    console.log('hi');
    var myItems = this.getItems();
    console.log(myItems);
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
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