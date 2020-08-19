<template>
	<div class="layout-wrap">
		<header class="layout-header">
			Header
		</header>
		<section class="layout-content">
			<div class="layout-content-aside  clear-scroll-bar">
				<!-- <MenuTree :collapse="toggle" /> -->
				<Menu :list="list" :collapse="toggle"></Menu>
			</div>

			<div class="layout-content-main">
				<div class="breadcrumb-wrap">
					<div class="menu-toggle-btn" :class="{active:toggle}" @click="toggle = !toggle">
						<span class="menu-icon"></span>
					</div>
					<el-breadcrumb separator="/">
						<transition-group name="breadcrumb">
							<!-- 防止面包屑导航出现 首页/首页， v-if="route.name!='home'" -->
							<template v-for="(route,i) in breadcrumbRouter">
								<el-breadcrumb-item :key="route.name" v-if="route.name!='home' && route.meta.name!='首页'" :class="{'is-last-link':i==breadcrumbRouter.length-1}">
									{{route.meta.name}}
								</el-breadcrumb-item>
							</template>
						</transition-group>
					</el-breadcrumb>
				</div>
				<router-view></router-view>
			</div>
		</section>
	</div>
</template>

<script>
import MenuTree from '@/views/MenuTree/Menu';
import Menu from '@/components/Menu';
import { mapState } from 'vuex';
export default {
	components: { MenuTree, Menu },
	data() {
		return {
			list: [],
			toggle: false,
		};
	},
	created() {
		const index = sessionStorage.getItem('defaultActive') || '';
		this.defaultActive = index;

		const cacheMenuTree = localStorage.getItem('menuTree') || '[]';

		const menuTree = JSON.parse(cacheMenuTree);
		this.list = menuTree;
		// console.log(menuTree, 'menuTree');
	},
	computed: {
		...mapState(['breadcrumbRouter']),
	},
};
</script>


<style lang="scss" scoped>
.layout-wrap {
	height: 100vh;
	display: flex;
	flex-direction: column;
}

.layout-header {
	height: 50px;
	display: flex;
	align-items: center;
	background-color: #ccc;
	margin-bottom: 6px;
}

.layout-content {
	flex: 1;
	background-color: #fff;
	display: flex;
	overflow: hidden;
	.layout-content-aside {
		height: 100%;
		margin-right: 6px;
		overflow: auto;
	}
	.layout-content-main {
		flex: 1;
		background-color: #ccc;
		text-align: center;
		overflow: auto;
		box-sizing: border-box;
		padding-top: 30px;
		position: relative;
	}
}

.breadcrumb-wrap {
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
	background-color: #eee;
	position: absolute;
	left: 0;
	top: 0;
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
		transform: 0.2s;
		margin-right: 10px;
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
		cursor: pointer;
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
</style>
