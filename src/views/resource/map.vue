<template>
	<div ref="resource_map" class="resource-map" id="resource_map"></div>
</template>

<script>
import * as Echarts from 'echarts';

var data = [
	{ name: '合肥', value: 229 },
	{ name: '武汉', value: 273 },
	{ name: '大庆', value: 279 }
];
var geoCoordMap = {
	合肥: [117.27, 31.86],
	武汉: [114.31, 30.52],
	大庆: [125.03, 46.58]
};

var convertData = function(data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
};

var options = {
	title: {
		text: '全国主要城市空气质量 - 百度地图'
		// subtext: 'data from PM25.in',
		// sublink: 'http://www.pm25.in',
		// left: 'center'
	},
	tooltip: {
		trigger: 'item'
	},
	// bmap 不生效，导致地图无法加载出来
	bmap: {
		center: [104.114129, 37.550339],
		zoom: 5,
		roam: true,
		mapStyle: {
			styleJson: [
				{
					featureType: 'water',
					elementType: 'all',
					stylers: {
						color: '#d1d1d1'
					}
				}
			]
		}
	},
	series: [
		{
			name: 'pm2.5',
			type: 'scatter',
			coordinateSystem: 'bmap',
			data: convertData(data),
			symbolSize: function(val) {
				return val[2] / 10;
			},
			encode: {
				value: 2
			},
			label: {
				formatter: '{b}',
				position: 'right',
				show: false
			},
			emphasis: {
				label: {
					show: true
				}
			}
		},
		{
			name: 'Top 5',
			type: 'effectScatter',
			coordinateSystem: 'bmap',
			data: convertData(
				data
					.sort(function(a, b) {
						return b.value - a.value;
					})
					.slice(0, 6)
			),
			symbolSize: function(val) {
				return val[2] / 10;
			},
			encode: {
				value: 2
			},
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke'
			},
			hoverAnimation: true,
			label: {
				formatter: '{b}',
				position: 'right',
				show: true
			},
			itemStyle: {
				shadowBlur: 10,
				shadowColor: '#333'
			},
			zlevel: 1
		}
	]
	// geo:{
	//   map:'china'
	// }
};

export default {
	data() {
		return {};
	},
	mounted() {
		this.initEcharts();
	},
	methods: {
		initEcharts() {
			this.$nextTick(() => {
				const main = this.$refs.resource_map;
				// const main = document.getElementById('resource_map');
				const echarts = Echarts.init(main);
				echarts.setOption(options, true);
			});
		}
	}
};
</script>

<style scoped>
.resource-map {
	width: 100%;
	height: 100%;
}
</style>