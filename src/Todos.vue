<template>
    <div>
      <h1>Daftar Lagu Favorit</h1>
      <form class="form" @submit.prevent="tambahLagu">
        <input class="input" v-model="laguBaru" type="text" placeholder="Tambahkan lagu baru" />
        <button class="button" type="submit">Tambah</button>
      </form>
      <ul class="lagu-list">
        <li v-for="(lagu, index) in filteredLaguList" :key="index" class="lagu-item">
          <input class="checkbox" type="checkbox" v-model="lagu.selesai" />
          <span class="nama-lagu" :class="{ 'selesai': lagu.selesai }">{{ lagu.nama }}</span>
          <button class="button batalkan-button" @click="$emit('hapus-lagu', index)">Hapus</button>
        </li>
      </ul>
      <label class="filter-label">
        <input class="filter-checkbox" type="checkbox" v-model="filterSelesai" @change="filterLagu" /> Tampilkan yang Belum Selesai
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: ['laguList'],
    data() {
      return {
        laguBaru: '',
        filterSelesai: false,
      };
    },
    computed: {
      filteredLaguList() {
        return this.filterSelesai ? this.laguList.filter(lagu => !lagu.selesai) : this.laguList;
      },
    },
    methods: {
      tambahLagu() {
        if (this.laguBaru.trim() !== '') {
          this.$emit('tambah-lagu', { nama: this.laguBaru, selesai: false });
          this.laguBaru = '';
        }
      },
      filterLagu() {
        this.$emit('filter-lagu', this.filterSelesai);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  