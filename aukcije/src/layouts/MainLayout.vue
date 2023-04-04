<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Aplikacija za aukcije</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="text-bold text-black">
          Mogućnosti
        </q-item-label>

        <!--        Za navigaciju bez otvaranja novog tab-a-->
        <q-btn>
          <router-link to="/" class="link-style">Početna stranica</router-link>
        </q-btn>

        <button @click="handleClick()">Click me</button>
        <q-btn>
          <router-link to="postavi" class="link-style"
            >Dodaj aukciju
          </router-link>
        </q-btn>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

const baseUrl = "http://localhost:3306/api/";

export default defineComponent({
  name: "MainLayout",

  methods: {
    handleClick() {
      axios
        .get(baseUrl + "all-predmet", {})
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
