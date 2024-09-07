"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      username: {}
    };
  },
  methods: {
    goLogin() {
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    },
    goChangePsd() {
      common_vendor.index.navigateTo({
        url: "/pages/changePassword/changePassword"
      });
    }
  },
  onLoad: function() {
    let isLogin = common_vendor.index.getStorageSync("isLogin");
    if (isLogin) {
      this.username = common_vendor.index.getStorageSync("userName");
    } else {
      this.username = "游客";
    }
    console.log(this.username);
    console.log(isLogin);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.username),
    b: common_assets._imports_0$1,
    c: common_assets._imports_1$1,
    d: common_vendor.o(($event) => $options.goChangePsd()),
    e: common_assets._imports_2$1,
    f: common_assets._imports_3$1,
    g: common_assets._imports_4$1,
    h: common_vendor.o(($event) => $options.goLogin())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
