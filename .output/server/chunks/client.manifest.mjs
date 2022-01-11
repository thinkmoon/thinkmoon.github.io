const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-17445d54.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-6415f761.mjs"
    ]
  },
  "_bootstrap-6415f761.mjs": {
    "file": "bootstrap-6415f761.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "pages/admin/editor.vue",
      "pages/admin/post-list.vue",
      "pages/admin.vue",
      "pages/index.vue",
      "pages/page/[pageIndex].vue",
      "pages/post/[cid].vue"
    ],
    "css": [
      "assets/bootstrap.02e2ffd9.css"
    ]
  },
  "pages/admin/editor.vue": {
    "file": "editor-6990b1cc.mjs",
    "src": "pages/admin/editor.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-6415f761.mjs"
    ],
    "css": [
      "assets/editor.09771dd1.css"
    ]
  },
  "pages/admin/post-list.vue": {
    "file": "post-list-72b1f3c0.mjs",
    "src": "pages/admin/post-list.vue",
    "isDynamicEntry": true,
    "imports": [
      "_Post-574e22f0.mjs",
      "_bootstrap-6415f761.mjs"
    ]
  },
  "_Post-574e22f0.mjs": {
    "file": "Post-574e22f0.mjs"
  },
  "pages/admin.vue": {
    "file": "admin-aba909ed.mjs",
    "src": "pages/admin.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-6415f761.mjs"
    ],
    "css": [
      "assets/admin.87f2a328.css"
    ]
  },
  "pages/index.vue": {
    "file": "index-cab63016.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-6415f761.mjs"
    ]
  },
  "pages/page/[pageIndex].vue": {
    "file": "_pageIndex_-7800b819.mjs",
    "src": "pages/page/[pageIndex].vue",
    "isDynamicEntry": true,
    "imports": [
      "_Post-574e22f0.mjs",
      "_bootstrap-6415f761.mjs"
    ],
    "css": [
      "assets/_pageIndex_.8e548ad6.css"
    ]
  },
  "pages/post/[cid].vue": {
    "file": "_cid_-db020cc3.mjs",
    "src": "pages/post/[cid].vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-6415f761.mjs",
      "_Post-574e22f0.mjs"
    ]
  }
};

export { client_manifest as default };
