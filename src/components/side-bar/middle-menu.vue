<template>
	<component :is='(model.children && model.children.length) ? "el-submenu":"el-menu-item"' :index="model.meta.index">
		<template v-if='model.children && model.children.length'>
			<template slot='title'>
				<i :class="model.icon || 'el-icon-menu'"></i>
				<span slot='title'>{{model.title}}</span>
			</template>

			<template v-for="item in model.children">
				<middle-menu :model='item' :key='item.meta.index'></middle-menu>
			</template>
		</template>

		<template v-else>
			<i :class="model.icon || 'el-icon-menu'"> </i>
			<span slot='title'> {{model.title}}</span>
		</template>
	</component>
</template>
<script>
export default {
	name: 'middle-menu',
	props: {
		model: {
			type: Object,
			required: true
		}
	}
};
</script>