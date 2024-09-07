<template>
	<view class="body">
		<view class="top_head">
			<view class="text_des">
				<text class="title">车场数据统计</text>
			</view>
			<view class="top_desc">
				<view class="text-gray">今日收款（元）</view>
				<view class="remaining" v-if="isLogin">{{todayStatics.totalMoney}}</view>
				<view class="remaining" v-if="!isLogin">***</view>
				<view class="row head_block">
					<view class="column coflex_1">
						<text class="text-gray">今日进场（次）</text>
						<text class="text_green" v-if="isLogin">{{todayStatics.todayCome}}</text>
						<view class="text_green" v-if="!isLogin">***</view>
					</view>
					<view class="column flex_1">
						<text class="text-gray">进入出场（次）</text>
						<text class="income" v-if="isLogin">{{todayStatics.todayOut}}</text>
						<view class="income" v-if="!isLogin">***</view>
					</view>
				</view>
				<view class="row head_block">
					<view class="column flex_1">
						<text class="text-gray">本月车流量（次）</text>
						<text class="text_green" v-if="isLogin">{{todayStatics.monthCar}}</text>
						<view class="text_green" v-if="!isLogin">***</view>
					</view>
					<view class="column flex_1">
						<text class="text-gray">本月营收额（元）</text>
						<text class="income" v-if="isLogin">{{todayStatics.monthMoney}}</text>
						<view class="income" v-if="!isLogin">***</view>
					</view>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="row_block">
				<view class="the_title" style="justify-content: space-between;">
					<view class="left_title">
						<view class="title_icon"></view>
						<text class="margin_stand-samll font-big wide">收入明细</text>
					</view>
					<view class="right_btn">
						<view v-for="(item,index) in historyBtn" :key="index" :class="item.state ? 'active_btn':''"
							@click="changeHistoryBtn(item.type)">{{item.name}}</view>
					</view>
				</view>
				<view class="charts-box" style="height: 200px;">
					<qiun-data-charts type="line" canvasId="finance_a" :canvas2d="isCanvas2d" :resshow="delayload"
						:opts="{xAxis:{itemCount:12,disableGrid:true},yAxis:{disableGrid:true,data:[{disabled:true}]}}"
						:chartData="historyData" />
				</view>
			</view>
			<view class="row_block">
				<view class="the_title">
					<view class="title_icon"></view>
					<text class="margin_stand-samll font-big wide">临停车流统计</text>
				</view>
				<view class="model-parent charts-month-car-parent">
					<template>
						<view class="charts-box">
							<qiun-data-charts type="mount" :opts="carOpts" :chartData="carBoxData" />
						</view>
					</template>
				</view>
			</view>
			<view class="row_block">
				<view class="the_title" style="margin-bottom: 40rpx;">
					<view class="title_icon"></view>
					<text class="margin_stand-samll font-big wide">固定车车流统计</text>
				</view>
				<view class="model-parent charts-month-car-parent">
					<template>
						<view class="charts-box">
							<qiun-data-charts type="mount" :opts="carOpts" :chartData="carComeOutBoxData" />
						</view>
					</template>
				</view>
			</view>
			<view class="end_block">
				<view class="the_title">
					<view class="title_icon"></view>
					<text class="margin_stand-samll font-big wide">最近收费金额</text>
				</view>
				<view class="model-parent charts-month-car-parent">
					<template>
						<view class="charts-box">
							<qiun-data-charts type="mount" :opts="carOpts" :chartData="monkeyBoxData" />
						</view>
					</template>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import ProgressBar from "../../components/progress-bar/progress-bar.vue"

	let _now = new Date();
	let now_time = {};
	now_time.year = _now.getFullYear()
	now_time.month = _now.getMonth() + 1
	now_time.day = _now.getDay()
	export default {
		components: {
			ProgressBar
		},
		data() {
			return {
				info: "", //用户数据
				scrollHeight: "600px", //数据展示体高度
				historyData: {},
				carBoxData: {},
				monkeyBoxData: {},
				isLogin: false,
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
				historyBtn: [{
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
					},
				],
				todayStatics: {
					totalMoney: 564,
					todayCome: 246,
					todayOut: 239,
					monthCar: 14721,
					monthMoney: 3265
				},
				extendRank: [{
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
					},
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
				uni.showLoading();
				this.filterHistoryData();
				await setTimeout(() => {
					this.delayload = true;
					uni.hideLoading();
				}, 1000)
			},
			changeHistoryBtn(type) {
				for (let i = 0; i < this.historyBtn.length; i++) {
					if (this.historyBtn[i].type == type) {
						this.historyBtn[i].state = 1
					} else {
						this.historyBtn[i].state = 0
					}
				}
			},
			filterHistoryData() {
				let type = this.historyBtn.filter(x => x.state == 1)[0].type;
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
			//#ifndef H5
			uni.showShareMenu();
			//#endif
			this.getData()
		},
		onLoad() {
			this.isLogin = uni.getStorageSync('isLogin')
		}
	}
</script>

<style scoped lang="scss">
	.body {
		height: 100%;
		padding-bottom: 20rpx;
		background: linear-gradient(to right, #2859fe, #1ba0ff);
		;
		margin: 0;

		li {
			list-style-type: none;
		}

		.row {
			display: flex;
			flex-direction: row;
		}
		
		.column {
			display: flex;
			flex-direction: column;
		}

		.text_green {
			color: #4ECDB6;
		}

		.main {
			width: 100%;
			padding: 0 10rpx;
			box-sizing: border-box;
			margin-top: 20rpx;

			.right_btn {
				float: right;
				display: flex;
				color: #ccc;
				font-size: 22rpx;

				view {
					line-height: 50rpx;
					height: 50rpx;
					margin: 0 20rpx;
				}

				.active_btn {
					padding: 0rpx 20rpx;
					border: 1px solid #ccc;
					border-radius: 40rpx;
				}
			}

			.end_block {
				width: 100%;
				box-sizing: border-box;
				background-color: #fff;
				border-radius: 12rpx;
				position: relative;
				padding: 20rpx;
			}

			.row_block {
				width: 100%;
				box-sizing: border-box;
				background-color: #fff;
				border-radius: 12rpx;
				position: relative;
				padding: 20rpx;

				&::after {
					content: "";
					height: 0px;
					width: 92%;
					position: absolute;
					transform: translateX(-50%);
					left: 50%;
					bottom: 0;
					border-top: 1px dashed #ccc;
				}
			}

			.the_title {
				display: flex;
				align-items: center;

				.left_title {
					display: flex;
					align-items: center;
				}

				.title_icon {
					background-color: #7E7E7E;
					height: 40rpx;
					width: 10rpx;
					border-radius: 10rpx;
					margin-right: 20rpx;
					font-size: 16px;
					font-weight: 600;
				}
			}
		}

		.model-parent {
			padding: 20rpx;
			margin-top: 20rpx;
		}

		.top_head {
			height: 470rpx;
			width: 100%;
			padding: 80rpx 10rpx 0rpx 10rpx;
			background-size: 100% 100%;
			box-sizing: border-box;

			.top_desc {
				width: 100%;
				border-radius: 20rpx;
				background-color: #fff;
				padding: 20rpx;
				box-sizing: border-box;

				.text-gray {
					font-size: 28rpx;
					color: #ccc;
					margin-right: 10rpx;
				}

				.remaining {
					font-size: 46rpx;
				}

				.flex_1 {
					flex: 1;
				}

				.head_block {
					margin-top: 20rpx;

					.income {
						color: #E34B5E;
					}
				}
			}

			.text_des {
				height: 100rpx;
				color: #fff;
				font-weight: 900;
				position: relative;
				margin-left: 20rpx;

				text {
					display: inline-block;
					height: 100%;
				}

				.title {
					font-size: 45rpx;
				}
			}
		}
	}
</style>