"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      password: "",
      newPassword: "",
      confirmPassword: ""
    };
  },
  methods: {
    doChangePwd() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.password,
    b: common_vendor.o(($event) => $data.password = $event.detail.value),
    c: $data.newPassword,
    d: common_vendor.o(($event) => $data.newPassword = $event.detail.value),
    e: $data.confirmPassword,
    f: common_vendor.o(($event) => $data.confirmPassword = $event.detail.value),
    g: common_vendor.o(($event) => $options.doChangePwd())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5b3c36e6"]]);
wx.createPage(MiniProgramPage);
