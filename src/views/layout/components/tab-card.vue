<template>
	<transition-group class="layout-tabs" name="bar" tag="ul">
		<li class="layout-tab-item" :class="{active:$store.state.routerDefaultActive === item.path}" v-for="(item,index) in model" :key="item.path" @click="$router.push(data.path)">
			{{item.title}}<span class="tab-close" @click.stop="$store.commit('DELETE_CACHE_ROUTER', index)"><i class="el-icon-close"></i></span>
		</li>
	</transition-group>
</template>

<script>
export default {
	name: 'tab-card',
	props: ['model'],
};
</script>

<style lang="scss" scoped>
.layout-tabs {
	display: flex;
	flex-wrap: nowrap;
}

.layout-tab-item {
	padding: 0 24px;
	height: 36px;
	box-sizing: border-box;
	line-height: 36px;
	display: flex;
	align-items: center;
	list-style: none;
	font-size: 15px;
	font-weight: 500;
	color: var(--default-color);
	background-color: var(--second-color);
	position: relative;
	cursor: pointer;
	white-space: nowrap;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	border-radius: 4px 4px 0px 0px;
	min-width: 104px;

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
		background-color: var(--second-color);
	}
}

.layout-tab-item + .layout-tab-item {
	margin-left: 2px;
}

.layout-tab-item:hover {
	.tab-close {
		width: 14px;
	}
}

.layout-tab-item.active {
	background-color: var(--default-color);
	color: #fff;
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