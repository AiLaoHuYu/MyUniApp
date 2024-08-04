"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userpic: "/static/mine/admin_head.png",
      username: "admin",
      outfieldSpareSpace: 1049,
      insideSpareSpace: 1e3
    };
  },
  computed: {},
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  _easycom_uni_list_item2();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
if (!Math) {
  _easycom_uni_list_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.userpic,
    b: common_vendor.p({
      title: "头像"
    }),
    c: common_vendor.t($data.username),
    d: common_vendor.p({
      title: "当前用户"
    }),
    e: common_vendor.t($data.outfieldSpareSpace),
    f: common_vendor.p({
      title: "外场余位"
    }),
    g: common_vendor.t($data.insideSpareSpace),
    h: common_vendor.p({
      title: "内场余位"
    }),
    i: common_vendor.o(($event) => $options.back())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
