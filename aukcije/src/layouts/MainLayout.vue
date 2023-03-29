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

        <q-toolbar-title> Aplikacija za aukcije </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="text-bold text-black"> Mogućnosti </q-item-label>

<!--        Za navigaciju bez otvaranja novog tab-a-->
        <q-btn>
          <router-link to="/" class="link-style">Početna stranica</router-link>
        </q-btn>

        <q-btn>
          <router-link to="postavi" class="link-style">Dodaj aukciju</router-link>
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

const linksList = [
  {
    title: "Postavi aukciju",
    caption: "Unos aukcije",
    icon: "code",
    link: "postavi",
  },
  {
    title: "Github Aukcije",
    caption: "github.com/iooa-aukcije",
    icon: "code",
    link: "https://github.com/vdavid033/iooa2023-aukcije",
  },
];

export default defineComponent({
  name: "MainLayout",

  

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
