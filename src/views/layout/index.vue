<template>
	<div class="layout-wrapper">
		<div class="layout-aside">
			<div class="aside-header-wrapper" :class="{collapse:barCollapse}">
				<div class="logo-wrapper">
					<img src="../../assets/images/logo.png" alt="">
				</div>

				<div class="aside-content-wrapper clear-scroll-bar">
					<side-bar :collapse="barCollapse"></side-bar>
				</div>
			</div>

			<div class="aside-footer-wrapper">
				<div class="control-menu-collapse" @click="barCollapse = !barCollapse">
					<i :class="barCollapse ? 'el-icon-s-unfold':'el-icon-s-fold'"></i>
				</div>
			</div>
		</div>

		<div class="layout-main">
			<div class="layout-header">
				<div class="layout-navigate">
					<tab-card :model="breadcrumbRouter"></tab-card>
				</div>

				<div class="header-info">
					<div class="info-avator">
						<img src="../../assets/images/logo.png" alt="">
					</div>
					<div class="info-name">用户名</div>
				</div>
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
import { mapState } from 'vuex';
import SideBar from '@components/side-bar';
import TabCard from './components/tab-card.vue';

export default {
	components: { SideBar, TabCard },
	data() {
		return {
			barCollapse: false,
		};
	},
	beforeRouteEnter(to, form, next) {
		// console.log(to, form, '111');

		store.state.__accessToken__ ? next() : next('/login');
	},
	watch: {
		$route(v) {
			const list = this.breadcrumbRouter;
			const item = list.find((e) => e.url === v.path);
			item && this.$store.commit('UPDATE_DEFAULT_ACTIVE', item.meta.index);
		},
	},
	created() {},
	computed: {
		...mapState(['breadcrumbRouter']),
	},
	methods: {},
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
	}

	.aside-content-wrapper {
		flex: 1;
	}
}

.header-info {
	height: 48px;
	display: flex;
	align-items: center;

	.info-avator {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 8px;
	}

	.info-name {
		color: var(--font-color);
	}
}

.control-menu-collapse {
	height: 40px;
	display: flex;
	align-items: center;
	padding-left: 23px;
	cursor: pointer;
	border-top: 1px solid rgba(255, 255, 255, 0.65);
	i {
		font-size: 20px;
		color: rgba(255, 255, 255, 0.64);
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
