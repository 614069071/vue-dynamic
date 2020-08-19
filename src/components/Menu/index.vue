<template>
	<el-menu class="sidebar" unique-opened :class="{navCollapsed:collapse}" :collapse="collapse" background-color="#304156" text-color="#eee" active-text-color="#4dbcff" :default-active="defaultActive">
		<MenuItem :menuList="list" />
	</el-menu>
</template>

<script>
import MenuItem from './MenuItem';

export default {
	props: {
		collapse: {
			type: Boolean,
			default: false,
		},
		list: {
			type: Array,
			default: () => [],
		},
		defaultActive: {
			type: String,
			default: '',
		},
	},
	components: { MenuItem },
};
</script>

<style lang="scss">
/* 侧边栏 */
.sidebar {
	width: 200px !important;
	height: 100%;
	background: #304156;
	transition: all 0.25s;
	z-index: 100;
	overflow-x: hidden;
	.iconfont {
		margin-right: 8px;
		color: #fff;
		font-size: 18px;
	}
	& > div.menu-container > li.el-menu-item,
	& > div.menu-container > li.el-submenu > .el-submenu__title {
		border-bottom: 1px solid rgba(238, 238, 238, 0.1);
	}
	.el-menu-item {
		background: #304156 !important;
	}
	/* 菜单hover时的背景 */
	.el-submenu__title:hover,
	.el-menu-item:hover {
		background: #223041 !important;
	}
}

.navCollapsed {
	.el-submenu {
		& > .el-submenu__title {
			& > span {
				display: none;
			}
			.el-submenu__icon-arrow {
				display: none;
			}
		}
	}
	&.sidebar {
		width: 64px !important;
		ul {
			display: none;
		}
		.iconfont + span {
			display: none;
		}
		.el-submenu__icon-arrow {
			display: none;
		}
	}
	.main-container {
		margin-left: 64px;
	}
	.aside__top {
		left: 64px !important;
	}
}
</style>
