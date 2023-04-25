<template>
  <q-card class="q-pa-sm q-gutter-sm" flat bordered>
    <q-card-section>
      <div class="text-h3 text-bold text-center text-blue-7 q-ml-sm">
        Postavi aukciju
        <div class="q-ml-sm flex justify-end q-gutter-sm">
          <q-btn
            size="15px"
            name="send"
            rel="stylesheet"
            to="/IndexPage"
            color="red"
            label="Natrag"
          />
        </div>
      </div>
    </q-card-section>
    <q-separator color="red" />
    <div class="q-ml-sm flex flex-start q-gutter-sm">
      <div style="width: 500px">
        <q-input
          filled
          type="text"
          label="Naziv proizvoda"
          v-model="naziv"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Unesite naziv']"
        />
      </div>
      <div style="width: 500px">
        <q-select
          filled
          type="int"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Odaberite kategoriju',
          ]"
          v-model="selectedCategory1"
          label="Kategorija"
          :options="categories"
          option-label="name"
          option-value="value"
        />
      </div>
      <div style="width: 500px">
        <q-input
          filled
          type="double"
          label="Početna cijena proizvoda"
          v-model="cijena"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Unesite početnu cijenu',
          ]"
        />
      </div>
      <div style="width: 500px">
        <q-select
          filled
          type="text"
          lazy-rules
          v-model="selectedCategory2"
          label="Svrha"
          :options="svrha"
          option-label="name"
          option-value="value"
          :rules="[
            (val) => (val !== null && val !== '') || 'Odaberite humanitarnu svrhu aukcije',
          ]"
          
        />
      </div>
      <div style="width: 500px">
        <q-select
          filled
          type="integer"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Odaberite korisnika',
          ]"
          v-model="selectedCategory3"
          label="Korisnik"
          :options="korisnik"
          option-label="name"
          option-value="value"
        />
      </div>
    </div>
    <div class="q-ml-sm flex flex-start q-gutter-sm">
      <q-uploader style="max-width: 500px" label="Umetnite slike proizvoda" />
      <div style="width: 300px">
        <q-input filled v-model="date" label="Datum i vrijeme početka aukcije">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div style="width: 300px">
        <q-input
          filled
          v-model="date2"
          label="Datum i vrijeme završetka aukcije"
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date2" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="date2" mask="YYYY-MM-DD HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>

   
    <div style="width: 500px">
        <q-input
          filled
          type="text"
          label="Opis proizvoda"
          v-model="opispredmeta"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Unesite opis']"
        />
      </div>
    <div class="q-ml-sm flex justify-center q-gutter-sm">
      <q-btn
        label="Postavi"
        @click="submitForm"
        color="green"
        class="q-ml-sm"
      />
      <q-btn label="Otkaži" type="submit" color="red" class="q-ml-sm" />
    </div>
  </q-card>
</template>
<script>
import { ref } from "vue";
import axios from "axios"; // Import axios

export default {
  setup() {
    return {
      date: ref("2023-03-27 12:44"),
      date2: ref("2023-03-27 12:44"),
    };
  },
  data() {
    return {
      naziv_predmeta: "",
      selectedCategory1: null,
      selectedCategory2: null,
      selectedCategory3: null,
      pocetna_cijena: "",
      slika: null,
      categories: [
        { name: "Umjetnina", value: "art" },
        { name: "Automobili", value: "cars" },
        { name: "Nakit", value: "jewelry" },
        { name: "Ostalo", value: "other" },
      ],
      svrha: [
        { name: "Za osobe pogođene potresom", value: "Potres" },
        { name: "Za osobe pogođene poplavom", value: "Poplava" },
        { name: "Za osobe pogođene požarom", value: "Požar" },
        { name: "Ostalo", value: "other" },
      ],
      korisnik: [
        { name: "1", value: "prvi" },
        { name: "2", value: "drugi" },
        { name: "3", value: "treci" },
      ],
    };
  },
  methods: {
    async submitForm() {
      const sampleData = {
        sifra_predmeta :12389,
        naziv_predmeta: this.naziv,
        opis_predmeta : this.opispredmeta,
        slika: "slika.jpg",
        vrijeme_pocetka: this.date,
        vrijeme_zavrsetka: this.date2,
        pocetna_cijena: this.cijena,
        svrha_donacije: "svrha",
        id_korisnika: 1,
        sifra_kategorije: 1,
        
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/unosPredmeta",
          sampleData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
