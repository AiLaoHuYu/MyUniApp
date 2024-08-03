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
    e: common_assets._imports_0,
    f: common_assets._imports_1,
    g: common_assets._imports_2,
    h: common_vendor.o(($event) => $options.goPresentCar()),
    i: common_assets._imports_3,
    j: common_vendor.o(($event) => $options.goEntryExitRecords()),
    k: common_assets._imports_4,
    l: common_assets._imports_5,
    m: common_assets._imports_6,
    n: common_assets._imports_7,
    o: common_assets._imports_8,
    p: common_assets._imports_9,
    q: common_assets._imports_10,
    r: common_assets._imports_11,
    s: common_assets._imports_12,
    t: common_assets._imports_9,
    v: common_assets._imports_13,
    w: common_assets._imports_14,
    x: common_assets._imports_15,
    y: common_assets._imports_16,
    z: common_assets._imports_17,
    A: common_assets._imports_18,
    B: common_assets._imports_19,
    C: common_assets._imports_20,
    D: common_assets._imports_21,
    E: common_assets._imports_22,
    F: common_assets._imports_23,
    G: common_assets._imports_24,
    H: common_assets._imports_25,
    I: common_assets._imports_26,
    J: common_assets._imports_27,
    K: common_assets._imports_28
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
