<template>
	<div ref="heat_map" class="resource-heat-map"></div>
</template>

<script>
import * as Echarts from 'echarts';
import 'echarts/map/js/china';

const heatData = [
	{
		name: '南海诸岛',
		value: 0,
		L1: 10,
		H2: 100,
	},
	{
		name: '北京',
		value: 54,
	},
	{
		name: '天津',
		value: 13,
	},
	{
		name: '上海',
		value: 40,
	},
	{
		name: '重庆',
		value: 75,
	},
	{
		name: '河北',
		value: 13,
	},
	{
		name: '河南',
		value: 83,
	},
	{
		name: '云南',
		value: 11,
	},
	{
		name: '辽宁',
		value: 19,
	},
	{
		name: '黑龙江',
		value: 15,
	},
	{
		name: '湖南',
		value: 69,
	},
	{
		name: '安徽',
		value: 60,
	},
	{
		name: '山东',
		value: 39,
	},
	{
		name: '新疆',
		value: 4,
	},
	{
		name: '江苏',
		value: 31,
	},
	{
		name: '浙江',
		value: 104,
	},
	{
		name: '江西',
		value: 36,
	},
	{
		name: '湖北',
		value: 1052,
	},
	{
		name: '广西',
		value: 33,
	},
	{
		name: '甘肃',
		value: 7,
	},
	{
		name: '山西',
		value: 9,
	},
	{
		name: '内蒙古',
		value: 7,
	},
	{
		name: '陕西',
		value: 22,
	},
	{
		name: '吉林',
		value: 4,
	},
	{
		name: '福建',
		value: 18,
	},
	{
		name: '贵州',
		value: 5,
	},
	{
		name: '广东',
		value: 98,
	},
	{
		name: '青海',
		value: 1,
	},
	{
		name: '西藏',
		value: 0,
	},
	{
		name: '四川',
		value: 44,
	},
	{
		name: '宁夏',
		value: 4,
	},
	{
		name: '海南',
		value: 22,
	},
	{
		name: '台湾',
		value: 3,
	},
	{
		name: '香港',
		value: 5,
	},
	{
		name: '澳门',
		value: 5,
	},
];

const options = {
	tooltip: {
		triggerOn: 'mousemove',
		// 控制悬停文字显示
		formatter: function (e, t, n) {
			return `
        ${e.name}<br />
        总计：123456台<br />
        L1：${e.data.L1 || 0}台<br />
        H2：${e.data.H2 || 0}台
      `;
		},
	},
	series: [
		{
			type: 'map',
			geoIndex: 0,
			data: heatData,
		},
	],
	// grid: {
	// 	left: 22,
	// 	right: 22,
	// 	top: 100,
	// 	bottom: 10,
	// 	containLabel: true,
	// },
	// 自定义销售文字
	// graphic: [
	// 	{
	// 		type: 'text',
	// 		style: {
	// 			fill: '#999',
	// 			text: '完成年销售额',
	// 			x: 24,
	// 			y: 30,
	// 			fontSize: '14',
	// 		},
	// 	},
	// 	{
	// 		type: 'text',
	// 		style: {
	// 			fill: '#333',
	// 			text: '450万',
	// 			x: 24,
	// 			y: 52,
	// 			fontSize: '24',
	// 		},
	// 	},
	// 	{
	// 		type: 'text',
	// 		style: {
	// 			fill: '#999',
	// 			text: '年计划销售额',
	// 			x: 274,
	// 			y: 30,
	// 			fontSize: '14',
	// 		},
	// 	},
	// 	{
	// 		type: 'text',
	// 		style: {
	// 			fill: '#333',
	// 			text: '1800万',
	// 			x: 274,
	// 			y: 52,
	// 			fontSize: '24',
	// 		},
	// 	},
	// 	{
	// 		type: 'text',
	// 		style: {
	// 			fill: '#999',
	// 			text: '年计划达成率',
	// 			x: 548,
	// 			y: 30,
	// 			fontSize: '14',
	// 		},
	// 	},
	// 	{
	// 		type: 'text',
	// 		style: {
	// 			fill: '#333',
	// 			text: '25%',
	// 			x: 548,
	// 			y: 52,
	// 			fontSize: '24',
	// 		},
	// 	},
	// ],
	// 定义颜色范围
	// visualMap: {
	// 	min: 0,
	// 	max: 120,
	// 	calculable: true,
	// 	// seriesIndex: [1],
	// 	inRange: {
	// 		color: ['lightskyblue', 'yellow', 'orangered'],
	// 	},
	// 	show: true,
	// 	type: 'continuous',
	// 	left: 300,
	// 	bottom: 40,
	// 	align: 'left',
	// 	orient: 'horizontal',
	// 	// text: ['1K', '0'],
	// 	// pieces: [
	// 	// 	{
	// 	// 		gt: 100,
	// 	// 		label: '> 100 人',
	// 	// 		color: '#7f1100',
	// 	// 	},
	// 	// 	{
	// 	// 		gte: 10,
	// 	// 		lte: 100,
	// 	// 		label: '10 - 100 人',
	// 	// 		color: '#ff5428',
	// 	// 	},
	// 	// 	{
	// 	// 		gte: 1,
	// 	// 		lt: 10,
	// 	// 		label: '1 - 9 人',
	// 	// 		color: '#ff8c71',
	// 	// 	},
	// 	// 	{
	// 	// 		gt: 0,
	// 	// 		lt: 1,
	// 	// 		label: '疑似',
	// 	// 		color: '#ffd768',
	// 	// 	},
	// 	// 	{
	// 	// 		value: 0,
	// 	// 		color: '#ffffff',
	// 	// 	},
	// 	// ],
	// 	show: false, //控制分区显示
	// },
	geo: {
		map: 'china',
		roam: !1,
		scaleLimit: {
			min: 1,
			max: 2,
		},
		zoom: 1.23,
		label: {
			normal: {
				show: !0,
				fontSize: '12',
				color: 'rgba(0,0,0,0.7)',
			},
		},
		itemStyle: {
			normal: {
				//shadowBlur: 50,
				//shadowColor: 'rgba(0, 0, 0, 0.2)',
				borderColor: 'rgba(0, 0, 0, 0.2)',
			},
			emphasis: {
				areaColor: '#f2d5ad',
				shadowOffsetX: 0,
				shadowOffsetY: 0,
				borderWidth: 0,
			},
		},
	},
};

export default {
	name: 'heat-map',
	mounted() {
		this.initHeatEcharts();
	},
	methods: {
		initHeatEcharts() {
			this.$nextTick(() => {
				const el = this.$refs.heat_map;
				const echarts = Echarts.init(el);
				echarts.setOption(options);
				window.onresize = echarts.resize;
			});
		},
	},
};
</script>  

<style>
.resource-heat-map {
	width: 100%;
	height: 100%;
}
</style>