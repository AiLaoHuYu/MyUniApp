"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      yardName: "",
      password: "",
      candidates: ["个人", "集团"],
      user: ""
    };
  },
  methods: {
    login() {
      if (this.yardName.trim() === "") {
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
        common_vendor.index.setStorageSync("isLogin", true);
        common_vendor.index.setStorageSync("userName", this.username.trim());
        common_vendor.index.setStorageSync("userIdentity", this.user);
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      }
    },
    youkeLogin() {
      common_vendor.index.setStorageSync("isLogin", false);
      common_vendor.index.setStorageSync("userName", "游客");
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    },
    // @input	combox输入事件	返回combox值
    comboxInput(e) {
      console.log("当前输入的值：", e);
      this.user = e;
    }
  }
};
if (!Array) {
  const _easycom_uni_combox2 = common_vendor.resolveComponent("uni-combox");
  const _component_template = common_vendor.resolveComponent("template");
  (_easycom_uni_combox2 + _component_template)();
}
const _easycom_uni_combox = () => "../../uni_modules/uni-combox/components/uni-combox/uni-combox.js";
if (!Math) {
  _easycom_uni_combox();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.comboxInput),
    b: common_vendor.o(($event) => $data.user = $event),
    c: common_vendor.p({
      candidates: $data.candidates,
      placeholder: "请选择用户",
      modelValue: $data.user
    }),
    d: $data.yardName,
    e: common_vendor.o(($event) => $data.yardName = $event.detail.value),
    f: $data.username,
    g: common_vendor.o(($event) => $data.username = $event.detail.value),
    h: $data.password,
    i: common_vendor.o(($event) => $data.password = $event.detail.value),
    j: common_vendor.o(($event) => $options.login()),
    k: common_vendor.o(($event) => $options.youkeLogin())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
