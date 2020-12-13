

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
		collapse: { type: Boolean } //若无必要，不要使用折叠，bug => 折叠时，hover菜单会造成内存溢出
	},
	components: { MiddleMenu },
	data() {
		return {
			//模拟菜单
			items: [
				{
					icon: '',
					title: '系统首页',
					meta: {}
				},
				{
					icon: '',
					title: '错误处理',
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
									meta: {}
									// children: [
									// 	{
									// 		title: '权限测试',
									// 		meta: {}
									// 	},
									// 	{
									// 		title: '404页面',
									// 		meta: {}
									// 	}
									// ]
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
}
.sidebar::-webkit-scrollbar {
	width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
	width: 230px;
	// min-width: 230px;该写法，内容会自动撑开，但收起动画会不流畅
}

.sidebar ul {
	height: 100%;
}
</style>

