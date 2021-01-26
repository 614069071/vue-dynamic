<template>
	<transition-group class="side-tab-bar-wrap" name="bar" tag="ul">
		<li class="side-tab-bar-item side-btn" :class="{active:activeTab === item.meta.index}" v-for="(item,index) in model" :key="item.meta.index" @click="link(item)">
			{{item.title}}
			<span class="delete-btn el-icon-close" @click.stop.self="deleteTab(index)"></span>
		</li>
	</transition-group>
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
	mounted() {
		console.log(this.model, 'this.model');
	},
	methods: {
		link(data) {
			data.url && this.$router.push(data.url);
			this.$store.commit('UPDATE_CACHE_ROUTER', data);
			this.$store.commit('UPDATE_DEFAULT_ACTIVE', data.meta.index);
		},
		deleteTab(i) {
			this.$store.commit('DELETE_CACHE_ROUTER', i);
		},
	},
};
</script>

<style scoped>
.side-tab-bar-wrap {
	overflow: hidden;
}

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

<style>
.bar-enter,
.bar-leave-to {
	opacity: 0;
	transform: translate3d(-30px, 30px, 0);
}

.bar-enter-active {
	transition: all 0.5s;
}

.bar-leave-active {
	position: absolute;
	transition: all 1s;
}
</style>