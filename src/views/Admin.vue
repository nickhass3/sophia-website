<template>
  <div class="admin">
    <h1>The Admin Page</h1>
    <div class="heading">
      <div class="circle">1</div>
      <h2>Add a document</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="name" placeholder="Title">
        <p></p>
        <input v-model="section" placeholder="Section">
        <p></p>
        <input v-model="level" placeholder="Level">
        <p></p>
        <input v-model="instruments" placeholder="Instruments">
        <p></p>

        <input type="file" name="pdf" @change="fileChanged">
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{ addItem.name }} added</h2>
        <!-- <img :src="addItem.download" /> -->
      </div>
    </div>
    <div class="heading">
      <div class="circle">2</div>
      <h2>Edit/Delete a document</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.name}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <input v-model="findItem.name">
        <input v-model="findItem.section">
        <input v-model="findItem.level">
        <input v-model="findItem.instruments">
        <p></p>
        <img :src="findItem.download" />
      </div>
      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
        <button @click="editItem(findItem)">Edit</button>
      </div>
    </div>

  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "Admin",
  data() {
    return {
      name: "",
      section: "",
      level: "",
      instruments: "",
      file: null,
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
    };
  },
  created() {
    this.getItems();
  },
  computed: {
    suggestions() {
      let items = this.items.filter((item) =>
        item.name.toLowerCase().startsWith(this.findTitle.toLowerCase())
      );
      return items.sort((a, b) => a.name > b.name);
    },
  },
  methods: {
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          name: this.findItem.name,
          section: this.findItem.section,
          level: this.findItem.level,
          instruments: this.findItem.instruments,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append("pdf", this.file, this.file.name);
        let r1 = await axios.post("/api/pdfs", formData); //TODO: This is where the error is
        let r2 = await axios.post("/api/items", {
          name: this.name,
          section: this.section,
          level: this.level,
          instruments: this.instruments,
          download: r1.data.download,
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.admin {
  margin: 0 40px;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center;
}

/* Form */
input,
textarea,
select,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0;
}

.upload img {
  max-width: 300px;
}
</style>
