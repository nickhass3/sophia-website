<template>
  <div class="about">
    <h1>About</h1>
    <h1 class="name">Sophia Hass</h1>
    <p>
      Sophia Hass is earning her degree in Commercial Music from Brigham Young
      University. She also studied Piano Performance for 2 years at the
      university. Sophia currently works as a Post-Production Audio Specialist
      for BYU Broadcasting; her work involves mixing and editing promos for TV
      shows and Radio Podcasts, such as <em>The Appleseed</em>. Sophia also runs
      online private piano studio from her home in Provo, Utah. She is a
      performer, artist, producer, and singer/songwriter.
    </p>
    <img class="recital-pic" src="../assets/recital.jpg" alt="recital" width="520">
  </div>
</template>

<style scoped>

* {
  margin: 10px 30px;
}

em {
  margin: 0;
  padding: 0;
}
.about {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  flex: 1;
}

.name {
  font-size: 40px;
}
p {
  display: block;
}
.recital-pic { }
</style>