"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    login() {
<<<<<<< HEAD
      common_vendor.index.switchTab({ url: "/pages/index/index" });
=======
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
>>>>>>> b196415b3b29bf9bba8797a402338ba87eeb9e43
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
<<<<<<< HEAD
    a: common_vendor.o((...args) => $options.login && $options.login(...args))
=======
    a: common_vendor.o(($event) => $options.login())
>>>>>>> b196415b3b29bf9bba8797a402338ba87eeb9e43
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
