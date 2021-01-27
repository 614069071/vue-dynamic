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
					title: '资源管理',
					icon: 'el-icon-wallet',
					meta: {},
					children: [
						{
							title: '资源管理',
							url: '/resource',
							meta: {},
						},
						{
							title: '资源分布',
							url: '/resource/map',
							meta: {},
						},
					],
				},
				{
					title: '系统管理',
					icon: 'el-icon-setting',
					meta: {},
					children: [
						{
							title: '修改密码',
							url: '/system',
							meta: {},
						},
						{
							title: '退出系统',
							meta: {},
						},
					],
				},
				{
					title: '生产系统',
					icon: 'el-icon-menu',
					meta: {},
					children: [
						{
							title: '订单管理',
							meta: {},
							url: '/product',
						},
					],
				},
				{
					title: '产品系统',
					icon: 'el-icon-cloudy',
					meta: {},
					children: [
						{
							title: '产品管理',
							meta: {},
						},
						{
							title: '软件更新',
							meta: {},
						},
					],
				},
				{
					title: '客户系统',
					icon: 'el-icon-user-solid',
					meta: {},
					children: [
						{
							title: '客户管理',
							meta: {},
						},
					],
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
	height: 100%;

	&::-webkit-scrollbar {
		width: 0;
	}

	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 220px;
		// min-width: 210px; //该写法，内容会自动撑开，但收起动画会不流畅
	}

	ul {
		height: 100%;
	}

	// 该样式用于解决菜单折叠时 内存溢出bug
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

