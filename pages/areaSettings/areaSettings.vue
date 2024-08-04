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

			<view class="main">
				<scroll-view class="uni-list-parent">
					<view class="list-item" v-for="(item,index) in info"
						:style="index===info.length-1?'margin-bottom: 20px;':''">
						<view class="list-item-first">
							<text class="list-item-text-first-left">区域名称:</text>
							<text class="list-item-text-first-right">{{item.areaName}}</text>
						</view>

						<view class="list-item-other">
							<text class="list-item-text-left">父级区域名称:</text>
							<text class="list-item-text-right">{{item.parentAreaName}}</text>
						</view>

						<view class="list-item-other">
							<text class="list-item-text-left">空闲车位:</text>
							<text class="list-item-text-right">{{item.spareSpace}}</text>
						</view>

						<view class="list-item-other">
							<text class="list-item-text-left">车位总数:</text>
							<text class="list-item-text-right">{{item.spaceTotal}}</text>
						</view>

						<view class="divider"></view>
						
						
						
						<view class="button-parent">
							
							<view>
								<button class="button button-second">删除</button>
							</view>
							
							<view>
								<button class="button button-third" @click="goEdit() ">编辑</button>
							</view>
							
							
						
						</view>
					</view>
					
					<view>暂无更多数据</view>
				</scroll-view>
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
						areaName: "内场",
						parentAreaName: "",
						spareSpace: 1000,
						spaceTotal: 1000
					},
					{
						areaName: "外场",
						parentAreaName: "",
						spareSpace: 1049,
						spaceTotal: 1000
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
			goEdit(item){
				uni.navigateTo({
					url: '/pages/areaEdit/areaEdit',
					success: (res) => {
						//通过eventChannel向被打开的页面传送数据
						uni.$emit('itemMessage', item)
					}
				})
			},
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
	
	page{
		height: 100%;
		background-color: lightgray;
	}

	.uni-list-parent {
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
		display: flow;
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
	
	.button-second{
		background-color: #00BFFF;
		margin-left: 20rpx;
	}

	.button-third {
		background-color: #F4A460;
	}

	.space-holder {
		/* 不可见元素样式，用于保留空间 */
		visibility: hidden;
	}
</style>