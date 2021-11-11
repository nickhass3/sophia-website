<template>
  <div class="home">
    <HelloWorld msg="Hi, I'm Sophia" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style>
.home{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
  justify-content: center;

  flex: 1;
}
</style>