/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const t = "166",
  e = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  n = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  i = 0,
  r = 1,
  s = 2,
  a = 3,
  o = 0,
  l = 1,
  c = 2,
  h = 3,
  u = 0,
  d = 1,
  p = 2,
  m = 0,
  f = 1,
  g = 2,
  v = 3,
  _ = 4,
  x = 5,
  y = 100,
  M = 101,
  S = 102,
  b = 103,
  w = 104,
  T = 200,
  E = 201,
  A = 202,
  R = 203,
  C = 204,
  P = 205,
  I = 206,
  L = 207,
  U = 208,
  N = 209,
  D = 210,
  O = 211,
  F = 212,
  B = 213,
  z = 214,
  k = 0,
  V = 1,
  H = 2,
  G = 3,
  W = 4,
  X = 5,
  j = 6,
  q = 7,
  Y = 0,
  Z = 1,
  J = 2,
  K = 0,
  $ = 1,
  Q = 2,
  tt = 3,
  et = 4,
  nt = 5,
  it = 6,
  rt = 7,
  st = "attached",
  at = "detached",
  ot = 300,
  lt = 301,
  ct = 302,
  ht = 303,
  ut = 304,
  dt = 306,
  pt = 1e3,
  mt = 1001,
  ft = 1002,
  gt = 1003,
  vt = 1004,
  _t = 1004,
  xt = 1005,
  yt = 1005,
  Mt = 1006,
  St = 1007,
  bt = 1007,
  wt = 1008,
  Tt = 1008,
  Et = 1009,
  At = 1010,
  Rt = 1011,
  Ct = 1012,
  Pt = 1013,
  It = 1014,
  Lt = 1015,
  Ut = 1016,
  Nt = 1017,
  Dt = 1018,
  Ot = 1020,
  Ft = 35902,
  Bt = 1021,
  zt = 1022,
  kt = 1023,
  Vt = 1024,
  Ht = 1025,
  Gt = 1026,
  Wt = 1027,
  Xt = 1028,
  jt = 1029,
  qt = 1030,
  Yt = 1031,
  Zt = 1032,
  Jt = 1033,
  Kt = 33776,
  $t = 33777,
  Qt = 33778,
  te = 33779,
  ee = 35840,
  ne = 35841,
  ie = 35842,
  re = 35843,
  se = 36196,
  ae = 37492,
  oe = 37496,
  le = 37808,
  ce = 37809,
  he = 37810,
  ue = 37811,
  de = 37812,
  pe = 37813,
  me = 37814,
  fe = 37815,
  ge = 37816,
  ve = 37817,
  _e = 37818,
  xe = 37819,
  ye = 37820,
  Me = 37821,
  Se = 36492,
  be = 36494,
  we = 36495,
  Te = 36283,
  Ee = 36284,
  Ae = 36285,
  Re = 36286,
  Ce = 2200,
  Pe = 2201,
  Ie = 2202,
  Le = 2300,
  Ue = 2301,
  Ne = 2302,
  De = 2400,
  Oe = 2401,
  Fe = 2402,
  Be = 2500,
  ze = 2501,
  ke = 0,
  Ve = 1,
  He = 2,
  Ge = 3200,
  We = 3201,
  Xe = 0,
  je = 1,
  qe = "",
  Ye = "srgb",
  Ze = "srgb-linear",
  Je = "display-p3",
  Ke = "display-p3-linear",
  $e = "linear",
  Qe = "srgb",
  tn = "rec709",
  en = "p3",
  nn = 0,
  rn = 7680,
  sn = 7681,
  an = 7682,
  on = 7683,
  ln = 34055,
  cn = 34056,
  hn = 5386,
  un = 512,
  dn = 513,
  pn = 514,
  mn = 515,
  fn = 516,
  gn = 517,
  vn = 518,
  _n = 519,
  xn = 512,
  yn = 513,
  Mn = 514,
  Sn = 515,
  bn = 516,
  wn = 517,
  Tn = 518,
  En = 519,
  An = 35044,
  Rn = 35048,
  Cn = 35040,
  Pn = 35045,
  In = 35049,
  Ln = 35041,
  Un = 35046,
  Nn = 35050,
  Dn = 35042,
  On = "100",
  Fn = "300 es",
  Bn = 2e3,
  zn = 2001;
class kn {
  addEventListener(t, e) {
    void 0 === this._listeners && (this._listeners = {});
    const n = this._listeners;
    void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (void 0 === this._listeners) return !1;
    const n = this._listeners;
    return void 0 !== n[t] && -1 !== n[t].indexOf(e);
  }
  removeEventListener(t, e) {
    if (void 0 === this._listeners) return;
    const n = this._listeners[t];
    if (void 0 !== n) {
      const t = n.indexOf(e);
      -1 !== t && n.splice(t, 1);
    }
  }
  dispatchEvent(t) {
    if (void 0 === this._listeners) return;
    const e = this._listeners[t.type];
    if (void 0 !== e) {
      t.target = this;
      const n = e.slice(0);
      for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
      t.target = null;
    }
  }
}
const Vn = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let Hn = 1234567;
const Gn = Math.PI / 180,
  Wn = 180 / Math.PI;
function Xn() {
  const t = (4294967295 * Math.random()) | 0,
    e = (4294967295 * Math.random()) | 0,
    n = (4294967295 * Math.random()) | 0,
    i = (4294967295 * Math.random()) | 0;
  return (
    Vn[255 & t] +
    Vn[(t >> 8) & 255] +
    Vn[(t >> 16) & 255] +
    Vn[(t >> 24) & 255] +
    "-" +
    Vn[255 & e] +
    Vn[(e >> 8) & 255] +
    "-" +
    Vn[((e >> 16) & 15) | 64] +
    Vn[(e >> 24) & 255] +
    "-" +
    Vn[(63 & n) | 128] +
    Vn[(n >> 8) & 255] +
    "-" +
    Vn[(n >> 16) & 255] +
    Vn[(n >> 24) & 255] +
    Vn[255 & i] +
    Vn[(i >> 8) & 255] +
    Vn[(i >> 16) & 255] +
    Vn[(i >> 24) & 255]
  ).toLowerCase();
}
function jn(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function qn(t, e) {
  return ((t % e) + e) % e;
}
function Yn(t, e, n) {
  return (1 - n) * t + n * e;
}
function Zn(t, e) {
  switch (e.constructor) {
    case Float32Array:
      return t;
    case Uint32Array:
      return t / 4294967295;
    case Uint16Array:
      return t / 65535;
    case Uint8Array:
      return t / 255;
    case Int32Array:
      return Math.max(t / 2147483647, -1);
    case Int16Array:
      return Math.max(t / 32767, -1);
    case Int8Array:
      return Math.max(t / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Jn(t, e) {
  switch (e.constructor) {
    case Float32Array:
      return t;
    case Uint32Array:
      return Math.round(4294967295 * t);
    case Uint16Array:
      return Math.round(65535 * t);
    case Uint8Array:
      return Math.round(255 * t);
    case Int32Array:
      return Math.round(2147483647 * t);
    case Int16Array:
      return Math.round(32767 * t);
    case Int8Array:
      return Math.round(127 * t);
    default:
      throw new Error("Invalid component type.");
  }
}
const Kn = {
  DEG2RAD: Gn,
  RAD2DEG: Wn,
  generateUUID: Xn,
  clamp: jn,
  euclideanModulo: qn,
  mapLinear: function (t, e, n, i, r) {
    return i + ((t - e) * (r - i)) / (n - e);
  },
  inverseLerp: function (t, e, n) {
    return t !== e ? (n - t) / (e - t) : 0;
  },
  lerp: Yn,
  damp: function (t, e, n, i) {
    return Yn(t, e, 1 - Math.exp(-n * i));
  },
  pingpong: function (t, e = 1) {
    return e - Math.abs(qn(t, 2 * e) - e);
  },
  smoothstep: function (t, e, n) {
    return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
  },
  smootherstep: function (t, e, n) {
    return t <= e
      ? 0
      : t >= n
      ? 1
      : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
  },
  randInt: function (t, e) {
    return t + Math.floor(Math.random() * (e - t + 1));
  },
  randFloat: function (t, e) {
    return t + Math.random() * (e - t);
  },
  randFloatSpread: function (t) {
    return t * (0.5 - Math.random());
  },
  seededRandom: function (t) {
    void 0 !== t && (Hn = t);
    let e = (Hn += 1831565813);
    return (
      (e = Math.imul(e ^ (e >>> 15), 1 | e)),
      (e ^= e + Math.imul(e ^ (e >>> 7), 61 | e)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  },
  degToRad: function (t) {
    return t * Gn;
  },
  radToDeg: function (t) {
    return t * Wn;
  },
  isPowerOfTwo: function (t) {
    return 0 == (t & (t - 1)) && 0 !== t;
  },
  ceilPowerOfTwo: function (t) {
    return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
  },
  floorPowerOfTwo: function (t) {
    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
  },
  setQuaternionFromProperEuler: function (t, e, n, i, r) {
    const s = Math.cos,
      a = Math.sin,
      o = s(n / 2),
      l = a(n / 2),
      c = s((e + i) / 2),
      h = a((e + i) / 2),
      u = s((e - i) / 2),
      d = a((e - i) / 2),
      p = s((i - e) / 2),
      m = a((i - e) / 2);
    switch (r) {
      case "XYX":
        t.set(o * h, l * u, l * d, o * c);
        break;
      case "YZY":
        t.set(l * d, o * h, l * u, o * c);
        break;
      case "ZXZ":
        t.set(l * u, l * d, o * h, o * c);
        break;
      case "XZX":
        t.set(o * h, l * m, l * p, o * c);
        break;
      case "YXY":
        t.set(l * p, o * h, l * m, o * c);
        break;
      case "ZYZ":
        t.set(l * m, l * p, o * h, o * c);
        break;
      default:
        console.warn(
          "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
            r
        );
    }
  },
  normalize: Jn,
  denormalize: Zn,
};
class $n {
  constructor(t = 0, e = 0) {
    ($n.prototype.isVector2 = !0), (this.x = t), (this.y = e);
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return (this.x = t), (this.y = e), this;
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), this;
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), this;
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), this;
  }
  addVectors(t, e) {
    return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), this;
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), this;
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), this;
  }
  subVectors(t, e) {
    return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), this;
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), this;
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      i = t.elements;
    return (
      (this.x = i[0] * e + i[3] * n + i[6]),
      (this.y = i[1] * e + i[4] * n + i[7]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (0 === e) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(jn(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this;
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), t;
  }
  fromBufferAttribute(t, e) {
    return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e),
      i = Math.sin(e),
      r = this.x - t.x,
      s = this.y - t.y;
    return (this.x = r * n - s * i + t.x), (this.y = r * i + s * n + t.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Qn {
  constructor(t, e, n, i, r, s, a, o, l) {
    (Qn.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      void 0 !== t && this.set(t, e, n, i, r, s, a, o, l);
  }
  set(t, e, n, i, r, s, a, o, l) {
    const c = this.elements;
    return (
      (c[0] = t),
      (c[1] = i),
      (c[2] = a),
      (c[3] = e),
      (c[4] = r),
      (c[5] = o),
      (c[6] = n),
      (c[7] = s),
      (c[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrix3Column(this, 0),
      e.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return (
      this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      i = e.elements,
      r = this.elements,
      s = n[0],
      a = n[3],
      o = n[6],
      l = n[1],
      c = n[4],
      h = n[7],
      u = n[2],
      d = n[5],
      p = n[8],
      m = i[0],
      f = i[3],
      g = i[6],
      v = i[1],
      _ = i[4],
      x = i[7],
      y = i[2],
      M = i[5],
      S = i[8];
    return (
      (r[0] = s * m + a * v + o * y),
      (r[3] = s * f + a * _ + o * M),
      (r[6] = s * g + a * x + o * S),
      (r[1] = l * m + c * v + h * y),
      (r[4] = l * f + c * _ + h * M),
      (r[7] = l * g + c * x + h * S),
      (r[2] = u * m + d * v + p * y),
      (r[5] = u * f + d * _ + p * M),
      (r[8] = u * g + d * x + p * S),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[3] *= t),
      (e[6] *= t),
      (e[1] *= t),
      (e[4] *= t),
      (e[7] *= t),
      (e[2] *= t),
      (e[5] *= t),
      (e[8] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      s = t[4],
      a = t[5],
      o = t[6],
      l = t[7],
      c = t[8];
    return (
      e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      s = t[4],
      a = t[5],
      o = t[6],
      l = t[7],
      c = t[8],
      h = c * s - a * l,
      u = a * o - c * r,
      d = l * r - s * o,
      p = e * h + n * u + i * d;
    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / p;
    return (
      (t[0] = h * m),
      (t[1] = (i * l - c * n) * m),
      (t[2] = (a * n - i * s) * m),
      (t[3] = u * m),
      (t[4] = (c * e - i * o) * m),
      (t[5] = (i * r - a * e) * m),
      (t[6] = d * m),
      (t[7] = (n * o - l * e) * m),
      (t[8] = (s * e - n * r) * m),
      this
    );
  }
  transpose() {
    let t;
    const e = this.elements;
    return (
      (t = e[1]),
      (e[1] = e[3]),
      (e[3] = t),
      (t = e[2]),
      (e[2] = e[6]),
      (e[6] = t),
      (t = e[5]),
      (e[5] = e[7]),
      (e[7] = t),
      this
    );
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return (
      (t[0] = e[0]),
      (t[1] = e[3]),
      (t[2] = e[6]),
      (t[3] = e[1]),
      (t[4] = e[4]),
      (t[5] = e[7]),
      (t[6] = e[2]),
      (t[7] = e[5]),
      (t[8] = e[8]),
      this
    );
  }
  setUvTransform(t, e, n, i, r, s, a) {
    const o = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * o,
        n * l,
        -n * (o * s + l * a) + s + t,
        -i * l,
        i * o,
        -i * (-l * s + o * a) + a + e,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(t, e) {
    return this.premultiply(ti.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(ti.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(ti.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return (
      t.isVector2
        ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
        : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
      this
    );
  }
  makeRotation(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements,
      n = t.elements;
    for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      t
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const ti = new Qn();
function ei(t) {
  for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
  return !1;
}
const ni = {
  Int8Array: Int8Array,
  Uint8Array: Uint8Array,
  Uint8ClampedArray: Uint8ClampedArray,
  Int16Array: Int16Array,
  Uint16Array: Uint16Array,
  Int32Array: Int32Array,
  Uint32Array: Uint32Array,
  Float32Array: Float32Array,
  Float64Array: Float64Array,
};
function ii(t, e) {
  return new ni[t](e);
}
function ri(t) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", t);
}
function si() {
  const t = ri("canvas");
  return (t.style.display = "block"), t;
}
const ai = {};
function oi(t) {
  t in ai || ((ai[t] = !0), console.warn(t));
}
const li = new Qn().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  ),
  ci = new Qn().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  ),
  hi = {
    [Ze]: {
      transfer: $e,
      primaries: tn,
      toReference: (t) => t,
      fromReference: (t) => t,
    },
    [Ye]: {
      transfer: Qe,
      primaries: tn,
      toReference: (t) => t.convertSRGBToLinear(),
      fromReference: (t) => t.convertLinearToSRGB(),
    },
    [Ke]: {
      transfer: $e,
      primaries: en,
      toReference: (t) => t.applyMatrix3(ci),
      fromReference: (t) => t.applyMatrix3(li),
    },
    [Je]: {
      transfer: Qe,
      primaries: en,
      toReference: (t) => t.convertSRGBToLinear().applyMatrix3(ci),
      fromReference: (t) => t.applyMatrix3(li).convertLinearToSRGB(),
    },
  },
  ui = new Set([Ze, Ke]),
  di = {
    enabled: !0,
    _workingColorSpace: Ze,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(t) {
      if (!ui.has(t))
        throw new Error(`Unsupported working color space, "${t}".`);
      this._workingColorSpace = t;
    },
    convert: function (t, e, n) {
      if (!1 === this.enabled || e === n || !e || !n) return t;
      const i = hi[e].toReference;
      return (0, hi[n].fromReference)(i(t));
    },
    fromWorkingColorSpace: function (t, e) {
      return this.convert(t, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (t, e) {
      return this.convert(t, e, this._workingColorSpace);
    },
    getPrimaries: function (t) {
      return hi[t].primaries;
    },
    getTransfer: function (t) {
      return t === qe ? $e : hi[t].transfer;
    },
  };
function pi(t) {
  return t < 0.04045
    ? 0.0773993808 * t
    : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
}
function mi(t) {
  return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
}
let fi;
class gi {
  static getDataURL(t) {
    if (/^data:/i.test(t.src)) return t.src;
    if ("undefined" == typeof HTMLCanvasElement) return t.src;
    let e;
    if (t instanceof HTMLCanvasElement) e = t;
    else {
      void 0 === fi && (fi = ri("canvas")),
        (fi.width = t.width),
        (fi.height = t.height);
      const n = fi.getContext("2d");
      t instanceof ImageData
        ? n.putImageData(t, 0, 0)
        : n.drawImage(t, 0, 0, t.width, t.height),
        (e = fi);
    }
    return e.width > 2048 || e.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          t
        ),
        e.toDataURL("image/jpeg", 0.6))
      : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (
      ("undefined" != typeof HTMLImageElement &&
        t instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
    ) {
      const e = ri("canvas");
      (e.width = t.width), (e.height = t.height);
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height),
        r = i.data;
      for (let t = 0; t < r.length; t++) r[t] = 255 * pi(r[t] / 255);
      return n.putImageData(i, 0, 0), e;
    }
    if (t.data) {
      const e = t.data.slice(0);
      for (let t = 0; t < e.length; t++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray
          ? (e[t] = Math.floor(255 * pi(e[t] / 255)))
          : (e[t] = pi(e[t]));
      return { data: e, width: t.width, height: t.height };
    }
    return (
      console.warn(
        "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
      ),
      t
    );
  }
}
let vi = 0;
class _i {
  constructor(t = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: vi++ }),
      (this.uuid = Xn()),
      (this.data = t),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t;
    if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (null !== i) {
      let t;
      if (Array.isArray(i)) {
        t = [];
        for (let e = 0, n = i.length; e < n; e++)
          i[e].isDataTexture ? t.push(xi(i[e].image)) : t.push(xi(i[e]));
      } else t = xi(i);
      n.url = t;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function xi(t) {
  return ("undefined" != typeof HTMLImageElement &&
    t instanceof HTMLImageElement) ||
    ("undefined" != typeof HTMLCanvasElement &&
      t instanceof HTMLCanvasElement) ||
    ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
    ? gi.getDataURL(t)
    : t.data
    ? {
        data: Array.from(t.data),
        width: t.width,
        height: t.height,
        type: t.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let yi = 0;
class Mi extends kn {
  constructor(
    t = Mi.DEFAULT_IMAGE,
    e = Mi.DEFAULT_MAPPING,
    n = 1001,
    i = 1001,
    r = 1006,
    s = 1008,
    a = kt,
    o = Et,
    l = Mi.DEFAULT_ANISOTROPY,
    c = ""
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: yi++ }),
      (this.uuid = Xn()),
      (this.name = ""),
      (this.source = new _i(t)),
      (this.mipmaps = []),
      (this.mapping = e),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = s),
      (this.anisotropy = l),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = o),
      (this.offset = new $n(0, 0)),
      (this.repeat = new $n(1, 1)),
      (this.center = new $n(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Qn()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = c),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.source = t.source),
      (this.mipmaps = t.mipmaps.slice(0)),
      (this.mapping = t.mapping),
      (this.channel = t.channel),
      (this.wrapS = t.wrapS),
      (this.wrapT = t.wrapT),
      (this.magFilter = t.magFilter),
      (this.minFilter = t.minFilter),
      (this.anisotropy = t.anisotropy),
      (this.format = t.format),
      (this.internalFormat = t.internalFormat),
      (this.type = t.type),
      this.offset.copy(t.offset),
      this.repeat.copy(t.repeat),
      this.center.copy(t.center),
      (this.rotation = t.rotation),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this.matrix.copy(t.matrix),
      (this.generateMipmaps = t.generateMipmaps),
      (this.premultiplyAlpha = t.premultiplyAlpha),
      (this.flipY = t.flipY),
      (this.unpackAlignment = t.unpackAlignment),
      (this.colorSpace = t.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t;
    if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      e || (t.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== ot) return t;
    if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
      switch (this.wrapS) {
        case pt:
          t.x = t.x - Math.floor(t.x);
          break;
        case mt:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case ft:
          1 === Math.abs(Math.floor(t.x) % 2)
            ? (t.x = Math.ceil(t.x) - t.x)
            : (t.x = t.x - Math.floor(t.x));
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case pt:
          t.y = t.y - Math.floor(t.y);
          break;
        case mt:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case ft:
          1 === Math.abs(Math.floor(t.y) % 2)
            ? (t.y = Math.ceil(t.y) - t.y)
            : (t.y = t.y - Math.floor(t.y));
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    !0 === t && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(t) {
    !0 === t && this.pmremVersion++;
  }
}
(Mi.DEFAULT_IMAGE = null),
  (Mi.DEFAULT_MAPPING = ot),
  (Mi.DEFAULT_ANISOTROPY = 1);
class Si {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    (Si.prototype.isVector4 = !0),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setZ(t) {
    return (this.z = t), this;
  }
  setW(t) {
    return (this.w = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.z = t.z),
      (this.w = void 0 !== t.w ? t.w : 1),
      this
    );
  }
  add(t) {
    return (
      (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
    );
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      (this.w = t.w + e.w),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      (this.w += t.w * e),
      this
    );
  }
  sub(t) {
    return (
      (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
    );
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      (this.w = t.w - e.w),
      this
    );
  }
  multiply(t) {
    return (
      (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
    );
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      s = t.elements;
    return (
      (this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r),
      (this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r),
      (this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r),
      (this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r),
      this
    );
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return (
      e < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, r;
    const s = 0.01,
      a = 0.1,
      o = t.elements,
      l = o[0],
      c = o[4],
      h = o[8],
      u = o[1],
      d = o[5],
      p = o[9],
      m = o[2],
      f = o[6],
      g = o[10];
    if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
      if (
        Math.abs(c + u) < a &&
        Math.abs(h + m) < a &&
        Math.abs(p + f) < a &&
        Math.abs(l + d + g - 3) < a
      )
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const t = (l + 1) / 2,
        o = (d + 1) / 2,
        v = (g + 1) / 2,
        _ = (c + u) / 4,
        x = (h + m) / 4,
        y = (p + f) / 4;
      return (
        t > o && t > v
          ? t < s
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(t)), (i = _ / n), (r = x / n))
          : o > v
          ? o < s
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(o)), (n = _ / i), (r = y / i))
          : v < s
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(v)), (n = x / r), (i = y / r)),
        this.set(n, i, r, e),
        this
      );
    }
    let v = Math.sqrt(
      (f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c)
    );
    return (
      Math.abs(v) < 0.001 && (v = 1),
      (this.x = (f - p) / v),
      (this.y = (h - m) / v),
      (this.z = (u - c) / v),
      (this.w = Math.acos((l + d + g - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return (
      (this.x = e[12]),
      (this.y = e[13]),
      (this.z = e[14]),
      (this.w = e[15]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      (this.w = Math.min(this.w, t.w)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      (this.w = Math.max(this.w, t.w)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      (this.w = Math.max(t.w, Math.min(e.w, this.w))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      (this.w = Math.max(t, Math.min(e, this.w))),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      (this.w += (t.w - this.w) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      (this.w = t.w + (e.w - t.w) * n),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return (
      (this.x = t[e]),
      (this.y = t[e + 1]),
      (this.z = t[e + 2]),
      (this.w = t[e + 3]),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this.x),
      (t[e + 1] = this.y),
      (t[e + 2] = this.z),
      (t[e + 3] = this.w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      (this.w = t.getW(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class bi extends kn {
  constructor(t = 1, e = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = t),
      (this.height = e),
      (this.depth = 1),
      (this.scissor = new Si(0, 0, t, e)),
      (this.scissorTest = !1),
      (this.viewport = new Si(0, 0, t, e));
    const i = { width: t, height: e, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: Mt,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n
    );
    const r = new Mi(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace
    );
    (r.flipY = !1),
      (r.generateMipmaps = n.generateMipmaps),
      (r.internalFormat = n.internalFormat),
      (this.textures = []);
    const s = n.count;
    for (let t = 0; t < s; t++)
      (this.textures[t] = r.clone()),
        (this.textures[t].isRenderTargetTexture = !0);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      (this.width = t), (this.height = e), (this.depth = n);
      for (let i = 0, r = this.textures.length; i < r; i++)
        (this.textures[i].image.width = t),
          (this.textures[i].image.height = e),
          (this.textures[i].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.width = t.width),
      (this.height = t.height),
      (this.depth = t.depth),
      this.scissor.copy(t.scissor),
      (this.scissorTest = t.scissorTest),
      this.viewport.copy(t.viewport),
      (this.textures.length = 0);
    for (let e = 0, n = t.textures.length; e < n; e++)
      (this.textures[e] = t.textures[e].clone()),
        (this.textures[e].isRenderTargetTexture = !0);
    const e = Object.assign({}, t.texture.image);
    return (
      (this.texture.source = new _i(e)),
      (this.depthBuffer = t.depthBuffer),
      (this.stencilBuffer = t.stencilBuffer),
      (this.resolveDepthBuffer = t.resolveDepthBuffer),
      (this.resolveStencilBuffer = t.resolveStencilBuffer),
      null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()),
      (this.samples = t.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class wi extends bi {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), (this.isWebGLRenderTarget = !0);
  }
}
class Ti extends Mi {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: t, width: e, height: n, depth: i }),
      (this.magFilter = gt),
      (this.minFilter = gt),
      (this.wrapR = mt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ei extends wi {
  constructor(t = 1, e = 1, n = 1, i = {}) {
    super(t, e, i),
      (this.isWebGLArrayRenderTarget = !0),
      (this.depth = n),
      (this.texture = new Ti(null, t, e, n)),
      (this.texture.isRenderTargetTexture = !0);
  }
}
class Ai extends Mi {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: t, width: e, height: n, depth: i }),
      (this.magFilter = gt),
      (this.minFilter = gt),
      (this.wrapR = mt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ri extends wi {
  constructor(t = 1, e = 1, n = 1, i = {}) {
    super(t, e, i),
      (this.isWebGL3DRenderTarget = !0),
      (this.depth = n),
      (this.texture = new Ai(null, t, e, n)),
      (this.texture.isRenderTargetTexture = !0);
  }
}
class Ci {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(t, e, n, i, r, s, a) {
    let o = n[i + 0],
      l = n[i + 1],
      c = n[i + 2],
      h = n[i + 3];
    const u = r[s + 0],
      d = r[s + 1],
      p = r[s + 2],
      m = r[s + 3];
    if (0 === a)
      return (
        (t[e + 0] = o), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h)
      );
    if (1 === a)
      return (
        (t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = m)
      );
    if (h !== m || o !== u || l !== d || c !== p) {
      let t = 1 - a;
      const e = o * u + l * d + c * p + h * m,
        n = e >= 0 ? 1 : -1,
        i = 1 - e * e;
      if (i > Number.EPSILON) {
        const r = Math.sqrt(i),
          s = Math.atan2(r, e * n);
        (t = Math.sin(t * s) / r), (a = Math.sin(a * s) / r);
      }
      const r = a * n;
      if (
        ((o = o * t + u * r),
        (l = l * t + d * r),
        (c = c * t + p * r),
        (h = h * t + m * r),
        t === 1 - a)
      ) {
        const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
        (o *= t), (l *= t), (c *= t), (h *= t);
      }
    }
    (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
  }
  static multiplyQuaternionsFlat(t, e, n, i, r, s) {
    const a = n[i],
      o = n[i + 1],
      l = n[i + 2],
      c = n[i + 3],
      h = r[s],
      u = r[s + 1],
      d = r[s + 2],
      p = r[s + 3];
    return (
      (t[e] = a * p + c * h + o * d - l * u),
      (t[e + 1] = o * p + c * u + l * h - a * d),
      (t[e + 2] = l * p + c * d + a * u - o * h),
      (t[e + 3] = c * p - a * h - o * u - l * d),
      t
    );
  }
  get x() {
    return this._x;
  }
  set x(t) {
    (this._x = t), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    (this._y = t), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    (this._z = t), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    (this._w = t), this._onChangeCallback();
  }
  set(t, e, n, i) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return (
      (this._x = t.x),
      (this._y = t.y),
      (this._z = t.z),
      (this._w = t.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(t, e = !0) {
    const n = t._x,
      i = t._y,
      r = t._z,
      s = t._order,
      a = Math.cos,
      o = Math.sin,
      l = a(n / 2),
      c = a(i / 2),
      h = a(r / 2),
      u = o(n / 2),
      d = o(i / 2),
      p = o(r / 2);
    switch (s) {
      case "XYZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "YXZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "ZXY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "ZYX":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "YZX":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "XZY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s
        );
    }
    return !0 === e && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2,
      i = Math.sin(n);
    return (
      (this._x = t.x * i),
      (this._y = t.y * i),
      (this._z = t.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t) {
    const e = t.elements,
      n = e[0],
      i = e[4],
      r = e[8],
      s = e[1],
      a = e[5],
      o = e[9],
      l = e[2],
      c = e[6],
      h = e[10],
      u = n + a + h;
    if (u > 0) {
      const t = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / t),
        (this._x = (c - o) * t),
        (this._y = (r - l) * t),
        (this._z = (s - i) * t);
    } else if (n > a && n > h) {
      const t = 2 * Math.sqrt(1 + n - a - h);
      (this._w = (c - o) / t),
        (this._x = 0.25 * t),
        (this._y = (i + s) / t),
        (this._z = (r + l) / t);
    } else if (a > h) {
      const t = 2 * Math.sqrt(1 + a - n - h);
      (this._w = (r - l) / t),
        (this._x = (i + s) / t),
        (this._y = 0.25 * t),
        (this._z = (o + c) / t);
    } else {
      const t = 2 * Math.sqrt(1 + h - n - a);
      (this._w = (s - i) / t),
        (this._x = (r + l) / t),
        (this._y = (o + c) / t),
        (this._z = 0.25 * t);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(t.x) > Math.abs(t.z)
            ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = n)))
        : ((this._x = t.y * e.z - t.z * e.y),
          (this._y = t.z * e.x - t.x * e.z),
          (this._z = t.x * e.y - t.y * e.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(jn(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (0 === n) return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let t = this.length();
    return (
      0 === t
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((t = 1 / t),
          (this._x = this._x * t),
          (this._y = this._y * t),
          (this._z = this._z * t),
          (this._w = this._w * t)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x,
      i = t._y,
      r = t._z,
      s = t._w,
      a = e._x,
      o = e._y,
      l = e._z,
      c = e._w;
    return (
      (this._x = n * c + s * a + i * l - r * o),
      (this._y = i * c + s * o + r * a - n * l),
      (this._z = r * c + s * l + n * o - i * a),
      (this._w = s * c - n * a - i * o - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(t, e) {
    if (0 === e) return this;
    if (1 === e) return this.copy(t);
    const n = this._x,
      i = this._y,
      r = this._z,
      s = this._w;
    let a = s * t._w + n * t._x + i * t._y + r * t._z;
    if (
      (a < 0
        ? ((this._w = -t._w),
          (this._x = -t._x),
          (this._y = -t._y),
          (this._z = -t._z),
          (a = -a))
        : this.copy(t),
      a >= 1)
    )
      return (this._w = s), (this._x = n), (this._y = i), (this._z = r), this;
    const o = 1 - a * a;
    if (o <= Number.EPSILON) {
      const t = 1 - e;
      return (
        (this._w = t * s + e * this._w),
        (this._x = t * n + e * this._x),
        (this._y = t * i + e * this._y),
        (this._z = t * r + e * this._z),
        this.normalize(),
        this
      );
    }
    const l = Math.sqrt(o),
      c = Math.atan2(l, a),
      h = Math.sin((1 - e) * c) / l,
      u = Math.sin(e * c) / l;
    return (
      (this._w = s * h + this._w * u),
      (this._x = n * h + this._x * u),
      (this._y = i * h + this._y * u),
      (this._z = r * h + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(),
      e = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      r = Math.sqrt(n);
    return this.set(
      i * Math.sin(t),
      i * Math.cos(t),
      r * Math.sin(e),
      r * Math.cos(e)
    );
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._w === this._w
    );
  }
  fromArray(t, e = 0) {
    return (
      (this._x = t[e]),
      (this._y = t[e + 1]),
      (this._z = t[e + 2]),
      (this._w = t[e + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this._x = t.getX(e)),
      (this._y = t.getY(e)),
      (this._z = t.getZ(e)),
      (this._w = t.getW(e)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class Pi {
  constructor(t = 0, e = 0, n = 0) {
    (Pi.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = n);
  }
  set(t, e, n) {
    return (
      void 0 === n && (n = this.z),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      this
    );
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setZ(t) {
    return (this.z = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), this;
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
    );
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this;
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), this;
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
    );
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), this;
  }
  multiplyVectors(t, e) {
    return (
      (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
    );
  }
  applyEuler(t) {
    return this.applyQuaternion(Li.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Li.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[3] * n + r[6] * i),
      (this.y = r[1] * e + r[4] * n + r[7] * i),
      (this.z = r[2] * e + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements,
      s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s),
      (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s),
      (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s),
      this
    );
  }
  applyQuaternion(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.x,
      s = t.y,
      a = t.z,
      o = t.w,
      l = 2 * (s * i - a * n),
      c = 2 * (a * e - r * i),
      h = 2 * (r * n - s * e);
    return (
      (this.x = e + o * l + s * h - a * c),
      (this.y = n + o * c + a * l - r * h),
      (this.z = i + o * h + r * c - s * l),
      this
    );
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
      t.projectionMatrix
    );
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
      t.matrixWorld
    );
  }
  transformDirection(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[4] * n + r[8] * i),
      (this.y = r[1] * e + r[5] * n + r[9] * i),
      (this.z = r[2] * e + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      this
    );
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x,
      i = t.y,
      r = t.z,
      s = e.x,
      a = e.y,
      o = e.z;
    return (
      (this.x = i * o - r * a),
      (this.y = r * s - n * o),
      (this.z = n * a - i * s),
      this
    );
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (0 === e) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Ii.copy(this).projectOnVector(t), this.sub(Ii);
  }
  reflect(t) {
    return this.sub(Ii.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (0 === e) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(jn(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y,
      i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return (
      Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    );
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(e) * t),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return (
      (this.x = t * Math.sin(e)), (this.y = n), (this.z = t * Math.cos(e)), this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(),
      n = this.setFromMatrixColumn(t, 1).length(),
      i = this.setFromMatrixColumn(t, 2).length();
    return (this.x = e), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, 4 * e);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, 3 * e);
  }
  setFromEuler(t) {
    return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
  }
  setFromColor(t) {
    return (this.x = t.r), (this.y = t.g), (this.z = t.b), this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2,
      e = 2 * Math.random() - 1,
      n = Math.sqrt(1 - e * e);
    return (
      (this.x = n * Math.cos(t)), (this.y = e), (this.z = n * Math.sin(t)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ii = new Pi(),
  Li = new Ci();
class Ui {
  constructor(
    t = new Pi(1 / 0, 1 / 0, 1 / 0),
    e = new Pi(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = t), (this.max = e);
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(Di.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(Di.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Di.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(t) {
    return this.isEmpty()
      ? t.set(0, 0, 0)
      : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (void 0 !== n) {
      const i = n.getAttribute("position");
      if (!0 === e && void 0 !== i && !0 !== t.isInstancedMesh)
        for (let e = 0, n = i.count; e < n; e++)
          !0 === t.isMesh
            ? t.getVertexPosition(e, Di)
            : Di.fromBufferAttribute(i, e),
            Di.applyMatrix4(t.matrixWorld),
            this.expandByPoint(Di);
      else
        void 0 !== t.boundingBox
          ? (null === t.boundingBox && t.computeBoundingBox(),
            Oi.copy(t.boundingBox))
          : (null === n.boundingBox && n.computeBoundingBox(),
            Oi.copy(n.boundingBox)),
          Oi.applyMatrix4(t.matrixWorld),
          this.union(Oi);
    }
    const i = t.children;
    for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e);
    return this;
  }
  containsPoint(t) {
    return !(
      t.x < this.min.x ||
      t.x > this.max.x ||
      t.y < this.min.y ||
      t.y > this.max.y ||
      t.z < this.min.z ||
      t.z > this.max.z
    );
  }
  containsBox(t) {
    return (
      this.min.x <= t.min.x &&
      t.max.x <= this.max.x &&
      this.min.y <= t.min.y &&
      t.max.y <= this.max.y &&
      this.min.z <= t.min.z &&
      t.max.z <= this.max.z
    );
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return !(
      t.max.x < this.min.x ||
      t.min.x > this.max.x ||
      t.max.y < this.min.y ||
      t.min.y > this.max.y ||
      t.max.z < this.min.z ||
      t.min.z > this.max.z
    );
  }
  intersectsSphere(t) {
    return (
      this.clampPoint(t.center, Di),
      Di.distanceToSquared(t.center) <= t.radius * t.radius
    );
  }
  intersectsPlane(t) {
    let e, n;
    return (
      t.normal.x > 0
        ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
        : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
      t.normal.y > 0
        ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
        : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
      t.normal.z > 0
        ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
        : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
      e <= -t.constant && n >= -t.constant
    );
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return !1;
    this.getCenter(Gi),
      Wi.subVectors(this.max, Gi),
      Fi.subVectors(t.a, Gi),
      Bi.subVectors(t.b, Gi),
      zi.subVectors(t.c, Gi),
      ki.subVectors(Bi, Fi),
      Vi.subVectors(zi, Bi),
      Hi.subVectors(Fi, zi);
    let e = [
      0,
      -ki.z,
      ki.y,
      0,
      -Vi.z,
      Vi.y,
      0,
      -Hi.z,
      Hi.y,
      ki.z,
      0,
      -ki.x,
      Vi.z,
      0,
      -Vi.x,
      Hi.z,
      0,
      -Hi.x,
      -ki.y,
      ki.x,
      0,
      -Vi.y,
      Vi.x,
      0,
      -Hi.y,
      Hi.x,
      0,
    ];
    return (
      !!qi(e, Fi, Bi, zi, Wi) &&
      ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      !!qi(e, Fi, Bi, zi, Wi) &&
        (Xi.crossVectors(ki, Vi),
        (e = [Xi.x, Xi.y, Xi.z]),
        qi(e, Fi, Bi, zi, Wi)))
    );
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Di).distanceTo(t);
  }
  getBoundingSphere(t) {
    return (
      this.isEmpty()
        ? t.makeEmpty()
        : (this.getCenter(t.center),
          (t.radius = 0.5 * this.getSize(Di).length())),
      t
    );
  }
  intersect(t) {
    return (
      this.min.max(t.min),
      this.max.min(t.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return (
      this.isEmpty() ||
        (Ni[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        Ni[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        Ni[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        Ni[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        Ni[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        Ni[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        Ni[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        Ni[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(Ni)),
      this
    );
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Ni = [
    new Pi(),
    new Pi(),
    new Pi(),
    new Pi(),
    new Pi(),
    new Pi(),
    new Pi(),
    new Pi(),
  ],
  Di = new Pi(),
  Oi = new Ui(),
  Fi = new Pi(),
  Bi = new Pi(),
  zi = new Pi(),
  ki = new Pi(),
  Vi = new Pi(),
  Hi = new Pi(),
  Gi = new Pi(),
  Wi = new Pi(),
  Xi = new Pi(),
  ji = new Pi();
function qi(t, e, n, i, r) {
  for (let s = 0, a = t.length - 3; s <= a; s += 3) {
    ji.fromArray(t, s);
    const a =
        r.x * Math.abs(ji.x) + r.y * Math.abs(ji.y) + r.z * Math.abs(ji.z),
      o = e.dot(ji),
      l = n.dot(ji),
      c = i.dot(ji);
    if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
  }
  return !0;
}
const Yi = new Ui(),
  Zi = new Pi(),
  Ji = new Pi();
class Ki {
  constructor(t = new Pi(), e = -1) {
    (this.isSphere = !0), (this.center = t), (this.radius = e);
  }
  set(t, e) {
    return this.center.copy(t), (this.radius = e), this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    void 0 !== e ? n.copy(e) : Yi.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let e = 0, r = t.length; e < r; e++)
      i = Math.max(i, n.distanceToSquared(t[e]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(t) {
    return this.center.copy(t.center), (this.radius = t.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return (
      e.copy(t),
      n > this.radius * this.radius &&
        (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
      e
    );
  }
  getBoundingBox(t) {
    return this.isEmpty()
      ? (t.makeEmpty(), t)
      : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return (
      this.center.applyMatrix4(t),
      (this.radius = this.radius * t.getMaxScaleOnAxis()),
      this
    );
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), (this.radius = 0), this;
    Zi.subVectors(t, this.center);
    const e = Zi.lengthSq();
    if (e > this.radius * this.radius) {
      const t = Math.sqrt(e),
        n = 0.5 * (t - this.radius);
      this.center.addScaledVector(Zi, n / t), (this.radius += n);
    }
    return this;
  }
  union(t) {
    return t.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(t), this)
      : (!0 === this.center.equals(t.center)
          ? (this.radius = Math.max(this.radius, t.radius))
          : (Ji.subVectors(t.center, this.center).setLength(t.radius),
            this.expandByPoint(Zi.copy(t.center).add(Ji)),
            this.expandByPoint(Zi.copy(t.center).sub(Ji))),
        this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const $i = new Pi(),
  Qi = new Pi(),
  tr = new Pi(),
  er = new Pi(),
  nr = new Pi(),
  ir = new Pi(),
  rr = new Pi();
class sr {
  constructor(t = new Pi(), e = new Pi(0, 0, -1)) {
    (this.origin = t), (this.direction = e);
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, $i)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0
      ? e.copy(this.origin)
      : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = $i.subVectors(t, this.origin).dot(this.direction);
    return e < 0
      ? this.origin.distanceToSquared(t)
      : ($i.copy(this.origin).addScaledVector(this.direction, e),
        $i.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    Qi.copy(t).add(e).multiplyScalar(0.5),
      tr.copy(e).sub(t).normalize(),
      er.copy(this.origin).sub(Qi);
    const r = 0.5 * t.distanceTo(e),
      s = -this.direction.dot(tr),
      a = er.dot(this.direction),
      o = -er.dot(tr),
      l = er.lengthSq(),
      c = Math.abs(1 - s * s);
    let h, u, d, p;
    if (c > 0)
      if (((h = s * o - a), (u = s * a - o), (p = r * c), h >= 0))
        if (u >= -p)
          if (u <= p) {
            const t = 1 / c;
            (h *= t),
              (u *= t),
              (d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l);
          } else
            (u = r),
              (h = Math.max(0, -(s * u + a))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          (u = -r),
            (h = Math.max(0, -(s * u + a))),
            (d = -h * h + u * (u + 2 * o) + l);
      else
        u <= -p
          ? ((h = Math.max(0, -(-s * r + a))),
            (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
            (d = -h * h + u * (u + 2 * o) + l))
          : u <= p
          ? ((h = 0),
            (u = Math.min(Math.max(-r, -o), r)),
            (d = u * (u + 2 * o) + l))
          : ((h = Math.max(0, -(s * r + a))),
            (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
            (d = -h * h + u * (u + 2 * o) + l));
    else
      (u = s > 0 ? -r : r),
        (h = Math.max(0, -(s * u + a))),
        (d = -h * h + u * (u + 2 * o) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, h),
      i && i.copy(Qi).addScaledVector(tr, u),
      d
    );
  }
  intersectSphere(t, e) {
    $i.subVectors(t.center, this.origin);
    const n = $i.dot(this.direction),
      i = $i.dot($i) - n * n,
      r = t.radius * t.radius;
    if (i > r) return null;
    const s = Math.sqrt(r - i),
      a = n - s,
      o = n + s;
    return o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return null === n ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    if (0 === e) return !0;
    return t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, r, s, a, o;
    const l = 1 / this.direction.x,
      c = 1 / this.direction.y,
      h = 1 / this.direction.z,
      u = this.origin;
    return (
      l >= 0
        ? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l))
        : ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
      c >= 0
        ? ((r = (t.min.y - u.y) * c), (s = (t.max.y - u.y) * c))
        : ((r = (t.max.y - u.y) * c), (s = (t.min.y - u.y) * c)),
      n > s || r > i
        ? null
        : ((r > n || isNaN(n)) && (n = r),
          (s < i || isNaN(i)) && (i = s),
          h >= 0
            ? ((a = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h))
            : ((a = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h)),
          n > o || a > i
            ? null
            : ((a > n || n != n) && (n = a),
              (o < i || i != i) && (i = o),
              i < 0 ? null : this.at(n >= 0 ? n : i, e)))
    );
  }
  intersectsBox(t) {
    return null !== this.intersectBox(t, $i);
  }
  intersectTriangle(t, e, n, i, r) {
    nr.subVectors(e, t), ir.subVectors(n, t), rr.crossVectors(nr, ir);
    let s,
      a = this.direction.dot(rr);
    if (a > 0) {
      if (i) return null;
      s = 1;
    } else {
      if (!(a < 0)) return null;
      (s = -1), (a = -a);
    }
    er.subVectors(this.origin, t);
    const o = s * this.direction.dot(ir.crossVectors(er, ir));
    if (o < 0) return null;
    const l = s * this.direction.dot(nr.cross(er));
    if (l < 0) return null;
    if (o + l > a) return null;
    const c = -s * er.dot(rr);
    return c < 0 ? null : this.at(c / a, r);
  }
  applyMatrix4(t) {
    return (
      this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    );
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ar {
  constructor(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
    (ar.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      void 0 !== t && this.set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f);
  }
  set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
    const g = this.elements;
    return (
      (g[0] = t),
      (g[4] = e),
      (g[8] = n),
      (g[12] = i),
      (g[1] = r),
      (g[5] = s),
      (g[9] = a),
      (g[13] = o),
      (g[2] = l),
      (g[6] = c),
      (g[10] = h),
      (g[14] = u),
      (g[3] = d),
      (g[7] = p),
      (g[11] = m),
      (g[15] = f),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ar().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      (e[9] = n[9]),
      (e[10] = n[10]),
      (e[11] = n[11]),
      (e[12] = n[12]),
      (e[13] = n[13]),
      (e[14] = n[14]),
      (e[15] = n[15]),
      this
    );
  }
  copyPosition(t) {
    const e = this.elements,
      n = t.elements;
    return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return (
      this.set(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrixColumn(this, 0),
      e.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(t, e, n) {
    return (
      this.set(
        t.x,
        e.x,
        n.x,
        0,
        t.y,
        e.y,
        n.y,
        0,
        t.z,
        e.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(t) {
    const e = this.elements,
      n = t.elements,
      i = 1 / or.setFromMatrixColumn(t, 0).length(),
      r = 1 / or.setFromMatrixColumn(t, 1).length(),
      s = 1 / or.setFromMatrixColumn(t, 2).length();
    return (
      (e[0] = n[0] * i),
      (e[1] = n[1] * i),
      (e[2] = n[2] * i),
      (e[3] = 0),
      (e[4] = n[4] * r),
      (e[5] = n[5] * r),
      (e[6] = n[6] * r),
      (e[7] = 0),
      (e[8] = n[8] * s),
      (e[9] = n[9] * s),
      (e[10] = n[10] * s),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromEuler(t) {
    const e = this.elements,
      n = t.x,
      i = t.y,
      r = t.z,
      s = Math.cos(n),
      a = Math.sin(n),
      o = Math.cos(i),
      l = Math.sin(i),
      c = Math.cos(r),
      h = Math.sin(r);
    if ("XYZ" === t.order) {
      const t = s * c,
        n = s * h,
        i = a * c,
        r = a * h;
      (e[0] = o * c),
        (e[4] = -o * h),
        (e[8] = l),
        (e[1] = n + i * l),
        (e[5] = t - r * l),
        (e[9] = -a * o),
        (e[2] = r - t * l),
        (e[6] = i + n * l),
        (e[10] = s * o);
    } else if ("YXZ" === t.order) {
      const t = o * c,
        n = o * h,
        i = l * c,
        r = l * h;
      (e[0] = t + r * a),
        (e[4] = i * a - n),
        (e[8] = s * l),
        (e[1] = s * h),
        (e[5] = s * c),
        (e[9] = -a),
        (e[2] = n * a - i),
        (e[6] = r + t * a),
        (e[10] = s * o);
    } else if ("ZXY" === t.order) {
      const t = o * c,
        n = o * h,
        i = l * c,
        r = l * h;
      (e[0] = t - r * a),
        (e[4] = -s * h),
        (e[8] = i + n * a),
        (e[1] = n + i * a),
        (e[5] = s * c),
        (e[9] = r - t * a),
        (e[2] = -s * l),
        (e[6] = a),
        (e[10] = s * o);
    } else if ("ZYX" === t.order) {
      const t = s * c,
        n = s * h,
        i = a * c,
        r = a * h;
      (e[0] = o * c),
        (e[4] = i * l - n),
        (e[8] = t * l + r),
        (e[1] = o * h),
        (e[5] = r * l + t),
        (e[9] = n * l - i),
        (e[2] = -l),
        (e[6] = a * o),
        (e[10] = s * o);
    } else if ("YZX" === t.order) {
      const t = s * o,
        n = s * l,
        i = a * o,
        r = a * l;
      (e[0] = o * c),
        (e[4] = r - t * h),
        (e[8] = i * h + n),
        (e[1] = h),
        (e[5] = s * c),
        (e[9] = -a * c),
        (e[2] = -l * c),
        (e[6] = n * h + i),
        (e[10] = t - r * h);
    } else if ("XZY" === t.order) {
      const t = s * o,
        n = s * l,
        i = a * o,
        r = a * l;
      (e[0] = o * c),
        (e[4] = -h),
        (e[8] = l * c),
        (e[1] = t * h + r),
        (e[5] = s * c),
        (e[9] = n * h - i),
        (e[2] = i * h - n),
        (e[6] = a * c),
        (e[10] = r * h + t);
    }
    return (
      (e[3] = 0),
      (e[7] = 0),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(t) {
    return this.compose(cr, t, hr);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return (
      pr.subVectors(t, e),
      0 === pr.lengthSq() && (pr.z = 1),
      pr.normalize(),
      ur.crossVectors(n, pr),
      0 === ur.lengthSq() &&
        (1 === Math.abs(n.z) ? (pr.x += 1e-4) : (pr.z += 1e-4),
        pr.normalize(),
        ur.crossVectors(n, pr)),
      ur.normalize(),
      dr.crossVectors(pr, ur),
      (i[0] = ur.x),
      (i[4] = dr.x),
      (i[8] = pr.x),
      (i[1] = ur.y),
      (i[5] = dr.y),
      (i[9] = pr.y),
      (i[2] = ur.z),
      (i[6] = dr.z),
      (i[10] = pr.z),
      this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      i = e.elements,
      r = this.elements,
      s = n[0],
      a = n[4],
      o = n[8],
      l = n[12],
      c = n[1],
      h = n[5],
      u = n[9],
      d = n[13],
      p = n[2],
      m = n[6],
      f = n[10],
      g = n[14],
      v = n[3],
      _ = n[7],
      x = n[11],
      y = n[15],
      M = i[0],
      S = i[4],
      b = i[8],
      w = i[12],
      T = i[1],
      E = i[5],
      A = i[9],
      R = i[13],
      C = i[2],
      P = i[6],
      I = i[10],
      L = i[14],
      U = i[3],
      N = i[7],
      D = i[11],
      O = i[15];
    return (
      (r[0] = s * M + a * T + o * C + l * U),
      (r[4] = s * S + a * E + o * P + l * N),
      (r[8] = s * b + a * A + o * I + l * D),
      (r[12] = s * w + a * R + o * L + l * O),
      (r[1] = c * M + h * T + u * C + d * U),
      (r[5] = c * S + h * E + u * P + d * N),
      (r[9] = c * b + h * A + u * I + d * D),
      (r[13] = c * w + h * R + u * L + d * O),
      (r[2] = p * M + m * T + f * C + g * U),
      (r[6] = p * S + m * E + f * P + g * N),
      (r[10] = p * b + m * A + f * I + g * D),
      (r[14] = p * w + m * R + f * L + g * O),
      (r[3] = v * M + _ * T + x * C + y * U),
      (r[7] = v * S + _ * E + x * P + y * N),
      (r[11] = v * b + _ * A + x * I + y * D),
      (r[15] = v * w + _ * R + x * L + y * O),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[4] *= t),
      (e[8] *= t),
      (e[12] *= t),
      (e[1] *= t),
      (e[5] *= t),
      (e[9] *= t),
      (e[13] *= t),
      (e[2] *= t),
      (e[6] *= t),
      (e[10] *= t),
      (e[14] *= t),
      (e[3] *= t),
      (e[7] *= t),
      (e[11] *= t),
      (e[15] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[4],
      i = t[8],
      r = t[12],
      s = t[1],
      a = t[5],
      o = t[9],
      l = t[13],
      c = t[2],
      h = t[6],
      u = t[10],
      d = t[14];
    return (
      t[3] *
        (+r * o * h -
          i * l * h -
          r * a * u +
          n * l * u +
          i * a * d -
          n * o * d) +
      t[7] *
        (+e * o * d -
          e * l * u +
          r * s * u -
          i * s * d +
          i * l * c -
          r * o * c) +
      t[11] *
        (+e * l * h -
          e * a * d -
          r * s * h +
          n * s * d +
          r * a * c -
          n * l * c) +
      t[15] *
        (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c)
    );
  }
  transpose() {
    const t = this.elements;
    let e;
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    );
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return (
      t.isVector3
        ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
        : ((i[12] = t), (i[13] = e), (i[14] = n)),
      this
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      s = t[4],
      a = t[5],
      o = t[6],
      l = t[7],
      c = t[8],
      h = t[9],
      u = t[10],
      d = t[11],
      p = t[12],
      m = t[13],
      f = t[14],
      g = t[15],
      v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g,
      _ = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g,
      x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g,
      y = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f,
      M = e * v + n * _ + i * x + r * y;
    if (0 === M)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / M;
    return (
      (t[0] = v * S),
      (t[1] =
        (m * u * r -
          h * f * r -
          m * i * d +
          n * f * d +
          h * i * g -
          n * u * g) *
        S),
      (t[2] =
        (a * f * r -
          m * o * r +
          m * i * l -
          n * f * l -
          a * i * g +
          n * o * g) *
        S),
      (t[3] =
        (h * o * r -
          a * u * r -
          h * i * l +
          n * u * l +
          a * i * d -
          n * o * d) *
        S),
      (t[4] = _ * S),
      (t[5] =
        (c * f * r -
          p * u * r +
          p * i * d -
          e * f * d -
          c * i * g +
          e * u * g) *
        S),
      (t[6] =
        (p * o * r -
          s * f * r -
          p * i * l +
          e * f * l +
          s * i * g -
          e * o * g) *
        S),
      (t[7] =
        (s * u * r -
          c * o * r +
          c * i * l -
          e * u * l -
          s * i * d +
          e * o * d) *
        S),
      (t[8] = x * S),
      (t[9] =
        (p * h * r -
          c * m * r -
          p * n * d +
          e * m * d +
          c * n * g -
          e * h * g) *
        S),
      (t[10] =
        (s * m * r -
          p * a * r +
          p * n * l -
          e * m * l -
          s * n * g +
          e * a * g) *
        S),
      (t[11] =
        (c * a * r -
          s * h * r -
          c * n * l +
          e * h * l +
          s * n * d -
          e * a * d) *
        S),
      (t[12] = y * S),
      (t[13] =
        (c * m * i -
          p * h * i +
          p * n * u -
          e * m * u -
          c * n * f +
          e * h * f) *
        S),
      (t[14] =
        (p * a * i -
          s * m * i -
          p * n * o +
          e * m * o +
          s * n * f -
          e * a * f) *
        S),
      (t[15] =
        (s * h * i -
          c * a * i +
          c * n * o -
          e * h * o -
          s * n * u +
          e * a * u) *
        S),
      this
    );
  }
  scale(t) {
    const e = this.elements,
      n = t.x,
      i = t.y,
      r = t.z;
    return (
      (e[0] *= n),
      (e[4] *= i),
      (e[8] *= r),
      (e[1] *= n),
      (e[5] *= i),
      (e[9] *= r),
      (e[2] *= n),
      (e[6] *= i),
      (e[10] *= r),
      (e[3] *= n),
      (e[7] *= i),
      (e[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const t = this.elements,
      e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
      n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
      i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return (
      t.isVector3
        ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e),
      i = Math.sin(e),
      r = 1 - n,
      s = t.x,
      a = t.y,
      o = t.z,
      l = r * s,
      c = r * a;
    return (
      this.set(
        l * s + n,
        l * a - i * o,
        l * o + i * a,
        0,
        l * a + i * o,
        c * a + n,
        c * o - i * s,
        0,
        l * o - i * a,
        c * o + i * s,
        r * o * o + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, i, r, s) {
    return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const i = this.elements,
      r = e._x,
      s = e._y,
      a = e._z,
      o = e._w,
      l = r + r,
      c = s + s,
      h = a + a,
      u = r * l,
      d = r * c,
      p = r * h,
      m = s * c,
      f = s * h,
      g = a * h,
      v = o * l,
      _ = o * c,
      x = o * h,
      y = n.x,
      M = n.y,
      S = n.z;
    return (
      (i[0] = (1 - (m + g)) * y),
      (i[1] = (d + x) * y),
      (i[2] = (p - _) * y),
      (i[3] = 0),
      (i[4] = (d - x) * M),
      (i[5] = (1 - (u + g)) * M),
      (i[6] = (f + v) * M),
      (i[7] = 0),
      (i[8] = (p + _) * S),
      (i[9] = (f - v) * S),
      (i[10] = (1 - (u + m)) * S),
      (i[11] = 0),
      (i[12] = t.x),
      (i[13] = t.y),
      (i[14] = t.z),
      (i[15] = 1),
      this
    );
  }
  decompose(t, e, n) {
    const i = this.elements;
    let r = or.set(i[0], i[1], i[2]).length();
    const s = or.set(i[4], i[5], i[6]).length(),
      a = or.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (t.x = i[12]),
      (t.y = i[13]),
      (t.z = i[14]),
      lr.copy(this);
    const o = 1 / r,
      l = 1 / s,
      c = 1 / a;
    return (
      (lr.elements[0] *= o),
      (lr.elements[1] *= o),
      (lr.elements[2] *= o),
      (lr.elements[4] *= l),
      (lr.elements[5] *= l),
      (lr.elements[6] *= l),
      (lr.elements[8] *= c),
      (lr.elements[9] *= c),
      (lr.elements[10] *= c),
      e.setFromRotationMatrix(lr),
      (n.x = r),
      (n.y = s),
      (n.z = a),
      this
    );
  }
  makePerspective(t, e, n, i, r, s, a = 2e3) {
    const o = this.elements,
      l = (2 * r) / (e - t),
      c = (2 * r) / (n - i),
      h = (e + t) / (e - t),
      u = (n + i) / (n - i);
    let d, p;
    if (a === Bn) (d = -(s + r) / (s - r)), (p = (-2 * s * r) / (s - r));
    else {
      if (a !== zn)
        throw new Error(
          "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a
        );
      (d = -s / (s - r)), (p = (-s * r) / (s - r));
    }
    return (
      (o[0] = l),
      (o[4] = 0),
      (o[8] = h),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = c),
      (o[9] = u),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = d),
      (o[14] = p),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(t, e, n, i, r, s, a = 2e3) {
    const o = this.elements,
      l = 1 / (e - t),
      c = 1 / (n - i),
      h = 1 / (s - r),
      u = (e + t) * l,
      d = (n + i) * c;
    let p, m;
    if (a === Bn) (p = (s + r) * h), (m = -2 * h);
    else {
      if (a !== zn)
        throw new Error(
          "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a
        );
      (p = r * h), (m = -1 * h);
    }
    return (
      (o[0] = 2 * l),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -u),
      (o[1] = 0),
      (o[5] = 2 * c),
      (o[9] = 0),
      (o[13] = -d),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = m),
      (o[14] = -p),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(t) {
    const e = this.elements,
      n = t.elements;
    for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      (t[e + 9] = n[9]),
      (t[e + 10] = n[10]),
      (t[e + 11] = n[11]),
      (t[e + 12] = n[12]),
      (t[e + 13] = n[13]),
      (t[e + 14] = n[14]),
      (t[e + 15] = n[15]),
      t
    );
  }
}
const or = new Pi(),
  lr = new ar(),
  cr = new Pi(0, 0, 0),
  hr = new Pi(1, 1, 1),
  ur = new Pi(),
  dr = new Pi(),
  pr = new Pi(),
  mr = new ar(),
  fr = new Ci();
class gr {
  constructor(t = 0, e = 0, n = 0, i = gr.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(t) {
    (this._x = t), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    (this._y = t), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    (this._z = t), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    (this._order = t), this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return (
      (this._x = t._x),
      (this._y = t._y),
      (this._z = t._z),
      (this._order = t._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const i = t.elements,
      r = i[0],
      s = i[4],
      a = i[8],
      o = i[1],
      l = i[5],
      c = i[9],
      h = i[2],
      u = i[6],
      d = i[10];
    switch (e) {
      case "XYZ":
        (this._y = Math.asin(jn(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-s, r)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-jn(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._y = Math.atan2(a, d)), (this._z = Math.atan2(o, l)))
            : ((this._y = Math.atan2(-h, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(jn(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-s, l)))
            : ((this._y = 0), (this._z = Math.atan2(o, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-jn(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
            : ((this._x = 0), (this._z = Math.atan2(-s, l)));
        break;
      case "YZX":
        (this._z = Math.asin(jn(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
            : ((this._x = 0), (this._y = Math.atan2(a, d)));
        break;
      case "XZY":
        (this._z = Math.asin(-jn(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(a, r)))
            : ((this._x = Math.atan2(-c, d)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            e
        );
    }
    return (this._order = e), !0 === n && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return (
      mr.makeRotationFromQuaternion(t), this.setFromRotationMatrix(mr, e, n)
    );
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return fr.setFromEuler(this), this.setFromQuaternion(fr, t);
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._order === this._order
    );
  }
  fromArray(t) {
    return (
      (this._x = t[0]),
      (this._y = t[1]),
      (this._z = t[2]),
      void 0 !== t[3] && (this._order = t[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._order),
      t
    );
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
gr.DEFAULT_ORDER = "XYZ";
class vr {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = ((1 << t) | 0) >>> 0;
  }
  enable(t) {
    this.mask |= (1 << t) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= (1 << t) | 0;
  }
  disable(t) {
    this.mask &= ~((1 << t) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return 0 != (this.mask & t.mask);
  }
  isEnabled(t) {
    return 0 != (this.mask & ((1 << t) | 0));
  }
}
let _r = 0;
const xr = new Pi(),
  yr = new Ci(),
  Mr = new ar(),
  Sr = new Pi(),
  br = new Pi(),
  wr = new Pi(),
  Tr = new Ci(),
  Er = new Pi(1, 0, 0),
  Ar = new Pi(0, 1, 0),
  Rr = new Pi(0, 0, 1),
  Cr = { type: "added" },
  Pr = { type: "removed" },
  Ir = { type: "childadded", child: null },
  Lr = { type: "childremoved", child: null };
class Ur extends kn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: _r++ }),
      (this.uuid = Xn()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Ur.DEFAULT_UP.clone());
    const t = new Pi(),
      e = new gr(),
      n = new Ci(),
      i = new Pi(1, 1, 1);
    e._onChange(function () {
      n.setFromEuler(e, !1);
    }),
      n._onChange(function () {
        e.setFromQuaternion(n, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: t },
        rotation: { configurable: !0, enumerable: !0, value: e },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new ar() },
        normalMatrix: { value: new Qn() },
      }),
      (this.matrix = new ar()),
      (this.matrixWorld = new ar()),
      (this.matrixAutoUpdate = Ur.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new vr()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(t),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return yr.setFromAxisAngle(t, e), this.quaternion.multiply(yr), this;
  }
  rotateOnWorldAxis(t, e) {
    return yr.setFromAxisAngle(t, e), this.quaternion.premultiply(yr), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Er, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Ar, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Rr, t);
  }
  translateOnAxis(t, e) {
    return (
      xr.copy(t).applyQuaternion(this.quaternion),
      this.position.add(xr.multiplyScalar(e)),
      this
    );
  }
  translateX(t) {
    return this.translateOnAxis(Er, t);
  }
  translateY(t) {
    return this.translateOnAxis(Ar, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Rr, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.applyMatrix4(Mr.copy(this.matrixWorld).invert())
    );
  }
  lookAt(t, e, n) {
    t.isVector3 ? Sr.copy(t) : Sr.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      br.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Mr.lookAt(br, Sr, this.up)
        : Mr.lookAt(Sr, br, this.up),
      this.quaternion.setFromRotationMatrix(Mr),
      i &&
        (Mr.extractRotation(i.matrixWorld),
        yr.setFromRotationMatrix(Mr),
        this.quaternion.premultiply(yr.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return t === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          t
        ),
        this)
      : (t && t.isObject3D
          ? (t.removeFromParent(),
            (t.parent = this),
            this.children.push(t),
            t.dispatchEvent(Cr),
            (Ir.child = t),
            this.dispatchEvent(Ir),
            (Ir.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              t
            ),
        this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
      return this;
    }
    const e = this.children.indexOf(t);
    return (
      -1 !== e &&
        ((t.parent = null),
        this.children.splice(e, 1),
        t.dispatchEvent(Pr),
        (Lr.child = t),
        this.dispatchEvent(Lr),
        (Lr.child = null)),
      this
    );
  }
  removeFromParent() {
    const t = this.parent;
    return null !== t && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      Mr.copy(this.matrixWorld).invert(),
      null !== t.parent &&
        (t.parent.updateWorldMatrix(!0, !1), Mr.multiply(t.parent.matrixWorld)),
      t.applyMatrix4(Mr),
      t.removeFromParent(),
      (t.parent = this),
      this.children.push(t),
      t.updateWorldMatrix(!1, !0),
      t.dispatchEvent(Cr),
      (Ir.child = t),
      this.dispatchEvent(Ir),
      (Ir.child = null),
      this
    );
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const i = this.children[n].getObjectByProperty(t, e);
      if (void 0 !== i) return i;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const i = this.children;
    for (let r = 0, s = i.length; r < s; r++)
      i[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return (
      this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(br, t, wr), t
    );
  }
  getWorldScale(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(br, Tr, t), t
    );
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {}
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (!1 === this.visible) return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    null !== e && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || t) &&
        (!0 === this.matrixWorldAutoUpdate &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (t = !0));
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) {
      e[n].updateMatrixWorld(t);
    }
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (
      (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      !0 === this.matrixWorldAutoUpdate &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      !0 === e)
    ) {
      const t = this.children;
      for (let e = 0, n = t.length; e < n; e++) {
        t[e].updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t,
      n = {};
    e &&
      ((t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    function r(e, n) {
      return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
    }
    if (
      ((i.uuid = this.uuid),
      (i.type = this.type),
      "" !== this.name && (i.name = this.name),
      !0 === this.castShadow && (i.castShadow = !0),
      !0 === this.receiveShadow && (i.receiveShadow = !0),
      !1 === this.visible && (i.visible = !1),
      !1 === this.frustumCulled && (i.frustumCulled = !1),
      0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = "BatchedMesh"),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.visibility = this._visibility),
        (i.active = this._active),
        (i.bounds = this._bounds.map((t) => ({
          boxInitialized: t.boxInitialized,
          boxMin: t.box.min.toArray(),
          boxMax: t.box.max.toArray(),
          sphereInitialized: t.sphereInitialized,
          sphereRadius: t.sphere.radius,
          sphereCenter: t.sphere.center.toArray(),
        }))),
        (i.maxInstanceCount = this._maxInstanceCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.geometryCount = this._geometryCount),
        (i.matricesTexture = this._matricesTexture.toJSON(t)),
        null !== this._colorsTexture &&
          (i.colorsTexture = this._colorsTexture.toJSON(t)),
        null !== this.boundingSphere &&
          (i.boundingSphere = {
            center: i.boundingSphere.center.toArray(),
            radius: i.boundingSphere.radius,
          }),
        null !== this.boundingBox &&
          (i.boundingBox = {
            min: i.boundingBox.min.toArray(),
            max: i.boundingBox.max.toArray(),
          })),
      this.isScene)
    )
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(t).uuid)),
        this.environment &&
          this.environment.isTexture &&
          !0 !== this.environment.isRenderTargetTexture &&
          (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(t.geometries, this.geometry);
      const e = this.geometry.parameters;
      if (void 0 !== e && void 0 !== e.shapes) {
        const n = e.shapes;
        if (Array.isArray(n))
          for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            r(t.shapes, i);
          }
        else r(t.shapes, n);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    )
      if (Array.isArray(this.material)) {
        const e = [];
        for (let n = 0, i = this.material.length; n < i; n++)
          e.push(r(t.materials, this.material[n]));
        i.material = e;
      } else i.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let e = 0; e < this.children.length; e++)
        i.children.push(this.children[e].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let e = 0; e < this.animations.length; e++) {
        const n = this.animations[e];
        i.animations.push(r(t.animations, n));
      }
    }
    if (e) {
      const e = s(t.geometries),
        i = s(t.materials),
        r = s(t.textures),
        a = s(t.images),
        o = s(t.shapes),
        l = s(t.skeletons),
        c = s(t.animations),
        h = s(t.nodes);
      e.length > 0 && (n.geometries = e),
        i.length > 0 && (n.materials = i),
        r.length > 0 && (n.textures = r),
        a.length > 0 && (n.images = a),
        o.length > 0 && (n.shapes = o),
        l.length > 0 && (n.skeletons = l),
        c.length > 0 && (n.animations = c),
        h.length > 0 && (n.nodes = h);
    }
    return (n.object = i), n;
    function s(t) {
      const e = [];
      for (const n in t) {
        const i = t[n];
        delete i.metadata, e.push(i);
      }
      return e;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (
      ((this.name = t.name),
      this.up.copy(t.up),
      this.position.copy(t.position),
      (this.rotation.order = t.rotation.order),
      this.quaternion.copy(t.quaternion),
      this.scale.copy(t.scale),
      this.matrix.copy(t.matrix),
      this.matrixWorld.copy(t.matrixWorld),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
      (this.layers.mask = t.layers.mask),
      (this.visible = t.visible),
      (this.castShadow = t.castShadow),
      (this.receiveShadow = t.receiveShadow),
      (this.frustumCulled = t.frustumCulled),
      (this.renderOrder = t.renderOrder),
      (this.animations = t.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      !0 === e)
    )
      for (let e = 0; e < t.children.length; e++) {
        const n = t.children[e];
        this.add(n.clone());
      }
    return this;
  }
}
(Ur.DEFAULT_UP = new Pi(0, 1, 0)),
  (Ur.DEFAULT_MATRIX_AUTO_UPDATE = !0),
  (Ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
const Nr = new Pi(),
  Dr = new Pi(),
  Or = new Pi(),
  Fr = new Pi(),
  Br = new Pi(),
  zr = new Pi(),
  kr = new Pi(),
  Vr = new Pi(),
  Hr = new Pi(),
  Gr = new Pi();
class Wr {
  constructor(t = new Pi(), e = new Pi(), n = new Pi()) {
    (this.a = t), (this.b = e), (this.c = n);
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), Nr.subVectors(t, e), i.cross(Nr);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, i, r) {
    Nr.subVectors(i, e), Dr.subVectors(n, e), Or.subVectors(t, e);
    const s = Nr.dot(Nr),
      a = Nr.dot(Dr),
      o = Nr.dot(Or),
      l = Dr.dot(Dr),
      c = Dr.dot(Or),
      h = s * l - a * a;
    if (0 === h) return r.set(0, 0, 0), null;
    const u = 1 / h,
      d = (l * o - a * c) * u,
      p = (s * c - a * o) * u;
    return r.set(1 - d - p, p, d);
  }
  static containsPoint(t, e, n, i) {
    return (
      null !== this.getBarycoord(t, e, n, i, Fr) &&
      Fr.x >= 0 &&
      Fr.y >= 0 &&
      Fr.x + Fr.y <= 1
    );
  }
  static getInterpolation(t, e, n, i, r, s, a, o) {
    return null === this.getBarycoord(t, e, n, i, Fr)
      ? ((o.x = 0),
        (o.y = 0),
        "z" in o && (o.z = 0),
        "w" in o && (o.w = 0),
        null)
      : (o.setScalar(0),
        o.addScaledVector(r, Fr.x),
        o.addScaledVector(s, Fr.y),
        o.addScaledVector(a, Fr.z),
        o);
  }
  static isFrontFacing(t, e, n, i) {
    return Nr.subVectors(n, e), Dr.subVectors(t, e), Nr.cross(Dr).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return (
      this.a.fromBufferAttribute(t, e),
      this.b.fromBufferAttribute(t, n),
      this.c.fromBufferAttribute(t, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return (
      Nr.subVectors(this.c, this.b),
      Dr.subVectors(this.a, this.b),
      0.5 * Nr.cross(Dr).length()
    );
  }
  getMidpoint(t) {
    return t
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Wr.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Wr.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, i, r) {
    return Wr.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
  }
  containsPoint(t) {
    return Wr.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Wr.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let s, a;
    Br.subVectors(i, n), zr.subVectors(r, n), Vr.subVectors(t, n);
    const o = Br.dot(Vr),
      l = zr.dot(Vr);
    if (o <= 0 && l <= 0) return e.copy(n);
    Hr.subVectors(t, i);
    const c = Br.dot(Hr),
      h = zr.dot(Hr);
    if (c >= 0 && h <= c) return e.copy(i);
    const u = o * h - c * l;
    if (u <= 0 && o >= 0 && c <= 0)
      return (s = o / (o - c)), e.copy(n).addScaledVector(Br, s);
    Gr.subVectors(t, r);
    const d = Br.dot(Gr),
      p = zr.dot(Gr);
    if (p >= 0 && d <= p) return e.copy(r);
    const m = d * l - o * p;
    if (m <= 0 && l >= 0 && p <= 0)
      return (a = l / (l - p)), e.copy(n).addScaledVector(zr, a);
    const f = c * p - d * h;
    if (f <= 0 && h - c >= 0 && d - p >= 0)
      return (
        kr.subVectors(r, i),
        (a = (h - c) / (h - c + (d - p))),
        e.copy(i).addScaledVector(kr, a)
      );
    const g = 1 / (f + m + u);
    return (
      (s = m * g),
      (a = u * g),
      e.copy(n).addScaledVector(Br, s).addScaledVector(zr, a)
    );
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Xr = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  jr = { h: 0, s: 0, l: 0 },
  qr = { h: 0, s: 0, l: 0 };
function Yr(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + 6 * (e - t) * n
      : n < 0.5
      ? e
      : n < 2 / 3
      ? t + 6 * (e - t) * (2 / 3 - n)
      : t
  );
}
class Zr {
  constructor(t, e, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(t, e, n)
    );
  }
  set(t, e, n) {
    if (void 0 === e && void 0 === n) {
      const e = t;
      e && e.isColor
        ? this.copy(e)
        : "number" == typeof e
        ? this.setHex(e)
        : "string" == typeof e && this.setStyle(e);
    } else this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return (this.r = t), (this.g = t), (this.b = t), this;
  }
  setHex(t, e = Ye) {
    return (
      (t = Math.floor(t)),
      (this.r = ((t >> 16) & 255) / 255),
      (this.g = ((t >> 8) & 255) / 255),
      (this.b = (255 & t) / 255),
      di.toWorkingColorSpace(this, e),
      this
    );
  }
  setRGB(t, e, n, i = di.workingColorSpace) {
    return (
      (this.r = t),
      (this.g = e),
      (this.b = n),
      di.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(t, e, n, i = di.workingColorSpace) {
    if (((t = qn(t, 1)), (e = jn(e, 0, 1)), (n = jn(n, 0, 1)), 0 === e))
      this.r = this.g = this.b = n;
    else {
      const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
        r = 2 * n - i;
      (this.r = Yr(r, i, t + 1 / 3)),
        (this.g = Yr(r, i, t)),
        (this.b = Yr(r, i, t - 1 / 3));
    }
    return di.toWorkingColorSpace(this, i), this;
  }
  setStyle(t, e = Ye) {
    function n(e) {
      void 0 !== e &&
        parseFloat(e) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + t + " will be ignored."
        );
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(t))) {
      let r;
      const s = i[1],
        a = i[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(255, parseInt(r[1], 10)) / 255,
                Math.min(255, parseInt(r[2], 10)) / 255,
                Math.min(255, parseInt(r[3], 10)) / 255,
                e
              )
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(100, parseInt(r[1], 10)) / 100,
                Math.min(100, parseInt(r[2], 10)) / 100,
                Math.min(100, parseInt(r[3], 10)) / 100,
                e
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(r[4]),
              this.setHSL(
                parseFloat(r[1]) / 360,
                parseFloat(r[2]) / 100,
                parseFloat(r[3]) / 100,
                e
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
      const n = i[1],
        r = n.length;
      if (3 === r)
        return this.setRGB(
          parseInt(n.charAt(0), 16) / 15,
          parseInt(n.charAt(1), 16) / 15,
          parseInt(n.charAt(2), 16) / 15,
          e
        );
      if (6 === r) return this.setHex(parseInt(n, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Ye) {
    const n = Xr[t.toLowerCase()];
    return (
      void 0 !== n
        ? this.setHex(n, e)
        : console.warn("THREE.Color: Unknown color " + t),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
  }
  copySRGBToLinear(t) {
    return (this.r = pi(t.r)), (this.g = pi(t.g)), (this.b = pi(t.b)), this;
  }
  copyLinearToSRGB(t) {
    return (this.r = mi(t.r)), (this.g = mi(t.g)), (this.b = mi(t.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Ye) {
    return (
      di.fromWorkingColorSpace(Jr.copy(this), t),
      65536 * Math.round(jn(255 * Jr.r, 0, 255)) +
        256 * Math.round(jn(255 * Jr.g, 0, 255)) +
        Math.round(jn(255 * Jr.b, 0, 255))
    );
  }
  getHexString(t = Ye) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = di.workingColorSpace) {
    di.fromWorkingColorSpace(Jr.copy(this), e);
    const n = Jr.r,
      i = Jr.g,
      r = Jr.b,
      s = Math.max(n, i, r),
      a = Math.min(n, i, r);
    let o, l;
    const c = (a + s) / 2;
    if (a === s) (o = 0), (l = 0);
    else {
      const t = s - a;
      switch (((l = c <= 0.5 ? t / (s + a) : t / (2 - s - a)), s)) {
        case n:
          o = (i - r) / t + (i < r ? 6 : 0);
          break;
        case i:
          o = (r - n) / t + 2;
          break;
        case r:
          o = (n - i) / t + 4;
      }
      o /= 6;
    }
    return (t.h = o), (t.s = l), (t.l = c), t;
  }
  getRGB(t, e = di.workingColorSpace) {
    return (
      di.fromWorkingColorSpace(Jr.copy(this), e),
      (t.r = Jr.r),
      (t.g = Jr.g),
      (t.b = Jr.b),
      t
    );
  }
  getStyle(t = Ye) {
    di.fromWorkingColorSpace(Jr.copy(this), t);
    const e = Jr.r,
      n = Jr.g,
      i = Jr.b;
    return t !== Ye
      ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(
          255 * i
        )})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(jr), this.setHSL(jr.h + t, jr.s + e, jr.l + n);
  }
  add(t) {
    return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
  }
  addColors(t, e) {
    return (
      (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
    );
  }
  addScalar(t) {
    return (this.r += t), (this.g += t), (this.b += t), this;
  }
  sub(t) {
    return (
      (this.r = Math.max(0, this.r - t.r)),
      (this.g = Math.max(0, this.g - t.g)),
      (this.b = Math.max(0, this.b - t.b)),
      this
    );
  }
  multiply(t) {
    return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
  }
  multiplyScalar(t) {
    return (this.r *= t), (this.g *= t), (this.b *= t), this;
  }
  lerp(t, e) {
    return (
      (this.r += (t.r - this.r) * e),
      (this.g += (t.g - this.g) * e),
      (this.b += (t.b - this.b) * e),
      this
    );
  }
  lerpColors(t, e, n) {
    return (
      (this.r = t.r + (e.r - t.r) * n),
      (this.g = t.g + (e.g - t.g) * n),
      (this.b = t.b + (e.b - t.b) * n),
      this
    );
  }
  lerpHSL(t, e) {
    this.getHSL(jr), t.getHSL(qr);
    const n = Yn(jr.h, qr.h, e),
      i = Yn(jr.s, qr.s, e),
      r = Yn(jr.l, qr.l, e);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(t) {
    return (this.r = t.x), (this.g = t.y), (this.b = t.z), this;
  }
  applyMatrix3(t) {
    const e = this.r,
      n = this.g,
      i = this.b,
      r = t.elements;
    return (
      (this.r = r[0] * e + r[3] * n + r[6] * i),
      (this.g = r[1] * e + r[4] * n + r[7] * i),
      (this.b = r[2] * e + r[5] * n + r[8] * i),
      this
    );
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
  }
  fromBufferAttribute(t, e) {
    return (
      (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Jr = new Zr();
Zr.NAMES = Xr;
let Kr = 0;
class $r extends kn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Kr++ }),
      (this.uuid = Xn()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = u),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = C),
      (this.blendDst = P),
      (this.blendEquation = y),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Zr(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = rn),
      (this.stencilZFail = rn),
      (this.stencilZPass = rn),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
  }
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (void 0 !== t)
      for (const e in t) {
        const n = t[e];
        if (void 0 === n) {
          console.warn(
            `THREE.Material: parameter '${e}' has value of undefined.`
          );
          continue;
        }
        const i = this[e];
        void 0 !== i
          ? i && i.isColor
            ? i.set(n)
            : i && i.isVector3 && n && n.isVector3
            ? i.copy(n)
            : (this[e] = n)
          : console.warn(
              `THREE.Material: '${e}' is not a property of THREE.${this.type}.`
            );
      }
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t;
    e && (t = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function i(t) {
      const e = [];
      for (const n in t) {
        const i = t[n];
        delete i.metadata, e.push(i);
      }
      return e;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      void 0 !== this.roughness && (n.roughness = this.roughness),
      void 0 !== this.metalness && (n.metalness = this.metalness),
      void 0 !== this.sheen && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      void 0 !== this.sheenRoughness &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      void 0 !== this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      void 0 !== this.specularIntensity &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      void 0 !== this.shininess && (n.shininess = this.shininess),
      void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      void 0 !== this.dispersion && (n.dispersion = this.dispersion),
      void 0 !== this.iridescence && (n.iridescence = this.iridescence),
      void 0 !== this.iridescenceIOR &&
        (n.iridescenceIOR = this.iridescenceIOR),
      void 0 !== this.iridescenceThicknessRange &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(t).uuid),
      void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy),
      void 0 !== this.anisotropyRotation &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(t).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(t).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(t).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(t).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(t).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(t).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(t).uuid),
        void 0 !== this.combine && (n.combine = this.combine)),
      void 0 !== this.envMapRotation &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      void 0 !== this.envMapIntensity &&
        (n.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(t).uuid),
      void 0 !== this.transmission && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
      void 0 !== this.thickness && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
      void 0 !== this.attenuationDistance &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      void 0 !== this.attenuationColor &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      void 0 !== this.size && (n.size = this.size),
      null !== this.shadowSide && (n.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (n.sizeAttenuation = this.sizeAttenuation),
      1 !== this.blending && (n.blending = this.blending),
      this.side !== u && (n.side = this.side),
      !0 === this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      !0 === this.transparent && (n.transparent = !0),
      this.blendSrc !== C && (n.blendSrc = this.blendSrc),
      this.blendDst !== P && (n.blendDst = this.blendDst),
      this.blendEquation !== y && (n.blendEquation = this.blendEquation),
      null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha),
      null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha),
      null !== this.blendEquationAlpha &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha),
      3 !== this.depthFunc && (n.depthFunc = this.depthFunc),
      !1 === this.depthTest && (n.depthTest = this.depthTest),
      !1 === this.depthWrite && (n.depthWrite = this.depthWrite),
      !1 === this.colorWrite && (n.colorWrite = this.colorWrite),
      255 !== this.stencilWriteMask &&
        (n.stencilWriteMask = this.stencilWriteMask),
      519 !== this.stencilFunc && (n.stencilFunc = this.stencilFunc),
      0 !== this.stencilRef && (n.stencilRef = this.stencilRef),
      255 !== this.stencilFuncMask &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== rn && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== rn && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== rn && (n.stencilZPass = this.stencilZPass),
      !0 === this.stencilWrite && (n.stencilWrite = this.stencilWrite),
      void 0 !== this.rotation &&
        0 !== this.rotation &&
        (n.rotation = this.rotation),
      !0 === this.polygonOffset && (n.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      void 0 !== this.linewidth &&
        1 !== this.linewidth &&
        (n.linewidth = this.linewidth),
      void 0 !== this.dashSize && (n.dashSize = this.dashSize),
      void 0 !== this.gapSize && (n.gapSize = this.gapSize),
      void 0 !== this.scale && (n.scale = this.scale),
      !0 === this.dithering && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      !0 === this.alphaHash && (n.alphaHash = !0),
      !0 === this.alphaToCoverage && (n.alphaToCoverage = !0),
      !0 === this.premultipliedAlpha && (n.premultipliedAlpha = !0),
      !0 === this.forceSinglePass && (n.forceSinglePass = !0),
      !0 === this.wireframe && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (n.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.flatShading && (n.flatShading = !0),
      !1 === this.visible && (n.visible = !1),
      !1 === this.toneMapped && (n.toneMapped = !1),
      !1 === this.fog && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      e)
    ) {
      const e = i(t.textures),
        r = i(t.images);
      e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.name = t.name),
      (this.blending = t.blending),
      (this.side = t.side),
      (this.vertexColors = t.vertexColors),
      (this.opacity = t.opacity),
      (this.transparent = t.transparent),
      (this.blendSrc = t.blendSrc),
      (this.blendDst = t.blendDst),
      (this.blendEquation = t.blendEquation),
      (this.blendSrcAlpha = t.blendSrcAlpha),
      (this.blendDstAlpha = t.blendDstAlpha),
      (this.blendEquationAlpha = t.blendEquationAlpha),
      this.blendColor.copy(t.blendColor),
      (this.blendAlpha = t.blendAlpha),
      (this.depthFunc = t.depthFunc),
      (this.depthTest = t.depthTest),
      (this.depthWrite = t.depthWrite),
      (this.stencilWriteMask = t.stencilWriteMask),
      (this.stencilFunc = t.stencilFunc),
      (this.stencilRef = t.stencilRef),
      (this.stencilFuncMask = t.stencilFuncMask),
      (this.stencilFail = t.stencilFail),
      (this.stencilZFail = t.stencilZFail),
      (this.stencilZPass = t.stencilZPass),
      (this.stencilWrite = t.stencilWrite);
    const e = t.clippingPlanes;
    let n = null;
    if (null !== e) {
      const t = e.length;
      n = new Array(t);
      for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = t.clipIntersection),
      (this.clipShadows = t.clipShadows),
      (this.shadowSide = t.shadowSide),
      (this.colorWrite = t.colorWrite),
      (this.precision = t.precision),
      (this.polygonOffset = t.polygonOffset),
      (this.polygonOffsetFactor = t.polygonOffsetFactor),
      (this.polygonOffsetUnits = t.polygonOffsetUnits),
      (this.dithering = t.dithering),
      (this.alphaTest = t.alphaTest),
      (this.alphaHash = t.alphaHash),
      (this.alphaToCoverage = t.alphaToCoverage),
      (this.premultipliedAlpha = t.premultipliedAlpha),
      (this.forceSinglePass = t.forceSinglePass),
      (this.visible = t.visible),
      (this.toneMapped = t.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
  onBeforeRender() {
    console.warn("Material: onBeforeRender() has been removed.");
  }
}
class Qr extends $r {
  constructor(t) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Zr(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new gr()),
      (this.combine = Y),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.fog = t.fog),
      this
    );
  }
}
const ts = es();
function es() {
  const t = new ArrayBuffer(4),
    e = new Float32Array(t),
    n = new Uint32Array(t),
    i = new Uint32Array(512),
    r = new Uint32Array(512);
  for (let t = 0; t < 256; ++t) {
    const e = t - 127;
    e < -27
      ? ((i[t] = 0), (i[256 | t] = 32768), (r[t] = 24), (r[256 | t] = 24))
      : e < -14
      ? ((i[t] = 1024 >> (-e - 14)),
        (i[256 | t] = (1024 >> (-e - 14)) | 32768),
        (r[t] = -e - 1),
        (r[256 | t] = -e - 1))
      : e <= 15
      ? ((i[t] = (e + 15) << 10),
        (i[256 | t] = ((e + 15) << 10) | 32768),
        (r[t] = 13),
        (r[256 | t] = 13))
      : e < 128
      ? ((i[t] = 31744), (i[256 | t] = 64512), (r[t] = 24), (r[256 | t] = 24))
      : ((i[t] = 31744), (i[256 | t] = 64512), (r[t] = 13), (r[256 | t] = 13));
  }
  const s = new Uint32Array(2048),
    a = new Uint32Array(64),
    o = new Uint32Array(64);
  for (let t = 1; t < 1024; ++t) {
    let e = t << 13,
      n = 0;
    for (; 0 == (8388608 & e); ) (e <<= 1), (n -= 8388608);
    (e &= -8388609), (n += 947912704), (s[t] = e | n);
  }
  for (let t = 1024; t < 2048; ++t) s[t] = 939524096 + ((t - 1024) << 13);
  for (let t = 1; t < 31; ++t) a[t] = t << 23;
  (a[31] = 1199570944), (a[32] = 2147483648);
  for (let t = 33; t < 63; ++t) a[t] = 2147483648 + ((t - 32) << 23);
  a[63] = 3347054592;
  for (let t = 1; t < 64; ++t) 32 !== t && (o[t] = 1024);
  return {
    floatView: e,
    uint32View: n,
    baseTable: i,
    shiftTable: r,
    mantissaTable: s,
    exponentTable: a,
    offsetTable: o,
  };
}
function ns(t) {
  Math.abs(t) > 65504 &&
    console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),
    (t = jn(t, -65504, 65504)),
    (ts.floatView[0] = t);
  const e = ts.uint32View[0],
    n = (e >> 23) & 511;
  return ts.baseTable[n] + ((8388607 & e) >> ts.shiftTable[n]);
}
function is(t) {
  const e = t >> 10;
  return (
    (ts.uint32View[0] =
      ts.mantissaTable[ts.offsetTable[e] + (1023 & t)] + ts.exponentTable[e]),
    ts.floatView[0]
  );
}
const rs = { toHalfFloat: ns, fromHalfFloat: is },
  ss = new Pi(),
  as = new $n();
class os {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = t),
      (this.itemSize = e),
      (this.count = void 0 !== t ? t.length / e : 0),
      (this.normalized = n),
      (this.usage = An),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = Lt),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  get updateRange() {
    return (
      oi(
        "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
      ),
      this._updateRange
    );
  }
  setUsage(t) {
    return (this.usage = t), this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.array = new t.array.constructor(t.array)),
      (this.itemSize = t.itemSize),
      (this.count = t.count),
      (this.normalized = t.normalized),
      (this.usage = t.usage),
      (this.gpuType = t.gpuType),
      this
    );
  }
  copyAt(t, e, n) {
    (t *= this.itemSize), (n *= e.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (2 === this.itemSize)
      for (let e = 0, n = this.count; e < n; e++)
        as.fromBufferAttribute(this, e),
          as.applyMatrix3(t),
          this.setXY(e, as.x, as.y);
    else if (3 === this.itemSize)
      for (let e = 0, n = this.count; e < n; e++)
        ss.fromBufferAttribute(this, e),
          ss.applyMatrix3(t),
          this.setXYZ(e, ss.x, ss.y, ss.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ss.fromBufferAttribute(this, e),
        ss.applyMatrix4(t),
        this.setXYZ(e, ss.x, ss.y, ss.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ss.fromBufferAttribute(this, e),
        ss.applyNormalMatrix(t),
        this.setXYZ(e, ss.x, ss.y, ss.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ss.fromBufferAttribute(this, e),
        ss.transformDirection(t),
        this.setXYZ(e, ss.x, ss.y, ss.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = Zn(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return (
      this.normalized && (n = Jn(n, this.array)),
      (this.array[t * this.itemSize + e] = n),
      this
    );
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  setX(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.array[t * this.itemSize] = e),
      this
    );
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  setY(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.array[t * this.itemSize + 1] = e),
      this
    );
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  setZ(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.array[t * this.itemSize + 2] = e),
      this
    );
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  setW(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.array[t * this.itemSize + 3] = e),
      this
    );
  }
  setXY(t, e, n) {
    return (
      (t *= this.itemSize),
      this.normalized && ((e = Jn(e, this.array)), (n = Jn(n, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      this
    );
  }
  setXYZ(t, e, n, i) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = Jn(e, this.array)),
        (n = Jn(n, this.array)),
        (i = Jn(i, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = i),
      this
    );
  }
  setXYZW(t, e, n, i, r) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = Jn(e, this.array)),
        (n = Jn(n, this.array)),
        (i = Jn(i, this.array)),
        (r = Jn(r, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = i),
      (this.array[t + 3] = r),
      this
    );
  }
  onUpload(t) {
    return (this.onUploadCallback = t), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      "" !== this.name && (t.name = this.name),
      this.usage !== An && (t.usage = this.usage),
      t
    );
  }
}
class ls extends os {
  constructor(t, e, n) {
    super(new Int8Array(t), e, n);
  }
}
class cs extends os {
  constructor(t, e, n) {
    super(new Uint8Array(t), e, n);
  }
}
class hs extends os {
  constructor(t, e, n) {
    super(new Uint8ClampedArray(t), e, n);
  }
}
class us extends os {
  constructor(t, e, n) {
    super(new Int16Array(t), e, n);
  }
}
class ds extends os {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class ps extends os {
  constructor(t, e, n) {
    super(new Int32Array(t), e, n);
  }
}
class ms extends os {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class fs extends os {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n), (this.isFloat16BufferAttribute = !0);
  }
  getX(t) {
    let e = is(this.array[t * this.itemSize]);
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  setX(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.array[t * this.itemSize] = ns(e)),
      this
    );
  }
  getY(t) {
    let e = is(this.array[t * this.itemSize + 1]);
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  setY(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.array[t * this.itemSize + 1] = ns(e)),
      this
    );
  }
  getZ(t) {
    let e = is(this.array[t * this.itemSize + 2]);
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  setZ(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.array[t * this.itemSize + 2] = ns(e)),
      this
    );
  }
  getW(t) {
    let e = is(this.array[t * this.itemSize + 3]);
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  setW(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.array[t * this.itemSize + 3] = ns(e)),
      this
    );
  }
  setXY(t, e, n) {
    return (
      (t *= this.itemSize),
      this.normalized && ((e = Jn(e, this.array)), (n = Jn(n, this.array))),
      (this.array[t + 0] = ns(e)),
      (this.array[t + 1] = ns(n)),
      this
    );
  }
  setXYZ(t, e, n, i) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = Jn(e, this.array)),
        (n = Jn(n, this.array)),
        (i = Jn(i, this.array))),
      (this.array[t + 0] = ns(e)),
      (this.array[t + 1] = ns(n)),
      (this.array[t + 2] = ns(i)),
      this
    );
  }
  setXYZW(t, e, n, i, r) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = Jn(e, this.array)),
        (n = Jn(n, this.array)),
        (i = Jn(i, this.array)),
        (r = Jn(r, this.array))),
      (this.array[t + 0] = ns(e)),
      (this.array[t + 1] = ns(n)),
      (this.array[t + 2] = ns(i)),
      (this.array[t + 3] = ns(r)),
      this
    );
  }
}
class gs extends os {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let vs = 0;
const _s = new ar(),
  xs = new Ur(),
  ys = new Pi(),
  Ms = new Ui(),
  Ss = new Ui(),
  bs = new Pi();
class ws extends kn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: vs++ }),
      (this.uuid = Xn()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return (
      Array.isArray(t)
        ? (this.index = new (ei(t) ? ms : ds)(t, 1))
        : (this.index = t),
      this
    );
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return (this.attributes[t] = e), this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return void 0 !== this.attributes[t];
  }
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    (this.drawRange.start = t), (this.drawRange.count = e);
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
    const n = this.attributes.normal;
    if (void 0 !== n) {
      const e = new Qn().getNormalMatrix(t);
      n.applyNormalMatrix(e), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
      null !== this.boundingBox && this.computeBoundingBox(),
      null !== this.boundingSphere && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(t) {
    return _s.makeRotationFromQuaternion(t), this.applyMatrix4(_s), this;
  }
  rotateX(t) {
    return _s.makeRotationX(t), this.applyMatrix4(_s), this;
  }
  rotateY(t) {
    return _s.makeRotationY(t), this.applyMatrix4(_s), this;
  }
  rotateZ(t) {
    return _s.makeRotationZ(t), this.applyMatrix4(_s), this;
  }
  translate(t, e, n) {
    return _s.makeTranslation(t, e, n), this.applyMatrix4(_s), this;
  }
  scale(t, e, n) {
    return _s.makeScale(t, e, n), this.applyMatrix4(_s), this;
  }
  lookAt(t) {
    return xs.lookAt(t), xs.updateMatrix(), this.applyMatrix4(xs.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(ys).negate(),
      this.translate(ys.x, ys.y, ys.z),
      this
    );
  }
  setFromPoints(t) {
    const e = [];
    for (let n = 0, i = t.length; n < i; n++) {
      const i = t[n];
      e.push(i.x, i.y, i.z || 0);
    }
    return this.setAttribute("position", new gs(e, 3)), this;
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new Ui());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute)
      return (
        console.error(
          "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
          this
        ),
        void this.boundingBox.set(
          new Pi(-1 / 0, -1 / 0, -1 / 0),
          new Pi(1 / 0, 1 / 0, 1 / 0)
        )
      );
    if (void 0 !== t) {
      if ((this.boundingBox.setFromBufferAttribute(t), e))
        for (let t = 0, n = e.length; t < n; t++) {
          const n = e[t];
          Ms.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (bs.addVectors(this.boundingBox.min, Ms.min),
                this.boundingBox.expandByPoint(bs),
                bs.addVectors(this.boundingBox.max, Ms.max),
                this.boundingBox.expandByPoint(bs))
              : (this.boundingBox.expandByPoint(Ms.min),
                this.boundingBox.expandByPoint(Ms.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new Ki());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute)
      return (
        console.error(
          "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
          this
        ),
        void this.boundingSphere.set(new Pi(), 1 / 0)
      );
    if (t) {
      const n = this.boundingSphere.center;
      if ((Ms.setFromBufferAttribute(t), e))
        for (let t = 0, n = e.length; t < n; t++) {
          const n = e[t];
          Ss.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (bs.addVectors(Ms.min, Ss.min),
                Ms.expandByPoint(bs),
                bs.addVectors(Ms.max, Ss.max),
                Ms.expandByPoint(bs))
              : (Ms.expandByPoint(Ss.min), Ms.expandByPoint(Ss.max));
        }
      Ms.getCenter(n);
      let i = 0;
      for (let e = 0, r = t.count; e < r; e++)
        bs.fromBufferAttribute(t, e),
          (i = Math.max(i, n.distanceToSquared(bs)));
      if (e)
        for (let r = 0, s = e.length; r < s; r++) {
          const s = e[r],
            a = this.morphTargetsRelative;
          for (let e = 0, r = s.count; e < r; e++)
            bs.fromBufferAttribute(s, e),
              a && (ys.fromBufferAttribute(t, e), bs.add(ys)),
              (i = Math.max(i, n.distanceToSquared(bs)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const t = this.index,
      e = this.attributes;
    if (
      null === t ||
      void 0 === e.position ||
      void 0 === e.normal ||
      void 0 === e.uv
    )
      return void console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
    const n = e.position,
      i = e.normal,
      r = e.uv;
    !1 === this.hasAttribute("tangent") &&
      this.setAttribute("tangent", new os(new Float32Array(4 * n.count), 4));
    const s = this.getAttribute("tangent"),
      a = [],
      o = [];
    for (let t = 0; t < n.count; t++) (a[t] = new Pi()), (o[t] = new Pi());
    const l = new Pi(),
      c = new Pi(),
      h = new Pi(),
      u = new $n(),
      d = new $n(),
      p = new $n(),
      m = new Pi(),
      f = new Pi();
    function g(t, e, i) {
      l.fromBufferAttribute(n, t),
        c.fromBufferAttribute(n, e),
        h.fromBufferAttribute(n, i),
        u.fromBufferAttribute(r, t),
        d.fromBufferAttribute(r, e),
        p.fromBufferAttribute(r, i),
        c.sub(l),
        h.sub(l),
        d.sub(u),
        p.sub(u);
      const s = 1 / (d.x * p.y - p.x * d.y);
      isFinite(s) &&
        (m
          .copy(c)
          .multiplyScalar(p.y)
          .addScaledVector(h, -d.y)
          .multiplyScalar(s),
        f
          .copy(h)
          .multiplyScalar(d.x)
          .addScaledVector(c, -p.x)
          .multiplyScalar(s),
        a[t].add(m),
        a[e].add(m),
        a[i].add(m),
        o[t].add(f),
        o[e].add(f),
        o[i].add(f));
    }
    let v = this.groups;
    0 === v.length && (v = [{ start: 0, count: t.count }]);
    for (let e = 0, n = v.length; e < n; ++e) {
      const n = v[e],
        i = n.start;
      for (let e = i, r = i + n.count; e < r; e += 3)
        g(t.getX(e + 0), t.getX(e + 1), t.getX(e + 2));
    }
    const _ = new Pi(),
      x = new Pi(),
      y = new Pi(),
      M = new Pi();
    function S(t) {
      y.fromBufferAttribute(i, t), M.copy(y);
      const e = a[t];
      _.copy(e),
        _.sub(y.multiplyScalar(y.dot(e))).normalize(),
        x.crossVectors(M, e);
      const n = x.dot(o[t]) < 0 ? -1 : 1;
      s.setXYZW(t, _.x, _.y, _.z, n);
    }
    for (let e = 0, n = v.length; e < n; ++e) {
      const n = v[e],
        i = n.start;
      for (let e = i, r = i + n.count; e < r; e += 3)
        S(t.getX(e + 0)), S(t.getX(e + 1)), S(t.getX(e + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index,
      e = this.getAttribute("position");
    if (void 0 !== e) {
      let n = this.getAttribute("normal");
      if (void 0 === n)
        (n = new os(new Float32Array(3 * e.count), 3)),
          this.setAttribute("normal", n);
      else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
      const i = new Pi(),
        r = new Pi(),
        s = new Pi(),
        a = new Pi(),
        o = new Pi(),
        l = new Pi(),
        c = new Pi(),
        h = new Pi();
      if (t)
        for (let u = 0, d = t.count; u < d; u += 3) {
          const d = t.getX(u + 0),
            p = t.getX(u + 1),
            m = t.getX(u + 2);
          i.fromBufferAttribute(e, d),
            r.fromBufferAttribute(e, p),
            s.fromBufferAttribute(e, m),
            c.subVectors(s, r),
            h.subVectors(i, r),
            c.cross(h),
            a.fromBufferAttribute(n, d),
            o.fromBufferAttribute(n, p),
            l.fromBufferAttribute(n, m),
            a.add(c),
            o.add(c),
            l.add(c),
            n.setXYZ(d, a.x, a.y, a.z),
            n.setXYZ(p, o.x, o.y, o.z),
            n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let t = 0, a = e.count; t < a; t += 3)
          i.fromBufferAttribute(e, t + 0),
            r.fromBufferAttribute(e, t + 1),
            s.fromBufferAttribute(e, t + 2),
            c.subVectors(s, r),
            h.subVectors(i, r),
            c.cross(h),
            n.setXYZ(t + 0, c.x, c.y, c.z),
            n.setXYZ(t + 1, c.x, c.y, c.z),
            n.setXYZ(t + 2, c.x, c.y, c.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      bs.fromBufferAttribute(t, e),
        bs.normalize(),
        t.setXYZ(e, bs.x, bs.y, bs.z);
  }
  toNonIndexed() {
    function t(t, e) {
      const n = t.array,
        i = t.itemSize,
        r = t.normalized,
        s = new n.constructor(e.length * i);
      let a = 0,
        o = 0;
      for (let r = 0, l = e.length; r < l; r++) {
        a = t.isInterleavedBufferAttribute
          ? e[r] * t.data.stride + t.offset
          : e[r] * i;
        for (let t = 0; t < i; t++) s[o++] = n[a++];
      }
      return new os(s, i, r);
    }
    if (null === this.index)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const e = new ws(),
      n = this.index.array,
      i = this.attributes;
    for (const r in i) {
      const s = t(i[r], n);
      e.setAttribute(r, s);
    }
    const r = this.morphAttributes;
    for (const i in r) {
      const s = [],
        a = r[i];
      for (let e = 0, i = a.length; e < i; e++) {
        const i = t(a[e], n);
        s.push(i);
      }
      e.morphAttributes[i] = s;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let t = 0, n = s.length; t < n; t++) {
      const n = s[t];
      e.addGroup(n.start, n.count, n.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((t.uuid = this.uuid),
      (t.type = this.type),
      "" !== this.name && (t.name = this.name),
      Object.keys(this.userData).length > 0 && (t.userData = this.userData),
      void 0 !== this.parameters)
    ) {
      const e = this.parameters;
      for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    null !== e &&
      (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array),
      });
    const n = this.attributes;
    for (const e in n) {
      const i = n[e];
      t.data.attributes[e] = i.toJSON(t.data);
    }
    const i = {};
    let r = !1;
    for (const e in this.morphAttributes) {
      const n = this.morphAttributes[e],
        s = [];
      for (let e = 0, i = n.length; e < i; e++) {
        const i = n[e];
        s.push(i.toJSON(t.data));
      }
      s.length > 0 && ((i[e] = s), (r = !0));
    }
    r &&
      ((t.data.morphAttributes = i),
      (t.data.morphTargetsRelative = this.morphTargetsRelative));
    const s = this.groups;
    s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
    const a = this.boundingSphere;
    return (
      null !== a &&
        (t.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      t
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const e = {};
    this.name = t.name;
    const n = t.index;
    null !== n && this.setIndex(n.clone(e));
    const i = t.attributes;
    for (const t in i) {
      const n = i[t];
      this.setAttribute(t, n.clone(e));
    }
    const r = t.morphAttributes;
    for (const t in r) {
      const n = [],
        i = r[t];
      for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
      this.morphAttributes[t] = n;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const s = t.groups;
    for (let t = 0, e = s.length; t < e; t++) {
      const e = s[t];
      this.addGroup(e.start, e.count, e.materialIndex);
    }
    const a = t.boundingBox;
    null !== a && (this.boundingBox = a.clone());
    const o = t.boundingSphere;
    return (
      null !== o && (this.boundingSphere = o.clone()),
      (this.drawRange.start = t.drawRange.start),
      (this.drawRange.count = t.drawRange.count),
      (this.userData = t.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ts = new ar(),
  Es = new sr(),
  As = new Ki(),
  Rs = new Pi(),
  Cs = new Pi(),
  Ps = new Pi(),
  Is = new Pi(),
  Ls = new Pi(),
  Us = new Pi(),
  Ns = new $n(),
  Ds = new $n(),
  Os = new $n(),
  Fs = new Pi(),
  Bs = new Pi(),
  zs = new Pi(),
  ks = new Pi(),
  Vs = new Pi();
class Hs extends Ur {
  constructor(t = new ws(), e = new Qr()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      void 0 !== t.morphTargetInfluences &&
        (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
      void 0 !== t.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          t.morphTargetDictionary
        )),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      e = Object.keys(t);
    if (e.length > 0) {
      const n = t[e[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let t = 0, e = n.length; t < e; t++) {
          const e = n[t].name || String(t);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[e] = t);
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      s = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    const a = this.morphTargetInfluences;
    if (r && a) {
      Us.set(0, 0, 0);
      for (let n = 0, i = r.length; n < i; n++) {
        const i = a[n],
          o = r[n];
        0 !== i &&
          (Ls.fromBufferAttribute(o, t),
          s ? Us.addScaledVector(Ls, i) : Us.addScaledVector(Ls.sub(e), i));
      }
      e.add(Us);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (void 0 !== i) {
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        As.copy(n.boundingSphere),
        As.applyMatrix4(r),
        Es.copy(t.ray).recast(t.near),
        !1 === As.containsPoint(Es.origin))
      ) {
        if (null === Es.intersectSphere(As, Rs)) return;
        if (Es.origin.distanceToSquared(Rs) > (t.far - t.near) ** 2) return;
      }
      Ts.copy(r).invert(),
        Es.copy(t.ray).applyMatrix4(Ts),
        (null !== n.boundingBox && !1 === Es.intersectsBox(n.boundingBox)) ||
          this._computeIntersections(t, e, Es);
    }
  }
  _computeIntersections(t, e, n) {
    let i;
    const r = this.geometry,
      s = this.material,
      a = r.index,
      o = r.attributes.position,
      l = r.attributes.uv,
      c = r.attributes.uv1,
      h = r.attributes.normal,
      u = r.groups,
      d = r.drawRange;
    if (null !== a)
      if (Array.isArray(s))
        for (let r = 0, o = u.length; r < o; r++) {
          const o = u[r],
            p = s[o.materialIndex];
          for (
            let r = Math.max(o.start, d.start),
              s = Math.min(
                a.count,
                Math.min(o.start + o.count, d.start + d.count)
              );
            r < s;
            r += 3
          ) {
            (i = Gs(
              this,
              p,
              t,
              n,
              l,
              c,
              h,
              a.getX(r),
              a.getX(r + 1),
              a.getX(r + 2)
            )),
              i &&
                ((i.faceIndex = Math.floor(r / 3)),
                (i.face.materialIndex = o.materialIndex),
                e.push(i));
          }
        }
      else {
        for (
          let r = Math.max(0, d.start),
            o = Math.min(a.count, d.start + d.count);
          r < o;
          r += 3
        ) {
          (i = Gs(
            this,
            s,
            t,
            n,
            l,
            c,
            h,
            a.getX(r),
            a.getX(r + 1),
            a.getX(r + 2)
          )),
            i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
        }
      }
    else if (void 0 !== o)
      if (Array.isArray(s))
        for (let r = 0, a = u.length; r < a; r++) {
          const a = u[r],
            p = s[a.materialIndex];
          for (
            let r = Math.max(a.start, d.start),
              s = Math.min(
                o.count,
                Math.min(a.start + a.count, d.start + d.count)
              );
            r < s;
            r += 3
          ) {
            (i = Gs(this, p, t, n, l, c, h, r, r + 1, r + 2)),
              i &&
                ((i.faceIndex = Math.floor(r / 3)),
                (i.face.materialIndex = a.materialIndex),
                e.push(i));
          }
        }
      else {
        for (
          let r = Math.max(0, d.start),
            a = Math.min(o.count, d.start + d.count);
          r < a;
          r += 3
        ) {
          (i = Gs(this, s, t, n, l, c, h, r, r + 1, r + 2)),
            i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
        }
      }
  }
}
function Gs(t, e, n, i, r, s, a, o, l, c) {
  t.getVertexPosition(o, Cs),
    t.getVertexPosition(l, Ps),
    t.getVertexPosition(c, Is);
  const h = (function (t, e, n, i, r, s, a, o) {
    let l;
    if (
      ((l =
        e.side === d
          ? i.intersectTriangle(a, s, r, !0, o)
          : i.intersectTriangle(r, s, a, e.side === u, o)),
      null === l)
    )
      return null;
    Vs.copy(o), Vs.applyMatrix4(t.matrixWorld);
    const c = n.ray.origin.distanceTo(Vs);
    return c < n.near || c > n.far
      ? null
      : { distance: c, point: Vs.clone(), object: t };
  })(t, e, n, i, Cs, Ps, Is, ks);
  if (h) {
    r &&
      (Ns.fromBufferAttribute(r, o),
      Ds.fromBufferAttribute(r, l),
      Os.fromBufferAttribute(r, c),
      (h.uv = Wr.getInterpolation(ks, Cs, Ps, Is, Ns, Ds, Os, new $n()))),
      s &&
        (Ns.fromBufferAttribute(s, o),
        Ds.fromBufferAttribute(s, l),
        Os.fromBufferAttribute(s, c),
        (h.uv1 = Wr.getInterpolation(ks, Cs, Ps, Is, Ns, Ds, Os, new $n()))),
      a &&
        (Fs.fromBufferAttribute(a, o),
        Bs.fromBufferAttribute(a, l),
        zs.fromBufferAttribute(a, c),
        (h.normal = Wr.getInterpolation(ks, Cs, Ps, Is, Fs, Bs, zs, new Pi())),
        h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const t = { a: o, b: l, c: c, normal: new Pi(), materialIndex: 0 };
    Wr.getNormal(Cs, Ps, Is, t.normal), (h.face = t);
  }
  return h;
}
class Ws extends ws {
  constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: s,
      });
    const a = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (s = Math.floor(s));
    const o = [],
      l = [],
      c = [],
      h = [];
    let u = 0,
      d = 0;
    function p(t, e, n, i, r, s, p, m, f, g, v) {
      const _ = s / f,
        x = p / g,
        y = s / 2,
        M = p / 2,
        S = m / 2,
        b = f + 1,
        w = g + 1;
      let T = 0,
        E = 0;
      const A = new Pi();
      for (let s = 0; s < w; s++) {
        const a = s * x - M;
        for (let o = 0; o < b; o++) {
          const u = o * _ - y;
          (A[t] = u * i),
            (A[e] = a * r),
            (A[n] = S),
            l.push(A.x, A.y, A.z),
            (A[t] = 0),
            (A[e] = 0),
            (A[n] = m > 0 ? 1 : -1),
            c.push(A.x, A.y, A.z),
            h.push(o / f),
            h.push(1 - s / g),
            (T += 1);
        }
      }
      for (let t = 0; t < g; t++)
        for (let e = 0; e < f; e++) {
          const n = u + e + b * t,
            i = u + e + b * (t + 1),
            r = u + (e + 1) + b * (t + 1),
            s = u + (e + 1) + b * t;
          o.push(n, i, s), o.push(i, r, s), (E += 6);
        }
      a.addGroup(d, E, v), (d += E), (u += T);
    }
    p("z", "y", "x", -1, -1, n, e, t, s, r, 0),
      p("z", "y", "x", 1, -1, n, e, -t, s, r, 1),
      p("x", "z", "y", 1, 1, t, n, e, i, s, 2),
      p("x", "z", "y", 1, -1, t, n, -e, i, s, 3),
      p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
      p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
      this.setIndex(o),
      this.setAttribute("position", new gs(l, 3)),
      this.setAttribute("normal", new gs(c, 3)),
      this.setAttribute("uv", new gs(h, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new Ws(
      t.width,
      t.height,
      t.depth,
      t.widthSegments,
      t.heightSegments,
      t.depthSegments
    );
  }
}
function Xs(t) {
  const e = {};
  for (const n in t) {
    e[n] = {};
    for (const i in t[n]) {
      const r = t[n][i];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[n][i] = null))
          : (e[n][i] = r.clone())
        : Array.isArray(r)
        ? (e[n][i] = r.slice())
        : (e[n][i] = r);
    }
  }
  return e;
}
function js(t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = Xs(t[n]);
    for (const t in i) e[t] = i[t];
  }
  return e;
}
function qs(t) {
  const e = t.getRenderTarget();
  return null === e
    ? t.outputColorSpace
    : !0 === e.isXRRenderTarget
    ? e.texture.colorSpace
    : di.workingColorSpace;
}
const Ys = { clone: Xs, merge: js };
class Zs extends $r {
  constructor(t) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader =
        "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
      (this.fragmentShader =
        "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      void 0 !== t && this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.fragmentShader = t.fragmentShader),
      (this.vertexShader = t.vertexShader),
      (this.uniforms = Xs(t.uniforms)),
      (this.uniformsGroups = (function (t) {
        const e = [];
        for (let n = 0; n < t.length; n++) e.push(t[n].clone());
        return e;
      })(t.uniformsGroups)),
      (this.defines = Object.assign({}, t.defines)),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.fog = t.fog),
      (this.lights = t.lights),
      (this.clipping = t.clipping),
      (this.extensions = Object.assign({}, t.extensions)),
      (this.glslVersion = t.glslVersion),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    (e.glslVersion = this.glslVersion), (e.uniforms = {});
    for (const n in this.uniforms) {
      const i = this.uniforms[n].value;
      i && i.isTexture
        ? (e.uniforms[n] = { type: "t", value: i.toJSON(t).uuid })
        : i && i.isColor
        ? (e.uniforms[n] = { type: "c", value: i.getHex() })
        : i && i.isVector2
        ? (e.uniforms[n] = { type: "v2", value: i.toArray() })
        : i && i.isVector3
        ? (e.uniforms[n] = { type: "v3", value: i.toArray() })
        : i && i.isVector4
        ? (e.uniforms[n] = { type: "v4", value: i.toArray() })
        : i && i.isMatrix3
        ? (e.uniforms[n] = { type: "m3", value: i.toArray() })
        : i && i.isMatrix4
        ? (e.uniforms[n] = { type: "m4", value: i.toArray() })
        : (e.uniforms[n] = { value: i });
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines),
      (e.vertexShader = this.vertexShader),
      (e.fragmentShader = this.fragmentShader),
      (e.lights = this.lights),
      (e.clipping = this.clipping);
    const n = {};
    for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Js extends Ur {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new ar()),
      (this.projectionMatrix = new ar()),
      (this.projectionMatrixInverse = new ar()),
      (this.coordinateSystem = Bn);
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.matrixWorldInverse.copy(t.matrixWorldInverse),
      this.projectionMatrix.copy(t.projectionMatrix),
      this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
      (this.coordinateSystem = t.coordinateSystem),
      this
    );
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ks = new Pi(),
  $s = new $n(),
  Qs = new $n();
class ta extends Js {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = t),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = e),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.fov = t.fov),
      (this.zoom = t.zoom),
      (this.near = t.near),
      (this.far = t.far),
      (this.focus = t.focus),
      (this.aspect = t.aspect),
      (this.view = null === t.view ? null : Object.assign({}, t.view)),
      (this.filmGauge = t.filmGauge),
      (this.filmOffset = t.filmOffset),
      this
    );
  }
  setFocalLength(t) {
    const e = (0.5 * this.getFilmHeight()) / t;
    (this.fov = 2 * Wn * Math.atan(e)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(0.5 * Gn * this.fov);
    return (0.5 * this.getFilmHeight()) / t;
  }
  getEffectiveFOV() {
    return 2 * Wn * Math.atan(Math.tan(0.5 * Gn * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    Ks.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      e.set(Ks.x, Ks.y).multiplyScalar(-t / Ks.z),
      Ks.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(Ks.x, Ks.y).multiplyScalar(-t / Ks.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, $s, Qs), e.subVectors(Qs, $s);
  }
  setViewOffset(t, e, n, i, r, s) {
    (this.aspect = t / e),
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = s),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = (t * Math.tan(0.5 * Gn * this.fov)) / this.zoom,
      n = 2 * e,
      i = this.aspect * n,
      r = -0.5 * i;
    const s = this.view;
    if (null !== this.view && this.view.enabled) {
      const t = s.fullWidth,
        a = s.fullHeight;
      (r += (s.offsetX * i) / t),
        (e -= (s.offsetY * n) / a),
        (i *= s.width / t),
        (n *= s.height / a);
    }
    const a = this.filmOffset;
    0 !== a && (r += (t * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + i,
        e,
        e - n,
        t,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.fov = this.fov),
      (e.object.zoom = this.zoom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      (e.object.focus = this.focus),
      (e.object.aspect = this.aspect),
      null !== this.view && (e.object.view = Object.assign({}, this.view)),
      (e.object.filmGauge = this.filmGauge),
      (e.object.filmOffset = this.filmOffset),
      e
    );
  }
}
const ea = -90;
class na extends Ur {
  constructor(t, e, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const i = new ta(ea, 1, t, e);
    (i.layers = this.layers), this.add(i);
    const r = new ta(ea, 1, t, e);
    (r.layers = this.layers), this.add(r);
    const s = new ta(ea, 1, t, e);
    (s.layers = this.layers), this.add(s);
    const a = new ta(ea, 1, t, e);
    (a.layers = this.layers), this.add(a);
    const o = new ta(ea, 1, t, e);
    (o.layers = this.layers), this.add(o);
    const l = new ta(ea, 1, t, e);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem,
      e = this.children.concat(),
      [n, i, r, s, a, o] = e;
    for (const t of e) this.remove(t);
    if (t === Bn)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, -1, 0),
        a.up.set(0, 1, 0),
        a.lookAt(0, 0, 1),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, -1);
    else {
      if (t !== zn)
        throw new Error(
          "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
            t
        );
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, -1, 0),
        a.up.set(0, -1, 0),
        a.lookAt(0, 0, 1),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, -1);
    }
    for (const t of e) this.add(t), t.updateMatrixWorld();
  }
  update(t, e) {
    null === this.parent && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== t.coordinateSystem &&
      ((this.coordinateSystem = t.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, s, a, o, l, c] = this.children,
      h = t.getRenderTarget(),
      u = t.getActiveCubeFace(),
      d = t.getActiveMipmapLevel(),
      p = t.xr.enabled;
    t.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      t.setRenderTarget(n, 0, i),
      t.render(e, r),
      t.setRenderTarget(n, 1, i),
      t.render(e, s),
      t.setRenderTarget(n, 2, i),
      t.render(e, a),
      t.setRenderTarget(n, 3, i),
      t.render(e, o),
      t.setRenderTarget(n, 4, i),
      t.render(e, l),
      (n.texture.generateMipmaps = m),
      t.setRenderTarget(n, 5, i),
      t.render(e, c),
      t.setRenderTarget(h, u, d),
      (t.xr.enabled = p),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class ia extends Mi {
  constructor(t, e, n, i, r, s, a, o, l, c) {
    super(
      (t = void 0 !== t ? t : []),
      (e = void 0 !== e ? e : lt),
      n,
      i,
      r,
      s,
      a,
      o,
      l,
      c
    ),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class ra extends wi {
  constructor(t = 1, e = {}) {
    super(t, t, e), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: t, height: t, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new ia(
      i,
      e.mapping,
      e.wrapS,
      e.wrapT,
      e.magFilter,
      e.minFilter,
      e.format,
      e.type,
      e.anisotropy,
      e.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        void 0 !== e.generateMipmaps && e.generateMipmaps),
      (this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : Mt);
  }
  fromEquirectangularTexture(t, e) {
    (this.texture.type = e.type),
      (this.texture.colorSpace = e.colorSpace),
      (this.texture.generateMipmaps = e.generateMipmaps),
      (this.texture.minFilter = e.minFilter),
      (this.texture.magFilter = e.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader:
          "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
        fragmentShader:
          "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
      },
      i = new Ws(5, 5, 5),
      r = new Zs({
        name: "CubemapFromEquirect",
        uniforms: Xs(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: d,
        blending: 0,
      });
    r.uniforms.tEquirect.value = e;
    const s = new Hs(i, r),
      a = e.minFilter;
    e.minFilter === wt && (e.minFilter = Mt);
    return (
      new na(1, 10, this).update(t, s),
      (e.minFilter = a),
      s.geometry.dispose(),
      s.material.dispose(),
      this
    );
  }
  clear(t, e, n, i) {
    const r = t.getRenderTarget();
    for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
    t.setRenderTarget(r);
  }
}
const sa = new Pi(),
  aa = new Pi(),
  oa = new Qn();
class la {
  constructor(t = new Pi(1, 0, 0), e = 0) {
    (this.isPlane = !0), (this.normal = t), (this.constant = e);
  }
  set(t, e) {
    return this.normal.copy(t), (this.constant = e), this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = sa.subVectors(n, e).cross(aa.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), (this.constant = t.constant), this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), (this.constant *= t), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(sa),
      i = this.normal.dot(n);
    if (0 === i)
      return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start),
      n = this.distanceToPoint(t.end);
    return (e < 0 && n > 0) || (n < 0 && e > 0);
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || oa.getNormalMatrix(t),
      i = this.coplanarPoint(sa).applyMatrix4(t),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(t) {
    return (this.constant -= t.dot(this.normal)), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ca = new Ki(),
  ha = new Pi();
class ua {
  constructor(
    t = new la(),
    e = new la(),
    n = new la(),
    i = new la(),
    r = new la(),
    s = new la()
  ) {
    this.planes = [t, e, n, i, r, s];
  }
  set(t, e, n, i, r, s) {
    const a = this.planes;
    return (
      a[0].copy(t),
      a[1].copy(e),
      a[2].copy(n),
      a[3].copy(i),
      a[4].copy(r),
      a[5].copy(s),
      this
    );
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = 2e3) {
    const n = this.planes,
      i = t.elements,
      r = i[0],
      s = i[1],
      a = i[2],
      o = i[3],
      l = i[4],
      c = i[5],
      h = i[6],
      u = i[7],
      d = i[8],
      p = i[9],
      m = i[10],
      f = i[11],
      g = i[12],
      v = i[13],
      _ = i[14],
      x = i[15];
    if (
      (n[0].setComponents(o - r, u - l, f - d, x - g).normalize(),
      n[1].setComponents(o + r, u + l, f + d, x + g).normalize(),
      n[2].setComponents(o + s, u + c, f + p, x + v).normalize(),
      n[3].setComponents(o - s, u - c, f - p, x - v).normalize(),
      n[4].setComponents(o - a, u - h, f - m, x - _).normalize(),
      e === Bn)
    )
      n[5].setComponents(o + a, u + h, f + m, x + _).normalize();
    else {
      if (e !== zn)
        throw new Error(
          "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
            e
        );
      n[5].setComponents(a, h, m, _).normalize();
    }
    return this;
  }
  intersectsObject(t) {
    if (void 0 !== t.boundingSphere)
      null === t.boundingSphere && t.computeBoundingSphere(),
        ca.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      null === e.boundingSphere && e.computeBoundingSphere(),
        ca.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(ca);
  }
  intersectsSprite(t) {
    return (
      ca.center.set(0, 0, 0),
      (ca.radius = 0.7071067811865476),
      ca.applyMatrix4(t.matrixWorld),
      this.intersectsSphere(ca)
    );
  }
  intersectsSphere(t) {
    const e = this.planes,
      n = t.center,
      i = -t.radius;
    for (let t = 0; t < 6; t++) {
      if (e[t].distanceToPoint(n) < i) return !1;
    }
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (
        ((ha.x = i.normal.x > 0 ? t.max.x : t.min.x),
        (ha.y = i.normal.y > 0 ? t.max.y : t.min.y),
        (ha.z = i.normal.z > 0 ? t.max.z : t.min.z),
        i.distanceToPoint(ha) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function da() {
  let t = null,
    e = !1,
    n = null,
    i = null;
  function r(e, s) {
    n(e, s), (i = t.requestAnimationFrame(r));
  }
  return {
    start: function () {
      !0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      t.cancelAnimationFrame(i), (e = !1);
    },
    setAnimationLoop: function (t) {
      n = t;
    },
    setContext: function (e) {
      t = e;
    },
  };
}
function pa(t) {
  const e = new WeakMap();
  return {
    get: function (t) {
      return t.isInterleavedBufferAttribute && (t = t.data), e.get(t);
    },
    remove: function (n) {
      n.isInterleavedBufferAttribute && (n = n.data);
      const i = e.get(n);
      i && (t.deleteBuffer(i.buffer), e.delete(n));
    },
    update: function (n, i) {
      if (n.isGLBufferAttribute) {
        const t = e.get(n);
        return void (
          (!t || t.version < n.version) &&
          e.set(n, {
            buffer: n.buffer,
            type: n.type,
            bytesPerElement: n.elementSize,
            version: n.version,
          })
        );
      }
      n.isInterleavedBufferAttribute && (n = n.data);
      const r = e.get(n);
      if (void 0 === r)
        e.set(
          n,
          (function (e, n) {
            const i = e.array,
              r = e.usage,
              s = i.byteLength,
              a = t.createBuffer();
            let o;
            if (
              (t.bindBuffer(n, a),
              t.bufferData(n, i, r),
              e.onUploadCallback(),
              i instanceof Float32Array)
            )
              o = t.FLOAT;
            else if (i instanceof Uint16Array)
              o = e.isFloat16BufferAttribute ? t.HALF_FLOAT : t.UNSIGNED_SHORT;
            else if (i instanceof Int16Array) o = t.SHORT;
            else if (i instanceof Uint32Array) o = t.UNSIGNED_INT;
            else if (i instanceof Int32Array) o = t.INT;
            else if (i instanceof Int8Array) o = t.BYTE;
            else if (i instanceof Uint8Array) o = t.UNSIGNED_BYTE;
            else {
              if (!(i instanceof Uint8ClampedArray))
                throw new Error(
                  "THREE.WebGLAttributes: Unsupported buffer data format: " + i
                );
              o = t.UNSIGNED_BYTE;
            }
            return {
              buffer: a,
              type: o,
              bytesPerElement: i.BYTES_PER_ELEMENT,
              version: e.version,
              size: s,
            };
          })(n, i)
        );
      else if (r.version < n.version) {
        if (r.size !== n.array.byteLength)
          throw new Error(
            "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
          );
        !(function (e, n, i) {
          const r = n.array,
            s = n._updateRange,
            a = n.updateRanges;
          if (
            (t.bindBuffer(i, e),
            -1 === s.count && 0 === a.length && t.bufferSubData(i, 0, r),
            0 !== a.length)
          ) {
            for (let e = 0, n = a.length; e < n; e++) {
              const n = a[e];
              t.bufferSubData(
                i,
                n.start * r.BYTES_PER_ELEMENT,
                r,
                n.start,
                n.count
              );
            }
            n.clearUpdateRanges();
          }
          -1 !== s.count &&
            (t.bufferSubData(
              i,
              s.offset * r.BYTES_PER_ELEMENT,
              r,
              s.offset,
              s.count
            ),
            (s.count = -1)),
            n.onUploadCallback();
        })(r.buffer, n, i),
          (r.version = n.version);
      }
    },
  };
}
class ma extends ws {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        widthSegments: n,
        heightSegments: i,
      });
    const r = t / 2,
      s = e / 2,
      a = Math.floor(n),
      o = Math.floor(i),
      l = a + 1,
      c = o + 1,
      h = t / a,
      u = e / o,
      d = [],
      p = [],
      m = [],
      f = [];
    for (let t = 0; t < c; t++) {
      const e = t * u - s;
      for (let n = 0; n < l; n++) {
        const i = n * h - r;
        p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / a), f.push(1 - t / o);
      }
    }
    for (let t = 0; t < o; t++)
      for (let e = 0; e < a; e++) {
        const n = e + l * t,
          i = e + l * (t + 1),
          r = e + 1 + l * (t + 1),
          s = e + 1 + l * t;
        d.push(n, i, s), d.push(i, r, s);
      }
    this.setIndex(d),
      this.setAttribute("position", new gs(p, 3)),
      this.setAttribute("normal", new gs(m, 3)),
      this.setAttribute("uv", new gs(f, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new ma(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
const fa = {
    alphahash_fragment:
      "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
    alphahash_pars_fragment:
      "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",
    alphamap_fragment:
      "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
    alphamap_pars_fragment:
      "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment:
      "#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif",
    alphatest_pars_fragment:
      "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
    aomap_fragment:
      "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
    aomap_pars_fragment:
      "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    batching_pars_vertex:
      "#ifdef USE_BATCHING\n\t#if ! defined( GL_ANGLE_multi_draw )\n\t#define gl_DrawID _gl_DrawID\n\tuniform int _gl_DrawID;\n\t#endif\n\tuniform highp sampler2D batchingTexture;\n\tuniform highp usampler2D batchingIdTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n\tfloat getIndirectIndex( const in int i ) {\n\t\tint size = textureSize( batchingIdTexture, 0 ).x;\n\t\tint x = i % size;\n\t\tint y = i / size;\n\t\treturn float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n\t}\n#endif\n#ifdef USE_BATCHING_COLOR\n\tuniform sampler2D batchingColorTexture;\n\tvec3 getBatchingColor( const in float i ) {\n\t\tint size = textureSize( batchingColorTexture, 0 ).x;\n\t\tint j = int( i );\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\treturn texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n\t}\n#endif",
    batching_vertex:
      "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
    begin_vertex:
      "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",
    beginnormal_vertex:
      "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs:
      "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
    iridescence_fragment:
      "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
    bumpmap_pars_fragment:
      "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif",
    clipping_planes_pars_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment:
      "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment:
      "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex:
      "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex:
      "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n\tvec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n\tvColor.xyz *= batchingColor.xyz;\n#endif",
    common:
      "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
    cube_uv_reflection_fragment:
      "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex:
      "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment:
      "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment:
      "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    colorspace_pars_fragment:
      "\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n\tvec3( 0.8224621, 0.177538, 0.0 ),\n\tvec3( 0.0331941, 0.9668058, 0.0 ),\n\tvec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.2249401, - 0.2249404, 0.0 ),\n\tvec3( - 0.0420569, 1.0420571, 0.0 ),\n\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn sRGBTransferOETF( value );\n}",
    envmap_fragment:
      "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment:
      "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment:
      "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex:
      "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment:
      "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",
    envmap_vertex:
      "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
    fog_fragment:
      "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment:
      "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment:
      "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
    lightmap_pars_fragment:
      "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_fragment:
      "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
    lights_lambert_pars_fragment:
      "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
    lights_pars_begin:
      "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif ( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment:
      "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment:
      "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
    lights_phong_fragment:
      "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment:
      "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
    lights_physical_fragment:
      "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n\tmaterial.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
    lights_physical_pars_fragment:
      "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\tfloat dispersion;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin:
      "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps:
      "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
    lights_fragment_end:
      "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
    logdepthbuf_fragment:
      "#if defined( USE_LOGDEPTHBUF )\n\tgl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment:
      "#if defined( USE_LOGDEPTHBUF )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex:
      "#ifdef USE_LOGDEPTHBUF\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_vertex:
      "#ifdef USE_LOGDEPTHBUF\n\tvFragDepth = 1.0 + gl_Position.w;\n\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
    map_fragment:
      "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment:
      "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment:
      "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment:
      "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment:
      "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphinstance_vertex:
      "#ifdef USE_INSTANCING_MORPH\n\tfloat morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\tfloat morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tmorphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\t}\n#endif",
    morphcolor_vertex:
      "#if defined( USE_MORPHCOLORS )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
    morphnormal_vertex:
      "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
    morphtarget_pars_vertex:
      "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_INSTANCING_MORPH\n\t\tuniform float morphTargetBaseInfluence;\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t#endif\n\tuniform sampler2DArray morphTargetsTexture;\n\tuniform ivec2 morphTargetsTextureSize;\n\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t}\n#endif",
    morphtarget_vertex:
      "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
    normal_fragment_begin:
      "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
    normal_fragment_maps:
      "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normal_pars_fragment:
      "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_pars_vertex:
      "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_vertex:
      "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
    normalmap_pars_fragment:
      "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
    clearcoat_normal_fragment_begin:
      "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
    clearcoat_normal_fragment_maps:
      "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
    clearcoat_pars_fragment:
      "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
    iridescence_pars_fragment:
      "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
    opaque_fragment:
      "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
    packing:
      "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
    premultiplied_alpha_fragment:
      "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex:
      "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment:
      "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment:
      "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment:
      "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment:
      "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment:
      "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tfloat shadow = 1.0;\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\t\n\t\tfloat lightToPositionLength = length( lightToPosition );\n\t\tif ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n\t\t\tfloat dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\t\tdp += shadowBias;\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\t\tshadow = (\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t\t) * ( 1.0 / 9.0 );\n\t\t\t#else\n\t\t\t\tshadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n#endif",
    shadowmap_pars_vertex:
      "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex:
      "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
    shadowmask_pars_fragment:
      "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex:
      "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex:
      "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",
    skinning_vertex:
      "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex:
      "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment:
      "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment:
      "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment:
      "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment:
      "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor *= toneMappingExposure;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\tcolor = clamp( color, 0.0, 1.0 );\n\treturn color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n\tconst float StartCompression = 0.8 - 0.04;\n\tconst float Desaturation = 0.15;\n\tcolor *= toneMappingExposure;\n\tfloat x = min( color.r, min( color.g, color.b ) );\n\tfloat offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\tcolor -= offset;\n\tfloat peak = max( color.r, max( color.g, color.b ) );\n\tif ( peak < StartCompression ) return color;\n\tfloat d = 1. - StartCompression;\n\tfloat newPeak = 1. - d * d / ( peak + d - StartCompression );\n\tcolor *= newPeak / peak;\n\tfloat g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n\treturn mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmission_fragment:
      "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
    transmission_pars_fragment:
      "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec4 transmittedLight;\n\t\tvec3 transmittance;\n\t\t#ifdef USE_DISPERSION\n\t\t\tfloat halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n\t\t\tvec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n\t\t\tfor ( int i = 0; i < 3; i ++ ) {\n\t\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n\t\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\n\t\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\t\trefractionCoords += 1.0;\n\t\t\t\trefractionCoords /= 2.0;\n\t\t\n\t\t\t\tvec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n\t\t\t\ttransmittedLight[ i ] = transmissionSample[ i ];\n\t\t\t\ttransmittedLight.a += transmissionSample.a;\n\t\t\t\ttransmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n\t\t\t}\n\t\t\ttransmittedLight.a /= 3.0;\n\t\t\n\t\t#else\n\t\t\n\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\trefractionCoords += 1.0;\n\t\t\trefractionCoords /= 2.0;\n\t\t\ttransmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\t\ttransmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\t\n\t\t#endif\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",
    uv_pars_fragment:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
    uv_pars_vertex:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
    uv_vertex:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
    worldpos_vertex:
      "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_vert:
      "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    background_frag:
      "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    backgroundCube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    backgroundCube_frag:
      "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    cube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    cube_frag:
      "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    depth_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    depth_frag:
      "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    distanceRGBA_vert:
      "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    distanceRGBA_frag:
      "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    equirect_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    equirect_frag:
      "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    linedashed_vert:
      "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    linedashed_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    meshbasic_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert:
      "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag:
      "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert:
      "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshmatcap_frag:
      "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshnormal_vert:
      "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    meshnormal_frag:
      "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
    meshphong_vert:
      "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag:
      "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert:
      "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
    meshphysical_frag:
      "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n\tuniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert:
      "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshtoon_frag:
      "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    points_vert:
      "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    points_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    shadow_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag:
      "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert:
      "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
  },
  ga = {
    common: {
      diffuse: { value: new Zr(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Qn() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Qn() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Qn() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Qn() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Qn() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Qn() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Qn() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Qn() },
      normalScale: { value: new $n(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Qn() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Qn() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Qn() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Qn() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Zr(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Zr(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Qn() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Qn() },
    },
    sprite: {
      diffuse: { value: new Zr(16777215) },
      opacity: { value: 1 },
      center: { value: new $n(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Qn() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Qn() },
      alphaTest: { value: 0 },
    },
  },
  va = {
    basic: {
      uniforms: js([
        ga.common,
        ga.specularmap,
        ga.envmap,
        ga.aomap,
        ga.lightmap,
        ga.fog,
      ]),
      vertexShader: fa.meshbasic_vert,
      fragmentShader: fa.meshbasic_frag,
    },
    lambert: {
      uniforms: js([
        ga.common,
        ga.specularmap,
        ga.envmap,
        ga.aomap,
        ga.lightmap,
        ga.emissivemap,
        ga.bumpmap,
        ga.normalmap,
        ga.displacementmap,
        ga.fog,
        ga.lights,
        { emissive: { value: new Zr(0) } },
      ]),
      vertexShader: fa.meshlambert_vert,
      fragmentShader: fa.meshlambert_frag,
    },
    phong: {
      uniforms: js([
        ga.common,
        ga.specularmap,
        ga.envmap,
        ga.aomap,
        ga.lightmap,
        ga.emissivemap,
        ga.bumpmap,
        ga.normalmap,
        ga.displacementmap,
        ga.fog,
        ga.lights,
        {
          emissive: { value: new Zr(0) },
          specular: { value: new Zr(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: fa.meshphong_vert,
      fragmentShader: fa.meshphong_frag,
    },
    standard: {
      uniforms: js([
        ga.common,
        ga.envmap,
        ga.aomap,
        ga.lightmap,
        ga.emissivemap,
        ga.bumpmap,
        ga.normalmap,
        ga.displacementmap,
        ga.roughnessmap,
        ga.metalnessmap,
        ga.fog,
        ga.lights,
        {
          emissive: { value: new Zr(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: fa.meshphysical_vert,
      fragmentShader: fa.meshphysical_frag,
    },
    toon: {
      uniforms: js([
        ga.common,
        ga.aomap,
        ga.lightmap,
        ga.emissivemap,
        ga.bumpmap,
        ga.normalmap,
        ga.displacementmap,
        ga.gradientmap,
        ga.fog,
        ga.lights,
        { emissive: { value: new Zr(0) } },
      ]),
      vertexShader: fa.meshtoon_vert,
      fragmentShader: fa.meshtoon_frag,
    },
    matcap: {
      uniforms: js([
        ga.common,
        ga.bumpmap,
        ga.normalmap,
        ga.displacementmap,
        ga.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: fa.meshmatcap_vert,
      fragmentShader: fa.meshmatcap_frag,
    },
    points: {
      uniforms: js([ga.points, ga.fog]),
      vertexShader: fa.points_vert,
      fragmentShader: fa.points_frag,
    },
    dashed: {
      uniforms: js([
        ga.common,
        ga.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: fa.linedashed_vert,
      fragmentShader: fa.linedashed_frag,
    },
    depth: {
      uniforms: js([ga.common, ga.displacementmap]),
      vertexShader: fa.depth_vert,
      fragmentShader: fa.depth_frag,
    },
    normal: {
      uniforms: js([
        ga.common,
        ga.bumpmap,
        ga.normalmap,
        ga.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: fa.meshnormal_vert,
      fragmentShader: fa.meshnormal_frag,
    },
    sprite: {
      uniforms: js([ga.sprite, ga.fog]),
      vertexShader: fa.sprite_vert,
      fragmentShader: fa.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Qn() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: fa.background_vert,
      fragmentShader: fa.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Qn() },
      },
      vertexShader: fa.backgroundCube_vert,
      fragmentShader: fa.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: fa.cube_vert,
      fragmentShader: fa.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: fa.equirect_vert,
      fragmentShader: fa.equirect_frag,
    },
    distanceRGBA: {
      uniforms: js([
        ga.common,
        ga.displacementmap,
        {
          referencePosition: { value: new Pi() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: fa.distanceRGBA_vert,
      fragmentShader: fa.distanceRGBA_frag,
    },
    shadow: {
      uniforms: js([
        ga.lights,
        ga.fog,
        { color: { value: new Zr(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: fa.shadow_vert,
      fragmentShader: fa.shadow_frag,
    },
  };
va.physical = {
  uniforms: js([
    va.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Qn() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Qn() },
      clearcoatNormalScale: { value: new $n(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Qn() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Qn() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Qn() },
      sheen: { value: 0 },
      sheenColor: { value: new Zr(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Qn() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Qn() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Qn() },
      transmissionSamplerSize: { value: new $n() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Qn() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Zr(0) },
      specularColor: { value: new Zr(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Qn() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Qn() },
      anisotropyVector: { value: new $n() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Qn() },
    },
  ]),
  vertexShader: fa.meshphysical_vert,
  fragmentShader: fa.meshphysical_frag,
};
const _a = { r: 0, b: 0, g: 0 },
  xa = new gr(),
  ya = new ar();
function Ma(t, e, n, i, r, s, a) {
  const o = new Zr(0);
  let l,
    c,
    h = !0 === s ? 0 : 1,
    p = null,
    m = 0,
    f = null;
  function g(t) {
    let i = !0 === t.isScene ? t.background : null;
    if (i && i.isTexture) {
      i = (t.backgroundBlurriness > 0 ? n : e).get(i);
    }
    return i;
  }
  function v(e, n) {
    e.getRGB(_a, qs(t)), i.buffers.color.setClear(_a.r, _a.g, _a.b, n, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (t, e = 1) {
      o.set(t), (h = e), v(o, h);
    },
    getClearAlpha: function () {
      return h;
    },
    setClearAlpha: function (t) {
      (h = t), v(o, h);
    },
    render: function (e) {
      let n = !1;
      const r = g(e);
      null === r ? v(o, h) : r && r.isColor && (v(r, 1), (n = !0));
      const s = t.xr.getEnvironmentBlendMode();
      "additive" === s
        ? i.buffers.color.setClear(0, 0, 0, 1, a)
        : "alpha-blend" === s && i.buffers.color.setClear(0, 0, 0, 0, a),
        (t.autoClear || n) &&
          (i.buffers.depth.setTest(!0),
          i.buffers.depth.setMask(!0),
          i.buffers.color.setMask(!0),
          t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil));
    },
    addToRenderList: function (e, n) {
      const i = g(n);
      i && (i.isCubeTexture || i.mapping === dt)
        ? (void 0 === c &&
            ((c = new Hs(
              new Ws(1, 1, 1),
              new Zs({
                name: "BackgroundCubeMaterial",
                uniforms: Xs(va.backgroundCube.uniforms),
                vertexShader: va.backgroundCube.vertexShader,
                fragmentShader: va.backgroundCube.fragmentShader,
                side: d,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            c.geometry.deleteAttribute("uv"),
            (c.onBeforeRender = function (t, e, n) {
              this.matrixWorld.copyPosition(n.matrixWorld);
            }),
            Object.defineProperty(c.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(c)),
          xa.copy(n.backgroundRotation),
          (xa.x *= -1),
          (xa.y *= -1),
          (xa.z *= -1),
          i.isCubeTexture &&
            !1 === i.isRenderTargetTexture &&
            ((xa.y *= -1), (xa.z *= -1)),
          (c.material.uniforms.envMap.value = i),
          (c.material.uniforms.flipEnvMap.value =
            i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1),
          (c.material.uniforms.backgroundBlurriness.value =
            n.backgroundBlurriness),
          (c.material.uniforms.backgroundIntensity.value =
            n.backgroundIntensity),
          c.material.uniforms.backgroundRotation.value.setFromMatrix4(
            ya.makeRotationFromEuler(xa)
          ),
          (c.material.toneMapped = di.getTransfer(i.colorSpace) !== Qe),
          (p === i && m === i.version && f === t.toneMapping) ||
            ((c.material.needsUpdate = !0),
            (p = i),
            (m = i.version),
            (f = t.toneMapping)),
          c.layers.enableAll(),
          e.unshift(c, c.geometry, c.material, 0, 0, null))
        : i &&
          i.isTexture &&
          (void 0 === l &&
            ((l = new Hs(
              new ma(2, 2),
              new Zs({
                name: "BackgroundMaterial",
                uniforms: Xs(va.background.uniforms),
                vertexShader: va.background.vertexShader,
                fragmentShader: va.background.fragmentShader,
                side: u,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(l)),
          (l.material.uniforms.t2D.value = i),
          (l.material.uniforms.backgroundIntensity.value =
            n.backgroundIntensity),
          (l.material.toneMapped = di.getTransfer(i.colorSpace) !== Qe),
          !0 === i.matrixAutoUpdate && i.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(i.matrix),
          (p === i && m === i.version && f === t.toneMapping) ||
            ((l.material.needsUpdate = !0),
            (p = i),
            (m = i.version),
            (f = t.toneMapping)),
          l.layers.enableAll(),
          e.unshift(l, l.geometry, l.material, 0, 0, null));
    },
  };
}
function Sa(t, e) {
  const n = t.getParameter(t.MAX_VERTEX_ATTRIBS),
    i = {},
    r = c(null);
  let s = r,
    a = !1;
  function o(e) {
    return t.bindVertexArray(e);
  }
  function l(e) {
    return t.deleteVertexArray(e);
  }
  function c(t) {
    const e = [],
      i = [],
      r = [];
    for (let t = 0; t < n; t++) (e[t] = 0), (i[t] = 0), (r[t] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: e,
      enabledAttributes: i,
      attributeDivisors: r,
      object: t,
      attributes: {},
      index: null,
    };
  }
  function h() {
    const t = s.newAttributes;
    for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
  }
  function u(t) {
    d(t, 0);
  }
  function d(e, n) {
    const i = s.newAttributes,
      r = s.enabledAttributes,
      a = s.attributeDivisors;
    (i[e] = 1),
      0 === r[e] && (t.enableVertexAttribArray(e), (r[e] = 1)),
      a[e] !== n && (t.vertexAttribDivisor(e, n), (a[e] = n));
  }
  function p() {
    const e = s.newAttributes,
      n = s.enabledAttributes;
    for (let i = 0, r = n.length; i < r; i++)
      n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
  }
  function m(e, n, i, r, s, a, o) {
    !0 === o
      ? t.vertexAttribIPointer(e, n, i, s, a)
      : t.vertexAttribPointer(e, n, i, r, s, a);
  }
  function f() {
    g(), (a = !0), s !== r && ((s = r), o(s.object));
  }
  function g() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: function (n, r, l, f, g) {
      let v = !1;
      const _ = (function (e, n, r) {
        const s = !0 === r.wireframe;
        let a = i[e.id];
        void 0 === a && ((a = {}), (i[e.id] = a));
        let o = a[n.id];
        void 0 === o && ((o = {}), (a[n.id] = o));
        let l = o[s];
        void 0 === l && ((l = c(t.createVertexArray())), (o[s] = l));
        return l;
      })(f, l, r);
      s !== _ && ((s = _), o(s.object)),
        (v = (function (t, e, n, i) {
          const r = s.attributes,
            a = e.attributes;
          let o = 0;
          const l = n.getAttributes();
          for (const e in l) {
            if (l[e].location >= 0) {
              const n = r[e];
              let i = a[e];
              if (
                (void 0 === i &&
                  ("instanceMatrix" === e &&
                    t.instanceMatrix &&
                    (i = t.instanceMatrix),
                  "instanceColor" === e &&
                    t.instanceColor &&
                    (i = t.instanceColor)),
                void 0 === n)
              )
                return !0;
              if (n.attribute !== i) return !0;
              if (i && n.data !== i.data) return !0;
              o++;
            }
          }
          return s.attributesNum !== o || s.index !== i;
        })(n, f, l, g)),
        v &&
          (function (t, e, n, i) {
            const r = {},
              a = e.attributes;
            let o = 0;
            const l = n.getAttributes();
            for (const e in l) {
              if (l[e].location >= 0) {
                let n = a[e];
                void 0 === n &&
                  ("instanceMatrix" === e &&
                    t.instanceMatrix &&
                    (n = t.instanceMatrix),
                  "instanceColor" === e &&
                    t.instanceColor &&
                    (n = t.instanceColor));
                const i = {};
                (i.attribute = n),
                  n && n.data && (i.data = n.data),
                  (r[e] = i),
                  o++;
              }
            }
            (s.attributes = r), (s.attributesNum = o), (s.index = i);
          })(n, f, l, g),
        null !== g && e.update(g, t.ELEMENT_ARRAY_BUFFER),
        (v || a) &&
          ((a = !1),
          (function (n, i, r, s) {
            h();
            const a = s.attributes,
              o = r.getAttributes(),
              l = i.defaultAttributeValues;
            for (const i in o) {
              const r = o[i];
              if (r.location >= 0) {
                let o = a[i];
                if (
                  (void 0 === o &&
                    ("instanceMatrix" === i &&
                      n.instanceMatrix &&
                      (o = n.instanceMatrix),
                    "instanceColor" === i &&
                      n.instanceColor &&
                      (o = n.instanceColor)),
                  void 0 !== o)
                ) {
                  const i = o.normalized,
                    a = o.itemSize,
                    l = e.get(o);
                  if (void 0 === l) continue;
                  const c = l.buffer,
                    h = l.type,
                    p = l.bytesPerElement,
                    f = h === t.INT || h === t.UNSIGNED_INT || o.gpuType === Pt;
                  if (o.isInterleavedBufferAttribute) {
                    const e = o.data,
                      l = e.stride,
                      g = o.offset;
                    if (e.isInstancedInterleavedBuffer) {
                      for (let t = 0; t < r.locationSize; t++)
                        d(r.location + t, e.meshPerAttribute);
                      !0 !== n.isInstancedMesh &&
                        void 0 === s._maxInstanceCount &&
                        (s._maxInstanceCount = e.meshPerAttribute * e.count);
                    } else
                      for (let t = 0; t < r.locationSize; t++)
                        u(r.location + t);
                    t.bindBuffer(t.ARRAY_BUFFER, c);
                    for (let t = 0; t < r.locationSize; t++)
                      m(
                        r.location + t,
                        a / r.locationSize,
                        h,
                        i,
                        l * p,
                        (g + (a / r.locationSize) * t) * p,
                        f
                      );
                  } else {
                    if (o.isInstancedBufferAttribute) {
                      for (let t = 0; t < r.locationSize; t++)
                        d(r.location + t, o.meshPerAttribute);
                      !0 !== n.isInstancedMesh &&
                        void 0 === s._maxInstanceCount &&
                        (s._maxInstanceCount = o.meshPerAttribute * o.count);
                    } else
                      for (let t = 0; t < r.locationSize; t++)
                        u(r.location + t);
                    t.bindBuffer(t.ARRAY_BUFFER, c);
                    for (let t = 0; t < r.locationSize; t++)
                      m(
                        r.location + t,
                        a / r.locationSize,
                        h,
                        i,
                        a * p,
                        (a / r.locationSize) * t * p,
                        f
                      );
                  }
                } else if (void 0 !== l) {
                  const e = l[i];
                  if (void 0 !== e)
                    switch (e.length) {
                      case 2:
                        t.vertexAttrib2fv(r.location, e);
                        break;
                      case 3:
                        t.vertexAttrib3fv(r.location, e);
                        break;
                      case 4:
                        t.vertexAttrib4fv(r.location, e);
                        break;
                      default:
                        t.vertexAttrib1fv(r.location, e);
                    }
                }
              }
            }
            p();
          })(n, r, l, f),
          null !== g && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e.get(g).buffer));
    },
    reset: f,
    resetDefaultState: g,
    dispose: function () {
      f();
      for (const t in i) {
        const e = i[t];
        for (const t in e) {
          const n = e[t];
          for (const t in n) l(n[t].object), delete n[t];
          delete e[t];
        }
        delete i[t];
      }
    },
    releaseStatesOfGeometry: function (t) {
      if (void 0 === i[t.id]) return;
      const e = i[t.id];
      for (const t in e) {
        const n = e[t];
        for (const t in n) l(n[t].object), delete n[t];
        delete e[t];
      }
      delete i[t.id];
    },
    releaseStatesOfProgram: function (t) {
      for (const e in i) {
        const n = i[e];
        if (void 0 === n[t.id]) continue;
        const r = n[t.id];
        for (const t in r) l(r[t].object), delete r[t];
        delete n[t.id];
      }
    },
    initAttributes: h,
    enableAttribute: u,
    disableUnusedAttributes: p,
  };
}
function ba(t, e, n) {
  let i;
  function r(e, r, s) {
    0 !== s && (t.drawArraysInstanced(i, e, r, s), n.update(r, i, s));
  }
  (this.setMode = function (t) {
    i = t;
  }),
    (this.render = function (e, r) {
      t.drawArrays(i, e, r), n.update(r, i, 1);
    }),
    (this.renderInstances = r),
    (this.renderMultiDraw = function (t, r, s) {
      if (0 === s) return;
      e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, t, 0, r, 0, s);
      let a = 0;
      for (let t = 0; t < s; t++) a += r[t];
      n.update(a, i, 1);
    }),
    (this.renderMultiDrawInstances = function (t, s, a, o) {
      if (0 === a) return;
      const l = e.get("WEBGL_multi_draw");
      if (null === l) for (let e = 0; e < t.length; e++) r(t[e], s[e], o[e]);
      else {
        l.multiDrawArraysInstancedWEBGL(i, t, 0, s, 0, o, 0, a);
        let e = 0;
        for (let t = 0; t < a; t++) e += s[t];
        for (let t = 0; t < o.length; t++) n.update(e, i, o[t]);
      }
    });
}
function wa(t, e, n, i) {
  let r;
  function s(e) {
    if ("highp" === e) {
      if (
        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision >
          0 &&
        t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      e = "mediump";
    }
    return "mediump" === e &&
      t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision >
        0 &&
      t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let a = void 0 !== n.precision ? n.precision : "highp";
  const o = s(a);
  o !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      o,
      "instead."
    ),
    (a = o));
  const l = !0 === n.logarithmicDepthBuffer,
    c = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
    h = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: function () {
      if (void 0 !== r) return r;
      if (!0 === e.has("EXT_texture_filter_anisotropic")) {
        const n = e.get("EXT_texture_filter_anisotropic");
        r = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else r = 0;
      return r;
    },
    getMaxPrecision: s,
    textureFormatReadable: function (e) {
      return (
        e === kt ||
        i.convert(e) === t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)
      );
    },
    textureTypeReadable: function (n) {
      const r =
        n === Ut &&
        (e.has("EXT_color_buffer_half_float") ||
          e.has("EXT_color_buffer_float"));
      return !(
        n !== Et &&
        i.convert(n) !== t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE) &&
        n !== Lt &&
        !r
      );
    },
    precision: a,
    logarithmicDepthBuffer: l,
    maxTextures: c,
    maxVertexTextures: h,
    maxTextureSize: t.getParameter(t.MAX_TEXTURE_SIZE),
    maxCubemapSize: t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
    maxAttributes: t.getParameter(t.MAX_VERTEX_ATTRIBS),
    maxVertexUniforms: t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
    maxVaryings: t.getParameter(t.MAX_VARYING_VECTORS),
    maxFragmentUniforms: t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
    vertexTextures: h > 0,
    maxSamples: t.getParameter(t.MAX_SAMPLES),
  };
}
function Ta(t) {
  const e = this;
  let n = null,
    i = 0,
    r = !1,
    s = !1;
  const a = new la(),
    o = new Qn(),
    l = { value: null, needsUpdate: !1 };
  function c(t, n, i, r) {
    const s = null !== t ? t.length : 0;
    let c = null;
    if (0 !== s) {
      if (((c = l.value), !0 !== r || null === c)) {
        const e = i + 4 * s,
          r = n.matrixWorldInverse;
        o.getNormalMatrix(r),
          (null === c || c.length < e) && (c = new Float32Array(e));
        for (let e = 0, n = i; e !== s; ++e, n += 4)
          a.copy(t[e]).applyMatrix4(r, o),
            a.normal.toArray(c, n),
            (c[n + 3] = a.constant);
      }
      (l.value = c), (l.needsUpdate = !0);
    }
    return (e.numPlanes = s), (e.numIntersection = 0), c;
  }
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (t, e) {
      const n = 0 !== t.length || e || 0 !== i || r;
      return (r = e), (i = t.length), n;
    }),
    (this.beginShadows = function () {
      (s = !0), c(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (t, e) {
      n = c(t, e, 0);
    }),
    (this.setState = function (a, o, h) {
      const u = a.clippingPlanes,
        d = a.clipIntersection,
        p = a.clipShadows,
        m = t.get(a);
      if (!r || null === u || 0 === u.length || (s && !p))
        s
          ? c(null)
          : (function () {
              l.value !== n && ((l.value = n), (l.needsUpdate = i > 0));
              (e.numPlanes = i), (e.numIntersection = 0);
            })();
      else {
        const t = s ? 0 : i,
          e = 4 * t;
        let r = m.clippingState || null;
        (l.value = r), (r = c(u, o, e, h));
        for (let t = 0; t !== e; ++t) r[t] = n[t];
        (m.clippingState = r),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += t);
      }
    });
}
function Ea(t) {
  let e = new WeakMap();
  function n(t, e) {
    return e === ht ? (t.mapping = lt) : e === ut && (t.mapping = ct), t;
  }
  function i(t) {
    const n = t.target;
    n.removeEventListener("dispose", i);
    const r = e.get(n);
    void 0 !== r && (e.delete(n), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        const s = r.mapping;
        if (s === ht || s === ut) {
          if (e.has(r)) {
            return n(e.get(r).texture, r.mapping);
          }
          {
            const s = r.image;
            if (s && s.height > 0) {
              const a = new ra(s.height);
              return (
                a.fromEquirectangularTexture(t, r),
                e.set(r, a),
                r.addEventListener("dispose", i),
                n(a.texture, r.mapping)
              );
            }
            return null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
class Aa extends Js {
  constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = t),
      (this.right = e),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = s),
      this.updateProjectionMatrix();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.left = t.left),
      (this.right = t.right),
      (this.top = t.top),
      (this.bottom = t.bottom),
      (this.near = t.near),
      (this.far = t.far),
      (this.zoom = t.zoom),
      (this.view = null === t.view ? null : Object.assign({}, t.view)),
      this
    );
  }
  setViewOffset(t, e, n, i, r, s) {
    null === this.view &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = s),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom),
      e = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - t,
      s = n + t,
      a = i + e,
      o = i - e;
    if (null !== this.view && this.view.enabled) {
      const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
        e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += t * this.view.offsetX),
        (s = r + t * this.view.width),
        (a -= e * this.view.offsetY),
        (o = a - e * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      r,
      s,
      a,
      o,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.zoom = this.zoom),
      (e.object.left = this.left),
      (e.object.right = this.right),
      (e.object.top = this.top),
      (e.object.bottom = this.bottom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      null !== this.view && (e.object.view = Object.assign({}, this.view)),
      e
    );
  }
}
const Ra = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Ca = 20,
  Pa = new Aa(),
  Ia = new Zr();
let La = null,
  Ua = 0,
  Na = 0,
  Da = !1;
const Oa = (1 + Math.sqrt(5)) / 2,
  Fa = 1 / Oa,
  Ba = [
    new Pi(-Oa, Fa, 0),
    new Pi(Oa, Fa, 0),
    new Pi(-Fa, 0, Oa),
    new Pi(Fa, 0, Oa),
    new Pi(0, Oa, -Fa),
    new Pi(0, Oa, Fa),
    new Pi(-1, 1, -1),
    new Pi(1, 1, -1),
    new Pi(-1, 1, 1),
    new Pi(1, 1, 1),
  ];
class za {
  constructor(t) {
    (this._renderer = t),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, n = 0.1, i = 100) {
    (La = this._renderer.getRenderTarget()),
      (Ua = this._renderer.getActiveCubeFace()),
      (Na = this._renderer.getActiveMipmapLevel()),
      (Da = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(t, n, i, r),
      e > 0 && this._blur(r, 0, 0, e),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    null === this._cubemapMaterial &&
      ((this._cubemapMaterial = Ga()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    null === this._equirectMaterial &&
      ((this._equirectMaterial = Ha()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
      null !== this._equirectMaterial && this._equirectMaterial.dispose();
  }
  _setSize(t) {
    (this._lodMax = Math.floor(Math.log2(t))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    null !== this._blurMaterial && this._blurMaterial.dispose(),
      null !== this._pingPongRenderTarget &&
        this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(La, Ua, Na),
      (this._renderer.xr.enabled = Da),
      (t.scissorTest = !1),
      Va(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === lt || t.mapping === ct
      ? this._setSize(
          0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width
        )
      : this._setSize(t.image.width / 4),
      (La = this._renderer.getRenderTarget()),
      (Ua = this._renderer.getActiveCubeFace()),
      (Na = this._renderer.getActiveMipmapLevel()),
      (Da = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = e || this._allocateTargets();
    return (
      this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112),
      e = 4 * this._cubeSize,
      n = {
        magFilter: Mt,
        minFilter: Mt,
        generateMipmaps: !1,
        type: Ut,
        format: kt,
        colorSpace: Ze,
        depthBuffer: !1,
      },
      i = ka(t, e, n);
    if (
      null === this._pingPongRenderTarget ||
      this._pingPongRenderTarget.width !== t ||
      this._pingPongRenderTarget.height !== e
    ) {
      null !== this._pingPongRenderTarget && this._dispose(),
        (this._pingPongRenderTarget = ka(t, e, n));
      const { _lodMax: i } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = (function (t) {
        const e = [],
          n = [],
          i = [];
        let r = t;
        const s = t - 4 + 1 + Ra.length;
        for (let a = 0; a < s; a++) {
          const s = Math.pow(2, r);
          n.push(s);
          let o = 1 / s;
          a > t - 4 ? (o = Ra[a - t + 4 - 1]) : 0 === a && (o = 0), i.push(o);
          const l = 1 / (s - 2),
            c = -l,
            h = 1 + l,
            u = [c, c, h, c, h, h, c, c, h, h, c, h],
            d = 6,
            p = 6,
            m = 3,
            f = 2,
            g = 1,
            v = new Float32Array(m * p * d),
            _ = new Float32Array(f * p * d),
            x = new Float32Array(g * p * d);
          for (let t = 0; t < d; t++) {
            const e = ((t % 3) * 2) / 3 - 1,
              n = t > 2 ? 0 : -1,
              i = [
                e,
                n,
                0,
                e + 2 / 3,
                n,
                0,
                e + 2 / 3,
                n + 1,
                0,
                e,
                n,
                0,
                e + 2 / 3,
                n + 1,
                0,
                e,
                n + 1,
                0,
              ];
            v.set(i, m * p * t), _.set(u, f * p * t);
            const r = [t, t, t, t, t, t];
            x.set(r, g * p * t);
          }
          const y = new ws();
          y.setAttribute("position", new os(v, m)),
            y.setAttribute("uv", new os(_, f)),
            y.setAttribute("faceIndex", new os(x, g)),
            e.push(y),
            r > 4 && r--;
        }
        return { lodPlanes: e, sizeLods: n, sigmas: i };
      })(i)),
        (this._blurMaterial = (function (t, e, n) {
          const i = new Float32Array(Ca),
            r = new Pi(0, 1, 0),
            s = new Zs({
              name: "SphericalGaussianBlur",
              defines: {
                n: Ca,
                CUBEUV_TEXEL_WIDTH: 1 / e,
                CUBEUV_TEXEL_HEIGHT: 1 / n,
                CUBEUV_MAX_MIP: `${t}.0`,
              },
              uniforms: {
                envMap: { value: null },
                samples: { value: 1 },
                weights: { value: i },
                latitudinal: { value: !1 },
                dTheta: { value: 0 },
                mipInt: { value: 0 },
                poleAxis: { value: r },
              },
              vertexShader: Wa(),
              fragmentShader:
                "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
              blending: 0,
              depthTest: !1,
              depthWrite: !1,
            });
          return s;
        })(i, t, e));
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new Hs(this._lodPlanes[0], t);
    this._renderer.compile(e, Pa);
  }
  _sceneToCubeUV(t, e, n, i) {
    const r = new ta(90, 1, e, n),
      s = [1, -1, 1, 1, 1, 1],
      a = [1, 1, 1, -1, -1, -1],
      o = this._renderer,
      l = o.autoClear,
      c = o.toneMapping;
    o.getClearColor(Ia), (o.toneMapping = K), (o.autoClear = !1);
    const h = new Qr({
        name: "PMREM.Background",
        side: d,
        depthWrite: !1,
        depthTest: !1,
      }),
      u = new Hs(new Ws(), h);
    let p = !1;
    const m = t.background;
    m
      ? m.isColor && (h.color.copy(m), (t.background = null), (p = !0))
      : (h.color.copy(Ia), (p = !0));
    for (let e = 0; e < 6; e++) {
      const n = e % 3;
      0 === n
        ? (r.up.set(0, s[e], 0), r.lookAt(a[e], 0, 0))
        : 1 === n
        ? (r.up.set(0, 0, s[e]), r.lookAt(0, a[e], 0))
        : (r.up.set(0, s[e], 0), r.lookAt(0, 0, a[e]));
      const l = this._cubeSize;
      Va(i, n * l, e > 2 ? l : 0, l, l),
        o.setRenderTarget(i),
        p && o.render(u, r),
        o.render(t, r);
    }
    u.geometry.dispose(),
      u.material.dispose(),
      (o.toneMapping = c),
      (o.autoClear = l),
      (t.background = m);
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer,
      i = t.mapping === lt || t.mapping === ct;
    i
      ? (null === this._cubemapMaterial && (this._cubemapMaterial = Ga()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          !1 === t.isRenderTargetTexture ? -1 : 1))
      : null === this._equirectMaterial && (this._equirectMaterial = Ha());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      s = new Hs(this._lodPlanes[0], r);
    r.uniforms.envMap.value = t;
    const a = this._cubeSize;
    Va(e, 0, 0, 3 * a, 2 * a), n.setRenderTarget(e), n.render(s, Pa);
  }
  _applyPMREM(t) {
    const e = this._renderer,
      n = e.autoClear;
    e.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let e = 1; e < i; e++) {
      const n = Math.sqrt(
          this._sigmas[e] * this._sigmas[e] -
            this._sigmas[e - 1] * this._sigmas[e - 1]
        ),
        r = Ba[(i - e - 1) % Ba.length];
      this._blur(t, e - 1, e, n, r);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, i, r) {
    const s = this._pingPongRenderTarget;
    this._halfBlur(t, s, e, n, i, "latitudinal", r),
      this._halfBlur(s, t, n, n, i, "longitudinal", r);
  }
  _halfBlur(t, e, n, i, r, s, a) {
    const o = this._renderer,
      l = this._blurMaterial;
    "latitudinal" !== s &&
      "longitudinal" !== s &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const c = new Hs(this._lodPlanes[i], l),
      h = l.uniforms,
      u = this._sizeLods[n] - 1,
      d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
      p = r / d,
      m = isFinite(r) ? 1 + Math.floor(3 * p) : Ca;
    m > Ca &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`
      );
    const f = [];
    let g = 0;
    for (let t = 0; t < Ca; ++t) {
      const e = t / p,
        n = Math.exp((-e * e) / 2);
      f.push(n), 0 === t ? (g += n) : t < m && (g += 2 * n);
    }
    for (let t = 0; t < f.length; t++) f[t] = f[t] / g;
    (h.envMap.value = t.texture),
      (h.samples.value = m),
      (h.weights.value = f),
      (h.latitudinal.value = "latitudinal" === s),
      a && (h.poleAxis.value = a);
    const { _lodMax: v } = this;
    (h.dTheta.value = d), (h.mipInt.value = v - n);
    const _ = this._sizeLods[i];
    Va(
      e,
      3 * _ * (i > v - 4 ? i - v + 4 : 0),
      4 * (this._cubeSize - _),
      3 * _,
      2 * _
    ),
      o.setRenderTarget(e),
      o.render(c, Pa);
  }
}
function ka(t, e, n) {
  const i = new wi(t, e, n);
  return (
    (i.texture.mapping = dt),
    (i.texture.name = "PMREM.cubeUv"),
    (i.scissorTest = !0),
    i
  );
}
function Va(t, e, n, i, r) {
  t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
}
function Ha() {
  return new Zs({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Wa(),
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ga() {
  return new Zs({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Wa(),
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Wa() {
  return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
}
function Xa(t) {
  let e = new WeakMap(),
    n = null;
  function i(t) {
    const n = t.target;
    n.removeEventListener("dispose", i);
    const r = e.get(n);
    void 0 !== r && (e.delete(n), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        const s = r.mapping,
          a = s === ht || s === ut,
          o = s === lt || s === ct;
        if (a || o) {
          let s = e.get(r);
          const l = void 0 !== s ? s.texture.pmremVersion : 0;
          if (r.isRenderTargetTexture && r.pmremVersion !== l)
            return (
              null === n && (n = new za(t)),
              (s = a ? n.fromEquirectangular(r, s) : n.fromCubemap(r, s)),
              (s.texture.pmremVersion = r.pmremVersion),
              e.set(r, s),
              s.texture
            );
          if (void 0 !== s) return s.texture;
          {
            const l = r.image;
            return (a && l && l.height > 0) ||
              (o &&
                l &&
                (function (t) {
                  let e = 0;
                  const n = 6;
                  for (let i = 0; i < n; i++) void 0 !== t[i] && e++;
                  return e === n;
                })(l))
              ? (null === n && (n = new za(t)),
                (s = a ? n.fromEquirectangular(r) : n.fromCubemap(r)),
                (s.texture.pmremVersion = r.pmremVersion),
                e.set(r, s),
                r.addEventListener("dispose", i),
                s.texture)
              : null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      (e = new WeakMap()), null !== n && (n.dispose(), (n = null));
    },
  };
}
function ja(t) {
  const e = {};
  function n(n) {
    if (void 0 !== e[n]) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          t.getExtension("WEBGL_depth_texture") ||
          t.getExtension("MOZ_WEBGL_depth_texture") ||
          t.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          t.getExtension("EXT_texture_filter_anisotropic") ||
          t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          t.getExtension("WEBGL_compressed_texture_s3tc") ||
          t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          t.getExtension("WEBGL_compressed_texture_pvrtc") ||
          t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = t.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (t) {
      return null !== n(t);
    },
    init: function () {
      n("EXT_color_buffer_float"),
        n("WEBGL_clip_cull_distance"),
        n("OES_texture_float_linear"),
        n("EXT_color_buffer_half_float"),
        n("WEBGL_multisampled_render_to_texture"),
        n("WEBGL_render_shared_exponent");
    },
    get: function (t) {
      const e = n(t);
      return (
        null === e &&
          oi("THREE.WebGLRenderer: " + t + " extension not supported."),
        e
      );
    },
  };
}
function qa(t, e, n, i) {
  const r = {},
    s = new WeakMap();
  function a(t) {
    const o = t.target;
    null !== o.index && e.remove(o.index);
    for (const t in o.attributes) e.remove(o.attributes[t]);
    for (const t in o.morphAttributes) {
      const n = o.morphAttributes[t];
      for (let t = 0, i = n.length; t < i; t++) e.remove(n[t]);
    }
    o.removeEventListener("dispose", a), delete r[o.id];
    const l = s.get(o);
    l && (e.remove(l), s.delete(o)),
      i.releaseStatesOfGeometry(o),
      !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
      n.memory.geometries--;
  }
  function o(t) {
    const n = [],
      i = t.index,
      r = t.attributes.position;
    let a = 0;
    if (null !== i) {
      const t = i.array;
      a = i.version;
      for (let e = 0, i = t.length; e < i; e += 3) {
        const i = t[e + 0],
          r = t[e + 1],
          s = t[e + 2];
        n.push(i, r, r, s, s, i);
      }
    } else {
      if (void 0 === r) return;
      {
        const t = r.array;
        a = r.version;
        for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
          const t = e + 0,
            i = e + 1,
            r = e + 2;
          n.push(t, i, i, r, r, t);
        }
      }
    }
    const o = new (ei(n) ? ms : ds)(n, 1);
    o.version = a;
    const l = s.get(t);
    l && e.remove(l), s.set(t, o);
  }
  return {
    get: function (t, e) {
      return (
        !0 === r[e.id] ||
          (e.addEventListener("dispose", a),
          (r[e.id] = !0),
          n.memory.geometries++),
        e
      );
    },
    update: function (n) {
      const i = n.attributes;
      for (const n in i) e.update(i[n], t.ARRAY_BUFFER);
      const r = n.morphAttributes;
      for (const n in r) {
        const i = r[n];
        for (let n = 0, r = i.length; n < r; n++)
          e.update(i[n], t.ARRAY_BUFFER);
      }
    },
    getWireframeAttribute: function (t) {
      const e = s.get(t);
      if (e) {
        const n = t.index;
        null !== n && e.version < n.version && o(t);
      } else o(t);
      return s.get(t);
    },
  };
}
function Ya(t, e, n) {
  let i, r, s;
  function a(e, a, o) {
    0 !== o && (t.drawElementsInstanced(i, a, r, e * s, o), n.update(a, i, o));
  }
  (this.setMode = function (t) {
    i = t;
  }),
    (this.setIndex = function (t) {
      (r = t.type), (s = t.bytesPerElement);
    }),
    (this.render = function (e, a) {
      t.drawElements(i, a, r, e * s), n.update(a, i, 1);
    }),
    (this.renderInstances = a),
    (this.renderMultiDraw = function (t, s, a) {
      if (0 === a) return;
      e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, s, 0, r, t, 0, a);
      let o = 0;
      for (let t = 0; t < a; t++) o += s[t];
      n.update(o, i, 1);
    }),
    (this.renderMultiDrawInstances = function (t, o, l, c) {
      if (0 === l) return;
      const h = e.get("WEBGL_multi_draw");
      if (null === h)
        for (let e = 0; e < t.length; e++) a(t[e] / s, o[e], c[e]);
      else {
        h.multiDrawElementsInstancedWEBGL(i, o, 0, r, t, 0, c, 0, l);
        let e = 0;
        for (let t = 0; t < l; t++) e += o[t];
        for (let t = 0; t < c.length; t++) n.update(e, i, c[t]);
      }
    });
}
function Za(t) {
  const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return {
    memory: { geometries: 0, textures: 0 },
    render: e,
    programs: null,
    autoReset: !0,
    reset: function () {
      (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
    },
    update: function (n, i, r) {
      switch ((e.calls++, i)) {
        case t.TRIANGLES:
          e.triangles += r * (n / 3);
          break;
        case t.LINES:
          e.lines += r * (n / 2);
          break;
        case t.LINE_STRIP:
          e.lines += r * (n - 1);
          break;
        case t.LINE_LOOP:
          e.lines += r * n;
          break;
        case t.POINTS:
          e.points += r * n;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", i);
      }
    },
  };
}
function Ja(t, e, n) {
  const i = new WeakMap(),
    r = new Si();
  return {
    update: function (s, a, o) {
      const l = s.morphTargetInfluences,
        c =
          a.morphAttributes.position ||
          a.morphAttributes.normal ||
          a.morphAttributes.color,
        h = void 0 !== c ? c.length : 0;
      let u = i.get(a);
      if (void 0 === u || u.count !== h) {
        void 0 !== u && u.texture.dispose();
        const d = void 0 !== a.morphAttributes.position,
          p = void 0 !== a.morphAttributes.normal,
          m = void 0 !== a.morphAttributes.color,
          f = a.morphAttributes.position || [],
          g = a.morphAttributes.normal || [],
          v = a.morphAttributes.color || [];
        let _ = 0;
        !0 === d && (_ = 1), !0 === p && (_ = 2), !0 === m && (_ = 3);
        let x = a.attributes.position.count * _,
          y = 1;
        x > e.maxTextureSize &&
          ((y = Math.ceil(x / e.maxTextureSize)), (x = e.maxTextureSize));
        const M = new Float32Array(x * y * 4 * h),
          S = new Ti(M, x, y, h);
        (S.type = Lt), (S.needsUpdate = !0);
        const b = 4 * _;
        for (let T = 0; T < h; T++) {
          const E = f[T],
            A = g[T],
            R = v[T],
            C = x * y * 4 * T;
          for (let P = 0; P < E.count; P++) {
            const I = P * b;
            !0 === d &&
              (r.fromBufferAttribute(E, P),
              (M[C + I + 0] = r.x),
              (M[C + I + 1] = r.y),
              (M[C + I + 2] = r.z),
              (M[C + I + 3] = 0)),
              !0 === p &&
                (r.fromBufferAttribute(A, P),
                (M[C + I + 4] = r.x),
                (M[C + I + 5] = r.y),
                (M[C + I + 6] = r.z),
                (M[C + I + 7] = 0)),
              !0 === m &&
                (r.fromBufferAttribute(R, P),
                (M[C + I + 8] = r.x),
                (M[C + I + 9] = r.y),
                (M[C + I + 10] = r.z),
                (M[C + I + 11] = 4 === R.itemSize ? r.w : 1));
          }
        }
        function w() {
          S.dispose(), i.delete(a), a.removeEventListener("dispose", w);
        }
        (u = { count: h, texture: S, size: new $n(x, y) }),
          i.set(a, u),
          a.addEventListener("dispose", w);
      }
      if (!0 === s.isInstancedMesh && null !== s.morphTexture)
        o.getUniforms().setValue(t, "morphTexture", s.morphTexture, n);
      else {
        let L = 0;
        for (let N = 0; N < l.length; N++) L += l[N];
        const U = a.morphTargetsRelative ? 1 : 1 - L;
        o.getUniforms().setValue(t, "morphTargetBaseInfluence", U),
          o.getUniforms().setValue(t, "morphTargetInfluences", l);
      }
      o.getUniforms().setValue(t, "morphTargetsTexture", u.texture, n),
        o.getUniforms().setValue(t, "morphTargetsTextureSize", u.size);
    },
  };
}
function Ka(t, e, n, i) {
  let r = new WeakMap();
  function s(t) {
    const e = t.target;
    e.removeEventListener("dispose", s),
      n.remove(e.instanceMatrix),
      null !== e.instanceColor && n.remove(e.instanceColor);
  }
  return {
    update: function (a) {
      const o = i.render.frame,
        l = a.geometry,
        c = e.get(a, l);
      if (
        (r.get(c) !== o && (e.update(c), r.set(c, o)),
        a.isInstancedMesh &&
          (!1 === a.hasEventListener("dispose", s) &&
            a.addEventListener("dispose", s),
          r.get(a) !== o &&
            (n.update(a.instanceMatrix, t.ARRAY_BUFFER),
            null !== a.instanceColor &&
              n.update(a.instanceColor, t.ARRAY_BUFFER),
            r.set(a, o))),
        a.isSkinnedMesh)
      ) {
        const t = a.skeleton;
        r.get(t) !== o && (t.update(), r.set(t, o));
      }
      return c;
    },
    dispose: function () {
      r = new WeakMap();
    },
  };
}
class $a extends Mi {
  constructor(t, e, n, i, r, s, a, o, l, c = 1026) {
    if (c !== Gt && c !== Wt)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === n && c === Gt && (n = It),
      void 0 === n && c === Wt && (n = Ot),
      super(null, i, r, s, a, o, c, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: t, height: e }),
      (this.magFilter = void 0 !== a ? a : gt),
      (this.minFilter = void 0 !== o ? o : gt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(t) {
    return super.copy(t), (this.compareFunction = t.compareFunction), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      null !== this.compareFunction &&
        (e.compareFunction = this.compareFunction),
      e
    );
  }
}
const Qa = new Mi(),
  to = new $a(1, 1),
  eo = new Ti(),
  no = new Ai(),
  io = new ia(),
  ro = [],
  so = [],
  ao = new Float32Array(16),
  oo = new Float32Array(9),
  lo = new Float32Array(4);
function co(t, e, n) {
  const i = t[0];
  if (i <= 0 || i > 0) return t;
  const r = e * n;
  let s = ro[r];
  if ((void 0 === s && ((s = new Float32Array(r)), (ro[r] = s)), 0 !== e)) {
    i.toArray(s, 0);
    for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(s, r);
  }
  return s;
}
function ho(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function uo(t, e) {
  for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
}
function po(t, e) {
  let n = so[e];
  void 0 === n && ((n = new Int32Array(e)), (so[e] = n));
  for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
  return n;
}
function mo(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
}
function fo(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y) ||
      (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (ho(n, e)) return;
    t.uniform2fv(this.addr, e), uo(n, e);
  }
}
function go(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
      (t.uniform3f(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else if (void 0 !== e.r)
    (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
      (t.uniform3f(this.addr, e.r, e.g, e.b),
      (n[0] = e.r),
      (n[1] = e.g),
      (n[2] = e.b));
  else {
    if (ho(n, e)) return;
    t.uniform3fv(this.addr, e), uo(n, e);
  }
}
function vo(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
      (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (ho(n, e)) return;
    t.uniform4fv(this.addr, e), uo(n, e);
  }
}
function _o(t, e) {
  const n = this.cache,
    i = e.elements;
  if (void 0 === i) {
    if (ho(n, e)) return;
    t.uniformMatrix2fv(this.addr, !1, e), uo(n, e);
  } else {
    if (ho(n, i)) return;
    lo.set(i), t.uniformMatrix2fv(this.addr, !1, lo), uo(n, i);
  }
}
function xo(t, e) {
  const n = this.cache,
    i = e.elements;
  if (void 0 === i) {
    if (ho(n, e)) return;
    t.uniformMatrix3fv(this.addr, !1, e), uo(n, e);
  } else {
    if (ho(n, i)) return;
    oo.set(i), t.uniformMatrix3fv(this.addr, !1, oo), uo(n, i);
  }
}
function yo(t, e) {
  const n = this.cache,
    i = e.elements;
  if (void 0 === i) {
    if (ho(n, e)) return;
    t.uniformMatrix4fv(this.addr, !1, e), uo(n, e);
  } else {
    if (ho(n, i)) return;
    ao.set(i), t.uniformMatrix4fv(this.addr, !1, ao), uo(n, i);
  }
}
function Mo(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
}
function So(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y) ||
      (t.uniform2i(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (ho(n, e)) return;
    t.uniform2iv(this.addr, e), uo(n, e);
  }
}
function bo(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
      (t.uniform3i(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else {
    if (ho(n, e)) return;
    t.uniform3iv(this.addr, e), uo(n, e);
  }
}
function wo(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
      (t.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (ho(n, e)) return;
    t.uniform4iv(this.addr, e), uo(n, e);
  }
}
function To(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
}
function Eo(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y) ||
      (t.uniform2ui(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (ho(n, e)) return;
    t.uniform2uiv(this.addr, e), uo(n, e);
  }
}
function Ao(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
      (t.uniform3ui(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else {
    if (ho(n, e)) return;
    t.uniform3uiv(this.addr, e), uo(n, e);
  }
}
function Ro(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
      (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (ho(n, e)) return;
    t.uniform4uiv(this.addr, e), uo(n, e);
  }
}
function Co(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  let s;
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    this.type === t.SAMPLER_2D_SHADOW
      ? ((to.compareFunction = Sn), (s = to))
      : (s = Qa),
    n.setTexture2D(e || s, r);
}
function Po(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture3D(e || no, r);
}
function Io(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    n.setTextureCube(e || io, r);
}
function Lo(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture2DArray(e || eo, r);
}
function Uo(t, e) {
  t.uniform1fv(this.addr, e);
}
function No(t, e) {
  const n = co(e, this.size, 2);
  t.uniform2fv(this.addr, n);
}
function Do(t, e) {
  const n = co(e, this.size, 3);
  t.uniform3fv(this.addr, n);
}
function Oo(t, e) {
  const n = co(e, this.size, 4);
  t.uniform4fv(this.addr, n);
}
function Fo(t, e) {
  const n = co(e, this.size, 4);
  t.uniformMatrix2fv(this.addr, !1, n);
}
function Bo(t, e) {
  const n = co(e, this.size, 9);
  t.uniformMatrix3fv(this.addr, !1, n);
}
function zo(t, e) {
  const n = co(e, this.size, 16);
  t.uniformMatrix4fv(this.addr, !1, n);
}
function ko(t, e) {
  t.uniform1iv(this.addr, e);
}
function Vo(t, e) {
  t.uniform2iv(this.addr, e);
}
function Ho(t, e) {
  t.uniform3iv(this.addr, e);
}
function Go(t, e) {
  t.uniform4iv(this.addr, e);
}
function Wo(t, e) {
  t.uniform1uiv(this.addr, e);
}
function Xo(t, e) {
  t.uniform2uiv(this.addr, e);
}
function jo(t, e) {
  t.uniform3uiv(this.addr, e);
}
function qo(t, e) {
  t.uniform4uiv(this.addr, e);
}
function Yo(t, e, n) {
  const i = this.cache,
    r = e.length,
    s = po(n, r);
  ho(i, s) || (t.uniform1iv(this.addr, s), uo(i, s));
  for (let t = 0; t !== r; ++t) n.setTexture2D(e[t] || Qa, s[t]);
}
function Zo(t, e, n) {
  const i = this.cache,
    r = e.length,
    s = po(n, r);
  ho(i, s) || (t.uniform1iv(this.addr, s), uo(i, s));
  for (let t = 0; t !== r; ++t) n.setTexture3D(e[t] || no, s[t]);
}
function Jo(t, e, n) {
  const i = this.cache,
    r = e.length,
    s = po(n, r);
  ho(i, s) || (t.uniform1iv(this.addr, s), uo(i, s));
  for (let t = 0; t !== r; ++t) n.setTextureCube(e[t] || io, s[t]);
}
function Ko(t, e, n) {
  const i = this.cache,
    r = e.length,
    s = po(n, r);
  ho(i, s) || (t.uniform1iv(this.addr, s), uo(i, s));
  for (let t = 0; t !== r; ++t) n.setTexture2DArray(e[t] || eo, s[t]);
}
class $o {
  constructor(t, e, n) {
    (this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.type = e.type),
      (this.setValue = (function (t) {
        switch (t) {
          case 5126:
            return mo;
          case 35664:
            return fo;
          case 35665:
            return go;
          case 35666:
            return vo;
          case 35674:
            return _o;
          case 35675:
            return xo;
          case 35676:
            return yo;
          case 5124:
          case 35670:
            return Mo;
          case 35667:
          case 35671:
            return So;
          case 35668:
          case 35672:
            return bo;
          case 35669:
          case 35673:
            return wo;
          case 5125:
            return To;
          case 36294:
            return Eo;
          case 36295:
            return Ao;
          case 36296:
            return Ro;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Co;
          case 35679:
          case 36299:
          case 36307:
            return Po;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Io;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Lo;
        }
      })(e.type));
  }
}
class Qo {
  constructor(t, e, n) {
    (this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.type = e.type),
      (this.size = e.size),
      (this.setValue = (function (t) {
        switch (t) {
          case 5126:
            return Uo;
          case 35664:
            return No;
          case 35665:
            return Do;
          case 35666:
            return Oo;
          case 35674:
            return Fo;
          case 35675:
            return Bo;
          case 35676:
            return zo;
          case 5124:
          case 35670:
            return ko;
          case 35667:
          case 35671:
            return Vo;
          case 35668:
          case 35672:
            return Ho;
          case 35669:
          case 35673:
            return Go;
          case 5125:
            return Wo;
          case 36294:
            return Xo;
          case 36295:
            return jo;
          case 36296:
            return qo;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Yo;
          case 35679:
          case 36299:
          case 36307:
            return Zo;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Jo;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Ko;
        }
      })(e.type));
  }
}
class tl {
  constructor(t) {
    (this.id = t), (this.seq = []), (this.map = {});
  }
  setValue(t, e, n) {
    const i = this.seq;
    for (let r = 0, s = i.length; r !== s; ++r) {
      const s = i[r];
      s.setValue(t, e[s.id], n);
    }
  }
}
const el = /(\w+)(\])?(\[|\.)?/g;
function nl(t, e) {
  t.seq.push(e), (t.map[e.id] = e);
}
function il(t, e, n) {
  const i = t.name,
    r = i.length;
  for (el.lastIndex = 0; ; ) {
    const s = el.exec(i),
      a = el.lastIndex;
    let o = s[1];
    const l = "]" === s[2],
      c = s[3];
    if ((l && (o |= 0), void 0 === c || ("[" === c && a + 2 === r))) {
      nl(n, void 0 === c ? new $o(o, t, e) : new Qo(o, t, e));
      break;
    }
    {
      let t = n.map[o];
      void 0 === t && ((t = new tl(o)), nl(n, t)), (n = t);
    }
  }
}
class rl {
  constructor(t, e) {
    (this.seq = []), (this.map = {});
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const n = t.getActiveUniform(e, i);
      il(n, t.getUniformLocation(e, n.name), this);
    }
  }
  setValue(t, e, n, i) {
    const r = this.map[e];
    void 0 !== r && r.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    const i = e[n];
    void 0 !== i && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let r = 0, s = e.length; r !== s; ++r) {
      const s = e[r],
        a = n[s.id];
      !1 !== a.needsUpdate && s.setValue(t, a.value, i);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let i = 0, r = t.length; i !== r; ++i) {
      const r = t[i];
      r.id in e && n.push(r);
    }
    return n;
  }
}
function sl(t, e, n) {
  const i = t.createShader(e);
  return t.shaderSource(i, n), t.compileShader(i), i;
}
const al = 37297;
let ol = 0;
function ll(t, e, n) {
  const i = t.getShaderParameter(e, t.COMPILE_STATUS),
    r = t.getShaderInfoLog(e).trim();
  if (i && "" === r) return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const i = parseInt(s[1]);
    return (
      n.toUpperCase() +
      "\n\n" +
      r +
      "\n\n" +
      (function (t, e) {
        const n = t.split("\n"),
          i = [],
          r = Math.max(e - 6, 0),
          s = Math.min(e + 6, n.length);
        for (let t = r; t < s; t++) {
          const r = t + 1;
          i.push(`${r === e ? ">" : " "} ${r}: ${n[t]}`);
        }
        return i.join("\n");
      })(t.getShaderSource(e), i)
    );
  }
  return r;
}
function cl(t, e) {
  const n = (function (t) {
    const e = di.getPrimaries(di.workingColorSpace),
      n = di.getPrimaries(t);
    let i;
    switch (
      (e === n
        ? (i = "")
        : e === en && n === tn
        ? (i = "LinearDisplayP3ToLinearSRGB")
        : e === tn && n === en && (i = "LinearSRGBToLinearDisplayP3"),
      t)
    ) {
      case Ze:
      case Ke:
        return [i, "LinearTransferOETF"];
      case Ye:
      case Je:
        return [i, "sRGBTransferOETF"];
      default:
        return (
          console.warn("THREE.WebGLProgram: Unsupported color space:", t),
          [i, "LinearTransferOETF"]
        );
    }
  })(e);
  return `vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`;
}
function hl(t, e) {
  let n;
  switch (e) {
    case $:
      n = "Linear";
      break;
    case Q:
      n = "Reinhard";
      break;
    case tt:
      n = "OptimizedCineon";
      break;
    case et:
      n = "ACESFilmic";
      break;
    case it:
      n = "AgX";
      break;
    case rt:
      n = "Neutral";
      break;
    case nt:
      n = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (n = "Linear");
  }
  return (
    "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
  );
}
function ul(t) {
  return "" !== t;
}
function dl(t, e) {
  const n =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return t
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function pl(t, e) {
  return t
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const ml = /^[ \t]*#include +<([\w\d./]+)>/gm;
function fl(t) {
  return t.replace(ml, vl);
}
const gl = new Map();
function vl(t, e) {
  let n = fa[e];
  if (void 0 === n) {
    const t = gl.get(e);
    if (void 0 === t) throw new Error("Can not resolve #include <" + e + ">");
    (n = fa[t]),
      console.warn(
        'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
        e,
        t
      );
  }
  return fl(n);
}
const _l =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function xl(t) {
  return t.replace(_l, yl);
}
function yl(t, e, n, i) {
  let r = "";
  for (let t = parseInt(e); t < parseInt(n); t++)
    r += i
      .replace(/\[\s*i\s*\]/g, "[ " + t + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, t);
  return r;
}
function Ml(t) {
  let e = `precision ${t.precision} float;\n\tprecision ${t.precision} int;\n\tprecision ${t.precision} sampler2D;\n\tprecision ${t.precision} samplerCube;\n\tprecision ${t.precision} sampler3D;\n\tprecision ${t.precision} sampler2DArray;\n\tprecision ${t.precision} sampler2DShadow;\n\tprecision ${t.precision} samplerCubeShadow;\n\tprecision ${t.precision} sampler2DArrayShadow;\n\tprecision ${t.precision} isampler2D;\n\tprecision ${t.precision} isampler3D;\n\tprecision ${t.precision} isamplerCube;\n\tprecision ${t.precision} isampler2DArray;\n\tprecision ${t.precision} usampler2D;\n\tprecision ${t.precision} usampler3D;\n\tprecision ${t.precision} usamplerCube;\n\tprecision ${t.precision} usampler2DArray;\n\t`;
  return (
    "highp" === t.precision
      ? (e += "\n#define HIGH_PRECISION")
      : "mediump" === t.precision
      ? (e += "\n#define MEDIUM_PRECISION")
      : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
    e
  );
}
function Sl(t, e, n, i) {
  const r = t.getContext(),
    s = n.defines;
  let a = n.vertexShader,
    o = n.fragmentShader;
  const u = (function (t) {
      let e = "SHADOWMAP_TYPE_BASIC";
      return (
        t.shadowMapType === l
          ? (e = "SHADOWMAP_TYPE_PCF")
          : t.shadowMapType === c
          ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
          : t.shadowMapType === h && (e = "SHADOWMAP_TYPE_VSM"),
        e
      );
    })(n),
    d = (function (t) {
      let e = "ENVMAP_TYPE_CUBE";
      if (t.envMap)
        switch (t.envMapMode) {
          case lt:
          case ct:
            e = "ENVMAP_TYPE_CUBE";
            break;
          case dt:
            e = "ENVMAP_TYPE_CUBE_UV";
        }
      return e;
    })(n),
    p = (function (t) {
      let e = "ENVMAP_MODE_REFLECTION";
      t.envMap && t.envMapMode === ct && (e = "ENVMAP_MODE_REFRACTION");
      return e;
    })(n),
    m = (function (t) {
      let e = "ENVMAP_BLENDING_NONE";
      if (t.envMap)
        switch (t.combine) {
          case Y:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case Z:
            e = "ENVMAP_BLENDING_MIX";
            break;
          case J:
            e = "ENVMAP_BLENDING_ADD";
        }
      return e;
    })(n),
    f = (function (t) {
      const e = t.envMapCubeUVHeight;
      if (null === e) return null;
      const n = Math.log2(e) - 2,
        i = 1 / e;
      return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
        texelHeight: i,
        maxMip: n,
      };
    })(n),
    g = (function (t) {
      return [
        t.extensionClipCullDistance
          ? "#extension GL_ANGLE_clip_cull_distance : require"
          : "",
        t.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
      ]
        .filter(ul)
        .join("\n");
    })(n),
    v = (function (t) {
      const e = [];
      for (const n in t) {
        const i = t[n];
        !1 !== i && e.push("#define " + n + " " + i);
      }
      return e.join("\n");
    })(s),
    _ = r.createProgram();
  let x,
    y,
    M = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
  n.isRawShaderMaterial
    ? ((x = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        v,
      ]
        .filter(ul)
        .join("\n")),
      x.length > 0 && (x += "\n"),
      (y = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        v,
      ]
        .filter(ul)
        .join("\n")),
      y.length > 0 && (y += "\n"))
    : ((x = [
        Ml(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        v,
        n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        n.batching ? "#define USE_BATCHING" : "",
        n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        n.instancing ? "#define USE_INSTANCING" : "",
        n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.map ? "#define USE_MAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + p : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.mapUv ? "#define MAP_UV " + n.mapUv : "",
        n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
        n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
        n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
        n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
        n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
        n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
        n.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv
          : "",
        n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
        n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
        n.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv
          : "",
        n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
        n.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv
          : "",
        n.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv
          : "",
        n.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv
          : "",
        n.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv
          : "",
        n.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv
          : "",
        n.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv
          : "",
        n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
        n.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv
          : "",
        n.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv
          : "",
        n.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv
          : "",
        n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
        n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
        n.vertexColors ? "#define USE_COLOR" : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.skinning ? "#define USE_SKINNING" : "",
        n.morphTargets ? "#define USE_MORPHTARGETS" : "",
        n.morphNormals && !1 === n.flatShading
          ? "#define USE_MORPHNORMALS"
          : "",
        n.morphColors ? "#define USE_MORPHCOLORS" : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
          : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
          : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + u : "",
        n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "\tattribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "\tattribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "\tuniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "\tattribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "\tattribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "\tattribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "\tattribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "\tattribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "\tattribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "\tattribute vec4 skinIndex;",
        "\tattribute vec4 skinWeight;",
        "#endif",
        "\n",
      ]
        .filter(ul)
        .join("\n")),
      (y = [
        Ml(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        v,
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        n.map ? "#define USE_MAP" : "",
        n.matcap ? "#define USE_MATCAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + d : "",
        n.envMap ? "#define " + p : "",
        n.envMap ? "#define " + m : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoat ? "#define USE_CLEARCOAT" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.dispersion ? "#define USE_DISPERSION" : "",
        n.iridescence ? "#define USE_IRIDESCENCE" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaTest ? "#define USE_ALPHATEST" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.sheen ? "#define USE_SHEEN" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
        n.vertexColors || n.instancingColor || n.batchingColor
          ? "#define USE_COLOR"
          : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.gradientMap ? "#define USE_GRADIENTMAP" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + u : "",
        n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        n.toneMapping !== K ? "#define TONE_MAPPING" : "",
        n.toneMapping !== K ? fa.tonemapping_pars_fragment : "",
        n.toneMapping !== K ? hl("toneMapping", n.toneMapping) : "",
        n.dithering ? "#define DITHERING" : "",
        n.opaque ? "#define OPAQUE" : "",
        fa.colorspace_pars_fragment,
        cl("linearToOutputTexel", n.outputColorSpace),
        n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
        "\n",
      ]
        .filter(ul)
        .join("\n"))),
    (a = fl(a)),
    (a = dl(a, n)),
    (a = pl(a, n)),
    (o = fl(o)),
    (o = dl(o, n)),
    (o = pl(o, n)),
    (a = xl(a)),
    (o = xl(o)),
    !0 !== n.isRawShaderMaterial &&
      ((M = "#version 300 es\n"),
      (x =
        [
          g,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join("\n") +
        "\n" +
        x),
      (y =
        [
          "#define varying in",
          n.glslVersion === Fn
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          n.glslVersion === Fn ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join("\n") +
        "\n" +
        y));
  const S = M + x + a,
    b = M + y + o,
    w = sl(r, r.VERTEX_SHADER, S),
    T = sl(r, r.FRAGMENT_SHADER, b);
  function E(e) {
    if (t.debug.checkShaderErrors) {
      const n = r.getProgramInfoLog(_).trim(),
        i = r.getShaderInfoLog(w).trim(),
        s = r.getShaderInfoLog(T).trim();
      let a = !0,
        o = !0;
      if (!1 === r.getProgramParameter(_, r.LINK_STATUS))
        if (((a = !1), "function" == typeof t.debug.onShaderError))
          t.debug.onShaderError(r, _, w, T);
        else {
          const t = ll(r, w, "vertex"),
            i = ll(r, T, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(_, r.VALIDATE_STATUS) +
              "\n\nMaterial Name: " +
              e.name +
              "\nMaterial Type: " +
              e.type +
              "\n\nProgram Info Log: " +
              n +
              "\n" +
              t +
              "\n" +
              i
          );
        }
      else
        "" !== n
          ? console.warn("THREE.WebGLProgram: Program Info Log:", n)
          : ("" !== i && "" !== s) || (o = !1);
      o &&
        (e.diagnostics = {
          runnable: a,
          programLog: n,
          vertexShader: { log: i, prefix: x },
          fragmentShader: { log: s, prefix: y },
        });
    }
    r.deleteShader(w),
      r.deleteShader(T),
      (A = new rl(r, _)),
      (R = (function (t, e) {
        const n = {},
          i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
        for (let r = 0; r < i; r++) {
          const i = t.getActiveAttrib(e, r),
            s = i.name;
          let a = 1;
          i.type === t.FLOAT_MAT2 && (a = 2),
            i.type === t.FLOAT_MAT3 && (a = 3),
            i.type === t.FLOAT_MAT4 && (a = 4),
            (n[s] = {
              type: i.type,
              location: t.getAttribLocation(e, s),
              locationSize: a,
            });
        }
        return n;
      })(r, _));
  }
  let A, R;
  r.attachShader(_, w),
    r.attachShader(_, T),
    void 0 !== n.index0AttributeName
      ? r.bindAttribLocation(_, 0, n.index0AttributeName)
      : !0 === n.morphTargets && r.bindAttribLocation(_, 0, "position"),
    r.linkProgram(_),
    (this.getUniforms = function () {
      return void 0 === A && E(this), A;
    }),
    (this.getAttributes = function () {
      return void 0 === R && E(this), R;
    });
  let C = !1 === n.rendererExtensionParallelShaderCompile;
  return (
    (this.isReady = function () {
      return !1 === C && (C = r.getProgramParameter(_, al)), C;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        r.deleteProgram(_),
        (this.program = void 0);
    }),
    (this.type = n.shaderType),
    (this.name = n.shaderName),
    (this.id = ol++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = _),
    (this.vertexShader = w),
    (this.fragmentShader = T),
    this
  );
}
let bl = 0;
class wl {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(t) {
    const e = t.vertexShader,
      n = t.fragmentShader,
      i = this._getShaderStage(e),
      r = this._getShaderStage(n),
      s = this._getShaderCacheForMaterial(t);
    return (
      !1 === s.has(i) && (s.add(i), i.usedTimes++),
      !1 === s.has(r) && (s.add(r), r.usedTimes++),
      this
    );
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const t of e)
      t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return void 0 === n && ((n = new Set()), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return void 0 === n && ((n = new Tl(t)), e.set(t, n)), n;
  }
}
class Tl {
  constructor(t) {
    (this.id = bl++), (this.code = t), (this.usedTimes = 0);
  }
}
function El(t, e, n, i, r, s, a) {
  const o = new vr(),
    l = new wl(),
    c = new Set(),
    h = [],
    u = r.logarithmicDepthBuffer,
    p = r.vertexTextures;
  let m = r.precision;
  const f = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function g(t) {
    return c.add(t), 0 === t ? "uv" : `uv${t}`;
  }
  return {
    getParameters: function (s, o, h, v, _) {
      const x = v.fog,
        y = _.geometry,
        M = s.isMeshStandardMaterial ? v.environment : null,
        S = (s.isMeshStandardMaterial ? n : e).get(s.envMap || M),
        b = S && S.mapping === dt ? S.image.height : null,
        w = f[s.type];
      null !== s.precision &&
        ((m = r.getMaxPrecision(s.precision)),
        m !== s.precision &&
          console.warn(
            "THREE.WebGLProgram.getParameters:",
            s.precision,
            "not supported, using",
            m,
            "instead."
          ));
      const T =
          y.morphAttributes.position ||
          y.morphAttributes.normal ||
          y.morphAttributes.color,
        E = void 0 !== T ? T.length : 0;
      let A,
        R,
        C,
        P,
        I = 0;
      if (
        (void 0 !== y.morphAttributes.position && (I = 1),
        void 0 !== y.morphAttributes.normal && (I = 2),
        void 0 !== y.morphAttributes.color && (I = 3),
        w)
      ) {
        const t = va[w];
        (A = t.vertexShader), (R = t.fragmentShader);
      } else
        (A = s.vertexShader),
          (R = s.fragmentShader),
          l.update(s),
          (C = l.getVertexShaderID(s)),
          (P = l.getFragmentShaderID(s));
      const L = t.getRenderTarget(),
        U = !0 === _.isInstancedMesh,
        N = !0 === _.isBatchedMesh,
        D = !!s.map,
        O = !!s.matcap,
        F = !!S,
        B = !!s.aoMap,
        z = !!s.lightMap,
        k = !!s.bumpMap,
        V = !!s.normalMap,
        H = !!s.displacementMap,
        G = !!s.emissiveMap,
        W = !!s.metalnessMap,
        X = !!s.roughnessMap,
        j = s.anisotropy > 0,
        q = s.clearcoat > 0,
        Y = s.dispersion > 0,
        Z = s.iridescence > 0,
        J = s.sheen > 0,
        $ = s.transmission > 0,
        Q = j && !!s.anisotropyMap,
        tt = q && !!s.clearcoatMap,
        et = q && !!s.clearcoatNormalMap,
        nt = q && !!s.clearcoatRoughnessMap,
        it = Z && !!s.iridescenceMap,
        rt = Z && !!s.iridescenceThicknessMap,
        st = J && !!s.sheenColorMap,
        at = J && !!s.sheenRoughnessMap,
        ot = !!s.specularMap,
        lt = !!s.specularColorMap,
        ct = !!s.specularIntensityMap,
        ht = $ && !!s.transmissionMap,
        ut = $ && !!s.thicknessMap,
        pt = !!s.gradientMap,
        mt = !!s.alphaMap,
        ft = s.alphaTest > 0,
        gt = !!s.alphaHash,
        vt = !!s.extensions;
      let _t = K;
      s.toneMapped &&
        ((null !== L && !0 !== L.isXRRenderTarget) || (_t = t.toneMapping));
      const xt = {
        shaderID: w,
        shaderType: s.type,
        shaderName: s.name,
        vertexShader: A,
        fragmentShader: R,
        defines: s.defines,
        customVertexShaderID: C,
        customFragmentShaderID: P,
        isRawShaderMaterial: !0 === s.isRawShaderMaterial,
        glslVersion: s.glslVersion,
        precision: m,
        batching: N,
        batchingColor: N && null !== _._colorsTexture,
        instancing: U,
        instancingColor: U && null !== _.instanceColor,
        instancingMorph: U && null !== _.morphTexture,
        supportsVertexTextures: p,
        outputColorSpace:
          null === L
            ? t.outputColorSpace
            : !0 === L.isXRRenderTarget
            ? L.texture.colorSpace
            : Ze,
        alphaToCoverage: !!s.alphaToCoverage,
        map: D,
        matcap: O,
        envMap: F,
        envMapMode: F && S.mapping,
        envMapCubeUVHeight: b,
        aoMap: B,
        lightMap: z,
        bumpMap: k,
        normalMap: V,
        displacementMap: p && H,
        emissiveMap: G,
        normalMapObjectSpace: V && 1 === s.normalMapType,
        normalMapTangentSpace: V && 0 === s.normalMapType,
        metalnessMap: W,
        roughnessMap: X,
        anisotropy: j,
        anisotropyMap: Q,
        clearcoat: q,
        clearcoatMap: tt,
        clearcoatNormalMap: et,
        clearcoatRoughnessMap: nt,
        dispersion: Y,
        iridescence: Z,
        iridescenceMap: it,
        iridescenceThicknessMap: rt,
        sheen: J,
        sheenColorMap: st,
        sheenRoughnessMap: at,
        specularMap: ot,
        specularColorMap: lt,
        specularIntensityMap: ct,
        transmission: $,
        transmissionMap: ht,
        thicknessMap: ut,
        gradientMap: pt,
        opaque:
          !1 === s.transparent && 1 === s.blending && !1 === s.alphaToCoverage,
        alphaMap: mt,
        alphaTest: ft,
        alphaHash: gt,
        combine: s.combine,
        mapUv: D && g(s.map.channel),
        aoMapUv: B && g(s.aoMap.channel),
        lightMapUv: z && g(s.lightMap.channel),
        bumpMapUv: k && g(s.bumpMap.channel),
        normalMapUv: V && g(s.normalMap.channel),
        displacementMapUv: H && g(s.displacementMap.channel),
        emissiveMapUv: G && g(s.emissiveMap.channel),
        metalnessMapUv: W && g(s.metalnessMap.channel),
        roughnessMapUv: X && g(s.roughnessMap.channel),
        anisotropyMapUv: Q && g(s.anisotropyMap.channel),
        clearcoatMapUv: tt && g(s.clearcoatMap.channel),
        clearcoatNormalMapUv: et && g(s.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: nt && g(s.clearcoatRoughnessMap.channel),
        iridescenceMapUv: it && g(s.iridescenceMap.channel),
        iridescenceThicknessMapUv: rt && g(s.iridescenceThicknessMap.channel),
        sheenColorMapUv: st && g(s.sheenColorMap.channel),
        sheenRoughnessMapUv: at && g(s.sheenRoughnessMap.channel),
        specularMapUv: ot && g(s.specularMap.channel),
        specularColorMapUv: lt && g(s.specularColorMap.channel),
        specularIntensityMapUv: ct && g(s.specularIntensityMap.channel),
        transmissionMapUv: ht && g(s.transmissionMap.channel),
        thicknessMapUv: ut && g(s.thicknessMap.channel),
        alphaMapUv: mt && g(s.alphaMap.channel),
        vertexTangents: !!y.attributes.tangent && (V || j),
        vertexColors: s.vertexColors,
        vertexAlphas:
          !0 === s.vertexColors &&
          !!y.attributes.color &&
          4 === y.attributes.color.itemSize,
        pointsUvs: !0 === _.isPoints && !!y.attributes.uv && (D || mt),
        fog: !!x,
        useFog: !0 === s.fog,
        fogExp2: !!x && x.isFogExp2,
        flatShading: !0 === s.flatShading,
        sizeAttenuation: !0 === s.sizeAttenuation,
        logarithmicDepthBuffer: u,
        skinning: !0 === _.isSkinnedMesh,
        morphTargets: void 0 !== y.morphAttributes.position,
        morphNormals: void 0 !== y.morphAttributes.normal,
        morphColors: void 0 !== y.morphAttributes.color,
        morphTargetsCount: E,
        morphTextureStride: I,
        numDirLights: o.directional.length,
        numPointLights: o.point.length,
        numSpotLights: o.spot.length,
        numSpotLightMaps: o.spotLightMap.length,
        numRectAreaLights: o.rectArea.length,
        numHemiLights: o.hemi.length,
        numDirLightShadows: o.directionalShadowMap.length,
        numPointLightShadows: o.pointShadowMap.length,
        numSpotLightShadows: o.spotShadowMap.length,
        numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
        numLightProbes: o.numLightProbes,
        numClippingPlanes: a.numPlanes,
        numClipIntersection: a.numIntersection,
        dithering: s.dithering,
        shadowMapEnabled: t.shadowMap.enabled && h.length > 0,
        shadowMapType: t.shadowMap.type,
        toneMapping: _t,
        decodeVideoTexture:
          D &&
          !0 === s.map.isVideoTexture &&
          di.getTransfer(s.map.colorSpace) === Qe,
        premultipliedAlpha: s.premultipliedAlpha,
        doubleSided: 2 === s.side,
        flipSided: s.side === d,
        useDepthPacking: s.depthPacking >= 0,
        depthPacking: s.depthPacking || 0,
        index0AttributeName: s.index0AttributeName,
        extensionClipCullDistance:
          vt &&
          !0 === s.extensions.clipCullDistance &&
          i.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw:
          ((vt && !0 === s.extensions.multiDraw) || N) &&
          i.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: i.has(
          "KHR_parallel_shader_compile"
        ),
        customProgramCacheKey: s.customProgramCacheKey(),
      };
      return (
        (xt.vertexUv1s = c.has(1)),
        (xt.vertexUv2s = c.has(2)),
        (xt.vertexUv3s = c.has(3)),
        c.clear(),
        xt
      );
    },
    getProgramCacheKey: function (e) {
      const n = [];
      if (
        (e.shaderID
          ? n.push(e.shaderID)
          : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)),
        void 0 !== e.defines)
      )
        for (const t in e.defines) n.push(t), n.push(e.defines[t]);
      return (
        !1 === e.isRawShaderMaterial &&
          (!(function (t, e) {
            t.push(e.precision),
              t.push(e.outputColorSpace),
              t.push(e.envMapMode),
              t.push(e.envMapCubeUVHeight),
              t.push(e.mapUv),
              t.push(e.alphaMapUv),
              t.push(e.lightMapUv),
              t.push(e.aoMapUv),
              t.push(e.bumpMapUv),
              t.push(e.normalMapUv),
              t.push(e.displacementMapUv),
              t.push(e.emissiveMapUv),
              t.push(e.metalnessMapUv),
              t.push(e.roughnessMapUv),
              t.push(e.anisotropyMapUv),
              t.push(e.clearcoatMapUv),
              t.push(e.clearcoatNormalMapUv),
              t.push(e.clearcoatRoughnessMapUv),
              t.push(e.iridescenceMapUv),
              t.push(e.iridescenceThicknessMapUv),
              t.push(e.sheenColorMapUv),
              t.push(e.sheenRoughnessMapUv),
              t.push(e.specularMapUv),
              t.push(e.specularColorMapUv),
              t.push(e.specularIntensityMapUv),
              t.push(e.transmissionMapUv),
              t.push(e.thicknessMapUv),
              t.push(e.combine),
              t.push(e.fogExp2),
              t.push(e.sizeAttenuation),
              t.push(e.morphTargetsCount),
              t.push(e.morphAttributeCount),
              t.push(e.numDirLights),
              t.push(e.numPointLights),
              t.push(e.numSpotLights),
              t.push(e.numSpotLightMaps),
              t.push(e.numHemiLights),
              t.push(e.numRectAreaLights),
              t.push(e.numDirLightShadows),
              t.push(e.numPointLightShadows),
              t.push(e.numSpotLightShadows),
              t.push(e.numSpotLightShadowsWithMaps),
              t.push(e.numLightProbes),
              t.push(e.shadowMapType),
              t.push(e.toneMapping),
              t.push(e.numClippingPlanes),
              t.push(e.numClipIntersection),
              t.push(e.depthPacking);
          })(n, e),
          (function (t, e) {
            o.disableAll(), e.supportsVertexTextures && o.enable(0);
            e.instancing && o.enable(1);
            e.instancingColor && o.enable(2);
            e.instancingMorph && o.enable(3);
            e.matcap && o.enable(4);
            e.envMap && o.enable(5);
            e.normalMapObjectSpace && o.enable(6);
            e.normalMapTangentSpace && o.enable(7);
            e.clearcoat && o.enable(8);
            e.iridescence && o.enable(9);
            e.alphaTest && o.enable(10);
            e.vertexColors && o.enable(11);
            e.vertexAlphas && o.enable(12);
            e.vertexUv1s && o.enable(13);
            e.vertexUv2s && o.enable(14);
            e.vertexUv3s && o.enable(15);
            e.vertexTangents && o.enable(16);
            e.anisotropy && o.enable(17);
            e.alphaHash && o.enable(18);
            e.batching && o.enable(19);
            e.dispersion && o.enable(20);
            e.batchingColor && o.enable(21);
            t.push(o.mask), o.disableAll(), e.fog && o.enable(0);
            e.useFog && o.enable(1);
            e.flatShading && o.enable(2);
            e.logarithmicDepthBuffer && o.enable(3);
            e.skinning && o.enable(4);
            e.morphTargets && o.enable(5);
            e.morphNormals && o.enable(6);
            e.morphColors && o.enable(7);
            e.premultipliedAlpha && o.enable(8);
            e.shadowMapEnabled && o.enable(9);
            e.doubleSided && o.enable(10);
            e.flipSided && o.enable(11);
            e.useDepthPacking && o.enable(12);
            e.dithering && o.enable(13);
            e.transmission && o.enable(14);
            e.sheen && o.enable(15);
            e.opaque && o.enable(16);
            e.pointsUvs && o.enable(17);
            e.decodeVideoTexture && o.enable(18);
            e.alphaToCoverage && o.enable(19);
            t.push(o.mask);
          })(n, e),
          n.push(t.outputColorSpace)),
        n.push(e.customProgramCacheKey),
        n.join()
      );
    },
    getUniforms: function (t) {
      const e = f[t.type];
      let n;
      if (e) {
        const t = va[e];
        n = Ys.clone(t.uniforms);
      } else n = t.uniforms;
      return n;
    },
    acquireProgram: function (e, n) {
      let i;
      for (let t = 0, e = h.length; t < e; t++) {
        const e = h[t];
        if (e.cacheKey === n) {
          (i = e), ++i.usedTimes;
          break;
        }
      }
      return void 0 === i && ((i = new Sl(t, n, e, s)), h.push(i)), i;
    },
    releaseProgram: function (t) {
      if (0 == --t.usedTimes) {
        const e = h.indexOf(t);
        (h[e] = h[h.length - 1]), h.pop(), t.destroy();
      }
    },
    releaseShaderCache: function (t) {
      l.remove(t);
    },
    programs: h,
    dispose: function () {
      l.dispose();
    },
  };
}
function Al() {
  let t = new WeakMap();
  return {
    get: function (e) {
      let n = t.get(e);
      return void 0 === n && ((n = {}), t.set(e, n)), n;
    },
    remove: function (e) {
      t.delete(e);
    },
    update: function (e, n, i) {
      t.get(e)[n] = i;
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
function Rl(t, e) {
  return t.groupOrder !== e.groupOrder
    ? t.groupOrder - e.groupOrder
    : t.renderOrder !== e.renderOrder
    ? t.renderOrder - e.renderOrder
    : t.material.id !== e.material.id
    ? t.material.id - e.material.id
    : t.z !== e.z
    ? t.z - e.z
    : t.id - e.id;
}
function Cl(t, e) {
  return t.groupOrder !== e.groupOrder
    ? t.groupOrder - e.groupOrder
    : t.renderOrder !== e.renderOrder
    ? t.renderOrder - e.renderOrder
    : t.z !== e.z
    ? e.z - t.z
    : t.id - e.id;
}
function Pl() {
  const t = [];
  let e = 0;
  const n = [],
    i = [],
    r = [];
  function s(n, i, r, s, a, o) {
    let l = t[e];
    return (
      void 0 === l
        ? ((l = {
            id: n.id,
            object: n,
            geometry: i,
            material: r,
            groupOrder: s,
            renderOrder: n.renderOrder,
            z: a,
            group: o,
          }),
          (t[e] = l))
        : ((l.id = n.id),
          (l.object = n),
          (l.geometry = i),
          (l.material = r),
          (l.groupOrder = s),
          (l.renderOrder = n.renderOrder),
          (l.z = a),
          (l.group = o)),
      e++,
      l
    );
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: r,
    init: function () {
      (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
    },
    push: function (t, e, a, o, l, c) {
      const h = s(t, e, a, o, l, c);
      a.transmission > 0
        ? i.push(h)
        : !0 === a.transparent
        ? r.push(h)
        : n.push(h);
    },
    unshift: function (t, e, a, o, l, c) {
      const h = s(t, e, a, o, l, c);
      a.transmission > 0
        ? i.unshift(h)
        : !0 === a.transparent
        ? r.unshift(h)
        : n.unshift(h);
    },
    finish: function () {
      for (let n = e, i = t.length; n < i; n++) {
        const e = t[n];
        if (null === e.id) break;
        (e.id = null),
          (e.object = null),
          (e.geometry = null),
          (e.material = null),
          (e.group = null);
      }
    },
    sort: function (t, e) {
      n.length > 1 && n.sort(t || Rl),
        i.length > 1 && i.sort(e || Cl),
        r.length > 1 && r.sort(e || Cl);
    },
  };
}
function Il() {
  let t = new WeakMap();
  return {
    get: function (e, n) {
      const i = t.get(e);
      let r;
      return (
        void 0 === i
          ? ((r = new Pl()), t.set(e, [r]))
          : n >= i.length
          ? ((r = new Pl()), i.push(r))
          : (r = i[n]),
        r
      );
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
function Ll() {
  const t = {};
  return {
    get: function (e) {
      if (void 0 !== t[e.id]) return t[e.id];
      let n;
      switch (e.type) {
        case "DirectionalLight":
          n = { direction: new Pi(), color: new Zr() };
          break;
        case "SpotLight":
          n = {
            position: new Pi(),
            direction: new Pi(),
            color: new Zr(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          n = { position: new Pi(), color: new Zr(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          n = {
            direction: new Pi(),
            skyColor: new Zr(),
            groundColor: new Zr(),
          };
          break;
        case "RectAreaLight":
          n = {
            color: new Zr(),
            position: new Pi(),
            halfWidth: new Pi(),
            halfHeight: new Pi(),
          };
      }
      return (t[e.id] = n), n;
    },
  };
}
let Ul = 0;
function Nl(t, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (t.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (t.map ? 1 : 0)
  );
}
function Dl(t) {
  const e = new Ll(),
    n = (function () {
      const t = {};
      return {
        get: function (e) {
          if (void 0 !== t[e.id]) return t[e.id];
          let n;
          switch (e.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new $n(),
              };
              break;
            case "PointLight":
              n = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new $n(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3,
              };
          }
          return (t[e.id] = n), n;
        },
      };
    })(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let t = 0; t < 9; t++) i.probe.push(new Pi());
  const r = new Pi(),
    s = new ar(),
    a = new ar();
  return {
    setup: function (r) {
      let s = 0,
        a = 0,
        o = 0;
      for (let t = 0; t < 9; t++) i.probe[t].set(0, 0, 0);
      let l = 0,
        c = 0,
        h = 0,
        u = 0,
        d = 0,
        p = 0,
        m = 0,
        f = 0,
        g = 0,
        v = 0,
        _ = 0;
      r.sort(Nl);
      for (let t = 0, x = r.length; t < x; t++) {
        const x = r[t],
          y = x.color,
          M = x.intensity,
          S = x.distance,
          b = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
        if (x.isAmbientLight) (s += y.r * M), (a += y.g * M), (o += y.b * M);
        else if (x.isLightProbe) {
          for (let t = 0; t < 9; t++)
            i.probe[t].addScaledVector(x.sh.coefficients[t], M);
          _++;
        } else if (x.isDirectionalLight) {
          const t = e.get(x);
          if (
            (t.color.copy(x.color).multiplyScalar(x.intensity), x.castShadow)
          ) {
            const t = x.shadow,
              e = n.get(x);
            (e.shadowIntensity = t.intensity),
              (e.shadowBias = t.bias),
              (e.shadowNormalBias = t.normalBias),
              (e.shadowRadius = t.radius),
              (e.shadowMapSize = t.mapSize),
              (i.directionalShadow[l] = e),
              (i.directionalShadowMap[l] = b),
              (i.directionalShadowMatrix[l] = x.shadow.matrix),
              p++;
          }
          (i.directional[l] = t), l++;
        } else if (x.isSpotLight) {
          const t = e.get(x);
          t.position.setFromMatrixPosition(x.matrixWorld),
            t.color.copy(y).multiplyScalar(M),
            (t.distance = S),
            (t.coneCos = Math.cos(x.angle)),
            (t.penumbraCos = Math.cos(x.angle * (1 - x.penumbra))),
            (t.decay = x.decay),
            (i.spot[h] = t);
          const r = x.shadow;
          if (
            (x.map &&
              ((i.spotLightMap[g] = x.map),
              g++,
              r.updateMatrices(x),
              x.castShadow && v++),
            (i.spotLightMatrix[h] = r.matrix),
            x.castShadow)
          ) {
            const t = n.get(x);
            (t.shadowIntensity = r.intensity),
              (t.shadowBias = r.bias),
              (t.shadowNormalBias = r.normalBias),
              (t.shadowRadius = r.radius),
              (t.shadowMapSize = r.mapSize),
              (i.spotShadow[h] = t),
              (i.spotShadowMap[h] = b),
              f++;
          }
          h++;
        } else if (x.isRectAreaLight) {
          const t = e.get(x);
          t.color.copy(y).multiplyScalar(M),
            t.halfWidth.set(0.5 * x.width, 0, 0),
            t.halfHeight.set(0, 0.5 * x.height, 0),
            (i.rectArea[u] = t),
            u++;
        } else if (x.isPointLight) {
          const t = e.get(x);
          if (
            (t.color.copy(x.color).multiplyScalar(x.intensity),
            (t.distance = x.distance),
            (t.decay = x.decay),
            x.castShadow)
          ) {
            const t = x.shadow,
              e = n.get(x);
            (e.shadowIntensity = t.intensity),
              (e.shadowBias = t.bias),
              (e.shadowNormalBias = t.normalBias),
              (e.shadowRadius = t.radius),
              (e.shadowMapSize = t.mapSize),
              (e.shadowCameraNear = t.camera.near),
              (e.shadowCameraFar = t.camera.far),
              (i.pointShadow[c] = e),
              (i.pointShadowMap[c] = b),
              (i.pointShadowMatrix[c] = x.shadow.matrix),
              m++;
          }
          (i.point[c] = t), c++;
        } else if (x.isHemisphereLight) {
          const t = e.get(x);
          t.skyColor.copy(x.color).multiplyScalar(M),
            t.groundColor.copy(x.groundColor).multiplyScalar(M),
            (i.hemi[d] = t),
            d++;
        }
      }
      u > 0 &&
        (!0 === t.has("OES_texture_float_linear")
          ? ((i.rectAreaLTC1 = ga.LTC_FLOAT_1),
            (i.rectAreaLTC2 = ga.LTC_FLOAT_2))
          : ((i.rectAreaLTC1 = ga.LTC_HALF_1),
            (i.rectAreaLTC2 = ga.LTC_HALF_2))),
        (i.ambient[0] = s),
        (i.ambient[1] = a),
        (i.ambient[2] = o);
      const x = i.hash;
      (x.directionalLength === l &&
        x.pointLength === c &&
        x.spotLength === h &&
        x.rectAreaLength === u &&
        x.hemiLength === d &&
        x.numDirectionalShadows === p &&
        x.numPointShadows === m &&
        x.numSpotShadows === f &&
        x.numSpotMaps === g &&
        x.numLightProbes === _) ||
        ((i.directional.length = l),
        (i.spot.length = h),
        (i.rectArea.length = u),
        (i.point.length = c),
        (i.hemi.length = d),
        (i.directionalShadow.length = p),
        (i.directionalShadowMap.length = p),
        (i.pointShadow.length = m),
        (i.pointShadowMap.length = m),
        (i.spotShadow.length = f),
        (i.spotShadowMap.length = f),
        (i.directionalShadowMatrix.length = p),
        (i.pointShadowMatrix.length = m),
        (i.spotLightMatrix.length = f + g - v),
        (i.spotLightMap.length = g),
        (i.numSpotLightShadowsWithMaps = v),
        (i.numLightProbes = _),
        (x.directionalLength = l),
        (x.pointLength = c),
        (x.spotLength = h),
        (x.rectAreaLength = u),
        (x.hemiLength = d),
        (x.numDirectionalShadows = p),
        (x.numPointShadows = m),
        (x.numSpotShadows = f),
        (x.numSpotMaps = g),
        (x.numLightProbes = _),
        (i.version = Ul++));
    },
    setupView: function (t, e) {
      let n = 0,
        o = 0,
        l = 0,
        c = 0,
        h = 0;
      const u = e.matrixWorldInverse;
      for (let e = 0, d = t.length; e < d; e++) {
        const d = t[e];
        if (d.isDirectionalLight) {
          const t = i.directional[n];
          t.direction.setFromMatrixPosition(d.matrixWorld),
            r.setFromMatrixPosition(d.target.matrixWorld),
            t.direction.sub(r),
            t.direction.transformDirection(u),
            n++;
        } else if (d.isSpotLight) {
          const t = i.spot[l];
          t.position.setFromMatrixPosition(d.matrixWorld),
            t.position.applyMatrix4(u),
            t.direction.setFromMatrixPosition(d.matrixWorld),
            r.setFromMatrixPosition(d.target.matrixWorld),
            t.direction.sub(r),
            t.direction.transformDirection(u),
            l++;
        } else if (d.isRectAreaLight) {
          const t = i.rectArea[c];
          t.position.setFromMatrixPosition(d.matrixWorld),
            t.position.applyMatrix4(u),
            a.identity(),
            s.copy(d.matrixWorld),
            s.premultiply(u),
            a.extractRotation(s),
            t.halfWidth.set(0.5 * d.width, 0, 0),
            t.halfHeight.set(0, 0.5 * d.height, 0),
            t.halfWidth.applyMatrix4(a),
            t.halfHeight.applyMatrix4(a),
            c++;
        } else if (d.isPointLight) {
          const t = i.point[o];
          t.position.setFromMatrixPosition(d.matrixWorld),
            t.position.applyMatrix4(u),
            o++;
        } else if (d.isHemisphereLight) {
          const t = i.hemi[h];
          t.direction.setFromMatrixPosition(d.matrixWorld),
            t.direction.transformDirection(u),
            h++;
        }
      }
    },
    state: i,
  };
}
function Ol(t) {
  const e = new Dl(t),
    n = [],
    i = [];
  const r = {
    lightsArray: n,
    shadowsArray: i,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: function (t) {
      (r.camera = t), (n.length = 0), (i.length = 0);
    },
    state: r,
    setupLights: function () {
      e.setup(n);
    },
    setupLightsView: function (t) {
      e.setupView(n, t);
    },
    pushLight: function (t) {
      n.push(t);
    },
    pushShadow: function (t) {
      i.push(t);
    },
  };
}
function Fl(t) {
  let e = new WeakMap();
  return {
    get: function (n, i = 0) {
      const r = e.get(n);
      let s;
      return (
        void 0 === r
          ? ((s = new Ol(t)), e.set(n, [s]))
          : i >= r.length
          ? ((s = new Ol(t)), r.push(s))
          : (s = r[i]),
        s
      );
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
class Bl extends $r {
  constructor(t) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.depthPacking = t.depthPacking),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      this
    );
  }
}
class zl extends $r {
  constructor(t) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      this
    );
  }
}
function kl(t, e, n) {
  let i = new ua();
  const r = new $n(),
    s = new $n(),
    a = new Si(),
    o = new Bl({ depthPacking: 3201 }),
    c = new zl(),
    p = {},
    m = n.maxTextureSize,
    f = { [u]: d, [d]: u, 2: 2 },
    g = new Zs({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new $n() },
        radius: { value: 4 },
      },
      vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
      fragmentShader:
        "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
    }),
    v = g.clone();
  v.defines.HORIZONTAL_PASS = 1;
  const _ = new ws();
  _.setAttribute(
    "position",
    new os(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const x = new Hs(_, g),
    y = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = l);
  let M = this.type;
  function S(n, i) {
    const s = e.update(x);
    g.defines.VSM_SAMPLES !== n.blurSamples &&
      ((g.defines.VSM_SAMPLES = n.blurSamples),
      (v.defines.VSM_SAMPLES = n.blurSamples),
      (g.needsUpdate = !0),
      (v.needsUpdate = !0)),
      null === n.mapPass && (n.mapPass = new wi(r.x, r.y)),
      (g.uniforms.shadow_pass.value = n.map.texture),
      (g.uniforms.resolution.value = n.mapSize),
      (g.uniforms.radius.value = n.radius),
      t.setRenderTarget(n.mapPass),
      t.clear(),
      t.renderBufferDirect(i, null, s, g, x, null),
      (v.uniforms.shadow_pass.value = n.mapPass.texture),
      (v.uniforms.resolution.value = n.mapSize),
      (v.uniforms.radius.value = n.radius),
      t.setRenderTarget(n.map),
      t.clear(),
      t.renderBufferDirect(i, null, s, v, x, null);
  }
  function b(e, n, i, r) {
    let s = null;
    const a =
      !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
    if (void 0 !== a) s = a;
    else if (
      ((s = !0 === i.isPointLight ? c : o),
      (t.localClippingEnabled &&
        !0 === n.clipShadows &&
        Array.isArray(n.clippingPlanes) &&
        0 !== n.clippingPlanes.length) ||
        (n.displacementMap && 0 !== n.displacementScale) ||
        (n.alphaMap && n.alphaTest > 0) ||
        (n.map && n.alphaTest > 0))
    ) {
      const t = s.uuid,
        e = n.uuid;
      let i = p[t];
      void 0 === i && ((i = {}), (p[t] = i));
      let r = i[e];
      void 0 === r &&
        ((r = s.clone()), (i[e] = r), n.addEventListener("dispose", T)),
        (s = r);
    }
    if (
      ((s.visible = n.visible),
      (s.wireframe = n.wireframe),
      (s.side =
        r === h
          ? null !== n.shadowSide
            ? n.shadowSide
            : n.side
          : null !== n.shadowSide
          ? n.shadowSide
          : f[n.side]),
      (s.alphaMap = n.alphaMap),
      (s.alphaTest = n.alphaTest),
      (s.map = n.map),
      (s.clipShadows = n.clipShadows),
      (s.clippingPlanes = n.clippingPlanes),
      (s.clipIntersection = n.clipIntersection),
      (s.displacementMap = n.displacementMap),
      (s.displacementScale = n.displacementScale),
      (s.displacementBias = n.displacementBias),
      (s.wireframeLinewidth = n.wireframeLinewidth),
      (s.linewidth = n.linewidth),
      !0 === i.isPointLight && !0 === s.isMeshDistanceMaterial)
    ) {
      t.properties.get(s).light = i;
    }
    return s;
  }
  function w(n, r, s, a, o) {
    if (!1 === n.visible) return;
    if (
      n.layers.test(r.layers) &&
      (n.isMesh || n.isLine || n.isPoints) &&
      (n.castShadow || (n.receiveShadow && o === h)) &&
      (!n.frustumCulled || i.intersectsObject(n))
    ) {
      n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
      const i = e.update(n),
        l = n.material;
      if (Array.isArray(l)) {
        const e = i.groups;
        for (let c = 0, h = e.length; c < h; c++) {
          const h = e[c],
            u = l[h.materialIndex];
          if (u && u.visible) {
            const e = b(n, u, a, o);
            n.onBeforeShadow(t, n, r, s, i, e, h),
              t.renderBufferDirect(s, null, i, e, n, h),
              n.onAfterShadow(t, n, r, s, i, e, h);
          }
        }
      } else if (l.visible) {
        const e = b(n, l, a, o);
        n.onBeforeShadow(t, n, r, s, i, e, null),
          t.renderBufferDirect(s, null, i, e, n, null),
          n.onAfterShadow(t, n, r, s, i, e, null);
      }
    }
    const l = n.children;
    for (let t = 0, e = l.length; t < e; t++) w(l[t], r, s, a, o);
  }
  function T(t) {
    t.target.removeEventListener("dispose", T);
    for (const e in p) {
      const n = p[e],
        i = t.target.uuid;
      if (i in n) {
        n[i].dispose(), delete n[i];
      }
    }
  }
  this.render = function (e, n, o) {
    if (!1 === y.enabled) return;
    if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
    if (0 === e.length) return;
    const l = t.getRenderTarget(),
      c = t.getActiveCubeFace(),
      u = t.getActiveMipmapLevel(),
      d = t.state;
    d.setBlending(0),
      d.buffers.color.setClear(1, 1, 1, 1),
      d.buffers.depth.setTest(!0),
      d.setScissorTest(!1);
    const p = M !== h && this.type === h,
      f = M === h && this.type !== h;
    for (let l = 0, c = e.length; l < c; l++) {
      const c = e[l],
        u = c.shadow;
      if (void 0 === u) {
        console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
        continue;
      }
      if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
      r.copy(u.mapSize);
      const g = u.getFrameExtents();
      if (
        (r.multiply(g),
        s.copy(u.mapSize),
        (r.x > m || r.y > m) &&
          (r.x > m &&
            ((s.x = Math.floor(m / g.x)),
            (r.x = s.x * g.x),
            (u.mapSize.x = s.x)),
          r.y > m &&
            ((s.y = Math.floor(m / g.y)),
            (r.y = s.y * g.y),
            (u.mapSize.y = s.y))),
        null === u.map || !0 === p || !0 === f)
      ) {
        const t = this.type !== h ? { minFilter: gt, magFilter: gt } : {};
        null !== u.map && u.map.dispose(),
          (u.map = new wi(r.x, r.y, t)),
          (u.map.texture.name = c.name + ".shadowMap"),
          u.camera.updateProjectionMatrix();
      }
      t.setRenderTarget(u.map), t.clear();
      const v = u.getViewportCount();
      for (let t = 0; t < v; t++) {
        const e = u.getViewport(t);
        a.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w),
          d.viewport(a),
          u.updateMatrices(c, t),
          (i = u.getFrustum()),
          w(n, o, u.camera, c, this.type);
      }
      !0 !== u.isPointLightShadow && this.type === h && S(u, o),
        (u.needsUpdate = !1);
    }
    (M = this.type), (y.needsUpdate = !1), t.setRenderTarget(l, c, u);
  };
}
function Vl(t) {
  const e = new (function () {
      let e = !1;
      const n = new Si();
      let i = null;
      const r = new Si(0, 0, 0, 0);
      return {
        setMask: function (n) {
          i === n || e || (t.colorMask(n, n, n, n), (i = n));
        },
        setLocked: function (t) {
          e = t;
        },
        setClear: function (e, i, s, a, o) {
          !0 === o && ((e *= a), (i *= a), (s *= a)),
            n.set(e, i, s, a),
            !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n));
        },
        reset: function () {
          (e = !1), (i = null), r.set(-1, 0, 0, 0);
        },
      };
    })(),
    n = new (function () {
      let e = !1,
        n = null,
        i = null,
        r = null;
      return {
        setTest: function (e) {
          e ? G(t.DEPTH_TEST) : W(t.DEPTH_TEST);
        },
        setMask: function (i) {
          n === i || e || (t.depthMask(i), (n = i));
        },
        setFunc: function (e) {
          if (i !== e) {
            switch (e) {
              case 0:
                t.depthFunc(t.NEVER);
                break;
              case 1:
                t.depthFunc(t.ALWAYS);
                break;
              case 2:
                t.depthFunc(t.LESS);
                break;
              case 3:
              default:
                t.depthFunc(t.LEQUAL);
                break;
              case 4:
                t.depthFunc(t.EQUAL);
                break;
              case 5:
                t.depthFunc(t.GEQUAL);
                break;
              case 6:
                t.depthFunc(t.GREATER);
                break;
              case 7:
                t.depthFunc(t.NOTEQUAL);
            }
            i = e;
          }
        },
        setLocked: function (t) {
          e = t;
        },
        setClear: function (e) {
          r !== e && (t.clearDepth(e), (r = e));
        },
        reset: function () {
          (e = !1), (n = null), (i = null), (r = null);
        },
      };
    })(),
    i = new (function () {
      let e = !1,
        n = null,
        i = null,
        r = null,
        s = null,
        a = null,
        o = null,
        l = null,
        c = null;
      return {
        setTest: function (n) {
          e || (n ? G(t.STENCIL_TEST) : W(t.STENCIL_TEST));
        },
        setMask: function (i) {
          n === i || e || (t.stencilMask(i), (n = i));
        },
        setFunc: function (e, n, a) {
          (i === e && r === n && s === a) ||
            (t.stencilFunc(e, n, a), (i = e), (r = n), (s = a));
        },
        setOp: function (e, n, i) {
          (a === e && o === n && l === i) ||
            (t.stencilOp(e, n, i), (a = e), (o = n), (l = i));
        },
        setLocked: function (t) {
          e = t;
        },
        setClear: function (e) {
          c !== e && (t.clearStencil(e), (c = e));
        },
        reset: function () {
          (e = !1),
            (n = null),
            (i = null),
            (r = null),
            (s = null),
            (a = null),
            (o = null),
            (l = null),
            (c = null);
        },
      };
    })(),
    r = new WeakMap(),
    s = new WeakMap();
  let a = {},
    o = {},
    l = new WeakMap(),
    c = [],
    h = null,
    u = !1,
    p = null,
    m = null,
    f = null,
    g = null,
    v = null,
    _ = null,
    x = null,
    M = new Zr(0, 0, 0),
    S = 0,
    b = !1,
    w = null,
    T = null,
    E = null,
    A = null,
    R = null;
  const I = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let L = !1,
    U = 0;
  const N = t.getParameter(t.VERSION);
  -1 !== N.indexOf("WebGL")
    ? ((U = parseFloat(/^WebGL (\d)/.exec(N)[1])), (L = U >= 1))
    : -1 !== N.indexOf("OpenGL ES") &&
      ((U = parseFloat(/^OpenGL ES (\d)/.exec(N)[1])), (L = U >= 2));
  let D = null,
    O = {};
  const F = t.getParameter(t.SCISSOR_BOX),
    B = t.getParameter(t.VIEWPORT),
    z = new Si().fromArray(F),
    k = new Si().fromArray(B);
  function V(e, n, i, r) {
    const s = new Uint8Array(4),
      a = t.createTexture();
    t.bindTexture(e, a),
      t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
      t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
    for (let a = 0; a < i; a++)
      e === t.TEXTURE_3D || e === t.TEXTURE_2D_ARRAY
        ? t.texImage3D(n, 0, t.RGBA, 1, 1, r, 0, t.RGBA, t.UNSIGNED_BYTE, s)
        : t.texImage2D(n + a, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, s);
    return a;
  }
  const H = {};
  function G(e) {
    !0 !== a[e] && (t.enable(e), (a[e] = !0));
  }
  function W(e) {
    !1 !== a[e] && (t.disable(e), (a[e] = !1));
  }
  (H[t.TEXTURE_2D] = V(t.TEXTURE_2D, t.TEXTURE_2D, 1)),
    (H[t.TEXTURE_CUBE_MAP] = V(
      t.TEXTURE_CUBE_MAP,
      t.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (H[t.TEXTURE_2D_ARRAY] = V(t.TEXTURE_2D_ARRAY, t.TEXTURE_2D_ARRAY, 1, 1)),
    (H[t.TEXTURE_3D] = V(t.TEXTURE_3D, t.TEXTURE_3D, 1, 1)),
    e.setClear(0, 0, 0, 1),
    n.setClear(1),
    i.setClear(0),
    G(t.DEPTH_TEST),
    n.setFunc(3),
    Y(!1),
    Z(1),
    G(t.CULL_FACE),
    q(0);
  const X = {
    [y]: t.FUNC_ADD,
    101: t.FUNC_SUBTRACT,
    102: t.FUNC_REVERSE_SUBTRACT,
  };
  (X[103] = t.MIN), (X[104] = t.MAX);
  const j = {
    200: t.ZERO,
    201: t.ONE,
    202: t.SRC_COLOR,
    [C]: t.SRC_ALPHA,
    210: t.SRC_ALPHA_SATURATE,
    208: t.DST_COLOR,
    206: t.DST_ALPHA,
    203: t.ONE_MINUS_SRC_COLOR,
    [P]: t.ONE_MINUS_SRC_ALPHA,
    209: t.ONE_MINUS_DST_COLOR,
    207: t.ONE_MINUS_DST_ALPHA,
    211: t.CONSTANT_COLOR,
    212: t.ONE_MINUS_CONSTANT_COLOR,
    213: t.CONSTANT_ALPHA,
    214: t.ONE_MINUS_CONSTANT_ALPHA,
  };
  function q(e, n, i, r, s, a, o, l, c, h) {
    if (0 !== e) {
      if ((!1 === u && (G(t.BLEND), (u = !0)), 5 === e))
        (s = s || n),
          (a = a || i),
          (o = o || r),
          (n === m && s === v) ||
            (t.blendEquationSeparate(X[n], X[s]), (m = n), (v = s)),
          (i === f && r === g && a === _ && o === x) ||
            (t.blendFuncSeparate(j[i], j[r], j[a], j[o]),
            (f = i),
            (g = r),
            (_ = a),
            (x = o)),
          (!1 !== l.equals(M) && c === S) ||
            (t.blendColor(l.r, l.g, l.b, c), M.copy(l), (S = c)),
          (p = e),
          (b = !1);
      else if (e !== p || h !== b) {
        if (
          ((m === y && v === y) ||
            (t.blendEquation(t.FUNC_ADD), (m = y), (v = y)),
          h)
        )
          switch (e) {
            case 1:
              t.blendFuncSeparate(
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              t.blendFunc(t.ONE, t.ONE);
              break;
            case 3:
              t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
              break;
            case 4:
              t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e);
          }
        else
          switch (e) {
            case 1:
              t.blendFuncSeparate(
                t.SRC_ALPHA,
                t.ONE_MINUS_SRC_ALPHA,
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              t.blendFunc(t.SRC_ALPHA, t.ONE);
              break;
            case 3:
              t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
              break;
            case 4:
              t.blendFunc(t.ZERO, t.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e);
          }
        (f = null),
          (g = null),
          (_ = null),
          (x = null),
          M.set(0, 0, 0),
          (S = 0),
          (p = e),
          (b = h);
      }
    } else !0 === u && (W(t.BLEND), (u = !1));
  }
  function Y(e) {
    w !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), (w = e));
  }
  function Z(e) {
    0 !== e
      ? (G(t.CULL_FACE),
        e !== T &&
          (1 === e
            ? t.cullFace(t.BACK)
            : 2 === e
            ? t.cullFace(t.FRONT)
            : t.cullFace(t.FRONT_AND_BACK)))
      : W(t.CULL_FACE),
      (T = e);
  }
  function J(e, n, i) {
    e
      ? (G(t.POLYGON_OFFSET_FILL),
        (A === n && R === i) || (t.polygonOffset(n, i), (A = n), (R = i)))
      : W(t.POLYGON_OFFSET_FILL);
  }
  return {
    buffers: { color: e, depth: n, stencil: i },
    enable: G,
    disable: W,
    bindFramebuffer: function (e, n) {
      return (
        o[e] !== n &&
        (t.bindFramebuffer(e, n),
        (o[e] = n),
        e === t.DRAW_FRAMEBUFFER && (o[t.FRAMEBUFFER] = n),
        e === t.FRAMEBUFFER && (o[t.DRAW_FRAMEBUFFER] = n),
        !0)
      );
    },
    drawBuffers: function (e, n) {
      let i = c,
        r = !1;
      if (e) {
        (i = l.get(n)), void 0 === i && ((i = []), l.set(n, i));
        const s = e.textures;
        if (i.length !== s.length || i[0] !== t.COLOR_ATTACHMENT0) {
          for (let e = 0, n = s.length; e < n; e++)
            i[e] = t.COLOR_ATTACHMENT0 + e;
          (i.length = s.length), (r = !0);
        }
      } else i[0] !== t.BACK && ((i[0] = t.BACK), (r = !0));
      r && t.drawBuffers(i);
    },
    useProgram: function (e) {
      return h !== e && (t.useProgram(e), (h = e), !0);
    },
    setBlending: q,
    setMaterial: function (r, s) {
      2 === r.side ? W(t.CULL_FACE) : G(t.CULL_FACE);
      let a = r.side === d;
      s && (a = !a),
        Y(a),
        1 === r.blending && !1 === r.transparent
          ? q(0)
          : q(
              r.blending,
              r.blendEquation,
              r.blendSrc,
              r.blendDst,
              r.blendEquationAlpha,
              r.blendSrcAlpha,
              r.blendDstAlpha,
              r.blendColor,
              r.blendAlpha,
              r.premultipliedAlpha
            ),
        n.setFunc(r.depthFunc),
        n.setTest(r.depthTest),
        n.setMask(r.depthWrite),
        e.setMask(r.colorWrite);
      const o = r.stencilWrite;
      i.setTest(o),
        o &&
          (i.setMask(r.stencilWriteMask),
          i.setFunc(r.stencilFunc, r.stencilRef, r.stencilFuncMask),
          i.setOp(r.stencilFail, r.stencilZFail, r.stencilZPass)),
        J(r.polygonOffset, r.polygonOffsetFactor, r.polygonOffsetUnits),
        !0 === r.alphaToCoverage
          ? G(t.SAMPLE_ALPHA_TO_COVERAGE)
          : W(t.SAMPLE_ALPHA_TO_COVERAGE);
    },
    setFlipSided: Y,
    setCullFace: Z,
    setLineWidth: function (e) {
      e !== E && (L && t.lineWidth(e), (E = e));
    },
    setPolygonOffset: J,
    setScissorTest: function (e) {
      e ? G(t.SCISSOR_TEST) : W(t.SCISSOR_TEST);
    },
    activeTexture: function (e) {
      void 0 === e && (e = t.TEXTURE0 + I - 1),
        D !== e && (t.activeTexture(e), (D = e));
    },
    bindTexture: function (e, n, i) {
      void 0 === i && (i = null === D ? t.TEXTURE0 + I - 1 : D);
      let r = O[i];
      void 0 === r && ((r = { type: void 0, texture: void 0 }), (O[i] = r)),
        (r.type === e && r.texture === n) ||
          (D !== i && (t.activeTexture(i), (D = i)),
          t.bindTexture(e, n || H[e]),
          (r.type = e),
          (r.texture = n));
    },
    unbindTexture: function () {
      const e = O[D];
      void 0 !== e &&
        void 0 !== e.type &&
        (t.bindTexture(e.type, null), (e.type = void 0), (e.texture = void 0));
    },
    compressedTexImage2D: function () {
      try {
        t.compressedTexImage2D.apply(t, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    compressedTexImage3D: function () {
      try {
        t.compressedTexImage3D.apply(t, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texImage2D: function () {
      try {
        t.texImage2D.apply(t, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texImage3D: function () {
      try {
        t.texImage3D.apply(t, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    updateUBOMapping: function (e, n) {
      let i = s.get(n);
      void 0 === i && ((i = new WeakMap()), s.set(n, i));
      let r = i.get(e);
      void 0 === r && ((r = t.getUniformBlockIndex(n, e.name)), i.set(e, r));
    },
    uniformBlockBinding: function (e, n) {
      const i = s.get(n).get(e);
      r.get(n) !== i &&
        (t.uniformBlockBinding(n, i, e.__bindingPointIndex), r.set(n, i));
    },
    texStorage2D: function () {
      try {
        t.texStorage2D.apply(t, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texStorage3D: function () {
      try {
        t.texStorage3D.apply(t, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texSubImage2D: function () {
      try {
        t.texSubImage2D.apply(t, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texSubImage3D: function () {
      try {
        t.texSubImage3D.apply(t, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    compressedTexSubImage2D: function () {
      try {
        t.compressedTexSubImage2D.apply(t, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    compressedTexSubImage3D: function () {
      try {
        t.compressedTexSubImage3D.apply(t, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    scissor: function (e) {
      !1 === z.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), z.copy(e));
    },
    viewport: function (e) {
      !1 === k.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), k.copy(e));
    },
    reset: function () {
      t.disable(t.BLEND),
        t.disable(t.CULL_FACE),
        t.disable(t.DEPTH_TEST),
        t.disable(t.POLYGON_OFFSET_FILL),
        t.disable(t.SCISSOR_TEST),
        t.disable(t.STENCIL_TEST),
        t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),
        t.blendEquation(t.FUNC_ADD),
        t.blendFunc(t.ONE, t.ZERO),
        t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
        t.blendColor(0, 0, 0, 0),
        t.colorMask(!0, !0, !0, !0),
        t.clearColor(0, 0, 0, 0),
        t.depthMask(!0),
        t.depthFunc(t.LESS),
        t.clearDepth(1),
        t.stencilMask(4294967295),
        t.stencilFunc(t.ALWAYS, 0, 4294967295),
        t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
        t.clearStencil(0),
        t.cullFace(t.BACK),
        t.frontFace(t.CCW),
        t.polygonOffset(0, 0),
        t.activeTexture(t.TEXTURE0),
        t.bindFramebuffer(t.FRAMEBUFFER, null),
        t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
        t.bindFramebuffer(t.READ_FRAMEBUFFER, null),
        t.useProgram(null),
        t.lineWidth(1),
        t.scissor(0, 0, t.canvas.width, t.canvas.height),
        t.viewport(0, 0, t.canvas.width, t.canvas.height),
        (a = {}),
        (D = null),
        (O = {}),
        (o = {}),
        (l = new WeakMap()),
        (c = []),
        (h = null),
        (u = !1),
        (p = null),
        (m = null),
        (f = null),
        (g = null),
        (v = null),
        (_ = null),
        (x = null),
        (M = new Zr(0, 0, 0)),
        (S = 0),
        (b = !1),
        (w = null),
        (T = null),
        (E = null),
        (A = null),
        (R = null),
        z.set(0, 0, t.canvas.width, t.canvas.height),
        k.set(0, 0, t.canvas.width, t.canvas.height),
        e.reset(),
        n.reset(),
        i.reset();
    },
  };
}
function Hl(t, e, n, i) {
  const r = (function (t) {
    switch (t) {
      case Et:
      case At:
        return { byteLength: 1, components: 1 };
      case Ct:
      case Rt:
      case Ut:
        return { byteLength: 2, components: 1 };
      case Nt:
      case Dt:
        return { byteLength: 2, components: 4 };
      case It:
      case Pt:
      case Lt:
        return { byteLength: 4, components: 1 };
      case Ft:
        return { byteLength: 4, components: 3 };
    }
    throw new Error(`Unknown texture type ${t}.`);
  })(i);
  switch (n) {
    case Bt:
    case Vt:
      return t * e;
    case Ht:
      return t * e * 2;
    case Xt:
    case jt:
      return ((t * e) / r.components) * r.byteLength;
    case qt:
    case Yt:
      return ((t * e * 2) / r.components) * r.byteLength;
    case zt:
      return ((t * e * 3) / r.components) * r.byteLength;
    case kt:
    case Jt:
      return ((t * e * 4) / r.components) * r.byteLength;
    case Kt:
    case $t:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Qt:
    case te:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ne:
    case re:
      return (Math.max(t, 16) * Math.max(e, 8)) / 4;
    case ee:
    case ie:
      return (Math.max(t, 8) * Math.max(e, 8)) / 2;
    case se:
    case ae:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case oe:
    case le:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ce:
      return Math.floor((t + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case he:
      return Math.floor((t + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case ue:
      return Math.floor((t + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case de:
      return Math.floor((t + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case pe:
      return Math.floor((t + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case me:
      return Math.floor((t + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case fe:
      return Math.floor((t + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case ge:
      return Math.floor((t + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case ve:
      return Math.floor((t + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case _e:
      return Math.floor((t + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case xe:
      return Math.floor((t + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case ye:
      return Math.floor((t + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Me:
      return Math.floor((t + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Se:
    case be:
    case we:
      return Math.ceil(t / 4) * Math.ceil(e / 4) * 16;
    case Te:
    case Ee:
      return Math.ceil(t / 4) * Math.ceil(e / 4) * 8;
    case Ae:
    case Re:
      return Math.ceil(t / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${n} format.`);
}
const Gl = {
  contain: function (t, e) {
    const n = t.image && t.image.width ? t.image.width / t.image.height : 1;
    return (
      n > e
        ? ((t.repeat.x = 1),
          (t.repeat.y = n / e),
          (t.offset.x = 0),
          (t.offset.y = (1 - t.repeat.y) / 2))
        : ((t.repeat.x = e / n),
          (t.repeat.y = 1),
          (t.offset.x = (1 - t.repeat.x) / 2),
          (t.offset.y = 0)),
      t
    );
  },
  cover: function (t, e) {
    const n = t.image && t.image.width ? t.image.width / t.image.height : 1;
    return (
      n > e
        ? ((t.repeat.x = e / n),
          (t.repeat.y = 1),
          (t.offset.x = (1 - t.repeat.x) / 2),
          (t.offset.y = 0))
        : ((t.repeat.x = 1),
          (t.repeat.y = n / e),
          (t.offset.x = 0),
          (t.offset.y = (1 - t.repeat.y) / 2)),
      t
    );
  },
  fill: function (t) {
    return (
      (t.repeat.x = 1), (t.repeat.y = 1), (t.offset.x = 0), (t.offset.y = 0), t
    );
  },
  getByteLength: Hl,
};
function Wl(t, e, n, i, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    l =
      "undefined" != typeof navigator &&
      /OculusBrowser/g.test(navigator.userAgent),
    c = new $n(),
    h = new WeakMap();
  let u;
  const d = new WeakMap();
  let p = !1;
  try {
    p =
      "undefined" != typeof OffscreenCanvas &&
      null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (t) {}
  function m(t, e) {
    return p ? new OffscreenCanvas(t, e) : ri("canvas");
  }
  function f(t, e, n) {
    let i = 1;
    const r = k(t);
    if (
      ((r.width > n || r.height > n) && (i = n / Math.max(r.width, r.height)),
      i < 1)
    ) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          t instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap) ||
        ("undefined" != typeof VideoFrame && t instanceof VideoFrame)
      ) {
        const n = Math.floor(i * r.width),
          s = Math.floor(i * r.height);
        void 0 === u && (u = m(n, s));
        const a = e ? m(n, s) : u;
        (a.width = n), (a.height = s);
        return (
          a.getContext("2d").drawImage(t, 0, 0, n, s),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              r.width +
              "x" +
              r.height +
              ") to (" +
              n +
              "x" +
              s +
              ")."
          ),
          a
        );
      }
      return (
        "data" in t &&
          console.warn(
            "THREE.WebGLRenderer: Image in DataTexture is too big (" +
              r.width +
              "x" +
              r.height +
              ")."
          ),
        t
      );
    }
    return t;
  }
  function g(t) {
    return t.generateMipmaps && t.minFilter !== gt && t.minFilter !== Mt;
  }
  function v(e) {
    t.generateMipmap(e);
  }
  function _(n, i, r, s, a = !1) {
    if (null !== n) {
      if (void 0 !== t[n]) return t[n];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          n +
          "'"
      );
    }
    let o = i;
    if (
      (i === t.RED &&
        (r === t.FLOAT && (o = t.R32F),
        r === t.HALF_FLOAT && (o = t.R16F),
        r === t.UNSIGNED_BYTE && (o = t.R8)),
      i === t.RED_INTEGER &&
        (r === t.UNSIGNED_BYTE && (o = t.R8UI),
        r === t.UNSIGNED_SHORT && (o = t.R16UI),
        r === t.UNSIGNED_INT && (o = t.R32UI),
        r === t.BYTE && (o = t.R8I),
        r === t.SHORT && (o = t.R16I),
        r === t.INT && (o = t.R32I)),
      i === t.RG &&
        (r === t.FLOAT && (o = t.RG32F),
        r === t.HALF_FLOAT && (o = t.RG16F),
        r === t.UNSIGNED_BYTE && (o = t.RG8)),
      i === t.RG_INTEGER &&
        (r === t.UNSIGNED_BYTE && (o = t.RG8UI),
        r === t.UNSIGNED_SHORT && (o = t.RG16UI),
        r === t.UNSIGNED_INT && (o = t.RG32UI),
        r === t.BYTE && (o = t.RG8I),
        r === t.SHORT && (o = t.RG16I),
        r === t.INT && (o = t.RG32I)),
      i === t.RGB && r === t.UNSIGNED_INT_5_9_9_9_REV && (o = t.RGB9_E5),
      i === t.RGBA)
    ) {
      const e = a ? $e : di.getTransfer(s);
      r === t.FLOAT && (o = t.RGBA32F),
        r === t.HALF_FLOAT && (o = t.RGBA16F),
        r === t.UNSIGNED_BYTE && (o = e === Qe ? t.SRGB8_ALPHA8 : t.RGBA8),
        r === t.UNSIGNED_SHORT_4_4_4_4 && (o = t.RGBA4),
        r === t.UNSIGNED_SHORT_5_5_5_1 && (o = t.RGB5_A1);
    }
    return (
      (o !== t.R16F &&
        o !== t.R32F &&
        o !== t.RG16F &&
        o !== t.RG32F &&
        o !== t.RGBA16F &&
        o !== t.RGBA32F) ||
        e.get("EXT_color_buffer_float"),
      o
    );
  }
  function x(e, n) {
    let i;
    return (
      e
        ? null === n || n === It || n === Ot
          ? (i = t.DEPTH24_STENCIL8)
          : n === Lt
          ? (i = t.DEPTH32F_STENCIL8)
          : n === Ct &&
            ((i = t.DEPTH24_STENCIL8),
            console.warn(
              "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
            ))
        : null === n || n === It || n === Ot
        ? (i = t.DEPTH_COMPONENT24)
        : n === Lt
        ? (i = t.DEPTH_COMPONENT32F)
        : n === Ct && (i = t.DEPTH_COMPONENT16),
      i
    );
  }
  function y(t, e) {
    return !0 === g(t) ||
      (t.isFramebufferTexture && t.minFilter !== gt && t.minFilter !== Mt)
      ? Math.log2(Math.max(e.width, e.height)) + 1
      : void 0 !== t.mipmaps && t.mipmaps.length > 0
      ? t.mipmaps.length
      : t.isCompressedTexture && Array.isArray(t.image)
      ? e.mipmaps.length
      : 1;
  }
  function M(t) {
    const e = t.target;
    e.removeEventListener("dispose", M),
      (function (t) {
        const e = i.get(t);
        if (void 0 === e.__webglInit) return;
        const n = t.source,
          r = d.get(n);
        if (r) {
          const i = r[e.__cacheKey];
          i.usedTimes--,
            0 === i.usedTimes && b(t),
            0 === Object.keys(r).length && d.delete(n);
        }
        i.remove(t);
      })(e),
      e.isVideoTexture && h.delete(e);
  }
  function S(e) {
    const n = e.target;
    n.removeEventListener("dispose", S),
      (function (e) {
        const n = i.get(e);
        e.depthTexture && e.depthTexture.dispose();
        if (e.isWebGLCubeRenderTarget)
          for (let e = 0; e < 6; e++) {
            if (Array.isArray(n.__webglFramebuffer[e]))
              for (let i = 0; i < n.__webglFramebuffer[e].length; i++)
                t.deleteFramebuffer(n.__webglFramebuffer[e][i]);
            else t.deleteFramebuffer(n.__webglFramebuffer[e]);
            n.__webglDepthbuffer &&
              t.deleteRenderbuffer(n.__webglDepthbuffer[e]);
          }
        else {
          if (Array.isArray(n.__webglFramebuffer))
            for (let e = 0; e < n.__webglFramebuffer.length; e++)
              t.deleteFramebuffer(n.__webglFramebuffer[e]);
          else t.deleteFramebuffer(n.__webglFramebuffer);
          if (
            (n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer),
            n.__webglMultisampledFramebuffer &&
              t.deleteFramebuffer(n.__webglMultisampledFramebuffer),
            n.__webglColorRenderbuffer)
          )
            for (let e = 0; e < n.__webglColorRenderbuffer.length; e++)
              n.__webglColorRenderbuffer[e] &&
                t.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);
          n.__webglDepthRenderbuffer &&
            t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
        }
        const r = e.textures;
        for (let e = 0, n = r.length; e < n; e++) {
          const n = i.get(r[e]);
          n.__webglTexture &&
            (t.deleteTexture(n.__webglTexture), a.memory.textures--),
            i.remove(r[e]);
        }
        i.remove(e);
      })(n);
  }
  function b(e) {
    const n = i.get(e);
    t.deleteTexture(n.__webglTexture);
    const r = e.source;
    delete d.get(r)[n.__cacheKey], a.memory.textures--;
  }
  let w = 0;
  function T(e, r) {
    const s = i.get(e);
    if (
      (e.isVideoTexture &&
        (function (t) {
          const e = a.render.frame;
          h.get(t) !== e && (h.set(t, e), t.update());
        })(e),
      !1 === e.isRenderTargetTexture &&
        e.version > 0 &&
        s.__version !== e.version)
    ) {
      const t = e.image;
      if (null === t)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else {
        if (!1 !== t.complete) return void I(s, e, r);
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      }
    }
    n.bindTexture(t.TEXTURE_2D, s.__webglTexture, t.TEXTURE0 + r);
  }
  const E = { [pt]: t.REPEAT, [mt]: t.CLAMP_TO_EDGE, [ft]: t.MIRRORED_REPEAT },
    A = {
      [gt]: t.NEAREST,
      [vt]: t.NEAREST_MIPMAP_NEAREST,
      [xt]: t.NEAREST_MIPMAP_LINEAR,
      [Mt]: t.LINEAR,
      [St]: t.LINEAR_MIPMAP_NEAREST,
      [wt]: t.LINEAR_MIPMAP_LINEAR,
    },
    R = {
      512: t.NEVER,
      519: t.ALWAYS,
      513: t.LESS,
      [Sn]: t.LEQUAL,
      514: t.EQUAL,
      518: t.GEQUAL,
      516: t.GREATER,
      517: t.NOTEQUAL,
    };
  function C(n, s) {
    if (
      (s.type !== Lt ||
        !1 !== e.has("OES_texture_float_linear") ||
        (s.magFilter !== Mt &&
          s.magFilter !== St &&
          s.magFilter !== xt &&
          s.magFilter !== wt &&
          s.minFilter !== Mt &&
          s.minFilter !== St &&
          s.minFilter !== xt &&
          s.minFilter !== wt) ||
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      t.texParameteri(n, t.TEXTURE_WRAP_S, E[s.wrapS]),
      t.texParameteri(n, t.TEXTURE_WRAP_T, E[s.wrapT]),
      (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
        t.texParameteri(n, t.TEXTURE_WRAP_R, E[s.wrapR]),
      t.texParameteri(n, t.TEXTURE_MAG_FILTER, A[s.magFilter]),
      t.texParameteri(n, t.TEXTURE_MIN_FILTER, A[s.minFilter]),
      s.compareFunction &&
        (t.texParameteri(n, t.TEXTURE_COMPARE_MODE, t.COMPARE_REF_TO_TEXTURE),
        t.texParameteri(n, t.TEXTURE_COMPARE_FUNC, R[s.compareFunction])),
      !0 === e.has("EXT_texture_filter_anisotropic"))
    ) {
      if (s.magFilter === gt) return;
      if (s.minFilter !== xt && s.minFilter !== wt) return;
      if (s.type === Lt && !1 === e.has("OES_texture_float_linear")) return;
      if (s.anisotropy > 1 || i.get(s).__currentAnisotropy) {
        const a = e.get("EXT_texture_filter_anisotropic");
        t.texParameterf(
          n,
          a.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(s.anisotropy, r.getMaxAnisotropy())
        ),
          (i.get(s).__currentAnisotropy = s.anisotropy);
      }
    }
  }
  function P(e, n) {
    let i = !1;
    void 0 === e.__webglInit &&
      ((e.__webglInit = !0), n.addEventListener("dispose", M));
    const r = n.source;
    let s = d.get(r);
    void 0 === s && ((s = {}), d.set(r, s));
    const o = (function (t) {
      const e = [];
      return (
        e.push(t.wrapS),
        e.push(t.wrapT),
        e.push(t.wrapR || 0),
        e.push(t.magFilter),
        e.push(t.minFilter),
        e.push(t.anisotropy),
        e.push(t.internalFormat),
        e.push(t.format),
        e.push(t.type),
        e.push(t.generateMipmaps),
        e.push(t.premultiplyAlpha),
        e.push(t.flipY),
        e.push(t.unpackAlignment),
        e.push(t.colorSpace),
        e.join()
      );
    })(n);
    if (o !== e.__cacheKey) {
      void 0 === s[o] &&
        ((s[o] = { texture: t.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (i = !0)),
        s[o].usedTimes++;
      const r = s[e.__cacheKey];
      void 0 !== r && (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && b(n)),
        (e.__cacheKey = o),
        (e.__webglTexture = s[o].texture);
    }
    return i;
  }
  function I(e, a, o) {
    let l = t.TEXTURE_2D;
    (a.isDataArrayTexture || a.isCompressedArrayTexture) &&
      (l = t.TEXTURE_2D_ARRAY),
      a.isData3DTexture && (l = t.TEXTURE_3D);
    const c = P(e, a),
      h = a.source;
    n.bindTexture(l, e.__webglTexture, t.TEXTURE0 + o);
    const u = i.get(h);
    if (h.version !== u.__version || !0 === c) {
      n.activeTexture(t.TEXTURE0 + o);
      const e = di.getPrimaries(di.workingColorSpace),
        i = a.colorSpace === qe ? null : di.getPrimaries(a.colorSpace),
        d = a.colorSpace === qe || e === i ? t.NONE : t.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, a.flipY),
        t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha),
        t.pixelStorei(t.UNPACK_ALIGNMENT, a.unpackAlignment),
        t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
      let p = f(a.image, !1, r.maxTextureSize);
      p = z(a, p);
      const m = s.convert(a.format, a.colorSpace),
        M = s.convert(a.type);
      let S,
        b = _(a.internalFormat, m, M, a.colorSpace, a.isVideoTexture);
      C(l, a);
      const w = a.mipmaps,
        T = !0 !== a.isVideoTexture,
        E = void 0 === u.__version || !0 === c,
        A = h.dataReady,
        R = y(a, p);
      if (a.isDepthTexture)
        (b = x(a.format === Wt, a.type)),
          E &&
            (T
              ? n.texStorage2D(t.TEXTURE_2D, 1, b, p.width, p.height)
              : n.texImage2D(
                  t.TEXTURE_2D,
                  0,
                  b,
                  p.width,
                  p.height,
                  0,
                  m,
                  M,
                  null
                ));
      else if (a.isDataTexture)
        if (w.length > 0) {
          T && E && n.texStorage2D(t.TEXTURE_2D, R, b, w[0].width, w[0].height);
          for (let e = 0, i = w.length; e < i; e++)
            (S = w[e]),
              T
                ? A &&
                  n.texSubImage2D(
                    t.TEXTURE_2D,
                    e,
                    0,
                    0,
                    S.width,
                    S.height,
                    m,
                    M,
                    S.data
                  )
                : n.texImage2D(
                    t.TEXTURE_2D,
                    e,
                    b,
                    S.width,
                    S.height,
                    0,
                    m,
                    M,
                    S.data
                  );
          a.generateMipmaps = !1;
        } else
          T
            ? (E && n.texStorage2D(t.TEXTURE_2D, R, b, p.width, p.height),
              A &&
                n.texSubImage2D(
                  t.TEXTURE_2D,
                  0,
                  0,
                  0,
                  p.width,
                  p.height,
                  m,
                  M,
                  p.data
                ))
            : n.texImage2D(
                t.TEXTURE_2D,
                0,
                b,
                p.width,
                p.height,
                0,
                m,
                M,
                p.data
              );
      else if (a.isCompressedTexture)
        if (a.isCompressedArrayTexture) {
          T &&
            E &&
            n.texStorage3D(
              t.TEXTURE_2D_ARRAY,
              R,
              b,
              w[0].width,
              w[0].height,
              p.depth
            );
          for (let e = 0, i = w.length; e < i; e++)
            if (((S = w[e]), a.format !== kt))
              if (null !== m)
                if (T) {
                  if (A)
                    if (a.layerUpdates.size > 0) {
                      const i = Hl(S.width, S.height, a.format, a.type);
                      for (const r of a.layerUpdates) {
                        const s = S.data.subarray(
                          (r * i) / S.data.BYTES_PER_ELEMENT,
                          ((r + 1) * i) / S.data.BYTES_PER_ELEMENT
                        );
                        n.compressedTexSubImage3D(
                          t.TEXTURE_2D_ARRAY,
                          e,
                          0,
                          0,
                          r,
                          S.width,
                          S.height,
                          1,
                          m,
                          s,
                          0,
                          0
                        );
                      }
                      a.clearLayerUpdates();
                    } else
                      n.compressedTexSubImage3D(
                        t.TEXTURE_2D_ARRAY,
                        e,
                        0,
                        0,
                        0,
                        S.width,
                        S.height,
                        p.depth,
                        m,
                        S.data,
                        0,
                        0
                      );
                } else
                  n.compressedTexImage3D(
                    t.TEXTURE_2D_ARRAY,
                    e,
                    b,
                    S.width,
                    S.height,
                    p.depth,
                    0,
                    S.data,
                    0,
                    0
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                );
            else
              T
                ? A &&
                  n.texSubImage3D(
                    t.TEXTURE_2D_ARRAY,
                    e,
                    0,
                    0,
                    0,
                    S.width,
                    S.height,
                    p.depth,
                    m,
                    M,
                    S.data
                  )
                : n.texImage3D(
                    t.TEXTURE_2D_ARRAY,
                    e,
                    b,
                    S.width,
                    S.height,
                    p.depth,
                    0,
                    m,
                    M,
                    S.data
                  );
        } else {
          T && E && n.texStorage2D(t.TEXTURE_2D, R, b, w[0].width, w[0].height);
          for (let e = 0, i = w.length; e < i; e++)
            (S = w[e]),
              a.format !== kt
                ? null !== m
                  ? T
                    ? A &&
                      n.compressedTexSubImage2D(
                        t.TEXTURE_2D,
                        e,
                        0,
                        0,
                        S.width,
                        S.height,
                        m,
                        S.data
                      )
                    : n.compressedTexImage2D(
                        t.TEXTURE_2D,
                        e,
                        b,
                        S.width,
                        S.height,
                        0,
                        S.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : T
                ? A &&
                  n.texSubImage2D(
                    t.TEXTURE_2D,
                    e,
                    0,
                    0,
                    S.width,
                    S.height,
                    m,
                    M,
                    S.data
                  )
                : n.texImage2D(
                    t.TEXTURE_2D,
                    e,
                    b,
                    S.width,
                    S.height,
                    0,
                    m,
                    M,
                    S.data
                  );
        }
      else if (a.isDataArrayTexture)
        if (T) {
          if (
            (E &&
              n.texStorage3D(
                t.TEXTURE_2D_ARRAY,
                R,
                b,
                p.width,
                p.height,
                p.depth
              ),
            A)
          )
            if (a.layerUpdates.size > 0) {
              const e = Hl(p.width, p.height, a.format, a.type);
              for (const i of a.layerUpdates) {
                const r = p.data.subarray(
                  (i * e) / p.data.BYTES_PER_ELEMENT,
                  ((i + 1) * e) / p.data.BYTES_PER_ELEMENT
                );
                n.texSubImage3D(
                  t.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  i,
                  p.width,
                  p.height,
                  1,
                  m,
                  M,
                  r
                );
              }
              a.clearLayerUpdates();
            } else
              n.texSubImage3D(
                t.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                p.width,
                p.height,
                p.depth,
                m,
                M,
                p.data
              );
        } else
          n.texImage3D(
            t.TEXTURE_2D_ARRAY,
            0,
            b,
            p.width,
            p.height,
            p.depth,
            0,
            m,
            M,
            p.data
          );
      else if (a.isData3DTexture)
        T
          ? (E &&
              n.texStorage3D(t.TEXTURE_3D, R, b, p.width, p.height, p.depth),
            A &&
              n.texSubImage3D(
                t.TEXTURE_3D,
                0,
                0,
                0,
                0,
                p.width,
                p.height,
                p.depth,
                m,
                M,
                p.data
              ))
          : n.texImage3D(
              t.TEXTURE_3D,
              0,
              b,
              p.width,
              p.height,
              p.depth,
              0,
              m,
              M,
              p.data
            );
      else if (a.isFramebufferTexture) {
        if (E)
          if (T) n.texStorage2D(t.TEXTURE_2D, R, b, p.width, p.height);
          else {
            let e = p.width,
              i = p.height;
            for (let r = 0; r < R; r++)
              n.texImage2D(t.TEXTURE_2D, r, b, e, i, 0, m, M, null),
                (e >>= 1),
                (i >>= 1);
          }
      } else if (w.length > 0) {
        if (T && E) {
          const e = k(w[0]);
          n.texStorage2D(t.TEXTURE_2D, R, b, e.width, e.height);
        }
        for (let e = 0, i = w.length; e < i; e++)
          (S = w[e]),
            T
              ? A && n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, m, M, S)
              : n.texImage2D(t.TEXTURE_2D, e, b, m, M, S);
        a.generateMipmaps = !1;
      } else if (T) {
        if (E) {
          const e = k(p);
          n.texStorage2D(t.TEXTURE_2D, R, b, e.width, e.height);
        }
        A && n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, m, M, p);
      } else n.texImage2D(t.TEXTURE_2D, 0, b, m, M, p);
      g(a) && v(l), (u.__version = h.version), a.onUpdate && a.onUpdate(a);
    }
    e.__version = a.version;
  }
  function L(e, r, a, l, c, h) {
    const u = s.convert(a.format, a.colorSpace),
      d = s.convert(a.type),
      p = _(a.internalFormat, u, d, a.colorSpace);
    if (!i.get(r).__hasExternalTextures) {
      const e = Math.max(1, r.width >> h),
        i = Math.max(1, r.height >> h);
      c === t.TEXTURE_3D || c === t.TEXTURE_2D_ARRAY
        ? n.texImage3D(c, h, p, e, i, r.depth, 0, u, d, null)
        : n.texImage2D(c, h, p, e, i, 0, u, d, null);
    }
    n.bindFramebuffer(t.FRAMEBUFFER, e),
      B(r)
        ? o.framebufferTexture2DMultisampleEXT(
            t.FRAMEBUFFER,
            l,
            c,
            i.get(a).__webglTexture,
            0,
            F(r)
          )
        : (c === t.TEXTURE_2D ||
            (c >= t.TEXTURE_CUBE_MAP_POSITIVE_X &&
              c <= t.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          t.framebufferTexture2D(
            t.FRAMEBUFFER,
            l,
            c,
            i.get(a).__webglTexture,
            h
          ),
      n.bindFramebuffer(t.FRAMEBUFFER, null);
  }
  function U(e, n, i) {
    if ((t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer)) {
      const r = n.depthTexture,
        s = r && r.isDepthTexture ? r.type : null,
        a = x(n.stencilBuffer, s),
        l = n.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT,
        c = F(n);
      B(n)
        ? o.renderbufferStorageMultisampleEXT(
            t.RENDERBUFFER,
            c,
            a,
            n.width,
            n.height
          )
        : i
        ? t.renderbufferStorageMultisample(
            t.RENDERBUFFER,
            c,
            a,
            n.width,
            n.height
          )
        : t.renderbufferStorage(t.RENDERBUFFER, a, n.width, n.height),
        t.framebufferRenderbuffer(t.FRAMEBUFFER, l, t.RENDERBUFFER, e);
    } else {
      const e = n.textures;
      for (let r = 0; r < e.length; r++) {
        const a = e[r],
          l = s.convert(a.format, a.colorSpace),
          c = s.convert(a.type),
          h = _(a.internalFormat, l, c, a.colorSpace),
          u = F(n);
        i && !1 === B(n)
          ? t.renderbufferStorageMultisample(
              t.RENDERBUFFER,
              u,
              h,
              n.width,
              n.height
            )
          : B(n)
          ? o.renderbufferStorageMultisampleEXT(
              t.RENDERBUFFER,
              u,
              h,
              n.width,
              n.height
            )
          : t.renderbufferStorage(t.RENDERBUFFER, h, n.width, n.height);
      }
    }
    t.bindRenderbuffer(t.RENDERBUFFER, null);
  }
  function N(e) {
    const r = i.get(e),
      s = !0 === e.isWebGLCubeRenderTarget;
    if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
      if (s)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      !(function (e, r) {
        if (r && r.isWebGLCubeRenderTarget)
          throw new Error(
            "Depth Texture with cube render targets is not supported"
          );
        if (
          (n.bindFramebuffer(t.FRAMEBUFFER, e),
          !r.depthTexture || !r.depthTexture.isDepthTexture)
        )
          throw new Error(
            "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
          );
        (i.get(r.depthTexture).__webglTexture &&
          r.depthTexture.image.width === r.width &&
          r.depthTexture.image.height === r.height) ||
          ((r.depthTexture.image.width = r.width),
          (r.depthTexture.image.height = r.height),
          (r.depthTexture.needsUpdate = !0)),
          T(r.depthTexture, 0);
        const s = i.get(r.depthTexture).__webglTexture,
          a = F(r);
        if (r.depthTexture.format === Gt)
          B(r)
            ? o.framebufferTexture2DMultisampleEXT(
                t.FRAMEBUFFER,
                t.DEPTH_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0,
                a
              )
            : t.framebufferTexture2D(
                t.FRAMEBUFFER,
                t.DEPTH_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0
              );
        else {
          if (r.depthTexture.format !== Wt)
            throw new Error("Unknown depthTexture format");
          B(r)
            ? o.framebufferTexture2DMultisampleEXT(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0,
                a
              )
            : t.framebufferTexture2D(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0
              );
        }
      })(r.__webglFramebuffer, e);
    } else if (s) {
      r.__webglDepthbuffer = [];
      for (let i = 0; i < 6; i++)
        n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[i]),
          (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
          U(r.__webglDepthbuffer[i], e, !1);
    } else
      n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer),
        (r.__webglDepthbuffer = t.createRenderbuffer()),
        U(r.__webglDepthbuffer, e, !1);
    n.bindFramebuffer(t.FRAMEBUFFER, null);
  }
  const D = [],
    O = [];
  function F(t) {
    return Math.min(r.maxSamples, t.samples);
  }
  function B(t) {
    const n = i.get(t);
    return (
      t.samples > 0 &&
      !0 === e.has("WEBGL_multisampled_render_to_texture") &&
      !1 !== n.__useRenderToTexture
    );
  }
  function z(t, e) {
    const n = t.colorSpace,
      i = t.format,
      r = t.type;
    return (
      !0 === t.isCompressedTexture ||
        !0 === t.isVideoTexture ||
        (n !== Ze &&
          n !== qe &&
          (di.getTransfer(n) === Qe
            ? (i === kt && r === Et) ||
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                n
              ))),
      e
    );
  }
  function k(t) {
    return (
      "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement
        ? ((c.width = t.naturalWidth || t.width),
          (c.height = t.naturalHeight || t.height))
        : "undefined" != typeof VideoFrame && t instanceof VideoFrame
        ? ((c.width = t.displayWidth), (c.height = t.displayHeight))
        : ((c.width = t.width), (c.height = t.height)),
      c
    );
  }
  (this.allocateTextureUnit = function () {
    const t = w;
    return (
      t >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            t +
            " texture units while this GPU supports only " +
            r.maxTextures
        ),
      (w += 1),
      t
    );
  }),
    (this.resetTextureUnits = function () {
      w = 0;
    }),
    (this.setTexture2D = T),
    (this.setTexture2DArray = function (e, r) {
      const s = i.get(e);
      e.version > 0 && s.__version !== e.version
        ? I(s, e, r)
        : n.bindTexture(t.TEXTURE_2D_ARRAY, s.__webglTexture, t.TEXTURE0 + r);
    }),
    (this.setTexture3D = function (e, r) {
      const s = i.get(e);
      e.version > 0 && s.__version !== e.version
        ? I(s, e, r)
        : n.bindTexture(t.TEXTURE_3D, s.__webglTexture, t.TEXTURE0 + r);
    }),
    (this.setTextureCube = function (e, a) {
      const o = i.get(e);
      e.version > 0 && o.__version !== e.version
        ? (function (e, a, o) {
            if (6 !== a.image.length) return;
            const l = P(e, a),
              c = a.source;
            n.bindTexture(t.TEXTURE_CUBE_MAP, e.__webglTexture, t.TEXTURE0 + o);
            const h = i.get(c);
            if (c.version !== h.__version || !0 === l) {
              n.activeTexture(t.TEXTURE0 + o);
              const e = di.getPrimaries(di.workingColorSpace),
                i = a.colorSpace === qe ? null : di.getPrimaries(a.colorSpace),
                u =
                  a.colorSpace === qe || e === i
                    ? t.NONE
                    : t.BROWSER_DEFAULT_WEBGL;
              t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, a.flipY),
                t.pixelStorei(
                  t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                  a.premultiplyAlpha
                ),
                t.pixelStorei(t.UNPACK_ALIGNMENT, a.unpackAlignment),
                t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, u);
              const d = a.isCompressedTexture || a.image[0].isCompressedTexture,
                p = a.image[0] && a.image[0].isDataTexture,
                m = [];
              for (let t = 0; t < 6; t++)
                (m[t] =
                  d || p
                    ? p
                      ? a.image[t].image
                      : a.image[t]
                    : f(a.image[t], !0, r.maxCubemapSize)),
                  (m[t] = z(a, m[t]));
              const x = m[0],
                M = s.convert(a.format, a.colorSpace),
                S = s.convert(a.type),
                b = _(a.internalFormat, M, S, a.colorSpace),
                w = !0 !== a.isVideoTexture,
                T = void 0 === h.__version || !0 === l,
                E = c.dataReady;
              let A,
                R = y(a, x);
              if ((C(t.TEXTURE_CUBE_MAP, a), d)) {
                w &&
                  T &&
                  n.texStorage2D(t.TEXTURE_CUBE_MAP, R, b, x.width, x.height);
                for (let e = 0; e < 6; e++) {
                  A = m[e].mipmaps;
                  for (let i = 0; i < A.length; i++) {
                    const r = A[i];
                    a.format !== kt
                      ? null !== M
                        ? w
                          ? E &&
                            n.compressedTexSubImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i,
                              0,
                              0,
                              r.width,
                              r.height,
                              M,
                              r.data
                            )
                          : n.compressedTexImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i,
                              b,
                              r.width,
                              r.height,
                              0,
                              r.data
                            )
                        : console.warn(
                            "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                          )
                      : w
                      ? E &&
                        n.texSubImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          i,
                          0,
                          0,
                          r.width,
                          r.height,
                          M,
                          S,
                          r.data
                        )
                      : n.texImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          i,
                          b,
                          r.width,
                          r.height,
                          0,
                          M,
                          S,
                          r.data
                        );
                  }
                }
              } else {
                if (((A = a.mipmaps), w && T)) {
                  A.length > 0 && R++;
                  const e = k(m[0]);
                  n.texStorage2D(t.TEXTURE_CUBE_MAP, R, b, e.width, e.height);
                }
                for (let e = 0; e < 6; e++)
                  if (p) {
                    w
                      ? E &&
                        n.texSubImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          0,
                          0,
                          m[e].width,
                          m[e].height,
                          M,
                          S,
                          m[e].data
                        )
                      : n.texImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          b,
                          m[e].width,
                          m[e].height,
                          0,
                          M,
                          S,
                          m[e].data
                        );
                    for (let i = 0; i < A.length; i++) {
                      const r = A[i].image[e].image;
                      w
                        ? E &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            0,
                            0,
                            r.width,
                            r.height,
                            M,
                            S,
                            r.data
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            b,
                            r.width,
                            r.height,
                            0,
                            M,
                            S,
                            r.data
                          );
                    }
                  } else {
                    w
                      ? E &&
                        n.texSubImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          0,
                          0,
                          M,
                          S,
                          m[e]
                        )
                      : n.texImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          b,
                          M,
                          S,
                          m[e]
                        );
                    for (let i = 0; i < A.length; i++) {
                      const r = A[i];
                      w
                        ? E &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            0,
                            0,
                            M,
                            S,
                            r.image[e]
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            b,
                            M,
                            S,
                            r.image[e]
                          );
                    }
                  }
              }
              g(a) && v(t.TEXTURE_CUBE_MAP),
                (h.__version = c.version),
                a.onUpdate && a.onUpdate(a);
            }
            e.__version = a.version;
          })(o, e, a)
        : n.bindTexture(t.TEXTURE_CUBE_MAP, o.__webglTexture, t.TEXTURE0 + a);
    }),
    (this.rebindTextures = function (e, n, r) {
      const s = i.get(e);
      void 0 !== n &&
        L(
          s.__webglFramebuffer,
          e,
          e.texture,
          t.COLOR_ATTACHMENT0,
          t.TEXTURE_2D,
          0
        ),
        void 0 !== r && N(e);
    }),
    (this.setupRenderTarget = function (e) {
      const r = e.texture,
        o = i.get(e),
        l = i.get(r);
      e.addEventListener("dispose", S);
      const c = e.textures,
        h = !0 === e.isWebGLCubeRenderTarget,
        u = c.length > 1;
      if (
        (u ||
          (void 0 === l.__webglTexture &&
            (l.__webglTexture = t.createTexture()),
          (l.__version = r.version),
          a.memory.textures++),
        h)
      ) {
        o.__webglFramebuffer = [];
        for (let e = 0; e < 6; e++)
          if (r.mipmaps && r.mipmaps.length > 0) {
            o.__webglFramebuffer[e] = [];
            for (let n = 0; n < r.mipmaps.length; n++)
              o.__webglFramebuffer[e][n] = t.createFramebuffer();
          } else o.__webglFramebuffer[e] = t.createFramebuffer();
      } else {
        if (r.mipmaps && r.mipmaps.length > 0) {
          o.__webglFramebuffer = [];
          for (let e = 0; e < r.mipmaps.length; e++)
            o.__webglFramebuffer[e] = t.createFramebuffer();
        } else o.__webglFramebuffer = t.createFramebuffer();
        if (u)
          for (let e = 0, n = c.length; e < n; e++) {
            const n = i.get(c[e]);
            void 0 === n.__webglTexture &&
              ((n.__webglTexture = t.createTexture()), a.memory.textures++);
          }
        if (e.samples > 0 && !1 === B(e)) {
          (o.__webglMultisampledFramebuffer = t.createFramebuffer()),
            (o.__webglColorRenderbuffer = []),
            n.bindFramebuffer(t.FRAMEBUFFER, o.__webglMultisampledFramebuffer);
          for (let n = 0; n < c.length; n++) {
            const i = c[n];
            (o.__webglColorRenderbuffer[n] = t.createRenderbuffer()),
              t.bindRenderbuffer(t.RENDERBUFFER, o.__webglColorRenderbuffer[n]);
            const r = s.convert(i.format, i.colorSpace),
              a = s.convert(i.type),
              l = _(
                i.internalFormat,
                r,
                a,
                i.colorSpace,
                !0 === e.isXRRenderTarget
              ),
              h = F(e);
            t.renderbufferStorageMultisample(
              t.RENDERBUFFER,
              h,
              l,
              e.width,
              e.height
            ),
              t.framebufferRenderbuffer(
                t.FRAMEBUFFER,
                t.COLOR_ATTACHMENT0 + n,
                t.RENDERBUFFER,
                o.__webglColorRenderbuffer[n]
              );
          }
          t.bindRenderbuffer(t.RENDERBUFFER, null),
            e.depthBuffer &&
              ((o.__webglDepthRenderbuffer = t.createRenderbuffer()),
              U(o.__webglDepthRenderbuffer, e, !0)),
            n.bindFramebuffer(t.FRAMEBUFFER, null);
        }
      }
      if (h) {
        n.bindTexture(t.TEXTURE_CUBE_MAP, l.__webglTexture),
          C(t.TEXTURE_CUBE_MAP, r);
        for (let n = 0; n < 6; n++)
          if (r.mipmaps && r.mipmaps.length > 0)
            for (let i = 0; i < r.mipmaps.length; i++)
              L(
                o.__webglFramebuffer[n][i],
                e,
                r,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                i
              );
          else
            L(
              o.__webglFramebuffer[n],
              e,
              r,
              t.COLOR_ATTACHMENT0,
              t.TEXTURE_CUBE_MAP_POSITIVE_X + n,
              0
            );
        g(r) && v(t.TEXTURE_CUBE_MAP), n.unbindTexture();
      } else if (u) {
        for (let r = 0, s = c.length; r < s; r++) {
          const s = c[r],
            a = i.get(s);
          n.bindTexture(t.TEXTURE_2D, a.__webglTexture),
            C(t.TEXTURE_2D, s),
            L(
              o.__webglFramebuffer,
              e,
              s,
              t.COLOR_ATTACHMENT0 + r,
              t.TEXTURE_2D,
              0
            ),
            g(s) && v(t.TEXTURE_2D);
        }
        n.unbindTexture();
      } else {
        let i = t.TEXTURE_2D;
        if (
          ((e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
            (i = e.isWebGL3DRenderTarget ? t.TEXTURE_3D : t.TEXTURE_2D_ARRAY),
          n.bindTexture(i, l.__webglTexture),
          C(i, r),
          r.mipmaps && r.mipmaps.length > 0)
        )
          for (let n = 0; n < r.mipmaps.length; n++)
            L(o.__webglFramebuffer[n], e, r, t.COLOR_ATTACHMENT0, i, n);
        else L(o.__webglFramebuffer, e, r, t.COLOR_ATTACHMENT0, i, 0);
        g(r) && v(i), n.unbindTexture();
      }
      e.depthBuffer && N(e);
    }),
    (this.updateRenderTargetMipmap = function (e) {
      const r = e.textures;
      for (let s = 0, a = r.length; s < a; s++) {
        const a = r[s];
        if (g(a)) {
          const r = e.isWebGLCubeRenderTarget
              ? t.TEXTURE_CUBE_MAP
              : t.TEXTURE_2D,
            s = i.get(a).__webglTexture;
          n.bindTexture(r, s), v(r), n.unbindTexture();
        }
      }
    }),
    (this.updateMultisampleRenderTarget = function (e) {
      if (e.samples > 0)
        if (!1 === B(e)) {
          const r = e.textures,
            s = e.width,
            a = e.height;
          let o = t.COLOR_BUFFER_BIT;
          const c = e.stencilBuffer
              ? t.DEPTH_STENCIL_ATTACHMENT
              : t.DEPTH_ATTACHMENT,
            h = i.get(e),
            u = r.length > 1;
          if (u)
            for (let e = 0; e < r.length; e++)
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.RENDERBUFFER,
                  null
                ),
                n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer),
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.TEXTURE_2D,
                  null,
                  0
                );
          n.bindFramebuffer(
            t.READ_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          ),
            n.bindFramebuffer(t.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
          for (let n = 0; n < r.length; n++) {
            if (
              (e.resolveDepthBuffer &&
                (e.depthBuffer && (o |= t.DEPTH_BUFFER_BIT),
                e.stencilBuffer &&
                  e.resolveStencilBuffer &&
                  (o |= t.STENCIL_BUFFER_BIT)),
              u)
            ) {
              t.framebufferRenderbuffer(
                t.READ_FRAMEBUFFER,
                t.COLOR_ATTACHMENT0,
                t.RENDERBUFFER,
                h.__webglColorRenderbuffer[n]
              );
              const e = i.get(r[n]).__webglTexture;
              t.framebufferTexture2D(
                t.DRAW_FRAMEBUFFER,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_2D,
                e,
                0
              );
            }
            t.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, t.NEAREST),
              !0 === l &&
                ((D.length = 0),
                (O.length = 0),
                D.push(t.COLOR_ATTACHMENT0 + n),
                e.depthBuffer &&
                  !1 === e.resolveDepthBuffer &&
                  (D.push(c),
                  O.push(c),
                  t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, O)),
                t.invalidateFramebuffer(t.READ_FRAMEBUFFER, D));
          }
          if (
            (n.bindFramebuffer(t.READ_FRAMEBUFFER, null),
            n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
            u)
          )
            for (let e = 0; e < r.length; e++) {
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.RENDERBUFFER,
                  h.__webglColorRenderbuffer[e]
                );
              const s = i.get(r[e]).__webglTexture;
              n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer),
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.TEXTURE_2D,
                  s,
                  0
                );
            }
          n.bindFramebuffer(
            t.DRAW_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          );
        } else if (e.depthBuffer && !1 === e.resolveDepthBuffer && l) {
          const n = e.stencilBuffer
            ? t.DEPTH_STENCIL_ATTACHMENT
            : t.DEPTH_ATTACHMENT;
          t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [n]);
        }
    }),
    (this.setupDepthRenderbuffer = N),
    (this.setupFrameBufferTexture = L),
    (this.useMultisampledRTT = B);
}
function Xl(t, e) {
  return {
    convert: function (n, i = "") {
      let r;
      const s = di.getTransfer(i);
      if (n === Et) return t.UNSIGNED_BYTE;
      if (n === Nt) return t.UNSIGNED_SHORT_4_4_4_4;
      if (n === Dt) return t.UNSIGNED_SHORT_5_5_5_1;
      if (n === Ft) return t.UNSIGNED_INT_5_9_9_9_REV;
      if (n === At) return t.BYTE;
      if (n === Rt) return t.SHORT;
      if (n === Ct) return t.UNSIGNED_SHORT;
      if (n === Pt) return t.INT;
      if (n === It) return t.UNSIGNED_INT;
      if (n === Lt) return t.FLOAT;
      if (n === Ut) return t.HALF_FLOAT;
      if (n === Bt) return t.ALPHA;
      if (n === zt) return t.RGB;
      if (n === kt) return t.RGBA;
      if (n === Vt) return t.LUMINANCE;
      if (n === Ht) return t.LUMINANCE_ALPHA;
      if (n === Gt) return t.DEPTH_COMPONENT;
      if (n === Wt) return t.DEPTH_STENCIL;
      if (n === Xt) return t.RED;
      if (n === jt) return t.RED_INTEGER;
      if (n === qt) return t.RG;
      if (n === Yt) return t.RG_INTEGER;
      if (n === Jt) return t.RGBA_INTEGER;
      if (n === Kt || n === $t || n === Qt || n === te)
        if (s === Qe) {
          if (((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), null === r))
            return null;
          if (n === Kt) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === $t) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Qt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === te) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (((r = e.get("WEBGL_compressed_texture_s3tc")), null === r))
            return null;
          if (n === Kt) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (n === $t) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (n === Qt) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (n === te) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      if (n === ee || n === ne || n === ie || n === re) {
        if (((r = e.get("WEBGL_compressed_texture_pvrtc")), null === r))
          return null;
        if (n === ee) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === ne) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ie) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === re) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n === se || n === ae || n === oe) {
        if (((r = e.get("WEBGL_compressed_texture_etc")), null === r))
          return null;
        if (n === se || n === ae)
          return s === Qe ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === oe)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (
        n === le ||
        n === ce ||
        n === he ||
        n === ue ||
        n === de ||
        n === pe ||
        n === me ||
        n === fe ||
        n === ge ||
        n === ve ||
        n === _e ||
        n === xe ||
        n === ye ||
        n === Me
      ) {
        if (((r = e.get("WEBGL_compressed_texture_astc")), null === r))
          return null;
        if (n === le)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ce)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === he)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === ue)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === de)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === pe)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === me)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === fe)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === ge)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === ve)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === _e)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === xe)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === ye)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Me)
          return s === Qe
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n === Se || n === be || n === we) {
        if (((r = e.get("EXT_texture_compression_bptc")), null === r))
          return null;
        if (n === Se)
          return s === Qe
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === be) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === we) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (n === Te || n === Ee || n === Ae || n === Re) {
        if (((r = e.get("EXT_texture_compression_rgtc")), null === r))
          return null;
        if (n === Se) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ee) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Ae) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Re) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n === Ot ? t.UNSIGNED_INT_24_8 : void 0 !== t[n] ? t[n] : null;
    },
  };
}
class jl extends ta {
  constructor(t = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = t);
  }
}
class ql extends Ur {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Yl = { type: "move" };
class Zl {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      null === this._hand &&
        ((this._hand = new ql()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      null === this._targetRay &&
        ((this._targetRay = new ql()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new Pi()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new Pi())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      null === this._grip &&
        ((this._grip = new ql()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new Pi()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new Pi())),
      this._grip
    );
  }
  dispatchEvent(t) {
    return (
      null !== this._targetRay && this._targetRay.dispatchEvent(t),
      null !== this._grip && this._grip.dispatchEvent(t),
      null !== this._hand && this._hand.dispatchEvent(t),
      this
    );
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return (
      this.dispatchEvent({ type: "disconnected", data: t }),
      null !== this._targetRay && (this._targetRay.visible = !1),
      null !== this._grip && (this._grip.visible = !1),
      null !== this._hand && (this._hand.visible = !1),
      this
    );
  }
  update(t, e, n) {
    let i = null,
      r = null,
      s = null;
    const a = this._targetRay,
      o = this._grip,
      l = this._hand;
    if (t && "visible-blurred" !== e.session.visibilityState) {
      if (l && t.hand) {
        s = !0;
        for (const i of t.hand.values()) {
          const t = e.getJointPose(i, n),
            r = this._getHandJoint(l, i);
          null !== t &&
            (r.matrix.fromArray(t.transform.matrix),
            r.matrix.decompose(r.position, r.rotation, r.scale),
            (r.matrixWorldNeedsUpdate = !0),
            (r.jointRadius = t.radius)),
            (r.visible = null !== t);
        }
        const i = l.joints["index-finger-tip"],
          r = l.joints["thumb-tip"],
          a = i.position.distanceTo(r.position),
          o = 0.02,
          c = 0.005;
        l.inputState.pinching && a > o + c
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: t.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            a <= o - c &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: t.handedness,
              target: this,
            }));
      } else
        null !== o &&
          t.gripSpace &&
          ((r = e.getPose(t.gripSpace, n)),
          null !== r &&
            (o.matrix.fromArray(r.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            (o.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((o.hasLinearVelocity = !0),
                o.linearVelocity.copy(r.linearVelocity))
              : (o.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((o.hasAngularVelocity = !0),
                o.angularVelocity.copy(r.angularVelocity))
              : (o.hasAngularVelocity = !1)));
      null !== a &&
        ((i = e.getPose(t.targetRaySpace, n)),
        null === i && null !== r && (i = r),
        null !== i &&
          (a.matrix.fromArray(i.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          (a.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(i.linearVelocity))
            : (a.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(i.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(Yl)));
    }
    return (
      null !== a && (a.visible = null !== i),
      null !== o && (o.visible = null !== r),
      null !== l && (l.visible = null !== s),
      this
    );
  }
  _getHandJoint(t, e) {
    if (void 0 === t.joints[e.jointName]) {
      const n = new ql();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (t.joints[e.jointName] = n),
        t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class Jl {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(t, e, n) {
    if (null === this.texture) {
      const i = new Mi();
      (t.properties.get(i).__webglTexture = e.texture),
        (e.depthNear == n.depthNear && e.depthFar == n.depthFar) ||
          ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = i);
    }
  }
  getMesh(t) {
    if (null !== this.texture && null === this.mesh) {
      const e = t.cameras[0].viewport,
        n = new Zs({
          vertexShader:
            "\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}",
          fragmentShader:
            "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n\tvec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n\tif ( coord.x >= 1.0 ) {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n\t} else {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n\t}\n\n}",
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: e.z },
            depthHeight: { value: e.w },
          },
        });
      this.mesh = new Hs(new ma(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Kl extends kn {
  constructor(t, e) {
    super();
    const n = this;
    let i = null,
      r = 1,
      s = null,
      a = "local-floor",
      o = 1,
      l = null,
      c = null,
      h = null,
      u = null,
      d = null,
      p = null;
    const m = new Jl(),
      f = e.getContextAttributes();
    let g = null,
      v = null;
    const _ = [],
      x = [],
      y = new $n();
    let M = null;
    const S = new ta();
    S.layers.enable(1), (S.viewport = new Si());
    const b = new ta();
    b.layers.enable(2), (b.viewport = new Si());
    const w = [S, b],
      T = new jl();
    T.layers.enable(1), T.layers.enable(2);
    let E = null,
      A = null;
    function R(t) {
      const e = x.indexOf(t.inputSource);
      if (-1 === e) return;
      const n = _[e];
      void 0 !== n &&
        (n.update(t.inputSource, t.frame, l || s),
        n.dispatchEvent({ type: t.type, data: t.inputSource }));
    }
    function C() {
      i.removeEventListener("select", R),
        i.removeEventListener("selectstart", R),
        i.removeEventListener("selectend", R),
        i.removeEventListener("squeeze", R),
        i.removeEventListener("squeezestart", R),
        i.removeEventListener("squeezeend", R),
        i.removeEventListener("end", C),
        i.removeEventListener("inputsourceschange", P);
      for (let t = 0; t < _.length; t++) {
        const e = x[t];
        null !== e && ((x[t] = null), _[t].disconnect(e));
      }
      (E = null),
        (A = null),
        m.reset(),
        t.setRenderTarget(g),
        (d = null),
        (u = null),
        (h = null),
        (i = null),
        (v = null),
        D.stop(),
        (n.isPresenting = !1),
        t.setPixelRatio(M),
        t.setSize(y.width, y.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    function P(t) {
      for (let e = 0; e < t.removed.length; e++) {
        const n = t.removed[e],
          i = x.indexOf(n);
        i >= 0 && ((x[i] = null), _[i].disconnect(n));
      }
      for (let e = 0; e < t.added.length; e++) {
        const n = t.added[e];
        let i = x.indexOf(n);
        if (-1 === i) {
          for (let t = 0; t < _.length; t++) {
            if (t >= x.length) {
              x.push(n), (i = t);
              break;
            }
            if (null === x[t]) {
              (x[t] = n), (i = t);
              break;
            }
          }
          if (-1 === i) break;
        }
        const r = _[i];
        r && r.connect(n);
      }
    }
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (t) {
        let e = _[t];
        return (
          void 0 === e && ((e = new Zl()), (_[t] = e)), e.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (t) {
        let e = _[t];
        return void 0 === e && ((e = new Zl()), (_[t] = e)), e.getGripSpace();
      }),
      (this.getHand = function (t) {
        let e = _[t];
        return void 0 === e && ((e = new Zl()), (_[t] = e)), e.getHandSpace();
      }),
      (this.setFramebufferScaleFactor = function (t) {
        (r = t),
          !0 === n.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
            );
      }),
      (this.setReferenceSpaceType = function (t) {
        (a = t),
          !0 === n.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || s;
      }),
      (this.setReferenceSpace = function (t) {
        l = t;
      }),
      (this.getBaseLayer = function () {
        return null !== u ? u : d;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return p;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (c) {
        if (((i = c), null !== i)) {
          if (
            ((g = t.getRenderTarget()),
            i.addEventListener("select", R),
            i.addEventListener("selectstart", R),
            i.addEventListener("selectend", R),
            i.addEventListener("squeeze", R),
            i.addEventListener("squeezestart", R),
            i.addEventListener("squeezeend", R),
            i.addEventListener("end", C),
            i.addEventListener("inputsourceschange", P),
            !0 !== f.xrCompatible && (await e.makeXRCompatible()),
            (M = t.getPixelRatio()),
            t.getSize(y),
            void 0 === i.renderState.layers)
          ) {
            const n = {
              antialias: f.antialias,
              alpha: !0,
              depth: f.depth,
              stencil: f.stencil,
              framebufferScaleFactor: r,
            };
            (d = new XRWebGLLayer(i, e, n)),
              i.updateRenderState({ baseLayer: d }),
              t.setPixelRatio(1),
              t.setSize(d.framebufferWidth, d.framebufferHeight, !1),
              (v = new wi(d.framebufferWidth, d.framebufferHeight, {
                format: kt,
                type: Et,
                colorSpace: t.outputColorSpace,
                stencilBuffer: f.stencil,
              }));
          } else {
            let n = null,
              s = null,
              a = null;
            f.depth &&
              ((a = f.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
              (n = f.stencil ? Wt : Gt),
              (s = f.stencil ? Ot : It));
            const o = { colorFormat: e.RGBA8, depthFormat: a, scaleFactor: r };
            (h = new XRWebGLBinding(i, e)),
              (u = h.createProjectionLayer(o)),
              i.updateRenderState({ layers: [u] }),
              t.setPixelRatio(1),
              t.setSize(u.textureWidth, u.textureHeight, !1),
              (v = new wi(u.textureWidth, u.textureHeight, {
                format: kt,
                type: Et,
                depthTexture: new $a(
                  u.textureWidth,
                  u.textureHeight,
                  s,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  n
                ),
                stencilBuffer: f.stencil,
                colorSpace: t.outputColorSpace,
                samples: f.antialias ? 4 : 0,
                resolveDepthBuffer: !1 === u.ignoreDepthValues,
              }));
          }
          (v.isXRRenderTarget = !0),
            this.setFoveation(o),
            (l = null),
            (s = await i.requestReferenceSpace(a)),
            D.setContext(i),
            D.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (null !== i) return i.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return m.getDepthTexture();
      });
    const I = new Pi(),
      L = new Pi();
    function U(t, e) {
      null === e
        ? t.matrixWorld.copy(t.matrix)
        : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
        t.matrixWorldInverse.copy(t.matrixWorld).invert();
    }
    (this.updateCamera = function (t) {
      if (null === i) return;
      null !== m.texture && ((t.near = m.depthNear), (t.far = m.depthFar)),
        (T.near = b.near = S.near = t.near),
        (T.far = b.far = S.far = t.far),
        (E === T.near && A === T.far) ||
          (i.updateRenderState({ depthNear: T.near, depthFar: T.far }),
          (E = T.near),
          (A = T.far),
          (S.near = E),
          (S.far = A),
          (b.near = E),
          (b.far = A),
          S.updateProjectionMatrix(),
          b.updateProjectionMatrix(),
          t.updateProjectionMatrix());
      const e = t.parent,
        n = T.cameras;
      U(T, e);
      for (let t = 0; t < n.length; t++) U(n[t], e);
      2 === n.length
        ? (function (t, e, n) {
            I.setFromMatrixPosition(e.matrixWorld),
              L.setFromMatrixPosition(n.matrixWorld);
            const i = I.distanceTo(L),
              r = e.projectionMatrix.elements,
              s = n.projectionMatrix.elements,
              a = r[14] / (r[10] - 1),
              o = r[14] / (r[10] + 1),
              l = (r[9] + 1) / r[5],
              c = (r[9] - 1) / r[5],
              h = (r[8] - 1) / r[0],
              u = (s[8] + 1) / s[0],
              d = a * h,
              p = a * u,
              m = i / (-h + u),
              f = m * -h;
            e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
              t.translateX(f),
              t.translateZ(m),
              t.matrixWorld.compose(t.position, t.quaternion, t.scale),
              t.matrixWorldInverse.copy(t.matrixWorld).invert();
            const g = a + m,
              v = o + m,
              _ = d - f,
              x = p + (i - f),
              y = ((l * o) / v) * g,
              M = ((c * o) / v) * g;
            t.projectionMatrix.makePerspective(_, x, y, M, g, v),
              t.projectionMatrixInverse.copy(t.projectionMatrix).invert();
          })(T, S, b)
        : T.projectionMatrix.copy(S.projectionMatrix),
        (function (t, e, n) {
          null === n
            ? t.matrix.copy(e.matrixWorld)
            : (t.matrix.copy(n.matrixWorld),
              t.matrix.invert(),
              t.matrix.multiply(e.matrixWorld));
          t.matrix.decompose(t.position, t.quaternion, t.scale),
            t.updateMatrixWorld(!0),
            t.projectionMatrix.copy(e.projectionMatrix),
            t.projectionMatrixInverse.copy(e.projectionMatrixInverse),
            t.isPerspectiveCamera &&
              ((t.fov = 2 * Wn * Math.atan(1 / t.projectionMatrix.elements[5])),
              (t.zoom = 1));
        })(t, T, e);
    }),
      (this.getCamera = function () {
        return T;
      }),
      (this.getFoveation = function () {
        if (null !== u || null !== d) return o;
      }),
      (this.setFoveation = function (t) {
        (o = t),
          null !== u && (u.fixedFoveation = t),
          null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t);
      }),
      (this.hasDepthSensing = function () {
        return null !== m.texture;
      }),
      (this.getDepthSensingMesh = function () {
        return m.getMesh(T);
      });
    let N = null;
    const D = new da();
    D.setAnimationLoop(function (e, r) {
      if (((c = r.getViewerPose(l || s)), (p = r), null !== c)) {
        const e = c.views;
        null !== d &&
          (t.setRenderTargetFramebuffer(v, d.framebuffer),
          t.setRenderTarget(v));
        let n = !1;
        e.length !== T.cameras.length && ((T.cameras.length = 0), (n = !0));
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          let s = null;
          if (null !== d) s = d.getViewport(r);
          else {
            const e = h.getViewSubImage(u, r);
            (s = e.viewport),
              0 === i &&
                (t.setRenderTargetTextures(
                  v,
                  e.colorTexture,
                  u.ignoreDepthValues ? void 0 : e.depthStencilTexture
                ),
                t.setRenderTarget(v));
          }
          let a = w[i];
          void 0 === a &&
            ((a = new ta()),
            a.layers.enable(i),
            (a.viewport = new Si()),
            (w[i] = a)),
            a.matrix.fromArray(r.transform.matrix),
            a.matrix.decompose(a.position, a.quaternion, a.scale),
            a.projectionMatrix.fromArray(r.projectionMatrix),
            a.projectionMatrixInverse.copy(a.projectionMatrix).invert(),
            a.viewport.set(s.x, s.y, s.width, s.height),
            0 === i &&
              (T.matrix.copy(a.matrix),
              T.matrix.decompose(T.position, T.quaternion, T.scale)),
            !0 === n && T.cameras.push(a);
        }
        const r = i.enabledFeatures;
        if (r && r.includes("depth-sensing")) {
          const n = h.getDepthInformation(e[0]);
          n && n.isValid && n.texture && m.init(t, n, i.renderState);
        }
      }
      for (let t = 0; t < _.length; t++) {
        const e = x[t],
          n = _[t];
        null !== e && void 0 !== n && n.update(e, r, l || s);
      }
      N && N(e, r),
        r.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: r }),
        (p = null);
    }),
      (this.setAnimationLoop = function (t) {
        N = t;
      }),
      (this.dispose = function () {});
  }
}
const $l = new gr(),
  Ql = new ar();
function tc(t, e) {
  function n(t, e) {
    !0 === t.matrixAutoUpdate && t.updateMatrix(), e.value.copy(t.matrix);
  }
  function i(t, i) {
    (t.opacity.value = i.opacity),
      i.color && t.diffuse.value.copy(i.color),
      i.emissive &&
        t.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
      i.map && ((t.map.value = i.map), n(i.map, t.mapTransform)),
      i.alphaMap &&
        ((t.alphaMap.value = i.alphaMap), n(i.alphaMap, t.alphaMapTransform)),
      i.bumpMap &&
        ((t.bumpMap.value = i.bumpMap),
        n(i.bumpMap, t.bumpMapTransform),
        (t.bumpScale.value = i.bumpScale),
        i.side === d && (t.bumpScale.value *= -1)),
      i.normalMap &&
        ((t.normalMap.value = i.normalMap),
        n(i.normalMap, t.normalMapTransform),
        t.normalScale.value.copy(i.normalScale),
        i.side === d && t.normalScale.value.negate()),
      i.displacementMap &&
        ((t.displacementMap.value = i.displacementMap),
        n(i.displacementMap, t.displacementMapTransform),
        (t.displacementScale.value = i.displacementScale),
        (t.displacementBias.value = i.displacementBias)),
      i.emissiveMap &&
        ((t.emissiveMap.value = i.emissiveMap),
        n(i.emissiveMap, t.emissiveMapTransform)),
      i.specularMap &&
        ((t.specularMap.value = i.specularMap),
        n(i.specularMap, t.specularMapTransform)),
      i.alphaTest > 0 && (t.alphaTest.value = i.alphaTest);
    const r = e.get(i),
      s = r.envMap,
      a = r.envMapRotation;
    s &&
      ((t.envMap.value = s),
      $l.copy(a),
      ($l.x *= -1),
      ($l.y *= -1),
      ($l.z *= -1),
      s.isCubeTexture &&
        !1 === s.isRenderTargetTexture &&
        (($l.y *= -1), ($l.z *= -1)),
      t.envMapRotation.value.setFromMatrix4(Ql.makeRotationFromEuler($l)),
      (t.flipEnvMap.value =
        s.isCubeTexture && !1 === s.isRenderTargetTexture ? -1 : 1),
      (t.reflectivity.value = i.reflectivity),
      (t.ior.value = i.ior),
      (t.refractionRatio.value = i.refractionRatio)),
      i.lightMap &&
        ((t.lightMap.value = i.lightMap),
        (t.lightMapIntensity.value = i.lightMapIntensity),
        n(i.lightMap, t.lightMapTransform)),
      i.aoMap &&
        ((t.aoMap.value = i.aoMap),
        (t.aoMapIntensity.value = i.aoMapIntensity),
        n(i.aoMap, t.aoMapTransform));
  }
  return {
    refreshFogUniforms: function (e, n) {
      n.color.getRGB(e.fogColor.value, qs(t)),
        n.isFog
          ? ((e.fogNear.value = n.near), (e.fogFar.value = n.far))
          : n.isFogExp2 && (e.fogDensity.value = n.density);
    },
    refreshMaterialUniforms: function (t, r, s, a, o) {
      r.isMeshBasicMaterial || r.isMeshLambertMaterial
        ? i(t, r)
        : r.isMeshToonMaterial
        ? (i(t, r),
          (function (t, e) {
            e.gradientMap && (t.gradientMap.value = e.gradientMap);
          })(t, r))
        : r.isMeshPhongMaterial
        ? (i(t, r),
          (function (t, e) {
            t.specular.value.copy(e.specular),
              (t.shininess.value = Math.max(e.shininess, 1e-4));
          })(t, r))
        : r.isMeshStandardMaterial
        ? (i(t, r),
          (function (t, e) {
            (t.metalness.value = e.metalness),
              e.metalnessMap &&
                ((t.metalnessMap.value = e.metalnessMap),
                n(e.metalnessMap, t.metalnessMapTransform));
            (t.roughness.value = e.roughness),
              e.roughnessMap &&
                ((t.roughnessMap.value = e.roughnessMap),
                n(e.roughnessMap, t.roughnessMapTransform));
            e.envMap && (t.envMapIntensity.value = e.envMapIntensity);
          })(t, r),
          r.isMeshPhysicalMaterial &&
            (function (t, e, i) {
              (t.ior.value = e.ior),
                e.sheen > 0 &&
                  (t.sheenColor.value
                    .copy(e.sheenColor)
                    .multiplyScalar(e.sheen),
                  (t.sheenRoughness.value = e.sheenRoughness),
                  e.sheenColorMap &&
                    ((t.sheenColorMap.value = e.sheenColorMap),
                    n(e.sheenColorMap, t.sheenColorMapTransform)),
                  e.sheenRoughnessMap &&
                    ((t.sheenRoughnessMap.value = e.sheenRoughnessMap),
                    n(e.sheenRoughnessMap, t.sheenRoughnessMapTransform)));
              e.clearcoat > 0 &&
                ((t.clearcoat.value = e.clearcoat),
                (t.clearcoatRoughness.value = e.clearcoatRoughness),
                e.clearcoatMap &&
                  ((t.clearcoatMap.value = e.clearcoatMap),
                  n(e.clearcoatMap, t.clearcoatMapTransform)),
                e.clearcoatRoughnessMap &&
                  ((t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap),
                  n(e.clearcoatRoughnessMap, t.clearcoatRoughnessMapTransform)),
                e.clearcoatNormalMap &&
                  ((t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                  n(e.clearcoatNormalMap, t.clearcoatNormalMapTransform),
                  t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                  e.side === d && t.clearcoatNormalScale.value.negate()));
              e.dispersion > 0 && (t.dispersion.value = e.dispersion);
              e.iridescence > 0 &&
                ((t.iridescence.value = e.iridescence),
                (t.iridescenceIOR.value = e.iridescenceIOR),
                (t.iridescenceThicknessMinimum.value =
                  e.iridescenceThicknessRange[0]),
                (t.iridescenceThicknessMaximum.value =
                  e.iridescenceThicknessRange[1]),
                e.iridescenceMap &&
                  ((t.iridescenceMap.value = e.iridescenceMap),
                  n(e.iridescenceMap, t.iridescenceMapTransform)),
                e.iridescenceThicknessMap &&
                  ((t.iridescenceThicknessMap.value =
                    e.iridescenceThicknessMap),
                  n(
                    e.iridescenceThicknessMap,
                    t.iridescenceThicknessMapTransform
                  )));
              e.transmission > 0 &&
                ((t.transmission.value = e.transmission),
                (t.transmissionSamplerMap.value = i.texture),
                t.transmissionSamplerSize.value.set(i.width, i.height),
                e.transmissionMap &&
                  ((t.transmissionMap.value = e.transmissionMap),
                  n(e.transmissionMap, t.transmissionMapTransform)),
                (t.thickness.value = e.thickness),
                e.thicknessMap &&
                  ((t.thicknessMap.value = e.thicknessMap),
                  n(e.thicknessMap, t.thicknessMapTransform)),
                (t.attenuationDistance.value = e.attenuationDistance),
                t.attenuationColor.value.copy(e.attenuationColor));
              e.anisotropy > 0 &&
                (t.anisotropyVector.value.set(
                  e.anisotropy * Math.cos(e.anisotropyRotation),
                  e.anisotropy * Math.sin(e.anisotropyRotation)
                ),
                e.anisotropyMap &&
                  ((t.anisotropyMap.value = e.anisotropyMap),
                  n(e.anisotropyMap, t.anisotropyMapTransform)));
              (t.specularIntensity.value = e.specularIntensity),
                t.specularColor.value.copy(e.specularColor),
                e.specularColorMap &&
                  ((t.specularColorMap.value = e.specularColorMap),
                  n(e.specularColorMap, t.specularColorMapTransform));
              e.specularIntensityMap &&
                ((t.specularIntensityMap.value = e.specularIntensityMap),
                n(e.specularIntensityMap, t.specularIntensityMapTransform));
            })(t, r, o))
        : r.isMeshMatcapMaterial
        ? (i(t, r),
          (function (t, e) {
            e.matcap && (t.matcap.value = e.matcap);
          })(t, r))
        : r.isMeshDepthMaterial
        ? i(t, r)
        : r.isMeshDistanceMaterial
        ? (i(t, r),
          (function (t, n) {
            const i = e.get(n).light;
            t.referencePosition.value.setFromMatrixPosition(i.matrixWorld),
              (t.nearDistance.value = i.shadow.camera.near),
              (t.farDistance.value = i.shadow.camera.far);
          })(t, r))
        : r.isMeshNormalMaterial
        ? i(t, r)
        : r.isLineBasicMaterial
        ? ((function (t, e) {
            t.diffuse.value.copy(e.color),
              (t.opacity.value = e.opacity),
              e.map && ((t.map.value = e.map), n(e.map, t.mapTransform));
          })(t, r),
          r.isLineDashedMaterial &&
            (function (t, e) {
              (t.dashSize.value = e.dashSize),
                (t.totalSize.value = e.dashSize + e.gapSize),
                (t.scale.value = e.scale);
            })(t, r))
        : r.isPointsMaterial
        ? (function (t, e, i, r) {
            t.diffuse.value.copy(e.color),
              (t.opacity.value = e.opacity),
              (t.size.value = e.size * i),
              (t.scale.value = 0.5 * r),
              e.map && ((t.map.value = e.map), n(e.map, t.uvTransform));
            e.alphaMap &&
              ((t.alphaMap.value = e.alphaMap),
              n(e.alphaMap, t.alphaMapTransform));
            e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
          })(t, r, s, a)
        : r.isSpriteMaterial
        ? (function (t, e) {
            t.diffuse.value.copy(e.color),
              (t.opacity.value = e.opacity),
              (t.rotation.value = e.rotation),
              e.map && ((t.map.value = e.map), n(e.map, t.mapTransform));
            e.alphaMap &&
              ((t.alphaMap.value = e.alphaMap),
              n(e.alphaMap, t.alphaMapTransform));
            e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
          })(t, r)
        : r.isShadowMaterial
        ? (t.color.value.copy(r.color), (t.opacity.value = r.opacity))
        : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
    },
  };
}
function ec(t, e, n, i) {
  let r = {},
    s = {},
    a = [];
  const o = t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(t, e, n, i) {
    const r = t.value,
      s = e + "_" + n;
    if (void 0 === i[s])
      return (
        (i[s] = "number" == typeof r || "boolean" == typeof r ? r : r.clone()),
        !0
      );
    {
      const t = i[s];
      if ("number" == typeof r || "boolean" == typeof r) {
        if (t !== r) return (i[s] = r), !0;
      } else if (!1 === t.equals(r)) return t.copy(r), !0;
    }
    return !1;
  }
  function c(t) {
    const e = { boundary: 0, storage: 0 };
    return (
      "number" == typeof t || "boolean" == typeof t
        ? ((e.boundary = 4), (e.storage = 4))
        : t.isVector2
        ? ((e.boundary = 8), (e.storage = 8))
        : t.isVector3 || t.isColor
        ? ((e.boundary = 16), (e.storage = 12))
        : t.isVector4
        ? ((e.boundary = 16), (e.storage = 16))
        : t.isMatrix3
        ? ((e.boundary = 48), (e.storage = 48))
        : t.isMatrix4
        ? ((e.boundary = 64), (e.storage = 64))
        : t.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            t
          ),
      e
    );
  }
  function h(e) {
    const n = e.target;
    n.removeEventListener("dispose", h);
    const i = a.indexOf(n.__bindingPointIndex);
    a.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete s[n.id];
  }
  return {
    bind: function (t, e) {
      const n = e.program;
      i.uniformBlockBinding(t, n);
    },
    update: function (n, u) {
      let d = r[n.id];
      void 0 === d &&
        (!(function (t) {
          const e = t.uniforms;
          let n = 0;
          const i = 16;
          for (let t = 0, r = e.length; t < r; t++) {
            const r = Array.isArray(e[t]) ? e[t] : [e[t]];
            for (let t = 0, e = r.length; t < e; t++) {
              const e = r[t],
                s = Array.isArray(e.value) ? e.value : [e.value];
              for (let t = 0, r = s.length; t < r; t++) {
                const r = c(s[t]),
                  a = n % i;
                0 !== a && i - a < r.boundary && (n += i - a),
                  (e.__data = new Float32Array(
                    r.storage / Float32Array.BYTES_PER_ELEMENT
                  )),
                  (e.__offset = n),
                  (n += r.storage);
              }
            }
          }
          const r = n % i;
          r > 0 && (n += i - r);
          (t.__size = n), (t.__cache = {});
        })(n),
        (d = (function (e) {
          const n = (function () {
            for (let t = 0; t < o; t++)
              if (-1 === a.indexOf(t)) return a.push(t), t;
            return (
              console.error(
                "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
              ),
              0
            );
          })();
          e.__bindingPointIndex = n;
          const i = t.createBuffer(),
            r = e.__size,
            s = e.usage;
          return (
            t.bindBuffer(t.UNIFORM_BUFFER, i),
            t.bufferData(t.UNIFORM_BUFFER, r, s),
            t.bindBuffer(t.UNIFORM_BUFFER, null),
            t.bindBufferBase(t.UNIFORM_BUFFER, n, i),
            i
          );
        })(n)),
        (r[n.id] = d),
        n.addEventListener("dispose", h));
      const p = u.program;
      i.updateUBOMapping(n, p);
      const m = e.render.frame;
      s[n.id] !== m &&
        (!(function (e) {
          const n = r[e.id],
            i = e.uniforms,
            s = e.__cache;
          t.bindBuffer(t.UNIFORM_BUFFER, n);
          for (let e = 0, n = i.length; e < n; e++) {
            const n = Array.isArray(i[e]) ? i[e] : [i[e]];
            for (let i = 0, r = n.length; i < r; i++) {
              const r = n[i];
              if (!0 === l(r, e, i, s)) {
                const e = r.__offset,
                  n = Array.isArray(r.value) ? r.value : [r.value];
                let i = 0;
                for (let s = 0; s < n.length; s++) {
                  const a = n[s],
                    o = c(a);
                  "number" == typeof a || "boolean" == typeof a
                    ? ((r.__data[0] = a),
                      t.bufferSubData(t.UNIFORM_BUFFER, e + i, r.__data))
                    : a.isMatrix3
                    ? ((r.__data[0] = a.elements[0]),
                      (r.__data[1] = a.elements[1]),
                      (r.__data[2] = a.elements[2]),
                      (r.__data[3] = 0),
                      (r.__data[4] = a.elements[3]),
                      (r.__data[5] = a.elements[4]),
                      (r.__data[6] = a.elements[5]),
                      (r.__data[7] = 0),
                      (r.__data[8] = a.elements[6]),
                      (r.__data[9] = a.elements[7]),
                      (r.__data[10] = a.elements[8]),
                      (r.__data[11] = 0))
                    : (a.toArray(r.__data, i),
                      (i += o.storage / Float32Array.BYTES_PER_ELEMENT));
                }
                t.bufferSubData(t.UNIFORM_BUFFER, e, r.__data);
              }
            }
          }
          t.bindBuffer(t.UNIFORM_BUFFER, null);
        })(n),
        (s[n.id] = m));
    },
    dispose: function () {
      for (const e in r) t.deleteBuffer(r[e]);
      (a = []), (r = {}), (s = {});
    },
  };
}
class nc {
  constructor(e = {}) {
    const {
      canvas: n = si(),
      context: i = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: p = !1,
    } = e;
    let m;
    if (((this.isWebGLRenderer = !0), null !== i)) {
      if (
        "undefined" != typeof WebGLRenderingContext &&
        i instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      m = i.getContextAttributes().alpha;
    } else m = a;
    const f = new Uint32Array(4),
      g = new Int32Array(4);
    let v = null,
      _ = null;
    const x = [],
      y = [];
    (this.domElement = n),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Ye),
      (this.toneMapping = K),
      (this.toneMappingExposure = 1);
    const M = this;
    let S = !1,
      b = 0,
      w = 0,
      T = null,
      E = -1,
      A = null;
    const R = new Si(),
      C = new Si();
    let P = null;
    const I = new Zr(0);
    let L = 0,
      U = n.width,
      N = n.height,
      D = 1,
      O = null,
      F = null;
    const B = new Si(0, 0, U, N),
      z = new Si(0, 0, U, N);
    let k = !1;
    const V = new ua();
    let H = !1,
      G = !1;
    const W = new ar(),
      X = new Pi(),
      j = new Si(),
      q = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Y = !1;
    function Z() {
      return null === T ? D : 1;
    }
    let J,
      $,
      Q,
      tt,
      et,
      nt,
      it,
      rt,
      st,
      at,
      ot,
      lt,
      ct,
      ht,
      ut,
      dt,
      pt,
      mt,
      ft,
      gt,
      vt,
      _t,
      xt,
      yt,
      Mt = i;
    function St(t, e) {
      return n.getContext(t, e);
    }
    try {
      const e = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: p,
      };
      if (
        ("setAttribute" in n && n.setAttribute("data-engine", `three.js r${t}`),
        n.addEventListener("webglcontextlost", At, !1),
        n.addEventListener("webglcontextrestored", Rt, !1),
        n.addEventListener("webglcontextcreationerror", Pt, !1),
        null === Mt)
      ) {
        const t = "webgl2";
        if (((Mt = St(t, e)), null === Mt))
          throw St(t)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (t) {
      throw (console.error("THREE.WebGLRenderer: " + t.message), t);
    }
    function bt() {
      (J = new ja(Mt)),
        J.init(),
        (_t = new Xl(Mt, J)),
        ($ = new wa(Mt, J, e, _t)),
        (Q = new Vl(Mt)),
        (tt = new Za(Mt)),
        (et = new Al()),
        (nt = new Wl(Mt, J, Q, et, $, _t, tt)),
        (it = new Ea(M)),
        (rt = new Xa(M)),
        (st = new pa(Mt)),
        (xt = new Sa(Mt, st)),
        (at = new qa(Mt, st, tt, xt)),
        (ot = new Ka(Mt, at, st, tt)),
        (ft = new Ja(Mt, $, nt)),
        (dt = new Ta(et)),
        (lt = new El(M, it, rt, J, $, xt, dt)),
        (ct = new tc(M, et)),
        (ht = new Il()),
        (ut = new Fl(J)),
        (mt = new Ma(M, it, rt, Q, ot, m, l)),
        (pt = new kl(M, ot, $)),
        (yt = new ec(Mt, tt, $, Q)),
        (gt = new ba(Mt, J, tt)),
        (vt = new Ya(Mt, J, tt)),
        (tt.programs = lt.programs),
        (M.capabilities = $),
        (M.extensions = J),
        (M.properties = et),
        (M.renderLists = ht),
        (M.shadowMap = pt),
        (M.state = Q),
        (M.info = tt);
    }
    bt();
    const Tt = new Kl(M, Mt);
    function At(t) {
      t.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (S = !0);
    }
    function Rt() {
      console.log("THREE.WebGLRenderer: Context Restored."), (S = !1);
      const t = tt.autoReset,
        e = pt.enabled,
        n = pt.autoUpdate,
        i = pt.needsUpdate,
        r = pt.type;
      bt(),
        (tt.autoReset = t),
        (pt.enabled = e),
        (pt.autoUpdate = n),
        (pt.needsUpdate = i),
        (pt.type = r);
    }
    function Pt(t) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        t.statusMessage
      );
    }
    function Lt(t) {
      const e = t.target;
      e.removeEventListener("dispose", Lt),
        (function (t) {
          (function (t) {
            const e = et.get(t).programs;
            void 0 !== e &&
              (e.forEach(function (t) {
                lt.releaseProgram(t);
              }),
              t.isShaderMaterial && lt.releaseShaderCache(t));
          })(t),
            et.remove(t);
        })(e);
    }
    function Ft(t, e, n) {
      !0 === t.transparent && 2 === t.side && !1 === t.forceSinglePass
        ? ((t.side = d),
          (t.needsUpdate = !0),
          Zt(t, e, n),
          (t.side = u),
          (t.needsUpdate = !0),
          Zt(t, e, n),
          (t.side = 2))
        : Zt(t, e, n);
    }
    (this.xr = Tt),
      (this.getContext = function () {
        return Mt;
      }),
      (this.getContextAttributes = function () {
        return Mt.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const t = J.get("WEBGL_lose_context");
        t && t.loseContext();
      }),
      (this.forceContextRestore = function () {
        const t = J.get("WEBGL_lose_context");
        t && t.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return D;
      }),
      (this.setPixelRatio = function (t) {
        void 0 !== t && ((D = t), this.setSize(U, N, !1));
      }),
      (this.getSize = function (t) {
        return t.set(U, N);
      }),
      (this.setSize = function (t, e, i = !0) {
        Tt.isPresenting
          ? console.warn(
              "THREE.WebGLRenderer: Can't change size while VR device is presenting."
            )
          : ((U = t),
            (N = e),
            (n.width = Math.floor(t * D)),
            (n.height = Math.floor(e * D)),
            !0 === i &&
              ((n.style.width = t + "px"), (n.style.height = e + "px")),
            this.setViewport(0, 0, t, e));
      }),
      (this.getDrawingBufferSize = function (t) {
        return t.set(U * D, N * D).floor();
      }),
      (this.setDrawingBufferSize = function (t, e, i) {
        (U = t),
          (N = e),
          (D = i),
          (n.width = Math.floor(t * i)),
          (n.height = Math.floor(e * i)),
          this.setViewport(0, 0, t, e);
      }),
      (this.getCurrentViewport = function (t) {
        return t.copy(R);
      }),
      (this.getViewport = function (t) {
        return t.copy(B);
      }),
      (this.setViewport = function (t, e, n, i) {
        t.isVector4 ? B.set(t.x, t.y, t.z, t.w) : B.set(t, e, n, i),
          Q.viewport(R.copy(B).multiplyScalar(D).round());
      }),
      (this.getScissor = function (t) {
        return t.copy(z);
      }),
      (this.setScissor = function (t, e, n, i) {
        t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, n, i),
          Q.scissor(C.copy(z).multiplyScalar(D).round());
      }),
      (this.getScissorTest = function () {
        return k;
      }),
      (this.setScissorTest = function (t) {
        Q.setScissorTest((k = t));
      }),
      (this.setOpaqueSort = function (t) {
        O = t;
      }),
      (this.setTransparentSort = function (t) {
        F = t;
      }),
      (this.getClearColor = function (t) {
        return t.copy(mt.getClearColor());
      }),
      (this.setClearColor = function () {
        mt.setClearColor.apply(mt, arguments);
      }),
      (this.getClearAlpha = function () {
        return mt.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        mt.setClearAlpha.apply(mt, arguments);
      }),
      (this.clear = function (t = !0, e = !0, n = !0) {
        let i = 0;
        if (t) {
          let t = !1;
          if (null !== T) {
            const e = T.texture.format;
            t = e === Jt || e === Yt || e === jt;
          }
          if (t) {
            const t = T.texture.type,
              e =
                t === Et ||
                t === It ||
                t === Ct ||
                t === Ot ||
                t === Nt ||
                t === Dt,
              n = mt.getClearColor(),
              i = mt.getClearAlpha(),
              r = n.r,
              s = n.g,
              a = n.b;
            e
              ? ((f[0] = r),
                (f[1] = s),
                (f[2] = a),
                (f[3] = i),
                Mt.clearBufferuiv(Mt.COLOR, 0, f))
              : ((g[0] = r),
                (g[1] = s),
                (g[2] = a),
                (g[3] = i),
                Mt.clearBufferiv(Mt.COLOR, 0, g));
          } else i |= Mt.COLOR_BUFFER_BIT;
        }
        e && (i |= Mt.DEPTH_BUFFER_BIT),
          n &&
            ((i |= Mt.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          Mt.clear(i);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        n.removeEventListener("webglcontextlost", At, !1),
          n.removeEventListener("webglcontextrestored", Rt, !1),
          n.removeEventListener("webglcontextcreationerror", Pt, !1),
          ht.dispose(),
          ut.dispose(),
          et.dispose(),
          it.dispose(),
          rt.dispose(),
          ot.dispose(),
          xt.dispose(),
          yt.dispose(),
          lt.dispose(),
          Tt.dispose(),
          Tt.removeEventListener("sessionstart", zt),
          Tt.removeEventListener("sessionend", kt),
          Vt.stop();
      }),
      (this.renderBufferDirect = function (t, e, n, i, r, s) {
        null === e && (e = q);
        const a = r.isMesh && r.matrixWorld.determinant() < 0,
          o = (function (t, e, n, i, r) {
            !0 !== e.isScene && (e = q);
            nt.resetTextureUnits();
            const s = e.fog,
              a = i.isMeshStandardMaterial ? e.environment : null,
              o =
                null === T
                  ? M.outputColorSpace
                  : !0 === T.isXRRenderTarget
                  ? T.texture.colorSpace
                  : Ze,
              l = (i.isMeshStandardMaterial ? rt : it).get(i.envMap || a),
              c =
                !0 === i.vertexColors &&
                !!n.attributes.color &&
                4 === n.attributes.color.itemSize,
              h = !!n.attributes.tangent && (!!i.normalMap || i.anisotropy > 0),
              u = !!n.morphAttributes.position,
              d = !!n.morphAttributes.normal,
              p = !!n.morphAttributes.color;
            let m = K;
            i.toneMapped &&
              ((null !== T && !0 !== T.isXRRenderTarget) ||
                (m = M.toneMapping));
            const f =
                n.morphAttributes.position ||
                n.morphAttributes.normal ||
                n.morphAttributes.color,
              g = void 0 !== f ? f.length : 0,
              v = et.get(i),
              x = _.state.lights;
            if (!0 === H && (!0 === G || t !== A)) {
              const e = t === A && i.id === E;
              dt.setState(i, t, e);
            }
            let y = !1;
            i.version === v.__version
              ? (v.needsLights && v.lightsStateVersion !== x.state.version) ||
                v.outputColorSpace !== o ||
                (r.isBatchedMesh && !1 === v.batching)
                ? (y = !0)
                : r.isBatchedMesh || !0 !== v.batching
                ? (r.isBatchedMesh &&
                    !0 === v.batchingColor &&
                    null === r.colorTexture) ||
                  (r.isBatchedMesh &&
                    !1 === v.batchingColor &&
                    null !== r.colorTexture) ||
                  (r.isInstancedMesh && !1 === v.instancing)
                  ? (y = !0)
                  : r.isInstancedMesh || !0 !== v.instancing
                  ? r.isSkinnedMesh && !1 === v.skinning
                    ? (y = !0)
                    : r.isSkinnedMesh || !0 !== v.skinning
                    ? (r.isInstancedMesh &&
                        !0 === v.instancingColor &&
                        null === r.instanceColor) ||
                      (r.isInstancedMesh &&
                        !1 === v.instancingColor &&
                        null !== r.instanceColor) ||
                      (r.isInstancedMesh &&
                        !0 === v.instancingMorph &&
                        null === r.morphTexture) ||
                      (r.isInstancedMesh &&
                        !1 === v.instancingMorph &&
                        null !== r.morphTexture) ||
                      v.envMap !== l ||
                      (!0 === i.fog && v.fog !== s)
                      ? (y = !0)
                      : void 0 === v.numClippingPlanes ||
                        (v.numClippingPlanes === dt.numPlanes &&
                          v.numIntersection === dt.numIntersection)
                      ? (v.vertexAlphas !== c ||
                          v.vertexTangents !== h ||
                          v.morphTargets !== u ||
                          v.morphNormals !== d ||
                          v.morphColors !== p ||
                          v.toneMapping !== m ||
                          v.morphTargetsCount !== g) &&
                        (y = !0)
                      : (y = !0)
                    : (y = !0)
                  : (y = !0)
                : (y = !0)
              : ((y = !0), (v.__version = i.version));
            let S = v.currentProgram;
            !0 === y && (S = Zt(i, e, r));
            let b = !1,
              w = !1,
              R = !1;
            const C = S.getUniforms(),
              P = v.uniforms;
            Q.useProgram(S.program) && ((b = !0), (w = !0), (R = !0));
            i.id !== E && ((E = i.id), (w = !0));
            if (b || A !== t) {
              C.setValue(Mt, "projectionMatrix", t.projectionMatrix),
                C.setValue(Mt, "viewMatrix", t.matrixWorldInverse);
              const e = C.map.cameraPosition;
              void 0 !== e &&
                e.setValue(Mt, X.setFromMatrixPosition(t.matrixWorld)),
                $.logarithmicDepthBuffer &&
                  C.setValue(
                    Mt,
                    "logDepthBufFC",
                    2 / (Math.log(t.far + 1) / Math.LN2)
                  ),
                (i.isMeshPhongMaterial ||
                  i.isMeshToonMaterial ||
                  i.isMeshLambertMaterial ||
                  i.isMeshBasicMaterial ||
                  i.isMeshStandardMaterial ||
                  i.isShaderMaterial) &&
                  C.setValue(
                    Mt,
                    "isOrthographic",
                    !0 === t.isOrthographicCamera
                  ),
                A !== t && ((A = t), (w = !0), (R = !0));
            }
            if (r.isSkinnedMesh) {
              C.setOptional(Mt, r, "bindMatrix"),
                C.setOptional(Mt, r, "bindMatrixInverse");
              const t = r.skeleton;
              t &&
                (null === t.boneTexture && t.computeBoneTexture(),
                C.setValue(Mt, "boneTexture", t.boneTexture, nt));
            }
            r.isBatchedMesh &&
              (C.setOptional(Mt, r, "batchingTexture"),
              C.setValue(Mt, "batchingTexture", r._matricesTexture, nt),
              C.setOptional(Mt, r, "batchingIdTexture"),
              C.setValue(Mt, "batchingIdTexture", r._indirectTexture, nt),
              C.setOptional(Mt, r, "batchingColorTexture"),
              null !== r._colorsTexture &&
                C.setValue(Mt, "batchingColorTexture", r._colorsTexture, nt));
            const I = n.morphAttributes;
            (void 0 === I.position &&
              void 0 === I.normal &&
              void 0 === I.color) ||
              ft.update(r, n, S);
            (w || v.receiveShadow !== r.receiveShadow) &&
              ((v.receiveShadow = r.receiveShadow),
              C.setValue(Mt, "receiveShadow", r.receiveShadow));
            i.isMeshGouraudMaterial &&
              null !== i.envMap &&
              ((P.envMap.value = l),
              (P.flipEnvMap.value =
                l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1));
            i.isMeshStandardMaterial &&
              null === i.envMap &&
              null !== e.environment &&
              (P.envMapIntensity.value = e.environmentIntensity);
            w &&
              (C.setValue(Mt, "toneMappingExposure", M.toneMappingExposure),
              v.needsLights &&
                ((U = R),
                ((L = P).ambientLightColor.needsUpdate = U),
                (L.lightProbe.needsUpdate = U),
                (L.directionalLights.needsUpdate = U),
                (L.directionalLightShadows.needsUpdate = U),
                (L.pointLights.needsUpdate = U),
                (L.pointLightShadows.needsUpdate = U),
                (L.spotLights.needsUpdate = U),
                (L.spotLightShadows.needsUpdate = U),
                (L.rectAreaLights.needsUpdate = U),
                (L.hemisphereLights.needsUpdate = U)),
              s && !0 === i.fog && ct.refreshFogUniforms(P, s),
              ct.refreshMaterialUniforms(
                P,
                i,
                D,
                N,
                _.state.transmissionRenderTarget[t.id]
              ),
              rl.upload(Mt, Kt(v), P, nt));
            var L, U;
            i.isShaderMaterial &&
              !0 === i.uniformsNeedUpdate &&
              (rl.upload(Mt, Kt(v), P, nt), (i.uniformsNeedUpdate = !1));
            i.isSpriteMaterial && C.setValue(Mt, "center", r.center);
            if (
              (C.setValue(Mt, "modelViewMatrix", r.modelViewMatrix),
              C.setValue(Mt, "normalMatrix", r.normalMatrix),
              C.setValue(Mt, "modelMatrix", r.matrixWorld),
              i.isShaderMaterial || i.isRawShaderMaterial)
            ) {
              const t = i.uniformsGroups;
              for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                yt.update(n, S), yt.bind(n, S);
              }
            }
            return S;
          })(t, e, n, i, r);
        Q.setMaterial(i, a);
        let l = n.index,
          c = 1;
        if (!0 === i.wireframe) {
          if (((l = at.getWireframeAttribute(n)), void 0 === l)) return;
          c = 2;
        }
        const h = n.drawRange,
          u = n.attributes.position;
        let d = h.start * c,
          p = (h.start + h.count) * c;
        null !== s &&
          ((d = Math.max(d, s.start * c)),
          (p = Math.min(p, (s.start + s.count) * c))),
          null !== l
            ? ((d = Math.max(d, 0)), (p = Math.min(p, l.count)))
            : null != u && ((d = Math.max(d, 0)), (p = Math.min(p, u.count)));
        const m = p - d;
        if (m < 0 || m === 1 / 0) return;
        let f;
        xt.setup(r, i, o, n, l);
        let g = gt;
        if (
          (null !== l && ((f = st.get(l)), (g = vt), g.setIndex(f)), r.isMesh)
        )
          !0 === i.wireframe
            ? (Q.setLineWidth(i.wireframeLinewidth * Z()), g.setMode(Mt.LINES))
            : g.setMode(Mt.TRIANGLES);
        else if (r.isLine) {
          let t = i.linewidth;
          void 0 === t && (t = 1),
            Q.setLineWidth(t * Z()),
            r.isLineSegments
              ? g.setMode(Mt.LINES)
              : r.isLineLoop
              ? g.setMode(Mt.LINE_LOOP)
              : g.setMode(Mt.LINE_STRIP);
        } else
          r.isPoints
            ? g.setMode(Mt.POINTS)
            : r.isSprite && g.setMode(Mt.TRIANGLES);
        if (r.isBatchedMesh)
          if (null !== r._multiDrawInstances)
            g.renderMultiDrawInstances(
              r._multiDrawStarts,
              r._multiDrawCounts,
              r._multiDrawCount,
              r._multiDrawInstances
            );
          else if (J.get("WEBGL_multi_draw"))
            g.renderMultiDraw(
              r._multiDrawStarts,
              r._multiDrawCounts,
              r._multiDrawCount
            );
          else {
            const t = r._multiDrawStarts,
              e = r._multiDrawCounts,
              n = r._multiDrawCount,
              s = l ? st.get(l).bytesPerElement : 1,
              a = et.get(i).currentProgram.getUniforms();
            for (let i = 0; i < n; i++)
              a.setValue(Mt, "_gl_DrawID", i), g.render(t[i] / s, e[i]);
          }
        else if (r.isInstancedMesh) g.renderInstances(d, m, r.count);
        else if (n.isInstancedBufferGeometry) {
          const t =
              void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0,
            e = Math.min(n.instanceCount, t);
          g.renderInstances(d, m, e);
        } else g.render(d, m);
      }),
      (this.compile = function (t, e, n = null) {
        null === n && (n = t),
          (_ = ut.get(n)),
          _.init(e),
          y.push(_),
          n.traverseVisible(function (t) {
            t.isLight &&
              t.layers.test(e.layers) &&
              (_.pushLight(t), t.castShadow && _.pushShadow(t));
          }),
          t !== n &&
            t.traverseVisible(function (t) {
              t.isLight &&
                t.layers.test(e.layers) &&
                (_.pushLight(t), t.castShadow && _.pushShadow(t));
            }),
          _.setupLights();
        const i = new Set();
        return (
          t.traverse(function (t) {
            const e = t.material;
            if (e)
              if (Array.isArray(e))
                for (let r = 0; r < e.length; r++) {
                  const s = e[r];
                  Ft(s, n, t), i.add(s);
                }
              else Ft(e, n, t), i.add(e);
          }),
          y.pop(),
          (_ = null),
          i
        );
      }),
      (this.compileAsync = function (t, e, n = null) {
        const i = this.compile(t, e, n);
        return new Promise((e) => {
          function n() {
            i.forEach(function (t) {
              et.get(t).currentProgram.isReady() && i.delete(t);
            }),
              0 !== i.size ? setTimeout(n, 10) : e(t);
          }
          null !== J.get("KHR_parallel_shader_compile")
            ? n()
            : setTimeout(n, 10);
        });
      });
    let Bt = null;
    function zt() {
      Vt.stop();
    }
    function kt() {
      Vt.start();
    }
    const Vt = new da();
    function Ht(t, e, n, i) {
      if (!1 === t.visible) return;
      if (t.layers.test(e.layers))
        if (t.isGroup) n = t.renderOrder;
        else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
        else if (t.isLight) _.pushLight(t), t.castShadow && _.pushShadow(t);
        else if (t.isSprite) {
          if (!t.frustumCulled || V.intersectsSprite(t)) {
            i && j.setFromMatrixPosition(t.matrixWorld).applyMatrix4(W);
            const e = ot.update(t),
              r = t.material;
            r.visible && v.push(t, e, r, n, j.z, null);
          }
        } else if (
          (t.isMesh || t.isLine || t.isPoints) &&
          (!t.frustumCulled || V.intersectsObject(t))
        ) {
          const e = ot.update(t),
            r = t.material;
          if (
            (i &&
              (void 0 !== t.boundingSphere
                ? (null === t.boundingSphere && t.computeBoundingSphere(),
                  j.copy(t.boundingSphere.center))
                : (null === e.boundingSphere && e.computeBoundingSphere(),
                  j.copy(e.boundingSphere.center)),
              j.applyMatrix4(t.matrixWorld).applyMatrix4(W)),
            Array.isArray(r))
          ) {
            const i = e.groups;
            for (let s = 0, a = i.length; s < a; s++) {
              const a = i[s],
                o = r[a.materialIndex];
              o && o.visible && v.push(t, e, o, n, j.z, a);
            }
          } else r.visible && v.push(t, e, r, n, j.z, null);
        }
      const r = t.children;
      for (let t = 0, s = r.length; t < s; t++) Ht(r[t], e, n, i);
    }
    function Gt(t, e, n, i) {
      const r = t.opaque,
        s = t.transmissive,
        a = t.transparent;
      _.setupLightsView(n),
        !0 === H && dt.setGlobalState(M.clippingPlanes, n),
        i && Q.viewport(R.copy(i)),
        r.length > 0 && Xt(r, e, n),
        s.length > 0 && Xt(s, e, n),
        a.length > 0 && Xt(a, e, n),
        Q.buffers.depth.setTest(!0),
        Q.buffers.depth.setMask(!0),
        Q.buffers.color.setMask(!0),
        Q.setPolygonOffset(!1);
    }
    function Wt(t, e, n, i) {
      if (null !== (!0 === n.isScene ? n.overrideMaterial : null)) return;
      void 0 === _.state.transmissionRenderTarget[i.id] &&
        (_.state.transmissionRenderTarget[i.id] = new wi(1, 1, {
          generateMipmaps: !0,
          type:
            J.has("EXT_color_buffer_half_float") ||
            J.has("EXT_color_buffer_float")
              ? Ut
              : Et,
          minFilter: wt,
          samples: 4,
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: di.workingColorSpace,
        }));
      const r = _.state.transmissionRenderTarget[i.id],
        a = i.viewport || R;
      r.setSize(a.z, a.w);
      const o = M.getRenderTarget();
      M.setRenderTarget(r),
        M.getClearColor(I),
        (L = M.getClearAlpha()),
        L < 1 && M.setClearColor(16777215, 0.5),
        Y ? mt.render(n) : M.clear();
      const l = M.toneMapping;
      M.toneMapping = K;
      const c = i.viewport;
      if (
        (void 0 !== i.viewport && (i.viewport = void 0),
        _.setupLightsView(i),
        !0 === H && dt.setGlobalState(M.clippingPlanes, i),
        Xt(t, n, i),
        nt.updateMultisampleRenderTarget(r),
        nt.updateRenderTargetMipmap(r),
        !1 === J.has("WEBGL_multisampled_render_to_texture"))
      ) {
        let t = !1;
        for (let r = 0, s = e.length; r < s; r++) {
          const s = e[r],
            a = s.object,
            o = s.geometry,
            l = s.material,
            c = s.group;
          if (2 === l.side && a.layers.test(i.layers)) {
            const e = l.side;
            (l.side = d),
              (l.needsUpdate = !0),
              qt(a, n, i, o, l, c),
              (l.side = e),
              (l.needsUpdate = !0),
              (t = !0);
          }
        }
        !0 === t &&
          (nt.updateMultisampleRenderTarget(r), nt.updateRenderTargetMipmap(r));
      }
      M.setRenderTarget(o),
        M.setClearColor(I, L),
        void 0 !== c && (i.viewport = c),
        (M.toneMapping = l);
    }
    function Xt(t, e, n) {
      const i = !0 === e.isScene ? e.overrideMaterial : null;
      for (let r = 0, s = t.length; r < s; r++) {
        const s = t[r],
          a = s.object,
          o = s.geometry,
          l = null === i ? s.material : i,
          c = s.group;
        a.layers.test(n.layers) && qt(a, e, n, o, l, c);
      }
    }
    function qt(t, e, n, i, r, s) {
      t.onBeforeRender(M, e, n, i, r, s),
        t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
        t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
        !0 === r.transparent && 2 === r.side && !1 === r.forceSinglePass
          ? ((r.side = d),
            (r.needsUpdate = !0),
            M.renderBufferDirect(n, e, i, r, t, s),
            (r.side = u),
            (r.needsUpdate = !0),
            M.renderBufferDirect(n, e, i, r, t, s),
            (r.side = 2))
          : M.renderBufferDirect(n, e, i, r, t, s),
        t.onAfterRender(M, e, n, i, r, s);
    }
    function Zt(t, e, n) {
      !0 !== e.isScene && (e = q);
      const i = et.get(t),
        r = _.state.lights,
        s = _.state.shadowsArray,
        a = r.state.version,
        o = lt.getParameters(t, r.state, s, e, n),
        l = lt.getProgramCacheKey(o);
      let c = i.programs;
      (i.environment = t.isMeshStandardMaterial ? e.environment : null),
        (i.fog = e.fog),
        (i.envMap = (t.isMeshStandardMaterial ? rt : it).get(
          t.envMap || i.environment
        )),
        (i.envMapRotation =
          null !== i.environment && null === t.envMap
            ? e.environmentRotation
            : t.envMapRotation),
        void 0 === c &&
          (t.addEventListener("dispose", Lt),
          (c = new Map()),
          (i.programs = c));
      let h = c.get(l);
      if (void 0 !== h) {
        if (i.currentProgram === h && i.lightsStateVersion === a)
          return $t(t, o), h;
      } else
        (o.uniforms = lt.getUniforms(t)),
          t.onBeforeCompile(o, M),
          (h = lt.acquireProgram(o, l)),
          c.set(l, h),
          (i.uniforms = o.uniforms);
      const u = i.uniforms;
      return (
        ((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) ||
          (u.clippingPlanes = dt.uniform),
        $t(t, o),
        (i.needsLights = (function (t) {
          return (
            t.isMeshLambertMaterial ||
            t.isMeshToonMaterial ||
            t.isMeshPhongMaterial ||
            t.isMeshStandardMaterial ||
            t.isShadowMaterial ||
            (t.isShaderMaterial && !0 === t.lights)
          );
        })(t)),
        (i.lightsStateVersion = a),
        i.needsLights &&
          ((u.ambientLightColor.value = r.state.ambient),
          (u.lightProbe.value = r.state.probe),
          (u.directionalLights.value = r.state.directional),
          (u.directionalLightShadows.value = r.state.directionalShadow),
          (u.spotLights.value = r.state.spot),
          (u.spotLightShadows.value = r.state.spotShadow),
          (u.rectAreaLights.value = r.state.rectArea),
          (u.ltc_1.value = r.state.rectAreaLTC1),
          (u.ltc_2.value = r.state.rectAreaLTC2),
          (u.pointLights.value = r.state.point),
          (u.pointLightShadows.value = r.state.pointShadow),
          (u.hemisphereLights.value = r.state.hemi),
          (u.directionalShadowMap.value = r.state.directionalShadowMap),
          (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
          (u.spotShadowMap.value = r.state.spotShadowMap),
          (u.spotLightMatrix.value = r.state.spotLightMatrix),
          (u.spotLightMap.value = r.state.spotLightMap),
          (u.pointShadowMap.value = r.state.pointShadowMap),
          (u.pointShadowMatrix.value = r.state.pointShadowMatrix)),
        (i.currentProgram = h),
        (i.uniformsList = null),
        h
      );
    }
    function Kt(t) {
      if (null === t.uniformsList) {
        const e = t.currentProgram.getUniforms();
        t.uniformsList = rl.seqWithValue(e.seq, t.uniforms);
      }
      return t.uniformsList;
    }
    function $t(t, e) {
      const n = et.get(t);
      (n.outputColorSpace = e.outputColorSpace),
        (n.batching = e.batching),
        (n.batchingColor = e.batchingColor),
        (n.instancing = e.instancing),
        (n.instancingColor = e.instancingColor),
        (n.instancingMorph = e.instancingMorph),
        (n.skinning = e.skinning),
        (n.morphTargets = e.morphTargets),
        (n.morphNormals = e.morphNormals),
        (n.morphColors = e.morphColors),
        (n.morphTargetsCount = e.morphTargetsCount),
        (n.numClippingPlanes = e.numClippingPlanes),
        (n.numIntersection = e.numClipIntersection),
        (n.vertexAlphas = e.vertexAlphas),
        (n.vertexTangents = e.vertexTangents),
        (n.toneMapping = e.toneMapping);
    }
    Vt.setAnimationLoop(function (t) {
      Bt && Bt(t);
    }),
      "undefined" != typeof self && Vt.setContext(self),
      (this.setAnimationLoop = function (t) {
        (Bt = t), Tt.setAnimationLoop(t), null === t ? Vt.stop() : Vt.start();
      }),
      Tt.addEventListener("sessionstart", zt),
      Tt.addEventListener("sessionend", kt),
      (this.render = function (t, e) {
        if (void 0 !== e && !0 !== e.isCamera)
          return void console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
        if (!0 === S) return;
        if (
          (!0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(),
          null === e.parent &&
            !0 === e.matrixWorldAutoUpdate &&
            e.updateMatrixWorld(),
          !0 === Tt.enabled &&
            !0 === Tt.isPresenting &&
            (!0 === Tt.cameraAutoUpdate && Tt.updateCamera(e),
            (e = Tt.getCamera())),
          !0 === t.isScene && t.onBeforeRender(M, t, e, T),
          (_ = ut.get(t, y.length)),
          _.init(e),
          y.push(_),
          W.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
          V.setFromProjectionMatrix(W),
          (G = this.localClippingEnabled),
          (H = dt.init(this.clippingPlanes, G)),
          (v = ht.get(t, x.length)),
          v.init(),
          x.push(v),
          !0 === Tt.enabled && !0 === Tt.isPresenting)
        ) {
          const t = M.xr.getDepthSensingMesh();
          null !== t && Ht(t, e, -1 / 0, M.sortObjects);
        }
        Ht(t, e, 0, M.sortObjects),
          v.finish(),
          !0 === M.sortObjects && v.sort(O, F),
          (Y =
            !1 === Tt.enabled ||
            !1 === Tt.isPresenting ||
            !1 === Tt.hasDepthSensing()),
          Y && mt.addToRenderList(v, t),
          this.info.render.frame++,
          !0 === H && dt.beginShadows();
        const n = _.state.shadowsArray;
        pt.render(n, t, e),
          !0 === H && dt.endShadows(),
          !0 === this.info.autoReset && this.info.reset();
        const i = v.opaque,
          r = v.transmissive;
        if ((_.setupLights(), e.isArrayCamera)) {
          const n = e.cameras;
          if (r.length > 0)
            for (let e = 0, s = n.length; e < s; e++) {
              Wt(i, r, t, n[e]);
            }
          Y && mt.render(t);
          for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            Gt(v, t, i, i.viewport);
          }
        } else r.length > 0 && Wt(i, r, t, e), Y && mt.render(t), Gt(v, t, e);
        null !== T &&
          (nt.updateMultisampleRenderTarget(T), nt.updateRenderTargetMipmap(T)),
          !0 === t.isScene && t.onAfterRender(M, t, e),
          xt.resetDefaultState(),
          (E = -1),
          (A = null),
          y.pop(),
          y.length > 0
            ? ((_ = y[y.length - 1]),
              !0 === H && dt.setGlobalState(M.clippingPlanes, _.state.camera))
            : (_ = null),
          x.pop(),
          (v = x.length > 0 ? x[x.length - 1] : null);
      }),
      (this.getActiveCubeFace = function () {
        return b;
      }),
      (this.getActiveMipmapLevel = function () {
        return w;
      }),
      (this.getRenderTarget = function () {
        return T;
      }),
      (this.setRenderTargetTextures = function (t, e, n) {
        (et.get(t.texture).__webglTexture = e),
          (et.get(t.depthTexture).__webglTexture = n);
        const i = et.get(t);
        (i.__hasExternalTextures = !0),
          (i.__autoAllocateDepthBuffer = void 0 === n),
          i.__autoAllocateDepthBuffer ||
            (!0 === J.has("WEBGL_multisampled_render_to_texture") &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (i.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (t, e) {
        const n = et.get(t);
        (n.__webglFramebuffer = e), (n.__useDefaultFramebuffer = void 0 === e);
      }),
      (this.setRenderTarget = function (t, e = 0, n = 0) {
        (T = t), (b = e), (w = n);
        let i = !0,
          r = null,
          s = !1,
          a = !1;
        if (t) {
          const o = et.get(t);
          void 0 !== o.__useDefaultFramebuffer
            ? (Q.bindFramebuffer(Mt.FRAMEBUFFER, null), (i = !1))
            : void 0 === o.__webglFramebuffer
            ? nt.setupRenderTarget(t)
            : o.__hasExternalTextures &&
              nt.rebindTextures(
                t,
                et.get(t.texture).__webglTexture,
                et.get(t.depthTexture).__webglTexture
              );
          const l = t.texture;
          (l.isData3DTexture ||
            l.isDataArrayTexture ||
            l.isCompressedArrayTexture) &&
            (a = !0);
          const c = et.get(t).__webglFramebuffer;
          t.isWebGLCubeRenderTarget
            ? ((r = Array.isArray(c[e]) ? c[e][n] : c[e]), (s = !0))
            : (r =
                t.samples > 0 && !1 === nt.useMultisampledRTT(t)
                  ? et.get(t).__webglMultisampledFramebuffer
                  : Array.isArray(c)
                  ? c[n]
                  : c),
            R.copy(t.viewport),
            C.copy(t.scissor),
            (P = t.scissorTest);
        } else
          R.copy(B).multiplyScalar(D).floor(),
            C.copy(z).multiplyScalar(D).floor(),
            (P = k);
        if (
          (Q.bindFramebuffer(Mt.FRAMEBUFFER, r) && i && Q.drawBuffers(t, r),
          Q.viewport(R),
          Q.scissor(C),
          Q.setScissorTest(P),
          s)
        ) {
          const i = et.get(t.texture);
          Mt.framebufferTexture2D(
            Mt.FRAMEBUFFER,
            Mt.COLOR_ATTACHMENT0,
            Mt.TEXTURE_CUBE_MAP_POSITIVE_X + e,
            i.__webglTexture,
            n
          );
        } else if (a) {
          const i = et.get(t.texture),
            r = e || 0;
          Mt.framebufferTextureLayer(
            Mt.FRAMEBUFFER,
            Mt.COLOR_ATTACHMENT0,
            i.__webglTexture,
            n || 0,
            r
          );
        }
        E = -1;
      }),
      (this.readRenderTargetPixels = function (t, e, n, i, r, s, a) {
        if (!t || !t.isWebGLRenderTarget)
          return void console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let o = et.get(t).__webglFramebuffer;
        if ((t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o)) {
          Q.bindFramebuffer(Mt.FRAMEBUFFER, o);
          try {
            const a = t.texture,
              o = a.format,
              l = a.type;
            if (!$.textureFormatReadable(o))
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
            if (!$.textureTypeReadable(l))
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            e >= 0 &&
              e <= t.width - i &&
              n >= 0 &&
              n <= t.height - r &&
              Mt.readPixels(e, n, i, r, _t.convert(o), _t.convert(l), s);
          } finally {
            const t = null !== T ? et.get(T).__webglFramebuffer : null;
            Q.bindFramebuffer(Mt.FRAMEBUFFER, t);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (t, e, n, i, r, s, a) {
        if (!t || !t.isWebGLRenderTarget)
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let o = et.get(t).__webglFramebuffer;
        if ((t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o)) {
          Q.bindFramebuffer(Mt.FRAMEBUFFER, o);
          try {
            const a = t.texture,
              o = a.format,
              l = a.type;
            if (!$.textureFormatReadable(o))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
              );
            if (!$.textureTypeReadable(l))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            if (e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r) {
              const t = Mt.createBuffer();
              Mt.bindBuffer(Mt.PIXEL_PACK_BUFFER, t),
                Mt.bufferData(
                  Mt.PIXEL_PACK_BUFFER,
                  s.byteLength,
                  Mt.STREAM_READ
                ),
                Mt.readPixels(e, n, i, r, _t.convert(o), _t.convert(l), 0),
                Mt.flush();
              const a = Mt.fenceSync(Mt.SYNC_GPU_COMMANDS_COMPLETE, 0);
              await (function (t, e, n) {
                return new Promise(function (i, r) {
                  setTimeout(function s() {
                    switch (t.clientWaitSync(e, t.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                      case t.WAIT_FAILED:
                        r();
                        break;
                      case t.TIMEOUT_EXPIRED:
                        setTimeout(s, n);
                        break;
                      default:
                        i();
                    }
                  }, n);
                });
              })(Mt, a, 4);
              try {
                Mt.bindBuffer(Mt.PIXEL_PACK_BUFFER, t),
                  Mt.getBufferSubData(Mt.PIXEL_PACK_BUFFER, 0, s);
              } finally {
                Mt.deleteBuffer(t), Mt.deleteSync(a);
              }
              return s;
            }
          } finally {
            const t = null !== T ? et.get(T).__webglFramebuffer : null;
            Q.bindFramebuffer(Mt.FRAMEBUFFER, t);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (t, e = null, n = 0) {
        !0 !== t.isTexture &&
          (console.warn(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed."
          ),
          (e = arguments[0] || null),
          (t = arguments[1]));
        const i = Math.pow(2, -n),
          r = Math.floor(t.image.width * i),
          s = Math.floor(t.image.height * i),
          a = null !== e ? e.x : 0,
          o = null !== e ? e.y : 0;
        nt.setTexture2D(t, 0),
          Mt.copyTexSubImage2D(Mt.TEXTURE_2D, n, 0, 0, a, o, r, s),
          Q.unbindTexture();
      }),
      (this.copyTextureToTexture = function (t, e, n = null, i = null, r = 0) {
        let s, a, o, l, c, h;
        !0 !== t.isTexture &&
          (console.warn(
            "WebGLRenderer: copyTextureToTexture function signature has changed."
          ),
          (i = arguments[0] || null),
          (t = arguments[1]),
          (e = arguments[2]),
          (r = arguments[3] || 0),
          (n = null)),
          null !== n
            ? ((s = n.max.x - n.min.x),
              (a = n.max.y - n.min.y),
              (o = n.min.x),
              (l = n.min.y))
            : ((s = t.image.width), (a = t.image.height), (o = 0), (l = 0)),
          null !== i ? ((c = i.x), (h = i.y)) : ((c = 0), (h = 0));
        const u = _t.convert(e.format),
          d = _t.convert(e.type);
        nt.setTexture2D(e, 0),
          Mt.pixelStorei(Mt.UNPACK_FLIP_Y_WEBGL, e.flipY),
          Mt.pixelStorei(Mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha),
          Mt.pixelStorei(Mt.UNPACK_ALIGNMENT, e.unpackAlignment);
        const p = Mt.getParameter(Mt.UNPACK_ROW_LENGTH),
          m = Mt.getParameter(Mt.UNPACK_IMAGE_HEIGHT),
          f = Mt.getParameter(Mt.UNPACK_SKIP_PIXELS),
          g = Mt.getParameter(Mt.UNPACK_SKIP_ROWS),
          v = Mt.getParameter(Mt.UNPACK_SKIP_IMAGES),
          _ = t.isCompressedTexture ? t.mipmaps[r] : t.image;
        Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH, _.width),
          Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT, _.height),
          Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS, o),
          Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS, l),
          t.isDataTexture
            ? Mt.texSubImage2D(Mt.TEXTURE_2D, r, c, h, s, a, u, d, _.data)
            : t.isCompressedTexture
            ? Mt.compressedTexSubImage2D(
                Mt.TEXTURE_2D,
                r,
                c,
                h,
                _.width,
                _.height,
                u,
                _.data
              )
            : Mt.texSubImage2D(Mt.TEXTURE_2D, r, c, h, s, a, u, d, _),
          Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH, p),
          Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT, m),
          Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS, f),
          Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS, g),
          Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES, v),
          0 === r && e.generateMipmaps && Mt.generateMipmap(Mt.TEXTURE_2D),
          Q.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (
        t,
        e,
        n = null,
        i = null,
        r = 0
      ) {
        let s, a, o, l, c, h, u, d, p;
        !0 !== t.isTexture &&
          (console.warn(
            "WebGLRenderer: copyTextureToTexture3D function signature has changed."
          ),
          (n = arguments[0] || null),
          (i = arguments[1] || null),
          (t = arguments[2]),
          (e = arguments[3]),
          (r = arguments[4] || 0));
        const m = t.isCompressedTexture ? t.mipmaps[r] : t.image;
        null !== n
          ? ((s = n.max.x - n.min.x),
            (a = n.max.y - n.min.y),
            (o = n.max.z - n.min.z),
            (l = n.min.x),
            (c = n.min.y),
            (h = n.min.z))
          : ((s = m.width),
            (a = m.height),
            (o = m.depth),
            (l = 0),
            (c = 0),
            (h = 0)),
          null !== i
            ? ((u = i.x), (d = i.y), (p = i.z))
            : ((u = 0), (d = 0), (p = 0));
        const f = _t.convert(e.format),
          g = _t.convert(e.type);
        let v;
        if (e.isData3DTexture) nt.setTexture3D(e, 0), (v = Mt.TEXTURE_3D);
        else {
          if (!e.isDataArrayTexture && !e.isCompressedArrayTexture)
            return void console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
            );
          nt.setTexture2DArray(e, 0), (v = Mt.TEXTURE_2D_ARRAY);
        }
        Mt.pixelStorei(Mt.UNPACK_FLIP_Y_WEBGL, e.flipY),
          Mt.pixelStorei(Mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha),
          Mt.pixelStorei(Mt.UNPACK_ALIGNMENT, e.unpackAlignment);
        const _ = Mt.getParameter(Mt.UNPACK_ROW_LENGTH),
          x = Mt.getParameter(Mt.UNPACK_IMAGE_HEIGHT),
          y = Mt.getParameter(Mt.UNPACK_SKIP_PIXELS),
          M = Mt.getParameter(Mt.UNPACK_SKIP_ROWS),
          S = Mt.getParameter(Mt.UNPACK_SKIP_IMAGES);
        Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH, m.width),
          Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT, m.height),
          Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS, l),
          Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS, c),
          Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES, h),
          t.isDataTexture || t.isData3DTexture
            ? Mt.texSubImage3D(v, r, u, d, p, s, a, o, f, g, m.data)
            : e.isCompressedArrayTexture
            ? Mt.compressedTexSubImage3D(v, r, u, d, p, s, a, o, f, m.data)
            : Mt.texSubImage3D(v, r, u, d, p, s, a, o, f, g, m),
          Mt.pixelStorei(Mt.UNPACK_ROW_LENGTH, _),
          Mt.pixelStorei(Mt.UNPACK_IMAGE_HEIGHT, x),
          Mt.pixelStorei(Mt.UNPACK_SKIP_PIXELS, y),
          Mt.pixelStorei(Mt.UNPACK_SKIP_ROWS, M),
          Mt.pixelStorei(Mt.UNPACK_SKIP_IMAGES, S),
          0 === r && e.generateMipmaps && Mt.generateMipmap(v),
          Q.unbindTexture();
      }),
      (this.initRenderTarget = function (t) {
        void 0 === et.get(t).__webglFramebuffer && nt.setupRenderTarget(t);
      }),
      (this.initTexture = function (t) {
        t.isCubeTexture
          ? nt.setTextureCube(t, 0)
          : t.isData3DTexture
          ? nt.setTexture3D(t, 0)
          : t.isDataArrayTexture || t.isCompressedArrayTexture
          ? nt.setTexture2DArray(t, 0)
          : nt.setTexture2D(t, 0),
          Q.unbindTexture();
      }),
      (this.resetState = function () {
        (b = 0), (w = 0), (T = null), Q.reset(), xt.reset();
      }),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return Bn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    (e.drawingBufferColorSpace = t === Je ? "display-p3" : "srgb"),
      (e.unpackColorSpace =
        di.workingColorSpace === Ke ? "display-p3" : "srgb");
  }
}
class ic {
  constructor(t, e = 25e-5) {
    (this.isFogExp2 = !0),
      (this.name = ""),
      (this.color = new Zr(t)),
      (this.density = e);
  }
  clone() {
    return new ic(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      name: this.name,
      color: this.color.getHex(),
      density: this.density,
    };
  }
}
class rc {
  constructor(t, e = 1, n = 1e3) {
    (this.isFog = !0),
      (this.name = ""),
      (this.color = new Zr(t)),
      (this.near = e),
      (this.far = n);
  }
  clone() {
    return new rc(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  }
}
class sc extends Ur {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new gr()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new gr()),
      (this.overrideMaterial = null),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      null !== t.background && (this.background = t.background.clone()),
      null !== t.environment && (this.environment = t.environment.clone()),
      null !== t.fog && (this.fog = t.fog.clone()),
      (this.backgroundBlurriness = t.backgroundBlurriness),
      (this.backgroundIntensity = t.backgroundIntensity),
      this.backgroundRotation.copy(t.backgroundRotation),
      (this.environmentIntensity = t.environmentIntensity),
      this.environmentRotation.copy(t.environmentRotation),
      null !== t.overrideMaterial &&
        (this.overrideMaterial = t.overrideMaterial.clone()),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      null !== this.fog && (e.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (e.object.backgroundBlurriness = this.backgroundBlurriness),
      1 !== this.backgroundIntensity &&
        (e.object.backgroundIntensity = this.backgroundIntensity),
      (e.object.backgroundRotation = this.backgroundRotation.toArray()),
      1 !== this.environmentIntensity &&
        (e.object.environmentIntensity = this.environmentIntensity),
      (e.object.environmentRotation = this.environmentRotation.toArray()),
      e
    );
  }
}
class ac {
  constructor(t, e) {
    (this.isInterleavedBuffer = !0),
      (this.array = t),
      (this.stride = e),
      (this.count = void 0 !== t ? t.length / e : 0),
      (this.usage = An),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = Xn());
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  get updateRange() {
    return (
      oi(
        "THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
      ),
      this._updateRange
    );
  }
  setUsage(t) {
    return (this.usage = t), this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return (
      (this.array = new t.array.constructor(t.array)),
      (this.count = t.count),
      (this.stride = t.stride),
      (this.usage = t.usage),
      this
    );
  }
  copyAt(t, e, n) {
    (t *= this.stride), (n *= e.stride);
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Xn()),
      void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
        (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(
        t.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return (this.onUploadCallback = t), this;
  }
  toJSON(t) {
    return (
      void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Xn()),
      void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
        (t.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const oc = new Pi();
class lc {
  constructor(t, e, n, i = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = t),
      (this.itemSize = e),
      (this.offset = n),
      (this.normalized = i);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      oc.fromBufferAttribute(this, e),
        oc.applyMatrix4(t),
        this.setXYZ(e, oc.x, oc.y, oc.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      oc.fromBufferAttribute(this, e),
        oc.applyNormalMatrix(t),
        this.setXYZ(e, oc.x, oc.y, oc.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      oc.fromBufferAttribute(this, e),
        oc.transformDirection(t),
        this.setXYZ(e, oc.x, oc.y, oc.z);
    return this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (n = Zn(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return (
      this.normalized && (n = Jn(n, this.array)),
      (this.data.array[t * this.data.stride + this.offset + e] = n),
      this
    );
  }
  setX(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset] = e),
      this
    );
  }
  setY(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 1] = e),
      this
    );
  }
  setZ(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 2] = e),
      this
    );
  }
  setW(t, e) {
    return (
      this.normalized && (e = Jn(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 3] = e),
      this
    );
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = Zn(e, this.array)), e;
  }
  setXY(t, e, n) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized && ((e = Jn(e, this.array)), (n = Jn(n, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      this
    );
  }
  setXYZ(t, e, n, i) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized &&
        ((e = Jn(e, this.array)),
        (n = Jn(n, this.array)),
        (i = Jn(i, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      (this.data.array[t + 2] = i),
      this
    );
  }
  setXYZW(t, e, n, i, r) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized &&
        ((e = Jn(e, this.array)),
        (n = Jn(n, this.array)),
        (i = Jn(i, this.array)),
        (r = Jn(r, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      (this.data.array[t + 2] = i),
      (this.data.array[t + 3] = r),
      this
    );
  }
  clone(t) {
    if (void 0 === t) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let e = 0; e < this.count; e++) {
        const n = e * this.data.stride + this.offset;
        for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
      }
      return new os(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    }
    return (
      void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
      void 0 === t.interleavedBuffers[this.data.uuid] &&
        (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
      new lc(
        t.interleavedBuffers[this.data.uuid],
        this.itemSize,
        this.offset,
        this.normalized
      )
    );
  }
  toJSON(t) {
    if (void 0 === t) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let e = 0; e < this.count; e++) {
        const n = e * this.data.stride + this.offset;
        for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    }
    return (
      void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
      void 0 === t.interleavedBuffers[this.data.uuid] &&
        (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
      {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized,
      }
    );
  }
}
class cc extends $r {
  constructor(t) {
    super(),
      (this.isSpriteMaterial = !0),
      (this.type = "SpriteMaterial"),
      (this.color = new Zr(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.rotation = t.rotation),
      (this.sizeAttenuation = t.sizeAttenuation),
      (this.fog = t.fog),
      this
    );
  }
}
let hc;
const uc = new Pi(),
  dc = new Pi(),
  pc = new Pi(),
  mc = new $n(),
  fc = new $n(),
  gc = new ar(),
  vc = new Pi(),
  _c = new Pi(),
  xc = new Pi(),
  yc = new $n(),
  Mc = new $n(),
  Sc = new $n();
class bc extends Ur {
  constructor(t = new cc()) {
    if (
      (super(), (this.isSprite = !0), (this.type = "Sprite"), void 0 === hc)
    ) {
      hc = new ws();
      const t = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        e = new ac(t, 5);
      hc.setIndex([0, 1, 2, 0, 2, 3]),
        hc.setAttribute("position", new lc(e, 3, 0, !1)),
        hc.setAttribute("uv", new lc(e, 2, 3, !1));
    }
    (this.geometry = hc), (this.material = t), (this.center = new $n(0.5, 0.5));
  }
  raycast(t, e) {
    null === t.camera &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
      ),
      dc.setFromMatrixScale(this.matrixWorld),
      gc.copy(t.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        t.camera.matrixWorldInverse,
        this.matrixWorld
      ),
      pc.setFromMatrixPosition(this.modelViewMatrix),
      t.camera.isPerspectiveCamera &&
        !1 === this.material.sizeAttenuation &&
        dc.multiplyScalar(-pc.z);
    const n = this.material.rotation;
    let i, r;
    0 !== n && ((r = Math.cos(n)), (i = Math.sin(n)));
    const s = this.center;
    wc(vc.set(-0.5, -0.5, 0), pc, s, dc, i, r),
      wc(_c.set(0.5, -0.5, 0), pc, s, dc, i, r),
      wc(xc.set(0.5, 0.5, 0), pc, s, dc, i, r),
      yc.set(0, 0),
      Mc.set(1, 0),
      Sc.set(1, 1);
    let a = t.ray.intersectTriangle(vc, _c, xc, !1, uc);
    if (
      null === a &&
      (wc(_c.set(-0.5, 0.5, 0), pc, s, dc, i, r),
      Mc.set(0, 1),
      (a = t.ray.intersectTriangle(vc, xc, _c, !1, uc)),
      null === a)
    )
      return;
    const o = t.ray.origin.distanceTo(uc);
    o < t.near ||
      o > t.far ||
      e.push({
        distance: o,
        point: uc.clone(),
        uv: Wr.getInterpolation(uc, vc, _c, xc, yc, Mc, Sc, new $n()),
        face: null,
        object: this,
      });
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      void 0 !== t.center && this.center.copy(t.center),
      (this.material = t.material),
      this
    );
  }
}
function wc(t, e, n, i, r, s) {
  mc.subVectors(t, n).addScalar(0.5).multiply(i),
    void 0 !== r
      ? ((fc.x = s * mc.x - r * mc.y), (fc.y = r * mc.x + s * mc.y))
      : fc.copy(mc),
    t.copy(e),
    (t.x += fc.x),
    (t.y += fc.y),
    t.applyMatrix4(gc);
}
const Tc = new Pi(),
  Ec = new Pi();
class Ac extends Ur {
  constructor() {
    super(),
      (this._currentLevel = 0),
      (this.type = "LOD"),
      Object.defineProperties(this, {
        levels: { enumerable: !0, value: [] },
        isLOD: { value: !0 },
      }),
      (this.autoUpdate = !0);
  }
  copy(t) {
    super.copy(t, !1);
    const e = t.levels;
    for (let t = 0, n = e.length; t < n; t++) {
      const n = e[t];
      this.addLevel(n.object.clone(), n.distance, n.hysteresis);
    }
    return (this.autoUpdate = t.autoUpdate), this;
  }
  addLevel(t, e = 0, n = 0) {
    e = Math.abs(e);
    const i = this.levels;
    let r;
    for (r = 0; r < i.length && !(e < i[r].distance); r++);
    return (
      i.splice(r, 0, { distance: e, hysteresis: n, object: t }),
      this.add(t),
      this
    );
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(t) {
    const e = this.levels;
    if (e.length > 0) {
      let n, i;
      for (n = 1, i = e.length; n < i; n++) {
        let i = e[n].distance;
        if ((e[n].object.visible && (i -= i * e[n].hysteresis), t < i)) break;
      }
      return e[n - 1].object;
    }
    return null;
  }
  raycast(t, e) {
    if (this.levels.length > 0) {
      Tc.setFromMatrixPosition(this.matrixWorld);
      const n = t.ray.origin.distanceTo(Tc);
      this.getObjectForDistance(n).raycast(t, e);
    }
  }
  update(t) {
    const e = this.levels;
    if (e.length > 1) {
      Tc.setFromMatrixPosition(t.matrixWorld),
        Ec.setFromMatrixPosition(this.matrixWorld);
      const n = Tc.distanceTo(Ec) / t.zoom;
      let i, r;
      for (e[0].object.visible = !0, i = 1, r = e.length; i < r; i++) {
        let t = e[i].distance;
        if ((e[i].object.visible && (t -= t * e[i].hysteresis), !(n >= t)))
          break;
        (e[i - 1].object.visible = !1), (e[i].object.visible = !0);
      }
      for (this._currentLevel = i - 1; i < r; i++) e[i].object.visible = !1;
    }
  }
  toJSON(t) {
    const e = super.toJSON(t);
    !1 === this.autoUpdate && (e.object.autoUpdate = !1),
      (e.object.levels = []);
    const n = this.levels;
    for (let t = 0, i = n.length; t < i; t++) {
      const i = n[t];
      e.object.levels.push({
        object: i.object.uuid,
        distance: i.distance,
        hysteresis: i.hysteresis,
      });
    }
    return e;
  }
}
const Rc = new Pi(),
  Cc = new Si(),
  Pc = new Si(),
  Ic = new Pi(),
  Lc = new ar(),
  Uc = new Pi(),
  Nc = new Ki(),
  Dc = new ar(),
  Oc = new sr();
class Fc extends Hs {
  constructor(t, e) {
    super(t, e),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = st),
      (this.bindMatrix = new ar()),
      (this.bindMatrixInverse = new ar()),
      (this.boundingBox = null),
      (this.boundingSphere = null);
  }
  computeBoundingBox() {
    const t = this.geometry;
    null === this.boundingBox && (this.boundingBox = new Ui()),
      this.boundingBox.makeEmpty();
    const e = t.getAttribute("position");
    for (let t = 0; t < e.count; t++)
      this.getVertexPosition(t, Uc), this.boundingBox.expandByPoint(Uc);
  }
  computeBoundingSphere() {
    const t = this.geometry;
    null === this.boundingSphere && (this.boundingSphere = new Ki()),
      this.boundingSphere.makeEmpty();
    const e = t.getAttribute("position");
    for (let t = 0; t < e.count; t++)
      this.getVertexPosition(t, Uc), this.boundingSphere.expandByPoint(Uc);
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.bindMode = t.bindMode),
      this.bindMatrix.copy(t.bindMatrix),
      this.bindMatrixInverse.copy(t.bindMatrixInverse),
      (this.skeleton = t.skeleton),
      null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
      null !== t.boundingSphere &&
        (this.boundingSphere = t.boundingSphere.clone()),
      this
    );
  }
  raycast(t, e) {
    const n = this.material,
      i = this.matrixWorld;
    void 0 !== n &&
      (null === this.boundingSphere && this.computeBoundingSphere(),
      Nc.copy(this.boundingSphere),
      Nc.applyMatrix4(i),
      !1 !== t.ray.intersectsSphere(Nc) &&
        (Dc.copy(i).invert(),
        Oc.copy(t.ray).applyMatrix4(Dc),
        (null !== this.boundingBox &&
          !1 === Oc.intersectsBox(this.boundingBox)) ||
          this._computeIntersections(t, e, Oc)));
  }
  getVertexPosition(t, e) {
    return super.getVertexPosition(t, e), this.applyBoneTransform(t, e), e;
  }
  bind(t, e) {
    (this.skeleton = t),
      void 0 === e &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (e = this.matrixWorld)),
      this.bindMatrix.copy(e),
      this.bindMatrixInverse.copy(e).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const t = new Si(),
      e = this.geometry.attributes.skinWeight;
    for (let n = 0, i = e.count; n < i; n++) {
      t.fromBufferAttribute(e, n);
      const i = 1 / t.manhattanLength();
      i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
        e.setXYZW(n, t.x, t.y, t.z, t.w);
    }
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t),
      this.bindMode === st
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === at
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  applyBoneTransform(t, e) {
    const n = this.skeleton,
      i = this.geometry;
    Cc.fromBufferAttribute(i.attributes.skinIndex, t),
      Pc.fromBufferAttribute(i.attributes.skinWeight, t),
      Rc.copy(e).applyMatrix4(this.bindMatrix),
      e.set(0, 0, 0);
    for (let t = 0; t < 4; t++) {
      const i = Pc.getComponent(t);
      if (0 !== i) {
        const r = Cc.getComponent(t);
        Lc.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]),
          e.addScaledVector(Ic.copy(Rc).applyMatrix4(Lc), i);
      }
    }
    return e.applyMatrix4(this.bindMatrixInverse);
  }
}
class Bc extends Ur {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class zc extends Mi {
  constructor(t = null, e = 1, n = 1, i, r, s, a, o, l = 1003, c = 1003, h, u) {
    super(null, s, a, o, l, c, i, r, h, u),
      (this.isDataTexture = !0),
      (this.image = { data: t, width: e, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const kc = new ar(),
  Vc = new ar();
class Hc {
  constructor(t = [], e = []) {
    (this.uuid = Xn()),
      (this.bones = t.slice(0)),
      (this.boneInverses = e),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      this.init();
  }
  init() {
    const t = this.bones,
      e = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(16 * t.length)), 0 === e.length))
      this.calculateInverses();
    else if (t.length !== e.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let t = 0, e = this.bones.length; t < e; t++)
        this.boneInverses.push(new ar());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const e = new ar();
      this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(),
        this.boneInverses.push(e);
    }
  }
  pose() {
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const e = this.bones[t];
      e && e.matrixWorld.copy(this.boneInverses[t]).invert();
    }
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const e = this.bones[t];
      e &&
        (e.parent && e.parent.isBone
          ? (e.matrix.copy(e.parent.matrixWorld).invert(),
            e.matrix.multiply(e.matrixWorld))
          : e.matrix.copy(e.matrixWorld),
        e.matrix.decompose(e.position, e.quaternion, e.scale));
    }
  }
  update() {
    const t = this.bones,
      e = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture;
    for (let i = 0, r = t.length; i < r; i++) {
      const r = t[i] ? t[i].matrixWorld : Vc;
      kc.multiplyMatrices(r, e[i]), kc.toArray(n, 16 * i);
    }
    null !== i && (i.needsUpdate = !0);
  }
  clone() {
    return new Hc(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let t = Math.sqrt(4 * this.bones.length);
    (t = 4 * Math.ceil(t / 4)), (t = Math.max(t, 4));
    const e = new Float32Array(t * t * 4);
    e.set(this.boneMatrices);
    const n = new zc(e, t, t, kt, Lt);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = e),
      (this.boneTexture = n),
      this
    );
  }
  getBoneByName(t) {
    for (let e = 0, n = this.bones.length; e < n; e++) {
      const n = this.bones[e];
      if (n.name === t) return n;
    }
  }
  dispose() {
    null !== this.boneTexture &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(t, e) {
    this.uuid = t.uuid;
    for (let n = 0, i = t.bones.length; n < i; n++) {
      const i = t.bones[n];
      let r = e[i];
      void 0 === r &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", i),
        (r = new Bc())),
        this.bones.push(r),
        this.boneInverses.push(new ar().fromArray(t.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    t.uuid = this.uuid;
    const e = this.bones,
      n = this.boneInverses;
    for (let i = 0, r = e.length; i < r; i++) {
      const r = e[i];
      t.bones.push(r.uuid);
      const s = n[i];
      t.boneInverses.push(s.toArray());
    }
    return t;
  }
}
class Gc extends os {
  constructor(t, e, n, i = 1) {
    super(t, e, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = i);
  }
  copy(t) {
    return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.meshPerAttribute = this.meshPerAttribute),
      (t.isInstancedBufferAttribute = !0),
      t
    );
  }
}
const Wc = new ar(),
  Xc = new ar(),
  jc = [],
  qc = new Ui(),
  Yc = new ar(),
  Zc = new Hs(),
  Jc = new Ki();
class Kc extends Hs {
  constructor(t, e, n) {
    super(t, e),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new Gc(new Float32Array(16 * n), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    for (let t = 0; t < n; t++) this.setMatrixAt(t, Yc);
  }
  computeBoundingBox() {
    const t = this.geometry,
      e = this.count;
    null === this.boundingBox && (this.boundingBox = new Ui()),
      null === t.boundingBox && t.computeBoundingBox(),
      this.boundingBox.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, Wc),
        qc.copy(t.boundingBox).applyMatrix4(Wc),
        this.boundingBox.union(qc);
  }
  computeBoundingSphere() {
    const t = this.geometry,
      e = this.count;
    null === this.boundingSphere && (this.boundingSphere = new Ki()),
      null === t.boundingSphere && t.computeBoundingSphere(),
      this.boundingSphere.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, Wc),
        Jc.copy(t.boundingSphere).applyMatrix4(Wc),
        this.boundingSphere.union(Jc);
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.instanceMatrix.copy(t.instanceMatrix),
      null !== t.morphTexture && (this.morphTexture = t.morphTexture.clone()),
      null !== t.instanceColor &&
        (this.instanceColor = t.instanceColor.clone()),
      (this.count = t.count),
      null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
      null !== t.boundingSphere &&
        (this.boundingSphere = t.boundingSphere.clone()),
      this
    );
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, 3 * t);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, 16 * t);
  }
  getMorphAt(t, e) {
    const n = e.morphTargetInfluences,
      i = this.morphTexture.source.data.data,
      r = t * (n.length + 1) + 1;
    for (let t = 0; t < n.length; t++) n[t] = i[r + t];
  }
  raycast(t, e) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      ((Zc.geometry = this.geometry),
      (Zc.material = this.material),
      void 0 !== Zc.material &&
        (null === this.boundingSphere && this.computeBoundingSphere(),
        Jc.copy(this.boundingSphere),
        Jc.applyMatrix4(n),
        !1 !== t.ray.intersectsSphere(Jc)))
    )
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Wc),
          Xc.multiplyMatrices(n, Wc),
          (Zc.matrixWorld = Xc),
          Zc.raycast(t, jc);
        for (let t = 0, n = jc.length; t < n; t++) {
          const n = jc[t];
          (n.instanceId = r), (n.object = this), e.push(n);
        }
        jc.length = 0;
      }
  }
  setColorAt(t, e) {
    null === this.instanceColor &&
      (this.instanceColor = new Gc(
        new Float32Array(3 * this.instanceMatrix.count),
        3
      )),
      e.toArray(this.instanceColor.array, 3 * t);
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, 16 * t);
  }
  setMorphAt(t, e) {
    const n = e.morphTargetInfluences,
      i = n.length + 1;
    null === this.morphTexture &&
      (this.morphTexture = new zc(
        new Float32Array(i * this.count),
        i,
        this.count,
        Xt,
        Lt
      ));
    const r = this.morphTexture.source.data.data;
    let s = 0;
    for (let t = 0; t < n.length; t++) s += n[t];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - s,
      o = i * t;
    (r[o] = a), r.set(n, o + 1);
  }
  updateMorphTargets() {}
  dispose() {
    return (
      this.dispatchEvent({ type: "dispose" }),
      null !== this.morphTexture &&
        (this.morphTexture.dispose(), (this.morphTexture = null)),
      this
    );
  }
}
function $c(t, e) {
  return t.z - e.z;
}
function Qc(t, e) {
  return e.z - t.z;
}
class th {
  constructor() {
    (this.index = 0), (this.pool = []), (this.list = []);
  }
  push(t, e, n) {
    const i = this.pool,
      r = this.list;
    this.index >= i.length &&
      i.push({ start: -1, count: -1, z: -1, index: -1 });
    const s = i[this.index];
    r.push(s),
      this.index++,
      (s.start = t.start),
      (s.count = t.count),
      (s.z = e),
      (s.index = n);
  }
  reset() {
    (this.list.length = 0), (this.index = 0);
  }
}
const eh = new ar(),
  nh = new ar(),
  ih = new ar(),
  rh = new Zr(1, 1, 1),
  sh = new ar(),
  ah = new ua(),
  oh = new Ui(),
  lh = new Ki(),
  ch = new Pi(),
  hh = new Pi(),
  uh = new Pi(),
  dh = new th(),
  ph = new Hs(),
  mh = [];
function fh(t, e, n = 0) {
  const i = e.itemSize;
  if (
    t.isInterleavedBufferAttribute ||
    t.array.constructor !== e.array.constructor
  ) {
    const r = t.count;
    for (let s = 0; s < r; s++)
      for (let r = 0; r < i; r++)
        e.setComponent(s + n, r, t.getComponent(s, r));
  } else e.array.set(t.array, n * i);
  e.needsUpdate = !0;
}
class gh extends Hs {
  get maxInstanceCount() {
    return this._maxInstanceCount;
  }
  constructor(t, e, n = 2 * e, i) {
    super(new ws(), i),
      (this.isBatchedMesh = !0),
      (this.perObjectFrustumCulled = !0),
      (this.sortObjects = !0),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.customSort = null),
      (this._drawInfo = []),
      (this._drawRanges = []),
      (this._reservedRanges = []),
      (this._bounds = []),
      (this._maxInstanceCount = t),
      (this._maxVertexCount = e),
      (this._maxIndexCount = n),
      (this._geometryInitialized = !1),
      (this._geometryCount = 0),
      (this._multiDrawCounts = new Int32Array(t)),
      (this._multiDrawStarts = new Int32Array(t)),
      (this._multiDrawCount = 0),
      (this._multiDrawInstances = null),
      (this._visibilityChanged = !0),
      (this._matricesTexture = null),
      (this._indirectTexture = null),
      (this._colorsTexture = null),
      this._initMatricesTexture(),
      this._initIndirectTexture();
  }
  _initMatricesTexture() {
    let t = Math.sqrt(4 * this._maxInstanceCount);
    (t = 4 * Math.ceil(t / 4)), (t = Math.max(t, 4));
    const e = new Float32Array(t * t * 4),
      n = new zc(e, t, t, kt, Lt);
    this._matricesTexture = n;
  }
  _initIndirectTexture() {
    let t = Math.sqrt(this._maxInstanceCount);
    t = Math.ceil(t);
    const e = new Uint32Array(t * t),
      n = new zc(e, t, t, jt, It);
    this._indirectTexture = n;
  }
  _initColorsTexture() {
    let t = Math.sqrt(this._maxIndexCount);
    t = Math.ceil(t);
    const e = new Float32Array(t * t * 4).fill(1),
      n = new zc(e, t, t, kt, Lt);
    (n.colorSpace = di.workingColorSpace), (this._colorsTexture = n);
  }
  _initializeGeometry(t) {
    const e = this.geometry,
      n = this._maxVertexCount,
      i = this._maxIndexCount;
    if (!1 === this._geometryInitialized) {
      for (const i in t.attributes) {
        const r = t.getAttribute(i),
          { array: s, itemSize: a, normalized: o } = r,
          l = new s.constructor(n * a),
          c = new os(l, a, o);
        e.setAttribute(i, c);
      }
      if (null !== t.getIndex()) {
        const t = n > 65535 ? new Uint32Array(i) : new Uint16Array(i);
        e.setIndex(new os(t, 1));
      }
      this._geometryInitialized = !0;
    }
  }
  _validateGeometry(t) {
    const e = this.geometry;
    if (Boolean(t.getIndex()) !== Boolean(e.getIndex()))
      throw new Error(
        'BatchedMesh: All geometries must consistently have "index".'
      );
    for (const n in e.attributes) {
      if (!t.hasAttribute(n))
        throw new Error(
          `BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`
        );
      const i = t.getAttribute(n),
        r = e.getAttribute(n);
      if (i.itemSize !== r.itemSize || i.normalized !== r.normalized)
        throw new Error(
          "BatchedMesh: All attributes must have a consistent itemSize and normalized value."
        );
    }
  }
  setCustomSort(t) {
    return (this.customSort = t), this;
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new Ui());
    const t = this._geometryCount,
      e = this.boundingBox,
      n = this._drawInfo;
    e.makeEmpty();
    for (let i = 0; i < t; i++) {
      if (!1 === n[i].active) continue;
      const t = n[i].geometryIndex;
      this.getMatrixAt(i, eh),
        this.getBoundingBoxAt(t, oh).applyMatrix4(eh),
        e.union(oh);
    }
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new Ki());
    const t = this.boundingSphere,
      e = this._drawInfo;
    t.makeEmpty();
    for (let n = 0, i = e.length; n < i; n++) {
      if (!1 === e[n].active) continue;
      const i = e[n].geometryIndex;
      this.getMatrixAt(n, eh),
        this.getBoundingSphereAt(i, lh).applyMatrix4(eh),
        t.union(lh);
    }
  }
  addInstance(t) {
    if (this._drawInfo.length >= this._maxInstanceCount)
      throw new Error("BatchedMesh: Maximum item count reached.");
    this._drawInfo.push({ visible: !0, active: !0, geometryIndex: t });
    const e = this._drawInfo.length - 1,
      n = this._matricesTexture,
      i = n.image.data;
    ih.toArray(i, 16 * e), (n.needsUpdate = !0);
    const r = this._colorsTexture;
    return r && (rh.toArray(r.image.data, 4 * e), (r.needsUpdate = !0)), e;
  }
  addGeometry(t, e = -1, n = -1) {
    if (
      (this._initializeGeometry(t),
      this._validateGeometry(t),
      this._drawInfo.length >= this._maxInstanceCount)
    )
      throw new Error("BatchedMesh: Maximum item count reached.");
    const i = {
      vertexStart: -1,
      vertexCount: -1,
      indexStart: -1,
      indexCount: -1,
    };
    let r = null;
    const s = this._reservedRanges,
      a = this._drawRanges,
      o = this._bounds;
    0 !== this._geometryCount && (r = s[s.length - 1]),
      (i.vertexCount = -1 === e ? t.getAttribute("position").count : e),
      (i.vertexStart = null === r ? 0 : r.vertexStart + r.vertexCount);
    const l = t.getIndex(),
      c = null !== l;
    if (
      (c &&
        ((i.indexCount = -1 === n ? l.count : n),
        (i.indexStart = null === r ? 0 : r.indexStart + r.indexCount)),
      (-1 !== i.indexStart &&
        i.indexStart + i.indexCount > this._maxIndexCount) ||
        i.vertexStart + i.vertexCount > this._maxVertexCount)
    )
      throw new Error(
        "BatchedMesh: Reserved space request exceeds the maximum buffer size."
      );
    const h = this._geometryCount;
    return (
      this._geometryCount++,
      s.push(i),
      a.push({ start: c ? i.indexStart : i.vertexStart, count: -1 }),
      o.push({
        boxInitialized: !1,
        box: new Ui(),
        sphereInitialized: !1,
        sphere: new Ki(),
      }),
      this.setGeometryAt(h, t),
      h
    );
  }
  setGeometryAt(t, e) {
    if (t >= this._geometryCount)
      throw new Error("BatchedMesh: Maximum geometry count reached.");
    this._validateGeometry(e);
    const n = this.geometry,
      i = null !== n.getIndex(),
      r = n.getIndex(),
      s = e.getIndex(),
      a = this._reservedRanges[t];
    if (
      (i && s.count > a.indexCount) ||
      e.attributes.position.count > a.vertexCount
    )
      throw new Error(
        "BatchedMesh: Reserved space not large enough for provided geometry."
      );
    const o = a.vertexStart,
      l = a.vertexCount;
    for (const t in n.attributes) {
      const i = e.getAttribute(t),
        r = n.getAttribute(t);
      fh(i, r, o);
      const s = i.itemSize;
      for (let t = i.count, e = l; t < e; t++) {
        const e = o + t;
        for (let t = 0; t < s; t++) r.setComponent(e, t, 0);
      }
      (r.needsUpdate = !0), r.addUpdateRange(o * s, l * s);
    }
    if (i) {
      const t = a.indexStart;
      for (let e = 0; e < s.count; e++) r.setX(t + e, o + s.getX(e));
      for (let e = s.count, n = a.indexCount; e < n; e++) r.setX(t + e, o);
      (r.needsUpdate = !0), r.addUpdateRange(t, a.indexCount);
    }
    const c = this._bounds[t];
    null !== e.boundingBox
      ? (c.box.copy(e.boundingBox), (c.boxInitialized = !0))
      : (c.boxInitialized = !1),
      null !== e.boundingSphere
        ? (c.sphere.copy(e.boundingSphere), (c.sphereInitialized = !0))
        : (c.sphereInitialized = !1);
    const h = this._drawRanges[t],
      u = e.getAttribute("position");
    return (h.count = i ? s.count : u.count), (this._visibilityChanged = !0), t;
  }
  getBoundingBoxAt(t, e) {
    if (t >= this._geometryCount) return null;
    const n = this._bounds[t],
      i = n.box,
      r = this.geometry;
    if (!1 === n.boxInitialized) {
      i.makeEmpty();
      const e = r.index,
        s = r.attributes.position,
        a = this._drawRanges[t];
      for (let t = a.start, n = a.start + a.count; t < n; t++) {
        let n = t;
        e && (n = e.getX(n)), i.expandByPoint(ch.fromBufferAttribute(s, n));
      }
      n.boxInitialized = !0;
    }
    return e.copy(i), e;
  }
  getBoundingSphereAt(t, e) {
    if (t >= this._geometryCount) return null;
    const n = this._bounds[t],
      i = n.sphere,
      r = this.geometry;
    if (!1 === n.sphereInitialized) {
      i.makeEmpty(), this.getBoundingBoxAt(t, oh), oh.getCenter(i.center);
      const e = r.index,
        s = r.attributes.position,
        a = this._drawRanges[t];
      let o = 0;
      for (let t = a.start, n = a.start + a.count; t < n; t++) {
        let n = t;
        e && (n = e.getX(n)),
          ch.fromBufferAttribute(s, n),
          (o = Math.max(o, i.center.distanceToSquared(ch)));
      }
      (i.radius = Math.sqrt(o)), (n.sphereInitialized = !0);
    }
    return e.copy(i), e;
  }
  setMatrixAt(t, e) {
    const n = this._drawInfo,
      i = this._matricesTexture,
      r = this._matricesTexture.image.data;
    return (
      t >= n.length ||
        !1 === n[t].active ||
        (e.toArray(r, 16 * t), (i.needsUpdate = !0)),
      this
    );
  }
  getMatrixAt(t, e) {
    const n = this._drawInfo,
      i = this._matricesTexture.image.data;
    return t >= n.length || !1 === n[t].active ? null : e.fromArray(i, 16 * t);
  }
  setColorAt(t, e) {
    null === this._colorsTexture && this._initColorsTexture();
    const n = this._colorsTexture,
      i = this._colorsTexture.image.data,
      r = this._drawInfo;
    return (
      t >= r.length ||
        !1 === r[t].active ||
        (e.toArray(i, 4 * t), (n.needsUpdate = !0)),
      this
    );
  }
  getColorAt(t, e) {
    const n = this._colorsTexture.image.data,
      i = this._drawInfo;
    return t >= i.length || !1 === i[t].active ? null : e.fromArray(n, 4 * t);
  }
  setVisibleAt(t, e) {
    const n = this._drawInfo;
    return (
      t >= n.length ||
        !1 === n[t].active ||
        n[t].visible === e ||
        ((n[t].visible = e), (this._visibilityChanged = !0)),
      this
    );
  }
  getVisibleAt(t) {
    const e = this._drawInfo;
    return !(t >= e.length || !1 === e[t].active) && e[t].visible;
  }
  raycast(t, e) {
    const n = this._drawInfo,
      i = this._drawRanges,
      r = this.matrixWorld,
      s = this.geometry;
    (ph.material = this.material),
      (ph.geometry.index = s.index),
      (ph.geometry.attributes = s.attributes),
      null === ph.geometry.boundingBox && (ph.geometry.boundingBox = new Ui()),
      null === ph.geometry.boundingSphere &&
        (ph.geometry.boundingSphere = new Ki());
    for (let s = 0, a = n.length; s < a; s++) {
      if (!n[s].visible || !n[s].active) continue;
      const a = n[s].geometryIndex,
        o = i[a];
      ph.geometry.setDrawRange(o.start, o.count),
        this.getMatrixAt(s, ph.matrixWorld).premultiply(r),
        this.getBoundingBoxAt(a, ph.geometry.boundingBox),
        this.getBoundingSphereAt(a, ph.geometry.boundingSphere),
        ph.raycast(t, mh);
      for (let t = 0, n = mh.length; t < n; t++) {
        const n = mh[t];
        (n.object = this), (n.batchId = s), e.push(n);
      }
      mh.length = 0;
    }
    (ph.material = null),
      (ph.geometry.index = null),
      (ph.geometry.attributes = {}),
      ph.geometry.setDrawRange(0, 1 / 0);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.geometry = t.geometry.clone()),
      (this.perObjectFrustumCulled = t.perObjectFrustumCulled),
      (this.sortObjects = t.sortObjects),
      (this.boundingBox =
        null !== t.boundingBox ? t.boundingBox.clone() : null),
      (this.boundingSphere =
        null !== t.boundingSphere ? t.boundingSphere.clone() : null),
      (this._drawRanges = t._drawRanges.map((t) => ({ ...t }))),
      (this._reservedRanges = t._reservedRanges.map((t) => ({ ...t }))),
      (this._drawInfo = t._drawInfo.map((t) => ({ ...t }))),
      (this._bounds = t._bounds.map((t) => ({
        boxInitialized: t.boxInitialized,
        box: t.box.clone(),
        sphereInitialized: t.sphereInitialized,
        sphere: t.sphere.clone(),
      }))),
      (this._maxInstanceCount = t._maxInstanceCount),
      (this._maxVertexCount = t._maxVertexCount),
      (this._maxIndexCount = t._maxIndexCount),
      (this._geometryInitialized = t._geometryInitialized),
      (this._geometryCount = t._geometryCount),
      (this._multiDrawCounts = t._multiDrawCounts.slice()),
      (this._multiDrawStarts = t._multiDrawStarts.slice()),
      (this._matricesTexture = t._matricesTexture.clone()),
      (this._matricesTexture.image.data = this._matricesTexture.image.slice()),
      null !== this._colorsTexture &&
        ((this._colorsTexture = t._colorsTexture.clone()),
        (this._colorsTexture.image.data = this._colorsTexture.image.slice())),
      this
    );
  }
  dispose() {
    return (
      this.geometry.dispose(),
      this._matricesTexture.dispose(),
      (this._matricesTexture = null),
      this._indirectTexture.dispose(),
      (this._indirectTexture = null),
      null !== this._colorsTexture &&
        (this._colorsTexture.dispose(), (this._colorsTexture = null)),
      this
    );
  }
  onBeforeRender(t, e, n, i, r) {
    if (
      !this._visibilityChanged &&
      !this.perObjectFrustumCulled &&
      !this.sortObjects
    )
      return;
    const s = i.getIndex(),
      a = null === s ? 1 : s.array.BYTES_PER_ELEMENT,
      o = this._drawInfo,
      l = this._multiDrawStarts,
      c = this._multiDrawCounts,
      h = this._drawRanges,
      u = this.perObjectFrustumCulled,
      d = this._indirectTexture,
      p = d.image.data;
    u &&
      (sh
        .multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse)
        .multiply(this.matrixWorld),
      ah.setFromProjectionMatrix(sh, t.coordinateSystem));
    let m = 0;
    if (this.sortObjects) {
      nh.copy(this.matrixWorld).invert(),
        ch.setFromMatrixPosition(n.matrixWorld).applyMatrix4(nh),
        hh
          .set(0, 0, -1)
          .transformDirection(n.matrixWorld)
          .transformDirection(nh);
      for (let t = 0, e = o.length; t < e; t++)
        if (o[t].visible && o[t].active) {
          const e = o[t].geometryIndex;
          this.getMatrixAt(t, eh),
            this.getBoundingSphereAt(e, lh).applyMatrix4(eh);
          let n = !1;
          if ((u && (n = !ah.intersectsSphere(lh)), !n)) {
            const n = uh.subVectors(lh.center, ch).dot(hh);
            dh.push(h[e], n, t);
          }
        }
      const t = dh.list,
        e = this.customSort;
      null === e ? t.sort(r.transparent ? Qc : $c) : e.call(this, t, n);
      for (let e = 0, n = t.length; e < n; e++) {
        const n = t[e];
        (l[m] = n.start * a), (c[m] = n.count), (p[m] = n.index), m++;
      }
      dh.reset();
    } else
      for (let t = 0, e = o.length; t < e; t++)
        if (o[t].visible && o[t].active) {
          const e = o[t].geometryIndex;
          let n = !1;
          if (
            (u &&
              (this.getMatrixAt(t, eh),
              this.getBoundingSphereAt(e, lh).applyMatrix4(eh),
              (n = !ah.intersectsSphere(lh))),
            !n)
          ) {
            const n = h[e];
            (l[m] = n.start * a), (c[m] = n.count), (p[m] = t), m++;
          }
        }
    (d.needsUpdate = !0),
      (this._multiDrawCount = m),
      (this._visibilityChanged = !1);
  }
  onBeforeShadow(t, e, n, i, r, s) {
    this.onBeforeRender(t, null, i, r, s);
  }
}
class vh extends $r {
  constructor(t) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Zr(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.linewidth = t.linewidth),
      (this.linecap = t.linecap),
      (this.linejoin = t.linejoin),
      (this.fog = t.fog),
      this
    );
  }
}
const _h = new Pi(),
  xh = new Pi(),
  yh = new ar(),
  Mh = new sr(),
  Sh = new Ki(),
  bh = new Pi(),
  wh = new Pi();
class Th extends Ur {
  constructor(t = new ws(), e = new vh()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  computeLineDistances() {
    const t = this.geometry;
    if (null === t.index) {
      const e = t.attributes.position,
        n = [0];
      for (let t = 1, i = e.count; t < i; t++)
        _h.fromBufferAttribute(e, t - 1),
          xh.fromBufferAttribute(e, t),
          (n[t] = n[t - 1]),
          (n[t] += _h.distanceTo(xh));
      t.setAttribute("lineDistance", new gs(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = t.params.Line.threshold,
      s = n.drawRange;
    if (
      (null === n.boundingSphere && n.computeBoundingSphere(),
      Sh.copy(n.boundingSphere),
      Sh.applyMatrix4(i),
      (Sh.radius += r),
      !1 === t.ray.intersectsSphere(Sh))
    )
      return;
    yh.copy(i).invert(), Mh.copy(t.ray).applyMatrix4(yh);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      o = a * a,
      l = this.isLineSegments ? 2 : 1,
      c = n.index,
      h = n.attributes.position;
    if (null !== c) {
      const n = Math.max(0, s.start),
        i = Math.min(c.count, s.start + s.count);
      for (let r = n, s = i - 1; r < s; r += l) {
        const n = c.getX(r),
          i = c.getX(r + 1),
          s = Eh(this, t, Mh, o, n, i);
        s && e.push(s);
      }
      if (this.isLineLoop) {
        const r = c.getX(i - 1),
          s = c.getX(n),
          a = Eh(this, t, Mh, o, r, s);
        a && e.push(a);
      }
    } else {
      const n = Math.max(0, s.start),
        i = Math.min(h.count, s.start + s.count);
      for (let r = n, s = i - 1; r < s; r += l) {
        const n = Eh(this, t, Mh, o, r, r + 1);
        n && e.push(n);
      }
      if (this.isLineLoop) {
        const r = Eh(this, t, Mh, o, i - 1, n);
        r && e.push(r);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      e = Object.keys(t);
    if (e.length > 0) {
      const n = t[e[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let t = 0, e = n.length; t < e; t++) {
          const e = n[t].name || String(t);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[e] = t);
        }
      }
    }
  }
}
function Eh(t, e, n, i, r, s) {
  const a = t.geometry.attributes.position;
  _h.fromBufferAttribute(a, r), xh.fromBufferAttribute(a, s);
  if (n.distanceSqToSegment(_h, xh, bh, wh) > i) return;
  bh.applyMatrix4(t.matrixWorld);
  const o = e.ray.origin.distanceTo(bh);
  return o < e.near || o > e.far
    ? void 0
    : {
        distance: o,
        point: wh.clone().applyMatrix4(t.matrixWorld),
        index: r,
        face: null,
        faceIndex: null,
        object: t,
      };
}
const Ah = new Pi(),
  Rh = new Pi();
class Ch extends Th {
  constructor(t, e) {
    super(t, e), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const t = this.geometry;
    if (null === t.index) {
      const e = t.attributes.position,
        n = [];
      for (let t = 0, i = e.count; t < i; t += 2)
        Ah.fromBufferAttribute(e, t),
          Rh.fromBufferAttribute(e, t + 1),
          (n[t] = 0 === t ? 0 : n[t - 1]),
          (n[t + 1] = n[t] + Ah.distanceTo(Rh));
      t.setAttribute("lineDistance", new gs(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class Ph extends Th {
  constructor(t, e) {
    super(t, e), (this.isLineLoop = !0), (this.type = "LineLoop");
  }
}
class Ih extends $r {
  constructor(t) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new Zr(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.size = t.size),
      (this.sizeAttenuation = t.sizeAttenuation),
      (this.fog = t.fog),
      this
    );
  }
}
const Lh = new ar(),
  Uh = new sr(),
  Nh = new Ki(),
  Dh = new Pi();
class Oh extends Ur {
  constructor(t = new ws(), e = new Ih()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = t.params.Points.threshold,
      s = n.drawRange;
    if (
      (null === n.boundingSphere && n.computeBoundingSphere(),
      Nh.copy(n.boundingSphere),
      Nh.applyMatrix4(i),
      (Nh.radius += r),
      !1 === t.ray.intersectsSphere(Nh))
    )
      return;
    Lh.copy(i).invert(), Uh.copy(t.ray).applyMatrix4(Lh);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      o = a * a,
      l = n.index,
      c = n.attributes.position;
    if (null !== l) {
      for (
        let n = Math.max(0, s.start), r = Math.min(l.count, s.start + s.count);
        n < r;
        n++
      ) {
        const r = l.getX(n);
        Dh.fromBufferAttribute(c, r), Fh(Dh, r, o, i, t, e, this);
      }
    } else {
      for (
        let n = Math.max(0, s.start), r = Math.min(c.count, s.start + s.count);
        n < r;
        n++
      )
        Dh.fromBufferAttribute(c, n), Fh(Dh, n, o, i, t, e, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      e = Object.keys(t);
    if (e.length > 0) {
      const n = t[e[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let t = 0, e = n.length; t < e; t++) {
          const e = n[t].name || String(t);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[e] = t);
        }
      }
    }
  }
}
function Fh(t, e, n, i, r, s, a) {
  const o = Uh.distanceSqToPoint(t);
  if (o < n) {
    const n = new Pi();
    Uh.closestPointToPoint(t, n), n.applyMatrix4(i);
    const l = r.ray.origin.distanceTo(n);
    if (l < r.near || l > r.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: n,
      index: e,
      face: null,
      object: a,
    });
  }
}
class Bh extends Mi {
  constructor(t, e, n, i, r, s, a, o, l) {
    super(t, e, n, i, r, s, a, o, l),
      (this.isVideoTexture = !0),
      (this.minFilter = void 0 !== s ? s : Mt),
      (this.magFilter = void 0 !== r ? r : Mt),
      (this.generateMipmaps = !1);
    const c = this;
    "requestVideoFrameCallback" in t &&
      t.requestVideoFrameCallback(function e() {
        (c.needsUpdate = !0), t.requestVideoFrameCallback(e);
      });
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const t = this.image;
    !1 === "requestVideoFrameCallback" in t &&
      t.readyState >= t.HAVE_CURRENT_DATA &&
      (this.needsUpdate = !0);
  }
}
class zh extends Mi {
  constructor(t, e) {
    super({ width: t, height: e }),
      (this.isFramebufferTexture = !0),
      (this.magFilter = gt),
      (this.minFilter = gt),
      (this.generateMipmaps = !1),
      (this.needsUpdate = !0);
  }
}
class kh extends Mi {
  constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
    super(null, s, a, o, l, c, i, r, h, u),
      (this.isCompressedTexture = !0),
      (this.image = { width: e, height: n }),
      (this.mipmaps = t),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Vh extends kh {
  constructor(t, e, n, i, r, s) {
    super(t, e, n, r, s),
      (this.isCompressedArrayTexture = !0),
      (this.image.depth = i),
      (this.wrapR = mt),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Hh extends kh {
  constructor(t, e, n) {
    super(void 0, t[0].width, t[0].height, e, n, lt),
      (this.isCompressedCubeTexture = !0),
      (this.isCubeTexture = !0),
      (this.image = t);
  }
}
class Gh extends Mi {
  constructor(t, e, n, i, r, s, a, o, l) {
    super(t, e, n, i, r, s, a, o, l),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0);
  }
}
class Wh {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return e;
  }
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
    return e;
  }
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  getLengths(t = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === t + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n,
      i = this.getPoint(0),
      r = 0;
    e.push(0);
    for (let s = 1; s <= t; s++)
      (n = this.getPoint(s / t)), (r += n.distanceTo(i)), e.push(r), (i = n);
    return (this.cacheArcLengths = e), e;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let s;
    s = e || t * n[r - 1];
    let a,
      o = 0,
      l = r - 1;
    for (; o <= l; )
      if (((i = Math.floor(o + (l - o) / 2)), (a = n[i] - s), a < 0)) o = i + 1;
      else {
        if (!(a > 0)) {
          l = i;
          break;
        }
        l = i - 1;
      }
    if (((i = l), n[i] === s)) return i / (r - 1);
    const c = n[i];
    return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
  }
  getTangent(t, e) {
    const n = 1e-4;
    let i = t - n,
      r = t + n;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const s = this.getPoint(i),
      a = this.getPoint(r),
      o = e || (s.isVector2 ? new $n() : new Pi());
    return o.copy(a).sub(s).normalize(), o;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new Pi(),
      i = [],
      r = [],
      s = [],
      a = new Pi(),
      o = new ar();
    for (let e = 0; e <= t; e++) {
      const n = e / t;
      i[e] = this.getTangentAt(n, new Pi());
    }
    (r[0] = new Pi()), (s[0] = new Pi());
    let l = Number.MAX_VALUE;
    const c = Math.abs(i[0].x),
      h = Math.abs(i[0].y),
      u = Math.abs(i[0].z);
    c <= l && ((l = c), n.set(1, 0, 0)),
      h <= l && ((l = h), n.set(0, 1, 0)),
      u <= l && n.set(0, 0, 1),
      a.crossVectors(i[0], n).normalize(),
      r[0].crossVectors(i[0], a),
      s[0].crossVectors(i[0], r[0]);
    for (let e = 1; e <= t; e++) {
      if (
        ((r[e] = r[e - 1].clone()),
        (s[e] = s[e - 1].clone()),
        a.crossVectors(i[e - 1], i[e]),
        a.length() > Number.EPSILON)
      ) {
        a.normalize();
        const t = Math.acos(jn(i[e - 1].dot(i[e]), -1, 1));
        r[e].applyMatrix4(o.makeRotationAxis(a, t));
      }
      s[e].crossVectors(i[e], r[e]);
    }
    if (!0 === e) {
      let e = Math.acos(jn(r[0].dot(r[t]), -1, 1));
      (e /= t), i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
      for (let n = 1; n <= t; n++)
        r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)),
          s[n].crossVectors(i[n], r[n]);
    }
    return { tangents: i, normals: r, binormals: s };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (this.arcLengthDivisions = t.arcLengthDivisions), this;
  }
  toJSON() {
    const t = {
      metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (t.arcLengthDivisions = this.arcLengthDivisions), (t.type = this.type), t
    );
  }
  fromJSON(t) {
    return (this.arcLengthDivisions = t.arcLengthDivisions), this;
  }
}
class Xh extends Wh {
  constructor(
    t = 0,
    e = 0,
    n = 1,
    i = 1,
    r = 0,
    s = 2 * Math.PI,
    a = !1,
    o = 0
  ) {
    super(),
      (this.isEllipseCurve = !0),
      (this.type = "EllipseCurve"),
      (this.aX = t),
      (this.aY = e),
      (this.xRadius = n),
      (this.yRadius = i),
      (this.aStartAngle = r),
      (this.aEndAngle = s),
      (this.aClockwise = a),
      (this.aRotation = o);
  }
  getPoint(t, e = new $n()) {
    const n = e,
      i = 2 * Math.PI;
    let r = this.aEndAngle - this.aStartAngle;
    const s = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += i;
    for (; r > i; ) r -= i;
    r < Number.EPSILON && (r = s ? 0 : i),
      !0 !== this.aClockwise || s || (r === i ? (r = -i) : (r -= i));
    const a = this.aStartAngle + t * r;
    let o = this.aX + this.xRadius * Math.cos(a),
      l = this.aY + this.yRadius * Math.sin(a);
    if (0 !== this.aRotation) {
      const t = Math.cos(this.aRotation),
        e = Math.sin(this.aRotation),
        n = o - this.aX,
        i = l - this.aY;
      (o = n * t - i * e + this.aX), (l = n * e + i * t + this.aY);
    }
    return n.set(o, l);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.aX = t.aX),
      (this.aY = t.aY),
      (this.xRadius = t.xRadius),
      (this.yRadius = t.yRadius),
      (this.aStartAngle = t.aStartAngle),
      (this.aEndAngle = t.aEndAngle),
      (this.aClockwise = t.aClockwise),
      (this.aRotation = t.aRotation),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.aX = this.aX),
      (t.aY = this.aY),
      (t.xRadius = this.xRadius),
      (t.yRadius = this.yRadius),
      (t.aStartAngle = this.aStartAngle),
      (t.aEndAngle = this.aEndAngle),
      (t.aClockwise = this.aClockwise),
      (t.aRotation = this.aRotation),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      (this.aX = t.aX),
      (this.aY = t.aY),
      (this.xRadius = t.xRadius),
      (this.yRadius = t.yRadius),
      (this.aStartAngle = t.aStartAngle),
      (this.aEndAngle = t.aEndAngle),
      (this.aClockwise = t.aClockwise),
      (this.aRotation = t.aRotation),
      this
    );
  }
}
class jh extends Xh {
  constructor(t, e, n, i, r, s) {
    super(t, e, n, n, i, r, s),
      (this.isArcCurve = !0),
      (this.type = "ArcCurve");
  }
}
function qh() {
  let t = 0,
    e = 0,
    n = 0,
    i = 0;
  function r(r, s, a, o) {
    (t = r),
      (e = a),
      (n = -3 * r + 3 * s - 2 * a - o),
      (i = 2 * r - 2 * s + a + o);
  }
  return {
    initCatmullRom: function (t, e, n, i, s) {
      r(e, n, s * (n - t), s * (i - e));
    },
    initNonuniformCatmullRom: function (t, e, n, i, s, a, o) {
      let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a,
        c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
      (l *= a), (c *= a), r(e, n, l, c);
    },
    calc: function (r) {
      const s = r * r;
      return t + e * r + n * s + i * (s * r);
    },
  };
}
const Yh = new Pi(),
  Zh = new qh(),
  Jh = new qh(),
  Kh = new qh();
class $h extends Wh {
  constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
    super(),
      (this.isCatmullRomCurve3 = !0),
      (this.type = "CatmullRomCurve3"),
      (this.points = t),
      (this.closed = e),
      (this.curveType = n),
      (this.tension = i);
  }
  getPoint(t, e = new Pi()) {
    const n = e,
      i = this.points,
      r = i.length,
      s = (r - (this.closed ? 0 : 1)) * t;
    let a,
      o,
      l = Math.floor(s),
      c = s - l;
    this.closed
      ? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r)
      : 0 === c && l === r - 1 && ((l = r - 2), (c = 1)),
      this.closed || l > 0
        ? (a = i[(l - 1) % r])
        : (Yh.subVectors(i[0], i[1]).add(i[0]), (a = Yh));
    const h = i[l % r],
      u = i[(l + 1) % r];
    if (
      (this.closed || l + 2 < r
        ? (o = i[(l + 2) % r])
        : (Yh.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (o = Yh)),
      "centripetal" === this.curveType || "chordal" === this.curveType)
    ) {
      const t = "chordal" === this.curveType ? 0.5 : 0.25;
      let e = Math.pow(a.distanceToSquared(h), t),
        n = Math.pow(h.distanceToSquared(u), t),
        i = Math.pow(u.distanceToSquared(o), t);
      n < 1e-4 && (n = 1),
        e < 1e-4 && (e = n),
        i < 1e-4 && (i = n),
        Zh.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i),
        Jh.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i),
        Kh.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i);
    } else
      "catmullrom" === this.curveType &&
        (Zh.initCatmullRom(a.x, h.x, u.x, o.x, this.tension),
        Jh.initCatmullRom(a.y, h.y, u.y, o.y, this.tension),
        Kh.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
    return n.set(Zh.calc(c), Jh.calc(c), Kh.calc(c)), n;
  }
  copy(t) {
    super.copy(t), (this.points = []);
    for (let e = 0, n = t.points.length; e < n; e++) {
      const n = t.points[e];
      this.points.push(n.clone());
    }
    return (
      (this.closed = t.closed),
      (this.curveType = t.curveType),
      (this.tension = t.tension),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const n = this.points[e];
      t.points.push(n.toArray());
    }
    return (
      (t.closed = this.closed),
      (t.curveType = this.curveType),
      (t.tension = this.tension),
      t
    );
  }
  fromJSON(t) {
    super.fromJSON(t), (this.points = []);
    for (let e = 0, n = t.points.length; e < n; e++) {
      const n = t.points[e];
      this.points.push(new Pi().fromArray(n));
    }
    return (
      (this.closed = t.closed),
      (this.curveType = t.curveType),
      (this.tension = t.tension),
      this
    );
  }
}
function Qh(t, e, n, i, r) {
  const s = 0.5 * (i - e),
    a = 0.5 * (r - n),
    o = t * t;
  return (
    (2 * n - 2 * i + s + a) * (t * o) +
    (-3 * n + 3 * i - 2 * s - a) * o +
    s * t +
    n
  );
}
function tu(t, e, n, i) {
  return (
    (function (t, e) {
      const n = 1 - t;
      return n * n * e;
    })(t, e) +
    (function (t, e) {
      return 2 * (1 - t) * t * e;
    })(t, n) +
    (function (t, e) {
      return t * t * e;
    })(t, i)
  );
}
function eu(t, e, n, i, r) {
  return (
    (function (t, e) {
      const n = 1 - t;
      return n * n * n * e;
    })(t, e) +
    (function (t, e) {
      const n = 1 - t;
      return 3 * n * n * t * e;
    })(t, n) +
    (function (t, e) {
      return 3 * (1 - t) * t * t * e;
    })(t, i) +
    (function (t, e) {
      return t * t * t * e;
    })(t, r)
  );
}
class nu extends Wh {
  constructor(t = new $n(), e = new $n(), n = new $n(), i = new $n()) {
    super(),
      (this.isCubicBezierCurve = !0),
      (this.type = "CubicBezierCurve"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(t, e = new $n()) {
    const n = e,
      i = this.v0,
      r = this.v1,
      s = this.v2,
      a = this.v3;
    return n.set(eu(t, i.x, r.x, s.x, a.x), eu(t, i.y, r.y, s.y, a.y)), n;
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    );
  }
}
class iu extends Wh {
  constructor(t = new Pi(), e = new Pi(), n = new Pi(), i = new Pi()) {
    super(),
      (this.isCubicBezierCurve3 = !0),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(t, e = new Pi()) {
    const n = e,
      i = this.v0,
      r = this.v1,
      s = this.v2,
      a = this.v3;
    return (
      n.set(
        eu(t, i.x, r.x, s.x, a.x),
        eu(t, i.y, r.y, s.y, a.y),
        eu(t, i.z, r.z, s.z, a.z)
      ),
      n
    );
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    );
  }
}
class ru extends Wh {
  constructor(t = new $n(), e = new $n()) {
    super(),
      (this.isLineCurve = !0),
      (this.type = "LineCurve"),
      (this.v1 = t),
      (this.v2 = e);
  }
  getPoint(t, e = new $n()) {
    const n = e;
    return (
      1 === t
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
      n
    );
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new $n()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
  }
  fromJSON(t) {
    return (
      super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    );
  }
}
class su extends Wh {
  constructor(t = new Pi(), e = new Pi()) {
    super(),
      (this.isLineCurve3 = !0),
      (this.type = "LineCurve3"),
      (this.v1 = t),
      (this.v2 = e);
  }
  getPoint(t, e = new Pi()) {
    const n = e;
    return (
      1 === t
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
      n
    );
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new Pi()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
  }
  fromJSON(t) {
    return (
      super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    );
  }
}
class au extends Wh {
  constructor(t = new $n(), e = new $n(), n = new $n()) {
    super(),
      (this.isQuadraticBezierCurve = !0),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n);
  }
  getPoint(t, e = new $n()) {
    const n = e,
      i = this.v0,
      r = this.v1,
      s = this.v2;
    return n.set(tu(t, i.x, r.x, s.x), tu(t, i.y, r.y, s.y)), n;
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
}
class ou extends Wh {
  constructor(t = new Pi(), e = new Pi(), n = new Pi()) {
    super(),
      (this.isQuadraticBezierCurve3 = !0),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n);
  }
  getPoint(t, e = new Pi()) {
    const n = e,
      i = this.v0,
      r = this.v1,
      s = this.v2;
    return (
      n.set(tu(t, i.x, r.x, s.x), tu(t, i.y, r.y, s.y), tu(t, i.z, r.z, s.z)), n
    );
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
}
class lu extends Wh {
  constructor(t = []) {
    super(),
      (this.isSplineCurve = !0),
      (this.type = "SplineCurve"),
      (this.points = t);
  }
  getPoint(t, e = new $n()) {
    const n = e,
      i = this.points,
      r = (i.length - 1) * t,
      s = Math.floor(r),
      a = r - s,
      o = i[0 === s ? s : s - 1],
      l = i[s],
      c = i[s > i.length - 2 ? i.length - 1 : s + 1],
      h = i[s > i.length - 3 ? i.length - 1 : s + 2];
    return n.set(Qh(a, o.x, l.x, c.x, h.x), Qh(a, o.y, l.y, c.y, h.y)), n;
  }
  copy(t) {
    super.copy(t), (this.points = []);
    for (let e = 0, n = t.points.length; e < n; e++) {
      const n = t.points[e];
      this.points.push(n.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const n = this.points[e];
      t.points.push(n.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), (this.points = []);
    for (let e = 0, n = t.points.length; e < n; e++) {
      const n = t.points[e];
      this.points.push(new $n().fromArray(n));
    }
    return this;
  }
}
var cu = Object.freeze({
  __proto__: null,
  ArcCurve: jh,
  CatmullRomCurve3: $h,
  CubicBezierCurve: nu,
  CubicBezierCurve3: iu,
  EllipseCurve: Xh,
  LineCurve: ru,
  LineCurve3: su,
  QuadraticBezierCurve: au,
  QuadraticBezierCurve3: ou,
  SplineCurve: lu,
});
class hu extends Wh {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0),
      e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const n = !0 === t.isVector2 ? "LineCurve" : "LineCurve3";
      this.curves.push(new cu[n](e, t));
    }
    return this;
  }
  getPoint(t, e) {
    const n = t * this.getLength(),
      i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const t = i[r] - n,
          s = this.curves[r],
          a = s.getLength(),
          o = 0 === a ? 0 : 1 - t / a;
        return s.getPointAt(o, e);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      (e += this.curves[n].getLength()), t.push(e);
    return (this.cacheLengths = t), t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const s = r[i],
        a = s.isEllipseCurve
          ? 2 * t
          : s.isLineCurve || s.isLineCurve3
          ? 1
          : s.isSplineCurve
          ? t * s.points.length
          : t,
        o = s.getPoints(a);
      for (let t = 0; t < o.length; t++) {
        const i = o[t];
        (n && n.equals(i)) || (e.push(i), (n = i));
      }
    }
    return (
      this.autoClose &&
        e.length > 1 &&
        !e[e.length - 1].equals(e[0]) &&
        e.push(e[0]),
      e
    );
  }
  copy(t) {
    super.copy(t), (this.curves = []);
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const n = t.curves[e];
      this.curves.push(n.clone());
    }
    return (this.autoClose = t.autoClose), this;
  }
  toJSON() {
    const t = super.toJSON();
    (t.autoClose = this.autoClose), (t.curves = []);
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const n = this.curves[e];
      t.curves.push(n.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []);
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const n = t.curves[e];
      this.curves.push(new cu[n.type]().fromJSON(n));
    }
    return this;
  }
}
class uu extends hu {
  constructor(t) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new $n()),
      t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const n = new ru(this.currentPoint.clone(), new $n(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    const r = new au(this.currentPoint.clone(), new $n(t, e), new $n(n, i));
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(t, e, n, i, r, s) {
    const a = new nu(
      this.currentPoint.clone(),
      new $n(t, e),
      new $n(n, i),
      new $n(r, s)
    );
    return this.curves.push(a), this.currentPoint.set(r, s), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t),
      n = new lu(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, i, r, s) {
    const a = this.currentPoint.x,
      o = this.currentPoint.y;
    return this.absarc(t + a, e + o, n, i, r, s), this;
  }
  absarc(t, e, n, i, r, s) {
    return this.absellipse(t, e, n, n, i, r, s), this;
  }
  ellipse(t, e, n, i, r, s, a, o) {
    const l = this.currentPoint.x,
      c = this.currentPoint.y;
    return this.absellipse(t + l, e + c, n, i, r, s, a, o), this;
  }
  absellipse(t, e, n, i, r, s, a, o) {
    const l = new Xh(t, e, n, i, r, s, a, o);
    if (this.curves.length > 0) {
      const t = l.getPoint(0);
      t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
    }
    this.curves.push(l);
    const c = l.getPoint(1);
    return this.currentPoint.copy(c), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (t.currentPoint = this.currentPoint.toArray()), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class du extends ws {
  constructor(
    t = [new $n(0, -0.5), new $n(0.5, 0), new $n(0, 0.5)],
    e = 12,
    n = 0,
    i = 2 * Math.PI
  ) {
    super(),
      (this.type = "LatheGeometry"),
      (this.parameters = { points: t, segments: e, phiStart: n, phiLength: i }),
      (e = Math.floor(e)),
      (i = jn(i, 0, 2 * Math.PI));
    const r = [],
      s = [],
      a = [],
      o = [],
      l = [],
      c = 1 / e,
      h = new Pi(),
      u = new $n(),
      d = new Pi(),
      p = new Pi(),
      m = new Pi();
    let f = 0,
      g = 0;
    for (let e = 0; e <= t.length - 1; e++)
      switch (e) {
        case 0:
          (f = t[e + 1].x - t[e].x),
            (g = t[e + 1].y - t[e].y),
            (d.x = 1 * g),
            (d.y = -f),
            (d.z = 0 * g),
            m.copy(d),
            d.normalize(),
            o.push(d.x, d.y, d.z);
          break;
        case t.length - 1:
          o.push(m.x, m.y, m.z);
          break;
        default:
          (f = t[e + 1].x - t[e].x),
            (g = t[e + 1].y - t[e].y),
            (d.x = 1 * g),
            (d.y = -f),
            (d.z = 0 * g),
            p.copy(d),
            (d.x += m.x),
            (d.y += m.y),
            (d.z += m.z),
            d.normalize(),
            o.push(d.x, d.y, d.z),
            m.copy(p);
      }
    for (let r = 0; r <= e; r++) {
      const d = n + r * c * i,
        p = Math.sin(d),
        m = Math.cos(d);
      for (let n = 0; n <= t.length - 1; n++) {
        (h.x = t[n].x * p),
          (h.y = t[n].y),
          (h.z = t[n].x * m),
          s.push(h.x, h.y, h.z),
          (u.x = r / e),
          (u.y = n / (t.length - 1)),
          a.push(u.x, u.y);
        const i = o[3 * n + 0] * p,
          c = o[3 * n + 1],
          d = o[3 * n + 0] * m;
        l.push(i, c, d);
      }
    }
    for (let n = 0; n < e; n++)
      for (let e = 0; e < t.length - 1; e++) {
        const i = e + n * t.length,
          s = i,
          a = i + t.length,
          o = i + t.length + 1,
          l = i + 1;
        r.push(s, a, l), r.push(o, l, a);
      }
    this.setIndex(r),
      this.setAttribute("position", new gs(s, 3)),
      this.setAttribute("uv", new gs(a, 2)),
      this.setAttribute("normal", new gs(l, 3));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new du(t.points, t.segments, t.phiStart, t.phiLength);
  }
}
class pu extends du {
  constructor(t = 1, e = 1, n = 4, i = 8) {
    const r = new uu();
    r.absarc(0, -e / 2, t, 1.5 * Math.PI, 0),
      r.absarc(0, e / 2, t, 0, 0.5 * Math.PI),
      super(r.getPoints(n), i),
      (this.type = "CapsuleGeometry"),
      (this.parameters = {
        radius: t,
        length: e,
        capSegments: n,
        radialSegments: i,
      });
  }
  static fromJSON(t) {
    return new pu(t.radius, t.length, t.capSegments, t.radialSegments);
  }
}
class mu extends ws {
  constructor(t = 1, e = 32, n = 0, i = 2 * Math.PI) {
    super(),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: t,
        segments: e,
        thetaStart: n,
        thetaLength: i,
      }),
      (e = Math.max(3, e));
    const r = [],
      s = [],
      a = [],
      o = [],
      l = new Pi(),
      c = new $n();
    s.push(0, 0, 0), a.push(0, 0, 1), o.push(0.5, 0.5);
    for (let r = 0, h = 3; r <= e; r++, h += 3) {
      const u = n + (r / e) * i;
      (l.x = t * Math.cos(u)),
        (l.y = t * Math.sin(u)),
        s.push(l.x, l.y, l.z),
        a.push(0, 0, 1),
        (c.x = (s[h] / t + 1) / 2),
        (c.y = (s[h + 1] / t + 1) / 2),
        o.push(c.x, c.y);
    }
    for (let t = 1; t <= e; t++) r.push(t, t + 1, 0);
    this.setIndex(r),
      this.setAttribute("position", new gs(s, 3)),
      this.setAttribute("normal", new gs(a, 3)),
      this.setAttribute("uv", new gs(o, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new mu(t.radius, t.segments, t.thetaStart, t.thetaLength);
  }
}
class fu extends ws {
  constructor(
    t = 1,
    e = 1,
    n = 1,
    i = 32,
    r = 1,
    s = !1,
    a = 0,
    o = 2 * Math.PI
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: t,
        radiusBottom: e,
        height: n,
        radialSegments: i,
        heightSegments: r,
        openEnded: s,
        thetaStart: a,
        thetaLength: o,
      });
    const l = this;
    (i = Math.floor(i)), (r = Math.floor(r));
    const c = [],
      h = [],
      u = [],
      d = [];
    let p = 0;
    const m = [],
      f = n / 2;
    let g = 0;
    function v(n) {
      const r = p,
        s = new $n(),
        m = new Pi();
      let v = 0;
      const _ = !0 === n ? t : e,
        x = !0 === n ? 1 : -1;
      for (let t = 1; t <= i; t++)
        h.push(0, f * x, 0), u.push(0, x, 0), d.push(0.5, 0.5), p++;
      const y = p;
      for (let t = 0; t <= i; t++) {
        const e = (t / i) * o + a,
          n = Math.cos(e),
          r = Math.sin(e);
        (m.x = _ * r),
          (m.y = f * x),
          (m.z = _ * n),
          h.push(m.x, m.y, m.z),
          u.push(0, x, 0),
          (s.x = 0.5 * n + 0.5),
          (s.y = 0.5 * r * x + 0.5),
          d.push(s.x, s.y),
          p++;
      }
      for (let t = 0; t < i; t++) {
        const e = r + t,
          i = y + t;
        !0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), (v += 3);
      }
      l.addGroup(g, v, !0 === n ? 1 : 2), (g += v);
    }
    !(function () {
      const s = new Pi(),
        v = new Pi();
      let _ = 0;
      const x = (e - t) / n;
      for (let l = 0; l <= r; l++) {
        const c = [],
          g = l / r,
          _ = g * (e - t) + t;
        for (let t = 0; t <= i; t++) {
          const e = t / i,
            r = e * o + a,
            l = Math.sin(r),
            m = Math.cos(r);
          (v.x = _ * l),
            (v.y = -g * n + f),
            (v.z = _ * m),
            h.push(v.x, v.y, v.z),
            s.set(l, x, m).normalize(),
            u.push(s.x, s.y, s.z),
            d.push(e, 1 - g),
            c.push(p++);
        }
        m.push(c);
      }
      for (let t = 0; t < i; t++)
        for (let e = 0; e < r; e++) {
          const n = m[e][t],
            i = m[e + 1][t],
            r = m[e + 1][t + 1],
            s = m[e][t + 1];
          c.push(n, i, s), c.push(i, r, s), (_ += 6);
        }
      l.addGroup(g, _, 0), (g += _);
    })(),
      !1 === s && (t > 0 && v(!0), e > 0 && v(!1)),
      this.setIndex(c),
      this.setAttribute("position", new gs(h, 3)),
      this.setAttribute("normal", new gs(u, 3)),
      this.setAttribute("uv", new gs(d, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new fu(
      t.radiusTop,
      t.radiusBottom,
      t.height,
      t.radialSegments,
      t.heightSegments,
      t.openEnded,
      t.thetaStart,
      t.thetaLength
    );
  }
}
class gu extends fu {
  constructor(t = 1, e = 1, n = 32, i = 1, r = !1, s = 0, a = 2 * Math.PI) {
    super(0, t, e, n, i, r, s, a),
      (this.type = "ConeGeometry"),
      (this.parameters = {
        radius: t,
        height: e,
        radialSegments: n,
        heightSegments: i,
        openEnded: r,
        thetaStart: s,
        thetaLength: a,
      });
  }
  static fromJSON(t) {
    return new gu(
      t.radius,
      t.height,
      t.radialSegments,
      t.heightSegments,
      t.openEnded,
      t.thetaStart,
      t.thetaLength
    );
  }
}
class vu extends ws {
  constructor(t = [], e = [], n = 1, i = 0) {
    super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: t, indices: e, radius: n, detail: i });
    const r = [],
      s = [];
    function a(t, e, n, i) {
      const r = i + 1,
        s = [];
      for (let i = 0; i <= r; i++) {
        s[i] = [];
        const a = t.clone().lerp(n, i / r),
          o = e.clone().lerp(n, i / r),
          l = r - i;
        for (let t = 0; t <= l; t++)
          s[i][t] = 0 === t && i === r ? a : a.clone().lerp(o, t / l);
      }
      for (let t = 0; t < r; t++)
        for (let e = 0; e < 2 * (r - t) - 1; e++) {
          const n = Math.floor(e / 2);
          e % 2 == 0
            ? (o(s[t][n + 1]), o(s[t + 1][n]), o(s[t][n]))
            : (o(s[t][n + 1]), o(s[t + 1][n + 1]), o(s[t + 1][n]));
        }
    }
    function o(t) {
      r.push(t.x, t.y, t.z);
    }
    function l(e, n) {
      const i = 3 * e;
      (n.x = t[i + 0]), (n.y = t[i + 1]), (n.z = t[i + 2]);
    }
    function c(t, e, n, i) {
      i < 0 && 1 === t.x && (s[e] = t.x - 1),
        0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + 0.5);
    }
    function h(t) {
      return Math.atan2(t.z, -t.x);
    }
    !(function (t) {
      const n = new Pi(),
        i = new Pi(),
        r = new Pi();
      for (let s = 0; s < e.length; s += 3)
        l(e[s + 0], n), l(e[s + 1], i), l(e[s + 2], r), a(n, i, r, t);
    })(i),
      (function (t) {
        const e = new Pi();
        for (let n = 0; n < r.length; n += 3)
          (e.x = r[n + 0]),
            (e.y = r[n + 1]),
            (e.z = r[n + 2]),
            e.normalize().multiplyScalar(t),
            (r[n + 0] = e.x),
            (r[n + 1] = e.y),
            (r[n + 2] = e.z);
      })(n),
      (function () {
        const t = new Pi();
        for (let n = 0; n < r.length; n += 3) {
          (t.x = r[n + 0]), (t.y = r[n + 1]), (t.z = r[n + 2]);
          const i = h(t) / 2 / Math.PI + 0.5,
            a =
              ((e = t),
              Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI +
                0.5);
          s.push(i, 1 - a);
        }
        var e;
        (function () {
          const t = new Pi(),
            e = new Pi(),
            n = new Pi(),
            i = new Pi(),
            a = new $n(),
            o = new $n(),
            l = new $n();
          for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
            t.set(r[u + 0], r[u + 1], r[u + 2]),
              e.set(r[u + 3], r[u + 4], r[u + 5]),
              n.set(r[u + 6], r[u + 7], r[u + 8]),
              a.set(s[d + 0], s[d + 1]),
              o.set(s[d + 2], s[d + 3]),
              l.set(s[d + 4], s[d + 5]),
              i.copy(t).add(e).add(n).divideScalar(3);
            const p = h(i);
            c(a, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, n, p);
          }
        })(),
          (function () {
            for (let t = 0; t < s.length; t += 6) {
              const e = s[t + 0],
                n = s[t + 2],
                i = s[t + 4],
                r = Math.max(e, n, i),
                a = Math.min(e, n, i);
              r > 0.9 &&
                a < 0.1 &&
                (e < 0.2 && (s[t + 0] += 1),
                n < 0.2 && (s[t + 2] += 1),
                i < 0.2 && (s[t + 4] += 1));
            }
          })();
      })(),
      this.setAttribute("position", new gs(r, 3)),
      this.setAttribute("normal", new gs(r.slice(), 3)),
      this.setAttribute("uv", new gs(s, 2)),
      0 === i ? this.computeVertexNormals() : this.normalizeNormals();
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new vu(t.vertices, t.indices, t.radius, t.details);
  }
}
class _u extends vu {
  constructor(t = 1, e = 0) {
    const n = (1 + Math.sqrt(5)) / 2,
      i = 1 / n;
    super(
      [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -i,
        -n,
        0,
        -i,
        n,
        0,
        i,
        -n,
        0,
        i,
        n,
        -i,
        -n,
        0,
        -i,
        n,
        0,
        i,
        -n,
        0,
        i,
        n,
        0,
        -n,
        0,
        -i,
        n,
        0,
        -i,
        -n,
        0,
        i,
        n,
        0,
        i,
      ],
      [
        3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8,
        17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18,
        0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13,
        18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5,
        11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14,
        5, 1, 5, 9,
      ],
      t,
      e
    ),
      (this.type = "DodecahedronGeometry"),
      (this.parameters = { radius: t, detail: e });
  }
  static fromJSON(t) {
    return new _u(t.radius, t.detail);
  }
}
const xu = new Pi(),
  yu = new Pi(),
  Mu = new Pi(),
  Su = new Wr();
class bu extends ws {
  constructor(t = null, e = 1) {
    if (
      (super(),
      (this.type = "EdgesGeometry"),
      (this.parameters = { geometry: t, thresholdAngle: e }),
      null !== t)
    ) {
      const n = 4,
        i = Math.pow(10, n),
        r = Math.cos(Gn * e),
        s = t.getIndex(),
        a = t.getAttribute("position"),
        o = s ? s.count : a.count,
        l = [0, 0, 0],
        c = ["a", "b", "c"],
        h = new Array(3),
        u = {},
        d = [];
      for (let t = 0; t < o; t += 3) {
        s
          ? ((l[0] = s.getX(t)), (l[1] = s.getX(t + 1)), (l[2] = s.getX(t + 2)))
          : ((l[0] = t), (l[1] = t + 1), (l[2] = t + 2));
        const { a: e, b: n, c: o } = Su;
        if (
          (e.fromBufferAttribute(a, l[0]),
          n.fromBufferAttribute(a, l[1]),
          o.fromBufferAttribute(a, l[2]),
          Su.getNormal(Mu),
          (h[0] = `${Math.round(e.x * i)},${Math.round(e.y * i)},${Math.round(
            e.z * i
          )}`),
          (h[1] = `${Math.round(n.x * i)},${Math.round(n.y * i)},${Math.round(
            n.z * i
          )}`),
          (h[2] = `${Math.round(o.x * i)},${Math.round(o.y * i)},${Math.round(
            o.z * i
          )}`),
          h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0])
        )
          for (let t = 0; t < 3; t++) {
            const e = (t + 1) % 3,
              n = h[t],
              i = h[e],
              s = Su[c[t]],
              a = Su[c[e]],
              o = `${n}_${i}`,
              p = `${i}_${n}`;
            p in u && u[p]
              ? (Mu.dot(u[p].normal) <= r &&
                  (d.push(s.x, s.y, s.z), d.push(a.x, a.y, a.z)),
                (u[p] = null))
              : o in u ||
                (u[o] = { index0: l[t], index1: l[e], normal: Mu.clone() });
          }
      }
      for (const t in u)
        if (u[t]) {
          const { index0: e, index1: n } = u[t];
          xu.fromBufferAttribute(a, e),
            yu.fromBufferAttribute(a, n),
            d.push(xu.x, xu.y, xu.z),
            d.push(yu.x, yu.y, yu.z);
        }
      this.setAttribute("position", new gs(d, 3));
    }
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
}
class wu extends uu {
  constructor(t) {
    super(t), (this.uuid = Xn()), (this.type = "Shape"), (this.holes = []);
  }
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      e[n] = this.holes[n].getPoints(t);
    return e;
  }
  extractPoints(t) {
    return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
  }
  copy(t) {
    super.copy(t), (this.holes = []);
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const n = t.holes[e];
      this.holes.push(n.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    (t.uuid = this.uuid), (t.holes = []);
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const n = this.holes[e];
      t.holes.push(n.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []);
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const n = t.holes[e];
      this.holes.push(new uu().fromJSON(n));
    }
    return this;
  }
}
const Tu = function (t, e, n = 2) {
  const i = e && e.length,
    r = i ? e[0] * n : t.length;
  let s = Eu(t, 0, r, n, !0);
  const a = [];
  if (!s || s.next === s.prev) return a;
  let o, l, c, h, u, d, p;
  if (
    (i &&
      (s = (function (t, e, n, i) {
        const r = [];
        let s, a, o, l, c;
        for (s = 0, a = e.length; s < a; s++)
          (o = e[s] * i),
            (l = s < a - 1 ? e[s + 1] * i : t.length),
            (c = Eu(t, o, l, i, !1)),
            c === c.next && (c.steiner = !0),
            r.push(Fu(c));
        for (r.sort(Uu), s = 0; s < r.length; s++) n = Nu(r[s], n);
        return n;
      })(t, e, s, n)),
    t.length > 80 * n)
  ) {
    (o = c = t[0]), (l = h = t[1]);
    for (let e = n; e < r; e += n)
      (u = t[e]),
        (d = t[e + 1]),
        u < o && (o = u),
        d < l && (l = d),
        u > c && (c = u),
        d > h && (h = d);
    (p = Math.max(c - o, h - l)), (p = 0 !== p ? 32767 / p : 0);
  }
  return Ru(s, a, n, o, l, p, 0), a;
};
function Eu(t, e, n, i, r) {
  let s, a;
  if (
    r ===
    (function (t, e, n, i) {
      let r = 0;
      for (let s = e, a = n - i; s < n; s += i)
        (r += (t[a] - t[s]) * (t[s + 1] + t[a + 1])), (a = s);
      return r;
    })(t, e, n, i) >
      0
  )
    for (s = e; s < n; s += i) a = qu(s, t[s], t[s + 1], a);
  else for (s = n - i; s >= e; s -= i) a = qu(s, t[s], t[s + 1], a);
  return a && Vu(a, a.next) && (Yu(a), (a = a.next)), a;
}
function Au(t, e) {
  if (!t) return t;
  e || (e = t);
  let n,
    i = t;
  do {
    if (
      ((n = !1), i.steiner || (!Vu(i, i.next) && 0 !== ku(i.prev, i, i.next)))
    )
      i = i.next;
    else {
      if ((Yu(i), (i = e = i.prev), i === i.next)) break;
      n = !0;
    }
  } while (n || i !== e);
  return e;
}
function Ru(t, e, n, i, r, s, a) {
  if (!t) return;
  !a &&
    s &&
    (function (t, e, n, i) {
      let r = t;
      do {
        0 === r.z && (r.z = Ou(r.x, r.y, e, n, i)),
          (r.prevZ = r.prev),
          (r.nextZ = r.next),
          (r = r.next);
      } while (r !== t);
      (r.prevZ.nextZ = null),
        (r.prevZ = null),
        (function (t) {
          let e,
            n,
            i,
            r,
            s,
            a,
            o,
            l,
            c = 1;
          do {
            for (n = t, t = null, s = null, a = 0; n; ) {
              for (
                a++, i = n, o = 0, e = 0;
                e < c && (o++, (i = i.nextZ), i);
                e++
              );
              for (l = c; o > 0 || (l > 0 && i); )
                0 !== o && (0 === l || !i || n.z <= i.z)
                  ? ((r = n), (n = n.nextZ), o--)
                  : ((r = i), (i = i.nextZ), l--),
                  s ? (s.nextZ = r) : (t = r),
                  (r.prevZ = s),
                  (s = r);
              n = i;
            }
            (s.nextZ = null), (c *= 2);
          } while (a > 1);
        })(r);
    })(t, i, r, s);
  let o,
    l,
    c = t;
  for (; t.prev !== t.next; )
    if (((o = t.prev), (l = t.next), s ? Pu(t, i, r, s) : Cu(t)))
      e.push((o.i / n) | 0),
        e.push((t.i / n) | 0),
        e.push((l.i / n) | 0),
        Yu(t),
        (t = l.next),
        (c = l.next);
    else if ((t = l) === c) {
      a
        ? 1 === a
          ? Ru((t = Iu(Au(t), e, n)), e, n, i, r, s, 2)
          : 2 === a && Lu(t, e, n, i, r, s)
        : Ru(Au(t), e, n, i, r, s, 1);
      break;
    }
}
function Cu(t) {
  const e = t.prev,
    n = t,
    i = t.next;
  if (ku(e, n, i) >= 0) return !1;
  const r = e.x,
    s = n.x,
    a = i.x,
    o = e.y,
    l = n.y,
    c = i.y,
    h = r < s ? (r < a ? r : a) : s < a ? s : a,
    u = o < l ? (o < c ? o : c) : l < c ? l : c,
    d = r > s ? (r > a ? r : a) : s > a ? s : a,
    p = o > l ? (o > c ? o : c) : l > c ? l : c;
  let m = i.next;
  for (; m !== e; ) {
    if (
      m.x >= h &&
      m.x <= d &&
      m.y >= u &&
      m.y <= p &&
      Bu(r, o, s, l, a, c, m.x, m.y) &&
      ku(m.prev, m, m.next) >= 0
    )
      return !1;
    m = m.next;
  }
  return !0;
}
function Pu(t, e, n, i) {
  const r = t.prev,
    s = t,
    a = t.next;
  if (ku(r, s, a) >= 0) return !1;
  const o = r.x,
    l = s.x,
    c = a.x,
    h = r.y,
    u = s.y,
    d = a.y,
    p = o < l ? (o < c ? o : c) : l < c ? l : c,
    m = h < u ? (h < d ? h : d) : u < d ? u : d,
    f = o > l ? (o > c ? o : c) : l > c ? l : c,
    g = h > u ? (h > d ? h : d) : u > d ? u : d,
    v = Ou(p, m, e, n, i),
    _ = Ou(f, g, e, n, i);
  let x = t.prevZ,
    y = t.nextZ;
  for (; x && x.z >= v && y && y.z <= _; ) {
    if (
      x.x >= p &&
      x.x <= f &&
      x.y >= m &&
      x.y <= g &&
      x !== r &&
      x !== a &&
      Bu(o, h, l, u, c, d, x.x, x.y) &&
      ku(x.prev, x, x.next) >= 0
    )
      return !1;
    if (
      ((x = x.prevZ),
      y.x >= p &&
        y.x <= f &&
        y.y >= m &&
        y.y <= g &&
        y !== r &&
        y !== a &&
        Bu(o, h, l, u, c, d, y.x, y.y) &&
        ku(y.prev, y, y.next) >= 0)
    )
      return !1;
    y = y.nextZ;
  }
  for (; x && x.z >= v; ) {
    if (
      x.x >= p &&
      x.x <= f &&
      x.y >= m &&
      x.y <= g &&
      x !== r &&
      x !== a &&
      Bu(o, h, l, u, c, d, x.x, x.y) &&
      ku(x.prev, x, x.next) >= 0
    )
      return !1;
    x = x.prevZ;
  }
  for (; y && y.z <= _; ) {
    if (
      y.x >= p &&
      y.x <= f &&
      y.y >= m &&
      y.y <= g &&
      y !== r &&
      y !== a &&
      Bu(o, h, l, u, c, d, y.x, y.y) &&
      ku(y.prev, y, y.next) >= 0
    )
      return !1;
    y = y.nextZ;
  }
  return !0;
}
function Iu(t, e, n) {
  let i = t;
  do {
    const r = i.prev,
      s = i.next.next;
    !Vu(r, s) &&
      Hu(r, i, i.next, s) &&
      Xu(r, s) &&
      Xu(s, r) &&
      (e.push((r.i / n) | 0),
      e.push((i.i / n) | 0),
      e.push((s.i / n) | 0),
      Yu(i),
      Yu(i.next),
      (i = t = s)),
      (i = i.next);
  } while (i !== t);
  return Au(i);
}
function Lu(t, e, n, i, r, s) {
  let a = t;
  do {
    let t = a.next.next;
    for (; t !== a.prev; ) {
      if (a.i !== t.i && zu(a, t)) {
        let o = ju(a, t);
        return (
          (a = Au(a, a.next)),
          (o = Au(o, o.next)),
          Ru(a, e, n, i, r, s, 0),
          void Ru(o, e, n, i, r, s, 0)
        );
      }
      t = t.next;
    }
    a = a.next;
  } while (a !== t);
}
function Uu(t, e) {
  return t.x - e.x;
}
function Nu(t, e) {
  const n = (function (t, e) {
    let n,
      i = e,
      r = -1 / 0;
    const s = t.x,
      a = t.y;
    do {
      if (a <= i.y && a >= i.next.y && i.next.y !== i.y) {
        const t = i.x + ((a - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);
        if (
          t <= s &&
          t > r &&
          ((r = t), (n = i.x < i.next.x ? i : i.next), t === s)
        )
          return n;
      }
      i = i.next;
    } while (i !== e);
    if (!n) return null;
    const o = n,
      l = n.x,
      c = n.y;
    let h,
      u = 1 / 0;
    i = n;
    do {
      s >= i.x &&
        i.x >= l &&
        s !== i.x &&
        Bu(a < c ? s : r, a, l, c, a < c ? r : s, a, i.x, i.y) &&
        ((h = Math.abs(a - i.y) / (s - i.x)),
        Xu(i, t) &&
          (h < u || (h === u && (i.x > n.x || (i.x === n.x && Du(n, i))))) &&
          ((n = i), (u = h))),
        (i = i.next);
    } while (i !== o);
    return n;
  })(t, e);
  if (!n) return e;
  const i = ju(n, t);
  return Au(i, i.next), Au(n, n.next);
}
function Du(t, e) {
  return ku(t.prev, t, e.prev) < 0 && ku(e.next, t, t.next) < 0;
}
function Ou(t, e, n, i, r) {
  return (
    (t =
      1431655765 &
      ((t =
        858993459 &
        ((t =
          252645135 &
          ((t = 16711935 & ((t = ((t - n) * r) | 0) | (t << 8))) | (t << 4))) |
          (t << 2))) |
        (t << 1))) |
    ((e =
      1431655765 &
      ((e =
        858993459 &
        ((e =
          252645135 &
          ((e = 16711935 & ((e = ((e - i) * r) | 0) | (e << 8))) | (e << 4))) |
          (e << 2))) |
        (e << 1))) <<
      1)
  );
}
function Fu(t) {
  let e = t,
    n = t;
  do {
    (e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
  } while (e !== t);
  return n;
}
function Bu(t, e, n, i, r, s, a, o) {
  return (
    (r - a) * (e - o) >= (t - a) * (s - o) &&
    (t - a) * (i - o) >= (n - a) * (e - o) &&
    (n - a) * (s - o) >= (r - a) * (i - o)
  );
}
function zu(t, e) {
  return (
    t.next.i !== e.i &&
    t.prev.i !== e.i &&
    !(function (t, e) {
      let n = t;
      do {
        if (
          n.i !== t.i &&
          n.next.i !== t.i &&
          n.i !== e.i &&
          n.next.i !== e.i &&
          Hu(n, n.next, t, e)
        )
          return !0;
        n = n.next;
      } while (n !== t);
      return !1;
    })(t, e) &&
    ((Xu(t, e) &&
      Xu(e, t) &&
      (function (t, e) {
        let n = t,
          i = !1;
        const r = (t.x + e.x) / 2,
          s = (t.y + e.y) / 2;
        do {
          n.y > s != n.next.y > s &&
            n.next.y !== n.y &&
            r < ((n.next.x - n.x) * (s - n.y)) / (n.next.y - n.y) + n.x &&
            (i = !i),
            (n = n.next);
        } while (n !== t);
        return i;
      })(t, e) &&
      (ku(t.prev, t, e.prev) || ku(t, e.prev, e))) ||
      (Vu(t, e) && ku(t.prev, t, t.next) > 0 && ku(e.prev, e, e.next) > 0))
  );
}
function ku(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function Vu(t, e) {
  return t.x === e.x && t.y === e.y;
}
function Hu(t, e, n, i) {
  const r = Wu(ku(t, e, n)),
    s = Wu(ku(t, e, i)),
    a = Wu(ku(n, i, t)),
    o = Wu(ku(n, i, e));
  return (
    (r !== s && a !== o) ||
    !(0 !== r || !Gu(t, n, e)) ||
    !(0 !== s || !Gu(t, i, e)) ||
    !(0 !== a || !Gu(n, t, i)) ||
    !(0 !== o || !Gu(n, e, i))
  );
}
function Gu(t, e, n) {
  return (
    e.x <= Math.max(t.x, n.x) &&
    e.x >= Math.min(t.x, n.x) &&
    e.y <= Math.max(t.y, n.y) &&
    e.y >= Math.min(t.y, n.y)
  );
}
function Wu(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
}
function Xu(t, e) {
  return ku(t.prev, t, t.next) < 0
    ? ku(t, e, t.next) >= 0 && ku(t, t.prev, e) >= 0
    : ku(t, e, t.prev) < 0 || ku(t, t.next, e) < 0;
}
function ju(t, e) {
  const n = new Zu(t.i, t.x, t.y),
    i = new Zu(e.i, e.x, e.y),
    r = t.next,
    s = e.prev;
  return (
    (t.next = e),
    (e.prev = t),
    (n.next = r),
    (r.prev = n),
    (i.next = n),
    (n.prev = i),
    (s.next = i),
    (i.prev = s),
    i
  );
}
function qu(t, e, n, i) {
  const r = new Zu(t, e, n);
  return (
    i
      ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r))
      : ((r.prev = r), (r.next = r)),
    r
  );
}
function Yu(t) {
  (t.next.prev = t.prev),
    (t.prev.next = t.next),
    t.prevZ && (t.prevZ.nextZ = t.nextZ),
    t.nextZ && (t.nextZ.prevZ = t.prevZ);
}
function Zu(t, e, n) {
  (this.i = t),
    (this.x = e),
    (this.y = n),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
class Ju {
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let i = e - 1, r = 0; r < e; i = r++)
      n += t[i].x * t[r].y - t[r].x * t[i].y;
    return 0.5 * n;
  }
  static isClockWise(t) {
    return Ju.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const n = [],
      i = [],
      r = [];
    Ku(t), $u(n, t);
    let s = t.length;
    e.forEach(Ku);
    for (let t = 0; t < e.length; t++)
      i.push(s), (s += e[t].length), $u(n, e[t]);
    const a = Tu(n, i);
    for (let t = 0; t < a.length; t += 3) r.push(a.slice(t, t + 3));
    return r;
  }
}
function Ku(t) {
  const e = t.length;
  e > 2 && t[e - 1].equals(t[0]) && t.pop();
}
function $u(t, e) {
  for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y);
}
class Qu extends ws {
  constructor(
    t = new wu([
      new $n(0.5, 0.5),
      new $n(-0.5, 0.5),
      new $n(-0.5, -0.5),
      new $n(0.5, -0.5),
    ]),
    e = {}
  ) {
    super(),
      (this.type = "ExtrudeGeometry"),
      (this.parameters = { shapes: t, options: e }),
      (t = Array.isArray(t) ? t : [t]);
    const n = this,
      i = [],
      r = [];
    for (let e = 0, n = t.length; e < n; e++) {
      s(t[e]);
    }
    function s(t) {
      const s = [],
        a = void 0 !== e.curveSegments ? e.curveSegments : 12,
        o = void 0 !== e.steps ? e.steps : 1,
        l = void 0 !== e.depth ? e.depth : 1;
      let c = void 0 === e.bevelEnabled || e.bevelEnabled,
        h = void 0 !== e.bevelThickness ? e.bevelThickness : 0.2,
        u = void 0 !== e.bevelSize ? e.bevelSize : h - 0.1,
        d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
        p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
      const m = e.extrudePath,
        f = void 0 !== e.UVGenerator ? e.UVGenerator : td;
      let g,
        v,
        _,
        x,
        y,
        M = !1;
      m &&
        ((g = m.getSpacedPoints(o)),
        (M = !0),
        (c = !1),
        (v = m.computeFrenetFrames(o, !1)),
        (_ = new Pi()),
        (x = new Pi()),
        (y = new Pi())),
        c || ((p = 0), (h = 0), (u = 0), (d = 0));
      const S = t.extractPoints(a);
      let b = S.shape;
      const w = S.holes;
      if (!Ju.isClockWise(b)) {
        b = b.reverse();
        for (let t = 0, e = w.length; t < e; t++) {
          const e = w[t];
          Ju.isClockWise(e) && (w[t] = e.reverse());
        }
      }
      const T = Ju.triangulateShape(b, w),
        E = b;
      for (let t = 0, e = w.length; t < e; t++) {
        const e = w[t];
        b = b.concat(e);
      }
      function A(t, e, n) {
        return (
          e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
          t.clone().addScaledVector(e, n)
        );
      }
      const R = b.length,
        C = T.length;
      function P(t, e, n) {
        let i, r, s;
        const a = t.x - e.x,
          o = t.y - e.y,
          l = n.x - t.x,
          c = n.y - t.y,
          h = a * a + o * o,
          u = a * c - o * l;
        if (Math.abs(u) > Number.EPSILON) {
          const u = Math.sqrt(h),
            d = Math.sqrt(l * l + c * c),
            p = e.x - o / u,
            m = e.y + a / u,
            f =
              ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (a * c - o * l);
          (i = p + a * f - t.x), (r = m + o * f - t.y);
          const g = i * i + r * r;
          if (g <= 2) return new $n(i, r);
          s = Math.sqrt(g / 2);
        } else {
          let t = !1;
          a > Number.EPSILON
            ? l > Number.EPSILON && (t = !0)
            : a < -Number.EPSILON
            ? l < -Number.EPSILON && (t = !0)
            : Math.sign(o) === Math.sign(c) && (t = !0),
            t
              ? ((i = -o), (r = a), (s = Math.sqrt(h)))
              : ((i = a), (r = o), (s = Math.sqrt(h / 2)));
        }
        return new $n(i / s, r / s);
      }
      const I = [];
      for (let t = 0, e = E.length, n = e - 1, i = t + 1; t < e; t++, n++, i++)
        n === e && (n = 0), i === e && (i = 0), (I[t] = P(E[t], E[n], E[i]));
      const L = [];
      let U,
        N = I.concat();
      for (let t = 0, e = w.length; t < e; t++) {
        const e = w[t];
        U = [];
        for (
          let t = 0, n = e.length, i = n - 1, r = t + 1;
          t < n;
          t++, i++, r++
        )
          i === n && (i = 0), r === n && (r = 0), (U[t] = P(e[t], e[i], e[r]));
        L.push(U), (N = N.concat(U));
      }
      for (let t = 0; t < p; t++) {
        const e = t / p,
          n = h * Math.cos((e * Math.PI) / 2),
          i = u * Math.sin((e * Math.PI) / 2) + d;
        for (let t = 0, e = E.length; t < e; t++) {
          const e = A(E[t], I[t], i);
          F(e.x, e.y, -n);
        }
        for (let t = 0, e = w.length; t < e; t++) {
          const e = w[t];
          U = L[t];
          for (let t = 0, r = e.length; t < r; t++) {
            const r = A(e[t], U[t], i);
            F(r.x, r.y, -n);
          }
        }
      }
      const D = u + d;
      for (let t = 0; t < R; t++) {
        const e = c ? A(b[t], N[t], D) : b[t];
        M
          ? (x.copy(v.normals[0]).multiplyScalar(e.x),
            _.copy(v.binormals[0]).multiplyScalar(e.y),
            y.copy(g[0]).add(x).add(_),
            F(y.x, y.y, y.z))
          : F(e.x, e.y, 0);
      }
      for (let t = 1; t <= o; t++)
        for (let e = 0; e < R; e++) {
          const n = c ? A(b[e], N[e], D) : b[e];
          M
            ? (x.copy(v.normals[t]).multiplyScalar(n.x),
              _.copy(v.binormals[t]).multiplyScalar(n.y),
              y.copy(g[t]).add(x).add(_),
              F(y.x, y.y, y.z))
            : F(n.x, n.y, (l / o) * t);
        }
      for (let t = p - 1; t >= 0; t--) {
        const e = t / p,
          n = h * Math.cos((e * Math.PI) / 2),
          i = u * Math.sin((e * Math.PI) / 2) + d;
        for (let t = 0, e = E.length; t < e; t++) {
          const e = A(E[t], I[t], i);
          F(e.x, e.y, l + n);
        }
        for (let t = 0, e = w.length; t < e; t++) {
          const e = w[t];
          U = L[t];
          for (let t = 0, r = e.length; t < r; t++) {
            const r = A(e[t], U[t], i);
            M ? F(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : F(r.x, r.y, l + n);
          }
        }
      }
      function O(t, e) {
        let n = t.length;
        for (; --n >= 0; ) {
          const i = n;
          let r = n - 1;
          r < 0 && (r = t.length - 1);
          for (let t = 0, n = o + 2 * p; t < n; t++) {
            const n = R * t,
              s = R * (t + 1);
            z(e + i + n, e + r + n, e + r + s, e + i + s);
          }
        }
      }
      function F(t, e, n) {
        s.push(t), s.push(e), s.push(n);
      }
      function B(t, e, r) {
        k(t), k(e), k(r);
        const s = i.length / 3,
          a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
        V(a[0]), V(a[1]), V(a[2]);
      }
      function z(t, e, r, s) {
        k(t), k(e), k(s), k(e), k(r), k(s);
        const a = i.length / 3,
          o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
        V(o[0]), V(o[1]), V(o[3]), V(o[1]), V(o[2]), V(o[3]);
      }
      function k(t) {
        i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2]);
      }
      function V(t) {
        r.push(t.x), r.push(t.y);
      }
      !(function () {
        const t = i.length / 3;
        if (c) {
          let t = 0,
            e = R * t;
          for (let t = 0; t < C; t++) {
            const n = T[t];
            B(n[2] + e, n[1] + e, n[0] + e);
          }
          (t = o + 2 * p), (e = R * t);
          for (let t = 0; t < C; t++) {
            const n = T[t];
            B(n[0] + e, n[1] + e, n[2] + e);
          }
        } else {
          for (let t = 0; t < C; t++) {
            const e = T[t];
            B(e[2], e[1], e[0]);
          }
          for (let t = 0; t < C; t++) {
            const e = T[t];
            B(e[0] + R * o, e[1] + R * o, e[2] + R * o);
          }
        }
        n.addGroup(t, i.length / 3 - t, 0);
      })(),
        (function () {
          const t = i.length / 3;
          let e = 0;
          O(E, e), (e += E.length);
          for (let t = 0, n = w.length; t < n; t++) {
            const n = w[t];
            O(n, e), (e += n.length);
          }
          n.addGroup(t, i.length / 3 - t, 1);
        })();
    }
    this.setAttribute("position", new gs(i, 3)),
      this.setAttribute("uv", new gs(r, 2)),
      this.computeVertexNormals();
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (function (t, e, n) {
      if (((n.shapes = []), Array.isArray(t)))
        for (let e = 0, i = t.length; e < i; e++) {
          const i = t[e];
          n.shapes.push(i.uuid);
        }
      else n.shapes.push(t.uuid);
      (n.options = Object.assign({}, e)),
        void 0 !== e.extrudePath &&
          (n.options.extrudePath = e.extrudePath.toJSON());
      return n;
    })(this.parameters.shapes, this.parameters.options, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let i = 0, r = t.shapes.length; i < r; i++) {
      const r = e[t.shapes[i]];
      n.push(r);
    }
    const i = t.options.extrudePath;
    return (
      void 0 !== i && (t.options.extrudePath = new cu[i.type]().fromJSON(i)),
      new Qu(n, t.options)
    );
  }
}
const td = {
  generateTopUV: function (t, e, n, i, r) {
    const s = e[3 * n],
      a = e[3 * n + 1],
      o = e[3 * i],
      l = e[3 * i + 1],
      c = e[3 * r],
      h = e[3 * r + 1];
    return [new $n(s, a), new $n(o, l), new $n(c, h)];
  },
  generateSideWallUV: function (t, e, n, i, r, s) {
    const a = e[3 * n],
      o = e[3 * n + 1],
      l = e[3 * n + 2],
      c = e[3 * i],
      h = e[3 * i + 1],
      u = e[3 * i + 2],
      d = e[3 * r],
      p = e[3 * r + 1],
      m = e[3 * r + 2],
      f = e[3 * s],
      g = e[3 * s + 1],
      v = e[3 * s + 2];
    return Math.abs(o - h) < Math.abs(a - c)
      ? [new $n(a, 1 - l), new $n(c, 1 - u), new $n(d, 1 - m), new $n(f, 1 - v)]
      : [
          new $n(o, 1 - l),
          new $n(h, 1 - u),
          new $n(p, 1 - m),
          new $n(g, 1 - v),
        ];
  },
};
class ed extends vu {
  constructor(t = 1, e = 0) {
    const n = (1 + Math.sqrt(5)) / 2;
    super(
      [
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        0,
        0,
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        n,
        0,
        -1,
        n,
        0,
        1,
        -n,
        0,
        -1,
        -n,
        0,
        1,
      ],
      [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ],
      t,
      e
    ),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: t, detail: e });
  }
  static fromJSON(t) {
    return new ed(t.radius, t.detail);
  }
}
class nd extends vu {
  constructor(t = 1, e = 0) {
    super(
      [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2],
      t,
      e
    ),
      (this.type = "OctahedronGeometry"),
      (this.parameters = { radius: t, detail: e });
  }
  static fromJSON(t) {
    return new nd(t.radius, t.detail);
  }
}
class id extends ws {
  constructor(t = 0.5, e = 1, n = 32, i = 1, r = 0, s = 2 * Math.PI) {
    super(),
      (this.type = "RingGeometry"),
      (this.parameters = {
        innerRadius: t,
        outerRadius: e,
        thetaSegments: n,
        phiSegments: i,
        thetaStart: r,
        thetaLength: s,
      }),
      (n = Math.max(3, n));
    const a = [],
      o = [],
      l = [],
      c = [];
    let h = t;
    const u = (e - t) / (i = Math.max(1, i)),
      d = new Pi(),
      p = new $n();
    for (let t = 0; t <= i; t++) {
      for (let t = 0; t <= n; t++) {
        const i = r + (t / n) * s;
        (d.x = h * Math.cos(i)),
          (d.y = h * Math.sin(i)),
          o.push(d.x, d.y, d.z),
          l.push(0, 0, 1),
          (p.x = (d.x / e + 1) / 2),
          (p.y = (d.y / e + 1) / 2),
          c.push(p.x, p.y);
      }
      h += u;
    }
    for (let t = 0; t < i; t++) {
      const e = t * (n + 1);
      for (let t = 0; t < n; t++) {
        const i = t + e,
          r = i,
          s = i + n + 1,
          o = i + n + 2,
          l = i + 1;
        a.push(r, s, l), a.push(s, o, l);
      }
    }
    this.setIndex(a),
      this.setAttribute("position", new gs(o, 3)),
      this.setAttribute("normal", new gs(l, 3)),
      this.setAttribute("uv", new gs(c, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new id(
      t.innerRadius,
      t.outerRadius,
      t.thetaSegments,
      t.phiSegments,
      t.thetaStart,
      t.thetaLength
    );
  }
}
class rd extends ws {
  constructor(
    t = new wu([new $n(0, 0.5), new $n(-0.5, -0.5), new $n(0.5, -0.5)]),
    e = 12
  ) {
    super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = { shapes: t, curveSegments: e });
    const n = [],
      i = [],
      r = [],
      s = [];
    let a = 0,
      o = 0;
    if (!1 === Array.isArray(t)) l(t);
    else
      for (let e = 0; e < t.length; e++)
        l(t[e]), this.addGroup(a, o, e), (a += o), (o = 0);
    function l(t) {
      const a = i.length / 3,
        l = t.extractPoints(e);
      let c = l.shape;
      const h = l.holes;
      !1 === Ju.isClockWise(c) && (c = c.reverse());
      for (let t = 0, e = h.length; t < e; t++) {
        const e = h[t];
        !0 === Ju.isClockWise(e) && (h[t] = e.reverse());
      }
      const u = Ju.triangulateShape(c, h);
      for (let t = 0, e = h.length; t < e; t++) {
        const e = h[t];
        c = c.concat(e);
      }
      for (let t = 0, e = c.length; t < e; t++) {
        const e = c[t];
        i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y);
      }
      for (let t = 0, e = u.length; t < e; t++) {
        const e = u[t],
          i = e[0] + a,
          r = e[1] + a,
          s = e[2] + a;
        n.push(i, r, s), (o += 3);
      }
    }
    this.setIndex(n),
      this.setAttribute("position", new gs(i, 3)),
      this.setAttribute("normal", new gs(r, 3)),
      this.setAttribute("uv", new gs(s, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (function (t, e) {
      if (((e.shapes = []), Array.isArray(t)))
        for (let n = 0, i = t.length; n < i; n++) {
          const i = t[n];
          e.shapes.push(i.uuid);
        }
      else e.shapes.push(t.uuid);
      return e;
    })(this.parameters.shapes, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let i = 0, r = t.shapes.length; i < r; i++) {
      const r = e[t.shapes[i]];
      n.push(r);
    }
    return new rd(n, t.curveSegments);
  }
}
class sd extends ws {
  constructor(
    t = 1,
    e = 32,
    n = 16,
    i = 0,
    r = 2 * Math.PI,
    s = 0,
    a = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: s,
        thetaLength: a,
      }),
      (e = Math.max(3, Math.floor(e))),
      (n = Math.max(2, Math.floor(n)));
    const o = Math.min(s + a, Math.PI);
    let l = 0;
    const c = [],
      h = new Pi(),
      u = new Pi(),
      d = [],
      p = [],
      m = [],
      f = [];
    for (let d = 0; d <= n; d++) {
      const g = [],
        v = d / n;
      let _ = 0;
      0 === d && 0 === s
        ? (_ = 0.5 / e)
        : d === n && o === Math.PI && (_ = -0.5 / e);
      for (let n = 0; n <= e; n++) {
        const o = n / e;
        (h.x = -t * Math.cos(i + o * r) * Math.sin(s + v * a)),
          (h.y = t * Math.cos(s + v * a)),
          (h.z = t * Math.sin(i + o * r) * Math.sin(s + v * a)),
          p.push(h.x, h.y, h.z),
          u.copy(h).normalize(),
          m.push(u.x, u.y, u.z),
          f.push(o + _, 1 - v),
          g.push(l++);
      }
      c.push(g);
    }
    for (let t = 0; t < n; t++)
      for (let i = 0; i < e; i++) {
        const e = c[t][i + 1],
          r = c[t][i],
          a = c[t + 1][i],
          l = c[t + 1][i + 1];
        (0 !== t || s > 0) && d.push(e, r, l),
          (t !== n - 1 || o < Math.PI) && d.push(r, a, l);
      }
    this.setIndex(d),
      this.setAttribute("position", new gs(p, 3)),
      this.setAttribute("normal", new gs(m, 3)),
      this.setAttribute("uv", new gs(f, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new sd(
      t.radius,
      t.widthSegments,
      t.heightSegments,
      t.phiStart,
      t.phiLength,
      t.thetaStart,
      t.thetaLength
    );
  }
}
class ad extends vu {
  constructor(t = 1, e = 0) {
    super(
      [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
      [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
      t,
      e
    ),
      (this.type = "TetrahedronGeometry"),
      (this.parameters = { radius: t, detail: e });
  }
  static fromJSON(t) {
    return new ad(t.radius, t.detail);
  }
}
class od extends ws {
  constructor(t = 1, e = 0.4, n = 12, i = 48, r = 2 * Math.PI) {
    super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: t,
        tube: e,
        radialSegments: n,
        tubularSegments: i,
        arc: r,
      }),
      (n = Math.floor(n)),
      (i = Math.floor(i));
    const s = [],
      a = [],
      o = [],
      l = [],
      c = new Pi(),
      h = new Pi(),
      u = new Pi();
    for (let s = 0; s <= n; s++)
      for (let d = 0; d <= i; d++) {
        const p = (d / i) * r,
          m = (s / n) * Math.PI * 2;
        (h.x = (t + e * Math.cos(m)) * Math.cos(p)),
          (h.y = (t + e * Math.cos(m)) * Math.sin(p)),
          (h.z = e * Math.sin(m)),
          a.push(h.x, h.y, h.z),
          (c.x = t * Math.cos(p)),
          (c.y = t * Math.sin(p)),
          u.subVectors(h, c).normalize(),
          o.push(u.x, u.y, u.z),
          l.push(d / i),
          l.push(s / n);
      }
    for (let t = 1; t <= n; t++)
      for (let e = 1; e <= i; e++) {
        const n = (i + 1) * t + e - 1,
          r = (i + 1) * (t - 1) + e - 1,
          a = (i + 1) * (t - 1) + e,
          o = (i + 1) * t + e;
        s.push(n, r, o), s.push(r, a, o);
      }
    this.setIndex(s),
      this.setAttribute("position", new gs(a, 3)),
      this.setAttribute("normal", new gs(o, 3)),
      this.setAttribute("uv", new gs(l, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new od(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class ld extends ws {
  constructor(t = 1, e = 0.4, n = 64, i = 8, r = 2, s = 3) {
    super(),
      (this.type = "TorusKnotGeometry"),
      (this.parameters = {
        radius: t,
        tube: e,
        tubularSegments: n,
        radialSegments: i,
        p: r,
        q: s,
      }),
      (n = Math.floor(n)),
      (i = Math.floor(i));
    const a = [],
      o = [],
      l = [],
      c = [],
      h = new Pi(),
      u = new Pi(),
      d = new Pi(),
      p = new Pi(),
      m = new Pi(),
      f = new Pi(),
      g = new Pi();
    for (let a = 0; a <= n; ++a) {
      const _ = (a / n) * r * Math.PI * 2;
      v(_, r, s, t, d),
        v(_ + 0.01, r, s, t, p),
        f.subVectors(p, d),
        g.addVectors(p, d),
        m.crossVectors(f, g),
        g.crossVectors(m, f),
        m.normalize(),
        g.normalize();
      for (let t = 0; t <= i; ++t) {
        const r = (t / i) * Math.PI * 2,
          s = -e * Math.cos(r),
          p = e * Math.sin(r);
        (h.x = d.x + (s * g.x + p * m.x)),
          (h.y = d.y + (s * g.y + p * m.y)),
          (h.z = d.z + (s * g.z + p * m.z)),
          o.push(h.x, h.y, h.z),
          u.subVectors(h, d).normalize(),
          l.push(u.x, u.y, u.z),
          c.push(a / n),
          c.push(t / i);
      }
    }
    for (let t = 1; t <= n; t++)
      for (let e = 1; e <= i; e++) {
        const n = (i + 1) * (t - 1) + (e - 1),
          r = (i + 1) * t + (e - 1),
          s = (i + 1) * t + e,
          o = (i + 1) * (t - 1) + e;
        a.push(n, r, o), a.push(r, s, o);
      }
    function v(t, e, n, i, r) {
      const s = Math.cos(t),
        a = Math.sin(t),
        o = (n / e) * t,
        l = Math.cos(o);
      (r.x = i * (2 + l) * 0.5 * s),
        (r.y = i * (2 + l) * a * 0.5),
        (r.z = i * Math.sin(o) * 0.5);
    }
    this.setIndex(a),
      this.setAttribute("position", new gs(o, 3)),
      this.setAttribute("normal", new gs(l, 3)),
      this.setAttribute("uv", new gs(c, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new ld(
      t.radius,
      t.tube,
      t.tubularSegments,
      t.radialSegments,
      t.p,
      t.q
    );
  }
}
class cd extends ws {
  constructor(
    t = new ou(new Pi(-1, -1, 0), new Pi(-1, 1, 0), new Pi(1, 1, 0)),
    e = 64,
    n = 1,
    i = 8,
    r = !1
  ) {
    super(),
      (this.type = "TubeGeometry"),
      (this.parameters = {
        path: t,
        tubularSegments: e,
        radius: n,
        radialSegments: i,
        closed: r,
      });
    const s = t.computeFrenetFrames(e, r);
    (this.tangents = s.tangents),
      (this.normals = s.normals),
      (this.binormals = s.binormals);
    const a = new Pi(),
      o = new Pi(),
      l = new $n();
    let c = new Pi();
    const h = [],
      u = [],
      d = [],
      p = [];
    function m(r) {
      c = t.getPointAt(r / e, c);
      const l = s.normals[r],
        d = s.binormals[r];
      for (let t = 0; t <= i; t++) {
        const e = (t / i) * Math.PI * 2,
          r = Math.sin(e),
          s = -Math.cos(e);
        (o.x = s * l.x + r * d.x),
          (o.y = s * l.y + r * d.y),
          (o.z = s * l.z + r * d.z),
          o.normalize(),
          u.push(o.x, o.y, o.z),
          (a.x = c.x + n * o.x),
          (a.y = c.y + n * o.y),
          (a.z = c.z + n * o.z),
          h.push(a.x, a.y, a.z);
      }
    }
    !(function () {
      for (let t = 0; t < e; t++) m(t);
      m(!1 === r ? e : 0),
        (function () {
          for (let t = 0; t <= e; t++)
            for (let n = 0; n <= i; n++)
              (l.x = t / e), (l.y = n / i), d.push(l.x, l.y);
        })(),
        (function () {
          for (let t = 1; t <= e; t++)
            for (let e = 1; e <= i; e++) {
              const n = (i + 1) * (t - 1) + (e - 1),
                r = (i + 1) * t + (e - 1),
                s = (i + 1) * t + e,
                a = (i + 1) * (t - 1) + e;
              p.push(n, r, a), p.push(r, s, a);
            }
        })();
    })(),
      this.setIndex(p),
      this.setAttribute("position", new gs(h, 3)),
      this.setAttribute("normal", new gs(u, 3)),
      this.setAttribute("uv", new gs(d, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (t.path = this.parameters.path.toJSON()), t;
  }
  static fromJSON(t) {
    return new cd(
      new cu[t.path.type]().fromJSON(t.path),
      t.tubularSegments,
      t.radius,
      t.radialSegments,
      t.closed
    );
  }
}
class hd extends ws {
  constructor(t = null) {
    if (
      (super(),
      (this.type = "WireframeGeometry"),
      (this.parameters = { geometry: t }),
      null !== t)
    ) {
      const e = [],
        n = new Set(),
        i = new Pi(),
        r = new Pi();
      if (null !== t.index) {
        const s = t.attributes.position,
          a = t.index;
        let o = t.groups;
        0 === o.length &&
          (o = [{ start: 0, count: a.count, materialIndex: 0 }]);
        for (let t = 0, l = o.length; t < l; ++t) {
          const l = o[t],
            c = l.start;
          for (let t = c, o = c + l.count; t < o; t += 3)
            for (let o = 0; o < 3; o++) {
              const l = a.getX(t + o),
                c = a.getX(t + ((o + 1) % 3));
              i.fromBufferAttribute(s, l),
                r.fromBufferAttribute(s, c),
                !0 === ud(i, r, n) &&
                  (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
            }
        }
      } else {
        const s = t.attributes.position;
        for (let t = 0, a = s.count / 3; t < a; t++)
          for (let a = 0; a < 3; a++) {
            const o = 3 * t + a,
              l = 3 * t + ((a + 1) % 3);
            i.fromBufferAttribute(s, o),
              r.fromBufferAttribute(s, l),
              !0 === ud(i, r, n) &&
                (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
          }
      }
      this.setAttribute("position", new gs(e, 3));
    }
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
}
function ud(t, e, n) {
  const i = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,
    r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;
  return !0 !== n.has(i) && !0 !== n.has(r) && (n.add(i), n.add(r), !0);
}
var dd = Object.freeze({
  __proto__: null,
  BoxGeometry: Ws,
  CapsuleGeometry: pu,
  CircleGeometry: mu,
  ConeGeometry: gu,
  CylinderGeometry: fu,
  DodecahedronGeometry: _u,
  EdgesGeometry: bu,
  ExtrudeGeometry: Qu,
  IcosahedronGeometry: ed,
  LatheGeometry: du,
  OctahedronGeometry: nd,
  PlaneGeometry: ma,
  PolyhedronGeometry: vu,
  RingGeometry: id,
  ShapeGeometry: rd,
  SphereGeometry: sd,
  TetrahedronGeometry: ad,
  TorusGeometry: od,
  TorusKnotGeometry: ld,
  TubeGeometry: cd,
  WireframeGeometry: hd,
});
class pd extends $r {
  constructor(t) {
    super(),
      (this.isShadowMaterial = !0),
      (this.type = "ShadowMaterial"),
      (this.color = new Zr(0)),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), (this.fog = t.fog), this;
  }
}
class md extends Zs {
  constructor(t) {
    super(t),
      (this.isRawShaderMaterial = !0),
      (this.type = "RawShaderMaterial");
  }
}
class fd extends $r {
  constructor(t) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Zr(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Zr(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new $n(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new gr()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { STANDARD: "" }),
      this.color.copy(t.color),
      (this.roughness = t.roughness),
      (this.metalness = t.metalness),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.roughnessMap = t.roughnessMap),
      (this.metalnessMap = t.metalnessMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.envMapIntensity = t.envMapIntensity),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
class gd extends fd {
  constructor(t) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new $n(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return jn((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new Zr(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new Zr(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new Zr(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._dispersion = 0),
      (this._iridescence = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(t);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(t) {
    this._anisotropy > 0 != t > 0 && this.version++, (this._anisotropy = t);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, (this._clearcoat = t);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(t) {
    this._iridescence > 0 != t > 0 && this.version++, (this._iridescence = t);
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(t) {
    this._dispersion > 0 != t > 0 && this.version++, (this._dispersion = t);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(t) {
    this._sheen > 0 != t > 0 && this.version++, (this._sheen = t);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, (this._transmission = t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.anisotropy = t.anisotropy),
      (this.anisotropyRotation = t.anisotropyRotation),
      (this.anisotropyMap = t.anisotropyMap),
      (this.clearcoat = t.clearcoat),
      (this.clearcoatMap = t.clearcoatMap),
      (this.clearcoatRoughness = t.clearcoatRoughness),
      (this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = t.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
      (this.dispersion = t.dispersion),
      (this.ior = t.ior),
      (this.iridescence = t.iridescence),
      (this.iridescenceMap = t.iridescenceMap),
      (this.iridescenceIOR = t.iridescenceIOR),
      (this.iridescenceThicknessRange = [...t.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = t.iridescenceThicknessMap),
      (this.sheen = t.sheen),
      this.sheenColor.copy(t.sheenColor),
      (this.sheenColorMap = t.sheenColorMap),
      (this.sheenRoughness = t.sheenRoughness),
      (this.sheenRoughnessMap = t.sheenRoughnessMap),
      (this.transmission = t.transmission),
      (this.transmissionMap = t.transmissionMap),
      (this.thickness = t.thickness),
      (this.thicknessMap = t.thicknessMap),
      (this.attenuationDistance = t.attenuationDistance),
      this.attenuationColor.copy(t.attenuationColor),
      (this.specularIntensity = t.specularIntensity),
      (this.specularIntensityMap = t.specularIntensityMap),
      this.specularColor.copy(t.specularColor),
      (this.specularColorMap = t.specularColorMap),
      this
    );
  }
}
class vd extends $r {
  constructor(t) {
    super(),
      (this.isMeshPhongMaterial = !0),
      (this.type = "MeshPhongMaterial"),
      (this.color = new Zr(16777215)),
      (this.specular = new Zr(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Zr(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new $n(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new gr()),
      (this.combine = Y),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      this.specular.copy(t.specular),
      (this.shininess = t.shininess),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
class _d extends $r {
  constructor(t) {
    super(),
      (this.isMeshToonMaterial = !0),
      (this.defines = { TOON: "" }),
      (this.type = "MeshToonMaterial"),
      (this.color = new Zr(16777215)),
      (this.map = null),
      (this.gradientMap = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Zr(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new $n(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.gradientMap = t.gradientMap),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.alphaMap = t.alphaMap),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.fog = t.fog),
      this
    );
  }
}
class xd extends $r {
  constructor(t) {
    super(),
      (this.isMeshNormalMaterial = !0),
      (this.type = "MeshNormalMaterial"),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new $n(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.flatShading = !1),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.flatShading = t.flatShading),
      this
    );
  }
}
class yd extends $r {
  constructor(t) {
    super(),
      (this.isMeshLambertMaterial = !0),
      (this.type = "MeshLambertMaterial"),
      (this.color = new Zr(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Zr(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new $n(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new gr()),
      (this.combine = Y),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
class Md extends $r {
  constructor(t) {
    super(),
      (this.isMeshMatcapMaterial = !0),
      (this.defines = { MATCAP: "" }),
      (this.type = "MeshMatcapMaterial"),
      (this.color = new Zr(16777215)),
      (this.matcap = null),
      (this.map = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new $n(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { MATCAP: "" }),
      this.color.copy(t.color),
      (this.matcap = t.matcap),
      (this.map = t.map),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.alphaMap = t.alphaMap),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
class Sd extends vh {
  constructor(t) {
    super(),
      (this.isLineDashedMaterial = !0),
      (this.type = "LineDashedMaterial"),
      (this.scale = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.scale = t.scale),
      (this.dashSize = t.dashSize),
      (this.gapSize = t.gapSize),
      this
    );
  }
}
function bd(t, e, n) {
  return !t || (!n && t.constructor === e)
    ? t
    : "number" == typeof e.BYTES_PER_ELEMENT
    ? new e(t)
    : Array.prototype.slice.call(t);
}
function wd(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Td(t) {
  const e = t.length,
    n = new Array(e);
  for (let t = 0; t !== e; ++t) n[t] = t;
  return (
    n.sort(function (e, n) {
      return t[e] - t[n];
    }),
    n
  );
}
function Ed(t, e, n) {
  const i = t.length,
    r = new t.constructor(i);
  for (let s = 0, a = 0; a !== i; ++s) {
    const i = n[s] * e;
    for (let n = 0; n !== e; ++n) r[a++] = t[i + n];
  }
  return r;
}
function Ad(t, e, n, i) {
  let r = 1,
    s = t[0];
  for (; void 0 !== s && void 0 === s[i]; ) s = t[r++];
  if (void 0 === s) return;
  let a = s[i];
  if (void 0 !== a)
    if (Array.isArray(a))
      do {
        (a = s[i]),
          void 0 !== a && (e.push(s.time), n.push.apply(n, a)),
          (s = t[r++]);
      } while (void 0 !== s);
    else if (void 0 !== a.toArray)
      do {
        (a = s[i]),
          void 0 !== a && (e.push(s.time), a.toArray(n, n.length)),
          (s = t[r++]);
      } while (void 0 !== s);
    else
      do {
        (a = s[i]), void 0 !== a && (e.push(s.time), n.push(a)), (s = t[r++]);
      } while (void 0 !== s);
}
const Rd = {
  convertArray: bd,
  isTypedArray: wd,
  getKeyframeOrder: Td,
  sortedArray: Ed,
  flattenJSON: Ad,
  subclip: function (t, e, n, i, r = 30) {
    const s = t.clone();
    s.name = e;
    const a = [];
    for (let t = 0; t < s.tracks.length; ++t) {
      const e = s.tracks[t],
        o = e.getValueSize(),
        l = [],
        c = [];
      for (let t = 0; t < e.times.length; ++t) {
        const s = e.times[t] * r;
        if (!(s < n || s >= i)) {
          l.push(e.times[t]);
          for (let n = 0; n < o; ++n) c.push(e.values[t * o + n]);
        }
      }
      0 !== l.length &&
        ((e.times = bd(l, e.times.constructor)),
        (e.values = bd(c, e.values.constructor)),
        a.push(e));
    }
    s.tracks = a;
    let o = 1 / 0;
    for (let t = 0; t < s.tracks.length; ++t)
      o > s.tracks[t].times[0] && (o = s.tracks[t].times[0]);
    for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * o);
    return s.resetDuration(), s;
  },
  makeClipAdditive: function (t, e = 0, n = t, i = 30) {
    i <= 0 && (i = 30);
    const r = n.tracks.length,
      s = e / i;
    for (let e = 0; e < r; ++e) {
      const i = n.tracks[e],
        r = i.ValueTypeName;
      if ("bool" === r || "string" === r) continue;
      const a = t.tracks.find(function (t) {
        return t.name === i.name && t.ValueTypeName === r;
      });
      if (void 0 === a) continue;
      let o = 0;
      const l = i.getValueSize();
      i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (o = l / 3);
      let c = 0;
      const h = a.getValueSize();
      a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (c = h / 3);
      const u = i.times.length - 1;
      let d;
      if (s <= i.times[0]) {
        const t = o,
          e = l - o;
        d = i.values.slice(t, e);
      } else if (s >= i.times[u]) {
        const t = u * l + o,
          e = t + l - o;
        d = i.values.slice(t, e);
      } else {
        const t = i.createInterpolant(),
          e = o,
          n = l - o;
        t.evaluate(s), (d = t.resultBuffer.slice(e, n));
      }
      if ("quaternion" === r) {
        new Ci().fromArray(d).normalize().conjugate().toArray(d);
      }
      const p = a.times.length;
      for (let t = 0; t < p; ++t) {
        const e = t * h + c;
        if ("quaternion" === r)
          Ci.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
        else {
          const t = h - 2 * c;
          for (let n = 0; n < t; ++n) a.values[e + n] -= d[n];
        }
      }
    }
    return (t.blendMode = ze), t;
  },
};
class Cd {
  constructor(t, e, n, i) {
    (this.parameterPositions = t),
      (this._cachedIndex = 0),
      (this.resultBuffer = void 0 !== i ? i : new e.constructor(n)),
      (this.sampleValues = e),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(t) {
    const e = this.parameterPositions;
    let n = this._cachedIndex,
      i = e[n],
      r = e[n - 1];
    t: {
      e: {
        let s;
        n: {
          i: if (!(t < i)) {
            for (let s = n + 2; ; ) {
              if (void 0 === i) {
                if (t < r) break i;
                return (
                  (n = e.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === s) break;
              if (((r = i), (i = e[++n]), t < i)) break e;
            }
            s = e.length;
            break n;
          }
          if (t >= r) break t;
          {
            const a = e[1];
            t < a && ((n = 2), (r = a));
            for (let s = n - 2; ; ) {
              if (void 0 === r)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === s) break;
              if (((i = r), (r = e[--n - 1]), t >= r)) break e;
            }
            (s = n), (n = 0);
          }
        }
        for (; n < s; ) {
          const i = (n + s) >>> 1;
          t < e[i] ? (s = i) : (n = i + 1);
        }
        if (((i = e[n]), (r = e[n - 1]), void 0 === r))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (void 0 === i)
          return (
            (n = e.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, t, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(t) {
    const e = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = t * i;
    for (let t = 0; t !== i; ++t) e[t] = n[r + t];
    return e;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class Pd extends Cd {
  constructor(t, e, n, i) {
    super(t, e, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: De, endingEnd: De });
  }
  intervalChanged_(t, e, n) {
    const i = this.parameterPositions;
    let r = t - 2,
      s = t + 1,
      a = i[r],
      o = i[s];
    if (void 0 === a)
      switch (this.getSettings_().endingStart) {
        case Oe:
          (r = t), (a = 2 * e - n);
          break;
        case Fe:
          (r = i.length - 2), (a = e + i[r] - i[r + 1]);
          break;
        default:
          (r = t), (a = n);
      }
    if (void 0 === o)
      switch (this.getSettings_().endingEnd) {
        case Oe:
          (s = t), (o = 2 * n - e);
          break;
        case Fe:
          (s = 1), (o = n + i[1] - i[0]);
          break;
        default:
          (s = t - 1), (o = e);
      }
    const l = 0.5 * (n - e),
      c = this.valueSize;
    (this._weightPrev = l / (e - a)),
      (this._weightNext = l / (o - n)),
      (this._offsetPrev = r * c),
      (this._offsetNext = s * c);
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer,
      s = this.sampleValues,
      a = this.valueSize,
      o = t * a,
      l = o - a,
      c = this._offsetPrev,
      h = this._offsetNext,
      u = this._weightPrev,
      d = this._weightNext,
      p = (n - e) / (i - e),
      m = p * p,
      f = m * p,
      g = -u * f + 2 * u * m - u * p,
      v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1,
      _ = (-1 - d) * f + (1.5 + d) * m + 0.5 * p,
      x = d * f - d * m;
    for (let t = 0; t !== a; ++t)
      r[t] = g * s[c + t] + v * s[l + t] + _ * s[o + t] + x * s[h + t];
    return r;
  }
}
class Id extends Cd {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer,
      s = this.sampleValues,
      a = this.valueSize,
      o = t * a,
      l = o - a,
      c = (n - e) / (i - e),
      h = 1 - c;
    for (let t = 0; t !== a; ++t) r[t] = s[l + t] * h + s[o + t] * c;
    return r;
  }
}
class Ld extends Cd {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t) {
    return this.copySampleValue_(t - 1);
  }
}
class Ud {
  constructor(t, e, n, i) {
    if (void 0 === t)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === e || 0 === e.length)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    (this.name = t),
      (this.times = bd(e, this.TimeBufferType)),
      (this.values = bd(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(t) {
    const e = t.constructor;
    let n;
    if (e.toJSON !== this.toJSON) n = e.toJSON(t);
    else {
      n = {
        name: t.name,
        times: bd(t.times, Array),
        values: bd(t.values, Array),
      };
      const e = t.getInterpolation();
      e !== t.DefaultInterpolation && (n.interpolation = e);
    }
    return (n.type = t.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(t) {
    return new Ld(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodLinear(t) {
    return new Id(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodSmooth(t) {
    return new Pd(this.times, this.values, this.getValueSize(), t);
  }
  setInterpolation(t) {
    let e;
    switch (t) {
      case Le:
        e = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ue:
        e = this.InterpolantFactoryMethodLinear;
        break;
      case Ne:
        e = this.InterpolantFactoryMethodSmooth;
    }
    if (void 0 === e) {
      const e =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (void 0 === this.createInterpolant) {
        if (t === this.DefaultInterpolation) throw new Error(e);
        this.setInterpolation(this.DefaultInterpolation);
      }
      return console.warn("THREE.KeyframeTrack:", e), this;
    }
    return (this.createInterpolant = e), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Le;
      case this.InterpolantFactoryMethodLinear:
        return Ue;
      case this.InterpolantFactoryMethodSmooth:
        return Ne;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(t) {
    if (0 !== t) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
    }
    return this;
  }
  scale(t) {
    if (1 !== t) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
    }
    return this;
  }
  trim(t, e) {
    const n = this.times,
      i = n.length;
    let r = 0,
      s = i - 1;
    for (; r !== i && n[r] < t; ) ++r;
    for (; -1 !== s && n[s] > e; ) --s;
    if ((++s, 0 !== r || s !== i)) {
      r >= s && ((s = Math.max(s, 1)), (r = s - 1));
      const t = this.getValueSize();
      (this.times = n.slice(r, s)),
        (this.values = this.values.slice(r * t, s * t));
    }
    return this;
  }
  validate() {
    let t = !0;
    const e = this.getValueSize();
    e - Math.floor(e) != 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (t = !1));
    const n = this.times,
      i = this.values,
      r = n.length;
    0 === r &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (t = !1));
    let s = null;
    for (let e = 0; e !== r; e++) {
      const i = n[e];
      if ("number" == typeof i && isNaN(i)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          e,
          i
        ),
          (t = !1);
        break;
      }
      if (null !== s && s > i) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s),
          (t = !1);
        break;
      }
      s = i;
    }
    if (void 0 !== i && wd(i))
      for (let e = 0, n = i.length; e !== n; ++e) {
        const n = i[e];
        if (isNaN(n)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            e,
            n
          ),
            (t = !1);
          break;
        }
      }
    return t;
  }
  optimize() {
    const t = this.times.slice(),
      e = this.values.slice(),
      n = this.getValueSize(),
      i = this.getInterpolation() === Ne,
      r = t.length - 1;
    let s = 1;
    for (let a = 1; a < r; ++a) {
      let r = !1;
      const o = t[a];
      if (o !== t[a + 1] && (1 !== a || o !== t[0]))
        if (i) r = !0;
        else {
          const t = a * n,
            i = t - n,
            s = t + n;
          for (let a = 0; a !== n; ++a) {
            const n = e[t + a];
            if (n !== e[i + a] || n !== e[s + a]) {
              r = !0;
              break;
            }
          }
        }
      if (r) {
        if (a !== s) {
          t[s] = t[a];
          const i = a * n,
            r = s * n;
          for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
        }
        ++s;
      }
    }
    if (r > 0) {
      t[s] = t[r];
      for (let t = r * n, i = s * n, a = 0; a !== n; ++a) e[i + a] = e[t + a];
      ++s;
    }
    return (
      s !== t.length
        ? ((this.times = t.slice(0, s)), (this.values = e.slice(0, s * n)))
        : ((this.times = t), (this.values = e)),
      this
    );
  }
  clone() {
    const t = this.times.slice(),
      e = this.values.slice(),
      n = new (0, this.constructor)(this.name, t, e);
    return (n.createInterpolant = this.createInterpolant), n;
  }
}
(Ud.prototype.TimeBufferType = Float32Array),
  (Ud.prototype.ValueBufferType = Float32Array),
  (Ud.prototype.DefaultInterpolation = Ue);
class Nd extends Ud {
  constructor(t, e, n) {
    super(t, e, n);
  }
}
(Nd.prototype.ValueTypeName = "bool"),
  (Nd.prototype.ValueBufferType = Array),
  (Nd.prototype.DefaultInterpolation = Le),
  (Nd.prototype.InterpolantFactoryMethodLinear = void 0),
  (Nd.prototype.InterpolantFactoryMethodSmooth = void 0);
class Dd extends Ud {}
Dd.prototype.ValueTypeName = "color";
class Od extends Ud {}
Od.prototype.ValueTypeName = "number";
class Fd extends Cd {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer,
      s = this.sampleValues,
      a = this.valueSize,
      o = (n - e) / (i - e);
    let l = t * a;
    for (let t = l + a; l !== t; l += 4) Ci.slerpFlat(r, 0, s, l - a, s, l, o);
    return r;
  }
}
class Bd extends Ud {
  InterpolantFactoryMethodLinear(t) {
    return new Fd(this.times, this.values, this.getValueSize(), t);
  }
}
(Bd.prototype.ValueTypeName = "quaternion"),
  (Bd.prototype.InterpolantFactoryMethodSmooth = void 0);
class zd extends Ud {
  constructor(t, e, n) {
    super(t, e, n);
  }
}
(zd.prototype.ValueTypeName = "string"),
  (zd.prototype.ValueBufferType = Array),
  (zd.prototype.DefaultInterpolation = Le),
  (zd.prototype.InterpolantFactoryMethodLinear = void 0),
  (zd.prototype.InterpolantFactoryMethodSmooth = void 0);
class kd extends Ud {}
kd.prototype.ValueTypeName = "vector";
class Vd {
  constructor(t = "", e = -1, n = [], i = 2500) {
    (this.name = t),
      (this.tracks = n),
      (this.duration = e),
      (this.blendMode = i),
      (this.uuid = Xn()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(t) {
    const e = [],
      n = t.tracks,
      i = 1 / (t.fps || 1);
    for (let t = 0, r = n.length; t !== r; ++t) e.push(Hd(n[t]).scale(i));
    const r = new this(t.name, t.duration, e, t.blendMode);
    return (r.uuid = t.uuid), r;
  }
  static toJSON(t) {
    const e = [],
      n = t.tracks,
      i = {
        name: t.name,
        duration: t.duration,
        tracks: e,
        uuid: t.uuid,
        blendMode: t.blendMode,
      };
    for (let t = 0, i = n.length; t !== i; ++t) e.push(Ud.toJSON(n[t]));
    return i;
  }
  static CreateFromMorphTargetSequence(t, e, n, i) {
    const r = e.length,
      s = [];
    for (let t = 0; t < r; t++) {
      let a = [],
        o = [];
      a.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
      const l = Td(a);
      (a = Ed(a, 1, l)),
        (o = Ed(o, 1, l)),
        i || 0 !== a[0] || (a.push(r), o.push(o[0])),
        s.push(
          new Od(".morphTargetInfluences[" + e[t].name + "]", a, o).scale(1 / n)
        );
    }
    return new this(t, -1, s);
  }
  static findByName(t, e) {
    let n = t;
    if (!Array.isArray(t)) {
      const e = t;
      n = (e.geometry && e.geometry.animations) || e.animations;
    }
    for (let t = 0; t < n.length; t++) if (n[t].name === e) return n[t];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(t, e, n) {
    const i = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let e = 0, n = t.length; e < n; e++) {
      const n = t[e],
        s = n.name.match(r);
      if (s && s.length > 1) {
        const t = s[1];
        let e = i[t];
        e || (i[t] = e = []), e.push(n);
      }
    }
    const s = [];
    for (const t in i)
      s.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
    return s;
  }
  static parseAnimation(t, e) {
    if (!t)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (t, e, n, i, r) {
        if (0 !== n.length) {
          const s = [],
            a = [];
          Ad(n, s, a, i), 0 !== s.length && r.push(new t(e, s, a));
        }
      },
      i = [],
      r = t.name || "default",
      s = t.fps || 30,
      a = t.blendMode;
    let o = t.length || -1;
    const l = t.hierarchy || [];
    for (let t = 0; t < l.length; t++) {
      const r = l[t].keys;
      if (r && 0 !== r.length)
        if (r[0].morphTargets) {
          const t = {};
          let e;
          for (e = 0; e < r.length; e++)
            if (r[e].morphTargets)
              for (let n = 0; n < r[e].morphTargets.length; n++)
                t[r[e].morphTargets[n]] = -1;
          for (const n in t) {
            const t = [],
              s = [];
            for (let i = 0; i !== r[e].morphTargets.length; ++i) {
              const i = r[e];
              t.push(i.time), s.push(i.morphTarget === n ? 1 : 0);
            }
            i.push(new Od(".morphTargetInfluence[" + n + "]", t, s));
          }
          o = t.length * s;
        } else {
          const s = ".bones[" + e[t].name + "]";
          n(kd, s + ".position", r, "pos", i),
            n(Bd, s + ".quaternion", r, "rot", i),
            n(kd, s + ".scale", r, "scl", i);
        }
    }
    if (0 === i.length) return null;
    return new this(r, o, i, a);
  }
  resetDuration() {
    let t = 0;
    for (let e = 0, n = this.tracks.length; e !== n; ++e) {
      const n = this.tracks[e];
      t = Math.max(t, n.times[n.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].trim(0, this.duration);
    return this;
  }
  validate() {
    let t = !0;
    for (let e = 0; e < this.tracks.length; e++)
      t = t && this.tracks[e].validate();
    return t;
  }
  optimize() {
    for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
    return this;
  }
  clone() {
    const t = [];
    for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
    return new this.constructor(this.name, this.duration, t, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Hd(t) {
  if (void 0 === t.type)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = (function (t) {
    switch (t.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return Od;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return kd;
      case "color":
        return Dd;
      case "quaternion":
        return Bd;
      case "bool":
      case "boolean":
        return Nd;
      case "string":
        return zd;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
  })(t.type);
  if (void 0 === t.times) {
    const e = [],
      n = [];
    Ad(t.keys, e, n, "value"), (t.times = e), (t.values = n);
  }
  return void 0 !== e.parse
    ? e.parse(t)
    : new e(t.name, t.times, t.values, t.interpolation);
}
const Gd = {
  enabled: !1,
  files: {},
  add: function (t, e) {
    !1 !== this.enabled && (this.files[t] = e);
  },
  get: function (t) {
    if (!1 !== this.enabled) return this.files[t];
  },
  remove: function (t) {
    delete this.files[t];
  },
  clear: function () {
    this.files = {};
  },
};
class Wd {
  constructor(t, e, n) {
    const i = this;
    let r,
      s = !1,
      a = 0,
      o = 0;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = t),
      (this.onProgress = e),
      (this.onError = n),
      (this.itemStart = function (t) {
        o++, !1 === s && void 0 !== i.onStart && i.onStart(t, a, o), (s = !0);
      }),
      (this.itemEnd = function (t) {
        a++,
          void 0 !== i.onProgress && i.onProgress(t, a, o),
          a === o && ((s = !1), void 0 !== i.onLoad && i.onLoad());
      }),
      (this.itemError = function (t) {
        void 0 !== i.onError && i.onError(t);
      }),
      (this.resolveURL = function (t) {
        return r ? r(t) : t;
      }),
      (this.setURLModifier = function (t) {
        return (r = t), this;
      }),
      (this.addHandler = function (t, e) {
        return l.push(t, e), this;
      }),
      (this.removeHandler = function (t) {
        const e = l.indexOf(t);
        return -1 !== e && l.splice(e, 2), this;
      }),
      (this.getHandler = function (t) {
        for (let e = 0, n = l.length; e < n; e += 2) {
          const n = l[e],
            i = l[e + 1];
          if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
        }
        return null;
      });
  }
}
const Xd = new Wd();
class jd {
  constructor(t) {
    (this.manager = void 0 !== t ? t : Xd),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(t, e) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(t, i, e, r);
    });
  }
  parse() {}
  setCrossOrigin(t) {
    return (this.crossOrigin = t), this;
  }
  setWithCredentials(t) {
    return (this.withCredentials = t), this;
  }
  setPath(t) {
    return (this.path = t), this;
  }
  setResourcePath(t) {
    return (this.resourcePath = t), this;
  }
  setRequestHeader(t) {
    return (this.requestHeader = t), this;
  }
}
jd.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const qd = {};
class Yd extends Error {
  constructor(t, e) {
    super(t), (this.response = e);
  }
}
class Zd extends jd {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    void 0 === t && (t = ""),
      void 0 !== this.path && (t = this.path + t),
      (t = this.manager.resolveURL(t));
    const r = Gd.get(t);
    if (void 0 !== r)
      return (
        this.manager.itemStart(t),
        setTimeout(() => {
          e && e(r), this.manager.itemEnd(t);
        }, 0),
        r
      );
    if (void 0 !== qd[t])
      return void qd[t].push({ onLoad: e, onProgress: n, onError: i });
    (qd[t] = []), qd[t].push({ onLoad: e, onProgress: n, onError: i });
    const s = new Request(t, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      a = this.mimeType,
      o = this.responseType;
    fetch(s)
      .then((e) => {
        if (200 === e.status || 0 === e.status) {
          if (
            (0 === e.status &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            "undefined" == typeof ReadableStream ||
              void 0 === e.body ||
              void 0 === e.body.getReader)
          )
            return e;
          const n = qd[t],
            i = e.body.getReader(),
            r = e.headers.get("X-File-Size") || e.headers.get("Content-Length"),
            s = r ? parseInt(r) : 0,
            a = 0 !== s;
          let o = 0;
          const l = new ReadableStream({
            start(t) {
              !(function e() {
                i.read().then(
                  ({ done: i, value: r }) => {
                    if (i) t.close();
                    else {
                      o += r.byteLength;
                      const i = new ProgressEvent("progress", {
                        lengthComputable: a,
                        loaded: o,
                        total: s,
                      });
                      for (let t = 0, e = n.length; t < e; t++) {
                        const e = n[t];
                        e.onProgress && e.onProgress(i);
                      }
                      t.enqueue(r), e();
                    }
                  },
                  (e) => {
                    t.error(e);
                  }
                );
              })();
            },
          });
          return new Response(l);
        }
        throw new Yd(
          `fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,
          e
        );
      })
      .then((t) => {
        switch (o) {
          case "arraybuffer":
            return t.arrayBuffer();
          case "blob":
            return t.blob();
          case "document":
            return t.text().then((t) => new DOMParser().parseFromString(t, a));
          case "json":
            return t.json();
          default:
            if (void 0 === a) return t.text();
            {
              const e = /charset="?([^;"\s]*)"?/i.exec(a),
                n = e && e[1] ? e[1].toLowerCase() : void 0,
                i = new TextDecoder(n);
              return t.arrayBuffer().then((t) => i.decode(t));
            }
        }
      })
      .then((e) => {
        Gd.add(t, e);
        const n = qd[t];
        delete qd[t];
        for (let t = 0, i = n.length; t < i; t++) {
          const i = n[t];
          i.onLoad && i.onLoad(e);
        }
      })
      .catch((e) => {
        const n = qd[t];
        if (void 0 === n) throw (this.manager.itemError(t), e);
        delete qd[t];
        for (let t = 0, i = n.length; t < i; t++) {
          const i = n[t];
          i.onError && i.onError(e);
        }
        this.manager.itemError(t);
      })
      .finally(() => {
        this.manager.itemEnd(t);
      }),
      this.manager.itemStart(t);
  }
  setResponseType(t) {
    return (this.responseType = t), this;
  }
  setMimeType(t) {
    return (this.mimeType = t), this;
  }
}
class Jd extends jd {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this,
      s = new Zd(this.manager);
    s.setPath(this.path),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        t,
        function (n) {
          try {
            e(r.parse(JSON.parse(n)));
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        },
        n,
        i
      );
  }
  parse(t) {
    const e = [];
    for (let n = 0; n < t.length; n++) {
      const i = Vd.parse(t[n]);
      e.push(i);
    }
    return e;
  }
}
class Kd extends jd {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this,
      s = [],
      a = new kh(),
      o = new Zd(this.manager);
    o.setPath(this.path),
      o.setResponseType("arraybuffer"),
      o.setRequestHeader(this.requestHeader),
      o.setWithCredentials(r.withCredentials);
    let l = 0;
    function c(c) {
      o.load(
        t[c],
        function (t) {
          const n = r.parse(t, !0);
          (s[c] = {
            width: n.width,
            height: n.height,
            format: n.format,
            mipmaps: n.mipmaps,
          }),
            (l += 1),
            6 === l &&
              (1 === n.mipmapCount && (a.minFilter = Mt),
              (a.image = s),
              (a.format = n.format),
              (a.needsUpdate = !0),
              e && e(a));
        },
        n,
        i
      );
    }
    if (Array.isArray(t)) for (let e = 0, n = t.length; e < n; ++e) c(e);
    else
      o.load(
        t,
        function (t) {
          const n = r.parse(t, !0);
          if (n.isCubemap) {
            const t = n.mipmaps.length / n.mipmapCount;
            for (let e = 0; e < t; e++) {
              s[e] = { mipmaps: [] };
              for (let t = 0; t < n.mipmapCount; t++)
                s[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t]),
                  (s[e].format = n.format),
                  (s[e].width = n.width),
                  (s[e].height = n.height);
            }
            a.image = s;
          } else
            (a.image.width = n.width),
              (a.image.height = n.height),
              (a.mipmaps = n.mipmaps);
          1 === n.mipmapCount && (a.minFilter = Mt),
            (a.format = n.format),
            (a.needsUpdate = !0),
            e && e(a);
        },
        n,
        i
      );
    return a;
  }
}
class $d extends jd {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    void 0 !== this.path && (t = this.path + t),
      (t = this.manager.resolveURL(t));
    const r = this,
      s = Gd.get(t);
    if (void 0 !== s)
      return (
        r.manager.itemStart(t),
        setTimeout(function () {
          e && e(s), r.manager.itemEnd(t);
        }, 0),
        s
      );
    const a = ri("img");
    function o() {
      c(), Gd.add(t, this), e && e(this), r.manager.itemEnd(t);
    }
    function l(e) {
      c(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
    }
    function c() {
      a.removeEventListener("load", o, !1),
        a.removeEventListener("error", l, !1);
    }
    return (
      a.addEventListener("load", o, !1),
      a.addEventListener("error", l, !1),
      "data:" !== t.slice(0, 5) &&
        void 0 !== this.crossOrigin &&
        (a.crossOrigin = this.crossOrigin),
      r.manager.itemStart(t),
      (a.src = t),
      a
    );
  }
}
class Qd extends jd {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = new ia();
    r.colorSpace = Ye;
    const s = new $d(this.manager);
    s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
    let a = 0;
    function o(n) {
      s.load(
        t[n],
        function (t) {
          (r.images[n] = t), a++, 6 === a && ((r.needsUpdate = !0), e && e(r));
        },
        void 0,
        i
      );
    }
    for (let e = 0; e < t.length; ++e) o(e);
    return r;
  }
}
class tp extends jd {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this,
      s = new zc(),
      a = new Zd(this.manager);
    return (
      a.setResponseType("arraybuffer"),
      a.setRequestHeader(this.requestHeader),
      a.setPath(this.path),
      a.setWithCredentials(r.withCredentials),
      a.load(
        t,
        function (t) {
          let n;
          try {
            n = r.parse(t);
          } catch (t) {
            if (void 0 === i) return void console.error(t);
            i(t);
          }
          void 0 !== n.image
            ? (s.image = n.image)
            : void 0 !== n.data &&
              ((s.image.width = n.width),
              (s.image.height = n.height),
              (s.image.data = n.data)),
            (s.wrapS = void 0 !== n.wrapS ? n.wrapS : mt),
            (s.wrapT = void 0 !== n.wrapT ? n.wrapT : mt),
            (s.magFilter = void 0 !== n.magFilter ? n.magFilter : Mt),
            (s.minFilter = void 0 !== n.minFilter ? n.minFilter : Mt),
            (s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1),
            void 0 !== n.colorSpace && (s.colorSpace = n.colorSpace),
            void 0 !== n.flipY && (s.flipY = n.flipY),
            void 0 !== n.format && (s.format = n.format),
            void 0 !== n.type && (s.type = n.type),
            void 0 !== n.mipmaps &&
              ((s.mipmaps = n.mipmaps), (s.minFilter = wt)),
            1 === n.mipmapCount && (s.minFilter = Mt),
            void 0 !== n.generateMipmaps &&
              (s.generateMipmaps = n.generateMipmaps),
            (s.needsUpdate = !0),
            e && e(s, n);
        },
        n,
        i
      ),
      s
    );
  }
}
class ep extends jd {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = new Mi(),
      s = new $d(this.manager);
    return (
      s.setCrossOrigin(this.crossOrigin),
      s.setPath(this.path),
      s.load(
        t,
        function (t) {
          (r.image = t), (r.needsUpdate = !0), void 0 !== e && e(r);
        },
        n,
        i
      ),
      r
    );
  }
}
class np extends Ur {
  constructor(t, e = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Zr(t)),
      (this.intensity = e);
  }
  dispose() {}
  copy(t, e) {
    return (
      super.copy(t, e),
      this.color.copy(t.color),
      (this.intensity = t.intensity),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.color = this.color.getHex()),
      (e.object.intensity = this.intensity),
      void 0 !== this.groundColor &&
        (e.object.groundColor = this.groundColor.getHex()),
      void 0 !== this.distance && (e.object.distance = this.distance),
      void 0 !== this.angle && (e.object.angle = this.angle),
      void 0 !== this.decay && (e.object.decay = this.decay),
      void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
      void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
      void 0 !== this.target && (e.object.target = this.target.uuid),
      e
    );
  }
}
class ip extends np {
  constructor(t, e, n) {
    super(t, n),
      (this.isHemisphereLight = !0),
      (this.type = "HemisphereLight"),
      this.position.copy(Ur.DEFAULT_UP),
      this.updateMatrix(),
      (this.groundColor = new Zr(e));
  }
  copy(t, e) {
    return super.copy(t, e), this.groundColor.copy(t.groundColor), this;
  }
}
const rp = new ar(),
  sp = new Pi(),
  ap = new Pi();
class op {
  constructor(t) {
    (this.camera = t),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new $n(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new ar()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new ua()),
      (this._frameExtents = new $n(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Si(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera,
      n = this.matrix;
    sp.setFromMatrixPosition(t.matrixWorld),
      e.position.copy(sp),
      ap.setFromMatrixPosition(t.target.matrixWorld),
      e.lookAt(ap),
      e.updateMatrixWorld(),
      rp.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(rp),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(rp);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return (
      (this.camera = t.camera.clone()),
      (this.intensity = t.intensity),
      (this.bias = t.bias),
      (this.radius = t.radius),
      this.mapSize.copy(t.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return (
      1 !== this.intensity && (t.intensity = this.intensity),
      0 !== this.bias && (t.bias = this.bias),
      0 !== this.normalBias && (t.normalBias = this.normalBias),
      1 !== this.radius && (t.radius = this.radius),
      (512 === this.mapSize.x && 512 === this.mapSize.y) ||
        (t.mapSize = this.mapSize.toArray()),
      (t.camera = this.camera.toJSON(!1).object),
      delete t.camera.matrix,
      t
    );
  }
}
class lp extends op {
  constructor() {
    super(new ta(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(t) {
    const e = this.camera,
      n = 2 * Wn * t.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      r = t.distance || e.far;
    (n === e.fov && i === e.aspect && r === e.far) ||
      ((e.fov = n), (e.aspect = i), (e.far = r), e.updateProjectionMatrix()),
      super.updateMatrices(t);
  }
  copy(t) {
    return super.copy(t), (this.focus = t.focus), this;
  }
}
class cp extends np {
  constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 2) {
    super(t, e),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(Ur.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new Ur()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = r),
      (this.decay = s),
      (this.map = null),
      (this.shadow = new lp());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.distance = t.distance),
      (this.angle = t.angle),
      (this.penumbra = t.penumbra),
      (this.decay = t.decay),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
const hp = new ar(),
  up = new Pi(),
  dp = new Pi();
class pp extends op {
  constructor() {
    super(new ta(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new $n(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Si(2, 1, 1, 1),
        new Si(0, 1, 1, 1),
        new Si(3, 1, 1, 1),
        new Si(1, 1, 1, 1),
        new Si(3, 0, 1, 1),
        new Si(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new Pi(1, 0, 0),
        new Pi(-1, 0, 0),
        new Pi(0, 0, 1),
        new Pi(0, 0, -1),
        new Pi(0, 1, 0),
        new Pi(0, -1, 0),
      ]),
      (this._cubeUps = [
        new Pi(0, 1, 0),
        new Pi(0, 1, 0),
        new Pi(0, 1, 0),
        new Pi(0, 1, 0),
        new Pi(0, 0, 1),
        new Pi(0, 0, -1),
      ]);
  }
  updateMatrices(t, e = 0) {
    const n = this.camera,
      i = this.matrix,
      r = t.distance || n.far;
    r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
      up.setFromMatrixPosition(t.matrixWorld),
      n.position.copy(up),
      dp.copy(n.position),
      dp.add(this._cubeDirections[e]),
      n.up.copy(this._cubeUps[e]),
      n.lookAt(dp),
      n.updateMatrixWorld(),
      i.makeTranslation(-up.x, -up.y, -up.z),
      hp.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(hp);
  }
}
class mp extends np {
  constructor(t, e, n = 0, i = 2) {
    super(t, e),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new pp());
  }
  get power() {
    return 4 * this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.distance = t.distance),
      (this.decay = t.decay),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
class fp extends op {
  constructor() {
    super(new Aa(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class gp extends np {
  constructor(t, e) {
    super(t, e),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(Ur.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new Ur()),
      (this.shadow = new fp());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
class vp extends np {
  constructor(t, e) {
    super(t, e), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class _p extends np {
  constructor(t, e, n = 10, i = 10) {
    super(t, e),
      (this.isRectAreaLight = !0),
      (this.type = "RectAreaLight"),
      (this.width = n),
      (this.height = i);
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(t) {
    this.intensity = t / (this.width * this.height * Math.PI);
  }
  copy(t) {
    return (
      super.copy(t), (this.width = t.width), (this.height = t.height), this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (e.object.width = this.width), (e.object.height = this.height), e;
  }
}
class xp {
  constructor() {
    (this.isSphericalHarmonics3 = !0), (this.coefficients = []);
    for (let t = 0; t < 9; t++) this.coefficients.push(new Pi());
  }
  set(t) {
    for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
    return this;
  }
  zero() {
    for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
    return this;
  }
  getAt(t, e) {
    const n = t.x,
      i = t.y,
      r = t.z,
      s = this.coefficients;
    return (
      e.copy(s[0]).multiplyScalar(0.282095),
      e.addScaledVector(s[1], 0.488603 * i),
      e.addScaledVector(s[2], 0.488603 * r),
      e.addScaledVector(s[3], 0.488603 * n),
      e.addScaledVector(s[4], n * i * 1.092548),
      e.addScaledVector(s[5], i * r * 1.092548),
      e.addScaledVector(s[6], 0.315392 * (3 * r * r - 1)),
      e.addScaledVector(s[7], n * r * 1.092548),
      e.addScaledVector(s[8], 0.546274 * (n * n - i * i)),
      e
    );
  }
  getIrradianceAt(t, e) {
    const n = t.x,
      i = t.y,
      r = t.z,
      s = this.coefficients;
    return (
      e.copy(s[0]).multiplyScalar(0.886227),
      e.addScaledVector(s[1], 1.023328 * i),
      e.addScaledVector(s[2], 1.023328 * r),
      e.addScaledVector(s[3], 1.023328 * n),
      e.addScaledVector(s[4], 0.858086 * n * i),
      e.addScaledVector(s[5], 0.858086 * i * r),
      e.addScaledVector(s[6], 0.743125 * r * r - 0.247708),
      e.addScaledVector(s[7], 0.858086 * n * r),
      e.addScaledVector(s[8], 0.429043 * (n * n - i * i)),
      e
    );
  }
  add(t) {
    for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
    return this;
  }
  addScaledSH(t, e) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(t.coefficients[n], e);
    return this;
  }
  scale(t) {
    for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
    return this;
  }
  lerp(t, e) {
    for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
    return this;
  }
  equals(t) {
    for (let e = 0; e < 9; e++)
      if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
    return !0;
  }
  copy(t) {
    return this.set(t.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(t, e = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
    return t;
  }
  static getBasisAt(t, e) {
    const n = t.x,
      i = t.y,
      r = t.z;
    (e[0] = 0.282095),
      (e[1] = 0.488603 * i),
      (e[2] = 0.488603 * r),
      (e[3] = 0.488603 * n),
      (e[4] = 1.092548 * n * i),
      (e[5] = 1.092548 * i * r),
      (e[6] = 0.315392 * (3 * r * r - 1)),
      (e[7] = 1.092548 * n * r),
      (e[8] = 0.546274 * (n * n - i * i));
  }
}
class yp extends np {
  constructor(t = new xp(), e = 1) {
    super(void 0, e), (this.isLightProbe = !0), (this.sh = t);
  }
  copy(t) {
    return super.copy(t), this.sh.copy(t.sh), this;
  }
  fromJSON(t) {
    return (this.intensity = t.intensity), this.sh.fromArray(t.sh), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (e.object.sh = this.sh.toArray()), e;
  }
}
class Mp extends jd {
  constructor(t) {
    super(t), (this.textures = {});
  }
  load(t, e, n, i) {
    const r = this,
      s = new Zd(r.manager);
    s.setPath(r.path),
      s.setRequestHeader(r.requestHeader),
      s.setWithCredentials(r.withCredentials),
      s.load(
        t,
        function (n) {
          try {
            e(r.parse(JSON.parse(n)));
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        },
        n,
        i
      );
  }
  parse(t) {
    const e = this.textures;
    function n(t) {
      return (
        void 0 === e[t] &&
          console.warn("THREE.MaterialLoader: Undefined texture", t),
        e[t]
      );
    }
    const i = Mp.createMaterialFromType(t.type);
    if (
      (void 0 !== t.uuid && (i.uuid = t.uuid),
      void 0 !== t.name && (i.name = t.name),
      void 0 !== t.color && void 0 !== i.color && i.color.setHex(t.color),
      void 0 !== t.roughness && (i.roughness = t.roughness),
      void 0 !== t.metalness && (i.metalness = t.metalness),
      void 0 !== t.sheen && (i.sheen = t.sheen),
      void 0 !== t.sheenColor && (i.sheenColor = new Zr().setHex(t.sheenColor)),
      void 0 !== t.sheenRoughness && (i.sheenRoughness = t.sheenRoughness),
      void 0 !== t.emissive &&
        void 0 !== i.emissive &&
        i.emissive.setHex(t.emissive),
      void 0 !== t.specular &&
        void 0 !== i.specular &&
        i.specular.setHex(t.specular),
      void 0 !== t.specularIntensity &&
        (i.specularIntensity = t.specularIntensity),
      void 0 !== t.specularColor &&
        void 0 !== i.specularColor &&
        i.specularColor.setHex(t.specularColor),
      void 0 !== t.shininess && (i.shininess = t.shininess),
      void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat),
      void 0 !== t.clearcoatRoughness &&
        (i.clearcoatRoughness = t.clearcoatRoughness),
      void 0 !== t.dispersion && (i.dispersion = t.dispersion),
      void 0 !== t.iridescence && (i.iridescence = t.iridescence),
      void 0 !== t.iridescenceIOR && (i.iridescenceIOR = t.iridescenceIOR),
      void 0 !== t.iridescenceThicknessRange &&
        (i.iridescenceThicknessRange = t.iridescenceThicknessRange),
      void 0 !== t.transmission && (i.transmission = t.transmission),
      void 0 !== t.thickness && (i.thickness = t.thickness),
      void 0 !== t.attenuationDistance &&
        (i.attenuationDistance = t.attenuationDistance),
      void 0 !== t.attenuationColor &&
        void 0 !== i.attenuationColor &&
        i.attenuationColor.setHex(t.attenuationColor),
      void 0 !== t.anisotropy && (i.anisotropy = t.anisotropy),
      void 0 !== t.anisotropyRotation &&
        (i.anisotropyRotation = t.anisotropyRotation),
      void 0 !== t.fog && (i.fog = t.fog),
      void 0 !== t.flatShading && (i.flatShading = t.flatShading),
      void 0 !== t.blending && (i.blending = t.blending),
      void 0 !== t.combine && (i.combine = t.combine),
      void 0 !== t.side && (i.side = t.side),
      void 0 !== t.shadowSide && (i.shadowSide = t.shadowSide),
      void 0 !== t.opacity && (i.opacity = t.opacity),
      void 0 !== t.transparent && (i.transparent = t.transparent),
      void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest),
      void 0 !== t.alphaHash && (i.alphaHash = t.alphaHash),
      void 0 !== t.depthFunc && (i.depthFunc = t.depthFunc),
      void 0 !== t.depthTest && (i.depthTest = t.depthTest),
      void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite),
      void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite),
      void 0 !== t.blendSrc && (i.blendSrc = t.blendSrc),
      void 0 !== t.blendDst && (i.blendDst = t.blendDst),
      void 0 !== t.blendEquation && (i.blendEquation = t.blendEquation),
      void 0 !== t.blendSrcAlpha && (i.blendSrcAlpha = t.blendSrcAlpha),
      void 0 !== t.blendDstAlpha && (i.blendDstAlpha = t.blendDstAlpha),
      void 0 !== t.blendEquationAlpha &&
        (i.blendEquationAlpha = t.blendEquationAlpha),
      void 0 !== t.blendColor &&
        void 0 !== i.blendColor &&
        i.blendColor.setHex(t.blendColor),
      void 0 !== t.blendAlpha && (i.blendAlpha = t.blendAlpha),
      void 0 !== t.stencilWriteMask &&
        (i.stencilWriteMask = t.stencilWriteMask),
      void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc),
      void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef),
      void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask),
      void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail),
      void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail),
      void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass),
      void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite),
      void 0 !== t.wireframe && (i.wireframe = t.wireframe),
      void 0 !== t.wireframeLinewidth &&
        (i.wireframeLinewidth = t.wireframeLinewidth),
      void 0 !== t.wireframeLinecap &&
        (i.wireframeLinecap = t.wireframeLinecap),
      void 0 !== t.wireframeLinejoin &&
        (i.wireframeLinejoin = t.wireframeLinejoin),
      void 0 !== t.rotation && (i.rotation = t.rotation),
      void 0 !== t.linewidth && (i.linewidth = t.linewidth),
      void 0 !== t.dashSize && (i.dashSize = t.dashSize),
      void 0 !== t.gapSize && (i.gapSize = t.gapSize),
      void 0 !== t.scale && (i.scale = t.scale),
      void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset),
      void 0 !== t.polygonOffsetFactor &&
        (i.polygonOffsetFactor = t.polygonOffsetFactor),
      void 0 !== t.polygonOffsetUnits &&
        (i.polygonOffsetUnits = t.polygonOffsetUnits),
      void 0 !== t.dithering && (i.dithering = t.dithering),
      void 0 !== t.alphaToCoverage && (i.alphaToCoverage = t.alphaToCoverage),
      void 0 !== t.premultipliedAlpha &&
        (i.premultipliedAlpha = t.premultipliedAlpha),
      void 0 !== t.forceSinglePass && (i.forceSinglePass = t.forceSinglePass),
      void 0 !== t.visible && (i.visible = t.visible),
      void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped),
      void 0 !== t.userData && (i.userData = t.userData),
      void 0 !== t.vertexColors &&
        ("number" == typeof t.vertexColors
          ? (i.vertexColors = t.vertexColors > 0)
          : (i.vertexColors = t.vertexColors)),
      void 0 !== t.uniforms)
    )
      for (const e in t.uniforms) {
        const r = t.uniforms[e];
        switch (((i.uniforms[e] = {}), r.type)) {
          case "t":
            i.uniforms[e].value = n(r.value);
            break;
          case "c":
            i.uniforms[e].value = new Zr().setHex(r.value);
            break;
          case "v2":
            i.uniforms[e].value = new $n().fromArray(r.value);
            break;
          case "v3":
            i.uniforms[e].value = new Pi().fromArray(r.value);
            break;
          case "v4":
            i.uniforms[e].value = new Si().fromArray(r.value);
            break;
          case "m3":
            i.uniforms[e].value = new Qn().fromArray(r.value);
            break;
          case "m4":
            i.uniforms[e].value = new ar().fromArray(r.value);
            break;
          default:
            i.uniforms[e].value = r.value;
        }
      }
    if (
      (void 0 !== t.defines && (i.defines = t.defines),
      void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader),
      void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader),
      void 0 !== t.glslVersion && (i.glslVersion = t.glslVersion),
      void 0 !== t.extensions)
    )
      for (const e in t.extensions) i.extensions[e] = t.extensions[e];
    if (
      (void 0 !== t.lights && (i.lights = t.lights),
      void 0 !== t.clipping && (i.clipping = t.clipping),
      void 0 !== t.size && (i.size = t.size),
      void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation),
      void 0 !== t.map && (i.map = n(t.map)),
      void 0 !== t.matcap && (i.matcap = n(t.matcap)),
      void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)),
      void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)),
      void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale),
      void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)),
      void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType),
      void 0 !== t.normalScale)
    ) {
      let e = t.normalScale;
      !1 === Array.isArray(e) && (e = [e, e]),
        (i.normalScale = new $n().fromArray(e));
    }
    return (
      void 0 !== t.displacementMap &&
        (i.displacementMap = n(t.displacementMap)),
      void 0 !== t.displacementScale &&
        (i.displacementScale = t.displacementScale),
      void 0 !== t.displacementBias &&
        (i.displacementBias = t.displacementBias),
      void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)),
      void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)),
      void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)),
      void 0 !== t.emissiveIntensity &&
        (i.emissiveIntensity = t.emissiveIntensity),
      void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)),
      void 0 !== t.specularIntensityMap &&
        (i.specularIntensityMap = n(t.specularIntensityMap)),
      void 0 !== t.specularColorMap &&
        (i.specularColorMap = n(t.specularColorMap)),
      void 0 !== t.envMap && (i.envMap = n(t.envMap)),
      void 0 !== t.envMapRotation &&
        i.envMapRotation.fromArray(t.envMapRotation),
      void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity),
      void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity),
      void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio),
      void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)),
      void 0 !== t.lightMapIntensity &&
        (i.lightMapIntensity = t.lightMapIntensity),
      void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)),
      void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity),
      void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)),
      void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)),
      void 0 !== t.clearcoatRoughnessMap &&
        (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)),
      void 0 !== t.clearcoatNormalMap &&
        (i.clearcoatNormalMap = n(t.clearcoatNormalMap)),
      void 0 !== t.clearcoatNormalScale &&
        (i.clearcoatNormalScale = new $n().fromArray(t.clearcoatNormalScale)),
      void 0 !== t.iridescenceMap && (i.iridescenceMap = n(t.iridescenceMap)),
      void 0 !== t.iridescenceThicknessMap &&
        (i.iridescenceThicknessMap = n(t.iridescenceThicknessMap)),
      void 0 !== t.transmissionMap &&
        (i.transmissionMap = n(t.transmissionMap)),
      void 0 !== t.thicknessMap && (i.thicknessMap = n(t.thicknessMap)),
      void 0 !== t.anisotropyMap && (i.anisotropyMap = n(t.anisotropyMap)),
      void 0 !== t.sheenColorMap && (i.sheenColorMap = n(t.sheenColorMap)),
      void 0 !== t.sheenRoughnessMap &&
        (i.sheenRoughnessMap = n(t.sheenRoughnessMap)),
      i
    );
  }
  setTextures(t) {
    return (this.textures = t), this;
  }
  static createMaterialFromType(t) {
    return new {
      ShadowMaterial: pd,
      SpriteMaterial: cc,
      RawShaderMaterial: md,
      ShaderMaterial: Zs,
      PointsMaterial: Ih,
      MeshPhysicalMaterial: gd,
      MeshStandardMaterial: fd,
      MeshPhongMaterial: vd,
      MeshToonMaterial: _d,
      MeshNormalMaterial: xd,
      MeshLambertMaterial: yd,
      MeshDepthMaterial: Bl,
      MeshDistanceMaterial: zl,
      MeshBasicMaterial: Qr,
      MeshMatcapMaterial: Md,
      LineDashedMaterial: Sd,
      LineBasicMaterial: vh,
      Material: $r,
    }[t]();
  }
}
class Sp {
  static decodeText(t) {
    if (
      (console.warn(
        "THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."
      ),
      "undefined" != typeof TextDecoder)
    )
      return new TextDecoder().decode(t);
    let e = "";
    for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
    try {
      return decodeURIComponent(escape(e));
    } catch (t) {
      return e;
    }
  }
  static extractUrlBase(t) {
    const e = t.lastIndexOf("/");
    return -1 === e ? "./" : t.slice(0, e + 1);
  }
  static resolveURL(t, e) {
    return "string" != typeof t || "" === t
      ? ""
      : (/^https?:\/\//i.test(e) &&
          /^\//.test(t) &&
          (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(t) ||
        /^data:.*,.*$/i.test(t) ||
        /^blob:.*$/i.test(t)
          ? t
          : e + t);
  }
}
class bp extends ws {
  constructor() {
    super(),
      (this.isInstancedBufferGeometry = !0),
      (this.type = "InstancedBufferGeometry"),
      (this.instanceCount = 1 / 0);
  }
  copy(t) {
    return super.copy(t), (this.instanceCount = t.instanceCount), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.instanceCount = this.instanceCount),
      (t.isInstancedBufferGeometry = !0),
      t
    );
  }
}
class wp extends jd {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this,
      s = new Zd(r.manager);
    s.setPath(r.path),
      s.setRequestHeader(r.requestHeader),
      s.setWithCredentials(r.withCredentials),
      s.load(
        t,
        function (n) {
          try {
            e(r.parse(JSON.parse(n)));
          } catch (e) {
            i ? i(e) : console.error(e), r.manager.itemError(t);
          }
        },
        n,
        i
      );
  }
  parse(t) {
    const e = {},
      n = {};
    function i(t, i) {
      if (void 0 !== e[i]) return e[i];
      const r = t.interleavedBuffers[i],
        s = (function (t, e) {
          if (void 0 !== n[e]) return n[e];
          const i = t.arrayBuffers,
            r = i[e],
            s = new Uint32Array(r).buffer;
          return (n[e] = s), s;
        })(t, r.buffer),
        a = ii(r.type, s),
        o = new ac(a, r.stride);
      return (o.uuid = r.uuid), (e[i] = o), o;
    }
    const r = t.isInstancedBufferGeometry ? new bp() : new ws(),
      s = t.data.index;
    if (void 0 !== s) {
      const t = ii(s.type, s.array);
      r.setIndex(new os(t, 1));
    }
    const a = t.data.attributes;
    for (const e in a) {
      const n = a[e];
      let s;
      if (n.isInterleavedBufferAttribute) {
        const e = i(t.data, n.data);
        s = new lc(e, n.itemSize, n.offset, n.normalized);
      } else {
        const t = ii(n.type, n.array);
        s = new (n.isInstancedBufferAttribute ? Gc : os)(
          t,
          n.itemSize,
          n.normalized
        );
      }
      void 0 !== n.name && (s.name = n.name),
        void 0 !== n.usage && s.setUsage(n.usage),
        r.setAttribute(e, s);
    }
    const o = t.data.morphAttributes;
    if (o)
      for (const e in o) {
        const n = o[e],
          s = [];
        for (let e = 0, r = n.length; e < r; e++) {
          const r = n[e];
          let a;
          if (r.isInterleavedBufferAttribute) {
            const e = i(t.data, r.data);
            a = new lc(e, r.itemSize, r.offset, r.normalized);
          } else {
            const t = ii(r.type, r.array);
            a = new os(t, r.itemSize, r.normalized);
          }
          void 0 !== r.name && (a.name = r.name), s.push(a);
        }
        r.morphAttributes[e] = s;
      }
    t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
    const l = t.data.groups || t.data.drawcalls || t.data.offsets;
    if (void 0 !== l)
      for (let t = 0, e = l.length; t !== e; ++t) {
        const e = l[t];
        r.addGroup(e.start, e.count, e.materialIndex);
      }
    const c = t.data.boundingSphere;
    if (void 0 !== c) {
      const t = new Pi();
      void 0 !== c.center && t.fromArray(c.center),
        (r.boundingSphere = new Ki(t, c.radius));
    }
    return (
      t.name && (r.name = t.name), t.userData && (r.userData = t.userData), r
    );
  }
}
class Tp extends jd {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this,
      s = "" === this.path ? Sp.extractUrlBase(t) : this.path;
    this.resourcePath = this.resourcePath || s;
    const a = new Zd(this.manager);
    a.setPath(this.path),
      a.setRequestHeader(this.requestHeader),
      a.setWithCredentials(this.withCredentials),
      a.load(
        t,
        function (n) {
          let s = null;
          try {
            s = JSON.parse(n);
          } catch (e) {
            return (
              void 0 !== i && i(e),
              void console.error(
                "THREE:ObjectLoader: Can't parse " + t + ".",
                e.message
              )
            );
          }
          const a = s.metadata;
          if (
            void 0 === a ||
            void 0 === a.type ||
            "geometry" === a.type.toLowerCase()
          )
            return (
              void 0 !== i &&
                i(new Error("THREE.ObjectLoader: Can't load " + t)),
              void console.error("THREE.ObjectLoader: Can't load " + t)
            );
          r.parse(s, e);
        },
        n,
        i
      );
  }
  async loadAsync(t, e) {
    const n = "" === this.path ? Sp.extractUrlBase(t) : this.path;
    this.resourcePath = this.resourcePath || n;
    const i = new Zd(this.manager);
    i.setPath(this.path),
      i.setRequestHeader(this.requestHeader),
      i.setWithCredentials(this.withCredentials);
    const r = await i.loadAsync(t, e),
      s = JSON.parse(r),
      a = s.metadata;
    if (
      void 0 === a ||
      void 0 === a.type ||
      "geometry" === a.type.toLowerCase()
    )
      throw new Error("THREE.ObjectLoader: Can't load " + t);
    return await this.parseAsync(s);
  }
  parse(t, e) {
    const n = this.parseAnimations(t.animations),
      i = this.parseShapes(t.shapes),
      r = this.parseGeometries(t.geometries, i),
      s = this.parseImages(t.images, function () {
        void 0 !== e && e(l);
      }),
      a = this.parseTextures(t.textures, s),
      o = this.parseMaterials(t.materials, a),
      l = this.parseObject(t.object, r, o, a, n),
      c = this.parseSkeletons(t.skeletons, l);
    if ((this.bindSkeletons(l, c), this.bindLightTargets(l), void 0 !== e)) {
      let t = !1;
      for (const e in s)
        if (s[e].data instanceof HTMLImageElement) {
          t = !0;
          break;
        }
      !1 === t && e(l);
    }
    return l;
  }
  async parseAsync(t) {
    const e = this.parseAnimations(t.animations),
      n = this.parseShapes(t.shapes),
      i = this.parseGeometries(t.geometries, n),
      r = await this.parseImagesAsync(t.images),
      s = this.parseTextures(t.textures, r),
      a = this.parseMaterials(t.materials, s),
      o = this.parseObject(t.object, i, a, s, e),
      l = this.parseSkeletons(t.skeletons, o);
    return this.bindSkeletons(o, l), this.bindLightTargets(o), o;
  }
  parseShapes(t) {
    const e = {};
    if (void 0 !== t)
      for (let n = 0, i = t.length; n < i; n++) {
        const i = new wu().fromJSON(t[n]);
        e[i.uuid] = i;
      }
    return e;
  }
  parseSkeletons(t, e) {
    const n = {},
      i = {};
    if (
      (e.traverse(function (t) {
        t.isBone && (i[t.uuid] = t);
      }),
      void 0 !== t)
    )
      for (let e = 0, r = t.length; e < r; e++) {
        const r = new Hc().fromJSON(t[e], i);
        n[r.uuid] = r;
      }
    return n;
  }
  parseGeometries(t, e) {
    const n = {};
    if (void 0 !== t) {
      const i = new wp();
      for (let r = 0, s = t.length; r < s; r++) {
        let s;
        const a = t[r];
        switch (a.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            s = i.parse(a);
            break;
          default:
            a.type in dd
              ? (s = dd[a.type].fromJSON(a, e))
              : console.warn(
                  `THREE.ObjectLoader: Unsupported geometry type "${a.type}"`
                );
        }
        (s.uuid = a.uuid),
          void 0 !== a.name && (s.name = a.name),
          void 0 !== a.userData && (s.userData = a.userData),
          (n[a.uuid] = s);
      }
    }
    return n;
  }
  parseMaterials(t, e) {
    const n = {},
      i = {};
    if (void 0 !== t) {
      const r = new Mp();
      r.setTextures(e);
      for (let e = 0, s = t.length; e < s; e++) {
        const s = t[e];
        void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)),
          (i[s.uuid] = n[s.uuid]);
      }
    }
    return i;
  }
  parseAnimations(t) {
    const e = {};
    if (void 0 !== t)
      for (let n = 0; n < t.length; n++) {
        const i = t[n],
          r = Vd.parse(i);
        e[r.uuid] = r;
      }
    return e;
  }
  parseImages(t, e) {
    const n = this,
      i = {};
    let r;
    function s(t) {
      if ("string" == typeof t) {
        const e = t;
        return (function (t) {
          return (
            n.manager.itemStart(t),
            r.load(
              t,
              function () {
                n.manager.itemEnd(t);
              },
              void 0,
              function () {
                n.manager.itemError(t), n.manager.itemEnd(t);
              }
            )
          );
        })(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : n.resourcePath + e);
      }
      return t.data
        ? { data: ii(t.type, t.data), width: t.width, height: t.height }
        : null;
    }
    if (void 0 !== t && t.length > 0) {
      const n = new Wd(e);
      (r = new $d(n)), r.setCrossOrigin(this.crossOrigin);
      for (let e = 0, n = t.length; e < n; e++) {
        const n = t[e],
          r = n.url;
        if (Array.isArray(r)) {
          const t = [];
          for (let e = 0, n = r.length; e < n; e++) {
            const n = s(r[e]);
            null !== n &&
              (n instanceof HTMLImageElement
                ? t.push(n)
                : t.push(new zc(n.data, n.width, n.height)));
          }
          i[n.uuid] = new _i(t);
        } else {
          const t = s(n.url);
          i[n.uuid] = new _i(t);
        }
      }
    }
    return i;
  }
  async parseImagesAsync(t) {
    const e = this,
      n = {};
    let i;
    async function r(t) {
      if ("string" == typeof t) {
        const n = t,
          r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : e.resourcePath + n;
        return await i.loadAsync(r);
      }
      return t.data
        ? { data: ii(t.type, t.data), width: t.width, height: t.height }
        : null;
    }
    if (void 0 !== t && t.length > 0) {
      (i = new $d(this.manager)), i.setCrossOrigin(this.crossOrigin);
      for (let e = 0, i = t.length; e < i; e++) {
        const i = t[e],
          s = i.url;
        if (Array.isArray(s)) {
          const t = [];
          for (let e = 0, n = s.length; e < n; e++) {
            const n = s[e],
              i = await r(n);
            null !== i &&
              (i instanceof HTMLImageElement
                ? t.push(i)
                : t.push(new zc(i.data, i.width, i.height)));
          }
          n[i.uuid] = new _i(t);
        } else {
          const t = await r(i.url);
          n[i.uuid] = new _i(t);
        }
      }
    }
    return n;
  }
  parseTextures(t, e) {
    function n(t, e) {
      return "number" == typeof t
        ? t
        : (console.warn(
            "THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
            t
          ),
          e[t]);
    }
    const i = {};
    if (void 0 !== t)
      for (let r = 0, s = t.length; r < s; r++) {
        const s = t[r];
        void 0 === s.image &&
          console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
          void 0 === e[s.image] &&
            console.warn("THREE.ObjectLoader: Undefined image", s.image);
        const a = e[s.image],
          o = a.data;
        let l;
        Array.isArray(o)
          ? ((l = new ia()), 6 === o.length && (l.needsUpdate = !0))
          : ((l = o && o.data ? new zc() : new Mi()),
            o && (l.needsUpdate = !0)),
          (l.source = a),
          (l.uuid = s.uuid),
          void 0 !== s.name && (l.name = s.name),
          void 0 !== s.mapping && (l.mapping = n(s.mapping, Ep)),
          void 0 !== s.channel && (l.channel = s.channel),
          void 0 !== s.offset && l.offset.fromArray(s.offset),
          void 0 !== s.repeat && l.repeat.fromArray(s.repeat),
          void 0 !== s.center && l.center.fromArray(s.center),
          void 0 !== s.rotation && (l.rotation = s.rotation),
          void 0 !== s.wrap &&
            ((l.wrapS = n(s.wrap[0], Ap)), (l.wrapT = n(s.wrap[1], Ap))),
          void 0 !== s.format && (l.format = s.format),
          void 0 !== s.internalFormat && (l.internalFormat = s.internalFormat),
          void 0 !== s.type && (l.type = s.type),
          void 0 !== s.colorSpace && (l.colorSpace = s.colorSpace),
          void 0 !== s.minFilter && (l.minFilter = n(s.minFilter, Rp)),
          void 0 !== s.magFilter && (l.magFilter = n(s.magFilter, Rp)),
          void 0 !== s.anisotropy && (l.anisotropy = s.anisotropy),
          void 0 !== s.flipY && (l.flipY = s.flipY),
          void 0 !== s.generateMipmaps &&
            (l.generateMipmaps = s.generateMipmaps),
          void 0 !== s.premultiplyAlpha &&
            (l.premultiplyAlpha = s.premultiplyAlpha),
          void 0 !== s.unpackAlignment &&
            (l.unpackAlignment = s.unpackAlignment),
          void 0 !== s.compareFunction &&
            (l.compareFunction = s.compareFunction),
          void 0 !== s.userData && (l.userData = s.userData),
          (i[s.uuid] = l);
      }
    return i;
  }
  parseObject(t, e, n, i, r) {
    let s, a, o;
    function l(t) {
      return (
        void 0 === e[t] &&
          console.warn("THREE.ObjectLoader: Undefined geometry", t),
        e[t]
      );
    }
    function c(t) {
      if (void 0 !== t) {
        if (Array.isArray(t)) {
          const e = [];
          for (let i = 0, r = t.length; i < r; i++) {
            const r = t[i];
            void 0 === n[r] &&
              console.warn("THREE.ObjectLoader: Undefined material", r),
              e.push(n[r]);
          }
          return e;
        }
        return (
          void 0 === n[t] &&
            console.warn("THREE.ObjectLoader: Undefined material", t),
          n[t]
        );
      }
    }
    function h(t) {
      return (
        void 0 === i[t] &&
          console.warn("THREE.ObjectLoader: Undefined texture", t),
        i[t]
      );
    }
    switch (t.type) {
      case "Scene":
        (s = new sc()),
          void 0 !== t.background &&
            (Number.isInteger(t.background)
              ? (s.background = new Zr(t.background))
              : (s.background = h(t.background))),
          void 0 !== t.environment && (s.environment = h(t.environment)),
          void 0 !== t.fog &&
            ("Fog" === t.fog.type
              ? (s.fog = new rc(t.fog.color, t.fog.near, t.fog.far))
              : "FogExp2" === t.fog.type &&
                (s.fog = new ic(t.fog.color, t.fog.density)),
            "" !== t.fog.name && (s.fog.name = t.fog.name)),
          void 0 !== t.backgroundBlurriness &&
            (s.backgroundBlurriness = t.backgroundBlurriness),
          void 0 !== t.backgroundIntensity &&
            (s.backgroundIntensity = t.backgroundIntensity),
          void 0 !== t.backgroundRotation &&
            s.backgroundRotation.fromArray(t.backgroundRotation),
          void 0 !== t.environmentIntensity &&
            (s.environmentIntensity = t.environmentIntensity),
          void 0 !== t.environmentRotation &&
            s.environmentRotation.fromArray(t.environmentRotation);
        break;
      case "PerspectiveCamera":
        (s = new ta(t.fov, t.aspect, t.near, t.far)),
          void 0 !== t.focus && (s.focus = t.focus),
          void 0 !== t.zoom && (s.zoom = t.zoom),
          void 0 !== t.filmGauge && (s.filmGauge = t.filmGauge),
          void 0 !== t.filmOffset && (s.filmOffset = t.filmOffset),
          void 0 !== t.view && (s.view = Object.assign({}, t.view));
        break;
      case "OrthographicCamera":
        (s = new Aa(t.left, t.right, t.top, t.bottom, t.near, t.far)),
          void 0 !== t.zoom && (s.zoom = t.zoom),
          void 0 !== t.view && (s.view = Object.assign({}, t.view));
        break;
      case "AmbientLight":
        s = new vp(t.color, t.intensity);
        break;
      case "DirectionalLight":
        (s = new gp(t.color, t.intensity)), (s.target = t.target || "");
        break;
      case "PointLight":
        s = new mp(t.color, t.intensity, t.distance, t.decay);
        break;
      case "RectAreaLight":
        s = new _p(t.color, t.intensity, t.width, t.height);
        break;
      case "SpotLight":
        (s = new cp(
          t.color,
          t.intensity,
          t.distance,
          t.angle,
          t.penumbra,
          t.decay
        )),
          (s.target = t.target || "");
        break;
      case "HemisphereLight":
        s = new ip(t.color, t.groundColor, t.intensity);
        break;
      case "LightProbe":
        s = new yp().fromJSON(t);
        break;
      case "SkinnedMesh":
        (a = l(t.geometry)),
          (o = c(t.material)),
          (s = new Fc(a, o)),
          void 0 !== t.bindMode && (s.bindMode = t.bindMode),
          void 0 !== t.bindMatrix && s.bindMatrix.fromArray(t.bindMatrix),
          void 0 !== t.skeleton && (s.skeleton = t.skeleton);
        break;
      case "Mesh":
        (a = l(t.geometry)), (o = c(t.material)), (s = new Hs(a, o));
        break;
      case "InstancedMesh":
        (a = l(t.geometry)), (o = c(t.material));
        const e = t.count,
          n = t.instanceMatrix,
          i = t.instanceColor;
        (s = new Kc(a, o, e)),
          (s.instanceMatrix = new Gc(new Float32Array(n.array), 16)),
          void 0 !== i &&
            (s.instanceColor = new Gc(new Float32Array(i.array), i.itemSize));
        break;
      case "BatchedMesh":
        (a = l(t.geometry)),
          (o = c(t.material)),
          (s = new gh(
            t.maxInstanceCount,
            t.maxVertexCount,
            t.maxIndexCount,
            o
          )),
          (s.geometry = a),
          (s.perObjectFrustumCulled = t.perObjectFrustumCulled),
          (s.sortObjects = t.sortObjects),
          (s._drawRanges = t.drawRanges),
          (s._reservedRanges = t.reservedRanges),
          (s._visibility = t.visibility),
          (s._active = t.active),
          (s._bounds = t.bounds.map((t) => {
            const e = new Ui();
            e.min.fromArray(t.boxMin), e.max.fromArray(t.boxMax);
            const n = new Ki();
            return (
              (n.radius = t.sphereRadius),
              n.center.fromArray(t.sphereCenter),
              {
                boxInitialized: t.boxInitialized,
                box: e,
                sphereInitialized: t.sphereInitialized,
                sphere: n,
              }
            );
          })),
          (s._maxInstanceCount = t.maxInstanceCount),
          (s._maxVertexCount = t.maxVertexCount),
          (s._maxIndexCount = t.maxIndexCount),
          (s._geometryInitialized = t.geometryInitialized),
          (s._geometryCount = t.geometryCount),
          (s._matricesTexture = h(t.matricesTexture.uuid)),
          void 0 !== t.colorsTexture &&
            (s._colorsTexture = h(t.colorsTexture.uuid));
        break;
      case "LOD":
        s = new Ac();
        break;
      case "Line":
        s = new Th(l(t.geometry), c(t.material));
        break;
      case "LineLoop":
        s = new Ph(l(t.geometry), c(t.material));
        break;
      case "LineSegments":
        s = new Ch(l(t.geometry), c(t.material));
        break;
      case "PointCloud":
      case "Points":
        s = new Oh(l(t.geometry), c(t.material));
        break;
      case "Sprite":
        s = new bc(c(t.material));
        break;
      case "Group":
        s = new ql();
        break;
      case "Bone":
        s = new Bc();
        break;
      default:
        s = new Ur();
    }
    if (
      ((s.uuid = t.uuid),
      void 0 !== t.name && (s.name = t.name),
      void 0 !== t.matrix
        ? (s.matrix.fromArray(t.matrix),
          void 0 !== t.matrixAutoUpdate &&
            (s.matrixAutoUpdate = t.matrixAutoUpdate),
          s.matrixAutoUpdate &&
            s.matrix.decompose(s.position, s.quaternion, s.scale))
        : (void 0 !== t.position && s.position.fromArray(t.position),
          void 0 !== t.rotation && s.rotation.fromArray(t.rotation),
          void 0 !== t.quaternion && s.quaternion.fromArray(t.quaternion),
          void 0 !== t.scale && s.scale.fromArray(t.scale)),
      void 0 !== t.up && s.up.fromArray(t.up),
      void 0 !== t.castShadow && (s.castShadow = t.castShadow),
      void 0 !== t.receiveShadow && (s.receiveShadow = t.receiveShadow),
      t.shadow &&
        (void 0 !== t.shadow.intensity &&
          (s.shadow.intensity = t.shadow.intensity),
        void 0 !== t.shadow.bias && (s.shadow.bias = t.shadow.bias),
        void 0 !== t.shadow.normalBias &&
          (s.shadow.normalBias = t.shadow.normalBias),
        void 0 !== t.shadow.radius && (s.shadow.radius = t.shadow.radius),
        void 0 !== t.shadow.mapSize &&
          s.shadow.mapSize.fromArray(t.shadow.mapSize),
        void 0 !== t.shadow.camera &&
          (s.shadow.camera = this.parseObject(t.shadow.camera))),
      void 0 !== t.visible && (s.visible = t.visible),
      void 0 !== t.frustumCulled && (s.frustumCulled = t.frustumCulled),
      void 0 !== t.renderOrder && (s.renderOrder = t.renderOrder),
      void 0 !== t.userData && (s.userData = t.userData),
      void 0 !== t.layers && (s.layers.mask = t.layers),
      void 0 !== t.children)
    ) {
      const a = t.children;
      for (let t = 0; t < a.length; t++)
        s.add(this.parseObject(a[t], e, n, i, r));
    }
    if (void 0 !== t.animations) {
      const e = t.animations;
      for (let t = 0; t < e.length; t++) {
        const n = e[t];
        s.animations.push(r[n]);
      }
    }
    if ("LOD" === t.type) {
      void 0 !== t.autoUpdate && (s.autoUpdate = t.autoUpdate);
      const e = t.levels;
      for (let t = 0; t < e.length; t++) {
        const n = e[t],
          i = s.getObjectByProperty("uuid", n.object);
        void 0 !== i && s.addLevel(i, n.distance, n.hysteresis);
      }
    }
    return s;
  }
  bindSkeletons(t, e) {
    0 !== Object.keys(e).length &&
      t.traverse(function (t) {
        if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
          const n = e[t.skeleton];
          void 0 === n
            ? console.warn(
                "THREE.ObjectLoader: No skeleton found with UUID:",
                t.skeleton
              )
            : t.bind(n, t.bindMatrix);
        }
      });
  }
  bindLightTargets(t) {
    t.traverse(function (e) {
      if (e.isDirectionalLight || e.isSpotLight) {
        const n = e.target,
          i = t.getObjectByProperty("uuid", n);
        e.target = void 0 !== i ? i : new Ur();
      }
    });
  }
}
const Ep = {
    UVMapping: ot,
    CubeReflectionMapping: lt,
    CubeRefractionMapping: ct,
    EquirectangularReflectionMapping: ht,
    EquirectangularRefractionMapping: ut,
    CubeUVReflectionMapping: dt,
  },
  Ap = {
    RepeatWrapping: pt,
    ClampToEdgeWrapping: mt,
    MirroredRepeatWrapping: ft,
  },
  Rp = {
    NearestFilter: gt,
    NearestMipmapNearestFilter: vt,
    NearestMipmapLinearFilter: xt,
    LinearFilter: Mt,
    LinearMipmapNearestFilter: St,
    LinearMipmapLinearFilter: wt,
  };
class Cp extends jd {
  constructor(t) {
    super(t),
      (this.isImageBitmapLoader = !0),
      "undefined" == typeof createImageBitmap &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      "undefined" == typeof fetch &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(t) {
    return (this.options = t), this;
  }
  load(t, e, n, i) {
    void 0 === t && (t = ""),
      void 0 !== this.path && (t = this.path + t),
      (t = this.manager.resolveURL(t));
    const r = this,
      s = Gd.get(t);
    if (void 0 !== s)
      return (
        r.manager.itemStart(t),
        s.then
          ? void s
              .then((n) => {
                e && e(n), r.manager.itemEnd(t);
              })
              .catch((t) => {
                i && i(t);
              })
          : (setTimeout(function () {
              e && e(s), r.manager.itemEnd(t);
            }, 0),
            s)
      );
    const a = {};
    (a.credentials =
      "anonymous" === this.crossOrigin ? "same-origin" : "include"),
      (a.headers = this.requestHeader);
    const o = fetch(t, a)
      .then(function (t) {
        return t.blob();
      })
      .then(function (t) {
        return createImageBitmap(
          t,
          Object.assign(r.options, { colorSpaceConversion: "none" })
        );
      })
      .then(function (n) {
        return Gd.add(t, n), e && e(n), r.manager.itemEnd(t), n;
      })
      .catch(function (e) {
        i && i(e), Gd.remove(t), r.manager.itemError(t), r.manager.itemEnd(t);
      });
    Gd.add(t, o), r.manager.itemStart(t);
  }
}
let Pp;
class Ip {
  static getContext() {
    return (
      void 0 === Pp &&
        (Pp = new (window.AudioContext || window.webkitAudioContext)()),
      Pp
    );
  }
  static setContext(t) {
    Pp = t;
  }
}
class Lp extends jd {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this,
      s = new Zd(this.manager);
    function a(e) {
      i ? i(e) : console.error(e), r.manager.itemError(t);
    }
    s.setResponseType("arraybuffer"),
      s.setPath(this.path),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        t,
        function (t) {
          try {
            const n = t.slice(0);
            Ip.getContext()
              .decodeAudioData(n, function (t) {
                e(t);
              })
              .catch(a);
          } catch (t) {
            a(t);
          }
        },
        n,
        i
      );
  }
}
const Up = new ar(),
  Np = new ar(),
  Dp = new ar();
class Op {
  constructor() {
    (this.type = "StereoCamera"),
      (this.aspect = 1),
      (this.eyeSep = 0.064),
      (this.cameraL = new ta()),
      this.cameraL.layers.enable(1),
      (this.cameraL.matrixAutoUpdate = !1),
      (this.cameraR = new ta()),
      this.cameraR.layers.enable(2),
      (this.cameraR.matrixAutoUpdate = !1),
      (this._cache = {
        focus: null,
        fov: null,
        aspect: null,
        near: null,
        far: null,
        zoom: null,
        eyeSep: null,
      });
  }
  update(t) {
    const e = this._cache;
    if (
      e.focus !== t.focus ||
      e.fov !== t.fov ||
      e.aspect !== t.aspect * this.aspect ||
      e.near !== t.near ||
      e.far !== t.far ||
      e.zoom !== t.zoom ||
      e.eyeSep !== this.eyeSep
    ) {
      (e.focus = t.focus),
        (e.fov = t.fov),
        (e.aspect = t.aspect * this.aspect),
        (e.near = t.near),
        (e.far = t.far),
        (e.zoom = t.zoom),
        (e.eyeSep = this.eyeSep),
        Dp.copy(t.projectionMatrix);
      const n = e.eyeSep / 2,
        i = (n * e.near) / e.focus,
        r = (e.near * Math.tan(Gn * e.fov * 0.5)) / e.zoom;
      let s, a;
      (Np.elements[12] = -n),
        (Up.elements[12] = n),
        (s = -r * e.aspect + i),
        (a = r * e.aspect + i),
        (Dp.elements[0] = (2 * e.near) / (a - s)),
        (Dp.elements[8] = (a + s) / (a - s)),
        this.cameraL.projectionMatrix.copy(Dp),
        (s = -r * e.aspect - i),
        (a = r * e.aspect - i),
        (Dp.elements[0] = (2 * e.near) / (a - s)),
        (Dp.elements[8] = (a + s) / (a - s)),
        this.cameraR.projectionMatrix.copy(Dp);
    }
    this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Np),
      this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Up);
  }
}
class Fp {
  constructor(t = !0) {
    (this.autoStart = t),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Bp()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let t = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const e = Bp();
      (t = (e - this.oldTime) / 1e3),
        (this.oldTime = e),
        (this.elapsedTime += t);
    }
    return t;
  }
}
function Bp() {
  return ("undefined" == typeof performance ? Date : performance).now();
}
const zp = new Pi(),
  kp = new Ci(),
  Vp = new Pi(),
  Hp = new Pi();
class Gp extends Ur {
  constructor() {
    super(),
      (this.type = "AudioListener"),
      (this.context = Ip.getContext()),
      (this.gain = this.context.createGain()),
      this.gain.connect(this.context.destination),
      (this.filter = null),
      (this.timeDelta = 0),
      (this._clock = new Fp());
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return (
      null !== this.filter &&
        (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination),
        this.gain.connect(this.context.destination),
        (this.filter = null)),
      this
    );
  }
  getFilter() {
    return this.filter;
  }
  setFilter(t) {
    return (
      null !== this.filter
        ? (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination))
        : this.gain.disconnect(this.context.destination),
      (this.filter = t),
      this.gain.connect(this.filter),
      this.filter.connect(this.context.destination),
      this
    );
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(t) {
    return (
      this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this
    );
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t);
    const e = this.context.listener,
      n = this.up;
    if (
      ((this.timeDelta = this._clock.getDelta()),
      this.matrixWorld.decompose(zp, kp, Vp),
      Hp.set(0, 0, -1).applyQuaternion(kp),
      e.positionX)
    ) {
      const t = this.context.currentTime + this.timeDelta;
      e.positionX.linearRampToValueAtTime(zp.x, t),
        e.positionY.linearRampToValueAtTime(zp.y, t),
        e.positionZ.linearRampToValueAtTime(zp.z, t),
        e.forwardX.linearRampToValueAtTime(Hp.x, t),
        e.forwardY.linearRampToValueAtTime(Hp.y, t),
        e.forwardZ.linearRampToValueAtTime(Hp.z, t),
        e.upX.linearRampToValueAtTime(n.x, t),
        e.upY.linearRampToValueAtTime(n.y, t),
        e.upZ.linearRampToValueAtTime(n.z, t);
    } else
      e.setPosition(zp.x, zp.y, zp.z),
        e.setOrientation(Hp.x, Hp.y, Hp.z, n.x, n.y, n.z);
  }
}
class Wp extends Ur {
  constructor(t) {
    super(),
      (this.type = "Audio"),
      (this.listener = t),
      (this.context = t.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(t.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.offset = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.source = null),
      (this.sourceType = "empty"),
      (this._startedAt = 0),
      (this._progress = 0),
      (this._connected = !1),
      (this.filters = []);
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(t) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "audioNode"),
      (this.source = t),
      this.connect(),
      this
    );
  }
  setMediaElementSource(t) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaNode"),
      (this.source = this.context.createMediaElementSource(t)),
      this.connect(),
      this
    );
  }
  setMediaStreamSource(t) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaStreamNode"),
      (this.source = this.context.createMediaStreamSource(t)),
      this.connect(),
      this
    );
  }
  setBuffer(t) {
    return (
      (this.buffer = t),
      (this.sourceType = "buffer"),
      this.autoplay && this.play(),
      this
    );
  }
  play(t = 0) {
    if (!0 === this.isPlaying)
      return void console.warn("THREE.Audio: Audio is already playing.");
    if (!1 === this.hasPlaybackControl)
      return void console.warn(
        "THREE.Audio: this Audio has no playback control."
      );
    this._startedAt = this.context.currentTime + t;
    const e = this.context.createBufferSource();
    return (
      (e.buffer = this.buffer),
      (e.loop = this.loop),
      (e.loopStart = this.loopStart),
      (e.loopEnd = this.loopEnd),
      (e.onended = this.onEnded.bind(this)),
      e.start(this._startedAt, this._progress + this.offset, this.duration),
      (this.isPlaying = !0),
      (this.source = e),
      this.setDetune(this.detune),
      this.setPlaybackRate(this.playbackRate),
      this.connect()
    );
  }
  pause() {
    if (!1 !== this.hasPlaybackControl)
      return (
        !0 === this.isPlaying &&
          ((this._progress +=
            Math.max(this.context.currentTime - this._startedAt, 0) *
            this.playbackRate),
          !0 === this.loop &&
            (this._progress =
              this._progress % (this.duration || this.buffer.duration)),
          this.source.stop(),
          (this.source.onended = null),
          (this.isPlaying = !1)),
        this
      );
    console.warn("THREE.Audio: this Audio has no playback control.");
  }
  stop() {
    if (!1 !== this.hasPlaybackControl)
      return (
        (this._progress = 0),
        null !== this.source &&
          (this.source.stop(), (this.source.onended = null)),
        (this.isPlaying = !1),
        this
      );
    console.warn("THREE.Audio: this Audio has no playback control.");
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let t = 1, e = this.filters.length; t < e; t++)
        this.filters[t - 1].connect(this.filters[t]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return (this._connected = !0), this;
  }
  disconnect() {
    if (!1 !== this._connected) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let t = 1, e = this.filters.length; t < e; t++)
          this.filters[t - 1].disconnect(this.filters[t]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return (this._connected = !1), this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(t) {
    return (
      t || (t = []),
      !0 === this._connected
        ? (this.disconnect(), (this.filters = t.slice()), this.connect())
        : (this.filters = t.slice()),
      this
    );
  }
  setDetune(t) {
    return (
      (this.detune = t),
      !0 === this.isPlaying &&
        void 0 !== this.source.detune &&
        this.source.detune.setTargetAtTime(
          this.detune,
          this.context.currentTime,
          0.01
        ),
      this
    );
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(t) {
    return this.setFilters(t ? [t] : []);
  }
  setPlaybackRate(t) {
    if (!1 !== this.hasPlaybackControl)
      return (
        (this.playbackRate = t),
        !0 === this.isPlaying &&
          this.source.playbackRate.setTargetAtTime(
            this.playbackRate,
            this.context.currentTime,
            0.01
          ),
        this
      );
    console.warn("THREE.Audio: this Audio has no playback control.");
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return !1 === this.hasPlaybackControl
      ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
      : this.loop;
  }
  setLoop(t) {
    if (!1 !== this.hasPlaybackControl)
      return (
        (this.loop = t),
        !0 === this.isPlaying && (this.source.loop = this.loop),
        this
      );
    console.warn("THREE.Audio: this Audio has no playback control.");
  }
  setLoopStart(t) {
    return (this.loopStart = t), this;
  }
  setLoopEnd(t) {
    return (this.loopEnd = t), this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(t) {
    return (
      this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this
    );
  }
}
const Xp = new Pi(),
  jp = new Ci(),
  qp = new Pi(),
  Yp = new Pi();
class Zp extends Wp {
  constructor(t) {
    super(t),
      (this.panner = this.context.createPanner()),
      (this.panner.panningModel = "HRTF"),
      this.panner.connect(this.gain);
  }
  connect() {
    super.connect(), this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(t) {
    return (this.panner.refDistance = t), this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(t) {
    return (this.panner.rolloffFactor = t), this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(t) {
    return (this.panner.distanceModel = t), this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(t) {
    return (this.panner.maxDistance = t), this;
  }
  setDirectionalCone(t, e, n) {
    return (
      (this.panner.coneInnerAngle = t),
      (this.panner.coneOuterAngle = e),
      (this.panner.coneOuterGain = n),
      this
    );
  }
  updateMatrixWorld(t) {
    if (
      (super.updateMatrixWorld(t),
      !0 === this.hasPlaybackControl && !1 === this.isPlaying)
    )
      return;
    this.matrixWorld.decompose(Xp, jp, qp), Yp.set(0, 0, 1).applyQuaternion(jp);
    const e = this.panner;
    if (e.positionX) {
      const t = this.context.currentTime + this.listener.timeDelta;
      e.positionX.linearRampToValueAtTime(Xp.x, t),
        e.positionY.linearRampToValueAtTime(Xp.y, t),
        e.positionZ.linearRampToValueAtTime(Xp.z, t),
        e.orientationX.linearRampToValueAtTime(Yp.x, t),
        e.orientationY.linearRampToValueAtTime(Yp.y, t),
        e.orientationZ.linearRampToValueAtTime(Yp.z, t);
    } else e.setPosition(Xp.x, Xp.y, Xp.z), e.setOrientation(Yp.x, Yp.y, Yp.z);
  }
}
class Jp {
  constructor(t, e = 2048) {
    (this.analyser = t.context.createAnalyser()),
      (this.analyser.fftSize = e),
      (this.data = new Uint8Array(this.analyser.frequencyBinCount)),
      t.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let t = 0;
    const e = this.getFrequencyData();
    for (let n = 0; n < e.length; n++) t += e[n];
    return t / e.length;
  }
}
class Kp {
  constructor(t, e, n) {
    let i, r, s;
    switch (((this.binding = t), (this.valueSize = n), e)) {
      case "quaternion":
        (i = this._slerp),
          (r = this._slerpAdditive),
          (s = this._setAdditiveIdentityQuaternion),
          (this.buffer = new Float64Array(6 * n)),
          (this._workIndex = 5);
        break;
      case "string":
      case "bool":
        (i = this._select),
          (r = this._select),
          (s = this._setAdditiveIdentityOther),
          (this.buffer = new Array(5 * n));
        break;
      default:
        (i = this._lerp),
          (r = this._lerpAdditive),
          (s = this._setAdditiveIdentityNumeric),
          (this.buffer = new Float64Array(5 * n));
    }
    (this._mixBufferRegion = i),
      (this._mixBufferRegionAdditive = r),
      (this._setIdentity = s),
      (this._origIndex = 3),
      (this._addIndex = 4),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0),
      (this.useCount = 0),
      (this.referenceCount = 0);
  }
  accumulate(t, e) {
    const n = this.buffer,
      i = this.valueSize,
      r = t * i + i;
    let s = this.cumulativeWeight;
    if (0 === s) {
      for (let t = 0; t !== i; ++t) n[r + t] = n[t];
      s = e;
    } else {
      s += e;
      const t = e / s;
      this._mixBufferRegion(n, r, 0, t, i);
    }
    this.cumulativeWeight = s;
  }
  accumulateAdditive(t) {
    const e = this.buffer,
      n = this.valueSize,
      i = n * this._addIndex;
    0 === this.cumulativeWeightAdditive && this._setIdentity(),
      this._mixBufferRegionAdditive(e, i, 0, t, n),
      (this.cumulativeWeightAdditive += t);
  }
  apply(t) {
    const e = this.valueSize,
      n = this.buffer,
      i = t * e + e,
      r = this.cumulativeWeight,
      s = this.cumulativeWeightAdditive,
      a = this.binding;
    if (
      ((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), r < 1)
    ) {
      const t = e * this._origIndex;
      this._mixBufferRegion(n, i, t, 1 - r, e);
    }
    s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
    for (let t = e, r = e + e; t !== r; ++t)
      if (n[t] !== n[t + e]) {
        a.setValue(n, i);
        break;
      }
  }
  saveOriginalState() {
    const t = this.binding,
      e = this.buffer,
      n = this.valueSize,
      i = n * this._origIndex;
    t.getValue(e, i);
    for (let t = n, r = i; t !== r; ++t) e[t] = e[i + (t % n)];
    this._setIdentity(),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0);
  }
  restoreOriginalState() {
    const t = 3 * this.valueSize;
    this.binding.setValue(this.buffer, t);
  }
  _setAdditiveIdentityNumeric() {
    const t = this._addIndex * this.valueSize,
      e = t + this.valueSize;
    for (let n = t; n < e; n++) this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(),
      (this.buffer[this._addIndex * this.valueSize + 3] = 1);
  }
  _setAdditiveIdentityOther() {
    const t = this._origIndex * this.valueSize,
      e = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[e + n] = this.buffer[t + n];
  }
  _select(t, e, n, i, r) {
    if (i >= 0.5) for (let i = 0; i !== r; ++i) t[e + i] = t[n + i];
  }
  _slerp(t, e, n, i) {
    Ci.slerpFlat(t, e, t, e, t, n, i);
  }
  _slerpAdditive(t, e, n, i, r) {
    const s = this._workIndex * r;
    Ci.multiplyQuaternionsFlat(t, s, t, e, t, n),
      Ci.slerpFlat(t, e, t, e, t, s, i);
  }
  _lerp(t, e, n, i, r) {
    const s = 1 - i;
    for (let a = 0; a !== r; ++a) {
      const r = e + a;
      t[r] = t[r] * s + t[n + a] * i;
    }
  }
  _lerpAdditive(t, e, n, i, r) {
    for (let s = 0; s !== r; ++s) {
      const r = e + s;
      t[r] = t[r] + t[n + s] * i;
    }
  }
}
const $p = "\\[\\]\\.:\\/",
  Qp = new RegExp("[" + $p + "]", "g"),
  tm = "[^" + $p + "]",
  em = "[^" + $p.replace("\\.", "") + "]",
  nm = new RegExp(
    "^" +
      /((?:WC+[\/:])*)/.source.replace("WC", tm) +
      /(WCOD+)?/.source.replace("WCOD", em) +
      /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", tm) +
      /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", tm) +
      "$"
  ),
  im = ["material", "materials", "bones", "map"];
class rm {
  constructor(t, e, n) {
    (this.path = e),
      (this.parsedPath = n || rm.parseTrackName(e)),
      (this.node = rm.findNode(t, this.parsedPath.nodeName)),
      (this.rootNode = t),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(t, e, n) {
    return t && t.isAnimationObjectGroup
      ? new rm.Composite(t, e, n)
      : new rm(t, e, n);
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(Qp, "");
  }
  static parseTrackName(t) {
    const e = nm.exec(t);
    if (null === e)
      throw new Error("PropertyBinding: Cannot parse trackName: " + t);
    const n = {
        nodeName: e[2],
        objectName: e[3],
        objectIndex: e[4],
        propertyName: e[5],
        propertyIndex: e[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (void 0 !== i && -1 !== i) {
      const t = n.nodeName.substring(i + 1);
      -1 !== im.indexOf(t) &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
    }
    if (null === n.propertyName || 0 === n.propertyName.length)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + t
      );
    return n;
  }
  static findNode(t, e) {
    if (
      void 0 === e ||
      "" === e ||
      "." === e ||
      -1 === e ||
      e === t.name ||
      e === t.uuid
    )
      return t;
    if (t.skeleton) {
      const n = t.skeleton.getBoneByName(e);
      if (void 0 !== n) return n;
    }
    if (t.children) {
      const n = function (t) {
          for (let i = 0; i < t.length; i++) {
            const r = t[i];
            if (r.name === e || r.uuid === e) return r;
            const s = n(r.children);
            if (s) return s;
          }
          return null;
        },
        i = n(t.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(t, e) {
    t[e] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e);
  }
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e];
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    (this.targetObject[this.propertyName] = t[e]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    (this.targetObject[this.propertyName] = t[e]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
  }
  _setValue_array_setNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e];
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    (this.resolvedProperty[this.propertyIndex] = t[e]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    (this.resolvedProperty[this.propertyIndex] = t[e]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e);
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e);
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e);
  }
  bind() {
    let t = this.node;
    const e = this.parsedPath,
      n = e.objectName,
      i = e.propertyName;
    let r = e.propertyIndex;
    if (
      (t || ((t = rm.findNode(this.rootNode, e.nodeName)), (this.node = t)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !t)
    )
      return void console.warn(
        "THREE.PropertyBinding: No target node found for track: " +
          this.path +
          "."
      );
    if (n) {
      let i = e.objectIndex;
      switch (n) {
        case "materials":
          if (!t.material)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
          if (!t.material.materials)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
          t = t.skeleton.bones;
          for (let e = 0; e < t.length; e++)
            if (t[e].name === i) {
              i = e;
              break;
            }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
          if (!t.material.map)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
          t = t.material.map;
          break;
        default:
          if (void 0 === t[n])
            return void console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
          t = t[n];
      }
      if (void 0 !== i) {
        if (void 0 === t[i])
          return void console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            t
          );
        t = t[i];
      }
    }
    const s = t[i];
    if (void 0 === s) {
      const n = e.nodeName;
      return void console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          n +
          "." +
          i +
          " but it wasn't found.",
        t
      );
    }
    let a = this.Versioning.None;
    (this.targetObject = t),
      void 0 !== t.needsUpdate
        ? (a = this.Versioning.NeedsUpdate)
        : void 0 !== t.matrixWorldNeedsUpdate &&
          (a = this.Versioning.MatrixWorldNeedsUpdate);
    let o = this.BindingType.Direct;
    if (void 0 !== r) {
      if ("morphTargetInfluences" === i) {
        if (!t.geometry)
          return void console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
        if (!t.geometry.morphAttributes)
          return void console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
        void 0 !== t.morphTargetDictionary[r] &&
          (r = t.morphTargetDictionary[r]);
      }
      (o = this.BindingType.ArrayElement),
        (this.resolvedProperty = s),
        (this.propertyIndex = r);
    } else
      void 0 !== s.fromArray && void 0 !== s.toArray
        ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = s))
        : Array.isArray(s)
        ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = s))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[o]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[o][a]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
(rm.Composite = class {
  constructor(t, e, n) {
    const i = n || rm.parseTrackName(e);
    (this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
  }
  getValue(t, e) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    void 0 !== i && i.getValue(t, e);
  }
  setValue(t, e) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(t, e);
  }
  bind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].bind();
  }
  unbind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].unbind();
  }
}),
  (rm.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (rm.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (rm.prototype.GetterByBindingType = [
    rm.prototype._getValue_direct,
    rm.prototype._getValue_array,
    rm.prototype._getValue_arrayElement,
    rm.prototype._getValue_toArray,
  ]),
  (rm.prototype.SetterByBindingTypeAndVersioning = [
    [
      rm.prototype._setValue_direct,
      rm.prototype._setValue_direct_setNeedsUpdate,
      rm.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      rm.prototype._setValue_array,
      rm.prototype._setValue_array_setNeedsUpdate,
      rm.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      rm.prototype._setValue_arrayElement,
      rm.prototype._setValue_arrayElement_setNeedsUpdate,
      rm.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      rm.prototype._setValue_fromArray,
      rm.prototype._setValue_fromArray_setNeedsUpdate,
      rm.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]);
class sm {
  constructor() {
    (this.isAnimationObjectGroup = !0),
      (this.uuid = Xn()),
      (this._objects = Array.prototype.slice.call(arguments)),
      (this.nCachedObjects_ = 0);
    const t = {};
    this._indicesByUUID = t;
    for (let e = 0, n = arguments.length; e !== n; ++e)
      t[arguments[e].uuid] = e;
    (this._paths = []),
      (this._parsedPaths = []),
      (this._bindings = []),
      (this._bindingsIndicesByPath = {});
    const e = this;
    this.stats = {
      objects: {
        get total() {
          return e._objects.length;
        },
        get inUse() {
          return this.total - e.nCachedObjects_;
        },
      },
      get bindingsPerObject() {
        return e._bindings.length;
      },
    };
  }
  add() {
    const t = this._objects,
      e = this._indicesByUUID,
      n = this._paths,
      i = this._parsedPaths,
      r = this._bindings,
      s = r.length;
    let a,
      o = t.length,
      l = this.nCachedObjects_;
    for (let c = 0, h = arguments.length; c !== h; ++c) {
      const h = arguments[c],
        u = h.uuid;
      let d = e[u];
      if (void 0 === d) {
        (d = o++), (e[u] = d), t.push(h);
        for (let t = 0, e = s; t !== e; ++t) r[t].push(new rm(h, n[t], i[t]));
      } else if (d < l) {
        a = t[d];
        const o = --l,
          c = t[o];
        (e[c.uuid] = d), (t[d] = c), (e[u] = o), (t[o] = h);
        for (let t = 0, e = s; t !== e; ++t) {
          const e = r[t],
            s = e[o];
          let a = e[d];
          (e[d] = s), void 0 === a && (a = new rm(h, n[t], i[t])), (e[o] = a);
        }
      } else
        t[d] !== a &&
          console.error(
            "THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes."
          );
    }
    this.nCachedObjects_ = l;
  }
  remove() {
    const t = this._objects,
      e = this._indicesByUUID,
      n = this._bindings,
      i = n.length;
    let r = this.nCachedObjects_;
    for (let s = 0, a = arguments.length; s !== a; ++s) {
      const a = arguments[s],
        o = a.uuid,
        l = e[o];
      if (void 0 !== l && l >= r) {
        const s = r++,
          c = t[s];
        (e[c.uuid] = l), (t[l] = c), (e[o] = s), (t[s] = a);
        for (let t = 0, e = i; t !== e; ++t) {
          const e = n[t],
            i = e[s],
            r = e[l];
          (e[l] = i), (e[s] = r);
        }
      }
    }
    this.nCachedObjects_ = r;
  }
  uncache() {
    const t = this._objects,
      e = this._indicesByUUID,
      n = this._bindings,
      i = n.length;
    let r = this.nCachedObjects_,
      s = t.length;
    for (let a = 0, o = arguments.length; a !== o; ++a) {
      const o = arguments[a].uuid,
        l = e[o];
      if (void 0 !== l)
        if ((delete e[o], l < r)) {
          const a = --r,
            o = t[a],
            c = --s,
            h = t[c];
          (e[o.uuid] = l), (t[l] = o), (e[h.uuid] = a), (t[a] = h), t.pop();
          for (let t = 0, e = i; t !== e; ++t) {
            const e = n[t],
              i = e[a],
              r = e[c];
            (e[l] = i), (e[a] = r), e.pop();
          }
        } else {
          const r = --s,
            a = t[r];
          r > 0 && (e[a.uuid] = l), (t[l] = a), t.pop();
          for (let t = 0, e = i; t !== e; ++t) {
            const e = n[t];
            (e[l] = e[r]), e.pop();
          }
        }
    }
    this.nCachedObjects_ = r;
  }
  subscribe_(t, e) {
    const n = this._bindingsIndicesByPath;
    let i = n[t];
    const r = this._bindings;
    if (void 0 !== i) return r[i];
    const s = this._paths,
      a = this._parsedPaths,
      o = this._objects,
      l = o.length,
      c = this.nCachedObjects_,
      h = new Array(l);
    (i = r.length), (n[t] = i), s.push(t), a.push(e), r.push(h);
    for (let n = c, i = o.length; n !== i; ++n) {
      const i = o[n];
      h[n] = new rm(i, t, e);
    }
    return h;
  }
  unsubscribe_(t) {
    const e = this._bindingsIndicesByPath,
      n = e[t];
    if (void 0 !== n) {
      const i = this._paths,
        r = this._parsedPaths,
        s = this._bindings,
        a = s.length - 1,
        o = s[a];
      (e[t[a]] = n),
        (s[n] = o),
        s.pop(),
        (r[n] = r[a]),
        r.pop(),
        (i[n] = i[a]),
        i.pop();
    }
  }
}
class am {
  constructor(t, e, n = null, i = e.blendMode) {
    (this._mixer = t),
      (this._clip = e),
      (this._localRoot = n),
      (this.blendMode = i);
    const r = e.tracks,
      s = r.length,
      a = new Array(s),
      o = { endingStart: De, endingEnd: De };
    for (let t = 0; t !== s; ++t) {
      const e = r[t].createInterpolant(null);
      (a[t] = e), (e.settings = o);
    }
    (this._interpolantSettings = o),
      (this._interpolants = a),
      (this._propertyBindings = new Array(s)),
      (this._cacheIndex = null),
      (this._byClipCacheIndex = null),
      (this._timeScaleInterpolant = null),
      (this._weightInterpolant = null),
      (this.loop = 2201),
      (this._loopCount = -1),
      (this._startTime = null),
      (this.time = 0),
      (this.timeScale = 1),
      (this._effectiveTimeScale = 1),
      (this.weight = 1),
      (this._effectiveWeight = 1),
      (this.repetitions = 1 / 0),
      (this.paused = !1),
      (this.enabled = !0),
      (this.clampWhenFinished = !1),
      (this.zeroSlopeAtStart = !0),
      (this.zeroSlopeAtEnd = !0);
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return (
      (this.paused = !1),
      (this.enabled = !0),
      (this.time = 0),
      (this._loopCount = -1),
      (this._startTime = null),
      this.stopFading().stopWarping()
    );
  }
  isRunning() {
    return (
      this.enabled &&
      !this.paused &&
      0 !== this.timeScale &&
      null === this._startTime &&
      this._mixer._isActiveAction(this)
    );
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(t) {
    return (this._startTime = t), this;
  }
  setLoop(t, e) {
    return (this.loop = t), (this.repetitions = e), this;
  }
  setEffectiveWeight(t) {
    return (
      (this.weight = t),
      (this._effectiveWeight = this.enabled ? t : 0),
      this.stopFading()
    );
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(t) {
    return this._scheduleFading(t, 0, 1);
  }
  fadeOut(t) {
    return this._scheduleFading(t, 1, 0);
  }
  crossFadeFrom(t, e, n) {
    if ((t.fadeOut(e), this.fadeIn(e), n)) {
      const n = this._clip.duration,
        i = t._clip.duration,
        r = i / n,
        s = n / i;
      t.warp(1, r, e), this.warp(s, 1, e);
    }
    return this;
  }
  crossFadeTo(t, e, n) {
    return t.crossFadeFrom(this, e, n);
  }
  stopFading() {
    const t = this._weightInterpolant;
    return (
      null !== t &&
        ((this._weightInterpolant = null),
        this._mixer._takeBackControlInterpolant(t)),
      this
    );
  }
  setEffectiveTimeScale(t) {
    return (
      (this.timeScale = t),
      (this._effectiveTimeScale = this.paused ? 0 : t),
      this.stopWarping()
    );
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(t) {
    return (this.timeScale = this._clip.duration / t), this.stopWarping();
  }
  syncWith(t) {
    return (
      (this.time = t.time), (this.timeScale = t.timeScale), this.stopWarping()
    );
  }
  halt(t) {
    return this.warp(this._effectiveTimeScale, 0, t);
  }
  warp(t, e, n) {
    const i = this._mixer,
      r = i.time,
      s = this.timeScale;
    let a = this._timeScaleInterpolant;
    null === a &&
      ((a = i._lendControlInterpolant()), (this._timeScaleInterpolant = a));
    const o = a.parameterPositions,
      l = a.sampleValues;
    return (o[0] = r), (o[1] = r + n), (l[0] = t / s), (l[1] = e / s), this;
  }
  stopWarping() {
    const t = this._timeScaleInterpolant;
    return (
      null !== t &&
        ((this._timeScaleInterpolant = null),
        this._mixer._takeBackControlInterpolant(t)),
      this
    );
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(t, e, n, i) {
    if (!this.enabled) return void this._updateWeight(t);
    const r = this._startTime;
    if (null !== r) {
      const i = (t - r) * n;
      i < 0 || 0 === n ? (e = 0) : ((this._startTime = null), (e = n * i));
    }
    e *= this._updateTimeScale(t);
    const s = this._updateTime(e),
      a = this._updateWeight(t);
    if (a > 0) {
      const t = this._interpolants,
        e = this._propertyBindings;
      if (this.blendMode === ze)
        for (let n = 0, i = t.length; n !== i; ++n)
          t[n].evaluate(s), e[n].accumulateAdditive(a);
      else
        for (let n = 0, r = t.length; n !== r; ++n)
          t[n].evaluate(s), e[n].accumulate(i, a);
    }
  }
  _updateWeight(t) {
    let e = 0;
    if (this.enabled) {
      e = this.weight;
      const n = this._weightInterpolant;
      if (null !== n) {
        const i = n.evaluate(t)[0];
        (e *= i),
          t > n.parameterPositions[1] &&
            (this.stopFading(), 0 === i && (this.enabled = !1));
      }
    }
    return (this._effectiveWeight = e), e;
  }
  _updateTimeScale(t) {
    let e = 0;
    if (!this.paused) {
      e = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (null !== n) {
        (e *= n.evaluate(t)[0]),
          t > n.parameterPositions[1] &&
            (this.stopWarping(),
            0 === e ? (this.paused = !0) : (this.timeScale = e));
      }
    }
    return (this._effectiveTimeScale = e), e;
  }
  _updateTime(t) {
    const e = this._clip.duration,
      n = this.loop;
    let i = this.time + t,
      r = this._loopCount;
    const s = 2202 === n;
    if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
    if (2200 === n) {
      -1 === r && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
      t: {
        if (i >= e) i = e;
        else {
          if (!(i < 0)) {
            this.time = i;
            break t;
          }
          i = 0;
        }
        this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
          (this.time = i),
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t < 0 ? -1 : 1,
          });
      }
    } else {
      if (
        (-1 === r &&
          (t >= 0
            ? ((r = 0), this._setEndings(!0, 0 === this.repetitions, s))
            : this._setEndings(0 === this.repetitions, !0, s)),
        i >= e || i < 0)
      ) {
        const n = Math.floor(i / e);
        (i -= e * n), (r += Math.abs(n));
        const a = this.repetitions - r;
        if (a <= 0)
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (i = t > 0 ? e : 0),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: t > 0 ? 1 : -1,
            });
        else {
          if (1 === a) {
            const e = t < 0;
            this._setEndings(e, !e, s);
          } else this._setEndings(!1, !1, s);
          (this._loopCount = r),
            (this.time = i),
            this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: n,
            });
        }
      } else this.time = i;
      if (s && 1 == (1 & r)) return e - i;
    }
    return i;
  }
  _setEndings(t, e, n) {
    const i = this._interpolantSettings;
    n
      ? ((i.endingStart = Oe), (i.endingEnd = Oe))
      : ((i.endingStart = t ? (this.zeroSlopeAtStart ? Oe : De) : Fe),
        (i.endingEnd = e ? (this.zeroSlopeAtEnd ? Oe : De) : Fe));
  }
  _scheduleFading(t, e, n) {
    const i = this._mixer,
      r = i.time;
    let s = this._weightInterpolant;
    null === s &&
      ((s = i._lendControlInterpolant()), (this._weightInterpolant = s));
    const a = s.parameterPositions,
      o = s.sampleValues;
    return (a[0] = r), (o[0] = e), (a[1] = r + t), (o[1] = n), this;
  }
}
const om = new Float32Array(1);
class lm extends kn {
  constructor(t) {
    super(),
      (this._root = t),
      this._initMemoryManager(),
      (this._accuIndex = 0),
      (this.time = 0),
      (this.timeScale = 1);
  }
  _bindAction(t, e) {
    const n = t._localRoot || this._root,
      i = t._clip.tracks,
      r = i.length,
      s = t._propertyBindings,
      a = t._interpolants,
      o = n.uuid,
      l = this._bindingsByRootAndName;
    let c = l[o];
    void 0 === c && ((c = {}), (l[o] = c));
    for (let t = 0; t !== r; ++t) {
      const r = i[t],
        l = r.name;
      let h = c[l];
      if (void 0 !== h) ++h.referenceCount, (s[t] = h);
      else {
        if (((h = s[t]), void 0 !== h)) {
          null === h._cacheIndex &&
            (++h.referenceCount, this._addInactiveBinding(h, o, l));
          continue;
        }
        const i = e && e._propertyBindings[t].binding.parsedPath;
        (h = new Kp(rm.create(n, l, i), r.ValueTypeName, r.getValueSize())),
          ++h.referenceCount,
          this._addInactiveBinding(h, o, l),
          (s[t] = h);
      }
      a[t].resultBuffer = h.buffer;
    }
  }
  _activateAction(t) {
    if (!this._isActiveAction(t)) {
      if (null === t._cacheIndex) {
        const e = (t._localRoot || this._root).uuid,
          n = t._clip.uuid,
          i = this._actionsByClip[n];
        this._bindAction(t, i && i.knownActions[0]),
          this._addInactiveAction(t, n, e);
      }
      const e = t._propertyBindings;
      for (let t = 0, n = e.length; t !== n; ++t) {
        const n = e[t];
        0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
      }
      this._lendAction(t);
    }
  }
  _deactivateAction(t) {
    if (this._isActiveAction(t)) {
      const e = t._propertyBindings;
      for (let t = 0, n = e.length; t !== n; ++t) {
        const n = e[t];
        0 == --n.useCount &&
          (n.restoreOriginalState(), this._takeBackBinding(n));
      }
      this._takeBackAction(t);
    }
  }
  _initMemoryManager() {
    (this._actions = []),
      (this._nActiveActions = 0),
      (this._actionsByClip = {}),
      (this._bindings = []),
      (this._nActiveBindings = 0),
      (this._bindingsByRootAndName = {}),
      (this._controlInterpolants = []),
      (this._nActiveControlInterpolants = 0);
    const t = this;
    this.stats = {
      actions: {
        get total() {
          return t._actions.length;
        },
        get inUse() {
          return t._nActiveActions;
        },
      },
      bindings: {
        get total() {
          return t._bindings.length;
        },
        get inUse() {
          return t._nActiveBindings;
        },
      },
      controlInterpolants: {
        get total() {
          return t._controlInterpolants.length;
        },
        get inUse() {
          return t._nActiveControlInterpolants;
        },
      },
    };
  }
  _isActiveAction(t) {
    const e = t._cacheIndex;
    return null !== e && e < this._nActiveActions;
  }
  _addInactiveAction(t, e, n) {
    const i = this._actions,
      r = this._actionsByClip;
    let s = r[e];
    if (void 0 === s)
      (s = { knownActions: [t], actionByRoot: {} }),
        (t._byClipCacheIndex = 0),
        (r[e] = s);
    else {
      const e = s.knownActions;
      (t._byClipCacheIndex = e.length), e.push(t);
    }
    (t._cacheIndex = i.length), i.push(t), (s.actionByRoot[n] = t);
  }
  _removeInactiveAction(t) {
    const e = this._actions,
      n = e[e.length - 1],
      i = t._cacheIndex;
    (n._cacheIndex = i), (e[i] = n), e.pop(), (t._cacheIndex = null);
    const r = t._clip.uuid,
      s = this._actionsByClip,
      a = s[r],
      o = a.knownActions,
      l = o[o.length - 1],
      c = t._byClipCacheIndex;
    (l._byClipCacheIndex = c),
      (o[c] = l),
      o.pop(),
      (t._byClipCacheIndex = null);
    delete a.actionByRoot[(t._localRoot || this._root).uuid],
      0 === o.length && delete s[r],
      this._removeInactiveBindingsForAction(t);
  }
  _removeInactiveBindingsForAction(t) {
    const e = t._propertyBindings;
    for (let t = 0, n = e.length; t !== n; ++t) {
      const n = e[t];
      0 == --n.referenceCount && this._removeInactiveBinding(n);
    }
  }
  _lendAction(t) {
    const e = this._actions,
      n = t._cacheIndex,
      i = this._nActiveActions++,
      r = e[i];
    (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
  }
  _takeBackAction(t) {
    const e = this._actions,
      n = t._cacheIndex,
      i = --this._nActiveActions,
      r = e[i];
    (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
  }
  _addInactiveBinding(t, e, n) {
    const i = this._bindingsByRootAndName,
      r = this._bindings;
    let s = i[e];
    void 0 === s && ((s = {}), (i[e] = s)),
      (s[n] = t),
      (t._cacheIndex = r.length),
      r.push(t);
  }
  _removeInactiveBinding(t) {
    const e = this._bindings,
      n = t.binding,
      i = n.rootNode.uuid,
      r = n.path,
      s = this._bindingsByRootAndName,
      a = s[i],
      o = e[e.length - 1],
      l = t._cacheIndex;
    (o._cacheIndex = l),
      (e[l] = o),
      e.pop(),
      delete a[r],
      0 === Object.keys(a).length && delete s[i];
  }
  _lendBinding(t) {
    const e = this._bindings,
      n = t._cacheIndex,
      i = this._nActiveBindings++,
      r = e[i];
    (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
  }
  _takeBackBinding(t) {
    const e = this._bindings,
      n = t._cacheIndex,
      i = --this._nActiveBindings,
      r = e[i];
    (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
  }
  _lendControlInterpolant() {
    const t = this._controlInterpolants,
      e = this._nActiveControlInterpolants++;
    let n = t[e];
    return (
      void 0 === n &&
        ((n = new Id(new Float32Array(2), new Float32Array(2), 1, om)),
        (n.__cacheIndex = e),
        (t[e] = n)),
      n
    );
  }
  _takeBackControlInterpolant(t) {
    const e = this._controlInterpolants,
      n = t.__cacheIndex,
      i = --this._nActiveControlInterpolants,
      r = e[i];
    (t.__cacheIndex = i), (e[i] = t), (r.__cacheIndex = n), (e[n] = r);
  }
  clipAction(t, e, n) {
    const i = e || this._root,
      r = i.uuid;
    let s = "string" == typeof t ? Vd.findByName(i, t) : t;
    const a = null !== s ? s.uuid : t,
      o = this._actionsByClip[a];
    let l = null;
    if ((void 0 === n && (n = null !== s ? s.blendMode : Be), void 0 !== o)) {
      const t = o.actionByRoot[r];
      if (void 0 !== t && t.blendMode === n) return t;
      (l = o.knownActions[0]), null === s && (s = l._clip);
    }
    if (null === s) return null;
    const c = new am(this, s, e, n);
    return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
  }
  existingAction(t, e) {
    const n = e || this._root,
      i = n.uuid,
      r = "string" == typeof t ? Vd.findByName(n, t) : t,
      s = r ? r.uuid : t,
      a = this._actionsByClip[s];
    return (void 0 !== a && a.actionByRoot[i]) || null;
  }
  stopAllAction() {
    const t = this._actions;
    for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
    return this;
  }
  update(t) {
    t *= this.timeScale;
    const e = this._actions,
      n = this._nActiveActions,
      i = (this.time += t),
      r = Math.sign(t),
      s = (this._accuIndex ^= 1);
    for (let a = 0; a !== n; ++a) {
      e[a]._update(i, t, r, s);
    }
    const a = this._bindings,
      o = this._nActiveBindings;
    for (let t = 0; t !== o; ++t) a[t].apply(s);
    return this;
  }
  setTime(t) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(t);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(t) {
    const e = this._actions,
      n = t.uuid,
      i = this._actionsByClip,
      r = i[n];
    if (void 0 !== r) {
      const t = r.knownActions;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const i = t[n];
        this._deactivateAction(i);
        const r = i._cacheIndex,
          s = e[e.length - 1];
        (i._cacheIndex = null),
          (i._byClipCacheIndex = null),
          (s._cacheIndex = r),
          (e[r] = s),
          e.pop(),
          this._removeInactiveBindingsForAction(i);
      }
      delete i[n];
    }
  }
  uncacheRoot(t) {
    const e = t.uuid,
      n = this._actionsByClip;
    for (const t in n) {
      const i = n[t].actionByRoot[e];
      void 0 !== i &&
        (this._deactivateAction(i), this._removeInactiveAction(i));
    }
    const i = this._bindingsByRootAndName[e];
    if (void 0 !== i)
      for (const t in i) {
        const e = i[t];
        e.restoreOriginalState(), this._removeInactiveBinding(e);
      }
  }
  uncacheAction(t, e) {
    const n = this.existingAction(t, e);
    null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
class cm {
  constructor(t) {
    this.value = t;
  }
  clone() {
    return new cm(
      void 0 === this.value.clone ? this.value : this.value.clone()
    );
  }
}
let hm = 0;
class um extends kn {
  constructor() {
    super(),
      (this.isUniformsGroup = !0),
      Object.defineProperty(this, "id", { value: hm++ }),
      (this.name = ""),
      (this.usage = An),
      (this.uniforms = []);
  }
  add(t) {
    return this.uniforms.push(t), this;
  }
  remove(t) {
    const e = this.uniforms.indexOf(t);
    return -1 !== e && this.uniforms.splice(e, 1), this;
  }
  setName(t) {
    return (this.name = t), this;
  }
  setUsage(t) {
    return (this.usage = t), this;
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this;
  }
  copy(t) {
    (this.name = t.name), (this.usage = t.usage);
    const e = t.uniforms;
    this.uniforms.length = 0;
    for (let t = 0, n = e.length; t < n; t++) {
      const n = Array.isArray(e[t]) ? e[t] : [e[t]];
      for (let t = 0; t < n.length; t++) this.uniforms.push(n[t].clone());
    }
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class dm extends ac {
  constructor(t, e, n = 1) {
    super(t, e),
      (this.isInstancedInterleavedBuffer = !0),
      (this.meshPerAttribute = n);
  }
  copy(t) {
    return super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this;
  }
  clone(t) {
    const e = super.clone(t);
    return (e.meshPerAttribute = this.meshPerAttribute), e;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.isInstancedInterleavedBuffer = !0),
      (e.meshPerAttribute = this.meshPerAttribute),
      e
    );
  }
}
class pm {
  constructor(t, e, n, i, r) {
    (this.isGLBufferAttribute = !0),
      (this.name = ""),
      (this.buffer = t),
      (this.type = e),
      (this.itemSize = n),
      (this.elementSize = i),
      (this.count = r),
      (this.version = 0);
  }
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  setBuffer(t) {
    return (this.buffer = t), this;
  }
  setType(t, e) {
    return (this.type = t), (this.elementSize = e), this;
  }
  setItemSize(t) {
    return (this.itemSize = t), this;
  }
  setCount(t) {
    return (this.count = t), this;
  }
}
const mm = new ar();
class fm {
  constructor(t, e, n = 0, i = 1 / 0) {
    (this.ray = new sr(t, e)),
      (this.near = n),
      (this.far = i),
      (this.camera = null),
      (this.layers = new vr()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      });
  }
  set(t, e) {
    this.ray.set(t, e);
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
        this.ray.direction
          .set(t.x, t.y, 0.5)
          .unproject(e)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = e))
      : e.isOrthographicCamera
      ? (this.ray.origin
          .set(t.x, t.y, (e.near + e.far) / (e.near - e.far))
          .unproject(e),
        this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
        (this.camera = e))
      : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  setFromXRController(t) {
    return (
      mm.identity().extractRotation(t.matrixWorld),
      this.ray.origin.setFromMatrixPosition(t.matrixWorld),
      this.ray.direction.set(0, 0, -1).applyMatrix4(mm),
      this
    );
  }
  intersectObject(t, e = !0, n = []) {
    return vm(t, this, n, e), n.sort(gm), n;
  }
  intersectObjects(t, e = !0, n = []) {
    for (let i = 0, r = t.length; i < r; i++) vm(t[i], this, n, e);
    return n.sort(gm), n;
  }
}
function gm(t, e) {
  return t.distance - e.distance;
}
function vm(t, e, n, i) {
  let r = !0;
  if (t.layers.test(e.layers)) {
    !1 === t.raycast(e, n) && (r = !1);
  }
  if (!0 === r && !0 === i) {
    const i = t.children;
    for (let t = 0, r = i.length; t < r; t++) vm(i[t], e, n, !0);
  }
}
class _m {
  constructor(t = 1, e = 0, n = 0) {
    return (this.radius = t), (this.phi = e), (this.theta = n), this;
  }
  set(t, e, n) {
    return (this.radius = t), (this.phi = e), (this.theta = n), this;
  }
  copy(t) {
    return (
      (this.radius = t.radius), (this.phi = t.phi), (this.theta = t.theta), this
    );
  }
  makeSafe() {
    const t = 1e-6;
    return (this.phi = Math.max(t, Math.min(Math.PI - t, this.phi))), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return (
      (this.radius = Math.sqrt(t * t + e * e + n * n)),
      0 === this.radius
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(t, n)),
          (this.phi = Math.acos(jn(e / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class xm {
  constructor(t = 1, e = 0, n = 0) {
    return (this.radius = t), (this.theta = e), (this.y = n), this;
  }
  set(t, e, n) {
    return (this.radius = t), (this.theta = e), (this.y = n), this;
  }
  copy(t) {
    return (
      (this.radius = t.radius), (this.theta = t.theta), (this.y = t.y), this
    );
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return (
      (this.radius = Math.sqrt(t * t + n * n)),
      (this.theta = Math.atan2(t, n)),
      (this.y = e),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ym = new $n();
class Mm {
  constructor(t = new $n(1 / 0, 1 / 0), e = new $n(-1 / 0, -1 / 0)) {
    (this.isBox2 = !0), (this.min = t), (this.max = e);
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = ym.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = 1 / 0),
      (this.max.x = this.max.y = -1 / 0),
      this
    );
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(t) {
    return this.isEmpty()
      ? t.set(0, 0)
      : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  containsPoint(t) {
    return !(
      t.x < this.min.x ||
      t.x > this.max.x ||
      t.y < this.min.y ||
      t.y > this.max.y
    );
  }
  containsBox(t) {
    return (
      this.min.x <= t.min.x &&
      t.max.x <= this.max.x &&
      this.min.y <= t.min.y &&
      t.max.y <= this.max.y
    );
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(t) {
    return !(
      t.max.x < this.min.x ||
      t.min.x > this.max.x ||
      t.max.y < this.min.y ||
      t.min.y > this.max.y
    );
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, ym).distanceTo(t);
  }
  intersect(t) {
    return (
      this.min.max(t.min),
      this.max.min(t.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Sm = new Pi(),
  bm = new Pi();
class wm {
  constructor(t = new Pi(), e = new Pi()) {
    (this.start = t), (this.end = e);
  }
  set(t, e) {
    return this.start.copy(t), this.end.copy(e), this;
  }
  copy(t) {
    return this.start.copy(t.start), this.end.copy(t.end), this;
  }
  getCenter(t) {
    return t.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(t) {
    return t.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(t, e) {
    return this.delta(e).multiplyScalar(t).add(this.start);
  }
  closestPointToPointParameter(t, e) {
    Sm.subVectors(t, this.start), bm.subVectors(this.end, this.start);
    const n = bm.dot(bm);
    let i = bm.dot(Sm) / n;
    return e && (i = jn(i, 0, 1)), i;
  }
  closestPointToPoint(t, e, n) {
    const i = this.closestPointToPointParameter(t, e);
    return this.delta(n).multiplyScalar(i).add(this.start);
  }
  applyMatrix4(t) {
    return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
  }
  equals(t) {
    return t.start.equals(this.start) && t.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Tm = new Pi();
class Em extends Ur {
  constructor(t, e) {
    super(),
      (this.light = t),
      (this.matrixAutoUpdate = !1),
      (this.color = e),
      (this.type = "SpotLightHelper");
    const n = new ws(),
      i = [
        0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1,
        0, 0, 0, 0, -1, 1,
      ];
    for (let t = 0, e = 1, n = 32; t < n; t++, e++) {
      const r = (t / n) * Math.PI * 2,
        s = (e / n) * Math.PI * 2;
      i.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1);
    }
    n.setAttribute("position", new gs(i, 3));
    const r = new vh({ fog: !1, toneMapped: !1 });
    (this.cone = new Ch(n, r)), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1),
      this.light.target.updateWorldMatrix(!0, !1),
      this.parent
        ? (this.parent.updateWorldMatrix(!0),
          this.matrix
            .copy(this.parent.matrixWorld)
            .invert()
            .multiply(this.light.matrixWorld))
        : this.matrix.copy(this.light.matrixWorld),
      this.matrixWorld.copy(this.light.matrixWorld);
    const t = this.light.distance ? this.light.distance : 1e3,
      e = t * Math.tan(this.light.angle);
    this.cone.scale.set(e, e, t),
      Tm.setFromMatrixPosition(this.light.target.matrixWorld),
      this.cone.lookAt(Tm),
      void 0 !== this.color
        ? this.cone.material.color.set(this.color)
        : this.cone.material.color.copy(this.light.color);
  }
}
const Am = new Pi(),
  Rm = new ar(),
  Cm = new ar();
class Pm extends Ch {
  constructor(t) {
    const e = Im(t),
      n = new ws(),
      i = [],
      r = [],
      s = new Zr(0, 0, 1),
      a = new Zr(0, 1, 0);
    for (let t = 0; t < e.length; t++) {
      const n = e[t];
      n.parent &&
        n.parent.isBone &&
        (i.push(0, 0, 0),
        i.push(0, 0, 0),
        r.push(s.r, s.g, s.b),
        r.push(a.r, a.g, a.b));
    }
    n.setAttribute("position", new gs(i, 3)),
      n.setAttribute("color", new gs(r, 3));
    super(
      n,
      new vh({
        vertexColors: !0,
        depthTest: !1,
        depthWrite: !1,
        toneMapped: !1,
        transparent: !0,
      })
    ),
      (this.isSkeletonHelper = !0),
      (this.type = "SkeletonHelper"),
      (this.root = t),
      (this.bones = e),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }
  updateMatrixWorld(t) {
    const e = this.bones,
      n = this.geometry,
      i = n.getAttribute("position");
    Cm.copy(this.root.matrixWorld).invert();
    for (let t = 0, n = 0; t < e.length; t++) {
      const r = e[t];
      r.parent &&
        r.parent.isBone &&
        (Rm.multiplyMatrices(Cm, r.matrixWorld),
        Am.setFromMatrixPosition(Rm),
        i.setXYZ(n, Am.x, Am.y, Am.z),
        Rm.multiplyMatrices(Cm, r.parent.matrixWorld),
        Am.setFromMatrixPosition(Rm),
        i.setXYZ(n + 1, Am.x, Am.y, Am.z),
        (n += 2));
    }
    (n.getAttribute("position").needsUpdate = !0), super.updateMatrixWorld(t);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function Im(t) {
  const e = [];
  !0 === t.isBone && e.push(t);
  for (let n = 0; n < t.children.length; n++)
    e.push.apply(e, Im(t.children[n]));
  return e;
}
class Lm extends Hs {
  constructor(t, e, n) {
    super(new sd(e, 4, 2), new Qr({ wireframe: !0, fog: !1, toneMapped: !1 })),
      (this.light = t),
      (this.color = n),
      (this.type = "PointLightHelper"),
      (this.matrix = this.light.matrixWorld),
      (this.matrixAutoUpdate = !1),
      this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1),
      void 0 !== this.color
        ? this.material.color.set(this.color)
        : this.material.color.copy(this.light.color);
  }
}
const Um = new Pi(),
  Nm = new Zr(),
  Dm = new Zr();
class Om extends Ur {
  constructor(t, e, n) {
    super(),
      (this.light = t),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = n),
      (this.type = "HemisphereLightHelper");
    const i = new nd(e);
    i.rotateY(0.5 * Math.PI),
      (this.material = new Qr({ wireframe: !0, fog: !1, toneMapped: !1 })),
      void 0 === this.color && (this.material.vertexColors = !0);
    const r = i.getAttribute("position"),
      s = new Float32Array(3 * r.count);
    i.setAttribute("color", new os(s, 3)),
      this.add(new Hs(i, this.material)),
      this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const t = this.children[0];
    if (void 0 !== this.color) this.material.color.set(this.color);
    else {
      const e = t.geometry.getAttribute("color");
      Nm.copy(this.light.color), Dm.copy(this.light.groundColor);
      for (let t = 0, n = e.count; t < n; t++) {
        const i = t < n / 2 ? Nm : Dm;
        e.setXYZ(t, i.r, i.g, i.b);
      }
      e.needsUpdate = !0;
    }
    this.light.updateWorldMatrix(!0, !1),
      t.lookAt(Um.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class Fm extends Ch {
  constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
    (n = new Zr(n)), (i = new Zr(i));
    const r = e / 2,
      s = t / e,
      a = t / 2,
      o = [],
      l = [];
    for (let t = 0, c = 0, h = -a; t <= e; t++, h += s) {
      o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
      const e = t === r ? n : i;
      e.toArray(l, c),
        (c += 3),
        e.toArray(l, c),
        (c += 3),
        e.toArray(l, c),
        (c += 3),
        e.toArray(l, c),
        (c += 3);
    }
    const c = new ws();
    c.setAttribute("position", new gs(o, 3)),
      c.setAttribute("color", new gs(l, 3));
    super(c, new vh({ vertexColors: !0, toneMapped: !1 })),
      (this.type = "GridHelper");
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Bm extends Ch {
  constructor(t = 10, e = 16, n = 8, i = 64, r = 4473924, s = 8947848) {
    (r = new Zr(r)), (s = new Zr(s));
    const a = [],
      o = [];
    if (e > 1)
      for (let n = 0; n < e; n++) {
        const i = (n / e) * (2 * Math.PI),
          l = Math.sin(i) * t,
          c = Math.cos(i) * t;
        a.push(0, 0, 0), a.push(l, 0, c);
        const h = 1 & n ? r : s;
        o.push(h.r, h.g, h.b), o.push(h.r, h.g, h.b);
      }
    for (let e = 0; e < n; e++) {
      const l = 1 & e ? r : s,
        c = t - (t / n) * e;
      for (let t = 0; t < i; t++) {
        let e = (t / i) * (2 * Math.PI),
          n = Math.sin(e) * c,
          r = Math.cos(e) * c;
        a.push(n, 0, r),
          o.push(l.r, l.g, l.b),
          (e = ((t + 1) / i) * (2 * Math.PI)),
          (n = Math.sin(e) * c),
          (r = Math.cos(e) * c),
          a.push(n, 0, r),
          o.push(l.r, l.g, l.b);
      }
    }
    const l = new ws();
    l.setAttribute("position", new gs(a, 3)),
      l.setAttribute("color", new gs(o, 3));
    super(l, new vh({ vertexColors: !0, toneMapped: !1 })),
      (this.type = "PolarGridHelper");
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const zm = new Pi(),
  km = new Pi(),
  Vm = new Pi();
class Hm extends Ur {
  constructor(t, e, n) {
    super(),
      (this.light = t),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = n),
      (this.type = "DirectionalLightHelper"),
      void 0 === e && (e = 1);
    let i = new ws();
    i.setAttribute(
      "position",
      new gs([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3)
    );
    const r = new vh({ fog: !1, toneMapped: !1 });
    (this.lightPlane = new Th(i, r)),
      this.add(this.lightPlane),
      (i = new ws()),
      i.setAttribute("position", new gs([0, 0, 0, 0, 0, 1], 3)),
      (this.targetLine = new Th(i, r)),
      this.add(this.targetLine),
      this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(),
      this.lightPlane.material.dispose(),
      this.targetLine.geometry.dispose(),
      this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1),
      this.light.target.updateWorldMatrix(!0, !1),
      zm.setFromMatrixPosition(this.light.matrixWorld),
      km.setFromMatrixPosition(this.light.target.matrixWorld),
      Vm.subVectors(km, zm),
      this.lightPlane.lookAt(km),
      void 0 !== this.color
        ? (this.lightPlane.material.color.set(this.color),
          this.targetLine.material.color.set(this.color))
        : (this.lightPlane.material.color.copy(this.light.color),
          this.targetLine.material.color.copy(this.light.color)),
      this.targetLine.lookAt(km),
      (this.targetLine.scale.z = Vm.length());
  }
}
const Gm = new Pi(),
  Wm = new Js();
class Xm extends Ch {
  constructor(t) {
    const e = new ws(),
      n = new vh({ color: 16777215, vertexColors: !0, toneMapped: !1 }),
      i = [],
      r = [],
      s = {};
    function a(t, e) {
      o(t), o(e);
    }
    function o(t) {
      i.push(0, 0, 0),
        r.push(0, 0, 0),
        void 0 === s[t] && (s[t] = []),
        s[t].push(i.length / 3 - 1);
    }
    a("n1", "n2"),
      a("n2", "n4"),
      a("n4", "n3"),
      a("n3", "n1"),
      a("f1", "f2"),
      a("f2", "f4"),
      a("f4", "f3"),
      a("f3", "f1"),
      a("n1", "f1"),
      a("n2", "f2"),
      a("n3", "f3"),
      a("n4", "f4"),
      a("p", "n1"),
      a("p", "n2"),
      a("p", "n3"),
      a("p", "n4"),
      a("u1", "u2"),
      a("u2", "u3"),
      a("u3", "u1"),
      a("c", "t"),
      a("p", "c"),
      a("cn1", "cn2"),
      a("cn3", "cn4"),
      a("cf1", "cf2"),
      a("cf3", "cf4"),
      e.setAttribute("position", new gs(i, 3)),
      e.setAttribute("color", new gs(r, 3)),
      super(e, n),
      (this.type = "CameraHelper"),
      (this.camera = t),
      this.camera.updateProjectionMatrix &&
        this.camera.updateProjectionMatrix(),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.pointMap = s),
      this.update();
    const l = new Zr(16755200),
      c = new Zr(16711680),
      h = new Zr(43775),
      u = new Zr(16777215),
      d = new Zr(3355443);
    this.setColors(l, c, h, u, d);
  }
  setColors(t, e, n, i, r) {
    const s = this.geometry.getAttribute("color");
    s.setXYZ(0, t.r, t.g, t.b),
      s.setXYZ(1, t.r, t.g, t.b),
      s.setXYZ(2, t.r, t.g, t.b),
      s.setXYZ(3, t.r, t.g, t.b),
      s.setXYZ(4, t.r, t.g, t.b),
      s.setXYZ(5, t.r, t.g, t.b),
      s.setXYZ(6, t.r, t.g, t.b),
      s.setXYZ(7, t.r, t.g, t.b),
      s.setXYZ(8, t.r, t.g, t.b),
      s.setXYZ(9, t.r, t.g, t.b),
      s.setXYZ(10, t.r, t.g, t.b),
      s.setXYZ(11, t.r, t.g, t.b),
      s.setXYZ(12, t.r, t.g, t.b),
      s.setXYZ(13, t.r, t.g, t.b),
      s.setXYZ(14, t.r, t.g, t.b),
      s.setXYZ(15, t.r, t.g, t.b),
      s.setXYZ(16, t.r, t.g, t.b),
      s.setXYZ(17, t.r, t.g, t.b),
      s.setXYZ(18, t.r, t.g, t.b),
      s.setXYZ(19, t.r, t.g, t.b),
      s.setXYZ(20, t.r, t.g, t.b),
      s.setXYZ(21, t.r, t.g, t.b),
      s.setXYZ(22, t.r, t.g, t.b),
      s.setXYZ(23, t.r, t.g, t.b),
      s.setXYZ(24, e.r, e.g, e.b),
      s.setXYZ(25, e.r, e.g, e.b),
      s.setXYZ(26, e.r, e.g, e.b),
      s.setXYZ(27, e.r, e.g, e.b),
      s.setXYZ(28, e.r, e.g, e.b),
      s.setXYZ(29, e.r, e.g, e.b),
      s.setXYZ(30, e.r, e.g, e.b),
      s.setXYZ(31, e.r, e.g, e.b),
      s.setXYZ(32, n.r, n.g, n.b),
      s.setXYZ(33, n.r, n.g, n.b),
      s.setXYZ(34, n.r, n.g, n.b),
      s.setXYZ(35, n.r, n.g, n.b),
      s.setXYZ(36, n.r, n.g, n.b),
      s.setXYZ(37, n.r, n.g, n.b),
      s.setXYZ(38, i.r, i.g, i.b),
      s.setXYZ(39, i.r, i.g, i.b),
      s.setXYZ(40, r.r, r.g, r.b),
      s.setXYZ(41, r.r, r.g, r.b),
      s.setXYZ(42, r.r, r.g, r.b),
      s.setXYZ(43, r.r, r.g, r.b),
      s.setXYZ(44, r.r, r.g, r.b),
      s.setXYZ(45, r.r, r.g, r.b),
      s.setXYZ(46, r.r, r.g, r.b),
      s.setXYZ(47, r.r, r.g, r.b),
      s.setXYZ(48, r.r, r.g, r.b),
      s.setXYZ(49, r.r, r.g, r.b),
      (s.needsUpdate = !0);
  }
  update() {
    const t = this.geometry,
      e = this.pointMap;
    Wm.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
      jm("c", e, t, Wm, 0, 0, -1),
      jm("t", e, t, Wm, 0, 0, 1),
      jm("n1", e, t, Wm, -1, -1, -1),
      jm("n2", e, t, Wm, 1, -1, -1),
      jm("n3", e, t, Wm, -1, 1, -1),
      jm("n4", e, t, Wm, 1, 1, -1),
      jm("f1", e, t, Wm, -1, -1, 1),
      jm("f2", e, t, Wm, 1, -1, 1),
      jm("f3", e, t, Wm, -1, 1, 1),
      jm("f4", e, t, Wm, 1, 1, 1),
      jm("u1", e, t, Wm, 0.7, 1.1, -1),
      jm("u2", e, t, Wm, -0.7, 1.1, -1),
      jm("u3", e, t, Wm, 0, 2, -1),
      jm("cf1", e, t, Wm, -1, 0, 1),
      jm("cf2", e, t, Wm, 1, 0, 1),
      jm("cf3", e, t, Wm, 0, -1, 1),
      jm("cf4", e, t, Wm, 0, 1, 1),
      jm("cn1", e, t, Wm, -1, 0, -1),
      jm("cn2", e, t, Wm, 1, 0, -1),
      jm("cn3", e, t, Wm, 0, -1, -1),
      jm("cn4", e, t, Wm, 0, 1, -1),
      (t.getAttribute("position").needsUpdate = !0);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function jm(t, e, n, i, r, s, a) {
  Gm.set(r, s, a).unproject(i);
  const o = e[t];
  if (void 0 !== o) {
    const t = n.getAttribute("position");
    for (let e = 0, n = o.length; e < n; e++) t.setXYZ(o[e], Gm.x, Gm.y, Gm.z);
  }
}
const qm = new Ui();
class Ym extends Ch {
  constructor(t, e = 16776960) {
    const n = new Uint16Array([
        0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7,
      ]),
      i = new Float32Array(24),
      r = new ws();
    r.setIndex(new os(n, 1)),
      r.setAttribute("position", new os(i, 3)),
      super(r, new vh({ color: e, toneMapped: !1 })),
      (this.object = t),
      (this.type = "BoxHelper"),
      (this.matrixAutoUpdate = !1),
      this.update();
  }
  update(t) {
    if (
      (void 0 !== t &&
        console.warn("THREE.BoxHelper: .update() has no longer arguments."),
      void 0 !== this.object && qm.setFromObject(this.object),
      qm.isEmpty())
    )
      return;
    const e = qm.min,
      n = qm.max,
      i = this.geometry.attributes.position,
      r = i.array;
    (r[0] = n.x),
      (r[1] = n.y),
      (r[2] = n.z),
      (r[3] = e.x),
      (r[4] = n.y),
      (r[5] = n.z),
      (r[6] = e.x),
      (r[7] = e.y),
      (r[8] = n.z),
      (r[9] = n.x),
      (r[10] = e.y),
      (r[11] = n.z),
      (r[12] = n.x),
      (r[13] = n.y),
      (r[14] = e.z),
      (r[15] = e.x),
      (r[16] = n.y),
      (r[17] = e.z),
      (r[18] = e.x),
      (r[19] = e.y),
      (r[20] = e.z),
      (r[21] = n.x),
      (r[22] = e.y),
      (r[23] = e.z),
      (i.needsUpdate = !0),
      this.geometry.computeBoundingSphere();
  }
  setFromObject(t) {
    return (this.object = t), this.update(), this;
  }
  copy(t, e) {
    return super.copy(t, e), (this.object = t.object), this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Zm extends Ch {
  constructor(t, e = 16776960) {
    const n = new Uint16Array([
        0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7,
      ]),
      i = new ws();
    i.setIndex(new os(n, 1)),
      i.setAttribute(
        "position",
        new gs(
          [
            1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1,
            -1, 1, -1, -1,
          ],
          3
        )
      ),
      super(i, new vh({ color: e, toneMapped: !1 })),
      (this.box = t),
      (this.type = "Box3Helper"),
      this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(t) {
    const e = this.box;
    e.isEmpty() ||
      (e.getCenter(this.position),
      e.getSize(this.scale),
      this.scale.multiplyScalar(0.5),
      super.updateMatrixWorld(t));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Jm extends Th {
  constructor(t, e = 1, n = 16776960) {
    const i = n,
      r = new ws();
    r.setAttribute(
      "position",
      new gs(
        [
          1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0,
          1, 1, 0,
        ],
        3
      )
    ),
      r.computeBoundingSphere(),
      super(r, new vh({ color: i, toneMapped: !1 })),
      (this.type = "PlaneHelper"),
      (this.plane = t),
      (this.size = e);
    const s = new ws();
    s.setAttribute(
      "position",
      new gs([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], 3)
    ),
      s.computeBoundingSphere(),
      this.add(
        new Hs(
          s,
          new Qr({
            color: i,
            opacity: 0.2,
            transparent: !0,
            depthWrite: !1,
            toneMapped: !1,
          })
        )
      );
  }
  updateMatrixWorld(t) {
    this.position.set(0, 0, 0),
      this.scale.set(0.5 * this.size, 0.5 * this.size, 1),
      this.lookAt(this.plane.normal),
      this.translateZ(-this.plane.constant),
      super.updateMatrixWorld(t);
  }
  dispose() {
    this.geometry.dispose(),
      this.material.dispose(),
      this.children[0].geometry.dispose(),
      this.children[0].material.dispose();
  }
}
const Km = new Pi();
let $m, Qm;
class tf extends Ur {
  constructor(
    t = new Pi(0, 0, 1),
    e = new Pi(0, 0, 0),
    n = 1,
    i = 16776960,
    r = 0.2 * n,
    s = 0.2 * r
  ) {
    super(),
      (this.type = "ArrowHelper"),
      void 0 === $m &&
        (($m = new ws()),
        $m.setAttribute("position", new gs([0, 0, 0, 0, 1, 0], 3)),
        (Qm = new fu(0, 0.5, 1, 5, 1)),
        Qm.translate(0, -0.5, 0)),
      this.position.copy(e),
      (this.line = new Th($m, new vh({ color: i, toneMapped: !1 }))),
      (this.line.matrixAutoUpdate = !1),
      this.add(this.line),
      (this.cone = new Hs(Qm, new Qr({ color: i, toneMapped: !1 }))),
      (this.cone.matrixAutoUpdate = !1),
      this.add(this.cone),
      this.setDirection(t),
      this.setLength(n, r, s);
  }
  setDirection(t) {
    if (t.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
    else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
    else {
      Km.set(t.z, 0, -t.x).normalize();
      const e = Math.acos(t.y);
      this.quaternion.setFromAxisAngle(Km, e);
    }
  }
  setLength(t, e = 0.2 * t, n = 0.2 * e) {
    this.line.scale.set(1, Math.max(1e-4, t - e), 1),
      this.line.updateMatrix(),
      this.cone.scale.set(n, e, n),
      (this.cone.position.y = t),
      this.cone.updateMatrix();
  }
  setColor(t) {
    this.line.material.color.set(t), this.cone.material.color.set(t);
  }
  copy(t) {
    return (
      super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this
    );
  }
  dispose() {
    this.line.geometry.dispose(),
      this.line.material.dispose(),
      this.cone.geometry.dispose(),
      this.cone.material.dispose();
  }
}
class ef extends Ch {
  constructor(t = 1) {
    const e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
      n = new ws();
    n.setAttribute("position", new gs(e, 3)),
      n.setAttribute(
        "color",
        new gs([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], 3)
      );
    super(n, new vh({ vertexColors: !0, toneMapped: !1 })),
      (this.type = "AxesHelper");
  }
  setColors(t, e, n) {
    const i = new Zr(),
      r = this.geometry.attributes.color.array;
    return (
      i.set(t),
      i.toArray(r, 0),
      i.toArray(r, 3),
      i.set(e),
      i.toArray(r, 6),
      i.toArray(r, 9),
      i.set(n),
      i.toArray(r, 12),
      i.toArray(r, 15),
      (this.geometry.attributes.color.needsUpdate = !0),
      this
    );
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class nf {
  constructor() {
    (this.type = "ShapePath"),
      (this.color = new Zr()),
      (this.subPaths = []),
      (this.currentPath = null);
  }
  moveTo(t, e) {
    return (
      (this.currentPath = new uu()),
      this.subPaths.push(this.currentPath),
      this.currentPath.moveTo(t, e),
      this
    );
  }
  lineTo(t, e) {
    return this.currentPath.lineTo(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    return this.currentPath.quadraticCurveTo(t, e, n, i), this;
  }
  bezierCurveTo(t, e, n, i, r, s) {
    return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this;
  }
  splineThru(t) {
    return this.currentPath.splineThru(t), this;
  }
  toShapes(t) {
    function e(t, e) {
      const n = e.length;
      let i = !1;
      for (let r = n - 1, s = 0; s < n; r = s++) {
        let n = e[r],
          a = e[s],
          o = a.x - n.x,
          l = a.y - n.y;
        if (Math.abs(l) > Number.EPSILON) {
          if (
            (l < 0 && ((n = e[s]), (o = -o), (a = e[r]), (l = -l)),
            t.y < n.y || t.y > a.y)
          )
            continue;
          if (t.y === n.y) {
            if (t.x === n.x) return !0;
          } else {
            const e = l * (t.x - n.x) - o * (t.y - n.y);
            if (0 === e) return !0;
            if (e < 0) continue;
            i = !i;
          }
        } else {
          if (t.y !== n.y) continue;
          if ((a.x <= t.x && t.x <= n.x) || (n.x <= t.x && t.x <= a.x))
            return !0;
        }
      }
      return i;
    }
    const n = Ju.isClockWise,
      i = this.subPaths;
    if (0 === i.length) return [];
    let r, s, a;
    const o = [];
    if (1 === i.length)
      return (s = i[0]), (a = new wu()), (a.curves = s.curves), o.push(a), o;
    let l = !n(i[0].getPoints());
    l = t ? !l : l;
    const c = [],
      h = [];
    let u,
      d,
      p = [],
      m = 0;
    (h[m] = void 0), (p[m] = []);
    for (let e = 0, a = i.length; e < a; e++)
      (s = i[e]),
        (u = s.getPoints()),
        (r = n(u)),
        (r = t ? !r : r),
        r
          ? (!l && h[m] && m++,
            (h[m] = { s: new wu(), p: u }),
            (h[m].s.curves = s.curves),
            l && m++,
            (p[m] = []))
          : p[m].push({ h: s, p: u[0] });
    if (!h[0])
      return (function (t) {
        const e = [];
        for (let n = 0, i = t.length; n < i; n++) {
          const i = t[n],
            r = new wu();
          (r.curves = i.curves), e.push(r);
        }
        return e;
      })(i);
    if (h.length > 1) {
      let t = !1,
        n = 0;
      for (let t = 0, e = h.length; t < e; t++) c[t] = [];
      for (let i = 0, r = h.length; i < r; i++) {
        const r = p[i];
        for (let s = 0; s < r.length; s++) {
          const a = r[s];
          let o = !0;
          for (let r = 0; r < h.length; r++)
            e(a.p, h[r].p) &&
              (i !== r && n++, o ? ((o = !1), c[r].push(a)) : (t = !0));
          o && c[i].push(a);
        }
      }
      n > 0 && !1 === t && (p = c);
    }
    for (let t = 0, e = h.length; t < e; t++) {
      (a = h[t].s), o.push(a), (d = p[t]);
      for (let t = 0, e = d.length; t < e; t++) a.holes.push(d[t].h);
    }
    return o;
  }
}
class rf extends wi {
  constructor(t = 1, e = 1, n = 1, i = {}) {
    console.warn(
      'THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'
    ),
      super(t, e, { ...i, count: n }),
      (this.isWebGLMultipleRenderTargets = !0);
  }
  get texture() {
    return this.textures;
  }
}
"undefined" != typeof __THREE_DEVTOOLS__ &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: t } })
  ),
  "undefined" != typeof window &&
    (window.__THREE__
      ? console.warn("WARNING: Multiple instances of Three.js being imported.")
      : (window.__THREE__ = t));
export {
  et as ACESFilmicToneMapping,
  y as AddEquation,
  J as AddOperation,
  ze as AdditiveAnimationBlendMode,
  g as AdditiveBlending,
  it as AgXToneMapping,
  Bt as AlphaFormat,
  En as AlwaysCompare,
  V as AlwaysDepth,
  _n as AlwaysStencilFunc,
  vp as AmbientLight,
  am as AnimationAction,
  Vd as AnimationClip,
  Jd as AnimationLoader,
  lm as AnimationMixer,
  sm as AnimationObjectGroup,
  Rd as AnimationUtils,
  jh as ArcCurve,
  jl as ArrayCamera,
  tf as ArrowHelper,
  st as AttachedBindMode,
  Wp as Audio,
  Jp as AudioAnalyser,
  Ip as AudioContext,
  Gp as AudioListener,
  Lp as AudioLoader,
  ef as AxesHelper,
  d as BackSide,
  Ge as BasicDepthPacking,
  o as BasicShadowMap,
  gh as BatchedMesh,
  Bc as Bone,
  Nd as BooleanKeyframeTrack,
  Mm as Box2,
  Ui as Box3,
  Zm as Box3Helper,
  Ws as BoxGeometry,
  Ym as BoxHelper,
  os as BufferAttribute,
  ws as BufferGeometry,
  wp as BufferGeometryLoader,
  At as ByteType,
  Gd as Cache,
  Js as Camera,
  Xm as CameraHelper,
  Gh as CanvasTexture,
  pu as CapsuleGeometry,
  $h as CatmullRomCurve3,
  tt as CineonToneMapping,
  mu as CircleGeometry,
  mt as ClampToEdgeWrapping,
  Fp as Clock,
  Zr as Color,
  Dd as ColorKeyframeTrack,
  di as ColorManagement,
  Vh as CompressedArrayTexture,
  Hh as CompressedCubeTexture,
  kh as CompressedTexture,
  Kd as CompressedTextureLoader,
  gu as ConeGeometry,
  B as ConstantAlphaFactor,
  O as ConstantColorFactor,
  na as CubeCamera,
  lt as CubeReflectionMapping,
  ct as CubeRefractionMapping,
  ia as CubeTexture,
  Qd as CubeTextureLoader,
  dt as CubeUVReflectionMapping,
  nu as CubicBezierCurve,
  iu as CubicBezierCurve3,
  Pd as CubicInterpolant,
  r as CullFaceBack,
  s as CullFaceFront,
  a as CullFaceFrontBack,
  i as CullFaceNone,
  Wh as Curve,
  hu as CurvePath,
  x as CustomBlending,
  nt as CustomToneMapping,
  fu as CylinderGeometry,
  xm as Cylindrical,
  Ai as Data3DTexture,
  Ti as DataArrayTexture,
  zc as DataTexture,
  tp as DataTextureLoader,
  rs as DataUtils,
  on as DecrementStencilOp,
  cn as DecrementWrapStencilOp,
  Xd as DefaultLoadingManager,
  Gt as DepthFormat,
  Wt as DepthStencilFormat,
  $a as DepthTexture,
  at as DetachedBindMode,
  gp as DirectionalLight,
  Hm as DirectionalLightHelper,
  Ld as DiscreteInterpolant,
  Je as DisplayP3ColorSpace,
  _u as DodecahedronGeometry,
  p as DoubleSide,
  I as DstAlphaFactor,
  U as DstColorFactor,
  Nn as DynamicCopyUsage,
  Rn as DynamicDrawUsage,
  In as DynamicReadUsage,
  bu as EdgesGeometry,
  Xh as EllipseCurve,
  Mn as EqualCompare,
  W as EqualDepth,
  pn as EqualStencilFunc,
  ht as EquirectangularReflectionMapping,
  ut as EquirectangularRefractionMapping,
  gr as Euler,
  kn as EventDispatcher,
  Qu as ExtrudeGeometry,
  Zd as FileLoader,
  fs as Float16BufferAttribute,
  gs as Float32BufferAttribute,
  Lt as FloatType,
  rc as Fog,
  ic as FogExp2,
  zh as FramebufferTexture,
  u as FrontSide,
  ua as Frustum,
  pm as GLBufferAttribute,
  On as GLSL1,
  Fn as GLSL3,
  bn as GreaterCompare,
  j as GreaterDepth,
  Tn as GreaterEqualCompare,
  X as GreaterEqualDepth,
  vn as GreaterEqualStencilFunc,
  fn as GreaterStencilFunc,
  Fm as GridHelper,
  ql as Group,
  Ut as HalfFloatType,
  ip as HemisphereLight,
  Om as HemisphereLightHelper,
  ed as IcosahedronGeometry,
  Cp as ImageBitmapLoader,
  $d as ImageLoader,
  gi as ImageUtils,
  an as IncrementStencilOp,
  ln as IncrementWrapStencilOp,
  Gc as InstancedBufferAttribute,
  bp as InstancedBufferGeometry,
  dm as InstancedInterleavedBuffer,
  Kc as InstancedMesh,
  us as Int16BufferAttribute,
  ps as Int32BufferAttribute,
  ls as Int8BufferAttribute,
  Pt as IntType,
  ac as InterleavedBuffer,
  lc as InterleavedBufferAttribute,
  Cd as Interpolant,
  Le as InterpolateDiscrete,
  Ue as InterpolateLinear,
  Ne as InterpolateSmooth,
  hn as InvertStencilOp,
  rn as KeepStencilOp,
  Ud as KeyframeTrack,
  Ac as LOD,
  du as LatheGeometry,
  vr as Layers,
  yn as LessCompare,
  H as LessDepth,
  Sn as LessEqualCompare,
  G as LessEqualDepth,
  mn as LessEqualStencilFunc,
  dn as LessStencilFunc,
  np as Light,
  yp as LightProbe,
  Th as Line,
  wm as Line3,
  vh as LineBasicMaterial,
  ru as LineCurve,
  su as LineCurve3,
  Sd as LineDashedMaterial,
  Ph as LineLoop,
  Ch as LineSegments,
  Ke as LinearDisplayP3ColorSpace,
  Mt as LinearFilter,
  Id as LinearInterpolant,
  Tt as LinearMipMapLinearFilter,
  bt as LinearMipMapNearestFilter,
  wt as LinearMipmapLinearFilter,
  St as LinearMipmapNearestFilter,
  Ze as LinearSRGBColorSpace,
  $ as LinearToneMapping,
  $e as LinearTransfer,
  jd as Loader,
  Sp as LoaderUtils,
  Wd as LoadingManager,
  Ce as LoopOnce,
  Ie as LoopPingPong,
  Pe as LoopRepeat,
  Ht as LuminanceAlphaFormat,
  Vt as LuminanceFormat,
  e as MOUSE,
  $r as Material,
  Mp as MaterialLoader,
  Kn as MathUtils,
  Qn as Matrix3,
  ar as Matrix4,
  w as MaxEquation,
  Hs as Mesh,
  Qr as MeshBasicMaterial,
  Bl as MeshDepthMaterial,
  zl as MeshDistanceMaterial,
  yd as MeshLambertMaterial,
  Md as MeshMatcapMaterial,
  xd as MeshNormalMaterial,
  vd as MeshPhongMaterial,
  gd as MeshPhysicalMaterial,
  fd as MeshStandardMaterial,
  _d as MeshToonMaterial,
  b as MinEquation,
  ft as MirroredRepeatWrapping,
  Z as MixOperation,
  _ as MultiplyBlending,
  Y as MultiplyOperation,
  gt as NearestFilter,
  yt as NearestMipMapLinearFilter,
  _t as NearestMipMapNearestFilter,
  xt as NearestMipmapLinearFilter,
  vt as NearestMipmapNearestFilter,
  rt as NeutralToneMapping,
  xn as NeverCompare,
  k as NeverDepth,
  un as NeverStencilFunc,
  m as NoBlending,
  qe as NoColorSpace,
  K as NoToneMapping,
  Be as NormalAnimationBlendMode,
  f as NormalBlending,
  wn as NotEqualCompare,
  q as NotEqualDepth,
  gn as NotEqualStencilFunc,
  Od as NumberKeyframeTrack,
  Ur as Object3D,
  Tp as ObjectLoader,
  je as ObjectSpaceNormalMap,
  nd as OctahedronGeometry,
  E as OneFactor,
  z as OneMinusConstantAlphaFactor,
  F as OneMinusConstantColorFactor,
  L as OneMinusDstAlphaFactor,
  N as OneMinusDstColorFactor,
  P as OneMinusSrcAlphaFactor,
  R as OneMinusSrcColorFactor,
  Aa as OrthographicCamera,
  en as P3Primaries,
  l as PCFShadowMap,
  c as PCFSoftShadowMap,
  za as PMREMGenerator,
  uu as Path,
  ta as PerspectiveCamera,
  la as Plane,
  ma as PlaneGeometry,
  Jm as PlaneHelper,
  mp as PointLight,
  Lm as PointLightHelper,
  Oh as Points,
  Ih as PointsMaterial,
  Bm as PolarGridHelper,
  vu as PolyhedronGeometry,
  Zp as PositionalAudio,
  rm as PropertyBinding,
  Kp as PropertyMixer,
  au as QuadraticBezierCurve,
  ou as QuadraticBezierCurve3,
  Ci as Quaternion,
  Bd as QuaternionKeyframeTrack,
  Fd as QuaternionLinearInterpolant,
  Ae as RED_GREEN_RGTC2_Format,
  Te as RED_RGTC1_Format,
  t as REVISION,
  We as RGBADepthPacking,
  kt as RGBAFormat,
  Jt as RGBAIntegerFormat,
  xe as RGBA_ASTC_10x10_Format,
  ge as RGBA_ASTC_10x5_Format,
  ve as RGBA_ASTC_10x6_Format,
  _e as RGBA_ASTC_10x8_Format,
  ye as RGBA_ASTC_12x10_Format,
  Me as RGBA_ASTC_12x12_Format,
  le as RGBA_ASTC_4x4_Format,
  ce as RGBA_ASTC_5x4_Format,
  he as RGBA_ASTC_5x5_Format,
  ue as RGBA_ASTC_6x5_Format,
  de as RGBA_ASTC_6x6_Format,
  pe as RGBA_ASTC_8x5_Format,
  me as RGBA_ASTC_8x6_Format,
  fe as RGBA_ASTC_8x8_Format,
  Se as RGBA_BPTC_Format,
  oe as RGBA_ETC2_EAC_Format,
  re as RGBA_PVRTC_2BPPV1_Format,
  ie as RGBA_PVRTC_4BPPV1_Format,
  $t as RGBA_S3TC_DXT1_Format,
  Qt as RGBA_S3TC_DXT3_Format,
  te as RGBA_S3TC_DXT5_Format,
  zt as RGBFormat,
  Zt as RGBIntegerFormat,
  be as RGB_BPTC_SIGNED_Format,
  we as RGB_BPTC_UNSIGNED_Format,
  se as RGB_ETC1_Format,
  ae as RGB_ETC2_Format,
  ne as RGB_PVRTC_2BPPV1_Format,
  ee as RGB_PVRTC_4BPPV1_Format,
  Kt as RGB_S3TC_DXT1_Format,
  qt as RGFormat,
  Yt as RGIntegerFormat,
  md as RawShaderMaterial,
  sr as Ray,
  fm as Raycaster,
  tn as Rec709Primaries,
  _p as RectAreaLight,
  Xt as RedFormat,
  jt as RedIntegerFormat,
  Q as ReinhardToneMapping,
  bi as RenderTarget,
  pt as RepeatWrapping,
  sn as ReplaceStencilOp,
  S as ReverseSubtractEquation,
  id as RingGeometry,
  Re as SIGNED_RED_GREEN_RGTC2_Format,
  Ee as SIGNED_RED_RGTC1_Format,
  Ye as SRGBColorSpace,
  Qe as SRGBTransfer,
  sc as Scene,
  fa as ShaderChunk,
  va as ShaderLib,
  Zs as ShaderMaterial,
  pd as ShadowMaterial,
  wu as Shape,
  rd as ShapeGeometry,
  nf as ShapePath,
  Ju as ShapeUtils,
  Rt as ShortType,
  Hc as Skeleton,
  Pm as SkeletonHelper,
  Fc as SkinnedMesh,
  _i as Source,
  Ki as Sphere,
  sd as SphereGeometry,
  _m as Spherical,
  xp as SphericalHarmonics3,
  lu as SplineCurve,
  cp as SpotLight,
  Em as SpotLightHelper,
  bc as Sprite,
  cc as SpriteMaterial,
  C as SrcAlphaFactor,
  D as SrcAlphaSaturateFactor,
  A as SrcColorFactor,
  Un as StaticCopyUsage,
  An as StaticDrawUsage,
  Pn as StaticReadUsage,
  Op as StereoCamera,
  Dn as StreamCopyUsage,
  Cn as StreamDrawUsage,
  Ln as StreamReadUsage,
  zd as StringKeyframeTrack,
  M as SubtractEquation,
  v as SubtractiveBlending,
  n as TOUCH,
  Xe as TangentSpaceNormalMap,
  ad as TetrahedronGeometry,
  Mi as Texture,
  ep as TextureLoader,
  Gl as TextureUtils,
  od as TorusGeometry,
  ld as TorusKnotGeometry,
  Wr as Triangle,
  He as TriangleFanDrawMode,
  Ve as TriangleStripDrawMode,
  ke as TrianglesDrawMode,
  cd as TubeGeometry,
  ot as UVMapping,
  ds as Uint16BufferAttribute,
  ms as Uint32BufferAttribute,
  cs as Uint8BufferAttribute,
  hs as Uint8ClampedBufferAttribute,
  cm as Uniform,
  um as UniformsGroup,
  ga as UniformsLib,
  Ys as UniformsUtils,
  Et as UnsignedByteType,
  Ot as UnsignedInt248Type,
  Ft as UnsignedInt5999Type,
  It as UnsignedIntType,
  Nt as UnsignedShort4444Type,
  Dt as UnsignedShort5551Type,
  Ct as UnsignedShortType,
  h as VSMShadowMap,
  $n as Vector2,
  Pi as Vector3,
  Si as Vector4,
  kd as VectorKeyframeTrack,
  Bh as VideoTexture,
  Ri as WebGL3DRenderTarget,
  Ei as WebGLArrayRenderTarget,
  Bn as WebGLCoordinateSystem,
  ra as WebGLCubeRenderTarget,
  rf as WebGLMultipleRenderTargets,
  wi as WebGLRenderTarget,
  nc as WebGLRenderer,
  Xl as WebGLUtils,
  zn as WebGPUCoordinateSystem,
  hd as WireframeGeometry,
  Fe as WrapAroundEnding,
  De as ZeroCurvatureEnding,
  T as ZeroFactor,
  Oe as ZeroSlopeEnding,
  nn as ZeroStencilOp,
  si as createCanvasElement,
};
