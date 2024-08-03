<template>
	<view class="container">
		<view class="home">
			<!--circular用来设置循环轮播   indicator-dots设置下面小圆点用来点击 -->
			<swiper circular indicator-dots>
				<!-- v-for循环遍历数组 -->
				<swiper-item v-for="item in swipers">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="unin-flex unin-column-first">
			<view>
				<view class="row-item-title">
					车场信息
				</view>
			</view>
			<view class="unin-flex item-row">

				<view class="item-parent" @click="goPresentCar()" style="margin-right: 40rpx;">
					<view class="item-text">
						在场车辆
					</view>
					<image class="item-img" src="../../static/manager/presentCar.png"></image>
				</view>

				<view class="item-parent" @click="goEntryExitRecords()">

					<view class="item-text">
						进出记录
					</view>
					<image class="item-img" src="../../static/manager/exitEntryRecords.png"></image>
				</view>

				<view class="item-parent" style="margin-right: 40rpx;margin-top: 20rpx;margin-bottom: 20rpx">
					<view class="item-text">
						等待处理
					</view>
					<image class="item-img" src="../../static/manager/watingHandler.png"></image>
				</view>

				<view class="item-parent" @click="goMainChart()" style="margin-top: 20rpx;margin-bottom: 20rpx;">

					<view class="item-text">
						首页表图
					</view>
					<image class="item-img" src="../../static/manager/mainChart.png"></image>
				</view>

			</view>

		</view>

		<view class="unin-flex unin-column">
			<view>
				<view class="row-item-title">
					基础配置
				</view>
			</view>
			<view class="unin-flex item-row">

				<view class="item-parent-sceond" style="margin-right: 40rpx;">
					<view class="item-text">
						区域配置
					</view>
					<image class="item-img" src="../../static/manager/areaSetting.png"></image>
				</view>

				<view class="item-parent-sceond">

					<view class="item-text">
						通道配置
					</view>
					<image class="item-img" src="../../static/manager/channelSetting.png"></image>
				</view>

				<view class="item-parent-sceond" style="margin-right: 40rpx;margin-top: 20rpx;margin-bottom: 20rpx">
					<view class="item-text">
						通道权限
					</view>
					<image class="item-img" src="../../static/manager/channelPermission.png"></image>
				</view>

				<view class="item-parent-sceond" style="margin-top: 20rpx;margin-bottom: 20rpx;">

					<view class="item-text">
						相机配置
					</view>
					<image class="item-img" src="../../static/manager/camera.png"></image>
				</view>

				<view class="item-parent-sceond" style="margin-bottom: 20rpx;">

					<view class="item-text">
						网络主板
					</view>
					<image class="item-img" src="../../static/manager/network_motherboard.png"></image>
				</view>

			</view>
		</view>

		<view class="unin-flex unin-column">
			<view>
				<view class="row-item-title">
					报表统计
				</view>
			</view>
			<view class="unin-flex item-row">

				<view class="item-parent-third" style="margin-right: 40rpx;">
					<view class="item-text">
						固定车收费
					</view>
					<image class="item-img" src="../../static/manager/fixed_car_charges.png"></image>
				</view>

				<view class="item-parent-third">

					<view class="item-text">
						临时车收费
					</view>
					<image class="item-img" src="../../static/manager/temporary_car_charges_apply.png"></image>
				</view>

				<view class="item-parent-third" style="margin-right: 40rpx;margin-top: 20rpx;margin-bottom: 20rpx">
					<view class="item-text">
						收费统计
					</view>
					<image class="item-img" src="../../static/manager/charge_statistics.png"></image>
				</view>

				<view class="item-parent-third" style="margin-top: 20rpx;margin-bottom: 20rpx;">

					<view class="item-text">
						停车订单
					</view>
					<image class="item-img" src="../../static/manager/parking_orders.png"></image>
				</view>

				<view class="item-parent-third" style="margin-right: 40rpx;margin-bottom: 20rpx;">

					<view class="item-text">
						人工开闸
					</view>
					<image class="item-img" src="../../static/manager/open_sluice_gate.png"></image>
				</view>

				<view class="item-parent-third" style="margin-bottom: 20rpx;">

					<view class="item-text">
						现金收费
					</view>
					<image class="item-img" src="../../static/manager/parking_charging.png"></image>
				</view>

				<view class="item-parent-third" style="margin-bottom: 20rpx;">

					<view class="item-text">
						现金结算
					</view>
					<image class="item-img" src="../../static/manager/cash_settlement.png"></image>
				</view>

			</view>
		</view>

		<view class="unin-flex unin-column">
			<view>
				<view class="row-item-title">
					系统管理
				</view>
			</view>
			<view class="unin-flex item-row">

				<view class="item-parent-four" style="margin-right: 40rpx;">
					<view class="item-text">
						用户管理
					</view>
					<image class="item-img" src="../../static/manager/people_manager.png"></image>
				</view>

				<view class="item-parent-four">

					<view class="item-text">
						权限管理
					</view>
					<image class="item-img" src="../../static/manager/permissions_management.png"></image>
				</view>

				<view class="item-parent-four" style="margin-top: 20rpx;margin-bottom: 20rpx">
					<view class="item-text">
						车场配置
					</view>
					<image class="item-img" src="../../static/manager/parking_lot_configuration.png.png"></image>
				</view>

			</view>
		</view>

	</view>
