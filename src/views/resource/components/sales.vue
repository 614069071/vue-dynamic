<template>
	<!-- 2021年产品销量图 -->
	<div ref="resource_sales" class="resource-sales-map"></div>
</template>

<script>
import * as Echarts from 'echarts';

//销量
var salesOption = {
	tooltip: {
		trigger: 'axis',
		backgroundColor: '#fff',
		textStyle: {
			color: '#333', //设置文字颜色
		},
		formatter(arr) {
			const str = arr
				.map(
					(e) =>
						`<p><span><span style="background-color:${e.color};"></span>${e.seriesName}</span><span>${e.data}</span></p>`
				)
				.join('');
			return `
        <div class="echart-tooltip-wrapper">
          <p><span>${arr[0].axisValueLabel}</span></p>
          ${str}
        </div>
      `;
		},
	},
	dataZoom: [
		{
			type: 'slider',
			start: 0,
			end: 45,
		},
		{
			type: 'inside',
			start: 0,
			end: 45,
		},
	],
	legend: {
		itemWidth: 12,
		itemHeight: 12,
		left: 16,
		top: 16,
		data: ['H2', 'L1'],
		icon: 'rect',
		itemGap: 24,
		textStyle: {
			//文字样式
			color: '#606266',
			fontSize: '12',
		},
	},
	grid: {
		left: 22,
		right: 22,
		top: 60,
		bottom: 65,
		containLabel: true,
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
				normal: { color: '#5B8FF9' },
			},
		},
		{
			name: 'L1',
			type: 'bar',
			stack: '使用情况',
			data: [40, 22, 18, 35, 42, 40, 10, 20, 36, 10, 10, 20],
			itemStyle: {
				normal: { color: '#69DAAD' },
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
		initSalesEcharts() {
			this.$nextTick(() => {
				const el = this.$refs.resource_sales;
				const echarts = Echarts.init(el);
				echarts.setOption(salesOption);
				window.addEventListener('resize', function () {
					echarts.resize();
				});
			});
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