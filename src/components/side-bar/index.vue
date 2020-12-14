<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened :collapse="collapse">
			<middle-menu v-for='item in items' :model='item' :key='item.meta.index' />
		</el-menu>
	</div>
</template>

<script>
import MiddleMenu from './middle-menu';
export default {
	name: 'side-bar',
	props: {
		collapse: { type: Boolean }
	},
	components: { MiddleMenu },
	data() {
		return {
			//模拟菜单
			items: [
				{
					icon: '',
					title: '系统首页',
					icon: 'el-icon-menu',
					meta: {}
				},
				{
					icon: '',
					title: '错误处理',
					icon: 'el-icon-warning',
					meta: {},
					children: [
						{
							title: '权限测试',
							meta: {}
						},
						{
							title: '404页面',
							meta: {}
						}
					]
				},
				{
					icon: '',
					title: '表单相关',
					icon: 'el-icon-s-data',
					meta: {},
					children: [
						{
							title: '基本表单',
							meta: {}
						},
						{
							title: '三级菜单',
							meta: {},
							children: [
								{
									title: '富文本编辑器',
									meta: {}
								},
								{
									title: 'markdown编辑器',
									meta: {},
									children: [
										{
											title: '权限测试',
											meta: {}
										},
										{
											title: '404页面',
											meta: {}
										}
									]
								}
							]
						}
					]
				}
			]
		};
	},
	computed: {
		onRoutes() {
			//默认选中菜单
			return '1-0';
		}
	},
	created() {
		function deal(arr, pre) {
			arr.forEach((e, i) => {
				e.meta.index = pre ? `${pre}-${i}` : `${i}`;
				if (e.children && e.children.length) {
					deal(e.children, e.meta.index);
				}
			});
		}

		deal(this.items);
	}
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
		width: 210px;
		// min-width: 210px; //该写法，内容会自动撑开，但收起动画会不流畅
	}

	ul {
		height: 100%;
	}

	// 该样式用于解决菜单折叠时 内存溢出bug
	.el-menu--collapse > div > .el-submenu > .el-submenu__title {
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

