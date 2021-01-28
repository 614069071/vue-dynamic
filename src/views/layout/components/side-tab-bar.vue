<template>
	<transition-group class="layout-tabs" name="bar" tag="ul">
		<li class="layout-tab-item" :class="{active:activeTab === item.meta.index}" v-for="(item,index) in model" :key="item.meta.index" @click="link(item)">
			{{item.title}}<span class="tab-close" @click.stop="deleteTab(index)"><i class="el-icon-close"></i></span>
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
	data() {
		return {
			editableTabsValue: '',
		};
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

<style lang="scss" scoped>
.layout-tabs {
	display: flex;
	overflow: hidden;
}

.layout-tab-item {
	padding: 0 20px;
	height: 40px;
	box-sizing: border-box;
	line-height: 40px;
	display: flex;
	align-items: center;
	list-style: none;
	font-size: 14px;
	font-weight: 500;
	color: #333;
	position: relative;
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	.tab-close {
		display: inline-block;
		width: 0;
		height: 14px;
		line-height: 13px;
		text-align: right;
		overflow: hidden;
		border-radius: 50%;
		margin-left: 5px;
		font-size: 12px;
		line-height: 14px;
		text-align: center;
		transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	.tab-close:hover {
		background-color: #c0c4cc;
	}
}

.layout-tab-item:hover {
	.tab-close {
		width: 14px;
	}
}

.layout-tab-item.active {
	background-color: #f8f9fb;
	border-bottom: 2px solid #333;
	.tab-close {
		width: 14px;
	}
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