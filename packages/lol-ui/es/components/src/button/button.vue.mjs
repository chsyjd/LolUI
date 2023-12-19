import { defineComponent as o, computed as r, openBlock as s, createElementBlock as u, normalizeClass as p, renderSlot as a } from "vue";
import "./style/index.less.mjs";
const c = o({ name: "lol-button" }), d = /* @__PURE__ */ o({
  ...c,
  props: {
    type: {}
  },
  setup(e) {
    const t = e, n = r(() => ({ [`lol-button--${t.type}`]: t.type }));
    return (l, m) => (s(), u("button", {
      class: p(["lol-button", n.value])
    }, [
      a(l.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
