<template>
  <header>
    <nav>
      <ul class="menu">
        <li :class="{ active: currentView === 'todos' }" @click="currentView = 'todos'">Todos</li>
        <li :class="{ active: currentView === 'posts' }" @click="currentView = 'posts'">Posts</li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <div v-if="currentView === 'todos'">
      <h1>Daftar Lagu Favorit</h1>

      <form class="form" @submit.prevent="tambahLagu">
        <input class="input" v-model="laguBaru" type="text" placeholder="Tambahkan lagu baru">
        <button class="button" type="submit">Tambah</button>
      </form>

      <ul class="lagu-list">
        <li v-for="(lagu, index) in laguTidakSelesai" :key="index" class="lagu-item">
          <input class="checkbox" type="checkbox" v-model="lagu.selesai">
          <span class="nama-lagu" :class="{ 'selesai': lagu.selesai }">{{ lagu.nama }}</span>
          <button class="button batalkan-button" @click="hapusLagu(index)">Hapus</button>
        </li>
      </ul>

      <label class="filter-label">
        <input class="filter-checkbox" type="checkbox" v-model="filterSelesai"> Tampilkan yang Belum Selesai
      </label>
    </div>

    <div v-if="currentView === 'posts'" class="fetch-section">
      <div v-if="users.length" class="result">
        <h2>Users:</h2>
        <select v-model="selectedUser" @change="filterPosts">
          <option value="">All Users</option>
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
      </div>

      <div v-if="selectedUser && filteredPosts.length" class="result">
        <h2>Posts:</h2>
        <ul>
          <li v-for="post in filteredPosts" :key="post.id">{{ post.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentView: 'todos',
      laguBaru: '',
      laguList: [],
      filterSelesai: false,
      users: [],
      posts: [],
      selectedUser: '',
      filteredPosts: []
    };
  },
  methods: {
    tambahLagu() {
      if (this.laguBaru.trim() !== '') {
        this.laguList.push({ nama: this.laguBaru, selesai: false });
        this.laguBaru = '';
        this.filterLagu();
      }
    },
    hapusLagu(index) {
      this.laguList.splice(index, 1);
      this.filterLagu();
    },
    toggleSelesai(index) {
      this.laguList[index].selesai = !this.laguList[index].selesai;
    },
    filterLagu() {
      if (this.filterSelesai) {
        this.laguList = this.laguList.filter(lagu => !lagu.selesai);
      }
    },
    async fetchData() {
      try {
        const [usersResponse, postsResponse] = await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/users'),
          axios.get('https://jsonplaceholder.typicode.com/posts')
        ]);
        this.users = usersResponse.data;
        this.posts = postsResponse.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    filterPosts() {
      if (this.selectedUser) {
        this.filteredPosts = this.posts.filter(post => post.userId === parseInt(this.selectedUser));
      } else {
        this.filteredPosts = [];
      }
    }
  },
  watch: {
    currentView(newView) {
      if (newView === 'posts' && this.users.length === 0 && this.posts.length === 0) {
        this.fetchData();
      }
    }
  },
  computed: {
    laguTidakSelesai() {
      if (this.filterSelesai) {
        return this.laguList.filter(lagu => !lagu.selesai);
      } else {
        return this.laguList;
      }
    }
  }
};
</script>

<style>

body {
  background-image: url('./assets/bamboo.jpg');
  background-size: cover;
}

header {
  width: 100%;
  text-align: center;
  left: 0;
  top: 0;
  position:absolute;
}

nav {
  background-color: #459848;
  width: 100%;
  display: inline-block;
}

.menu {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content:center;
}

.menu li {
  cursor: pointer;
  padding: 10px;
  background-color: #459848;
  color: white;
  border-radius: 4px;
}

.menu li.active {
  background-color: #459848;
}

.menu li:hover {
  background-color: #459848;
}

.form {
  margin-bottom: 20px;
}

.input {
  padding: 8px;
  font-size: 16px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #45a049;
}

.lagu-list {
  list-style-type: none;
  padding: 0;
}

.lagu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(44, 42, 42, 0.8);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.checkbox {
  margin-right: 10px;
}

.nama-lagu {
  font-size: 16px;
}

.nama-lagu.selesai {
  text-decoration: line-through;
}

.batalkan-button {
  background-color: #f44336;
}

.filter-label {
  display: inline-block;
  margin-top: 20px;
  font-size: 16px;
}

.filter-checkbox {
  margin-right: 5px;
}

.fetch-section {
  margin-top: 20px;
}

.fetch-button {
  margin-right: 10px;
  background-color: #2196F3;
}

.fetch-button:hover {
  background-color: #0b7dda;
}

.result {
  margin-top: 20px;
}

.result h2 {
  margin-bottom: 10px;
}

.result ul {
  list-style-type: none;
  padding: 0;
}

.select {
  margin-bottom: 20px;
}
</style>

