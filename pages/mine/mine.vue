<template>
	<view class="wrapper">
		<!-- 个人资料 -->
		<view>
			<view class="top">
				<view class="center">
					<view v-if="isLoggedIn">
						<view class="center_top">
							<view class="center_img">
								<!-- 这里可以放自己的静态头像 -->
								<image src="/static/mine/admin_head.png"></image>
								<!-- <open-data type="userAvatarUrl" class="user_head"></open-data> -->
							</view>
							<view class="center_info">
								<view class="center_name">
									村委创意产业园
								</view>
								<view class="center_vip">
									<uni-icons type="vip" size="14"></uni-icons>
									<view class="vip_text">
										<text>账号:admin</text>
									</view>
								</view>
								<!-- 其他个人中心内容 -->
							</view>
							<view class="changeParkingButton">切换车场</view>
						</view>

					</view>
					<view v-else class="loginButton" @click="onLoginClick">登录</view>
				</view>

			</view>
		</view>

		<!-- 其它 -->
		<view class="extra">
			<uni-list>
				<uni-list-item showArrow thumb="" title="修改密码" link to="/pages/"></uni-list-item>
				<uni-list-item showArrow title="厂商登录"></uni-list-item>
				<uni-list>
					<view v-if="isLoggedIn" class="exitButton" @click="onExitClick()">退出</view>
				</uni-list>
			</uni-list>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLoggedIn: true,
				userInfo: {}
			}
		},
		computed: {

		},
		created() {

		},
		methods: {
			onExitClick() {
				// 跳转至登录页面
				uni.reLaunch({ url: '/pages/login/login' });
			}

		}
	};
</script>

<style scoped lang="scss">
	Page {
		font-size: 14rpx;
	}

	.top {
		width: 100%;
		height: 200rpx;
		// background: #23EBB9;
		background: #2979ff;
		padding-top: 30rpx;
		position: relative;
	}

	.center {
		width: 95%;
		height: 160rpx;
		background: #55aaff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
		margin: 0 auto;
		border-radius: 5rpx;
	}

	.center_top {
		display: flex;
		min-width: 350rpx;
		flex-direction: row;
		//background: #ffaa7f;
		height: 100rpx;
		margin-top: 0rpx;
		border-bottom: 1rpx solid #5555ff;
	}

	.center_img {
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
		overflow: hidden;
	}

	.center_img image {
		width: 100%;
		height: 100%;
	}

	.center_img .user_head {
		width: 100%;
		height: 100%;
	}

	.center_info {
		display: flex;
		flex-direction: column;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	.center_name {
		font-size: 24rpx;
		color: white;
		font-weight: bold;
	}

	.center_phone {
		color: #BEBEBE;
	}

	// .center_down {
	// 	display: flex;
	// 	flex-direction: row;
	// 	width: 80%;
	// 	height: 35px;
	// 	margin: 0 auto;
	// 	margin-top: 20rpx;
	// }

	.rank_text {
		height: 35rpx;
		line-height: 35rpx;
		margin-left: 10rpx;
		color: #AAAAAA;
	}

	.center_vip image {
		width: 20rpx;
		height: 20rpx;
		margin-top: 10rpx;
	}

	.vip_icon {
		width: 25rpx;
		height: 25rpx;
		margin-top: 5rpx;
	}

	.vip_text {
		font-size: 24rpx;
		margin-top: -33rpx;
		margin-left: 40rpx;
		color: white;
	}

	.wrapper {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		background-color: #F4F4F4;
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

		button {
			text-align: left;
			background-color: #fff;

			&::after {
				border: none;
				border-radius: 0;
			}
		}
	}

	.icon-arrow {
		position: relative;

		&::before {
			position: absolute;
			top: 50%;
			right: 20rpx;
			transform: translateY(-50%);
		}
	}

	.exitButton {
		margin: 20rpx;
		width: 95%;
		height: 60rpx;
		background-color: skyblue;
		/* 设置背景颜色为蓝色 */
		color: white;
		/* 设置文本颜色为白色 */
		font-size: 24rpx;
		/* 设置字体大小为 16px */
		text-align: center;
		line-height: 60rpx;
		border-radius: 20rpx;
		/* 设置圆角 */
		cursor: pointer;
		/* 设置鼠标样式为指针 */
	}

	.changeParkingButton {
		padding: 20rpx 60rpx;
		margin-left: 20rpx;
		margin-top: 10rpx;
		width: 100rpx;
		height: 40rpx;
		background-color: skyblue;
		/* 设置背景颜色为蓝色 */
		color: white;
		/* 设置文本颜色为白色 */
		font-size: 24rpx;
		/* 设置字体大小为 16px */
		text-align: center;
		border-radius: 23rpx;
		/* 设置圆角 */
		cursor: pointer;
		/* 设置鼠标样式为指针 */
	}
</style>