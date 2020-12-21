<template>
	<!-- 添加div元素，解决后期菜单 hover时内存溢出bug -->
	<div class="middle-menu">
		<el-submenu v-if='model.children && model.children.length' :index="model.url || model.meta.index">
			<template slot='title'>
				<i v-if="model.icon" :class="model.icon"></i>
				<span slot='title'>{{model.title}}</span>
			</template>

			<template v-for="(item,index) in model.children">
				<middle-menu :model='item' :key="index" />
			</template>
		</el-submenu>

		<el-menu-item v-else :index="model.url || model.meta.index" @click="checkedMenu(model)">
			<template slot="title">
				<i v-if="model.icon" :class="model.icon"></i>
				<span>{{model.title}}</span>
			</template>
		</el-menu-item>
	</div>
</template>

<script>
export default {
	name: 'middle-menu',
	props: { model: { type: Object, required: true } },
	methods: {
		checkedMenu(data) {
			console.log(data);
			data.url && this.$router.push(data.url);
			this.$store.commit('setBreadcrumbRouter', data);
			this.$store.commit('setRouterDefaultActive', data);
		},
	},
};
</script>