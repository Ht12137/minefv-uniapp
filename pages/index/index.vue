<template>
	<view>
		<van-button type="info" @click="gotoCvPage">填写简历</van-button>
		<van-button type="info" @click="gotoTestPage">测试页面</van-button>
	</view>
</template>

<script setup>
	
	const gotoCvPage = () => {
		uni.navigateTo({
			url: '/pages/cv-table/CvPage'
		});
	}
	const gotoTestPage = () =>{
		uni.navigateTo({
			url: '/pages/test/testPage'
		});
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
