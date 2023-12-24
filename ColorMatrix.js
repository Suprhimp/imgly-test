var Ls, Ny;
var RA = p(() => {
  td();
  Ls = class {
    constructor(
      e = 1,
      t = 0,
      i = 0,
      o = 0,
      n = 0,
      s = 0,
      a = 1,
      l = 0,
      u = 0,
      c = 0,
      d = 0,
      m = 0,
      h = 1,
      f = 0,
      b = 0,
      _ = 0,
      y = 0,
      T = 0,
      w = 1,
      k = 0
    ) {
      this.set(e, t, i, o, n, s, a, l, u, c, d, m, h, f, b, _, y, T, w, k);
    }
    set(e, t, i, o, n, s, a, l, u, c, d, m, h, f, b, _, y, T, w, k) {
      this.a = e;
      this.b = t;
      this.c = i;
      this.d = o;
      this.e = n;
      this.f = s;
      this.g = a;
      this.h = l;
      this.i = u;
      this.j = c;
      this.k = d;
      this.l = m;
      this.m = h;
      this.n = f;
      this.o = b;
      this.p = _;
      this.q = y;
      this.r = T;
      this.s = w;
      this.t = k;
    }
    reset() {
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.d = 0;
      this.e = 0;
      this.f = 0;
      this.g = 1;
      this.h = 0;
      this.i = 0;
      this.j = 0;
      this.k = 0;
      this.l = 0;
      this.m = 1;
      this.n = 0;
      this.o = 0;
      this.p = 0;
      this.q = 0;
      this.r = 0;
      this.s = 1;
      this.t = 0;
    }
    apply(e) {
      const t = this.a * e.r + this.b * e.g + this.c * e.b + this.d * e.a + this.e;
      const i = this.f * e.r + this.g * e.g + this.h * e.b + this.i * e.a + this.j;
      const o = this.k * e.r + this.l * e.g + this.m * e.b + this.n * e.a + this.o;
      const n = this.p * e.r + this.q * e.g + this.r * e.b + this.s * e.a + this.t;
      return new K(t, i, o, n);
    }
    multiply(e) {
      let t;
      let i;
      let o;
      let n;
      let s;
      let a;
      let l;
      let u;
      let c;
      let d;
      let m;
      let h;
      let f;
      let b;
      let _;
      let y;
      let T;
      let w;
      let k;
      let F;
      const E = e;
      const R = this;
      t = E.a * R.a + E.b * R.f + E.c * R.k + E.d * R.p;
      i = E.a * R.b + E.b * R.g + E.c * R.l + E.d * R.q;
      o = E.a * R.c + E.b * R.h + E.c * R.m + E.d * R.r;
      n = E.a * R.d + E.b * R.i + E.c * R.n + E.d * R.s;
      a = E.f * R.a + E.g * R.f + E.h * R.k + E.i * R.p;
      l = E.f * R.b + E.g * R.g + E.h * R.l + E.i * R.q;
      u = E.f * R.c + E.g * R.h + E.h * R.m + E.i * R.r;
      c = E.f * R.d + E.g * R.i + E.h * R.n + E.i * R.s;
      m = E.k * R.a + E.l * R.f + E.m * R.k + E.n * R.p;
      h = E.k * R.b + E.l * R.g + E.m * R.l + E.n * R.q;
      f = E.k * R.c + E.l * R.h + E.m * R.m + E.n * R.r;
      b = E.k * R.d + E.l * R.i + E.m * R.n + E.n * R.s;
      y = E.p * R.a + E.q * R.f + E.r * R.k + E.s * R.p;
      T = E.p * R.b + E.q * R.g + E.r * R.l + E.s * R.q;
      w = E.p * R.c + E.q * R.h + E.r * R.m + E.s * R.r;
      k = E.p * R.d + E.q * R.i + E.r * R.n + E.s * R.s;
      s = E.a * R.e + E.b * R.j + E.c * R.o + E.d * R.t + E.e;
      d = E.f * R.e + E.g * R.j + E.h * R.o + E.i * R.t + E.j;
      _ = E.k * R.e + E.l * R.j + E.m * R.o + E.n * R.t + E.o;
      F = E.p * R.e + E.q * R.j + E.r * R.o + E.s * R.t + E.t;
      this.a = t;
      this.b = i;
      this.c = o;
      this.d = n;
      this.e = s;
      this.f = a;
      this.g = l;
      this.h = u;
      this.i = c;
      this.j = d;
      this.k = m;
      this.l = h;
      this.m = f;
      this.n = b;
      this.o = _;
      this.p = y;
      this.q = T;
      this.r = w;
      this.s = k;
      this.t = F;
      return this;
    }
    clone() {
      const e = new Ls();
      e.set(
        this.a,
        this.b,
        this.c,
        this.d,
        this.e,
        this.f,
        this.g,
        this.h,
        this.i,
        this.j,
        this.k,
        this.l,
        this.m,
        this.n,
        this.o,
        this.p,
        this.q,
        this.r,
        this.s,
        this.t
      );
      return e;
    }
    equals(e) {
      return (
        this.a === e.a &&
        this.b === e.b &&
        this.c === e.c &&
        this.d === e.d &&
        this.e === e.e &&
        this.f === e.f &&
        this.g === e.g &&
        this.h === e.h &&
        this.i === e.i &&
        this.j === e.j &&
        this.k === e.k &&
        this.l === e.l &&
        this.m === e.m &&
        this.n === e.n &&
        this.o === e.o &&
        this.p === e.p &&
        this.q === e.q &&
        this.r === e.r &&
        this.s === e.s &&
        this.t === e.t
      );
    }
    getOffsets() {
      return [this.e, this.j, this.o, this.t];
    }
    toString() {
      return `ColorMatrix( ${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.e},
      ${this.f}, ${this.g}, ${this.h}, ${this.i}, ${this.j},
      ${this.k}, ${this.l}, ${this.m}, ${this.n}, ${this.o},
      ${this.p}, ${this.q}, ${this.r}, ${this.s}, ${this.t} )`;
    }
    toArray() {
      return 'abcdefghijklmnopqrst'.split('').map((e) => this[e]);
    }
    static get IDENTITY() {
      return new Ls();
    }
    static createBrightnessMatrix(e) {
      const t = new Ls();
      t.e = e;
      t.j = e;
      t.o = e;
      return t;
    }
    static createContrastMatrix(e) {
      const t = new Ls();
      const i = (1 - e) / 2;
      t.a = t.g = t.m = e;
      t.e = t.j = t.o = i;
      return t;
    }
    static createSaturationMatrix(e = 1) {
      const t = new Ls();
      const i = 1 - e;
      const o = 0.213 * i;
      const n = 0.715 * i;
      const s = 0.072 * i;
      t.a = o + e;
      t.b = n;
      t.c = s;
      t.f = o;
      t.g = n + e;
      t.h = s;
      t.k = o;
      t.l = n;
      t.m = s + e;
      return t;
    }
    static createExposureMatrix(e = 0) {
      const t = Math.pow(2, e);
      return new Ls(t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0);
    }
    static createLinearMatrix(e = 1, t = 0) {
      const i = new Ls();
      i.a = i.g = i.m = e;
      i.e = i.j = i.o = t;
      return i;
    }
  };
  Ny = Ls;
});
