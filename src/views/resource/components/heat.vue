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
	title: [
		{
			text: '全国销售热力图分布',
			left: '0',
			textStyle: {
				color: '#436EEE',
				fontSize: 13,
			},
		},
		{
			subtext: '产品总数：75450（台）',
			left: '100',
			bottom: '40',
			textAlign: 'center',
		},
	],
	tooltip: {
		triggerOn: 'mousemove',
		// 控制悬停文字显示
		formatter: function (e, t, n) {
			return `
        ${e.seriesName}：<br />
        L1：${e.data.L1 || 0}台<br />
        H2：${e.data.H2 || 0}台
      `;
		},
	},
	graphic: [
		{
			type: 'text',
			style: {
				fill: '#000',
				text: '完成年销售额：',
				x: 20,
				y: 40,
				fontSize: '18',
			},
		},
		{
			type: 'text',
			style: {
				fill: '#015478',
				text: '450万',
				x: 140,
				y: 40,
				fontSize: '18',
			},
		},
		{
			type: 'text',
			style: {
				fill: '#000',
				text: '年计划销售额：',
				x: 240,
				y: 40,
				fontSize: '18',
			},
		},
		{
			type: 'text',
			style: {
				fill: '#015478',
				text: '1800万',
				x: 360,
				y: 40,
				fontSize: '18',
			},
		},
		{
			type: 'text',
			style: {
				fill: '#000',
				text: '年计划达成率：',
				x: 460,
				y: 40,
				fontSize: '18',
			},
		},
		{
			type: 'text',
			style: {
				fill: '#015478',
				text: '25%',
				x: 580,
				y: 40,
				fontSize: '18',
			},
		},
	],
	visualMap: {
		min: 0,
		max: 120,
		calculable: true,
		// seriesIndex: [1],
		inRange: {
			color: ['lightskyblue', 'yellow', 'orangered'],
		},
		show: true,
		type: 'continuous',
		left: 300,
		bottom: 40,
		align: 'left',
		orient: 'horizontal',
		// text: ['1K', '0'],
		pieces: [
			{
				gt: 100,
				label: '> 100 人',
				color: '#7f1100',
			},
			{
				gte: 10,
				lte: 100,
				label: '10 - 100 人',
				color: '#ff5428',
			},
			{
				gte: 1,
				lt: 10,
				label: '1 - 9 人',
				color: '#ff8c71',
			},
			{
				gt: 0,
				lt: 1,
				label: '疑似',
				color: '#ffd768',
			},
			{
				value: 0,
				color: '#ffffff',
			},
		],
		show: !0,
	},
	geo: {
		map: 'china',
		roam: !1,
		scaleLimit: {
			min: 1,
			max: 2,
		},
		zoom: 1.23,
		top: 120,
		label: {
			normal: {
				show: !0,
				fontSize: '14',
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
	series: [
		{
			name: '总计',
			type: 'map',
			geoIndex: 0,
			data: heatData,
		},
	],
};

export default {
	name: 'heat-map',
	mounted() {
		this.initHeatEcharts();
	},
	methods: {
		initHeatEcharts() {
			const el = this.$refs.heat_map;
			const echarts = Echarts.init(el);
			echarts.setOption(options);
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