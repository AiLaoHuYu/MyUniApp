<template>
	<view class="content">
		<view class="title">
			掌上云停
		</view>
		<view class="topBox">
			<h3>WELCOME</h3>
			<h3>欢迎使用掌上云停车</h3>
		</view>
		<view class="inputBox">
			<view class="ipt">
				<h4>车场名称</h4>
				<input type="text" v-model="yardName" placeholder="请输入车场名称" />
			</view>
			<view class="ipt">
				<h4>用户名</h4>
				<input type="text" v-model="username" placeholder="请输入用户名" />
			</view>
			<view class="ipt">
				<h4>密码</h4>
				<input type="safe-password" v-model="password" placeholder="请输入密码" />
			</view>
			<button class="loginBtn" @click="login()">登录</button>
			<button class="registerBtn">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				yardName: '',
				password: ''
			}
		},
		methods: {
			login() {
				if (this.yardName.trim() === "") {
					uni.showToast({
						title: '车场名称为空',
						icon: 'none', //如果要纯文本，不要icon，将值设为'none'
						duration: 2000 //持续时间为 2秒
					})
				} else if (this.username.trim() === '') {
					uni.showToast({
						title: '用户名为空',
						icon: 'none', //如果要纯文本，不要icon，将值设为'none'
						duration: 2000 //持续时间为 2秒
					})
				} else if (this.password.trim() === '') {
					uni.showToast({
						title: '密码为空',
						icon: 'none', //如果要纯文本，不要icon，将值设为'none'
						duration: 2000 //持续时间为 2秒
					})
				} else {
					// 跳转至登录页面
					uni.switchTab({
						url: '/pages/index/index'
					});
				}

			}
		}
	}
</script>

<style scoped>
	.content {
		height: 100vh;
		background-color: aquamarine;
		background: url("https://www.galaxyclub.cn/Upload/IMAGES/15/0615/38af439784544e95b7c64cad64a14157_650x650.jpg");
		background-size: cover;
	}

	.topBox {
		font-size: 34rpx;
		color: #fff;
		padding: 80rpx 50rpx;
	}

	.title {
		padding-top: 100rpx;
		font-size: 34rpx;
		font-weight: bold;
		color: #fff;
		text-align: center;
	}

	h3 {
		margin-bottom: 10rpx;
	}

	.inputBox {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750rpx;
		height: 80vh;
		background-color: #fff;
		border-top-left-radius: 40rpx;
		border-top-right-radius: 40rpx;
		padding: 60rpx;
		box-sizing: border-box;
	}

	.ipt {
		margin-bottom: 50rpx;
	}

	.ipt h4 {
		margin-bottom: 20rpx;
		font-size: 36rpx;
		color: #333;
	}

	.ipt input {
		border-bottom: 1px solid #dedede;
		padding-bottom: 20rpx;
		font-size: 28rpx;
	}

	.loginBtn {
		margin-top: 20rpx;
		line-height: 85rpx;
		text-align: center;
		background: linear-gradient(to right, rgb(86, 104, 214), rgb(86, 104, 214));
		border-radius: 40rpx;
		color: #fff;
		margin-top: 50rpx;
	}

	.registerBtn {
		margin-top: 20rpx;
		line-height: 85rpx;
		text-align: center;
		border-radius: 40rpx;
		color: rgb(86, 104, 214);
		margin-top: 50rpx;
		border: none;
	}
</style>