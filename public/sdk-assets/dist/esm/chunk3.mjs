import e, { useEffect as r, Suspense as t } from "react";

import { e as a, d as s, z as n } from "./chunk1.mjs";

import p from "classnames";

const l = () => {
    r((() => () => {
        a.publish(s);
    }), []);
    return null;
};

var o = "sas_components-ReportContentWrapper-ReportContentWrapper_wrapper";

var c = {
    wrapper: o
};

const m = r => {
    const a = n();
    return e.createElement("div", {
        className: p(r.className, c.wrapper),
        dir: a,
        style: r.style
    }, e.createElement(t, {
        fallback: e.createElement(l, null)
    }, r.children));
};

export { m as R };
