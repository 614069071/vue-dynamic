<template>
	<div class="sidebar">
		<el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
			<template v-for="item in mapMenu">
				<template v-if="item.children">
					<el-submenu :index="item.index" :key="item.index">
						<template slot="title">
							<i class="el-icon-menu"></i>
							<span slot="title">{{ item.name }}</span>
						</template>
						<template v-for="subItem in item.children">
							<el-submenu v-if="subItem.children" :index="subItem.index" :key="subItem.index">
								<template slot="title">{{ subItem.name }}</template>
								<el-menu-item v-for="(threeItem, i) in subItem.children" :key="i" :index="threeItem.index">{{ threeItem.name }}</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.name }}</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index">
						<i class="el-icon-menu"></i>
						<span slot="title">{{ item.name }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => [],
		},
		collapse: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {};
	},
	computed: {
		onRoutes() {
			return this.$route.path.replace('/', '');
		},
		mapMenu() {
			function deal(arr, pre = '') {
				arr.forEach((e, i) => {
					e.index = pre ? `${pre}-${i}` : `${i}`;
					if (e.children && e.children.length) {
						deal(e.children, e.index);
					}
				});
			}
			const list = this.list;
			deal(list);
			return list;
		},
	},
	created() {},
};
</script>

<style scoped>
.sidebar {
	overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
	width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
	min-width: 200px;
}
.sidebar > ul {
	height: 100%;
}
</style>
