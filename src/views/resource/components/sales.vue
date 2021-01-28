<template>
	<!-- 2021年产品销量图 -->
	<div ref="resource_sales" class="resource-sales-map"></div>
</template>

<script>
import * as Echarts from 'echarts';

//销量
var salesOption = {
	title: {
		text: '2021年产品销量图',
		left: '0px',
		textStyle: {
			color: '#436EEE',
			fontSize: 15,
		},
	},
	tooltip: {
		trigger: 'axis',
	},
	legend: {
		itemWidth: 15,
		itemHeight: 15,
		// orient: 'vertical',
		right: '0',
		data: ['H2', 'L1'],
	},
	xAxis: {
		data: [
			'1月',
			'2月',
			'3月',
			'4月',
			'5月',
			'6月',
			'7月',
			'8月',
			'9月',
			'10月',
			'11月',
			'12月',
		],
		splitLine: {
			show: false,
		},
	},
	yAxis: {
		splitLine: {
			show: false,
		},
	},
	series: [
		{
			name: 'H2',
			type: 'bar',
			stack: '使用情况',
			data: [10, 20, 36, 10, 10, 20, 40, 22, 18, 35, 42, 40],
			itemStyle: {
				normal: { color: '#FF8849' },
			},
		},
		{
			name: 'L1',
			type: 'bar',
			stack: '使用情况',
			data: [40, 22, 18, 35, 42, 40, 10, 20, 36, 10, 10, 20],
			itemStyle: {
				normal: { color: '#3FBB49' },
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
		this.initSalesEcharts();
	},
	methods: {
		setEchart(el, options) {
			const echarts = Echarts.init(el);
			echarts.setOption(options);
		},
		initSalesEcharts() {
			const main = this.$refs.resource_sales;
			this.setEchart(main, salesOption);
		},
	},
};
</script>

<style scoped>
.resource-sales-map {
	width: 100%;
	height: 100%;
}
</style>