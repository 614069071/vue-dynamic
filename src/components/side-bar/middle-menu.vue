<template>
	<!-- 添加div元素，解决后期菜单 hover时内存溢出bug -->
	<div>
		<component :is='(model.children && model.children.length) ? "el-submenu":"el-menu-item"' :index="model.url || model.meta.index">
			<template v-if='model.children && model.children.length'>
				<template slot='title'>
					<i v-if="model.icon" :class="model.icon"></i>
					<span slot='title'>{{model.title}}</span>
				</template>

				<template v-for="(item,index) in model.children">
					<middle-menu :model='item' :key="index" />
				</template>
			</template>

			<template v-else slot="title">
				<i v-if="model.icon" :class="model.icon"></i>
				<span>{{model.title}}</span>
			</template>
		</component>
	</div>
</template>
<script>
export default {
	name: 'middle-menu',
	props: {
		model: {
			type: Object,
			required: true,
		},
	},
};
</script>