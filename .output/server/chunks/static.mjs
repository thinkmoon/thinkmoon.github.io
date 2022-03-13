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
  "/_nuxt/404-189e2e66.mjs": {
    "type": "application/javascript",
    "etag": "\"134-TsRFBw4xzeK9Iwyqs4D9YyMD8j4\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/404-189e2e66.mjs"
  },
  "/_nuxt/admin-bcc15e17.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/admin-bcc15e17.mjs"
  },
  "/_nuxt/admin-c71ff08e.mjs": {
    "type": "application/javascript",
    "etag": "\"59f-lWpk4gC1I5hySU1NOYYsvIpd5p4\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/admin-c71ff08e.mjs"
  },
  "/_nuxt/auth-979694a1.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-lTpd57LK3ORTKw3QC2AdqTP5gaI\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/auth-979694a1.mjs"
  },
  "/_nuxt/default-59a2166e.mjs": {
    "type": "application/javascript",
    "etag": "\"705-Q2pCTJYk80T15pRtQaAJCaFcrjY\"",
    "mtime": "2022-03-13T04:53:26.687Z",
    "path": "../public/_nuxt/default-59a2166e.mjs"
  },
  "/_nuxt/default.b4bea5a6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f6-OFot306Hrl+tsvCipB2IzmHF3d8\"",
    "mtime": "2022-03-13T04:53:26.687Z",
    "path": "../public/_nuxt/default.b4bea5a6.css"
  },
  "/_nuxt/editor-e4b12fbf.mjs": {
    "type": "application/javascript",
    "etag": "\"3aa-O/U3810e/3qwoOogJCOcgRc8zF4\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/editor-e4b12fbf.mjs"
  },
  "/_nuxt/entry-16671c3d.mjs": {
    "type": "application/javascript",
    "etag": "\"20f48e-nm9NyIZmqHTgwYLM1ky5ueXa2qo\"",
    "mtime": "2022-03-13T04:53:26.714Z",
    "path": "../public/_nuxt/entry-16671c3d.mjs"
  },
  "/_nuxt/entry.57df3a85.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"58d33-9yHXRoiVrk75S5SqBtDL23nZo7M\"",
    "mtime": "2022-03-13T04:53:26.687Z",
    "path": "../public/_nuxt/entry.57df3a85.css"
  },
  "/_nuxt/index-0fcb51b0.mjs": {
    "type": "application/javascript",
    "etag": "\"365-iaqzr2g/cpKlBxA7yLuxH7UJ8cI\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/index-0fcb51b0.mjs"
  },
  "/_nuxt/index-719689cf.mjs": {
    "type": "application/javascript",
    "etag": "\"134-SHK4XmX07BmUF8jbYlnfEsrcR6M\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/index-719689cf.mjs"
  },
  "/_nuxt/index-a66f6920.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-1pEGUgmm0m03pvc8UObJ66HBr6E\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/index-a66f6920.mjs"
  },
  "/_nuxt/index-a71da11f.mjs": {
    "type": "application/javascript",
    "etag": "\"366-+tl0Al81NTzVbmq4JvPWE1RUCkE\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/index-a71da11f.mjs"
  },
  "/_nuxt/login-4f86bfd4.mjs": {
    "type": "application/javascript",
    "etag": "\"4f2-GazhrId94R/vw731KBPJGUaSbBI\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/login-4f86bfd4.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"f26-XylBvRxJ6zT+qyEn10ZkBxCLMt4\"",
    "mtime": "2022-03-13T04:53:26.688Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-1d0569ee.mjs": {
    "type": "application/javascript",
    "etag": "\"882-hW7wjeJ83y+ebI2vmELeNCqtx54\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/post-list-1d0569ee.mjs"
  },
  "/_nuxt/_cid_-6e76bf22.mjs": {
    "type": "application/javascript",
    "etag": "\"486-xtMVVosuo9UmA8Gg3zaLvZeg3+8\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/_cid_-6e76bf22.mjs"
  },
  "/_nuxt/_pageIndex_-31beb20d.mjs": {
    "type": "application/javascript",
    "etag": "\"21-9spEOGVcmW89hqFrYBxSkrRDzAU\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/_pageIndex_-31beb20d.mjs"
  },
  "/_nuxt/_pageIndex_-af83f8d9.mjs": {
    "type": "application/javascript",
    "etag": "\"c15-ktNLkHsVU8fkG+8e29mYfnu5+kA\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/_pageIndex_-af83f8d9.mjs"
  },
  "/_nuxt/_pageIndex_-b7c821c1.mjs": {
    "type": "application/javascript",
    "etag": "\"91-g1hBuOER/Wi2PdR/iQvDTtBKEZU\"",
    "mtime": "2022-03-13T04:53:26.679Z",
    "path": "../public/_nuxt/_pageIndex_-b7c821c1.mjs"
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
const STATIC_ASSETS_BASE = "/_nuxt/D:/project/thinkmoon.github.io/dist" + "/" + "1647147197";
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
