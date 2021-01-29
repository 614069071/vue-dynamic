<template>
	<div ref="heat_map" class="resource-heat-map"></div>
</template>

<script>
var name_title = '中国人民大学2017年各省市计划录取人数';
var subname = '数据爬取自千栀网\n，\n上海、浙江无文理科录取人数';
var nameColor = ' rgb(55, 75, 113)';
var name_fontFamily = '等线';
var subname_fontSize = 15;
var name_fontSize = 18;
var mapName = 'china';
var data = [
	{
		name: '北京',
		value: 177,
	},
	{
		name: '天津',
		value: 42,
	},
	{
		name: '河北',
		value: 102,
	},
	{
		name: '山西',
		value: 81,
	},
	{
		name: '内蒙古',
		value: 47,
	},
	{
		name: '辽宁',
		value: 67,
	},
	{
		name: '吉林',
		value: 82,
	},
	{
		name: '黑龙江',
		value: 66,
	},
	{
		name: '上海',
		value: 24,
	},
	{
		name: '江苏',
		value: 92,
	},
	{
		name: '浙江',
		value: 114,
	},
	{
		name: '安徽',
		value: 109,
	},
	{
		name: '福建',
		value: 116,
	},
	{
		name: '江西',
		value: 91,
	},
	{
		name: '山东',
		value: 119,
	},
	{
		name: '河南',
		value: 137,
	},
	{
		name: '湖北',
		value: 116,
	},
	{
		name: '湖南',
		value: 114,
	},
	{
		name: '重庆',
		value: 91,
	},
	{
		name: '四川',
		value: 125,
	},
	{
		name: '贵州',
		value: 62,
	},
	{
		name: '云南',
		value: 83,
	},
	{
		name: '西藏',
		value: 9,
	},
	{
		name: '陕西',
		value: 80,
	},
	{
		name: '甘肃',
		value: 56,
	},
	{
		name: '青海',
		value: 10,
	},
	{
		name: '宁夏',
		value: 18,
	},
	{
		name: '新疆',
		value: 67,
	},
	{
		name: '广东',
		value: 123,
	},
	{
		name: '广西',
		value: 59,
	},
	{
		name: '海南',
		value: 14,
	},
];

var geoCoordMap = {};

