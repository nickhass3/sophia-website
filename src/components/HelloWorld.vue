<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <h3 class="blurb">I'm a pianist and singer/songwriter.</h3>
    <img class="image"
      src="../assets/recital-pic.jpeg"
      alt="Profile Pic"
      width="400"
    />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 50px 150px 250px;
  grid-column-gap: 40px;
}
.title{
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
.blurb{
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
.image{
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 3;
  max-width: 100%;
}

</style>
