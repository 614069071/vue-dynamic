<template>
	<div class="login-view-wrap">
		<div class="login-wrap">
			<el-form ref="form" :model="loginInfo" label-width="50px">
				<el-form-item label="账号">
					<el-input v-model="loginInfo.username"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="loginInfo.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="login">Login</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	data() {
		return {
			loginInfo: {
				username: '',
				password: '',
			},
		};
	},
	created() {},
	methods: {
		...mapMutations(['setPermission']),
		login() {
			// 模拟登录
			setTimeout(() => {
				this.setPermission(true);
				this.$router.push('/');
			}, 2000);
		},
	},
};
</script>

<style scoped>
.login-wrap {
	width: 300px;
}
</style>