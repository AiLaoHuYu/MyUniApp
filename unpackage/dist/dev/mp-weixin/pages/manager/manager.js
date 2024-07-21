"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  //Model所有的数据
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {
    goPresentCar() {
      common_vendor.index.navigateTo({
        url: "/pages/presentcar/presentcar"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o((...args) => $options.goPresentCar && $options.goPresentCar(...args)),
    c: common_assets._imports_1,
    d: common_assets._imports_2,
    e: common_assets._imports_3,
    f: common_assets._imports_4,
    g: common_assets._imports_5,
    h: common_assets._imports_6,
    i: common_assets._imports_7,
    j: common_assets._imports_8,
    k: common_assets._imports_9,
    l: common_assets._imports_10,
    m: common_assets._imports_11,
    n: common_assets._imports_12,
    o: common_assets._imports_13,
    p: common_assets._imports_14,
    q: common_assets._imports_15,
    r: common_assets._imports_16,
    s: common_assets._imports_17,
    t: common_assets._imports_18,
    v: common_assets._imports_19,
    w: common_assets._imports_20,
    x: common_assets._imports_21,
    y: common_assets._imports_22,
    z: common_assets._imports_23,
    A: common_assets._imports_24,
    B: common_assets._imports_25,
    C: common_assets._imports_26,
    D: common_assets._imports_27
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
