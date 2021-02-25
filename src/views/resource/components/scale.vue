<template>
	<!-- 销量占比 -->
	<div ref="resource_sales_scale" class="resource-item resource-scale-map"></div>
</template>

<script>
import * as Echarts from 'echarts';

// 销量占比
var salesScaleOption = {
	tooltip: {
		trigger: 'item',
	},
	color: ['#5B8FF9', '#4ECB73', '#FBD437', '#F2637B', '#975FE5'],
	legend: {
		orient: 'vertical',
		left: '70%',
		top: 60,
	},
	series: [
		{
			name: '销量占比',
			type: 'pie',
			radius: ['60%', '80%'],
			center: ['40%', '50%'],
			avoidLabelOverlap: false,
			data: [
				{ value: 1, name: 'H1' },
				{ value: 2, name: 'L1' },
				{ value: 3, name: 'H2' },
				{ value: 2, name: 'S1' },
				{ value: 1, name: '其他' },
			],
			label: {
				show: false,
			},
		},
	],
};

export default {
	components: {},
	data() {
		return {};
	},
	mounted() {
		this.initSalesScaleEcharts();
	},
	methods: {
		setEchart(el, options) {
			const echarts = Echarts.init(el);
			echarts.setOption(options);
		},
		initSalesScaleEcharts() {
			const main = this.$refs.resource_sales_scale;
			this.setEchart(main, salesScaleOption);
		},
	},
};
</script>