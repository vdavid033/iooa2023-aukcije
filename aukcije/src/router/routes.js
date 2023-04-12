const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "postavi",
        component: () => import("pages/PostaviAukciju.vue"),
      },
      {
        path: "/",
        component: () => import("pages/Pocetna.vue"),
      },
      {
        path: "prikaz",
        component: () => import("pages/PrikazAukcije.vue"),
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
