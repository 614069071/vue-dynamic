<template>
	<!-- 全国用户活跃度 -->
	<div ref="resource_active" class="resource-lively-map"></div>
</template>

<script>
import * as Echarts from 'echarts';

// 活跃
var activeOption = {
	title: {
		text: '全国用户活跃度',
		left: '0',
		textStyle: {
			color: '#436EEE',
			fontSize: 13,
		},
	},
	tooltip: {
		trigger: 'axis',
	},
	legend: {
		right: 16,
		data: ['H2', 'L1', 'S1', 'B1', '全局'],
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true,
	},
	// toolbox: {
	// 	feature: {
	// 		saveAsImage: {},
	// 	},
	// },
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
	},
	yAxis: {
		type: 'value',
	},
	series: [
		{
			name: 'H2',
			type: 'line',
			stack: '总量',
			data: [120, 132, 101, 134, 90, 230, 210],
		},
		{
			name: 'L1',
			type: 'line',
			stack: '总量',
			data: [220, 182, 191, 234, 290, 330, 310],
		},
		{
			name: 'S1',
			type: 'line',
			stack: '总量',
			data: [150, 232, 201, 154, 190, 330, 410],
		},
		{
			name: 'B1',
			type: 'line',
			stack: '总量',
			data: [320, 332, 301, 334, 390, 330, 320],
		},
		{
			name: '全局',
			type: 'line',
			stack: '总量',
			data: [820, 932, 901, 934, 1290, 1330, 1320],
		},
	],
};

export default {
	components: {},
	data() {
		return {};
	},
	mounted() {
		this.initActiveEcharts();
	},
	methods: {
		setEchart(el, options) {
			const echarts = Echarts.init(el);
			echarts.setOption(options);
		},
		initActiveEcharts() {
			const main = this.$refs.resource_active;
			this.setEchart(main, activeOption);
		},
	},
};
</script>

<style scoped>
.resource-lively-map {
	width: 100%;
	height: 100%;
}
</style>