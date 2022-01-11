import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/admin-aba909ed.mjs": {
    "type": "application/javascript",
    "etag": "\"39f-fpPa8cVFSb37muGoKBfJ0XFRr2Q\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/admin-aba909ed.mjs"
  },
  "/_nuxt/bootstrap-6415f761.mjs": {
    "type": "application/javascript",
    "etag": "\"1da548-GPnNfd473yliZbweV8PYUtBqBqE\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/bootstrap-6415f761.mjs"
  },
  "/_nuxt/editor-6990b1cc.mjs": {
    "type": "application/javascript",
    "etag": "\"1ae32-u2WXsu1Gp+Lyr089ylPnN5r4VS4\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/editor-6990b1cc.mjs"
  },
  "/_nuxt/entry-17445d54.mjs": {
    "type": "application/javascript",
    "etag": "\"65-ILTtz0fPKYO4igSTQD67AFJjfV4\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/entry-17445d54.mjs"
  },
  "/_nuxt/index-cab63016.mjs": {
    "type": "application/javascript",
    "etag": "\"20b-Pqpf/9Q1mV6kDsXe11RpeHF0Qro\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/index-cab63016.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"7f4-xZPGPW9ENH8qXOgm7z/Xibrqq7s\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/Post-574e22f0.mjs": {
    "type": "application/javascript",
    "etag": "\"3fa5-pYWBLWymZxxcWqScZsKU7TT+ijE\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/Post-574e22f0.mjs"
  },
  "/_nuxt/post-list-72b1f3c0.mjs": {
    "type": "application/javascript",
    "etag": "\"688-aNsh7s/R3RRaswAdm4INdgfz4ds\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/post-list-72b1f3c0.mjs"
  },
  "/_nuxt/_cid_-db020cc3.mjs": {
    "type": "application/javascript",
    "etag": "\"9f0-Vlmt+kjvyOEfFXnvliAfOZNhQEI\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/_cid_-db020cc3.mjs"
  },
  "/_nuxt/_pageIndex_-7800b819.mjs": {
    "type": "application/javascript",
    "etag": "\"a96-OYBhd2KeeUXyp637YTFRfefFito\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/_pageIndex_-7800b819.mjs"
  },
  "/_nuxt/assets/admin.87f2a328.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"72-PUgaPUOZxVRCOAh+3N9/rvlY5NU\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/assets/admin.87f2a328.css"
  },
  "/_nuxt/assets/bootstrap.02e2ffd9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4fdcf-RhjBqPEi1QeQemX3S9tSzQgGNDY\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/assets/bootstrap.02e2ffd9.css"
  },
  "/_nuxt/assets/editor.09771dd1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d6-sYzdoL4jAkBWgh4kvK6amjWnD5M\"",
    "mtime": "2022-01-11T16:04:50.919Z",
    "path": "../public/_nuxt/assets/editor.09771dd1.css"
  },
  "/_nuxt/assets/_pageIndex_.8e548ad6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fb-o/sWcCmiQMgepKpUpPAwd5dVKRw\"",
    "mtime": "2022-01-11T16:04:50.919Z",
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
const STATIC_ASSETS_BASE = "D:/project/thinkmoon.github.io/dist" + "/" + "1641917082";
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
