<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Daftar Lagu Favorit</q-toolbar-title>
    </q-toolbar>

    <q-card>
      <q-card-section>
        <q-form @submit.prevent="tambahLagu">
          <div class="row items-center q-gutter-md">
            <q-input
              v-model="laguBaru"
              placeholder="Tambahkan lagu baru"
              outlined
              dense
              :clearable="true"
              class="col"
            />
            <q-btn type="submit" label="Tambah" color="primary" class="col-auto" />
          </div>
        </q-form>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item v-for="(lagu, index) in laguList" :key="index">
            <q-item-section avatar>
              <q-checkbox v-model="lagu.selesai" />
            </q-item-section>
            <q-item-section>
              <span :class="{ selesai: lagu.selesai }">{{ lagu.nama }}</span>
            </q-item-section>
            <q-item-section side>
              <q-btn
                icon="delete"
                color="negative"
                flat
                round
                dense
                @click="hapusLagu(index)"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section>
        <q-checkbox
          v-model="filterSelesai"
          @change="filterLagu"
          label="Tampilkan yang Belum Selesai"
          color="primary"
          dense
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { QPage, QToolbar, QToolbarTitle, QCard, QCardSection, QForm, QInput, QBtn, QCheckbox, QList, QItem, QItemSection } from 'quasar';

export default {
  components: {
    QPage,
    QToolbar,
    QToolbarTitle,
    QCard,
    QCardSection,
    QForm,
    QInput,
    QBtn,
    QCheckbox,
    QList,
    QItem,
    QItemSection,
  },
  props: ['laguList'],
  data() {
    return {
      laguBaru: '',
      filterSelesai: false,
    };
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
    hapusLagu(index) {
      this.$emit('hapus-lagu', index);
    },
  },
};
</script>

<style scoped>
.selesai {
  text-decoration: line-through;
}

/* Menjadikan teks label checkbox menjadi warna hitam */
.q-checkbox__label {
  color: black;
}
</style>
