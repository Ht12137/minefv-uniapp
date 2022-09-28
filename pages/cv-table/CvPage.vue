<template>
	<van-field value="输入框已禁用" label="用户名" left-icon="contact" disabled border="{{ false }}" />
	<van-field value="username" placeholder="请输入用户名" border="{{ false }}" />
</template>

<script setup>
	import {
		ref
	} from "vue";
	const username = ref('wht');
	const password = ref('12313')

	watch(username.value, (val, oldVal) => {
		console.log(val)
	})
</script>

<style>
</style>
