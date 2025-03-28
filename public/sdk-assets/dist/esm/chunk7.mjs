import { A as n, B as t, C as i, D as e, E as o, G as s, F as r, I as a, J as u, z as p, W as c, K as m, N as l, Q as d, S as g, U as v, V as _, X as h, Y as b, Z as f, $ as y, a0 as z, a1 as C, u as j, a2 as N, a3 as S, r as k, a4 as D, a5 as B, a6 as T, a7 as H, a8 as w, a9 as A, aa as M, ab as I, ac as R, ad as P, ae as L, af as F, ag as E, ah as x, ai as G, aj as W, ak as V, al as U, am as K } from "./chunk1.mjs";

export { an as convertThemeServiceResponseToThemeParameterOverrides, ao as setupLtjsEnvironment, ap as setupLtjsRuntime } from "./chunk1.mjs";

import { createStore as O, applyMiddleware as q } from "redux";

import J, { useState as $, createElement as X, Fragment as Y, useEffect as Q, useMemo as Z, useLayoutEffect as nn, forwardRef as tn, useImperativeHandle as en } from "react";

import "polished";

import "react-i18next";

import "i18next";

import "classnames";

import "axios";

import "@babel/runtime/helpers/extends";

import { Provider as on } from "react-redux";

import { R as sn } from "./chunk3.mjs";

import "react-dom/client";

import "tslib";

import "rxjs";

import "rxjs/operators";

import "react-dom";

import "react-focus-lock";

import "framer-motion";

import "reselect";

import "./i18n/nova_i18n.mjs";

import "react-popper";

import "@popperjs/core";

import "memoize-one";

import "handlebars";

import "zod";

import "use-memo-one";

import "@tanstack/react-query";

import "react-cropper";

import "redux-observable";

import "@redux-devtools/extension";

let rn = class n {
    constructor() {
        this.type = "backend";
    }
    init(n, t, i) {}
    read(n, t, i) {
        this.import(n, t).then((n => {
            i(null, n);
        })).catch((n => {
            i(n, null);
        }));
    }
    create(n, t, i, e) {}
};

class un extends rn {
    import(n, t) {
        if (n !== "en") {
            return Promise.reject("Only en is supported by DesignWebpackBackend");
        }
        if (!/^SASDesign-[\w]+-gui-icu$/.test(t)) {
            return Promise.reject(`Bundle named ${t} is not supported by DesignWebpackBackend`);
        }
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a2;
        })).then((n => n.default));
    }
}

const pn = n => {
    n.sort();
    let t = -1;
    for (let i = 0; i < n.length; i++) {
        if (n[i] > t) {
            t = n[i];
        }
        if (n[i] !== i) {
            return i;
        }
    }
    return t + 1;
};

const cn = t => {
    const [i, e] = $(new Map);
    return X(n.Provider, {
        value: {
            activePopovers: i,
            openPopover: n => {
                let t = -1;
                e((i => {
                    const e = Array.from(i.values());
                    const o = e.map((n => n.id));
                    t = pn(o);
                    let s = -1;
                    let r = -1;
                    for (const o of e) {
                        const a = o.group;
                        if (n.referenceElementRef?.current && o.popoverElement.contains(n.referenceElementRef?.current)) {
                            const e = o.level + 1;
                            i.set(t, {
                                popoverElement: n.popoverElement,
                                id: t,
                                group: a,
                                level: e,
                                referenceElementRef: n.referenceElementRef
                            });
                            return new Map(i);
                        } else if (o.referenceElementRef?.current && n.popoverElement.contains(o.referenceElementRef?.current)) {
                            if (r === -1) {
                                r = o.group;
                                const n = e.filter((n => n.group === r));
                                n.forEach((n => {
                                    n.level++;
                                    i.set(t, n);
                                }));
                            } else {
                                const n = e.filter((n => n.group === o.group));
                                n.forEach((n => {
                                    n.group = r;
                                    n.level++;
                                    i.set(t, n);
                                }));
                            }
                        } else if (a !== undefined && a > s) {
                            s = a;
                        }
                    }
                    const a = r === -1 ? s + 1 : r;
                    const u = 0;
                    i.set(t, {
                        popoverElement: n.popoverElement,
                        id: t,
                        group: a,
                        level: u,
                        referenceElementRef: n.referenceElementRef
                    });
                    return new Map(i);
                }));
                return t;
            },
            closePopover: n => {
                e((t => {
                    t.delete(n);
                    return new Map(t);
                }));
            }
        }
    }, t.children);
};

