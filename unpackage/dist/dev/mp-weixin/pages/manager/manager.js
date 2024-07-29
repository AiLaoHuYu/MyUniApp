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
    },
    goEntryExitRecords() {
      common_vendor.index.navigateTo({
        url: "/pages/entryexitrecords/entryexitrecords"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o(($event) => $options.goPresentCar()),
    c: common_assets._imports_1,
    d: common_vendor.o(($event) => $options.goEntryExitRecords()),
    e: common_assets._imports_2,
    f: common_assets._imports_3,
    g: common_assets._imports_4,
    h: common_assets._imports_5,
    i: common_assets._imports_6,
    j: common_assets._imports_7,
    k: common_assets._imports_8,
    l: common_assets._imports_9,
    m: common_assets._imports_10,
    n: common_assets._imports_11,
    o: common_assets._imports_12,
    p: common_assets._imports_13,
    q: common_assets._imports_14,
    r: common_assets._imports_11,
    s: common_assets._imports_15,
    t: common_assets._imports_16,
    v: common_assets._imports_17,
    w: common_assets._imports_18,
    x: common_assets._imports_19,
    y: common_assets._imports_20,
    z: common_assets._imports_21,
    A: common_assets._imports_22,
    B: common_assets._imports_23,
    C: common_assets._imports_24,
    D: common_assets._imports_25,
    E: common_assets._imports_26,
    F: common_assets._imports_27,
    G: common_assets._imports_28,
    H: common_assets._imports_29,
    I: common_assets._imports_30
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
