"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      yardName: "",
      password: ""
    };
  },
  methods: {
    login() {
<<<<<<< HEAD
      if (this.username.trim() === "admin" && this.password.trim() === "123456") {
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      } else if (this.yardName.trim() === "") {
        common_vendor.index.showToast({
          title: "车场名称为空",
          icon: "none",
          //如果要纯文本，不要icon，将值设为'none'
          duration: 2e3
          //持续时间为 2秒
        });
      } else if (this.username.trim() === "") {
        common_vendor.index.showToast({
          title: "用户名为空",
          icon: "none",
          //如果要纯文本，不要icon，将值设为'none'
          duration: 2e3
          //持续时间为 2秒
        });
      } else if (this.password.trim() === "") {
        common_vendor.index.showToast({
          title: "密码为空",
          icon: "none",
          //如果要纯文本，不要icon，将值设为'none'
          duration: 2e3
          //持续时间为 2秒
        });
      } else {
        common_vendor.index.showToast({
          title: "用户名或密码错误",
          icon: "none",
          //如果要纯文本，不要icon，将值设为'none'
          duration: 2e3
          //持续时间为 2秒
        });
      }
=======
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
>>>>>>> 188ee71247613900f302b80aa8d81a5e14add290
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
<<<<<<< HEAD
    a: $data.yardName,
    b: common_vendor.o(($event) => $data.yardName = $event.detail.value),
    c: $data.username,
    d: common_vendor.o(($event) => $data.username = $event.detail.value),
    e: $data.password,
    f: common_vendor.o(($event) => $data.password = $event.detail.value),
    g: common_vendor.o(($event) => $options.login())
=======
    a: common_vendor.o(($event) => $options.login())
>>>>>>> 188ee71247613900f302b80aa8d81a5e14add290
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
