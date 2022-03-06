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
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"50-5cyjfR2QkuGaHakbUJJUmB5qP4Q\"",
    "mtime": "2022-03-06T09:08:01.667Z",
    "path": "../public/robots.txt"
  },
  "/_nuxt/admin-ca4c3be9.mjs": {
    "type": "application/javascript",
    "etag": "\"59f-RYWNKqLDdRhPQHD000QR4TeIBPo\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/admin-ca4c3be9.mjs"
  },
  "/_nuxt/auth-8d20e493.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-RoJeW6PpoCQqSEeISxCVuxju+Ao\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/auth-8d20e493.mjs"
  },
  "/_nuxt/editor-54c81fef.mjs": {
    "type": "application/javascript",
    "etag": "\"3a5-Yo4JIcxTaqPS4xPaJCcFCckQykc\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/editor-54c81fef.mjs"
  },
  "/_nuxt/entry-1f0622d1.mjs": {
    "type": "application/javascript",
    "etag": "\"1fec97-c9FPdPRJOdieV7B8e/U+5b7JCBo\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/entry-1f0622d1.mjs"
  },
  "/_nuxt/entry.75841aed.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55bf1-wjcT2udSQULuyXK78tPTNiqkMFA\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/entry.75841aed.css"
  },
  "/_nuxt/index-0c409c78.mjs": {
    "type": "application/javascript",
    "etag": "\"134-4Ayt73RHKl6wV+WigghNSu2R9Do\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/index-0c409c78.mjs"
  },
  "/_nuxt/index-12e33796.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-UC48WivzLE33+QSPYWdDUXAG5hM\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/index-12e33796.mjs"
  },
  "/_nuxt/login-d6d6e301.mjs": {
    "type": "application/javascript",
    "etag": "\"48a-pmwpUdOERgQgBr0DUahygT6sQvM\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/login-d6d6e301.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"8f9-a8Ddy2jlBMQb+53RKZnq9C65vCM\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-abe9da0b.mjs": {
    "type": "application/javascript",
    "etag": "\"882-k/GXqNovr+7cPp3jrcYsDt7mg4M\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/post-list-abe9da0b.mjs"
  },
  "/_nuxt/_cid_-c3534f66.mjs": {
    "type": "application/javascript",
    "etag": "\"453-aiOwfeLdUDTnovK30TdbVZFS+E4\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/_cid_-c3534f66.mjs"
  },
  "/_nuxt/_pageIndex_-c8703885.mjs": {
    "type": "application/javascript",
    "etag": "\"b5d-jHHACrF/GfvmWWRIHhT3Zhtdj3Q\"",
    "mtime": "2022-03-06T09:19:37.483Z",
    "path": "../public/_nuxt/_pageIndex_-c8703885.mjs"
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
const STATIC_ASSETS_BASE = "/_nuxt/D:/project/thinkmoon.github.io/dist" + "/" + "1646558366";
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