function mn(n) {
    const t = window;
    return t.requestIdleCallback ? t.requestIdleCallback(n) : t.setTimeout((function() {
        n();
    }), 1);
}

function ln(n) {
    const t = window;
    return t.cancelIdleCallback ? t.cancelIdleCallback(n) : clearTimeout(n);
}

const dn = "delayedState/ApplyNewState";

const gn = n => e(dn, n);

function vn(n) {
    let e;
    const o = O(((e, o) => {
        if (o.type === dn) {
            return o.payload;
        }
        const s = e || n.getState();
        if (o.type === t.actionTypes.commitValue) {
            return i(s, o);
        }
        return s;
    }), q((t => t => i => {
        if (i.type === dn) {
            return t(i);
        }
        const e = t(i);
        n.dispatch(i);
        return e;
    })));
    n.subscribe((() => {
        ln(e);
        const t = n.getState();
        const i = o.getState();
        const s = Object.values(t.birdElements.PromptContainer).some((n => n?.isOpen === true));
        const r = Object.values(i.birdElements.PromptContainer).some((n => n?.isOpen === true));
        if (t.ui.birdLayout !== i.ui.birdLayout || (s || r) && s !== r) {
            o.dispatch(gn(t));
            return;
        }
        e = mn((() => {
            o.dispatch(gn(t));
        }));
    }));
    return {
        delayedStore: o,
        store: n
    };
}

const _n = new Map;

const hn = new Set;

function bn(n) {
    if (hn.has(n)) {
        console.warn(`Store with key ${n} has already been marked for extended lifetime`);
        return;
    }
    hn.add(n);
    const t = _n.get(n);
    if (t) {
        t.retain();
    }
}

function fn(n) {
    if (!hn.has(n)) {
        console.warn(`Store with key ${n} is not marked for extended lifetime`);
        return;
    }
    hn.delete(n);
    const t = _n.get(n);
    if (t) {
        t.release();
    }
}

function yn(n, t, i) {
    let e = _n.get(t);
    if (e && (e.context !== n || e.objectName !== i)) {
        if (hn.has(t)) {
            e.release();
        }
        _n.delete(t);
        e = undefined;
    }
    if (!e) {
        e = new zn(n, t, i);
        if (hn.has(t)) {
            e.retain();
        }
        _n.set(t, e);
    }
    return e;
}

class zn {
    constructor(n, t, i) {
        this._store = void 0;
        this._context = void 0;
        this._elementKey = void 0;
        this._objectName = void 0;
        this._retainCount = void 0;
        this._store = vn(n.initializeStore(i));
        this._context = n.retain();
        this._elementKey = t;
        this._objectName = i;
        this._retainCount = 0;
    }
    get store() {
        return this._store.delayedStore;
    }
    get context() {
        return this._context;
    }
    get objectName() {
        return this._objectName;
    }
    retain() {
        this._retainCount++;
    }
    release() {
        if (this._retainCount <= 0) {
            throw new Error("ReportContext released without being retained");
        }
        this._retainCount--;
        if (this._retainCount === 0) {
            this.destroy();
        }
    }
    destroy() {
        this._context.destroyStore(this._store.store);
        if (_n.get(this._elementKey) === this) {
            _n.delete(this._elementKey);
        }
        this._context.release();
    }
}

