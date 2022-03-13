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
    "etag": "\"1535-C6b7C3AUQTAInQIGAuTZ/j7KRrw\"",
    "mtime": "2022-03-12T02:26:30.219Z",
    "path": "../public/sitemap.txt"
  },
  "/_nuxt/404-2ea1434c.mjs": {
    "type": "application/javascript",
    "etag": "\"134-1wbCY+tLggKdEUiinajDNNfTkow\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/404-2ea1434c.mjs"
  },
  "/_nuxt/admin-bcc15e17.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-13T02:38:54.584Z",
    "path": "../public/_nuxt/admin-bcc15e17.mjs"
  },
  "/_nuxt/admin-ea8bd6dd.mjs": {
    "type": "application/javascript",
    "etag": "\"59f-h4S/oyAMDLBXrq/9VXN7m81BS6Q\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/admin-ea8bd6dd.mjs"
  },
  "/_nuxt/auth-ee46a365.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-2eAd7p3hlzgdzVZ4QN96spXec2o\"",
    "mtime": "2022-03-13T02:38:54.584Z",
    "path": "../public/_nuxt/auth-ee46a365.mjs"
  },
  "/_nuxt/editor-a1424bca.mjs": {
    "type": "application/javascript",
    "etag": "\"3aa-LBXe6IRiSqu99L5cBxFy1cam2D0\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/editor-a1424bca.mjs"
  },
  "/_nuxt/entry-723d84a1.mjs": {
    "type": "application/javascript",
    "etag": "\"20f643-fYqcKPOmneoxVFE1Go9j+f66qKE\"",
    "mtime": "2022-03-13T02:38:54.614Z",
    "path": "../public/_nuxt/entry-723d84a1.mjs"
  },
  "/_nuxt/entry.ae058194.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"58d11-FQMLcliy+l/RopVgItaCmyET5Io\"",
    "mtime": "2022-03-13T02:38:54.585Z",
    "path": "../public/_nuxt/entry.ae058194.css"
  },
  "/_nuxt/index-54bf3022.mjs": {
    "type": "application/javascript",
    "etag": "\"134-cHsWFYuVAqVqjz8gdGUPKPD/KjI\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/index-54bf3022.mjs"
  },
  "/_nuxt/index-92ae845e.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-/CDTxPyh2fD0Oec0847my4TFTHM\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/index-92ae845e.mjs"
  },
  "/_nuxt/index-b65b0e65.mjs": {
    "type": "application/javascript",
    "etag": "\"365-9jv2RmRmE2YbAOtNO1DjLTc0cH4\"",
    "mtime": "2022-03-13T02:38:54.584Z",
    "path": "../public/_nuxt/index-b65b0e65.mjs"
  },
  "/_nuxt/index-ef0779c4.mjs": {
    "type": "application/javascript",
    "etag": "\"366-CLY6LCW4C/rX/MJfnBVUe8HLmNM\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/index-ef0779c4.mjs"
  },
  "/_nuxt/login-b9bbc9c8.mjs": {
    "type": "application/javascript",
    "etag": "\"4f2-pD5qYpZIxA84edE7a0l7dWVx09E\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/login-b9bbc9c8.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"eab-Y0fvlOjMSRf3LAsQn21asNqDZvI\"",
    "mtime": "2022-03-13T02:38:54.585Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/normal-4debad94.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-13T02:38:54.584Z",
    "path": "../public/_nuxt/normal-4debad94.mjs"
  },
  "/_nuxt/post-list-5d8cdf63.mjs": {
    "type": "application/javascript",
    "etag": "\"882-AXAgQZDvu4o83uIwj5j+HIkbdv4\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/post-list-5d8cdf63.mjs"
  },
  "/_nuxt/_cid_-5341a3d4.mjs": {
    "type": "application/javascript",
    "etag": "\"486-cXUYk8yt7V9ed2KfpE0KR3XPFVo\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/_cid_-5341a3d4.mjs"
  },
  "/_nuxt/_pageIndex_-31beb20d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/_pageIndex_-31beb20d.mjs"
  },
  "/_nuxt/_pageIndex_-45dc0e64.mjs": {
    "type": "application/javascript",
    "etag": "\"c15-Wu8grp1lmsPHCA1l+qInENxeEmI\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/_pageIndex_-45dc0e64.mjs"
  },
  "/_nuxt/_pageIndex_-e6187ccc.mjs": {
    "type": "application/javascript",
    "etag": "\"a1-SNa3zqxtAcpDdnQKe1NxT666A9o\"",
    "mtime": "2022-03-13T02:38:54.579Z",
    "path": "../public/_nuxt/_pageIndex_-e6187ccc.mjs"
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
const STATIC_ASSETS_BASE = "/_nuxt/D:/project/thinkmoon.github.io/dist" + "/" + "1647139124";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
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
