<template>
	<div class="layout-wrap">
		<header class="layout-header">
			<h2 class="header-left">神州网络生产系统</h2>
			<div class="header-right">
				<!-- 角色及设置相关 -->
			</div>
		</header>

		<section class="layout-content">
			<side-bar class="layout-content-aside  clear-scroll-bar" :collapse="barCollapse"></side-bar>

			<div class="layout-content-main">
				<div class="breadcrumb-wrap">
					<div class="menu-toggle-btn" :class="{active:barCollapse}" @click="barCollapse = !barCollapse">
						<span class="menu-icon"></span>
					</div>
					<el-breadcrumb separator="/">
						<transition-group name="breadcrumb">
							<template v-for="(route,i) in breadcrumbRouter">
								<el-breadcrumb-item :key="route.name" v-if="route.name!='home' && route.meta.name!='首页'" :class="{'is-last-link':i==breadcrumbRouter.length-1}">
									{{route.name}}
								</el-breadcrumb-item>
							</template>
						</transition-group>
					</el-breadcrumb>
				</div>

				<main class="page-wrap-content scrollbar">
					<router-view></router-view>
				</main>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import SideBar from '@components/side-bar';

export default {
	components: { SideBar },
	data() {
		return {
			barCollapse: false,
		};
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
	height: 30px;
	display: flex;
	align-items: center;
	background-color: #eee;
	z-index: 10;
	&.el-breadcrumb {
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
		.is-last-link .is-link {
			font-weight: normal;
			color: #999 !important;
		}
	}

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
