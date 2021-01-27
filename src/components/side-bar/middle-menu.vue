<template>
	<div class="middle-menu">
		<el-submenu v-if='model.children && model.children.length' :index="model.meta.index">
			<template slot='title'>
				<i v-if="model.icon" :class="model.icon"></i>
				<span>{{model.title}}</span>
			</template>

			<template v-for="(item,index) in model.children">
				<middle-menu :model='item' :key="index" />
			</template>
		</el-submenu>

		<el-menu-item v-else :index="model.meta.index" @click="checkedMenu(model)">
			<i v-if="model.icon" :class="model.icon"></i>
			<span slot="title">{{model.title}}</span>
		</el-menu-item>
	</div>
</template>

<script>
export default {
	name: 'middle-menu',
	props: { model: { type: Object, required: true } },
	methods: {
		checkedMenu(data) {
			data.url && this.$router.push(data.url);
			this.$store.commit('UPDATE_CACHE_ROUTER', data);
			this.$store.commit('UPDATE_DEFAULT_ACTIVE', data.meta.index);
		},
	},
};
</script>