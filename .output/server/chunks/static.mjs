import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/admin-e7503eab.mjs": {
    "type": "application/javascript",
    "etag": "\"396-PbgZ4G747XqYJw/clNUd74pdeaY\"",
    "mtime": "2022-01-05T13:59:02.600Z",
    "path": "../public/_nuxt/admin-e7503eab.mjs"
  },
  "/_nuxt/editor-9b4cbe86.mjs": {
    "type": "application/javascript",
    "etag": "\"121cf-N3OaG3nkb4+dyBqfY6l0OrJrPKY\"",
    "mtime": "2022-01-05T13:59:02.600Z",
    "path": "../public/_nuxt/editor-9b4cbe86.mjs"
  },
  "/_nuxt/entry-f59aa740.mjs": {
    "type": "application/javascript",
    "etag": "\"ba290-+LuuoDeMZvLzWtaV4Q3iGA5zx54\"",
    "mtime": "2022-01-05T13:59:02.600Z",
    "path": "../public/_nuxt/entry-f59aa740.mjs"
  },
  "/_nuxt/index-6e71562c.mjs": {
    "type": "application/javascript",
    "etag": "\"1a1-sPl4tGcE17QVMP6TfBVv30JIzFI\"",
    "mtime": "2022-01-05T13:59:02.600Z",
    "path": "../public/_nuxt/index-6e71562c.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"82f-CFTlA5hEplJBPnsEr50h3/2vu7o\"",
    "mtime": "2022-01-05T13:59:02.601Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/marked.esm-e786a0da.mjs": {
    "type": "application/javascript",
    "etag": "\"8b63-vLRFAaR9DHg8p0jfs46C3X1tJxc\"",
    "mtime": "2022-01-05T13:59:02.600Z",
    "path": "../public/_nuxt/marked.esm-e786a0da.mjs"
  },
  "/_nuxt/Post-db5c340a.mjs": {
    "type": "application/javascript",
    "etag": "\"3f9f-f7Wd8rwjcLUNVA2DzD4wr4LdUrg\"",
    "mtime": "2022-01-05T13:59:02.600Z",
    "path": "../public/_nuxt/Post-db5c340a.mjs"
  },
  "/_nuxt/post-list-6ee9c93b.mjs": {
    "type": "application/javascript",
    "etag": "\"67f-/28VjbtsyzUDkPUg5g/vdCWBl9M\"",
    "mtime": "2022-01-05T13:59:02.600Z",
    "path": "../public/_nuxt/post-list-6ee9c93b.mjs"
  },
  "/_nuxt/_cid_-1e73de89.mjs": {
    "type": "application/javascript",
    "etag": "\"291-Ri4grNT4lt/xVVYtTSfX7FclCC4\"",
    "mtime": "2022-01-05T13:59:02.600Z",
    "path": "../public/_nuxt/_cid_-1e73de89.mjs"
  },
  "/_nuxt/_pageIndex_-b82eb562.mjs": {
    "type": "application/javascript",
    "etag": "\"a97-0EpB6yfs77xZQLyOPhfBln6nCRQ\"",
    "mtime": "2022-01-05T13:59:02.600Z",
    "path": "../public/_nuxt/_pageIndex_-b82eb562.mjs"
  },
  "/_nuxt/assets/admin.87f2a328.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"72-PUgaPUOZxVRCOAh+3N9/rvlY5NU\"",
    "mtime": "2022-01-05T13:59:02.601Z",
    "path": "../public/_nuxt/assets/admin.87f2a328.css"
  },
  "/_nuxt/assets/editor.f4ff953b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f7c-L6I8xfuSBT991MZ1O2tluQ8aqaE\"",
    "mtime": "2022-01-05T13:59:02.601Z",
    "path": "../public/_nuxt/assets/editor.f4ff953b.css"
  },
  "/_nuxt/assets/entry.76693088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d45d-GdGc0uNuQWsuaornweU12KpDtbc\"",
    "mtime": "2022-01-05T13:59:02.601Z",
    "path": "../public/_nuxt/assets/entry.76693088.css"
  },
  "/_nuxt/assets/_pageIndex_.8e548ad6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fb-o/sWcCmiQMgepKpUpPAwd5dVKRw\"",
    "mtime": "2022-01-05T13:59:02.601Z",
    "path": "../public/_nuxt/assets/_pageIndex_.8e548ad6.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "D:/project/thinkmoon.github.io/dist" + "/" + "1641391130";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