var toolTipData = [
	{
		name: '北京',
		value: [
			{
				name: '文科',
				value: 95,
			},
			{
				name: '理科',
				value: 82,
			},
		],
	},
	{
		name: '天津',
		value: [
			{
				name: '文科',
				value: 22,
			},
			{
				name: '理科',
				value: 20,
			},
		],
	},
	{
		name: '河北',
		value: [
			{
				name: '文科',
				value: 60,
			},
			{
				name: '理科',
				value: 42,
			},
		],
	},
	{
		name: '山西',
		value: [
			{
				name: '文科',
				value: 40,
			},
			{
				name: '理科',
				value: 41,
			},
		],
	},
	{
		name: '内蒙古',
		value: [
			{
				name: '文科',
				value: 23,
			},
			{
				name: '理科',
				value: 24,
			},
		],
	},
	{
		name: '辽宁',
		value: [
			{
				name: '文科',
				value: 39,
			},
			{
				name: '理科',
				value: 28,
			},
		],
	},
	{
		name: '吉林',
		value: [
			{
				name: '文科',
				value: 41,
			},
			{
				name: '理科',
				value: 41,
			},
		],
	},
	{
		name: '黑龙江',
		value: [
			{
				name: '文科',
				value: 35,
			},
			{
				name: '理科',
				value: 31,
			},
		],
	},
	{
		name: '上海',
		value: [
			{
				name: '文科',
				value: 12,
			},
			{
				name: '理科',
				value: 12,
			},
		],
	},
	{
		name: '江苏',
		value: [
			{
				name: '文科',
				value: 47,
			},
			{
				name: '理科',
				value: 45,
			},
		],
	},
	{
		name: '浙江',
		value: [
			{
				name: '文科',
				value: 57,
			},
			{
				name: '理科',
				value: 57,
			},
		],
	},
	{
		name: '安徽',
		value: [
			{
				name: '文科',
				value: 57,
			},
			{
				name: '理科',
				value: 52,
			},
		],
	},
	{
		name: '福建',
		value: [
			{
				name: '文科',
				value: 59,
			},
			{
				name: '理科',
				value: 57,
			},
		],
	},
	{
		name: '江西',
		value: [
			{
				name: '文科',
				value: 49,
			},
			{
				name: '理科',
				value: 42,
			},
		],
	},
	{
		name: '山东',
		value: [
			{
				name: '文科',
				value: 67,
			},
			{
				name: '理科',
				value: 52,
			},
		],
	},
	{
		name: '河南',
		value: [
			{
				name: '文科',
				value: 69,
			},
			{
				name: '理科',
				value: 68,
			},
		],
	},
	{
		name: '湖北',
		value: [
			{
				name: '文科',
				value: 60,
			},
			{
				name: '理科',
				value: 56,
			},
		],
	},
	{
		name: '湖南',
		value: [
			{
				name: '文科',
				value: 62,
			},
			{
				name: '理科',
				value: 52,
			},
		],
	},
	{
		name: '重庆',
		value: [
			{
				name: '文科',
				value: 47,
			},
			{
				name: '理科',
				value: 44,
			},
		],
	},
	{
		name: '四川',
		value: [
			{
				name: '文科',
				value: 65,
			},
			{
				name: '理科',
				value: 60,
			},
		],
	},
	{
		name: '贵州',
		value: [
			{
				name: '文科',
				value: 32,
			},
			{
				name: '理科',
				value: 30,
			},
		],
	},
	{
		name: '云南',
		value: [
			{
				name: '文科',
				value: 42,
			},
			{
				name: '理科',
				value: 41,
			},
		],
	},
	{
		name: '西藏',
		value: [
			{
				name: '文科',
				value: 5,
			},
			{
				name: '理科',
				value: 4,
			},
		],
	},
	{
		name: '陕西',
		value: [
			{
				name: '文科',
				value: 38,
			},
			{
				name: '理科',
				value: 42,
			},
		],
	},
	{
		name: '甘肃',
		value: [
			{
				name: '文科',
				value: 28,
			},
			{
				name: '理科',
				value: 28,
			},
		],
	},
	{
		name: '青海',
		value: [
			{
				name: '文科',
				value: 5,
			},
			{
				name: '理科',
				value: 5,
			},
		],
	},
	{
		name: '宁夏',
		value: [
			{
				name: '文科',
				value: 10,
			},
			{
				name: '理科',
				value: 8,
			},
		],
	},
	{
		name: '新疆',
		value: [
			{
				name: '文科',
				value: 36,
			},
			{
				name: '理科',
				value: 31,
			},
		],
	},
	{
		name: '广东',
		value: [
			{
				name: '文科',
				value: 63,
			},
			{
				name: '理科',
				value: 60,
			},
		],
	},
	{
		name: '广西',
		value: [
			{
				name: '文科',
				value: 29,
			},
			{
				name: '理科',
				value: 30,
			},
		],
	},
	{
		name: '海南',
		value: [
			{
				name: '文科',
				value: 8,
			},
			{
				name: '理科',
				value: 6,
			},
		],
	},
];

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
// console.log(data);
// console.log(toolTipData);
var max = 480,
	min = 9; // todo
