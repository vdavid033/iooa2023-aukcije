<template>
  <q-card class="q-pa-sm q-gutter-sm" flat bordered>
    <q-card-section>
      <div class="text-h3 text-bold text-center text-blue-7 q-ml-sm">
        Prikaz aukcije {{ this.sifra_predmeta }}
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
        <q-field rounded filled label="Količina proizvoda" stack-label>
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">..</div>
          </template>
        </q-field>
      </div>
    </div>

    <div class="q-pa-sm col flex flex-start q-gutter-sm">
      <div class="row flex flex-center">
        <div style="width: 600px">
          <q-card>
            <q-carousel
              v-model="slide"
              transition-prev="slide-right"
              transition-next="slide-left"
              swipeable
              animated
              :autoplay="autoplay"
              control-color="green"
              navigation
              padding
              ref="carousel"
              infinite
              arrows
              height="350px"
              class="bg-white shadow-2 rounded-borders"
            >
              <q-carousel-slide :name="2" class="column no-wrap">
                <div
                  class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
                >
                  <q-img
                    class="rounded-borders col-6 full-height"
                    src="https://cdn.quasar.dev/img/material.png"
                  >
                  </q-img>
                  <q-img
                    class="rounded-borders col-6 full-height"
                    src="https://cdn.quasar.dev/img/material.png"
                  >
                  </q-img>
                </div>
              </q-carousel-slide>
              <q-carousel-slide :name="3" class="column no-wrap">
                <div
                  class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
                >
                  <q-img
                    class="rounded-borders col-6 full-height"
                    src="https://cdn.quasar.dev/img/material.png"
                  >
                  </q-img>
                  <q-img
                    class="rounded-borders col-6 full-height"
                    src="https://cdn.quasar.dev/img/material.png"
                  >
                  </q-img>
                </div>
              </q-carousel-slide>

              <template v-slot:control>
                <q-carousel-control
                  position="top-right"
                  :offset="[18, 18]"
                  class="text-white rounded-borders"
                  style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
                >
                  <q-toggle
                    dense
                    dark
                    color="orange"
                    v-model="autoplay"
                    label="Auto Play"
                  />
                </q-carousel-control>
              </template>
            </q-carousel>
          </q-card>
        </div>
      </div>
      <div class="q-ml-sm col flex flex-start q-gutter-sm">
        <div style="width: 400px">
          <q-field rounded filled label="Početno vrijeme aukcije" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                ..
              </div>
            </template>
          </q-field>
        </div>

        <div style="width: 400px">
          <q-field rounded filled label="Završno vrijeme aukcije" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                ..
              </div>
            </template>
          </q-field>
        </div>
        <div style="width: 600px">
          <q-field rounded filled label="Opis proizvoda" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                ..
              </div>
            </template>
          </q-field>
        </div>
        <div style="width: 400px">
          <q-field rounded filled label="Trenutna cijena " stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                ..
              </div>
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
      console.log("RESPONSEEE", response.data[0]);
      this.item = response.data[0];
    });
  },
  setup() {
    return {
      date: ref("2023-03-27 12:44"),
      date2: ref("2023-03-27 12:44"),
      slide: ref(2),
      autoplay: ref(false),
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
