"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  //Model所有的数据
  data() {
    return {
      swipers: [
        "https://i-blog.csdnimg.cn/blog_migrate/99b7cd44a9e6d1d97efa2bc432fa2be2.png",
        "https://i-blog.csdnimg.cn/blog_migrate/f0fa516089b8ebb7e43cd5a55080ff27.jpeg",
        "https://i-blog.csdnimg.cn/blog_migrate/459a2db750fd59ca43b295a961f3b314.jpeg"
      ]
    };
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
    },
    goMainChart() {
      common_vendor.index.navigateTo({
        url: "/pages/mainChart/mainChart"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swipers, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    b: common_assets._imports_0,
    c: common_vendor.o(($event) => $options.goPresentCar()),
    d: common_assets._imports_1,
    e: common_vendor.o(($event) => $options.goEntryExitRecords()),
    f: common_assets._imports_2,
    g: common_assets._imports_3,
    h: common_vendor.o(($event) => $options.goMainChart()),
    i: common_assets._imports_4,
    j: common_assets._imports_5,
    k: common_assets._imports_6,
    l: common_assets._imports_7,
    m: common_assets._imports_8,
    n: common_assets._imports_9,
    o: common_assets._imports_10,
    p: common_assets._imports_11,
    q: common_assets._imports_12,
    r: common_assets._imports_13,
    s: common_assets._imports_14,
    t: common_assets._imports_15,
    v: common_assets._imports_16,
    w: common_assets._imports_17,
    x: common_assets._imports_18
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
