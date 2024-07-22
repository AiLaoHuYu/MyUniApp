<template>
	<view class="content">
		<view class="statistics-parent">
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

		<template>
		  <view class="charts-box">
		    <qiun-data-charts 
		      type="pie"
		      :opts="opts"
		      :chartData="chartData"
		    />
		  </view>
		</template>
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
				chartData: {}
			}
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
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						series: [{
							data: [{
								"name": "微信",
								"value": 3145,
								"labelText":"3145元"
							}, {
								"name": "支付宝",
								"value": 120,
								"labelText":"120元"
							}]
						}]
					};
					this.chartData = JSON.parse(JSON.stringify(res));
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

	.statistics-parent {
		display: inline-flex;
		flex-direction: column;
		padding: 10px;
		margin: 10px;
		background-color: white;
		border-radius: 5px;
	}

	.statistics-item-parent {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.statistics-item-title {
		color: white;
		font-size: 12px;
	}

	.statistics-item-text {
		color: white;
		font-weight: bold;
		margin-top: 5px;
	}

	.statistics-item {
		display: inline-flex;
		flex-direction: column;
		padding: 10px;
		margin-top: 10px;
		border-radius: 5px;
	}

	.first-item {
		width: 90px;
		background-image: linear-gradient(120deg, #f6d365, #fda085 100%);
		margin-right: 10px;
	}

	.second-item {
		width: 90px;
		background-image: linear-gradient(135deg, #2AFADF 10%, #4C83FF 100%);
		margin-right: 10px;
	}

	.third-item {
		width: 90px;
		background-image: linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%);
	}

	.fourth-item {
		width: 149px;
		background-image: linear-gradient(120deg, #f6d365, #fda085 100%);
		margin-right: 10px;
	}

	.fiveth-item {
		width: 149px;
		background-image: linear-gradient(135deg, #2AFADF 10%, #4C83FF 100%);
	}
	.charts-box {
	    width: 100%;
	    height: 300px;
	  }
</style>