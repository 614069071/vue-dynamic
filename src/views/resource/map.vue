<template>
	<div>
		<!-- 全国销售热力图分布 -->
		<div ref="resource_map" class="resource-map" id="resource_map"></div>

		<!-- 2021年产品销量图 -->
		<div ref="resource_sales" class="resource-item resource-sales" id="resource_sales"></div>

		<!-- 销量占比 -->
		<div ref="resource_sales_scale" class="resource-item resource-sales-scale" id="resource_sales_scale"></div>

		<!-- 设备在线率 -->
		<div ref="resource_online" class="resource-item resource-online" id="resource_online"></div>

		<!-- 全国用户活跃度 -->
		<div ref="resource_active" class="resource-item resource-active" id="resource_active"></div>
	</div>
</template>

<script>
import * as Echarts from 'echarts';
import 'echarts/dist/extension/bmap.min';
import { loadBMap } from '@utils';

var data = [
	{ name: '合肥', value: 229 },
	{ name: '武汉', value: 273 },
	{ name: '大庆', value: 279 },
];
var geoCoordMap = {
	合肥: [117.27, 31.86],
	武汉: [114.31, 30.52],
	大庆: [125.03, 46.58],
};

var convertData = function (data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value),
			});
		}
	}

	console.log(res, 'convertData');
	return res;
};

var options = {
	title: {
		text: '全国销售热力图分布',
		subtext: 'data from PM25.in',
		sublink: 'http://www.pm25.in',
		left: 'center',
	},
	tooltip: {
		trigger: 'item',
	},
	bmap: {
		center: [104.114129, 37.550339],
		zoom: 3,
		roam: true,
		mapStyle: {
			styleJson: [
				{
					featureType: 'water',
					elementType: 'all',
					stylers: {
						color: '#d1d1d1',
					},
				},
			],
		},
	},
	series: [
		{
			name: 'pm2.5',
			type: 'scatter',
			coordinateSystem: 'bmap',
			data: convertData(data),
			symbolSize: function (val) {
				return val[2] / 10;
			},
			encode: {
				value: 2,
			},
			label: {
				formatter: '{b}',
				position: 'right',
				show: false,
			},
			emphasis: {
				label: {
					show: true,
				},
			},
		},
		{
			name: 'Top 5',
			type: 'effectScatter',
			coordinateSystem: 'bmap',
			data: convertData(data.sort((a, b) => b.value - a.value).slice(0, 6)),
			symbolSize: (val) => val[2] / 10,
			encode: {
				value: 2,
			},
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke',
			},
			hoverAnimation: true,
			label: {
				formatter: '{b}',
				position: 'right',
				show: true,
			},
			itemStyle: {
				shadowBlur: 10,
				shadowColor: '#333',
			},
			zlevel: 1,
		},
	],
};

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
		this.initMapEcharts();
		this.initSalesEcharts();
		this.initSalesScaleEcharts();
		this.initOnlineEcharts();
		this.initActiveEcharts();
	},
	methods: {
		setEchart(el, options) {
			const echarts = Echarts.init(el);
			echarts.setOption(options);
		},
		initMapEcharts() {
			loadBMap('O3EoPurHdC7eUhGTpEzRm9MwnRtpGHEI').then((BMap) => {
				console.log(BMap, 'res');
				const main = this.$refs.resource_map;
				this.setEchart(main, options);
			});
		},
		initSalesEcharts() {
			const main = this.$refs.resource_sales;
			this.setEchart(main, salesOption);
		},
		initSalesScaleEcharts() {
			const main = this.$refs.resource_sales_scale;
			this.setEchart(main, salesScaleOption);
		},
		initOnlineEcharts() {
			const main = this.$refs.resource_online;
			this.setEchart(main, onlineOption);
		},
		initActiveEcharts() {
			const main = this.$refs.resource_active;
			this.setEchart(main, activeOption);
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