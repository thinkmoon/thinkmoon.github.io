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
    "mtime": "2022-03-08T06:22:46.967Z",
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5c-clKbIIr8xG4kyOLFAzssdB3Toyk\"",
    "mtime": "2022-03-08T06:22:46.967Z",
    "path": "../public/robots.txt"
  },
  "/sitemap.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1535-C6b7C3AUQTAInQIGAuTZ/j7KRrw\"",
    "mtime": "2022-03-08T12:47:20.224Z",
    "path": "../public/sitemap.txt"
  },
  "/_nuxt/404-84634910.mjs": {
    "type": "application/javascript",
    "etag": "\"134-s2rpc6YaoDxXjqJ3xoI1qhiL/8c\"",
    "mtime": "2022-03-08T12:48:18.889Z",
    "path": "../public/_nuxt/404-84634910.mjs"
  },
  "/_nuxt/admin-5b4459b8.mjs": {
    "type": "application/javascript",
    "etag": "\"59f-kZCj+lHr/4IVMSyUJv71Pq2a+YI\"",
    "mtime": "2022-03-08T12:48:18.890Z",
    "path": "../public/_nuxt/admin-5b4459b8.mjs"
  },
  "/_nuxt/auth-86d0718c.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-JWmFtX5TC0ameCag3h154Ib/cLA\"",
    "mtime": "2022-03-08T12:48:18.890Z",
    "path": "../public/_nuxt/auth-86d0718c.mjs"
  },
  "/_nuxt/editor-ffd586c5.mjs": {
    "type": "application/javascript",
    "etag": "\"3aa-zIR17GhQ16MqO0YyUmiU8tMUXnQ\"",
    "mtime": "2022-03-08T12:48:18.889Z",
    "path": "../public/_nuxt/editor-ffd586c5.mjs"
  },
  "/_nuxt/entry-f8220ddd.mjs": {
    "type": "application/javascript",
    "etag": "\"1fdbd2-+Y5JRsmtTJl9/HKazJCYvRGeqXs\"",
    "mtime": "2022-03-08T12:48:18.924Z",
    "path": "../public/_nuxt/entry-f8220ddd.mjs"
  },
  "/_nuxt/entry.af81fec1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55fbb-meQTsb/Fu/LpLuGP3bf20wJifqY\"",
    "mtime": "2022-03-08T12:48:18.891Z",
    "path": "../public/_nuxt/entry.af81fec1.css"
  },
  "/_nuxt/index-2c55fd9c.mjs": {
    "type": "application/javascript",
    "etag": "\"360-Ywv+oiIp68fkobXBG9CSaAu0xzs\"",
    "mtime": "2022-03-08T12:48:18.890Z",
    "path": "../public/_nuxt/index-2c55fd9c.mjs"
  },
  "/_nuxt/index-34460e86.mjs": {
    "type": "application/javascript",
    "etag": "\"134-yXzhvBAHU3oCjEvHN9SPkksMnpM\"",
    "mtime": "2022-03-08T12:48:18.890Z",
    "path": "../public/_nuxt/index-34460e86.mjs"
  },
  "/_nuxt/index-ce20d930.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-pNDfVCWJuVc7E6KeCEE8ejJp1RE\"",
    "mtime": "2022-03-08T12:48:18.889Z",
    "path": "../public/_nuxt/index-ce20d930.mjs"
  },
  "/_nuxt/index-f6e8e5a8.mjs": {
    "type": "application/javascript",
    "etag": "\"361-noc6nf0K/l5q/hqNBcJ/n7SoZ1o\"",
    "mtime": "2022-03-08T12:48:18.890Z",
    "path": "../public/_nuxt/index-f6e8e5a8.mjs"
  },
  "/_nuxt/login-6d5d1291.mjs": {
    "type": "application/javascript",
    "etag": "\"4f2-5/S+xzbbbb8I5A0bJCO51RGRXlQ\"",
    "mtime": "2022-03-08T12:48:18.890Z",
    "path": "../public/_nuxt/login-6d5d1291.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"e42-XuRn/gxR9kjwoNyfclHyG4ZL2yI\"",
    "mtime": "2022-03-08T12:48:18.890Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-ee205fc7.mjs": {
    "type": "application/javascript",
    "etag": "\"882-1tZwA5SjkabxCxw38GlfGeFWblM\"",
    "mtime": "2022-03-08T12:48:18.889Z",
    "path": "../public/_nuxt/post-list-ee205fc7.mjs"
  },
  "/_nuxt/_cid_-799cd3c6.mjs": {
    "type": "application/javascript",
    "etag": "\"486-mLeoMAAQlW4MlymUuQS1UZPo74I\"",
    "mtime": "2022-03-08T12:48:18.890Z",
    "path": "../public/_nuxt/_cid_-799cd3c6.mjs"
  },
  "/_nuxt/_mid_-f3eb64b9.mjs": {
    "type": "application/javascript",
    "etag": "\"454-1DFcnf1TmyuLs1OEUR8pULilDf8\"",
    "mtime": "2022-03-08T12:48:18.889Z",
    "path": "../public/_nuxt/_mid_-f3eb64b9.mjs"
  },
  "/_nuxt/_pageIndex_-c4246ada.mjs": {
    "type": "application/javascript",
    "etag": "\"b93-nHkFCAefc/2Z8Ft1zoPh+BLQjLA\"",
    "mtime": "2022-03-08T12:48:18.890Z",
    "path": "../public/_nuxt/_pageIndex_-c4246ada.mjs"
  },
  "/_nuxt/_pageIndex_-eb493f1a.mjs": {
    "type": "application/javascript",
    "etag": "\"a1-m+E/fIw3r6GiIytGTff7vDmbU2Q\"",
    "mtime": "2022-03-08T12:48:18.889Z",
    "path": "../public/_nuxt/_pageIndex_-eb493f1a.mjs"
  },
  "/_nuxt/_tid_-679fcb38.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-08T12:48:18.890Z",
    "path": "../public/_nuxt/_tid_-679fcb38.mjs"
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
const STATIC_ASSETS_BASE = "/_nuxt/D:/project/thinkmoon.github.io/dist" + "/" + "1646743658";
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
