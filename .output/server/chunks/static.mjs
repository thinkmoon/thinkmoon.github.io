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
    "etag": "\"50-5cyjfR2QkuGaHakbUJJUmB5qP4Q\"",
    "mtime": "2022-03-06T09:08:01.667Z",
    "path": "../public/robots.txt"
  },
  "/_nuxt/admin-0ffc4274.mjs": {
    "type": "application/javascript",
    "etag": "\"59f-YZrIV0szF8P7EbE/H/2Wip6khrc\"",
    "mtime": "2022-03-06T09:43:11.523Z",
    "path": "../public/_nuxt/admin-0ffc4274.mjs"
  },
  "/_nuxt/auth-e6a0e1d3.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-LjnutxLj30Btsy7lOEX5VZ6U6zY\"",
    "mtime": "2022-03-06T09:43:11.523Z",
    "path": "../public/_nuxt/auth-e6a0e1d3.mjs"
  },
  "/_nuxt/editor-34c31710.mjs": {
    "type": "application/javascript",
    "etag": "\"3a5-9UK5n87HjtcvA1TWrH26eyPhq7I\"",
    "mtime": "2022-03-06T09:43:11.523Z",
    "path": "../public/_nuxt/editor-34c31710.mjs"
  },
  "/_nuxt/entry-b6592b17.mjs": {
    "type": "application/javascript",
    "etag": "\"1fec48-8zSCYzJBfh6wR0Cq5gAaNrbOUNY\"",
    "mtime": "2022-03-06T09:43:11.569Z",
    "path": "../public/_nuxt/entry-b6592b17.mjs"
  },
  "/_nuxt/entry.1b2350a8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55bf1-5gwckexX/GBkpAcYF0EDFN/Ux5I\"",
    "mtime": "2022-03-06T09:43:11.536Z",
    "path": "../public/_nuxt/entry.1b2350a8.css"
  },
  "/_nuxt/index-426655a1.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-1lReYKdaO5/EXW1Z56xj1nAq+YU\"",
    "mtime": "2022-03-06T09:43:11.523Z",
    "path": "../public/_nuxt/index-426655a1.mjs"
  },
  "/_nuxt/index-84bf246a.mjs": {
    "type": "application/javascript",
    "etag": "\"134-Mjny5ejwzrp51QNnqia1+1vlm2w\"",
    "mtime": "2022-03-06T09:43:11.523Z",
    "path": "../public/_nuxt/index-84bf246a.mjs"
  },
  "/_nuxt/login-ca36b4b0.mjs": {
    "type": "application/javascript",
    "etag": "\"48a-DRNn9Inab6GYoMeOZNJoyaBX1Zw\"",
    "mtime": "2022-03-06T09:43:11.523Z",
    "path": "../public/_nuxt/login-ca36b4b0.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"8f9-Xkavt2idK4EWL8564wMgjehPo18\"",
    "mtime": "2022-03-06T09:43:11.535Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-0447be48.mjs": {
    "type": "application/javascript",
    "etag": "\"882-F5Ot7fwEFhyMXsq+xMx72s6GqXc\"",
    "mtime": "2022-03-06T09:43:11.523Z",
    "path": "../public/_nuxt/post-list-0447be48.mjs"
  },
  "/_nuxt/_cid_-e2bb3f13.mjs": {
    "type": "application/javascript",
    "etag": "\"49c-4iwVUqgMX2LIhj1ZXb4opILJ/Zc\"",
    "mtime": "2022-03-06T09:43:11.523Z",
    "path": "../public/_nuxt/_cid_-e2bb3f13.mjs"
  },
  "/_nuxt/_pageIndex_-3ad43ffe.mjs": {
    "type": "application/javascript",
    "etag": "\"b7d-qE/40BgO0Nfjjwm/VBGzJ9l2Jpg\"",
    "mtime": "2022-03-06T09:43:11.523Z",
    "path": "../public/_nuxt/_pageIndex_-3ad43ffe.mjs"
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
const STATIC_ASSETS_BASE = "/_nuxt/D:/project/thinkmoon.github.io/dist" + "/" + "1646559781";
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
