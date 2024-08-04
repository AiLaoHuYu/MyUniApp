<template>
	<view class="uni-item-parent">
		<view class="uni-item-row">
			<view class="uni-text">
				<text class="title-text"> 父级区域: </text>
			</view>
			<view class="uni-icon">
				<icon></icon>
			</view>
		</view>

		<view class="uni-item-row">
			<view class="uni-text">
				<text class="title-text"> 区域名称: </text>
			</view>
			<input @input="itemMessage.itemMessage.parentAreaName" v-model="itemMessage.parentAreaName" />
		</view>

		<view class="uni-item-row">
			<view class="uni-text">
				<text class="title-text"> 余位: </text>
			</view>
			<input type="number" @input="itemMessage.spareSpace" v-model="itemMessage.spareSpace" />
		</view>

		<view class="uni-item-row">
			<view class="uni-text">
				<text class="title-text"> 总车位: </text>
			</view>
			<input type="number" @input="itemMessage.spaceTotal" v-model="itemMessage.spaceTotal" />
		</view>


		<view class="uni-button">
			<button style="background-color:#1E90FF; color: #fff;"> 确定 </button>
			<button style="background-color:#7B68EE; color: #fff;" @click="cacnel()"> 取消 </button>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				itemMessage: ''
			}
		},
		methods: {
			cacnel() {
				uni.navigateBack({
					delta: 1,
				})
			}
		},
		onLoad: function() {
			console.log("onload")
			// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			uni.$on('itemMessage', (data) => {
				console.log(data)
				this.itemMessage = data
			})
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		background-color: #B0C4DE;
	}

	.uni-item-parent {
		margin: 40rpx 40rpx;
		display: flex;
		flex-direction: column;
	}

	.uni-item-row {
		display: inline-flex;
		flex-direction: row;
		background-color: #fff;
		border-radius: 5px;
		margin-top: 40rpx;
		padding: 20rpx;

		.title-text {
			font-weight: bold;
			color: gray;
			font-size: 30rpx;
		}

		input {
			padding-left: 20rpx;
		}
	}

	.uni-button {
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-top: 25rpx;


		button {
			border-radius: 45rpx;
			width: 260rpx;
		}
	}
</style>