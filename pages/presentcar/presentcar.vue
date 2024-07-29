<template>
	<view class="content">
		<view>
			<view class="uni-section-search">
				<uni-section type="line">
					<uni-search-bar @confirm="search" :focus="true" @blur="blur" @focus="focus" @input="input"
						@cancel="cancel" @clear="clear" cancelButton="none" clearButton="auto">
					</uni-search-bar>
				</uni-section>
			</view>

			<view class="space-holder" :style="{ height: fixedElementHeight + 'px' }">
				占着位置的元素
			</view>

			<view class="uni-list-parent">
				<view class="list-item" v-for="(item,index) in info"
					:style="index===info.length-1?'margin-bottom: 20px;':''">
					<view class="list-item-first">
						<text class="list-item-text-first-left">车牌号:</text>
						<text class="list-item-text-first-right">{{item.licensePlate}}</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">车辆类型:</text>
						<text class="list-item-text-right">{{item.carType}}</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">车牌颜色:</text>
						<text class="list-item-text-right">{{item.carColor}}</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">计费描述:</text>
						<text class="list-item-text-right">{{item.chargeDesc}}</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">入场通道:</text>
						<text class="list-item-text-right">{{item.comeChannel}}</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">首次进场时间:</text>
						<text class="list-item-text-right">{{item.firstComeTime}}</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">停车时长:</text>
						<text class="list-item-text-right">{{item.parkingTime}}</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">停车区域:</text>
						<text class="list-item-text-right">{{item.parkingArea}}</text>
					</view>

					<view class="divider"></view>

					<view class="button-parent">
						<button class="button button-first" @click="inputDialogToggle(item,index)">修改车牌</button>
						<view>
							<!-- 输入框示例 -->
							<uni-popup ref="inputDialog" type="dialog">
								<uni-popup-dialog ref="inputClose" mode="input" title="修改车牌信息" placeholder="请输入车牌号"
									v-model="item.licensePlate" @confirm="dialogInputConfirm"
									style="text-align: center;"></uni-popup-dialog>
							</uni-popup>
						</view>
						<button class="button button-second">离场</button>
						<button class="button button-third" @click="goToShowPicture(item)">查看照片</button>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				fixedElementHeight: 50,
				info: [{
						licensePlate: "粤B66786",
						carType: "临时车",
						carColor: "蓝色",
						chargeDesc: "首次入场",
						comeChannel: "入口3",
						firstComeTime: "2024-07-21 23:48:33",
						parkingTime: "7分34秒",
						parkingArea: "外场"
					},
					{
						licensePlate: "粤B66126",
						carType: "临时车",
						carColor: "红色",
						chargeDesc: "首次入场",
						comeChannel: "入口3",
						firstComeTime: "2024-07-21 23:48:33",
						parkingTime: "7分34秒",
						parkingArea: "外场"
					},
					{
						licensePlate: "粤B77656",
						carType: "临时车",
						carColor: "白色",
						chargeDesc: "首次入场",
						comeChannel: "入口3",
						firstComeTime: "2024-07-21 23:48:33",
						parkingTime: "7分34秒",
						parkingArea: "外场"
					},
					{
						licensePlate: "粤B9897J",
						carType: "临时车",
						carColor: "绿色",
						chargeDesc: "首次入场",
						comeChannel: "入口3",
						firstComeTime: "2024-07-21 23:48:33",
						parkingTime: "7分34秒",
						parkingArea: "外场"
					},
					{
						licensePlate: "粤K12JJK",
						carType: "临时车",
						carColor: "红色",
						chargeDesc: "首次入场",
						comeChannel: "入口3",
						firstComeTime: "2024-07-21 23:48:33",
						parkingTime: "7分34秒",
						parkingArea: "外场"
					},
					{
						licensePlate: "粤J88SEC",
						carType: "临时车",
						carColor: "红色",
						chargeDesc: "首次入场",
						comeChannel: "入口3",
						firstComeTime: "2024-07-21 23:48:33",
						parkingTime: "7分34秒",
						parkingArea: "外场"
					},
					{
						licensePlate: "粤AUI999",
						carType: "临时车",
						carColor: "红色",
						chargeDesc: "首次入场",
						comeChannel: "入口3",
						firstComeTime: "2024-07-21 23:48:33",
						parkingTime: "7分34秒",
						parkingArea: "外场"
					}
				]
			}
		},
		mounted: function() {
			var _this = this;
			var _that = this;
			this.getDomConfig();
		},
		methods: {
			getDomConfig() {
				//等DOM 更新完成后才会执行
				this.$nextTick(() => {
					let that = this
					//捕获“顶部数据”的高度
					let info = uni.createSelectorQuery().select(".uni-section-search");
					info.boundingClientRect(function(data) { //data - 各种参数
						//console.log(data) // 获取元素的相关信息
						that.fixedElementHeight = data.height
					}).exec()
				});
			},
			inputDialogToggle(item, index) {
				this.$refs.inputDialog[index].open()
				console.log("item" + item + "::index:" + index)
			},
			dialogInputConfirm(val) {
				console.log(val)
			},
			goToShowPicture(item) {
				uni.navigateTo({
					url: '/pages/carPictureDetail/carPictureDetail',
					success: (res) => {
						//通过eventChannel向被打开的页面传送数据
						uni.$emit('itemMessage', item)
					}
				})
			},
			search(res) {},
			input(res) {
				console.log(res.value)
			},
			clear(res) {
				console.log("clear")
			},
			blur(res) {
				console.log("blur: " + res.value)
			},
			focus(e) {
				console.log("focus")
			},
			cancel(res) {
				console.log("cancel")
			}
		}
	}
</script>

<style>

	.uni-section-search {
		z-index: 999;
		background-color: #007aff;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
	}

	.content {
		background-color: lightgray;
	}
	
	.uni-list-parent{
		text-align: center;
	}

	.list-item-first {
		display: flow;
		height: 50px;
		line-height: 50px;
		background-color: aliceblue;
	}

	.list-item {
		width: 710rpx;
		height: auto;
		display: inline-flex;
		flex-direction: column;
		border-radius: 3px;
		padding: 20px;
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 5px;
		box-sizing: border-box;
		background-color: white;
	}

	.list-item-text-first-left {
		font-size: 16px;
		color: royalblue;
		font-weight: bold;
		padding-left: 10px;
		float: left;
	}

	.list-item-text-first-right {
		font-size: 16px;
		color: royalblue;
		font-weight: bold;
		padding-right: 10px;
		float: right;
	}

	.list-item-text-left {
		font-size: 16px;
		color: gray;
		float: left;
		font-weight: bold;
		padding-right: 10px;
	}

	.list-item-other {
		margin-top: 10px;
	}

	.list-item-text-right {
		font-size: 16px;
		color: black;
		float: right;
	}

	.divider {
		margin-top: 30rpx;
		background-color: #E0E3DA;
		width: 100%;
		height: 3rpx;
	}

	.button-parent {
		display: inline-flex;
		flex-direction: row;
		text-align: right;
	}

	button {
		margin-top: 10rpx;
		width: 150rpx;
		height: 65rpx;
		font-size: 24rpx;
		color: white;
		text-align: center;
	}

	.button-first {
		background-color: #00BFFF;
	}

	.button-second {
		background-color: #FF6347;
	}

	.button-third {
		background-color: #F4A460;
	}

	.space-holder {
		/* 不可见元素样式，用于保留空间 */
		visibility: hidden;
	}
</style>