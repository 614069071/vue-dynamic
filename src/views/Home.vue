<template>
	<div class="layout-wrap">
		<header class="header">
			Header
			<el-button @click="toggle = !toggle">toggle</el-button>
		</header>
		<section class="content">
			<div class="aside  clear-scroll-bar">
				<!-- <MenuTree :collapse="toggle" /> -->
				<Menu :list="list" :collapse="toggle"></Menu>
			</div>

			<div class="main">
				<el-breadcrumb class="breadcrumb-wrap" separator="/">
					<transition-group name="breadcrumb">
						<!-- 防止面包屑导航出现 首页/首页， v-if="route.name!='home'" -->
						<template v-for="(route,i) in breadcrumbRouter">
							<el-breadcrumb-item :key="route.name" v-if="route.name!='home' && route.meta.name!='首页'" :class="{'is-last-link':i==breadcrumbRouter.length-1}">
								{{route.meta.name}}
							</el-breadcrumb-item>
						</template>
					</transition-group>
				</el-breadcrumb>
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
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: #eee;
}

.header {
	height: 100px;
	line-height: 100px;
	background-color: #ccc;
	margin-bottom: 6px;
	text-align: center;
}

.content {
	flex: 1;
	background-color: #eee;
	display: flex;
	overflow: hidden;
	.aside {
		height: 100%;
		margin-right: 6px;
		overflow: auto;
	}
	.main {
		flex: 1;
		background-color: #ccc;
		text-align: center;
		overflow: auto;
	}
}

.breadcrumb-wrap {
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
	background-color: #aeaeae;
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
}
</style>
