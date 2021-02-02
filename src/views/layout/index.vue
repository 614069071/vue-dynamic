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
			<div class="layout-header">admin</div>

			<div class="layout-navigate">
				<side-tab-bar :model="breadcrumbRouter"></side-tab-bar>
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
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
	}

	.layout-aside {
		min-width: 0;
		background-color: #545c64;
	}

	.layout-main {
		flex: 1;
		overflow: hidden;
		background-color: #fff;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.layout-navigate {
		display: flex;
		border-top: 2px solid #f5f6f7;
		border-bottom: 2px solid #f5f6f7;
		margin-bottom: 20px;
	}

	.layout-content {
		flex: 1;
		overflow-x: hidden;
		overflow-y: scroll;
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
