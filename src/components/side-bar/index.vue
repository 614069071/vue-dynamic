<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" :default-openeds="defaultOpenedsArray" background-color="#001529" text-color="rgba(255, 255, 255, 0.65)" active-text-color="#fff" unique-opened :collapse="collapse">
			<middle-menu v-for='item in mapMenuTree' :model='item' :key='item.meta.index' />
		</el-menu>
	</div>
</template>

<script>
import MiddleMenu from './middle-menu';
import { mapState } from 'vuex';
// import { dynamicRouter } from '@router';

export default {
	name: 'side-bar',
	props: {
		collapse: { type: Boolean },
	},
	components: { MiddleMenu },
	data() {
		return {};
	},
	computed: {
		...mapState({
			onRoutes: 'routerDefaultActive',
			defaultOpenedsArray: 'defaultOpenedsArray',
		}),
		mapMenuTree() {
			const items = [
				{
					title: '综合数据',
					icon: 'if if-edit-square',
					path: '/',
					meta: {},
				},
				{
					title: '订单查询',
					icon: 'if if-appstore',
					path: '/order',
					meta: {},
				},
				{
					title: '产品查询',
					icon: 'if if-linechart',
					path: '/product',
					meta: {},
				},
				{
					title: '广告编辑',
					icon: 'if if-edit-square',
					path: '/banner',
					meta: {},
				},
				{
					title: '日志查询',
					icon: 'if if-filesearch',
					path: '/log',
					meta: {},
				},
				{
					title: '账号管理',
					icon: 'if if-user',
					path: '/system',
					meta: {},
				},
			];

			function deal(arr, pre) {
				arr.forEach((e, i) => {
					if (!e.meta) e.meta = {};
					e.meta.index = pre ? `${pre}-${i}` : `${i}`;
					if (e.children && e.children.length) {
						deal(e.children, e.meta.index);
					}
				});
			}

			deal(items);
			return items;
		},
	},
};
</script>

<style lang="scss">
.sidebar {
	overflow-x: hidden;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 0;
	}

	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 160px;
		// min-width: 210px; //该写法，内容会自动撑开，但收起动画会不流畅
	}

	.el-menu {
		border-right: 0;
	}

	ul {
		height: 100%;
	}

	.el-menu--collapse > .middle-menu > .el-submenu > .el-submenu__title {
		span {
			height: 0;
			width: 0;
			overflow: hidden;
			visibility: hidden;
			display: inline-block;
		}
		.el-submenu__icon-arrow {
			display: none;
		}
	}
}
</style>

