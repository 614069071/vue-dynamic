<template>
	<div class='menu-container'>
		<template v-for='v in menuList'>
			<el-submenu :index='v.name' v-if='v.children && v.children.length > 0' :key='v.name'>
				<template slot='title'>
					<i class='el-icon-menu'></i>
					<span>{{v.meta.name}}</span>
				</template>
				<MenuItem :menuList='v.children' />
			</el-submenu>
			<el-menu-item v-else :key='v.name' :index='v.name' @click='gotoRoute(v.name)'>
				<i class='el-icon-menu'></i>
				<span slot='title'>{{v.meta.name}}</span>
			</el-menu-item>
		</template>
	</div>
</template>

<script>
export default {
	name: 'MenuItem',
	props: {
		menuList: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		gotoRoute(name) {
			// this.$router.push({ name });
			console.log(name);
		},
	},
};
</script>