</template>


<script>
	//VM：协调者调度器
	export default {
		//Model所有的数据
		data() {
			return {
				swipers: [
					'https://i-blog.csdnimg.cn/blog_migrate/99b7cd44a9e6d1d97efa2bc432fa2be2.png',
					'https://i-blog.csdnimg.cn/blog_migrate/f0fa516089b8ebb7e43cd5a55080ff27.jpeg',
					'https://i-blog.csdnimg.cn/blog_migrate/459a2db750fd59ca43b295a961f3b314.jpeg',
				]
			}
		},
		onLoad() {

		},
		methods: {
			goPresentCar() {
				uni.navigateTo({
					url: '/pages/presentcar/presentcar'
				})
			},
			goEntryExitRecords() {
				uni.navigateTo({
					url: '/pages/entryexitrecords/entryexitrecords'
				})
			},
			goMainChart(){
				uni.navigateTo({
					url: '/pages/mainChart/mainChart'
				})
			}
		}
	}
</script>


<style lang="scss">
	.container {
		/* 定义flex容器 */
		display: flex;
		flex-direction: column;
		background-color: lightgray;
		width: 100%;
		height: 100%;
		/*设置容器内部容器的排列方向*/
	}

	.home {
		swiper {
			width: 750rpx;
			height: 470rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.item-parent {
		display: inline-flex;
		flex-direction: row;
		width: 300rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		justify-content: center;
		align-items: center;
		background: linear-gradient(90deg, #5c83ba, #c4d2ec, #f2f1ed);
	}

	.item-parent-sceond {
		display: inline-flex;
		flex-direction: row;
		width: 300rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		justify-content: center;
		align-items: center;
		background: linear-gradient(90deg, #d3d3d3, #696969);
	}

	.item-parent-third {
		display: inline-flex;
		flex-direction: row;
		width: 300rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		justify-content: center;
		align-items: center;
		background: linear-gradient(90deg, #fffdd0, #f5f5dc, #d2b48c);
	}

	.item-parent-four {
		display: inline-flex;
		flex-direction: row;
		width: 300rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		justify-content: center;
		align-items: center;
		background: linear-gradient(90deg, #bee4a0, #faf8ef);
	}

	.item-img {
		width: 130rpx;
		height: 100rpx;
	}

	.item-text {
		margin-right: 40rpx;
		color: #000;
		font-weight: bold;
		font-size: 28rpx;
	}

	.unin-column-first {
		display: inline-flex;
		flex-direction: column;
		background-color: white;
	}

	.unin-column {
		display: inline-flex;
		flex-direction: column;
		background-color: white;
		margin-top: 20rpx;
	}

	.item-row {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
		background-color: white;
		padding: 15rpx;
	}

	.unin-row {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding-top: 20rpx;
		line-height: 40rpx;
	}

	.uni-row-item {
		display: inline-flex;
		flex-direction: column;
		width: 25%;
		height: auto;
		align-items: center;
		justify-content: center;

	}

	.row-image {
		width: 70upx;
		height: 70upx;
	}

	.image-parent {
		width: 80upx;
		height: 80upx;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 10upx;
		border-radius: 8upx;
	}

	.row-text {
		font-size: 24upx;
		padding-top: 5upx;
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
	}

	.row-item-title {
		font-size: 30upx;
		padding: 15rpx;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
	}
</style>