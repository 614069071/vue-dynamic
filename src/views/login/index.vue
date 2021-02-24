<template>
	<div class="login-view-wrapper">
		<div class="login-inner-wrapper">
			<div class="login-banner-item-wrapper">
				<img src="../../assets/images/banner@2x.png" alt="">
			</div>

			<div class="login-banner-item-wrapper login-form-wrapper">
				<div class="login-form-logo-wrapper">
					<div class="login-logo-img-wrapper">
						<img src="../../assets/images/logo2@2x.png" alt="">
					</div>
					<div class="login-logo-welcome">欢迎登录NSS运营系统数据平台</div>
				</div>

				<el-form ref="login_form" :model="loginInfo" :rules="rules">
					<el-form-item prop="username">
						<el-input class="login-form-item" v-model="loginInfo.username"></el-input>
					</el-form-item>
					<el-form-item prop="password" class="login-form-password">
						<el-input class="login-form-item" v-model="loginInfo.password"></el-input>
					</el-form-item>
				</el-form>

				<div class="login-form-forgot-password">
					<el-popover placement="bottom-start" width="244" trigger="click">
						<div class="login-forgot-mes">若忘记密码，请联系超级管理员</div>
						<span class="login-forgot-btn" slot="reference">忘记密码</span>
					</el-popover>
				</div>

				<el-button class="login-form-item" type="primary" @click="login">登录</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@store';
import { mapMutations } from 'vuex';

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
	beforeRouteEnter(to, from, next) {
		store.commit('UPDATE_TOKEN', '');
		// storages.set('CACHE_ROUTERS', []);
		next();
	},
	created() {},
	methods: {
		...mapMutations(['UPDATE_TOKEN']),
		login() {
			// 模拟登录
			const login_form = this.$refs.login_form;

			login_form.validate((valid) => {
				if (valid) {
					this.UPDATE_TOKEN('123456');
					this.$router.push('/');
				} else {
					return false;
				}
			});
		},
	},
};
</script>

<style scoped lang="scss">
.login-view-wrapper {
	width: 100%;
	height: 100vh;
	min-height: 600px;
	position: relative;
	background-color: #f5f9fd;
}

.login-inner-wrapper {
	display: flex;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.login-banner-item-wrapper {
	width: 400px;
	height: 500px;
	box-sizing: border-box;
}

.login-form-wrapper {
	padding-left: 80px;
	background-color: #fff;
	border-radius: 0px 5px 5px 0px;
}

.login-form-logo-wrapper {
	padding-top: 108px;
	padding-bottom: 24px;
	.login-logo-img-wrapper {
		width: 101px;
		height: 34px;
	}

	.login-logo-welcome {
		height: 20px;
		line-height: 20px;
		margin-top: 10px;
		color: var(--font-color);
	}
}

.login-form-forgot-password {
	text-align: right;
	padding-right: 80px;
	padding-bottom: 24px;
}

.login-forgot-mes {
	height: 36px;
	line-height: 36px;
	text-align: center;
}

.login-forgot-btn {
	color: var(--default-color);
	cursor: pointer;
}

.login-form-item {
	width: 240px;
}

.login-form-password {
	margin-bottom: 12px;
}
</style>