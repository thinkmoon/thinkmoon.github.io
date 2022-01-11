import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/admin-403ca329.mjs": {
    "type": "application/javascript",
    "etag": "\"39f-52n1rtc6GIOSjy6mN82t51IXy68\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/admin-403ca329.mjs"
  },
  "/_nuxt/bootstrap-fab435f2.mjs": {
    "type": "application/javascript",
    "etag": "\"1da522-g85UMwud8sYLNDCB+1tCXuLjvuA\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/bootstrap-fab435f2.mjs"
  },
  "/_nuxt/editor-df6e2455.mjs": {
    "type": "application/javascript",
    "etag": "\"1ae32-macXT4gRoYMLUt6JSRxvGQQDNIA\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/editor-df6e2455.mjs"
  },
  "/_nuxt/entry-f110d98e.mjs": {
    "type": "application/javascript",
    "etag": "\"65-wV4pbGvtXS5TuTQIH/mwWJ5rsqk\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/entry-f110d98e.mjs"
  },
  "/_nuxt/index-3fa728ea.mjs": {
    "type": "application/javascript",
    "etag": "\"20b-0Ksk1mDcf9SMLp9FqeoPsTO5+p8\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/index-3fa728ea.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"7f4-UplZuiS7p2ctGKN9wrOB3HPSltc\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/Post-574e22f0.mjs": {
    "type": "application/javascript",
    "etag": "\"3fa5-pYWBLWymZxxcWqScZsKU7TT+ijE\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/Post-574e22f0.mjs"
  },
  "/_nuxt/post-list-cccfe159.mjs": {
    "type": "application/javascript",
    "etag": "\"688-iu128eEEl08aPEN/YpVuvW2jHbs\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/post-list-cccfe159.mjs"
  },
  "/_nuxt/_cid_-96cdfd39.mjs": {
    "type": "application/javascript",
    "etag": "\"9b4-D/LGdJucNBVElBwyaYfTZcoavNA\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/_cid_-96cdfd39.mjs"
  },
  "/_nuxt/_pageIndex_-7adb7f45.mjs": {
    "type": "application/javascript",
    "etag": "\"a96-PesGDa263esmdjMY3jue7HDNslA\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/_pageIndex_-7adb7f45.mjs"
  },
  "/_nuxt/assets/admin.87f2a328.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"72-PUgaPUOZxVRCOAh+3N9/rvlY5NU\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/assets/admin.87f2a328.css"
  },
  "/_nuxt/assets/bootstrap.02e2ffd9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4fdcf-RhjBqPEi1QeQemX3S9tSzQgGNDY\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/assets/bootstrap.02e2ffd9.css"
  },
  "/_nuxt/assets/editor.09771dd1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d6-sYzdoL4jAkBWgh4kvK6amjWnD5M\"",
    "mtime": "2022-01-11T15:49:02.529Z",
    "path": "../public/_nuxt/assets/editor.09771dd1.css"
  },
  "/_nuxt/assets/_pageIndex_.8e548ad6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fb-o/sWcCmiQMgepKpUpPAwd5dVKRw\"",
    "mtime": "2022-01-11T15:49:02.529Z",
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
const STATIC_ASSETS_BASE = "D:/project/thinkmoon.github.io/dist" + "/" + "1641916135";
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
