

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
          

  <q-toolbar-title>
    <q-avatar>
        <img src="~assets\aukcije_logo.jpg" alt="Logo">
      </q-avatar>
  </q-toolbar-title>
<q-space></q-space>
          
      
          <q-input
            v-model="search"
            filled
            placeholder="Search"
            dense
            class="w-200"
            @keyup.enter="searchItems"
          />
      
          <q-btn
            icon="search"
            color="primary"
            class="q-mr-md"
            @click="searchItems"
          />
      
          <q-btn
            icon="clear"
            color="primary"
            @click="clearSearch"
          />

          <div class="q-pa-md">
            <q-btn-dropdown color="primary" :label="selectedCategory">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick('Photos')">
                  <q-item-section>
                    <q-item-label>Kategorija 1</q-item-label>
                  </q-item-section>
                </q-item>
          
                <q-item clickable v-close-popup @click="onItemClick('Videos')">
                  <q-item-section>
                    <q-item-label>Kategorija 2</q-item-label>
                  </q-item-section>
                </q-item>
          
                <q-item clickable v-close-popup @click="onItemClick('Articles')">
                  <q-item-section>
                    <q-item-label>Kategorija 3</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>

          <q-btn
            icon="refresh"
            color="primary"
            @click="refresh"
          />

         <q-space /><q-space /><q-space /><q-space /><q-space /><q-space /><q-space /><q-space />
          <router-link to="/PostaviAukciju" class="link-style">
            <q-btn label="Sell" color="positive" class="q-mr-md" />
          </router-link>
          <router-link to="/Moj_profil" class="link-style">
          <q-btn label="My Profile" color="primary" class="q-mr-md" />
        </router-link>
        </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="q-pa-md q-gutter-sm">
  </div>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const selectedCategory = ref('Kategorije')
    const onItemClick = (category) => {
      selectedCategory.value = category
    }

    return {
      date: ref('2019/02/01'),
      essentialLinks: linksList,
      leftDrawerOpen,
      selectedCategory,
      onItemClick,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      refresh () {
        selectedCategory.value = "Kategorije"
      },
      
    }
  }
})
</script>


<style scoped>
.q-btn__label {
  text-decoration: none !important;
}
.q-avatar{
  height: 64px;
  width: 64px;
}
</style>