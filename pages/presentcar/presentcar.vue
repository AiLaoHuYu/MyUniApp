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
			<view class="uni-list-parent">
				<view class="list-item" v-for="(item,index) in info" :style="index===info.length-1?'margin-bottom: 20px;':''">
					<view class="list-item-first">
						<text class="list-item-text-first-left">车牌号:</text>
						<text class="list-item-text-first-right">粤L205JC</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">车辆类型:</text>
						<text class="list-item-text-right">临时车</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">车牌颜色:</text>
						<text class="list-item-text-right">蓝色</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">计费描述:</text>
						<text class="list-item-text-right">首次进场</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">入场通道:</text>
						<text class="list-item-text-right">入口3</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">首次进场时间:</text>
						<text class="list-item-text-right">2024-07-21 23:48:33</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">停车时长:</text>
						<text class="list-item-text-right">7分34秒</text>
					</view>

					<view class="list-item-other">
						<text class="list-item-text-left">停车区域:</text>
						<text class="list-item-text-right">外场</text>
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
				info: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
			}
		},
		methods: {
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
</style>