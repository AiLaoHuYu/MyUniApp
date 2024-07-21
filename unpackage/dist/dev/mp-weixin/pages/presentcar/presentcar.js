"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      info: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    };
  },
  methods: {
    search(res) {
    },
    input(res) {
      console.log(res.value);
    },
    clear(res) {
      console.log("clear");
    },
    blur(res) {
      console.log("blur: " + res.value);
    },
    focus(e) {
      console.log("focus");
    },
    cancel(res) {
      console.log("cancel");
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_search_bar2 + _component_uni_section)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.search),
    b: common_vendor.o($options.blur),
    c: common_vendor.o($options.focus),
    d: common_vendor.o($options.input),
    e: common_vendor.o($options.cancel),
    f: common_vendor.o($options.clear),
    g: common_vendor.p({
      focus: true,
      cancelButton: "none",
      clearButton: "auto"
    }),
    h: common_vendor.p({
      type: "line"
    }),
    i: common_vendor.f($data.info, (item, index, i0) => {
      return {
        a: common_vendor.s(index === $data.info.length - 1 ? "margin-bottom: 20px;" : "")
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
