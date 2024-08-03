<template>
	<view class="container">

		<view class="unin-flex unin-column">
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
					<image class="item-img" src="../../static/manager/presentCar.png"></image>
				</view>

				<view class="item-parent" style="margin-top: 20rpx;margin-bottom: 20rpx;">

					<view class="item-text">
						首页表图
					</view>
					<image class="item-img" src="../../static/manager/exitEntryRecords.png"></image>
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
		
				<view class="item-parent" @click="goPresentCar()" style="margin-right: 40rpx;">
					<view class="item-text">
						区域配置
					</view>
					<image class="item-img" src="../../static/manager/area_setting.png"></image>
				</view>
		
				<view class="item-parent" @click="goEntryExitRecords()">
		
					<view class="item-text">
						通道配置
					</view>
					<image class="item-img" src="../../static/manager/passage.png"></image>
				</view>
		
				<view class="item-parent" style="margin-right: 40rpx;margin-top: 20rpx;margin-bottom: 20rpx">
					<view class="item-text">
						通道权限
					</view>
					<image class="item-img" src="../../static/manager/permissions.png"></image>
				</view>
		
				<view class="item-parent" style="margin-top: 20rpx;margin-bottom: 20rpx;">
		
					<view class="item-text">
						相机配置
					</view>
					<image class="item-img" src="../../static/manager/camera.png"></image>
				</view>
				
				<view class="item-parent" style="margin-bottom: 20rpx;">
						
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
					车辆信息
				</view>
			</view>
			<view class="unin-flex unin-row">

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: #FF8C00;">
						<image class="row-image" src="../../static/manager/fixed_vehicle_information.png"></image>
					</view>
					<view class="row-text">
						固定车资料
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color:#228B22;">
						<image class="row-image" src="../../static/manager/booking_car_information.png"></image>
					</view>
					<view class="row-text">
						会员车资料
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color:	#00BFFF;">
						<image class="row-image" src="../../static/manager/booking_car_setting.png"></image>
					</view>
					<view class="row-text">
						预约车资料
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: black;">
						<image class="row-image" src="../../static/manager/blacklist.png"></image>
					</view>
					<view class="row-text">
						黑名单资料
					</view>
				</view>

			</view>
		</view>


		<view class="unin-flex unin-column">
			<view>
				<view class="row-item-title">
					车型配置
				</view>
			</view>
			<view class="unin-flex unin-row">

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: mediumspringgreen;">
						<image class="row-image" src="../../static/manager/car_setting.png"></image>
					</view>
					<view class="row-text">
						固定车配置
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: orange;">
						<image class="row-image" src="../../static/manager/member_car_setting.png"></image>
					</view>
					<view class="row-text">
						会员车配置
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: palevioletred;">
						<image class="row-image" src="../../static/manager/booking_car_setting.png"></image>
					</view>
					<view class="row-text">
						预约车配置
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: goldenrod;">
						<image class="row-image" src="../../static/manager/temporary_car_setting.png"></image>
					</view>
					<view class="row-text">
						临时车配置
					</view>
				</view>

			</view>
		</view>

		<view class="unin-flex unin-column">
			<view>
				<view class="row-item-title">
					优惠券管理
				</view>
			</view>
			<view class="unin-flex unin-row">
				<view class="uni-row-item">
					<view class="image-parent" style="background-color: mediumpurple;">
						<image class="row-image" src="../../static/manager/consumption_vouchers.png"></image>
					</view>
					<view class="row-text">
						待消费券
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: lightpink;">
						<image class="row-image" src="../../static/manager/consumption_vouchers_recording.png"></image>
					</view>
					<view class="row-text">
						发券记录
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: orangered;">
						<image class="row-image" src="../../static/manager/consume_recording.png"></image>
					</view>
					<view class="row-text">
						消费记录
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: goldenrod;">
						<image class="row-image" src="../../static/manager/inventory_management.png"></image>
					</view>
					<view class="row-text">
						库存管理
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: royalblue;	margin-top: 5px;">
						<image class="row-image" src="../../static/manager/merchant_management.png"></image>
					</view>
					<view class="row-text">
						商家管理
					</view>
				</view>
			</view>
		</view>

		<view class="unin-flex unin-column">
			<view>
				<view class="row-item-title">
					报表统计
				</view>
			</view>
			<view class="unin-flex unin-row">
				<view class="uni-row-item">
					<view class="image-parent" style="background-color: lightseagreen;">
						<image class="row-image" src="../../static/manager/fixed_car_charges.png"></image>
					</view>
					<view class="row-text">
						固定车收费
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: mediumpurple;">
						<image class="row-image" src="../../static/manager/temporary_car_charges_apply.png"></image>
					</view>
					<view class="row-text">
						临时车收费
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: lightseagreen;">
						<image class="row-image" src="../../static/manager/charge_statistics.png"></image>
					</view>
					<view class="row-text">
						收费统计
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: goldenrod;">
						<image class="row-image" src="../../static/manager/parking_orders.png"></image>
					</view>
					<view class="row-text">
						停车订单
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: royalblue;	margin-top: 5px;">
						<image class="row-image" src="../../static/manager/open_sluice_gate.png"></image>
					</view>
					<view class="row-text">
						人工开闸
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: skyblue;	margin-top: 5px;">
						<image class="row-image" src="../../static/manager/parking_charging.png"></image>
					</view>
					<view class="row-text">
						现金收费
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: yellowgreen;	margin-top: 5px;">
						<image class="row-image" src="../../static/manager/cash_settlement.png"></image>
					</view>
					<view class="row-text">
						现金结算
					</view>
				</view>
			</view>
		</view>

		<view class="unin-flex unin-column" style="margin-bottom: 10px;">
			<view>
				<view class="row-item-title">
					系统管理
				</view>
			</view>
			<view class="unin-flex unin-row">
				<view class="uni-row-item">
					<view class="image-parent" style="background-color: yellowgreen;">
						<image class="row-image" src="../../static/manager/people_manager.png"></image>
					</view>
					<view class="row-text">
						用户管理
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: indianred;">
						<image class="row-image" src="../../static/manager/permissions_management.png"></image>
					</view>
					<view class="row-text">
						权限管理
					</view>
				</view>

				<view class="uni-row-item">
					<view class="image-parent" style="background-color: royalblue;">
						<image class="row-image" src="../../static/manager/parking_lot_configuration.png"></image>
					</view>
					<view class="row-text">
						车场配置
					</view>
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
			}
		}
	}
</script>


<style>
	.container {
		/* 定义flex容器 */
		display: flex;
		flex-direction: column;
		background-color: lightgray;
		width: 100%;
		height: 100%;
		/*设置容器内部容器的排列方向*/
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

	.item-img {
		width: 100rpx;
		height: 100rpx;
	}

	.item-text {
		margin-right: 40rpx;
		color: #000;
		font-weight: bold;
		font-size: 28rpx;
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