import { y as t } from "./chunk1.mjs";

import "react";

import "react-dom/client";

import "tslib";

import "rxjs";

import "rxjs/operators";

import "i18next";

import "react-i18next";

import "@babel/runtime/helpers/extends";

import "react-dom";

import "react-focus-lock";

import "classnames";

import "framer-motion";

import "polished";

import "axios";

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

import "redux";

import "@redux-devtools/extension";

import "react-redux";

const e = new RegExp("__([0-9]+)__");

const r = "P98";

function o(t, e) {
    this._locale = t.length > 2 ? t.substring(0, 2) : t;
    if (e == null || e == undefined) this._tag = r; else this._tag = e.length > 5 ? e.substring(0, 5) : e;
}

o.prototype.doPseudoL10n = function(t, r) {
    if (t.length == 0 || e.test(t)) return t;
    if (r && r != t) return r;
    var o = "[" + this._tag + "]";
    if (t == r) o += "(" + this._locale + ")";
    o += t;
    switch (this._locale) {
      case "fr":
        o += "[Çôï’]";
        break;

      case "it":
        o += "[Èéà’]";
        break;

      case "es":
        o += "[Ñü¿’]";
        break;

      case "ru":
        o += "[Йця’]";
        break;

      case "de":
        o += "[ßüö’]";
        break;

      case "pl":
        o += "[Źłę’]";
        break;

      case "lt":
        o += "[Ļīž’]";
        break;

      default:
        o += "[bÿe]";
        break;
    }
    return o;
};

o.builder = function(t, e) {
    return new o(t, e);
};

var s = o.builder;

var i = t(s);

const n = t => {
    for (const e in t.comments) {
        const r = t.comments[e].replace(/\s+/g, "");
        if (r.length > 9 && /^#Toolkit:/.test(r)) {
            return r.substring(9);
        }
    }
};

function a(t) {
    if (!t || t.length === 0) return false;
    if (/[._](notrans|lcl|image|classname|gif)$/i.test(t)) return false;
    return true;
}

const c = (t, e, r, o) => {
    const s = {};
    const c = t.messages;
    const m = e.messages;
    const p = n(e);
    const l = p ? p : o;
    const u = i(r, l);
    for (const t in c) {
        if (a(t)) {
            const e = m[t];
            const r = c[t];
            s[t] = u.doPseudoL10n(r, e);
        } else s[t] = c[t];
    }
    return s;
};

export { n as getTag, c as pseudoLocalize4L10n };
