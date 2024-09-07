"use strict";
const common_vendor = require("../../common/vendor.js");
const ProgressBar = () => "../../components/progress-bar/progress-bar.js";
let _now = /* @__PURE__ */ new Date();
let now_time = {};
now_time.year = _now.getFullYear();
now_time.month = _now.getMonth() + 1;
now_time.day = _now.getDay();
const _sfc_main = {
  components: {
    ProgressBar
  },
  data() {
    return {
      info: "",
      //用户数据
      scrollHeight: "600px",
      //数据展示体高度
      historyData: {},
      carBoxData: {},
      monkeyBoxData: {},
      carComeOutBoxData: {},
      dataOne: {
        "today": {
          "categories": [
            "支付宝",
            "微信",
            "其他"
          ],
          "series": [{
            "name": "今日收入",
            "data": [23, 14, 8],
            "type": "line",
            "style": "curve",
            "color": "#4ECDB6",
            "unit": ""
          }],
          "yAxis": [{
            "calibration": true,
            "position": "left",
            "title": "单位/元",
            "titleFontSize": 12,
            "unit": "",
            "tofix": 0,
            "min": 0,
            "disableGrid": true
          }]
        },
        "month": {
          "categories": [
            "支付宝",
            "微信",
            "其他"
          ],
          "series": [{
            "name": "本月收入",
            "data": [222, 256, 129],
            "type": "line",
            "style": "curve",
            "color": "#4ECDB6",
            "unit": ""
          }],
          "yAxis": [{
            "calibration": true,
            "position": "left",
            "title": "单位/元",
            "titleFontSize": 12,
            "unit": "",
            "tofix": 0,
            "min": 0,
            "disableGrid": true
          }]
        },
        "year": {
          "categories": [
            "支付宝",
            "微信",
            "其他"
          ],
          "series": [{
            "name": "今年收入",
            "data": [815, 712.5, 378],
            "type": "line",
            "style": "curve",
            "color": "#4ECDB6",
            "unit": ""
          }],
          "yAxis": [{
            "calibration": true,
            "position": "left",
            "title": "单位/元",
            "titleFontSize": 12,
            "unit": "",
            "tofix": 0,
            "min": 0,
            "disableGrid": true
          }]
        }
      },
      delayload: false,
      nowTime: {
        year: now_time.year,
        month: now_time.month,
        day: now_time.day
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
      },
      historyBtn: [
        {
          name: "今日",
          state: 1,
          type: "expend"
        },
        {
          name: "本月",
          state: 0,
          type: "income"
        },
        {
          name: "今年",
          state: 0,
          type: "remaining"
        }
      ],
      todayStatics: {
        totalMoney: 564,
        todayCome: 246,
        todayOut: 239,
        monthCar: 14721,
        monthMoney: 3265
      },
      extendRank: [
        {
          name: "腐败聚会",
          desc: now_time.month + "月6日12:34-跨界空间轰趴",
          money: "422.12"
        },
        {
          name: "沐浴按摩",
          desc: now_time.month + "月12日21:34-乔杉沐浴城",
          money: "318.00"
        },
        {
          name: "食品酒水",
          desc: now_time.month + "月1日21:34-school酒馆",
          money: "289.50"
        }
      ]
    };
  },
  watch: {
    "historyBtn": {
      deep: true,
      handler: function(newVal, oldVal) {
        this.filterHistoryData();
      }
    }
  },
  methods: {
    async getData() {
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
      common_vendor.index.showLoading();
      this.filterHistoryData();
      await setTimeout(() => {
        this.delayload = true;
        common_vendor.index.hideLoading();
      }, 1e3);
    },
    changeHistoryBtn(type) {
      for (let i = 0; i < this.historyBtn.length; i++) {
        if (this.historyBtn[i].type == type) {
          this.historyBtn[i].state = 1;
        } else {
          this.historyBtn[i].state = 0;
        }
      }
    },
    filterHistoryData() {
      let type = this.historyBtn.filter((x) => x.state == 1)[0].type;
      switch (type) {
        case "expend":
          this.historyData = this.dataOne.today;
          break;
        case "income":
          this.historyData = this.dataOne.month;
          break;
        case "remaining":
          this.historyData = this.dataOne.year;
          break;
      }
    }
  },
  onReady() {
    common_vendor.index.showShareMenu();
    this.getData();
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
    a: common_vendor.t($data.todayStatics.totalMoney),
    b: common_vendor.t($data.todayStatics.todayCome),
    c: common_vendor.t($data.todayStatics.todayOut),
    d: common_vendor.t($data.todayStatics.monthCar),
    e: common_vendor.t($data.todayStatics.monthMoney),
    f: common_vendor.f($data.historyBtn, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.n(item.state ? "active_btn" : ""),
        d: common_vendor.o(($event) => $options.changeHistoryBtn(item.type), index)
      };
    }),
    g: common_vendor.p({
      type: "line",
      canvasId: "finance_a",
      canvas2d: _ctx.isCanvas2d,
      resshow: $data.delayload,
      opts: {
        xAxis: {
          itemCount: 12,
          disableGrid: true
        },
        yAxis: {
          disableGrid: true,
          data: [{
            disabled: true
          }]
        }
      },
      chartData: $data.historyData
    }),
    h: common_vendor.p({
      type: "mount",
      opts: $data.carOpts,
      chartData: $data.carBoxData
    }),
    i: common_vendor.p({
      type: "mount",
      opts: $data.carOpts,
      chartData: $data.carComeOutBoxData
    }),
    j: common_vendor.p({
      type: "mount",
      opts: $data.carOpts,
      chartData: $data.monkeyBoxData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
