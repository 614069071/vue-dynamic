<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" :default-openeds="defaultOpenedsArray" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened :collapse="collapse">
			<middle-menu v-for='item in mapMenuTree' :model='item' :key='item.meta.index' />
		</el-menu>
	</div>
</template>

<script>
import MiddleMenu from './middle-menu';
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
		onRoutes() {
			//默认选中菜单
			return this.$store.state.routerDefaultActive;
		},
		defaultOpenedsArray() {
			return this.$store.state.defaultOpenedsArray;
		},
		mapMenuTree() {
			const items = [
				{
					title: '首页综合数据',
					icon: 'el-icon-menu',
					url: '/resource',
					meta: {},
				},
				{
					title: '订单数量查询',
					icon: 'el-icon-menu',
					url: '/order',
					meta: {},
				},
				{
					title: '产品数量查询',
					icon: 'el-icon-menu',
					url: '/product',
					meta: {},
				},
				{
					title: '广告编辑',
					icon: 'el-icon-menu',
					url: '/banner',
					meta: {},
				},
				{
					title: '日志查询',
					icon: 'el-icon-menu',
					url: '/log',
					meta: {},
				},
				{
					title: '账号管理',
					icon: 'el-icon-menu',
					url: '/system',
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
		width: 220px;
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

