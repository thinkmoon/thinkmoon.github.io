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
  "/_nuxt/admin-e2726965.mjs": {
    "type": "application/javascript",
    "etag": "\"59f-1GWYqv1w7ydXIPGveIbSiNWn0Xo\"",
    "mtime": "2022-03-07T11:17:11.276Z",
    "path": "../public/_nuxt/admin-e2726965.mjs"
  },
  "/_nuxt/auth-042ae891.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-ysTD5/yci5D+w4a09vbP3/Nw0Q4\"",
    "mtime": "2022-03-07T11:17:11.280Z",
    "path": "../public/_nuxt/auth-042ae891.mjs"
  },
  "/_nuxt/editor-3d47f99d.mjs": {
    "type": "application/javascript",
    "etag": "\"3aa-rZqk+h3ZYDKTEQaY+S1ByDC86xk\"",
    "mtime": "2022-03-07T11:17:11.276Z",
    "path": "../public/_nuxt/editor-3d47f99d.mjs"
  },
  "/_nuxt/entry-0d66ef59.mjs": {
    "type": "application/javascript",
    "etag": "\"1fec48-PeT4zmkNbxkwrSSiWXBhYdJvknQ\"",
    "mtime": "2022-03-07T11:17:11.303Z",
    "path": "../public/_nuxt/entry-0d66ef59.mjs"
  },
  "/_nuxt/entry.a12db18f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55bf1-1xnQLL4fkHsi+Y+nWHpBmOtEzTU\"",
    "mtime": "2022-03-07T11:17:11.280Z",
    "path": "../public/_nuxt/entry.a12db18f.css"
  },
  "/_nuxt/index-c822527a.mjs": {
    "type": "application/javascript",
    "etag": "\"8b-FMtKH+qrPM+PhTbPrPvVTER0Stc\"",
    "mtime": "2022-03-07T11:17:11.275Z",
    "path": "../public/_nuxt/index-c822527a.mjs"
  },
  "/_nuxt/index-e7db8979.mjs": {
    "type": "application/javascript",
    "etag": "\"134-qzNgyxfzFezoBADCQQWWnuxPwpg\"",
    "mtime": "2022-03-07T11:17:11.276Z",
    "path": "../public/_nuxt/index-e7db8979.mjs"
  },
  "/_nuxt/login-a9b158d7.mjs": {
    "type": "application/javascript",
    "etag": "\"48a-6lxl6RbFMIpimhOMLS5kyNDGqn4\"",
    "mtime": "2022-03-07T11:17:11.279Z",
    "path": "../public/_nuxt/login-a9b158d7.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"8f9-+Sw6Kh448fzS0LypBdh75SRG4Q4\"",
    "mtime": "2022-03-07T11:17:11.280Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/post-list-a215b697.mjs": {
    "type": "application/javascript",
    "etag": "\"882-4eepcPJAz3YgjyRZyCmCW5iAgr0\"",
    "mtime": "2022-03-07T11:17:11.276Z",
    "path": "../public/_nuxt/post-list-a215b697.mjs"
  },
  "/_nuxt/_cid_-6aeff17b.mjs": {
    "type": "application/javascript",
    "etag": "\"49c-um0hY0zR5FoukUXAzhjtRpCQTLo\"",
    "mtime": "2022-03-07T11:17:11.279Z",
    "path": "../public/_nuxt/_cid_-6aeff17b.mjs"
  },
  "/_nuxt/_pageIndex_-7a616b25.mjs": {
    "type": "application/javascript",
    "etag": "\"b7d-baqxQv0Dil+vhxzV5DWA+vX9AS0\"",
    "mtime": "2022-03-07T11:17:11.279Z",
    "path": "../public/_nuxt/_pageIndex_-7a616b25.mjs"
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
const STATIC_ASSETS_BASE = "/_nuxt/D:/project/thinkmoon.github.io/dist" + "/" + "1646651819";
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
