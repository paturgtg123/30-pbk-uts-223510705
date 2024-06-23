import { defineStore } from 'pinia';
import axios from 'axios';

export const useAppStore = defineStore('app', {
  state: () => ({
    users: [],
    posts: [],
    albums: [],
    photos: [],
  }),
  actions: {
    async fetchData() {
      try {
        const [usersResponse, postsResponse, albumsResponse, photosResponse] = await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/users'),
          axios.get('https://jsonplaceholder.typicode.com/posts'),
          axios.get('https://jsonplaceholder.typicode.com/albums'),
          axios.get('https://jsonplaceholder.typicode.com/photos'),
        ]);
        this.users = usersResponse.data;
        this.posts = postsResponse.data;
        this.albums = albumsResponse.data;
        this.photos = photosResponse.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
});