const Cn = {
    "": () => import("./chunk1.mjs").then((function(n) {
        return n.ar;
    })),
    ar: () => import("./i18n/messages_ar.mjs"),
    cs: () => import("./i18n/messages_cs.mjs"),
    da: () => import("./i18n/messages_da.mjs"),
    de: () => import("./i18n/messages_de.mjs"),
    el: () => import("./i18n/messages_el.mjs"),
    es: () => import("./i18n/messages_es.mjs"),
    fi: () => import("./i18n/messages_fi.mjs"),
    fr: () => import("./i18n/messages_fr.mjs"),
    he: () => import("./i18n/messages_he.mjs"),
    hr: () => import("./i18n/messages_hr.mjs"),
    hu: () => import("./i18n/messages_hu.mjs"),
    it: () => import("./i18n/messages_it.mjs"),
    iw: () => import("./i18n/messages_iw.mjs"),
    ja: () => import("./i18n/messages_ja.mjs"),
    ko: () => import("./i18n/messages_ko.mjs"),
    nb: () => import("./i18n/messages_nb.mjs"),
    nl: () => import("./i18n/messages_nl.mjs"),
    no: () => import("./i18n/messages_no.mjs"),
    pl: () => import("./i18n/messages_pl.mjs"),
    "pt-BR": () => import("./i18n/messages_pt-BR.mjs"),
    pt: () => import("./i18n/messages_pt.mjs"),
    ru: () => import("./i18n/messages_ru.mjs"),
    sh: () => import("./i18n/messages_sh.mjs"),
    sk: () => import("./i18n/messages_sk.mjs"),
    sl: () => import("./i18n/messages_sl.mjs"),
    sr: () => import("./i18n/messages_sr.mjs"),
    sv: () => import("./i18n/messages_sv.mjs"),
    th: () => import("./i18n/messages_th.mjs"),
    tr: () => import("./i18n/messages_tr.mjs"),
    "zh-Hans": () => import("./i18n/messages_zh-Hans.mjs"),
    "zh-Hant": () => import("./i18n/messages_zh-Hant.mjs")
};

const jn = {
    setSettings: n => Promise.resolve({
        items: n
    }),
    getSettings: () => {
        const n = o();
        return Promise.resolve({
            items: n ? [ {
                id: s.FORMAT_LOCALE_KEY,
                value: n
            } ] : []
        });
    },
    hasWriteAccess: () => Promise.resolve(true),
    deleteSettings: () => Promise.reject("deleteSettings not supported"),
    getTheme: () => Promise.resolve({
        id: "sas_corporate"
    })
};

const Nn = n => J.createElement(kn, null, J.createElement(Bn, {
    popoverRootId: n.popoverRootId
}, J.createElement(Dn, null, J.createElement(cn, null, J.createElement(Sn, null, n.children)))));

const Sn = n => {
    const t = r();
    return t ? J.createElement(a, null, J.createElement(u, {
        dataProvider: jn
    }, n.children)) : J.createElement(Y, null, n.children);
};

const kn = n => {
    const t = p();
    return J.createElement(c, {
        direction: t
    }, n.children);
};

const Dn = n => {
    const [t, i] = $(m);
    const [e, o] = $(l);
    const s = d();
    Q((() => {
        let n = false;
        const t = [ s ];
        g(Cn, t).then((t => {
            if (n) {
                return;
            }
            i(t);
        }));
        o(g(v, t));
        return () => {
            n = true;
        };
    }), [ s ]);
    const r = Z((() => ({
        localizers: t,
        loadingTextLocalizers: e
    })), [ t, e ]);
    return J.createElement(_, {
        value: r
    }, n.children);
};

const Bn = n => {
    const [t, i] = $(null);
    const e = h();
    Q((() => {
        if (!n.popoverRootId) {
            i(undefined);
            return;
        }
        const t = document.getElementById(n.popoverRootId);
        if (!t) {
            i(undefined);
            return;
        }
        i(t);
    }), [ n.popoverRootId ]);
    Q((() => {
        if (t === null) {
            return;
        }
        const n = t !== null && t !== void 0 ? t : b(e);
        n.dir = e ? "rtl" : "ltr";
    }), [ e, t ]);
    return J.createElement(f, {
        value: t
    }, n.children);
};

function Tn(n) {
    const {objectName: t} = n;
    const i = y({
        ...n,
        isFullReport: t === undefined
    });
    nn((() => {
        i.addToViewSet(t);
        i.retain();
        return () => {
            i.removeFromViewSet(t);
            i.release();
        };
    }), [ i, t ]);
    return i;
}

function Hn(n, t, i) {
    const e = Z((() => yn(n, t, i)), [ t, n, i ]);
    nn((() => {
        e.retain();
        return () => e.release();
    }), [ e ]);
    return e.store;
}

