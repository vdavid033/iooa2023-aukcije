const routes = [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "PostaviAukciju",
        component: () => import("pages/PostaviAukciju.vue"),
      },
      {path: "IndexPage",
       component: () => import("pages/IndexPage.vue"),
    },
    {path: "Moj_profil",
       component: () => import("pages/Moj_profil.vue"),
    },
    {path: "Prijava_m",
       component: () => import("pages/Prijava_m.vue"),
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