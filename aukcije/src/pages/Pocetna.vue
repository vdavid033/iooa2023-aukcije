<template>
  <div class="q-pa-sm">
    <q-item class="q-pa-sm text-bold text-blue-7" style="font-size: 30px"
      >Pregled aukcija</q-item
    >
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
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; left: 8px"
            >
              <q-tooltip>
                <q-item-section>
                  <q-item class="q-pa-sm text-bold text-white">Naslov</q-item>
                  <q-item>Cijena</q-item>
                  <q-item>Current bid</q-item>
                  <q-item>Preostalo vrijeme aukcije </q-item>
                </q-item-section>
              </q-tooltip>
            </q-icon>
          </q-img>
          <q-img
            class="rounded-borders col-6 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          >
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; left: 8px"
            >
              <q-tooltip>
                <q-item-section>
                  <q-item class="q-pa-sm text-bold text-white">Naslov</q-item>
                  <q-item>Cijena</q-item>
                  <q-item>Current bid</q-item>
                  <q-item>Preostalo vrijeme aukcije </q-item>
                </q-item-section>
              </q-tooltip>
            </q-icon>
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
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; left: 8px"
            >
              <q-tooltip>
                <q-item-section>
                  <q-item class="q-pa-sm text-bold text-white">Naslov</q-item>
                  <q-item>Cijena</q-item>
                  <q-item>Current bid</q-item>
                  <q-item>Preostalo vrijeme aukcije </q-item>
                </q-item-section>
              </q-tooltip>
            </q-icon>
          </q-img>
          <q-img
            class="rounded-borders col-6 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          >
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; left: 8px"
            >
              <q-tooltip>
                <q-item-section>
                  <q-item class="q-pa-sm text-bold text-white">Naslov</q-item>
                  <q-item>Cijena</q-item>
                  <q-item>Current bid</q-item>
                  <q-item>Preostalo vrijeme aukcije </q-item>
                </q-item-section>
              </q-tooltip>
            </q-icon>
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          >
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; left: 8px"
            >
              <q-tooltip>
                <q-item-section>
                  <q-item class="q-pa-sm text-bold text-white">Naslov</q-item>
                  <q-item>Cijena</q-item>
                  <q-item>Current bid</q-item>
                  <q-item>Preostalo vrijeme aukcije </q-item>
                </q-item-section>
              </q-tooltip>
            </q-icon>
          </q-img>
          <q-img
            class="rounded-borders col-6 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          >
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; left: 8px"
            >
              <q-tooltip>
                <q-item-section>
                  <q-item class="q-pa-sm text-bold text-white">Naslov</q-item>
                  <q-item>Cijena</q-item>
                  <q-item>Current bid</q-item>
                  <q-item>Preostalo vrijeme aukcije </q-item>
                </q-item-section>
              </q-tooltip>
            </q-icon>
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="5" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          >
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; left: 8px"
            >
              <q-tooltip>
                <q-item-section>
                  <q-item class="q-pa-sm text-bold text-white">Naslov</q-item>
                  <q-item>Cijena</q-item>
                  <q-item>Current bid</q-item>
                  <q-item>Preostalo vrijeme aukcije </q-item>
                </q-item-section>
              </q-tooltip>
            </q-icon>
          </q-img>
          <q-img
            class="rounded-borders col-6 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          >
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; left: 8px"
            >
              <q-tooltip>
                <q-item-section>
                  <q-item class="q-pa-sm text-bold text-white">Naslov</q-item>
                  <q-item>Cijena</q-item>
                  <q-item>Current bid</q-item>
                  <q-item>Preostalo vrijeme aukcije </q-item>
                </q-item-section>
              </q-tooltip>
            </q-icon>
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="6" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-6 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          >
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; left: 8px"
            >
              <q-tooltip>
                <q-item-section>
                  <q-item class="q-pa-sm text-bold text-white">Naslov</q-item>
                  <q-item>Cijena</q-item>
                  <q-item>Current bid</q-item>
                  <q-item>Preostalo vrijeme aukcije </q-item>
                </q-item-section>
              </q-tooltip>
            </q-icon>
          </q-img>
          <q-img
            class="rounded-borders col-6 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          >
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="top: 8px; left: 8px"
            >
              <q-tooltip>
                <q-item-section>
                  <q-item class="q-pa-sm text-bold text-white">Naslov</q-item>
                  <q-item>Cijena</q-item>
                  <q-item>Current bid</q-item>
                  <q-item>Preostalo vrijeme aukcije </q-item>
                </q-item-section>
              </q-tooltip>
            </q-icon>
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
  </div>

  <q-item class="q-pa-sm text-bold text-blue-7" style="font-size: 30px"
    >Zadnje ili trenutne aukcije</q-item
  >
  <div class="q-pa-sm row flex flex-center">
    <div class="q-pa-md" style="width: 400px">
      <q-card>
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
        </q-img>
        <q-item-section>
          <q-item class="q-pa-sm text-bold text-blue-7">Naslov</q-item>
          <q-item>Cijena</q-item>
          <q-item>Current bid</q-item>
          <q-item>Preostalo vrijeme aukcije </q-item>
        </q-item-section>
      </q-card>
    </div>
    <div class="q-pa-md" style="width: 400px">
      <q-card>
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
        </q-img>
        <q-item-section>
          <q-item class="q-pa-sm text-bold text-blue-7">Naslov</q-item>
          <q-item>Cijena</q-item>
          <q-item>Current bid</q-item>
          <q-item>Preostalo vrijeme aukcije </q-item>
        </q-item-section>
      </q-card>
    </div>
    <div class="q-pa-md" style="width: 400px">
      <q-card>
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
        </q-img>
        <q-item-section>
          <q-item class="q-pa-sm text-bold text-blue-7">Naslov</q-item>
          <q-item>Cijena</q-item>
          <q-item>Current bid</q-item>
          <q-item>Preostalo vrijeme aukcije </q-item>
        </q-item-section>
      </q-card>
    </div>
    <div class="q-pa-md" style="width: 400px">
      <q-card>
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
        </q-img>
        <q-item-section>
          <q-item class="q-pa-sm text-bold text-blue-7">Naslov</q-item>
          <q-item>Cijena</q-item>
          <q-item>Current bid</q-item>
          <q-item>Preostalo vrijeme aukcije </q-item>
        </q-item-section>
      </q-card>
    </div>
    <div class="q-pa-md" style="width: 400px">
      <q-card>
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
        </q-img>
        <q-item-section>
          <q-item class="q-pa-sm text-bold text-blue-7">Naslov</q-item>
          <q-item>Cijena</q-item>
          <q-item>Current bid</q-item>
          <q-item>Preostalo vrijeme aukcije </q-item>
        </q-item-section>
      </q-card>
    </div>
    <div class="q-pa-md" style="width: 400px">
      <q-card>
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" no-native-menu>
        </q-img>
        <q-item-section>
          <q-item class="q-pa-sm text-bold text-blue-7">Naslov</q-item>
          <q-item>Cijena</q-item>
          <q-item>Current bid</q-item>
          <q-item>Preostalo vrijeme aukcije </q-item>
        </q-item-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(2),
      autoplay: ref(false),
    };
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
