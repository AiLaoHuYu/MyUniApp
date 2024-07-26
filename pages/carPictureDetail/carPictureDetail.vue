<template>
	<view>
		<view class="image-parent">
			<image v-if="isShwoOther" src="../../static/carpicturedetail/picture.png" @click="increaseProgress">
			</image>
			<view v-if="isShwoOther" class="image-text">
				点击查看图片！
			</view>
			<image v-if="isShwoImage" src="../../static/logo.png"></image>
		</view>
		<progress v-if="isShwoOther" :percent="progressPercent" stroke-width="2" />

		<view class="extra">
			<uni-list>
				<uni-list-item :show-extra-icon="true" :extra-icon="licensePlateIcon" title="车牌号码" :rightText="itemMessage.licensePlate"></uni-list-item>
				<uni-list-item :show-extra-icon="true" :extra-icon="carColorIcon" title="车牌颜色" :rightText="itemMessage.carColor"></uni-list-item>
				<uni-list-item :show-extra-icon="true" :extra-icon="chargeDescIcon" title="计费描述" :rightText="itemMessage.chargeDesc"></uni-list-item>
				<uni-list-item :show-extra-icon="true" :extra-icon="firstComeTimeIcon" title="进场时间" :rightText="itemMessage.firstComeTime"></uni-list-item>
				<uni-list-item :show-extra-icon="true" :extra-icon="parkingTimeIcon" title="停车时长" :rightText="itemMessage.parkingTime"></uni-list-item>
				<uni-list-item :show-extra-icon="true" :extra-icon="carTypeIcon" title="车辆类型" :rightText="itemMessage.carType"></uni-list-item>
			</uni-list>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				licensePlateIcon:{
					color:'#32CD32',
					size:'24',
					type:'wallet-filled'//icon名称
				},
				carColorIcon:{
					color:'#32CD32',
					size:'24',
					type:'calendar-filled'//icon名称
				},
				chargeDescIcon:{
					color:'#FF8C00',
					size:'24',
					type:'chatbubble-filled'//icon名称
				},
				firstComeTimeIcon:{
					color:'#FF8C00',
					size:'24',
					type:'fire-filled'//icon名称
				},
				parkingTimeIcon:{
					color:'#32CD32',
					size:'24',
					type:'eye-filled'//icon名称
				},
				carTypeIcon:{
					color:'#32CD32',
					size:'24',
					type:'camera-filled'//icon名称
				},
				itemMessage: '',
				isShwoImage: false,
				isShwoOther: true,
				progressPercent: 0 // 进度条的百分比
			}
		},
		onLoad: function() {
			console.log("onload")
			// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			uni.$on('itemMessage', (data) => {
				console.log(data)
				this.itemMessage = data
			})
		},
		methods: {
			increaseProgress() {
				const increment = () => {
					if (this.progressPercent < 100) {
						this.progressPercent += 10; // 每次增长10%
						setTimeout(increment, 200) // 延迟200ms继续增长
					} else {
						this.isShwoImage = true
						this.isShwoOther = false
					}
				};
				increment()
			}

		}
	}
</script>

<style scoped lang="scss">
	.image-parent {
		background-color: #696969;
		text-align: center;
	}

	.image-text {
		font-size: 30rpx;
		color: #fff;
		font-weight: bold;
	}

	.extra {
		margin: 10rpx 20rpx;
		background-color: #fff;
		border-radius: 4rpx;

		.item {
			line-height: 1;
			padding: 25rpx 0 25rpx 20rpx;
			border-bottom: 1rpx solid #eee;
			font-size: 30rpx;
			color: #333;
		}
	}
</style>