const wn = tn((function n(t, i) {
    const e = Z((() => t.elementKey === undefined ? z() : t.elementKey), [ t.elementKey ]);
    const o = "url" in t ? {
        url: t.url,
        reportUri: t.reportUri,
        authenticationType: t.authenticationType
    } : {
        packageUri: t.packageUri
    };
    const s = Tn({
        ...o,
        contextKey: e,
        graphCSS: t.graphCSS
    });
    en(i, (() => s.getReportHandle()), [ s ]);
    const r = Hn(s, e);
    Q((() => {
        r.dispatch(C.actions.setRestrictViewportGestures(t.restrictViewportGestures));
    }), [ r, t.restrictViewportGestures ]);
    const a = j();
    return J.createElement(on, {
        store: r
    }, J.createElement(Nn, {
        popoverRootId: t.popoverRootId
    }, J.createElement(sn, {
        className: a
    }, J.createElement(N, {
        url: o.url,
        packageUri: o.packageUri,
        themeOverrides: t.themeOverrides,
        menuItemProvider: t.menuItemProvider,
        elementType: "report",
        authenticationType: o.authenticationType
    }, J.createElement(S, {
        url: o.url,
        authenticationType: o.authenticationType,
        fallback: () => J.createElement(k, null)
    }, J.createElement(D, t))))));
}));

const An = tn((function n(t, i) {
    const e = Z((() => t.elementKey === undefined ? z() : t.elementKey), [ t.elementKey ]);
    const o = "url" in t ? {
        url: t.url,
        reportUri: t.reportUri,
        authenticationType: t.authenticationType
    } : {
        packageUri: t.packageUri
    };
    const s = Tn({
        ...o,
        objectName: t.objectName,
        contextKey: t.reportContextKey
    });
    en(i, (() => s.getReportHandle()), [ s ]);
    const r = Hn(s, e, t.objectName);
    Q((() => {
        r.dispatch(C.actions.setRestrictViewportGestures(t.restrictViewportGestures));
    }), [ r, t.restrictViewportGestures ]);
    const a = j();
    return J.createElement(on, {
        store: r
    }, J.createElement(sn, {
        className: a
    }, J.createElement(Nn, {
        popoverRootId: t.popoverRootId
    }, J.createElement(N, {
        url: o.url,
        menuItemProvider: t.menuItemProvider,
        elementType: "object",
        authenticationType: o.authenticationType
    }, J.createElement(S, {
        url: o.url,
        authenticationType: o.authenticationType
    }, J.createElement(B, t))))));
}));

const Mn = tn((function n(t, i) {
    const e = Z((() => t.elementKey === undefined ? z() : t.elementKey), [ t.elementKey ]);
    const o = "pageName" in t ? t.pageName : t.pageIndex;
    const s = "url" in t ? {
        url: t.url,
        reportUri: t.reportUri,
        authenticationType: t.authenticationType
    } : {
        packageUri: t.packageUri
    };
    const r = Tn({
        ...s,
        objectName: o,
        contextKey: t.reportContextKey ?? e
    });
    en(i, (() => r.getReportHandle()), [ r ]);
    const a = Hn(r, e, o);
    Q((() => {
        a.dispatch(C.actions.setRestrictViewportGestures(t.restrictViewportGestures));
    }), [ a, t.restrictViewportGestures ]);
    const u = j();
    return J.createElement(on, {
        store: a
    }, J.createElement(Nn, {
        popoverRootId: t.popoverRootId
    }, J.createElement(sn, {
        className: u
    }, J.createElement(N, {
        url: s.url,
        menuItemProvider: t.menuItemProvider,
        elementType: "page",
        authenticationType: s.authenticationType
    }, J.createElement(S, {
        url: s.url,
        authenticationType: s.authenticationType,
        fallback: () => J.createElement(k, null)
    }, J.createElement(T, {
        onPageLoad: t.onReportPageLoad
    }))))));
}));

var In = Object.freeze({
    __proto__: null,
    SASReportElement: H,
    SASReportObjectElement: w,
    SASReportPageElement: A,
    connectToServer: M,
    registerDataDrivenContent: I,
    setFormatterLocale: R,
    setHonorLocalFormatSettings: P,
    setLoadingTheme: L,
    setLocale: F,
    setUseHighContrastReportTheme: E
});

function Rn(n) {
    const t = b();
    t.classList.add(n);
    t.setAttribute("dir", W());
}

