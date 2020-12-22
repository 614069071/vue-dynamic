<template>
	<div class="side-tab-bar-wrap">
		<div class="side-tab-bar-item side-btn" :class="{active:activeTab === item.meta.index}" v-for="(item,index) in model" :key="item.url" @click="link(item)">
			{{item.title}}
			<span class="delete-btn el-icon-close" @click.stop.self="deleteTab(index)"></span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'side-tab-bar',
	props: ['model'],
	computed: {
		activeTab() {
			return this.$store.state.routerDefaultActive;
		},
	},
	methods: {
		link(data) {
			data.url && this.$router.push(data.url);
			this.$store.commit('setBreadcrumbRouter', data);
			this.$store.commit('setRouterDefaultActive', data.meta.index);
		},
		deleteTab(i) {
			this.$store.commit('delBreadcrumbRouter', i);
		},
	},
};
</script>

<style scoped>
.side-tab-bar-item {
	position: relative;
	padding: 0 20px;
	display: inline-block;
	background-color: #aaa;
}

.side-tab-bar-item.active {
	background-color: red;
}

.delete-btn {
	position: absolute;
	right: 0;
	top: 0;
}
</style>