const routes = [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "pocetna",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "postavi",
        component: () => import("pages/PostaviAukciju.vue"),
      }
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
