<template>
	<!-- 设备在线率 -->
	<div ref="resource_online" class="resource-online-map"></div>
</template>

<script>
import * as Echarts from 'echarts';

export default {
	components: {},
	data() {
		return {};
	},
	computed: {
		options() {
			return {
				color: ['#6998F7', '#F0F2F5'],
				tooltip: {
					trigger: 'item',
					backgroundColor: '#fff',
					textStyle: {
						color: '#333', //设置文字颜色
					},
					formatter: function (e, t, n) {
						const sale = ((e.data.value / e.data.sum) * 100).toFixed(1) + '%';
						return `
              在线总数（台）${e.data.sum || 0}<br />
              在线率：${sale}
            `;
					},
				},
				series: [
					{
						name: '访问来源',
						type: 'pie',
						radius: ['60%', '80%'],
						avoidLabelOverlap: false,
						itemStyle: {
							borderColor: '#fff',
							borderWidth: 3,
						},
						label: {
							show: false,
							position: 'center',
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '20',
								fontWeight: 'bold',
								color: '#333',
								formatter(n) {
									var scale = parseInt((n.data.value / n.data.sum) * 100) + '%';
									return scale;
								},
							},
						},
						labelLine: {
							show: false,
						},
						data: [
							{ value: 900, name: '在线设备', sum: 1000 },
							{ value: 100, name: '离线设备', sum: 1000 },
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
		initOnlineEcharts() {
			this.$nextTick(() => {
				const el = this.$refs.resource_online;
				const echarts = Echarts.init(el);
				echarts.setOption(this.options);
				window.addEventListener('resize', function () {
					echarts.resize();
				});
			});
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