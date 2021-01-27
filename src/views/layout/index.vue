<template>
	<div class="layout-wrap">
		<header class="layout-header">
			<h2 class="header-left">H2管理系统</h2>
			<div class="header-right">
				<!-- 角色及设置相关 -->
				你好 admin
			</div>
		</header>

		<section class="layout-content">
			<div class="layout-content-aside">
				<side-bar :collapse="barCollapse"></side-bar>
			</div>

			<div class="layout-content-main">
				<div class="breadcrumb-wrap">
					<div class="menu-toggle-btn" :class="{active:barCollapse}" @click="barCollapse = !barCollapse">
						<span class="menu-icon"></span>
					</div>
					<!-- <el-breadcrumb separator="/">
						<transition-group name="breadcrumb">
							<template v-for="(route,i) in breadcrumbRouter">
								<el-breadcrumb-item :key="i" v-if="route.name!='home' && route.meta.name!='首页'" :class="{'is-last-link':i==breadcrumbRouter.length-1}">
									<router-link :to="route.path">{{route.meta.name}}</router-link>
								</el-breadcrumb-item>
							</template>
						</transition-group>
					</el-breadcrumb> -->

					<side-tab-bar :model="breadcrumbRouter"></side-tab-bar>
				</div>

				<main class="page-wrap-content scrollbar">
					<transition name="main" mode="out-in">
						<router-view></router-view>
					</transition>
				</main>
			</div>
		</section>
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
$mr: 6px;
.layout-wrap {
	height: 100vh;
	display: flex;
	flex-direction: column;
}

.layout-header {
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #eee;
	margin-bottom: $mr;
	padding: 0 20px;
}
.header-left {
	font-size: 18px;
	font-weight: bold;
}

.layout-content {
	flex: 1;
	background-color: #fff;
	display: flex;
	overflow: hidden;
	.layout-content-aside {
		margin-right: $mr;
	}
	.layout-content-main {
		flex: 1;
		background-color: #ccc;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
}

.breadcrumb-wrap {
	width: 100%;
	// height: 30px;
	display: flex;
	align-items: center;
	background-color: #eee;
	z-index: 10;
	// &.el-breadcrumb {
	// display: inline-block;
	// vertical-align: middle;
	// font-size: 14px;
	// margin-left: 5px;
	// .el-breadcrumb__inner {
	// 	&.is-link {
	// 		display: inline-block;
	// 		font-weight: normal;
	// 		color: #424040 !important;
	// 	}
	// }
	// .is-last-link .is-link {
	// 	font-weight: normal;
	// 	color: #999 !important;
	// }
	// }

	.menu-toggle-btn {
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.25s;
		margin-right: 10px;
		cursor: pointer;
		&.active {
			transform: rotate(90deg);
		}
	}

	.menu-icon {
		$h: 7px;
		$c: #666;

		width: 20px;
		height: 3px;
		background-color: $c;
		position: relative;
		display: block;

		&::after,
		&::before {
			content: '';
			display: block;
			width: 20px;
			height: 3px;
			background-color: $c;
			position: absolute;
			left: 0;
		}

		&::after {
			top: $h;
		}

		&::before {
			top: -$h;
		}
	}
}

.page-wrap-content {
	flex: 1;
	overflow-x: hidden;
}
</style>

<style>
.main-enter,
.main-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.main-enter-active {
	transition: all 0.2s;
}
.main-leave-active {
	position: absolute;
	transition: all 0.3s;
}
</style>
