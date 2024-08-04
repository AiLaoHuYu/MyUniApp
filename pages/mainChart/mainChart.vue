<template>
	<view>
		<uni-list-item title="头像">
			<!-- 为uni-list-item增加了插槽 -->
			<template v-slot:footer>
				<image :src="userpic" class="rounded-circle" style="width: 100rpx; height: 100rpx;" mode=""></image>
			</template>
		</uni-list-item>
		<uni-list-item title="当前用户">
			<template v-slot:footer>
				{{username}}
			</template>
		</uni-list-item>
		<uni-list-item title="外场余位">
			<template v-slot:footer>
				{{outfieldSpareSpace}}
			</template>
		</uni-list-item>
		<uni-list-item title="内场余位">
			<template v-slot:footer>
				{{insideSpareSpace}}
			</template>
		</uni-list-item>
		<button style="background-color: #4169E1;color: white;" @click="back()">关闭</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				userpic: "/static/mine/admin_head.png",
				username: "admin",
				outfieldSpareSpace: 1049,
				insideSpareSpace: 1000
			}
		},
		computed: {

		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}

		}
	}
</script>

<style>

</style>