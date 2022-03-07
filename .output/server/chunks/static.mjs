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
  "/_nuxt/admin-fd90712e.mjs": {
    "type": "application/javascript",
    "etag": "\"59f-mLsP16GRTBPwsYpgGIGwdmG+ExY\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/admin-fd90712e.mjs"
  },
  "/_nuxt/auth-4cb4e962.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-vmNPgHZoOux3AqJ96tzgXYU8ICs\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/auth-4cb4e962.mjs"
  },
  "/_nuxt/editor-8fb83526.mjs": {
    "type": "application/javascript",
    "etag": "\"3aa-7lZyrVoaayiTZ+V+Oxk79xvOl+Q\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/editor-8fb83526.mjs"
  },
  "/_nuxt/entry-11220a85.mjs": {
    "type": "application/javascript",
    "etag": "\"1fd7c6-sq4QQo8/IDxvaTSdVYYxkPu7XaE\"",
    "mtime": "2022-03-07T14:21:11.183Z",
    "path": "../public/_nuxt/entry-11220a85.mjs"
  },
  "/_nuxt/entry.1b1671d1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55f1d-/7lj3vhJTH448zckN3DX59oxzfI\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/entry.1b1671d1.css"
  },
  "/_nuxt/index-a4ac5e9d.mjs": {
    "type": "application/javascript",
    "etag": "\"126-TkQgKGg/vwTPEgTeJ800vdE6N+k\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/index-a4ac5e9d.mjs"
  },
  "/_nuxt/index-e3b1f5f2.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-15AT8Du3FcpLyfeMYtLSQLIE3qM\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/index-e3b1f5f2.mjs"
  },
  "/_nuxt/index-e86bcfc5.mjs": {
    "type": "application/javascript",
    "etag": "\"134-sBT4UXAAyoXTaFolORtu2RMzrK8\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/index-e86bcfc5.mjs"
  },
  "/_nuxt/login-a4e36e6a.mjs": {
    "type": "application/javascript",
    "etag": "\"4f2-kM9VBqTGdzBLEpR+C+wRmt9OhrI\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/login-a4e36e6a.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"9ea-42nkIZfMkKs/cUiIq/B3k8w52j0\"",
    "mtime": "2022-03-07T14:21:11.152Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-eb400e26.mjs": {
    "type": "application/javascript",
    "etag": "\"882-SpWfuSw6dB4hR52FcJuKi6IzcC0\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/post-list-eb400e26.mjs"
  },
  "/_nuxt/_cid_-251d6a0e.mjs": {
    "type": "application/javascript",
    "etag": "\"486-ka8oR08+RrZBhG33aqiF4sJgAXk\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/_cid_-251d6a0e.mjs"
  },
  "/_nuxt/_pageIndex_-cd84a833.mjs": {
    "type": "application/javascript",
    "etag": "\"b93-6Fp1c2seOTF1grOdD6DJ2TmN2+A\"",
    "mtime": "2022-03-07T14:21:11.136Z",
    "path": "../public/_nuxt/_pageIndex_-cd84a833.mjs"
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
const STATIC_ASSETS_BASE = "/_nuxt/D:/project/thinkmoon.github.io/dist" + "/" + "1646662860";
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
