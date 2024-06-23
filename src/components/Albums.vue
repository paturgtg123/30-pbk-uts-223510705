<template>
  <q-page>
    <q-card class="q-pa-md">
      <q-card-section>
        <h1>Albums</h1>
      </q-card-section>
      <q-card-section>
        <q-row class="q-col-gutter-md">
          <q-col v-for="album in albums" :key="album.id" cols="4">
            <q-card class="album-card">
              <router-link :to="'/albums/' + album.id" class="album-link">
                <q-card-section class="album-section">
                  {{ album.title }}
                </q-card-section>
              </router-link>
            </q-card>
          </q-col>
        </q-row>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { useAppStore } from '../stores/index.js';
import { computed } from 'vue';

export default {
  setup() {
    const store = useAppStore();

    return {
      albums: computed(() => store.albums),
    };
  },
  mounted() {
    const store = useAppStore();
    store.fetchData();
  },
};
</script>

<style scoped>
.album-card {
  height: 100%; /* Agar kartu album memiliki tinggi yang seragam */
  border-radius: 8px; /* Sudut membulat */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Bayangan halus */
}

.album-link {
  display: block;
  height: 100%;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.album-link:hover {
  background-color: #f0f0f0; /* Warna latar belakang saat hover */
  transform: translateY(-2px); /* Efek sedikit naik saat hover */
}

.album-section {
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
}
</style>
