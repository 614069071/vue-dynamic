<template>
	<!-- 设备在线率 -->
	<div ref="resource_online" class="resource-online-map"></div>
</template>

<script>
import * as Echarts from 'echarts';

export default {
	components: {},
	data() {
		return {
			scale: '90%',
		};
	},
	computed: {
		options() {
			return {
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
				color: ['#409EFF', '#DCDFE6'],
				tooltip: {
					trigger: 'item',
				},
				graphic: {
					//图形中间文字
					type: 'text',
					left: 'center',
					top: 'center',
					style: {
						text: this.scale,
						textAlign: 'center',
						fill: '#010101',
						fontSize: 28,
					},
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
								// show: true,
								fontSize: '20',
								fontWeight: 'bold',
							},
						},
						labelLine: {
							show: false,
						},
						data: [
							{ value: 90, name: '在线设备' },
							{ value: 10, name: '离线设备' },
						],
					},
				],
			};
		},
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
			const el = this.$refs.resource_online;
			const echarts = Echarts.init(el);
			echarts.setOption(this.options);
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