<template>
  <q-card class="q-pa-sm q-gutter-sm" flat bordered>
    <q-card-section>
      <div class="text-h3 text-bold text-center text-blue-7 q-ml-sm">
        Prikaz aukcije
        <div class="q-ml-sm flex justify-end q-gutter-sm">
          <q-btn
            size="15px"
            name="send"
            rel="stylesheet"
            to="/"
            color="red"
            label="Natrag"
          />
        </div>
      </div>
    </q-card-section>
    <q-separator color="red" />
    <div class="q-ml-sm flex flex-start q-gutter-sm">
      <div style="width: 500px">
        <q-field rounded filled label="Naziv proizvoda" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">{{ item.naziv_predmeta }}</div>
          </template>
        </q-field>
      </div>
      <div style="width: 500px">
        <q-field rounded filled label="Početna cijena proizvoda" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">{{ item.pocetna_cijena + '$' }}</div>
          </template>
        </q-field>
      </div>
    </div>

    <div class="q-ml-sm flex flex-start q-gutter-sm">
      <div style="width: 500px">
        <q-field rounded filled label="Svrha donacije " stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">{{ item.svrha_donacije  }}</div>
          </template>
        </q-field>
      </div>
    </div>

    <div class="q-pa-sm col flex flex-start q-gutter-sm">
      <div class="row flex flex-center">
        <div style="width: 600px">
          <q-card>
            <q-img :src="item.slika" no-native-menu />
          </q-card>
        </div>
      </div>
      <div class="q-ml-sm col flex flex-start q-gutter-sm">
        <div style="width: 400px">
          <q-field rounded filled label="Početno vrijeme aukcije" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">{{ formattedDate(item.vrijeme_pocetka) }}</div>
               
            </template>
          </q-field>
        </div>

        <div style="width: 400px">
          <q-field rounded filled label="Završno vrijeme aukcije" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">{{ formattedDate(item.vrijeme_zavrsetka) }}</div>
            </template>
          </q-field>
        </div>
        <div style="width: 600px">
          <q-field rounded filled label="Opis proizvoda" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">{{ item.opis_predmeta  }}</div>
               
            </template>
          </q-field>
        </div>
        <div style="width: 400px">
          <q-field rounded filled label="Trenutna cijena " stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">.. </div>
            </template>
          </q-field>
        </div>
      </div>
    </div>
  </q-card>

  <div class="q-pa-md flex flex-center">
    <q-btn label="Ponuda" color="primary" @click="small = true" />
    <q-dialog v-model="small">
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Ponudi</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-select
            rounded
            outlined
            v-model="model"
            :options="options"
            label="Odaberi cijenu"
          />
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Potvrdi ponudu" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";

const baseUrl = "http://localhost:3306/api/";

export default {
  computed: {
    sifra_predmeta() {
      return this.$route.query.sifra_predmeta;
    }
  },
  data() {
    return {
      item: [],
    };
  },
  mounted() {
    axios
        .get(baseUrl + "get-predmet/" + this.sifra_predmeta, {})
        .then((response) => {
      this.item = response.data[0];
    });
  },

  methods: {
    formattedDate(dateString) {
      return new Date(dateString).toLocaleString('hr-HR').replace(',', '');
    },
  },

  setup() {
    return {
      date: ref("2023-03-27 12:44"),
      date2: ref("2023-03-27 12:44"),
      dialog: ref(false),
      small: ref(false),
      model: ref(null),
      options: [
        "100$",
        "200$",
        "300$",
        "400$",
        "1000$",
        "2000$",
        "3000$",
        "4000$",
      ],
    };
  },
};
</script>
