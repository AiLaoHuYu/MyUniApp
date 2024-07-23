<template>
	<view class="content">
		<view class="model-parent statistics-parent">
			<text style="font-weight: bold;">数据概览</text>
			<view class="statistics-item-parent">

				<view class="statistics-item first-item">
					<text class="statistics-item-title">今日收款（元）</text>
					<text class="statistics-item-text">{{todyMoney}}</text>
				</view>

				<view class="statistics-item second-item">
					<text class="statistics-item-title">今日进出（次）</text>
					<text class="statistics-item-text">{{todyComeIn}}</text>
				</view>

				<view class="statistics-item third-item">
					<text class="statistics-item-title">今日出场（次）</text>
					<text class="statistics-item-text">{{todyGoOut}}</text>
				</view>

				<view class="statistics-item fourth-item">
					<text class="statistics-item-title">本月车流量（次）</text>
					<text class="statistics-item-text">{{monthCar}}</text>
				</view>

				<view class="statistics-item fiveth-item">
					<text class="statistics-item-title">本月营收额（元）</text>
					<text class="statistics-item-text">{{monthMoney}}</text>
				</view>

			</view>

		</view>

		<view class="model-parent charts-month-money-parent">
			<text style="font-weight: bold;">本月收费来源汇总</text>
			<template>
				<view class="charts-box">
					<qiun-data-charts type="pie" :opts="moneyOpts" :chartData="moneyBoxData" />
				</view>
			</template>
		</view>

		<view class="model-parent charts-month-car-parent">
			<text style="font-weight: bold;">临停车流统计</text>
			<text class="item-title">车流统计</text>
			<template>
				<view class="charts-box">
					<qiun-data-charts type="mount" :opts="carOpts" :chartData="carBoxData" />
				</view>
			</template>
		</view>

		<view class="model-parent charts-month-car-parent">
			<text style="font-weight: bold;">停车收费统计</text>
			<text class="item-title">最近收费金额</text>
			<template>
				<view class="charts-box">
					<qiun-data-charts type="mount" :opts="carOpts" :chartData="monkeyBoxData" />
				</view>
			</template>
		</view>
		
		<view class="model-parent charts-month-car-parent">
			<text style="font-weight: bold;">固定车收费统计</text>
			<text class="item-title">车流统计</text>
			<template>
				<view class="charts-box">
					<qiun-data-charts type="mount" :opts="carOpts" :chartData="carComeOutBoxData" />
				</view>
			</template>
		</view>

	</view>
</template>

<script>
	export default {
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
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
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
			},
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		background-color: lightgray;
	}

	.model-parent {
		display: inline-flex;
		flex-direction: column;
		padding: 20rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 20rpx;
		background-color: white;
		border-radius: 10rpx;
	}

	.item-title {
		font-weight: bold;
		font-size: 40rpx;
		text-align: center;
		margin-bottom: 20rpx;
	}

	.statistics-item-parent {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.statistics-item-title {
		color: white;
		font-size: 24rpx;
	}

	.statistics-item-text {
		color: white;
		font-weight: bold;
		margin-top: 10rpx;
	}

	.statistics-item {
		display: inline-flex;
		flex-direction: column;
		padding: 20rpx;
		margin-top: 20rpx;
		border-radius: 10rpx;
	}

	.first-item {
		width: 170rpx;
		background-image: linear-gradient(120deg, #f6d365, #fda085 100%);
		margin-right: 20rpx;
	}

	.second-item {
		width: 170rpx;
		background-image: linear-gradient(135deg, #2AFADF 10%, #4C83FF 100%);
		margin-right: 20rpx;
	}

	.third-item {
		width: 170rpx;
		background-image: linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%);
	}

	.fourth-item {
		width: 270rpx;
		background-image: linear-gradient(120deg, #f6d365, #fda085 100%);
		margin-right: 20rpx;
	}

	.fiveth-item {
		width: 270rpx;
		background-image: linear-gradient(135deg, #2AFADF 10%, #4C83FF 100%);
	}

	.charts-box {
		width: 100%;
		height: 560rpx;
	}
</style>