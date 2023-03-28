<template>
  <div class="q-pa-xl row justify-end q-gutter-md">
    <q-btn
      size="15px"
      name="send"
      rel="stylesheet"
      to="/"
      color="blue"
      label="Natrag"
    />
  </div>

  <div class="q-pa-sm q-gutter-xl">
    <q-card class="q-pa-sm q-gutter-sm" flat bordered>
      <q-card-section>
        <div class="text-h3 text-bold text-center text-black-7 q-ml-sm">
          Postavi aukciju
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
            (val) =>
              (val !== null && val !== '') || 'Unesite količinu proizvoda',
          ]"
        />
      </div>
      <div class="q-ml-sm flex flex-start q-gutter-sm">
        <q-uploader style="max-width: 500px" label="Umetnite sliku proizvoda" />
        <q-input
          filled
          v-model="date"
          label="Datum i vrijeme početka aukcije"
          style="max-width: 600px"
        >
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

      <q-input
        bordered
        autofocus
        label="Opis proizvoda"
        style="max-width: 700px"
        type="textarea"
      />

      <div class="q-pa-sm flex flex-center">
        <q-btn label="Postavi" type="submit" color="primary" class="q-ml-sm" />
        <q-btn label="Otkaži" type="submit" color="primary" class="q-ml-sm" />
      </div>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      date: ref("2023-03-27 12:44"),
      date2: ref("2023-03-27 12:44"),
    };
  },
};
</script>
