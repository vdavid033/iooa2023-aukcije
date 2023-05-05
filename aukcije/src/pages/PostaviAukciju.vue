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
        <q-input
          filled
          type="double"
          label="Naziv proizvoda"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Unesite naziv']"
        />
      </div>
      <div style="width: 500px">
        <q-input
          filled
          type="double"
          label="Početna cijena proizvoda"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Unesite početnu cijenu',
          ]"
        />
      </div>
    </div>

    <div class="q-ml-sm q-gutter-sm">
      <q-input
        filled
        style="max-width: 400px"
        type="double"
        label="Količina proizvoda"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Unesite količinu proizvoda',
        ]"
      />
    </div>
    <div class="q-ml-sm flex flex-start">
      <div class="q-pa-sm col q-gutter-sm">
        <q-input
          style="max-width: 300px"
          label="Unesi link slike"
          v-model="slika"
          filled
          type="textarea"
        ></q-input>

        <q-btn style="max-width: 150px" @click="handleClick"
          >Dodaj sliku u bazu</q-btn
        >
      </div>
      <div class="q-pa-md col-6 q-gutter-sm" style="width: 500px">
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

        <div>
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
    </div>

    <div class="q-pa-sm" style="max-width: 500px">
      <q-input label="Opis proizvoda" v-model="text" filled type="textarea" />
    </div>

    <div class="q-ml-sm flex justify-center q-gutter-sm">
      <q-btn
        label="Postavi"
        type="submit"
        color="green"
        @click="submitForm"
        class="q-ml-sm"
      />
      <q-btn label="Otkaži" type="submit" color="red" class="q-ml-sm" />
    </div>
    <button @click="handleClick()">Click me</button>
  </q-card>
</template>
<script>
import { ref } from "vue";
import axios from "axios";

const baseUrl = "http://localhost:3306/api/";

export default {
  setup() {
    return {
      date: ref("2023-03-27 12:44"),
      date2: ref("2023-03-27 12:44"),
      slika: null,
    };
  },
  methods: {
    handleClick() {
      axios
        .post(baseUrl + "unos-slike", {
          slika: this.slika,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