function Pn(n) {
    if (x()) {
        return;
    }
    G(n);
    if (document.body) {
        Rn(n);
    } else {
        window.addEventListener("DOMContentLoaded", (() => Rn(n)));
    }
}

class Ln {
    type="backend";
    constructor() {}
    init(n, t, i) {}
    async read(n, t, i) {
        try {
            i(null, await this.import(n, t));
        } catch (n) {
            i(n, false);
        }
    }
    create(n, t, i, e) {}
}

class Fn extends Ln {
    defaultProvider=true;
    async import(n, t) {
        if (t.startsWith("SASDesign-")) {
            return await (new un).import(n, t);
        }
        if (n !== "en") {
            return Promise.reject("Only en is supported by NovaWebpackBackend");
        }
        const i = V(t);
        if (i) {
            return i;
        }
        return Promise.reject(`Bundle'${t}' not found in NovaWebpackBackend.`);
    }
}

const En = n => {
    if (n === "en") return "";
    const {lang: t, region: i, script: e} = U(n);
    let o = `_${t}`;
    if (e) o += `-${e}`;
    if (i) o += `_${i}`;
    return o;
};

const xn = (n, t) => `${t} for ${n} is not supported by this backend.`;

const Gn = (n, t) => `Could not find ${t} for ${n}.`;

