<template>
	<!-- 销量占比 -->
	<div ref="resource_sales_scale" class="resource-item resource-scale-map"></div>
</template>

<script>
import * as Echarts from 'echarts';

// 销量占比
var salesScaleOption = {
	title: {
		text: '销量占比',
		left: '0',
		textStyle: {
			color: '#436EEE',
			fontSize: 15,
		},
	},
	tooltip: {
		trigger: 'item',
	},
	legend: {
		// orient: 'vertical',
		right: '0',
	},
	series: [
		{
			name: '销量占比',
			type: 'pie',
			radius: ['40%', '70%'],
			data: [
				{ value: 1, name: 'H1' },
				{ value: 2, name: 'L1' },
				{ value: 3, name: 'H2' },
				{ value: 2, name: 'S1' },
				{ value: 1, name: '其他' },
			],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)',
				},
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

<style scoped>
.resource-map {
	width: 800px;
	height: 500px;
}

.resource-item {
	width: 500px;
	height: 600px;
	background-color: #fff;
	margin-top: 20px;
}
</style>