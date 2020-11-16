<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened>
			<template v-for="item in items">
				<template v-if="item.children">
					<el-submenu :index="item.meta.index" :key="item.meta.index">
						<template slot="title">
							<i :class="item.icon || 'el-icon-menu'"></i>
							<span slot="title">{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.children">
							<el-submenu v-if="subItem.children" :index="subItem.meta.index" :key="subItem.meta.index">
								<template slot="title">{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem, i) in subItem.children" :key="i" :index="threeItem.meta.index">{{ threeItem.title }}</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.meta.index" :key="subItem.meta.index">{{ subItem.title }}</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.meta.index" :key="item.meta.index">
						<i :class="item.icon || 'el-icon-menu'"></i>
						<span slot="title">{{ item.title }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'side-bar',
	props: {
		collapse: { type: Boolean },
	},
	data() {
		return {
			//模拟菜单
			items: [
				{
					icon: '',
					title: '系统首页',
					meta: {},
				},
				{
					icon: '',
					title: '错误处理',
					meta: {},
					children: [
						{
							title: '权限测试',
							meta: {},
						},
						{
							title: '404页面',
							meta: {},
						},
					],
				},
				{
					icon: '',
					title: '表单相关',
					meta: {},
					children: [
						{
							title: '基本表单',
							meta: {},
						},
						{
							title: '三级菜单',
							meta: {},
							children: [
								{
									title: '富文本编辑器',
									icon: 'el-icon-menu',
									meta: {},
								},
								{
									title: 'markdown编辑器',
									meta: {},
								},
							],
						},
					],
				},
			],
		};
	},
	computed: {
		onRoutes() {
			//默认选中菜单
			return '1-0';
		},
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
	},
};
</script>

<style scoped>
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
}

.sidebar > ul {
	height: 100%;
}
</style>
