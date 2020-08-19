<template>
	<div>
		<el-submenu v-if="data.children && data.children.length" :index="`${itemIndex}`">
			<template slot="title"><i v-if="icon" :class="icon"></i>{{data.meta.name}}</template>
			<menu-item v-for="(item,index) in data.children" :key="index" :itemIndex="`${itemIndex}-${index}`" :index="`${itemIndex}-${index}`" :data="item">
				<router-link :to="item.path">{{data.meta.name}}</router-link>
			</menu-item>
		</el-submenu>
		<el-menu-item :index="`${itemIndex}`" v-else>
			<router-link :to="data.path"><i v-if="icon && itemIndex.toString().split('-').length === 1" :class="icon"></i>{{data.meta.name}}</router-link>
		</el-menu-item>
	</div>
</template>

<script>
export default {
	name: 'menu-item',
	props: ['data', 'itemIndex', 'icon'],
};
</script>

<style scoped>
a {
	display: block;
	width: 100%;
	height: 100%;
}
</style>