function Wn(n) {
    switch (n) {
      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-About-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.N;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppRoot-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.b;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AppSwitcherMenu-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.c;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvailableData-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.e;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Avatar-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.f;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AvatarSelector-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.g;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Banner-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.h;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Breadcrumb-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.i;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.j;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-BusyStateIndicator-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.k;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Button-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.l;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Calendar-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.m;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CasAuthorizationDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.n;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CatalogSearch-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.o;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ChooseLibrary-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.p;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditor-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CodeEditorMonaco-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.r;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ColorPicker-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.s;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ComboBox-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.t;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CommentManager-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.u;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-CompositeInput-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.v;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ContextMenu-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataViewer-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DatePicker-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.A;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.B;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Dropdown-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.C;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DualSelector-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.D;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ErrorBoundary-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.E;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-EsriSettings-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.F;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FacetPanel-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.G;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FeatureFlagManager-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.H;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FileUploader-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.I;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FindAndReplaceDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.J;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FontChooser-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.K;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-FormatSelector-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.L;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HelpPopup-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.M;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HomePage-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ImageSelector-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.Q;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Indicator-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.R;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Input-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.S;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-KeyboardShortcuts-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.T;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Landmark-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.U;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Layouts-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aN;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.V;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LeftNav-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aO;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.W;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LegacyLogViewer-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aP;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.X;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-List-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aQ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.Y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ListBox-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aR;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.Z;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-LogViewer-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aS;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n._;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Menu-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aT;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aU;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageStrip-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aV;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageSummary-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aW;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-MessageToast-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aX;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aY;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NovaApplicationSwitcher-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aZ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NumericStepper-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a_;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectManager-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a$;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ObjectMarker-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b0;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ProgressIndicator-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b2;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-RadioButtonGroup-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ab;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Resizable-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ac;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Scrollable-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b5;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ad;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SearchField-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b6;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ae;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SegmentedButton-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.af;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Select-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b8;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ag;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SessionTimeoutDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ah;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Settings-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ba;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ai;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-ShareDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bb;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Slider-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bc;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ak;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-SplitButton-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bd;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.al;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Splitter-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.be;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.am;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Switch-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bf;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bg;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Table-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bh;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bi;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TagInput-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bj;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ar;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TextArea-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bk;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.as;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tile-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bl;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.at;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TileCarousel-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bm;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.au;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TiledLayout-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bn;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.av;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Token-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bo;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInput-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bp;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ax;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TokenInputDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.ay;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tokenizer-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.br;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.az;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Toolbar-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bs;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tour-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bt;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tree-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bu;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-TreeTable-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bv;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aD;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UndoRedo-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bw;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aE;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bx;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aF;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-UserGroupSelector-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.by;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bz;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WelcomeExperience-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bA;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aI;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WhatsNew-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bB;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aJ;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-WindowShade-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bC;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aK;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Wizard-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aL;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

function Vn(n) {
    switch (n) {
      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

function Un(n) {
    switch (n) {
      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.O;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.P;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.P;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

function Kn(n) {
    switch (n) {
      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.by;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aG;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aH;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aH;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

function On(n) {
    switch (n) {
      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bf;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.an;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.ao;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.ao;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

function qn(n) {
    switch (n) {
      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.b1;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a9;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aa;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aa;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

function Jn(n) {
    switch (n) {
      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aq;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.y;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.y;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

function $n(n) {
    switch (n) {
      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.ap;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.w;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.x;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.x;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

function Xn(n) {
    switch (n) {
      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.aX;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.a3;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.a4;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.a4;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

function Yn(n) {
    switch (n) {
      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.a7;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.d;
        }));

      case "../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.d;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

class Qn extends Ln {
    bundleRegex=/^NovaComponents-(.*)-gui-icu$/;
    async import(n, t) {
        const i = t.match(this.bundleRegex);
        if (n === "en" || !i) throw xn(n, t);
        const [, e] = i;
        const o = En(n);
        let s;
        try {
            switch (e) {
              case "AuthorizationDialog":
                s = Yn(`../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AuthorizationDialog-gui-icu${o}.properties`);
                break;

              case "NotificationsDialog":
                s = Xn(`../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-NotificationsDialog-gui-icu${o}.properties`);
                break;

              case "DataImport":
                s = $n(`../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataImport-gui-icu${o}.properties`);
                break;

              case "DataSelection":
                s = Jn(`../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-DataSelection-gui-icu${o}.properties`);
                break;

              case "PropertyPane":
                s = qn(`../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-PropertyPane-gui-icu${o}.properties`);
                break;

              case "Tab":
                s = On(`../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-Tab-gui-icu${o}.properties`);
                break;

              case "VerticalBreadcrumb":
                s = Kn(`../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-VerticalBreadcrumb-gui-icu${o}.properties`);
                break;

              case "HorizontalBreadcrumb":
                s = Un(`../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-HorizontalBreadcrumb-gui-icu${o}.properties`);
                break;

              case "AgGridWrapper":
                s = Vn(`../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-AgGridWrapper-gui-icu${o}.properties`);
                break;

              default:
                s = Wn(`../../../github-localization-repository/bundles/sas-institute-rnd-product/design-system-filament-nova/NovaComponents-${e}-gui-icu${o}.properties`);
                break;
            }
            return (await s).default;
        } catch (i) {
            throw Gn(n, t);
        }
    }
}

function Zn(n) {
    switch (n) {
      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu.properties":
        return import("./i18n/nova_i18n.mjs").then((function(n) {
            return n.bD;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_ar.properties":
        return import("./i18n/nova_i18n_ar.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_cs.properties":
        return import("./i18n/nova_i18n_cs.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_da.properties":
        return import("./i18n/nova_i18n_da.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_de.properties":
        return import("./i18n/nova_i18n_de.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_el.properties":
        return import("./i18n/nova_i18n_el.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_es.properties":
        return import("./i18n/nova_i18n_es.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_fi.properties":
        return import("./i18n/nova_i18n_fi.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_fr.properties":
        return import("./i18n/nova_i18n_fr.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_he.properties":
        return import("./i18n/nova_i18n_he.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_hu.properties":
        return import("./i18n/nova_i18n_hu.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_it.properties":
        return import("./i18n/nova_i18n_it.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_iw.properties":
        return import("./i18n/nova_i18n_iw.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_ja.properties":
        return import("./i18n/nova_i18n_ja.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_ko.properties":
        return import("./i18n/nova_i18n_ko.mjs").then((function(n) {
            return n.aL;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_nb.properties":
        return import("./i18n/nova_i18n_nb.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_nl.properties":
        return import("./i18n/nova_i18n_nl.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_no.properties":
        return import("./i18n/nova_i18n_no.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_pl.properties":
        return import("./i18n/nova_i18n_pl.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_pt.properties":
        return import("./i18n/nova_i18n_pt.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_pt_BR.properties":
        return import("./i18n/nova_i18n_pt_BR.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_sh.properties":
        return import("./i18n/nova_i18n_sh.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_sk.properties":
        return import("./i18n/nova_i18n_sk.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_sl.properties":
        return import("./i18n/nova_i18n_sl.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_sr.properties":
        return import("./i18n/nova_i18n_sr.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_sv.properties":
        return import("./i18n/nova_i18n_sv.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_th.properties":
        return import("./i18n/nova_i18n_th.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_tr.properties":
        return import("./i18n/nova_i18n_tr.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_zh-Hans.properties":
        return import("./i18n/nova_i18n_zh-Hans.mjs").then((function(n) {
            return n.aM;
        }));

      case "../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu_zh-Hant.properties":
        return import("./i18n/nova_i18n_zh-Hant.mjs").then((function(n) {
            return n.aM;
        }));

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

class nt extends Ln {
    async import(n, t) {
        if (n === "en" || t !== "SASDesign-Icon-gui-icu") throw xn(n, t);
        try {
            return (await Zn(`../../../i18n-localization-repository/bundles/nova/nova-svg/SASDesign-Icon-gui-icu${En(n)}.properties`)).default;
        } catch (i) {
            throw Gn(n, t);
        }
    }
}

function tt(n) {
    switch (n) {
      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua.properties":
        return import("./i18n/vaeua-gui-eua.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_ar.properties":
        return import("./i18n/vaeua-gui-eua_ar.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_cs.properties":
        return import("./i18n/vaeua-gui-eua_cs.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_da.properties":
        return import("./i18n/vaeua-gui-eua_da.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_de.properties":
        return import("./i18n/vaeua-gui-eua_de.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_el.properties":
        return import("./i18n/vaeua-gui-eua_el.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_es.properties":
        return import("./i18n/vaeua-gui-eua_es.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_fi.properties":
        return import("./i18n/vaeua-gui-eua_fi.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_fr.properties":
        return import("./i18n/vaeua-gui-eua_fr.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_he.properties":
        return import("./i18n/vaeua-gui-eua_he.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_hu.properties":
        return import("./i18n/vaeua-gui-eua_hu.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_it.properties":
        return import("./i18n/vaeua-gui-eua_it.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_iw.properties":
        return import("./i18n/vaeua-gui-eua_iw.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_ja.properties":
        return import("./i18n/vaeua-gui-eua_ja.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_ko.properties":
        return import("./i18n/vaeua-gui-eua_ko.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_nl.properties":
        return import("./i18n/vaeua-gui-eua_nl.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_no.properties":
        return import("./i18n/vaeua-gui-eua_no.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_pl.properties":
        return import("./i18n/vaeua-gui-eua_pl.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_pt.properties":
        return import("./i18n/vaeua-gui-eua_pt.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_pt_BR.properties":
        return import("./i18n/vaeua-gui-eua_pt_BR.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_ru.properties":
        return import("./i18n/vaeua-gui-eua_ru.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_sk.properties":
        return import("./i18n/vaeua-gui-eua_sk.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_sl.properties":
        return import("./i18n/vaeua-gui-eua_sl.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_sr.properties":
        return import("./i18n/vaeua-gui-eua_sr.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_sv.properties":
        return import("./i18n/vaeua-gui-eua_sv.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_th.properties":
        return import("./i18n/vaeua-gui-eua_th.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_tr.properties":
        return import("./i18n/vaeua-gui-eua_tr.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_zh-Hans.properties":
        return import("./i18n/vaeua-gui-eua_zh-Hans.mjs");

      case "../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua_zh-Hant.properties":
        return import("./i18n/vaeua-gui-eua_zh-Hant.mjs");

      default:
        return new Promise((function(t, i) {
            (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
        }));
    }
}

class it extends Ln {
    async import(n, t) {
        if (t === "vaeua-gui-eua") {
            const t = await tt(`../../../node_modules/@sas/reacteua-vaeua/vaeua-gui-eua${En(n)}.properties`);
            return t.default;
        }
        throw xn(n, t);
    }
}

let et;

function ot() {
    if (et) {
        return et;
    }
    et = K([ new Fn, new Qn, new nt, new it ]);
    return et;
}

export { wn as SASReport, An as SASReportObject, Mn as SASReportPage, bn as extendStoreLifetime, ot as initNovaI18n, Pn as initRootStyles, fn as releaseStoreLifetime, P as setHonorLocalFormatSettings, In as vaReportComponents };
