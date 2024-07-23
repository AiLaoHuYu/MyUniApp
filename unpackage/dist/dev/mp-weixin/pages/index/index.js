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
      moneyBoxData: {},
      carBoxData: {},
      monkeyBoxData: {},
      moneyOpts: {
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
      carOpts: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452"],
        padding: [15, 15, 0, 5],
        enableScroll: false,
        legend: {
          show: false
        },
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          data: [{
            min: 0
          }]
        },
        extra: {
          tooltip: {
            showBox: false
          },
          mount: {
            type: "bar",
            widthRatio: 0.8
          }
        }
      }
    };
  },
  onReady() {
    this.getServerData();
  },
  onLoad() {
  },
  methods: {
    getServerData() {
      setTimeout(() => {
        let res1 = {
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
        this.moneyBoxData = JSON.parse(JSON.stringify(res1));
        let res2 = {
          series: [{
            data: [{
              "name": "2024-07-17",
              "value": 700,
              "legendText": "2024-07-17"
            }, {
              "name": "",
              "value": 629,
              "legendText": "2024-07-18"
            }, {
              "name": "",
              "value": 600,
              "legendText": "2024-07-19"
            }, {
              "name": "2024-07-20",
              "value": 500,
              "legendText": "2024-07-20"
            }, {
              "name": "",
              "value": 800,
              "legendText": "2024-07-21"
            }, {
              "name": "",
              "value": 666,
              "legendText": "2024-07-22"
            }, {
              "name": "2024-07-23",
              "value": 778,
              "legendText": "2024-07-23"
            }]
          }]
        };
        this.carBoxData = JSON.parse(JSON.stringify(res2));
        let res3 = {
          series: [{
            data: [{
              "name": "2024-07-17",
              "value": 118,
              "legendText": "2024-07-17"
            }, {
              "name": "",
              "value": 134,
              "legendText": "2024-07-18"
            }, {
              "name": "",
              "value": 57,
              "legendText": "2024-07-19"
            }, {
              "name": "2024-07-20",
              "value": 28,
              "legendText": "2024-07-20"
            }, {
              "name": "",
              "value": 94,
              "legendText": "2024-07-21"
            }, {
              "name": "",
              "value": 45,
              "legendText": "2024-07-22"
            }, {
              "name": "2024-07-23",
              "value": 15,
              "legendText": "2024-07-23"
            }]
          }]
        };
        this.monkeyBoxData = JSON.parse(JSON.stringify(res3));
        let res4 = {
          series: [{
            data: [{
              "name": "2024-01",
              "value": 320,
              "legendText": "2024-01"
            }, {
              "name": "",
              "value": 320,
              "legendText": "2024-02"
            }, {
              "name": "",
              "value": 1388,
              "legendText": "2024-03"
            }, {
              "name": "2024-04",
              "value": 340,
              "legendText": "2024-04"
            }, {
              "name": "",
              "value": 598,
              "legendText": "2024-05"
            }, {
              "name": "",
              "value": 999,
              "legendText": "2024-06"
            }, {
              "name": "2024-07",
              "value": 888,
              "legendText": "2024-07"
            }]
          }]
        };
        this.carComeOutBoxData = JSON.parse(JSON.stringify(res4));
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
      opts: $data.moneyOpts,
      chartData: $data.moneyBoxData
    }),
    g: common_vendor.p({
      type: "mount",
      opts: $data.carOpts,
      chartData: $data.carBoxData
    }),
    h: common_vendor.p({
      type: "mount",
      opts: $data.carOpts,
      chartData: $data.monkeyBoxData
    }),
    i: common_vendor.p({
      type: "mount",
      opts: $data.carOpts,
      chartData: _ctx.carComeOutBoxData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
