<template>
  <div id="app">
    <div id="wrapper">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/my-work">My Work</router-link> |
        <router-link to="/lessons">Lessons</router-link>
      </div>
      <router-view />
      <div class="footer-container">
        <div class="footer">
          <!-- Add font awesome icons -->
          <a href="https://www.linkedin.com/in/sophia-oaks-hass-a63b051b8/" class="fa fa-linkedin"></a>
          <a href="https://soundcloud.com/sophia-oaks-music" class="fa fa-soundcloud"></a>
          <a href="https://www.instagram.com/sososophia_/" class="fa fa-instagram"></a>
          <a href="https://www.youtube.com/channel/UCiXbk9EAle8TN_Wek_EQnqw/featured" class="fa fa-youtube"></a>
          <a href="https://github.com/nickhass3/sophia-website" class="fa fa-github"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#wrapper {
  flex: 1 0 auto;

  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;
  font-size: 1.25em;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #900c3f;
}

#nav a:hover {
  color: #d5a4b7;
}

.footer {
  background-color: #efefef;
  flex: 0 0 50px;/*or just height:50px;*/
  margin-top: auto;
  padding: 50px;
}

.footer a {
  color: #900c3f;
  font-size: 25px;
  padding: 0 50px;
  text-decoration: none;
}

.footer a:hover {
  color: #d5a4b7;
}
</style>

<script>
import axios from "axios";
export default {
  created() {
    console.log('hello');
    this.getItems();
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