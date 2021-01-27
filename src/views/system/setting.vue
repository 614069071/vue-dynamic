<template>
	<div class="setting-view-wrap">
		<div class="login-wrap">
			<el-form ref="login_form" :model="loginInfo" :rules="rules" label-width="50px">
				<el-form-item label="账号">
					admin
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input v-model="loginInfo.password"></el-input>
				</el-form-item>
				<el-form-item label="确认" prop="password">
					<el-input v-model="loginInfo.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="login">修改</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		const validator = (text = '输入不能为空') => (rule, value, callback) => {
			value ? callback() : callback(new Error(text));
		};
		return {
			loginInfo: {
				username: '',
				password: '',
			},
			rules: {
				username: [
					{
						validator: validator('请输入账户'),
					},
				],
				password: [
					{
						validator: validator('请输入密码'),
					},
				],
			},
		};
	},
	created() {},
	methods: {
		login() {
			// 模拟登录
			const login_form = this.$refs.login_form;

			login_form.validate((valid) => {
				if (valid) {
					return true;
				} else {
					return false;
				}
			});
		},
	},
};
</script>

<style scoped>
.login-wrap {
	width: 300px;
}
</style>