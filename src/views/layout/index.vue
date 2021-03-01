<template>
	<div class="layout-wrapper">
		<div class="layout-aside">
			<div class="aside-header-wrapper" :class="{collapse:barCollapse}">
				<router-link tag="div" to="/" class="logo-wrapper">
					<img src="../../assets/images/logo.png" alt="">
				</router-link>

				<div class="aside-content-wrapper clear-scroll-bar">
					<side-bar :collapse="barCollapse"></side-bar>
				</div>
			</div>

			<div class="aside-footer-wrapper">
				<div class="control-menu-collapse" @click="barCollapse = !barCollapse">
					<i class="f-20" :class="barCollapse ? 'el-icon-s-unfold':'el-icon-s-fold'"></i>
				</div>
			</div>
		</div>

		<div class="layout-main">
			<div class="layout-header">
				<div class="layout-navigate">
					<tab-card :model="breadcrumbRouter"></tab-card>
				</div>

				<el-popover placement="bottom-end" width="271">
					<div class="header-info" slot="reference">
						<el-avatar :size="24">
							<img src="../../assets/images/logo.png" alt="">
						</el-avatar>

						<div class="info-name">用户名</div>
					</div>

					<div class="user-info-popur-wrapper">
						<div class="popur-info-wrapper">
							<el-avatar :size="64">
								<img src="../../assets/images/logo.png" alt="">
							</el-avatar>

							<div class="popur-info-main">
								<div class="popur-info-name f-16">蜘蛛子</div>
								<div class="popur-info-manage-name">admin</div>
							</div>
						</div>

						<div class="popur-info-item">
							<span>角色</span>
							<span>产品经理</span>
						</div>

						<div class="popur-info-item">
							<span>账号状态</span>
							<span>锁定/已认证</span>
						</div>

						<div class="popur-info-item">
							<span>绑定邮箱</span>
							<span>yang.xiang@cdatatec.com</span>
						</div>

						<el-button class="exit-btn" @click="$router.push('/login')" type="primary">退出登录</el-button>
					</div>
				</el-popover>
			</div>

			<main class="layout-content scrollbar">
				<transition name="layout" mode="out-in">
					<router-view></router-view>
				</transition>
			</main>
		</div>
	</div>
</template>

<script>
import store from '@store';
import { mapState, mapMutations } from 'vuex';
import SideBar from '@components/side-bar';
import TabCard from './components/tab-card.vue';
import NProgress from 'nprogress';

export default {
	name: 'layout',
	components: { SideBar, TabCard },
	data() {
		return {
			barCollapse: false,
		};
	},
	beforeRouteEnter(to, form, next) {
		// console.log(to, form, '111');// 判断是否存在token，没有则跳至登录
		if (store.state.__accessToken__) {
			next();
		} else {
			NProgress.done();
			next({ path: '/login', replace: true });
		}
	},
	watch: {
		$route(v) {
			const list = this.breadcrumbRouter;
			const item = list.find((e) => e.path === v.path);
			item && this.UPDATE_DEFAULT_ACTIVE(item.path);
		},
	},
	created() {},
	computed: {
		...mapState(['breadcrumbRouter']),
	},
	methods: {
		...mapMutations(['UPDATE_DEFAULT_ACTIVE']),
	},
};
</script>


<style lang="scss" scoped>
.layout-wrapper {
	height: 100vh;
	display: flex;

	.layout-header {
		height: 48px;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		padding: 0 10px;
		background-color: #fff;
	}

	.layout-aside {
		min-width: 0;
		background-color: #001529;
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: space-between;
	}

	.layout-main {
		flex: 1;
		overflow: hidden;
		background-color: #f5f9fd;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.layout-navigate {
		display: flex;
		flex: 1;
		margin-right: 20px;

		// 超出时显示滚动条
		overflow-x: auto;
		overflow-y: hidden;

		&::-webkit-scrollbar {
			height: 4px;
		}

		/*定义滚动条轨道 内阴影+圆角*/
		&::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
			box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
			border-radius: 4px;
			background-color: #fff;
		}

		/*定义滑块 内阴影+圆角*/
		&::-webkit-scrollbar-thumb {
			border-radius: 4px;
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
			box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
			background-color: #999;
		}
	}

	.layout-content {
		flex: 1;
		overflow-x: hidden;
		overflow-y: scroll;
		background-color: #f5f9fd;
	}
}

.aside-header-wrapper {
	display: flex;
	flex: 1;
	min-height: 200px;
	flex-direction: column;

	.logo-wrapper {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		overflow: hidden;
		margin: 30px auto;
		cursor: pointer;
	}

	.aside-content-wrapper {
		flex: 1;
	}
}

.header-info {
	height: 48px;
	display: flex;
	align-items: center;
	cursor: pointer;

	.info-name {
		color: var(--font-color);
		margin-left: 8px;
	}
}

.control-menu-collapse {
	height: 40px;
	display: flex;
	align-items: center;
	padding-left: 23px;
	cursor: pointer;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	i {
		color: rgba(255, 255, 255, 0.64);
	}
}

.user-info-popur-wrapper {
	.popur-info-wrapper {
		display: flex;
		align-items: center;
		padding-bottom: 12px;
		border-bottom: 1px solid #e4e7ed;
		margin-bottom: 6px;
	}

	.popur-info-main {
		margin-left: 10px;

		.opur-info-name {
			color: var(font-color-3);
		}

		.opur-info-manage-name {
			color: var(font-color-a6);
		}
	}

	.popur-info-item {
		height: 36px;
		line-height: 36px;
		display: flex;
		justify-content: space-between;

		span:first-child {
			color: var(--font-color-1);
		}

		span:last-child {
			color: var(--font-color);
		}
	}

	.exit-btn {
		width: 100%;
		margin-top: 14px;
	}
}
</style>

<style>
.layout-enter,
.layout-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.layout-enter-active {
	transition: all 0.2s;
}
.layout-leave-active {
	position: absolute;
	transition: all 0.3s;
}
</style>
