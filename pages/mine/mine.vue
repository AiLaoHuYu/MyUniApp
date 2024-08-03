<template>
	<view>
		<view class="upper-box">
			<view class="tip-box">
				<view class="tip">欢迎您，admin!</view>
				<view class="btn">切换车场 ></view>
			</view>
			<view class="setting">
				<image src="../../static/mine/admin_head.png"></image>
			</view>
		</view>
		<view class="lower-box">
			<view class="menu">
				<image src="../../static/mine/changePassword.png"></image>
				<text>修改密码</text>
			</view>
			<view class="menu">
				<image src="../../static/mine/changshangLogin.png"></image>
				<text>厂商登录</text>
			</view>
			<view class="menu">
				<image src="../../static/mine/mySetting.png"></image>
				<text>我的设置</text>
			</view>
			<view class="menu">
				<image src="../../static/mine/exitLogin.png"></image>
				<text>退出登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
	};
</script>

<style lang="scss">
	.upper-box {
		position: relative;
		width: 100%;
		height: 400rpx;
		border-bottom-right-radius: 50rpx;
		border-bottom-left-radius: 50rpx;
		background: linear-gradient(to right, #2859fe, #1ba0ff);

		.tip-box {
			padding: 50rpx 0 0 50rpx;

			.tip {
				font-size: 50rpx;
				line-height: 100rpx;
				color: #FFFFFF;
			}

			.btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 250rpx;
				height: 60rpx;
				border-radius: 50rpx;
				color: #2859fe;
				background-color: #FFFFFF;
			}
		}
		
		.setting{
			position: absolute;
			top: 50rpx;
			right: 50rpx;
			
			image{
				width: 60rpx;
				height: 60rpx;
			}
		}
	}

	.lower-box {
		position: relative;
		top: -80rpx;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;

		.menu {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin: 30rpx;
			width: 250rpx;
			height: 300rpx;
			background-color: #FFFFFF;
			border-radius: 30rpx;
			box-shadow: 0 5rpx 15rpx #e1e1e1;

			image {
				width: 120rpx;
				height: 120rpx;
			}

			text {
				font-size: 28rpx;
				padding-top: 50rpx;
			}
		}
	}
</style>

