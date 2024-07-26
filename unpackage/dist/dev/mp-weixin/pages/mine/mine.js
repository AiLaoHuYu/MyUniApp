"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      isLoggedIn: true,
      userInfo: {}
    };
  },
  computed: {},
  created() {
  },
  methods: {
    onExitClick() {
      common_vendor.index.reLaunch({ url: "/pages/login/login" });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_icons2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isLoggedIn
  }, $data.isLoggedIn ? {
    b: common_assets._imports_0$1,
    c: common_vendor.p({
      type: "vip",
      size: "14"
    })
  } : {
    d: common_vendor.o((...args) => _ctx.onLoginClick && _ctx.onLoginClick(...args))
  }, {
    e: common_vendor.p({
      showArrow: true,
      thumb: "",
      title: "修改密码",
      link: true,
      to: "/pages/"
    }),
    f: common_vendor.p({
      showArrow: true,
      title: "厂商登录"
    }),
    g: $data.isLoggedIn
  }, $data.isLoggedIn ? {
    h: common_vendor.o(($event) => $options.onExitClick())
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7c2ebfa5"]]);
wx.createPage(MiniProgramPage);
