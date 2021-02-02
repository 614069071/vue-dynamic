<template>
	<div class="layout-wrapper">
		<div class="layout-aside clear-scroll-bar">
			<div class="aside-header-wrapper" :class="{collapse:barCollapse}">
				<div class="logo-wrapper">
					<img src="../../assets/images/logo.png" alt="">
				</div>
			</div>

			<div class="aside-content-wrapper">
				<side-bar :collapse="barCollapse"></side-bar>
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
					<side-tab-bar :model="breadcrumbRouter"></side-tab-bar>
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
import SideTabBar from './components/side-tab-bar.vue';

export default {
	components: { SideBar, SideTabBar },
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
	}

	.layout-content {
		flex: 1;
		overflow-x: hidden;
		overflow-y: scroll;
		padding: 10px;
		background-color: #f5f9fd;
	}
}

.aside-header-wrapper {
	display: flex;
	height: 100px;
	justify-content: center;
	align-items: center;
	.logo-wrapper {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		overflow: hidden;
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

.aside-content-wrapper {
}

.aside-footer-wrapper {
}

.control-menu-collapse {
	width: 64px;
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	i {
		font-size: 20px;
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
