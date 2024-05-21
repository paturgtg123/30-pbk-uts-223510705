<template>
    <div>
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
  </template>
  
  <script>
  export default {
    props: ['users', 'posts'],
    data() {
      return {
        selectedUser: '',
        filteredPosts: [],
      };
    },
    methods: {
      filterPosts() {
        this.filteredPosts = this.selectedUser ? this.posts.filter(post => post.userId === parseInt(this.selectedUser)) : [];
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  