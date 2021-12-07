<template>
  <div class="work">
    <music :music="mock1"></music>
  </div>
</template>

<script>
import music from "../components/Sheet-Music.vue";
export default {
  data() {
    return {
      mock1: this.$root.$data.products,
    };
  },
  components: {
    music, // same thing as Sheet-Music.vue
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(thing => thing.section === this.section);
    },
  },
  methods: {
    select(section) {
      this.section = section;
    },
  },
};
</script>

<style scoped>

a {
  color: #900c3f;
  text-decoration: none;
}
a:hover {
  color: #d5a4b7;
}

ul {
  list-style-type: none;
}

li {
  display: inline;
  margin: 0 20px;
}

h2 {
  display: inline;
}
/*
.work {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100px;
  justify-content: center;

  flex: 1 auto;
}*/
</style>