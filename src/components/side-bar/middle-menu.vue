<template>
	<div class="middle-menu">
		<el-submenu v-if='model.children && model.children.length' :index="`${model.path}-${index}`">
			<template slot='title'>
				<i v-if="model.icon" :class="model.icon"></i>
				<span>{{model.title}}</span>
			</template>

			<template v-for="(item,index) in model.children">
				<middle-menu :model='item' :key="index" :index="index" />
			</template>
		</el-submenu>

		<el-menu-item v-else :index="model.path" @click="$router.push(model.path)">
			<i v-if="model.icon" :class="model.icon"></i>
			<span slot="title">{{model.title}}</span>
		</el-menu-item>
	</div>
</template>

<script>
export default {
	name: 'middle-menu',
	props: {
		model: { type: Object, required: true },
		index: { type: [Number, String], default: 0 },
	},
};
</script>

<style>
.el-menu-item.is-active {
	background-color: var(--default-color) !important;
}
</style>