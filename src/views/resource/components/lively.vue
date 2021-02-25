<template>
	<!-- 全国用户活跃度 -->
	<div ref="resource_active" class="resource-lively-map"></div>
</template>

<script>
import * as Echarts from 'echarts';

// 活跃
var activeOption = {
	tooltip: {
		trigger: 'axis',
	},
	color: ['#5B8FF9', '#5AD8A6', '#F6BD16', '#E8684A'],
	legend: {
		left: 16,
		top: 16,
		data: ['H2', 'L1', 'S1', 'B1', '全局'],
		icon: 'line',
		itemWidth: 8,
		itemGap: 24,
		textStyle: {
			//文字样式
			color: '#606266',
			fontSize: '1',
		},
	},
	grid: {
		left: 22,
		right: 22,
		top: 60,
		bottom: 10,
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
			itemStyle: {
				normal: {
					lineStyle: {
						color: '#5B8FF9',
					},
				},
			},
		},
		{
			name: 'L1',
			type: 'line',
			stack: '总量',
			data: [220, 182, 191, 234, 290, 330, 310],
			itemStyle: {
				normal: {
					lineStyle: {
						color: '#5AD8A6',
					},
				},
			},
		},
		{
			name: 'S1',
			type: 'line',
			stack: '总量',
			data: [150, 232, 201, 154, 190, 330, 410],
			itemStyle: {
				normal: {
					lineStyle: {
						color: '#F6BD16',
					},
				},
			},
		},
		{
			name: 'B1',
			type: 'line',
			stack: '总量',
			data: [320, 332, 301, 334, 390, 330, 320],
			itemStyle: {
				normal: {
					lineStyle: {
						color: ' #E8684A',
					},
				},
			},
		},
		// {
		// 	name: '全局',
		// 	type: 'line',
		// 	stack: '总量',
		// 	data: [820, 932, 901, 934, 1290, 1330, 1320],
		// },
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
		initActiveEcharts() {
			this.$nextTick(() => {
				const el = this.$refs.resource_active;
				const echarts = Echarts.init(el);
				echarts.setOption(activeOption);
				window.onresize = echarts.resize;
			});
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