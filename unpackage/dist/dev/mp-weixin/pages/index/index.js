"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      todyMoney: 35,
      todyComeIn: 142,
      todyGoOut: 263,
      monthCar: 14721,
      monthMoney: 3265,
      chartData: {}
    };
  },
  opts: {
    color: ["#1890FF", "#91CB74"],
    padding: [5, 5, 5, 5],
    enableScroll: false,
    extra: {
      pie: {
        activeOpacity: 0.5,
        activeRadius: 10,
        offsetAngle: 0,
        labelWidth: 15,
        border: true,
        borderWidth: 3,
        borderColor: "#FFFFFF"
      }
    }
  },
  onReady() {
    this.getServerData();
  },
  onLoad() {
  },
  methods: {
    getServerData() {
      setTimeout(() => {
        let res = {
          series: [{
            data: [{
              "name": "微信",
              "value": 3145,
              "labelText": "3145元"
            }, {
              "name": "支付宝",
              "value": 120,
              "labelText": "120元"
            }]
          }]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
    }
  }
};
if (!Array) {
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  const _component_template = common_vendor.resolveComponent("template");
  (_easycom_qiun_data_charts2 + _component_template)();
}
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
if (!Math) {
  _easycom_qiun_data_charts();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.todyMoney),
    b: common_vendor.t($data.todyComeIn),
    c: common_vendor.t($data.todyGoOut),
    d: common_vendor.t($data.monthCar),
    e: common_vendor.t($data.monthMoney),
    f: common_vendor.p({
      type: "pie",
      opts: _ctx.opts,
      chartData: $data.chartData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
