<template>
	<div class="layout-wrapper">
		<div class="layout-aside clear-scroll-bar">
			<div class="logo-wrapper">
				<img src="../../assets/images/logo.png" alt="">
			</div>

			<side-bar :collapse="barCollapse"></side-bar>
		</div>

		<div class="layout-main">
			<div class="layout-header">admin</div>

			<div class="layout-navigate">
				<div class="control-menu-collapse" @click="barCollapse = !barCollapse">
					<i class="el-icon-s-unfold"></i>
				</div>

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
		background-color: pink;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
	}

	.layout-aside {
		min-width: 0;
		background-color: rgb(50, 65, 87);
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
	}

	.layout-content {
		flex: 1;
		overflow-x: hidden;
		overflow-y: scroll;
	}
}

.logo-wrapper {
	height: 56px;
	width: 56px;
	border-radius: 50%;
	margin: 20px auto;
	overflow: hidden;
}

.control-menu-collapse {
	margin-right: 10px;
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
