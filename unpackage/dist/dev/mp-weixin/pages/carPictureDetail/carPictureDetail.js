"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      licensePlateIcon: {
        color: "#32CD32",
        size: "24",
        type: "wallet-filled"
        //icon名称
      },
      carColorIcon: {
        color: "#32CD32",
        size: "24",
        type: "calendar-filled"
        //icon名称
      },
      chargeDescIcon: {
        color: "#FF8C00",
        size: "24",
        type: "chatbubble-filled"
        //icon名称
      },
      firstComeTimeIcon: {
        color: "#FF8C00",
        size: "24",
        type: "fire-filled"
        //icon名称
      },
      parkingTimeIcon: {
        color: "#32CD32",
        size: "24",
        type: "eye-filled"
        //icon名称
      },
      carTypeIcon: {
        color: "#32CD32",
        size: "24",
        type: "camera-filled"
        //icon名称
      },
      itemMessage: "",
      isShwoImage: false,
      isShwoOther: true,
      progressPercent: 0
      // 进度条的百分比
    };
  },
  onLoad: function() {
    console.log("onload");
    common_vendor.index.$on("itemMessage", (data) => {
      console.log(data);
      this.itemMessage = data;
    });
  },
  methods: {
    increaseProgress() {
      const increment = () => {
        if (this.progressPercent < 100) {
          this.progressPercent += 10;
          setTimeout(increment, 200);
        } else {
          this.isShwoImage = true;
          this.isShwoOther = false;
        }
      };
      increment();
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShwoOther
  }, $data.isShwoOther ? {
    b: common_assets._imports_0$2,
    c: common_vendor.o((...args) => $options.increaseProgress && $options.increaseProgress(...args))
  } : {}, {
    d: $data.isShwoOther
  }, $data.isShwoOther ? {} : {}, {
    e: $data.isShwoImage
  }, $data.isShwoImage ? {
    f: common_assets._imports_1$2
  } : {}, {
    g: $data.isShwoOther
  }, $data.isShwoOther ? {
    h: $data.progressPercent
  } : {}, {
    i: common_vendor.p({
      ["show-extra-icon"]: true,
      ["extra-icon"]: $data.licensePlateIcon,
      title: "车牌号码",
      rightText: $data.itemMessage.licensePlate
    }),
    j: common_vendor.p({
      ["show-extra-icon"]: true,
      ["extra-icon"]: $data.carColorIcon,
      title: "车牌颜色",
      rightText: $data.itemMessage.carColor
    }),
    k: common_vendor.p({
      ["show-extra-icon"]: true,
      ["extra-icon"]: $data.chargeDescIcon,
      title: "计费描述",
      rightText: $data.itemMessage.chargeDesc
    }),
    l: common_vendor.p({
      ["show-extra-icon"]: true,
      ["extra-icon"]: $data.firstComeTimeIcon,
      title: "进场时间",
      rightText: $data.itemMessage.firstComeTime
    }),
    m: common_vendor.p({
      ["show-extra-icon"]: true,
      ["extra-icon"]: $data.parkingTimeIcon,
      title: "停车时长",
      rightText: $data.itemMessage.parkingTime
    }),
    n: common_vendor.p({
      ["show-extra-icon"]: true,
      ["extra-icon"]: $data.carTypeIcon,
      title: "车辆类型",
      rightText: $data.itemMessage.carType
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9e697b45"]]);
wx.createPage(MiniProgramPage);
