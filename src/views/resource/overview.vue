<template>
	<div>
		<div class="resource-map">
			<Heat>全国销售热力图分布</Heat>
		</div>

		<div class="resource-item resource-sales">
			<Sales>2021年产品销量图</Sales>
		</div>

		<div class="resource-item resource-scale">
			<Scale>销量占比</Scale>
		</div>

		<div class=" resource-item resource-online">
			<Online>设备在线率</Online>
		</div>
		<!-- 
		<div class="resource-item resource-active">
			<Lively>全国用户活跃度</Lively>
		</div> 
    -->
	</div>
</template>

<script>
import Heat from './components/heat';
import Sales from './components/sales';
import Scale from './components/scale';
import Lively from './components/lively';
import Online from './components/online';

export default {
	components: { Heat, Sales, Scale, Lively, Online },
	data() {
		return {};
	},
	mounted() {},
	methods: {},
};
</script>

<style scoped>
.resource-item {
	width: 500px;
	height: 500px;
}

.resource-map {
	width: 700px;
}
</style>