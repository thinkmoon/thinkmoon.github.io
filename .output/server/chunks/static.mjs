import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import { c as buildAssetsDir } from './server.mjs';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'defu';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-trCOKZMCCmliCXLvpHbvfHMWd64\"",
    "mtime": "2022-03-06T09:25:56.214Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5c-clKbIIr8xG4kyOLFAzssdB3Toyk\"",
    "mtime": "2022-03-07T11:16:47.078Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"14f4-huqtoUyzHoEiNI3KrfF0/Mp1KfI\"",
    "mtime": "2022-03-07T11:16:35.568Z",
    "path": "../public/sitemap.txt"
  },
  "/_nuxt/404-b97fb895.mjs": {
    "type": "application/javascript",
    "etag": "\"134-6eYgcFvm+TjN7BiItC5zQniH3cA\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/404-b97fb895.mjs"
  },
  "/_nuxt/admin-30485a3d.mjs": {
    "type": "application/javascript",
    "etag": "\"59f-stzClprIwIma3RWXlH9bdELq0RI\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/admin-30485a3d.mjs"
  },
  "/_nuxt/auth-5095016b.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-E0p0j9hXC5CpvfKba2L3GHag/2Y\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/auth-5095016b.mjs"
  },
  "/_nuxt/editor-38bca6bf.mjs": {
    "type": "application/javascript",
    "etag": "\"3aa-gEsp4WCjlHoQbLzUuzoTx2dpoU4\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/editor-38bca6bf.mjs"
  },
  "/_nuxt/entry-74ad360a.mjs": {
    "type": "application/javascript",
    "etag": "\"1fd898-4BbOf9Ewj10OsfAEkUIjE0w2KNo\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/entry-74ad360a.mjs"
  },
  "/_nuxt/entry.1b1671d1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55f1d-/7lj3vhJTH448zckN3DX59oxzfI\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/entry.1b1671d1.css"
  },
  "/_nuxt/index-6359f0e8.mjs": {
    "type": "application/javascript",
    "etag": "\"134-/x04dJMW5MOA/ROMT4403tl88CY\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/index-6359f0e8.mjs"
  },
  "/_nuxt/index-6c2727d8.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-WpQ63auvd5Px3NRhGnXFZYScpLo\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/index-6c2727d8.mjs"
  },
  "/_nuxt/index-836101ef.mjs": {
    "type": "application/javascript",
    "etag": "\"126-Gyb8AwfZL94p2m1rr2ETuQzOd3Q\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/index-836101ef.mjs"
  },
  "/_nuxt/login-57907b68.mjs": {
    "type": "application/javascript",
    "etag": "\"4f2-5ILKJTxbyAlptyXecpUn+rRum10\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/login-57907b68.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"ab8-lvGnGNtE9oU402YDAk501DT4nuc\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-96bedc3e.mjs": {
    "type": "application/javascript",
    "etag": "\"882-OKsb1Hj0T6LgskkW4sTC6s7QSEQ\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/post-list-96bedc3e.mjs"
  },
  "/_nuxt/_cid_-4e154c6a.mjs": {
    "type": "application/javascript",
    "etag": "\"486-rkiKKAfMB9zm7bXgN7bnb9uMWNQ\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/_cid_-4e154c6a.mjs"
  },
  "/_nuxt/_pageIndex_-404fdcf6.mjs": {
    "type": "application/javascript",
    "etag": "\"b93-X87H6mWN7zK01obOc5TyxsyAx4A\"",
    "mtime": "2022-03-08T03:48:42.212Z",
    "path": "../public/_nuxt/_pageIndex_-404fdcf6.mjs"
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
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/D:/project/thinkmoon.github.io/dist" + "/" + "1646711311";
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
  const isBuildAsset = id.startsWith(buildAssetsDir());
  if (!asset) {
    if (isBuildAsset && !id.startsWith(STATIC_ASSETS_BASE)) {
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
  if (isBuildAsset) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
