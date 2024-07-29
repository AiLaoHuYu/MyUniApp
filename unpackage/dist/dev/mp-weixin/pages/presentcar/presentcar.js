"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      info: [
        {
          licensePlate: "粤B66786",
          carType: "临时车",
          carColor: "蓝色",
          chargeDesc: "首次入场",
          comeChannel: "入口3",
          firstComeTime: "2024-07-21 23:48:33",
          parkingTime: "7分34秒",
          parkingArea: "外场"
        },
        {
          licensePlate: "粤B66126",
          carType: "临时车",
          carColor: "红色",
          chargeDesc: "首次入场",
          comeChannel: "入口3",
          firstComeTime: "2024-07-21 23:48:33",
          parkingTime: "7分34秒",
          parkingArea: "外场"
        },
        {
          licensePlate: "粤B77656",
          carType: "临时车",
          carColor: "白色",
          chargeDesc: "首次入场",
          comeChannel: "入口3",
          firstComeTime: "2024-07-21 23:48:33",
          parkingTime: "7分34秒",
          parkingArea: "外场"
        },
        {
          licensePlate: "粤B9897J",
          carType: "临时车",
          carColor: "绿色",
          chargeDesc: "首次入场",
          comeChannel: "入口3",
          firstComeTime: "2024-07-21 23:48:33",
          parkingTime: "7分34秒",
          parkingArea: "外场"
        },
        {
          licensePlate: "粤K12JJK",
          carType: "临时车",
          carColor: "红色",
          chargeDesc: "首次入场",
          comeChannel: "入口3",
          firstComeTime: "2024-07-21 23:48:33",
          parkingTime: "7分34秒",
          parkingArea: "外场"
        },
        {
          licensePlate: "粤J88SEC",
          carType: "临时车",
          carColor: "红色",
          chargeDesc: "首次入场",
          comeChannel: "入口3",
          firstComeTime: "2024-07-21 23:48:33",
          parkingTime: "7分34秒",
          parkingArea: "外场"
        },
        {
          licensePlate: "粤AUI999",
          carType: "临时车",
          carColor: "红色",
          chargeDesc: "首次入场",
          comeChannel: "入口3",
          firstComeTime: "2024-07-21 23:48:33",
          parkingTime: "7分34秒",
          parkingArea: "外场"
        }
      ]
    };
  },
  methods: {
    inputDialogToggle(item, index) {
      this.$refs.inputDialog[index].open();
      console.log("item" + item + "::index:" + index);
    },
    dialogInputConfirm(val) {
      console.log(val);
    },
    goToShowPicture(item) {
      common_vendor.index.navigateTo({
        url: "/pages/carPictureDetail/carPictureDetail",
        success: (res) => {
          common_vendor.index.$emit("itemMessage", item);
        }
      });
    },
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
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_search_bar2 + _component_uni_section + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_popup_dialog + _easycom_uni_popup)();
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
        a: common_vendor.t(item.licensePlate),
        b: common_vendor.t(item.carType),
        c: common_vendor.t(item.carColor),
        d: common_vendor.t(item.chargeDesc),
        e: common_vendor.t(item.comeChannel),
        f: common_vendor.t(item.firstComeTime),
        g: common_vendor.t(item.parkingTime),
        h: common_vendor.t(item.parkingArea),
        i: common_vendor.o(($event) => $options.inputDialogToggle(item, index)),
        j: common_vendor.sr("inputClose", "774ec4e9-3-" + i0 + "," + ("774ec4e9-2-" + i0), {
          "f": 1
        }),
        k: "774ec4e9-3-" + i0 + "," + ("774ec4e9-2-" + i0),
        l: common_vendor.o(($event) => item.licensePlate = $event),
        m: common_vendor.p({
          mode: "input",
          title: "修改车牌信息",
          placeholder: "请输入车牌号",
          modelValue: item.licensePlate
        }),
        n: common_vendor.sr("inputDialog", "774ec4e9-2-" + i0, {
          "f": 1
        }),
        o: "774ec4e9-2-" + i0,
        p: common_vendor.o(($event) => $options.goToShowPicture(item)),
        q: common_vendor.s(index === $data.info.length - 1 ? "margin-bottom: 20px;" : "")
      };
    }),
    j: common_vendor.o($options.dialogInputConfirm),
    k: common_vendor.p({
      type: "dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
