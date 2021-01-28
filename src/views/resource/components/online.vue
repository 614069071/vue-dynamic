<template>
	<!-- 设备在线率 -->
	<div ref="resource_online" class="resource-online-map"></div>
</template>

<script>
import * as Echarts from 'echarts';

// 设备在线
var onlineOption = {
	title: [
		{
			text: '设备在线率',
			left: '0',
			textStyle: {
				color: '#436EEE',
				fontSize: 15,
			},
		},
		{
			subtext: '在线总数：25411台',
			left: '16.67%',
			top: '75%',
			textAlign: 'center',
		},
	],
	tooltip: {
		trigger: 'item',
	},
	legend: {
		// orient: 'vertical',
		right: '0',
	},
	series: [
		{
			name: '访问来源',
			type: 'pie',
			radius: ['40%', '70%'],
			avoidLabelOverlap: false,
			label: {
				show: false,
				position: 'center',
			},
			emphasis: {
				label: {
					show: true,
					fontSize: '20',
					fontWeight: 'bold',
				},
			},
			labelLine: {
				show: false,
			},
			data: [
				{ value: 1048, name: '在线设备' },
				{ value: 735, name: '离线设备' },
			],
		},
	],
};

export default {
	components: {},
	data() {
		return {};
	},
	mounted() {
		this.initOnlineEcharts();
	},
	methods: {
		setEchart(el, options) {
			const echarts = Echarts.init(el);
			echarts.setOption(options);
		},

		initOnlineEcharts() {
			const main = this.$refs.resource_online;
			this.setEchart(main, onlineOption);
		},
	},
};
</script>

<style scoped>
.resource-online-map {
	width: 100%;
	height: 100%;
}
</style>