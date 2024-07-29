<template>
	<view class="content">
		<view>
			<view class="uni-section-search">
				<uni-section type="line">
					<uni-search-bar class="search-view" @confirm="search" :focus="true" @blur="blur" @focus="focus"
						@input="input" @cancel="cancel" @clear="clear" cancelButton="none" clearButton="auto">
					</uni-search-bar>
				</uni-section>


				<view class="main">
					<scroll-view class="uni-list-parent">
						<view class="list-item" v-for="(item,index) in info"
							:style="index===info.length-1?'margin-bottom: 20px;':''">
							<view class="list-item-first">
								<text class="list-item-text-first-left">车牌号:</text>
								<text class="list-item-text-first-right">{{item.licensePlate}}</text>
							</view>

							<view class="list-item-other">
								<text class="list-item-text-left">进出原因:</text>
								<text class="list-item-text-right">{{item.inOutResult}}</text>
							</view>

							<view class="list-item-other">
								<text class="list-item-text-left">通道名称:</text>
								<text class="list-item-text-right">{{item.channelName}}</text>
							</view>

							<view class="list-item-other">
								<text class="list-item-text-left">车辆类型名称:</text>
								<text class="list-item-text-right">{{item.carTypeName}}</text>
							</view>

							<view class="list-item-other">
								<text class="list-item-text-left">抓拍时间:</text>
								<text class="list-item-text-right">{{item.photoTime}}</text>
							</view>

							<view class="divider"></view>

							<view class="button-parent">
								<view>
									<button class="button button-third" @click="goToShowPicture(item)">查看照片</button>
								</view>

							</view>
						</view>
					</scroll-view>
				</view>



			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				info: [{
						licensePlate: "粤B66786",
						inOutResult: "临时车自动开闸",
						channelName: "出口1",
						carTypeName: "出场",
						photoTime: "2024-07-26 22:23:09"
					},
					{
						licensePlate: "粤B66786",
						inOutResult: "固定车未在场自动开闸",
						channelName: "出口1",
						carTypeName: "出场",
						photoTime: "2024-07-26 22:23:09"
					},
					{
						licensePlate: "粤B66786",
						inOutResult: "临时车自动开闸",
						channelName: "入口3",
						carTypeName: "入场",
						photoTime: "2024-07-26 22:23:09"
					},
					{
						licensePlate: "粤B66786",
						inOutResult: "临时车自动开闸",
						channelName: "出口1",
						carTypeName: "出场",
						photoTime: "2024-07-26 22:23:09"
					},
					{
						licensePlate: "粤B66786",
						inOutResult: "临时车自动开闸",
						channelName: "入口3",
						carTypeName: "入场",
						photoTime: "2024-07-26 22:23:09"
					},
					{
						licensePlate: "粤B66786",
						inOutResult: "临时车自动开闸",
						channelName: "出口1",
						carTypeName: "出场",
						photoTime: "2024-07-26 22:23:09"
					},
					{
						licensePlate: "粤B66786",
						inOutResult: "临时车自动开闸",
						channelName: "出口1",
						carTypeName: "出场",
						photoTime: "2024-07-26 22:23:09"
					},
				]
			}
		},
		methods: {
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

<style scoped lang="scss">
	.main {
		flex: 1;
		position: relative;

		.uni-list-parent {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
		}
	}




	.search-view {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: #007aff;
	}

	.content {
		display: flex;
		flex-direction: column;
		background-color: lightgray;
	}

	.list-item-first {
		display: flow;
		height: 50px;
		line-height: 50px;
		background-color: aliceblue;
	}

	.list-item {
		width: 370px;
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
		float: right;
	}

	button {
		margin-top: 10rpx;
		width: 150rpx;
		height: 65rpx;
		font-size: 24rpx;
		color: white;
		float: right;
	}

	.button-third {
		background-color: #F4A460;
	}
</style>