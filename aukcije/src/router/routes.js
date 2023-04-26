import Pocetna from "pages/Pocetna.vue";
import konverter from "pages/konverter.vue";
import PostaviAukciju from "pages/PostaviAukciju.vue";
import PrikazAukcije from "pages/PrikazAukcije.vue";
import PrikazPredmetaKategorije from "pages/PrikazPredmetaKategorije.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "/pocetna",
      },
      {
        path: "pocetna",
        component: Pocetna,
      },
      {
        path: "postavi",
        component: PostaviAukciju,
      },
      {
        path: "prikaz",
        component: PrikazAukcije,
      },
      {
        path: "kategorija",
        component: PrikazPredmetaKategorije,
      },
      {
        path: "konverter",
        component: konverter,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
