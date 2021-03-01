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
		backgroundColor: '#fff',
		textStyle: {
			color: '#333', //设置文字颜色
		},
		formatter(n) {
			var scale = parseInt((n.data.value / n.data.sum) * 100) + '%';
			return `
        <div class="echart-tooltip-wrapper">
          <p><span>${n.name}</span></p>
          <p>${n.marker}<span>销量占比&nbsp;&nbsp;&nbsp;</span><span>${scale}</span></p>
        </div>
      `;
		},
	},
	color: ['#5B8FF9', '#4ECB73', '#FBD437', '#F2637B', '#975FE5'],
	legend: {
		icon: 'circle',
		itemWidth: 8,
		itemHeight: 8,
		itemGap: 12,
		orient: 'vertical',
		left: '70%',
		top: 60,
		textStyle: {
			//文字样式
			color: '#606266',
			fontSize: '14',
		},
	},
	series: [
		{
			name: '销量占比',
			type: 'pie',
			radius: ['60%', '80%'],
			center: ['40%', '50%'],
			avoidLabelOverlap: false,
			itemStyle: {
				borderColor: '#fff',
				borderWidth: 3,
			},
			label: {
				show: false,
				position: 'center',
			},
			labelLine: {
				show: false,
			},
			emphasis: {
				label: {
					show: true,
					fontSize: '24',
					color: '#333',
					formatter(n) {
						return n.value;
					},
				},
			},
			data: [
				{ value: 1, sum: 10, name: 'H1' },
				{ value: 2, sum: 10, name: 'L1' },
				{ value: 3, sum: 10, name: 'H2' },
				{ value: 2, sum: 10, name: 'S1' },
				{ value: 1, sum: 10, name: '其他' },
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
		this.initSalesScaleEcharts();
	},
	methods: {
		initSalesScaleEcharts() {
			this.$nextTick(() => {
				const el = this.$refs.resource_sales_scale;
				const echarts = Echarts.init(el);
				echarts.setOption(salesScaleOption);
				window.addEventListener('resize', function () {
					echarts.resize();
				});
			});
		},
	},
};
</script>