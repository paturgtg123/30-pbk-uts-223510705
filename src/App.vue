<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar color="primary">
        <q-toolbar-title>
          UAS PBK Muflif Fadhlurrochman
        </q-toolbar-title>
        <div class="q-space"></div> <!-- Space untuk memisahkan elemen -->
        <q-btn to="/todos" flat dense>Todos</q-btn>
        <q-btn to="/posts" flat dense>Posts</q-btn>
        <q-btn to="/albums" flat dense>Albums</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { QLayout, QHeader, QToolbar, QToolbarTitle, QPageContainer, QBtn } from 'quasar';

export default {
  components: {
    QLayout,
    QHeader,
    QToolbar,
    QToolbarTitle,
    QPageContainer,
    QBtn,
  },
  name: 'App',
};
</script>

<style scoped>
.q-space {
  flex: 1; /* Memberikan ruang fleksibel untuk memisahkan elemen di toolbar */
}

.toolbar-title {
  font-size: 1.5rem; /* Ukuran font title toolbar */
  font-weight: bold; /* Ketebalan font title toolbar */
  color: #ffffff; /* Warna teks putih */
}

.toolbar-btn {
  margin-left: 10px; /* Jarak antara tombol di toolbar */
  color: #fff; /* Warna teks putih */
}

.toolbar-btn:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Warna latar belakang semi-transparan saat hover */
}
</style>