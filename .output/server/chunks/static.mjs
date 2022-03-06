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
  "/_nuxt/admin-a35742e1.mjs": {
    "type": "application/javascript",
    "etag": "\"59f-SWzsEe8naU4hHJSNmtQvfyynnG0\"",
    "mtime": "2022-03-05T14:25:57.906Z",
    "path": "../public/_nuxt/admin-a35742e1.mjs"
  },
  "/_nuxt/auth-af4842a3.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-GJ8AnwdhfbHw38fQp/ORFoB8mw8\"",
    "mtime": "2022-03-05T14:25:57.972Z",
    "path": "../public/_nuxt/auth-af4842a3.mjs"
  },
  "/_nuxt/editor-2b4a7429.mjs": {
    "type": "application/javascript",
    "etag": "\"3a5-hDhriqmV+4FRlUDi4EbdJuN8Pog\"",
    "mtime": "2022-03-05T14:25:57.906Z",
    "path": "../public/_nuxt/editor-2b4a7429.mjs"
  },
  "/_nuxt/entry-e06cb8eb.mjs": {
    "type": "application/javascript",
    "etag": "\"1feb47-pfYUENInvm+DNZl/z8Pi6LCwxQA\"",
    "mtime": "2022-03-05T14:25:57.974Z",
    "path": "../public/_nuxt/entry-e06cb8eb.mjs"
  },
  "/_nuxt/entry.055babd0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55bf1-4Yb5BHOUwXYfmr/0hZLo49zpIBw\"",
    "mtime": "2022-03-05T14:25:57.973Z",
    "path": "../public/_nuxt/entry.055babd0.css"
  },
  "/_nuxt/index-6e603f96.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-ooepzaleyPtbME6WTZXlNUNUW5E\"",
    "mtime": "2022-03-05T14:25:57.972Z",
    "path": "../public/_nuxt/index-6e603f96.mjs"
  },
  "/_nuxt/index-99abb879.mjs": {
    "type": "application/javascript",
    "etag": "\"134-sVlL0uPJX9aXsAzj/mB/AujWP0Q\"",
    "mtime": "2022-03-05T14:25:57.972Z",
    "path": "../public/_nuxt/index-99abb879.mjs"
  },
  "/_nuxt/login-58358c46.mjs": {
    "type": "application/javascript",
    "etag": "\"48a-1gRHDr7ul00O4Jz2VtRKBu7Bdr8\"",
    "mtime": "2022-03-05T14:25:57.972Z",
    "path": "../public/_nuxt/login-58358c46.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"8f9-Kc14cJlWtWTQy/iH+MjIoYU+v1w\"",
    "mtime": "2022-03-05T14:25:57.973Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-fafbdd88.mjs": {
    "type": "application/javascript",
    "etag": "\"882-m/TrZc6JGRv1HnXlfGevXGicTp0\"",
    "mtime": "2022-03-05T14:25:57.972Z",
    "path": "../public/_nuxt/post-list-fafbdd88.mjs"
  },
  "/_nuxt/_cid_-89bf3559.mjs": {
    "type": "application/javascript",
    "etag": "\"2a4-yWrl+Rkqzvgl+YXMj5DZnxBaAu4\"",
    "mtime": "2022-03-05T14:25:57.972Z",
    "path": "../public/_nuxt/_cid_-89bf3559.mjs"
  },
  "/_nuxt/_pageIndex_-1a5fe706.mjs": {
    "type": "application/javascript",
    "etag": "\"aff-lG/UD9awGEuuIv6m17rkk+XqL2k\"",
    "mtime": "2022-03-05T14:25:57.972Z",
    "path": "../public/_nuxt/_pageIndex_-1a5fe706.mjs"
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
const STATIC_ASSETS_BASE = "/_nuxt/D:/project/thinkmoon.github.io/dist" + "/" + "1646490347";
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