var maxSize4Pin = 100,
	minSize4Pin = 20;

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
	return res;
};
var option = {
	title: {
		text: name_title,
		subtext: subname,
		x: 'center',
		textStyle: {
			color: nameColor,
			fontFamily: name_fontFamily,
			fontSize: name_fontSize,
		},
		subtextStyle: {
			fontSize: subname_fontSize,
			fontFamily: name_fontFamily,
		},
	},
	tooltip: {
		trigger: 'item',
		formatter: function (params) {
			if (typeof params.value[2] == 'undefined') {
				let toolTiphtml = '';
				for (var i = 0; i < toolTipData.length; i++) {
					if (params.name == toolTipData[i].name) {
						toolTiphtml += toolTipData[i].name + ':<br>';
						for (var j = 0; j < toolTipData[i].value.length; j++) {
							toolTiphtml +=
								toolTipData[i].value[j].name +
								':' +
								toolTipData[i].value[j].value +
								'<br>';
						}
					}
				}
				console.log(toolTiphtml);
				// console.log(convertData(data))
				return toolTiphtml;
			} else {
				let toolTiphtml = '';
				for (let i = 0; i < toolTipData.length; i++) {
					if (params.name == toolTipData[i].name) {
						toolTiphtml += toolTipData[i].name + ':<br>';
						for (let j = 0; j < toolTipData[i].value.length; j++) {
							toolTiphtml +=
								toolTipData[i].value[j].name +
								':' +
								toolTipData[i].value[j].value +
								'<br>';
						}
					}
				}
				console.log(toolTiphtml);
				// console.log(convertData(data))
				return toolTiphtml;
			}
		},
	},
	// legend: {
	//     orient: 'vertical',
	//     y: 'bottom',
	//     x: 'right',
	//     data: ['credit_pm2.5'],
	//     textStyle: {
	//         color: '#fff'
	//     }
	// },
	visualMap: {
		show: true,
		min: 0,
		max: 200,
		left: 'left',
		top: 'bottom',
		text: ['高', '低'], // 文本，默认为数值文本
		calculable: true,
		seriesIndex: [1],
		inRange: {
			// color: ['#3B5077', '#031525'] // 蓝黑
			// color: ['#ffc0cb', '#800080'] // 红紫
			// color: ['#3C3B3F', '#605C3C'] // 黑绿
			// color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
			// color: ['#23074d', '#cc5333'] // 紫红
			color: ['#00467F', '#A5CC82'], // 蓝绿
			// color: ['#1488CC', '#2B32B2'] // 浅蓝
			// color: ['#00467F', '#A5CC82'] // 蓝绿
			// color: ['#00467F', '#A5CC82'] // 蓝绿
			// color: ['#00467F', '#A5CC82'] // 蓝绿
			// color: ['#00467F', '#A5CC82'] // 蓝绿
		},
	},
	/*工具按钮组*/
	// toolbox: {
	//     show: true,
	//     orient: 'vertical',
	//     left: 'right',
	//     top: 'center',
	//     feature: {
	//         dataView: {
	//             readOnly: false
	//         },
	//         restore: {},
	//         saveAsImage: {}
	//     }
	// },
	geo: {
		show: true,
		map: mapName,
		label: {
			normal: {
				show: false,
			},
			emphasis: {
				show: false,
			},
		},
		roam: true,
		itemStyle: {
			normal: {
				areaColor: '#031525',
				borderColor: '#3B5077',
			},
			emphasis: {
				areaColor: '#2B91B7',
			},
		},
	},
	series: [
		{
			name: '散点',
			type: 'scatter',
			coordinateSystem: 'geo',
			data: convertData(data),
			symbolSize: function (val) {
				return val[2] / 10;
			},
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: true,
				},
				emphasis: {
					show: true,
				},
			},
			itemStyle: {
				normal: {
					color: '#05C3F9',
				},
			},
		},
		{
			type: 'map',
			map: mapName,
			geoIndex: 0,
			aspectScale: 0.75, //长宽比
			showLegendSymbol: false, // 存在legend时显示
			label: {
				normal: {
					show: true,
				},
				emphasis: {
					show: false,
					textStyle: {
						color: '#fff',
					},
				},
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: '#031525',
					borderColor: '#3B5077',
				},
				emphasis: {
					areaColor: '#2B91B7',
				},
			},
			animation: false,
			data: data,
		},
		{
			name: '点',
			type: 'scatter',
			coordinateSystem: 'geo',
			symbol: 'pin', //气泡
			symbolSize: function (val) {
				var a = (maxSize4Pin - minSize4Pin) / (max - min);
				var b = minSize4Pin - a * min;
				b = maxSize4Pin - a * max;
				return a * val[2] + b;
			},
			label: {
				normal: {
					show: true,
					textStyle: {
						color: '#fff',
						fontSize: 9,
					},
				},
			},
			itemStyle: {
				normal: {
					color: '#F62157', //标志颜色
				},
			},
			zlevel: 6,
			data: convertData(data),
		},
		{
			name: 'Top 5',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			data: convertData(
				data
					.sort(function (a, b) {
						return b.value - a.value;
					})
					.slice(0, 5)
			),
			symbolSize: function (val) {
				return val[2] / 10;
			},
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke',
			},
			hoverAnimation: true,
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: true,
				},
			},
			itemStyle: {
				normal: {
					color: 'yellow',
					shadowBlur: 10,
					shadowColor: 'yellow',
				},
			},
			zlevel: 1,
		},
	],
};

