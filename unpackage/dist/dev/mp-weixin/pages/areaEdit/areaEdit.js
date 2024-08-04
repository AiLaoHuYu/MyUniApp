"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      itemMessage: ""
    };
  },
  methods: {
    cacnel() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  },
  onLoad: function() {
    console.log("onload");
    common_vendor.index.$on("itemMessage", (data) => {
      console.log(data);
      this.itemMessage = data;
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o([($event) => $data.itemMessage.parentAreaName = $event.detail.value, (...args) => $data.itemMessage.itemMessage.parentAreaName && $data.itemMessage.itemMessage.parentAreaName(...args)]),
    b: $data.itemMessage.parentAreaName,
    c: common_vendor.o([($event) => $data.itemMessage.spareSpace = $event.detail.value, (...args) => $data.itemMessage.spareSpace && $data.itemMessage.spareSpace(...args)]),
    d: $data.itemMessage.spareSpace,
    e: common_vendor.o([($event) => $data.itemMessage.spaceTotal = $event.detail.value, (...args) => $data.itemMessage.spaceTotal && $data.itemMessage.spaceTotal(...args)]),
    f: $data.itemMessage.spaceTotal,
    g: common_vendor.o(($event) => $options.cacnel())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
