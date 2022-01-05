import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/admin-f7650719.mjs": {
    "type": "application/javascript",
    "etag": "\"396-OKhhQcYTtIud2upfYNHuirC1YLI\"",
    "mtime": "2022-01-05T13:23:37.639Z",
    "path": "../public/_nuxt/admin-f7650719.mjs"
  },
  "/_nuxt/editor-1b9b6682.mjs": {
    "type": "application/javascript",
    "etag": "\"121cf-fW6334T4LnsvWuC7Ursuu1CcWf0\"",
    "mtime": "2022-01-05T13:23:37.638Z",
    "path": "../public/_nuxt/editor-1b9b6682.mjs"
  },
  "/_nuxt/entry-726f44ff.mjs": {
    "type": "application/javascript",
    "etag": "\"ba290-kyWlIRXUgg2T63UvVJRNIkLSLvc\"",
    "mtime": "2022-01-05T13:23:37.639Z",
    "path": "../public/_nuxt/entry-726f44ff.mjs"
  },
  "/_nuxt/index-a502c98a.mjs": {
    "type": "application/javascript",
    "etag": "\"1a1-zouPKydv/JobHJCiU1lX+3I/xxo\"",
    "mtime": "2022-01-05T13:23:37.639Z",
    "path": "../public/_nuxt/index-a502c98a.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"82f-A+pEAf9wvNOpPsg2zfypf7VzKoI\"",
    "mtime": "2022-01-05T13:23:37.639Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/marked.esm-e786a0da.mjs": {
    "type": "application/javascript",
    "etag": "\"8b63-vLRFAaR9DHg8p0jfs46C3X1tJxc\"",
    "mtime": "2022-01-05T13:23:37.638Z",
    "path": "../public/_nuxt/marked.esm-e786a0da.mjs"
  },
  "/_nuxt/Post-56c8cbfe.mjs": {
    "type": "application/javascript",
    "etag": "\"3f6d-cW170MQTvYr9xYr9OgNh4CyifQE\"",
    "mtime": "2022-01-05T13:23:37.639Z",
    "path": "../public/_nuxt/Post-56c8cbfe.mjs"
  },
  "/_nuxt/post-list-5f80b46a.mjs": {
    "type": "application/javascript",
    "etag": "\"67f-72p/7HhY6wzwOdH1I4v28cGDjGc\"",
    "mtime": "2022-01-05T13:23:37.638Z",
    "path": "../public/_nuxt/post-list-5f80b46a.mjs"
  },
  "/_nuxt/_cid_-dc915889.mjs": {
    "type": "application/javascript",
    "etag": "\"291-EHJJlS49RLFcrEQmJVNvaQs6yZg\"",
    "mtime": "2022-01-05T13:23:37.639Z",
    "path": "../public/_nuxt/_cid_-dc915889.mjs"
  },
  "/_nuxt/_pageIndex_-896c3467.mjs": {
    "type": "application/javascript",
    "etag": "\"a97-qkbLfeAn2DkZOL4Xv4RyCeXIW8c\"",
    "mtime": "2022-01-05T13:23:37.639Z",
    "path": "../public/_nuxt/_pageIndex_-896c3467.mjs"
  },
  "/_nuxt/assets/admin.87f2a328.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"72-PUgaPUOZxVRCOAh+3N9/rvlY5NU\"",
    "mtime": "2022-01-05T13:23:37.639Z",
    "path": "../public/_nuxt/assets/admin.87f2a328.css"
  },
  "/_nuxt/assets/editor.f4ff953b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f7c-L6I8xfuSBT991MZ1O2tluQ8aqaE\"",
    "mtime": "2022-01-05T13:23:37.639Z",
    "path": "../public/_nuxt/assets/editor.f4ff953b.css"
  },
  "/_nuxt/assets/entry.76693088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d45d-GdGc0uNuQWsuaornweU12KpDtbc\"",
    "mtime": "2022-01-05T13:23:37.639Z",
    "path": "../public/_nuxt/assets/entry.76693088.css"
  },
  "/_nuxt/assets/_pageIndex_.8e548ad6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fb-o/sWcCmiQMgepKpUpPAwd5dVKRw\"",
    "mtime": "2022-01-05T13:23:37.639Z",
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
const STATIC_ASSETS_BASE = "D:/project/thinkmoon.github.io/dist" + "/" + "1641389008";
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
