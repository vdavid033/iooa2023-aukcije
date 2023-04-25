<template>

    <q-item class="q-pa-sm text-bold text-blue-7" style="font-size: 30px"
      >{{kategorija.naziv_kategorije}}</q-item
    >
    <div class="q-pa-sm row flex flex-center">
      <div
        v-for="item in items"
        :key="item.sifra_predmeta"
        class="q-pa-md"
        style="width: 400px"
      >
      
        <q-card @click = "navigateToItem(item.sifra_predmeta)">
          <q-img :src="item.slika" no-native-menu />
          <q-item-section>
            
            <q-item class="q-pa-sm text-bold text-blue-7">{{
              item.naziv_predmeta
            }}</q-item>
            <q-item>Početna cijena: {{ item.pocetna_cijena }}$</q-item>
            <q-item>Vrijeme zavrsetka: {{ formattedDate(item.vrijeme_zavrsetka) }}</q-item>
            <q-item
              >Preostalo vrijeme aukcije: {{ item.preostalo_vrijeme }}</q-item
            >
          </q-item-section>
        </q-card>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import axios from "axios";
  
  const baseUrl = "http://localhost:3306/api/";
  
  export default {
    computed: {
    sifra_kategorije() {
      return this.$route.query.sifra_kategorije;
    },
    sifra_predmeta() {
      return this.$route.query.sifra_predmeta;
    }
  },
    setup() {
      return {
        date: ref("2023-03-27 12:44"),
      date2: ref("2023-03-27 12:44"),
      dialog: ref(false),
      small: ref(false),
      model: ref(null),
      };
    },
    data() {
      return {
        kategorija: [],
        items:[],
      };
    },
    mounted() {
      axios
        .get(baseUrl + "get-kategorija-predmet/" + this.sifra_kategorije, {})
        .then((response) => {
      this.kategorija = response.data[0];
    });
    axios
        .get(baseUrl + "get-predmet/" + this.sifra_predmeta, {})
        .then((response) => {
      this.items = response.data[0];
    });
    },
  
    methods: {
      formattedDate(dateString) {
        return new Date(dateString).toLocaleString('hr-HR').replace(',', '');
      },
      navigateToItem (sifra_predmeta){
      this.$router.push({ path: 'prikaz', query: { sifra_predmeta } });
         },
      
           navigateToItem1 (sifra_kategorije)
           {this.$router.push({ path: 'kategorija', query: { sifra_kategorije } });
    }
  },
  
  };
  </script>
  <style>
  /*.q-carousel {
       height: 300px;
       max-width: 500px;*/
  .q-img {
    height: 300px;
    max-width: 500px;
  }
  </style>
  