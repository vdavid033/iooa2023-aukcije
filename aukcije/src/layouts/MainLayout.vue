<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          class="q-pa-md row q-gutter-sm"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="q-pa-md col q-gutter-sm">
          <q-toolbar-title> Aukcije </q-toolbar-title>
        </div>

        <q-btn-dropdown color="primary" :label="selectedCategory">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick('Kategorije')">
              <q-item-section>
                <q-item-label>Kategorije</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="onItemClick('Kategorija 1')"
            >
              <q-item-section>
                <q-item-label>Kategorija 1</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-close-popup
              @click="onItemClick('Kategorija 2')"
            >
              <q-item-section>
                <q-item-label>Kategorija 2</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-close-popup
              @click="onItemClick('Kategorija 3')"
            >
              <q-item-section>
                <q-item-label>Kategorija 3</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-input
        class="search"
          style="width: 800px; "
          v-model="search"
          filled
          placeholder="Pretraži"
          dense
          outlined
          @keyup.enter="searchItems"
        />

        <div class="q-pa-md col q-gutter-sm">
          <q-btn icon="search" color="primary" @click="searchItems" />
        </div>
        <q-btn icon="clear" color="primary" @click="Search" />

        <div class="q-ml-sm flex flex-start q-gutter-sm">
          <router-link to="/PostaviAukciju" class="link-style">
            <q-btn label="Prodaj" color="positive" class="q-mr-md" />
          </router-link>
          <q-btn label="Moj profil" color="primary" class="q-mr-md" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="text-bold text-black">
          Mogućnosti
        </q-item-label>

        <!--        Za navigaciju bez otvaranja novog tab-a-->
        <q-btn>
          <router-link to="pocetna" class="link-style"
            >Početna stranica</router-link
          >
        </q-btn>

        <q-btn>
          <router-link to="postavi" class="link-style"
            >Dodaj aukciju</router-link
          >
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

  
  
   
    