import * as Echarts from 'echarts';
import 'echarts/dist/extension/bmap.min';
import ChinaJson from '../resource/china';
import { loadBMap } from '@utils';

console.log(ChinaJson, 'json');

export default {
	name: 'heat-map',
	mounted() {
		this.initHeatMap();
	},
	methods: {
		initHeatMap() {
			const el = this.$refs.heat_map;

			function randomData() {
				return Math.round(Math.random() * 500);
			}

			loadBMap('O3EoPurHdC7eUhGTpEzRm9MwnRtpGHEI').then((BMap) => {
				Echarts.registerMap('china', ChinaJson);
				// console.log(BMap, 'res');
				let myChart = Echarts.init(el);
				// 绘制图表
				myChart.setOption({
					tooltip: {},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: [''],
					},
					selectedMode: 'single',
					series: [
						{
							name: '',
							type: 'map',
							mapType: 'china',
							center: [115.97, 29.71],
							layoutCenter: ['80%', '100%'],
							itemStyle: {
								normal: {
									borderColor: 'rgba(0, 0, 0, 0.2)',
								},
								emphasis: {
									shadowOffsetX: 0,
									shadowOffsetY: 0,
									shadowBlur: 20,
									borderWidth: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)',
								},
							},
							showLegendSymbol: true,
							label: {
								normal: {
									show: false,
								},
								emphasis: {
									show: false,
								},
							},
							data: [
								{ name: '北京', value: randomData() },
								{ name: '天津', value: randomData() },
								{ name: '上海', value: randomData() },
								{ name: '重庆', value: randomData() },
								{ name: '河北', value: randomData() },
								{ name: '河南', value: randomData() },
								{ name: '云南', value: randomData() },
								{ name: '辽宁', value: randomData() },
								{ name: '黑龙江', value: randomData() },
								{ name: '湖南', value: randomData() },
								{ name: '安徽', value: randomData() },
								{ name: '山东', value: randomData() },
								{ name: '新疆', value: randomData() },
								{ name: '江苏', value: randomData() },
								{ name: '浙江', value: randomData() },
								{ name: '江西', value: randomData() },
								{ name: '湖北', value: randomData() },
								{ name: '广西', value: randomData() },
								{ name: '甘肃', value: randomData() },
								{ name: '山西', value: randomData() },
								{ name: '内蒙古', value: randomData() },
								{ name: '陕西', value: randomData() },
								{ name: '吉林', value: randomData() },
								{ name: '福建', value: randomData() },
								{ name: '贵州', value: randomData() },
								{ name: '广东', value: randomData() },
								{ name: '青海', value: randomData() },
								{ name: '西藏', value: randomData() },
								{ name: '四川', value: randomData() },
								{ name: '宁夏', value: randomData() },
								{ name: '海南', value: randomData() },
								{ name: '台湾', value: randomData() },
								{ name: '香港', value: randomData() },
								{ name: '澳门', value: randomData() },
							],
						},
					],
				});
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