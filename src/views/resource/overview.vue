<template>
	<div class="rerouce-view-wrapper view-wrapper">
		<el-row :gutter="10">
			<el-col :span="15">
				<div class="resource-item-wrapper resource-map">
					<div class="resource-item-title f-16">全国销售热力图分布</div>
					<div class="resource-item-other">
						<el-col :span="8">
							<div class="resource-other-item">
								<p>完成年销售额</p>
								<p>124,543,233<i>元</i></p>
							</div>
						</el-col>

						<el-col :span="8">
							<div class="resource-other-item">
								<p>完计划销售额</p>
								<p>124,543,233<i>元</i></p>
							</div>
						</el-col>

						<el-col :span="8">
							<div class="resource-other-item">
								<p>年计划达成率</p>
								<p>92%</p>
							</div>
						</el-col>
					</div>

					<div class="resource-item">
						<div class="resource-item-inner">
							<Heat>全国销售热力图分布</Heat>
						</div>
					</div>
				</div>
			</el-col>

			<el-col :span="9">
				<div class="resource-item-wrapper resource-online">
					<div class="resource-item-title f-16">设备在线率</div>
					<div class="resource-item">
						<Online>设备在线率</Online>
					</div>
				</div>

				<div class="resource-item-wrapper resource-scale">
					<div class="resource-item-title f-16">销量占比</div>
					<div class="resource-item">
						<Scale>销量占比</Scale>
					</div>
				</div>
			</el-col>
		</el-row>

		<el-row class="rerouce-row-wrapper" :gutter="10">
			<el-col :span="15">
				<div class="resource-item-wrapper resource-active">
					<div class="resource-item-title f-16">用户群活跃度</div>
					<div class="resource-item">
						<Lively>用户群活跃度</Lively>
					</div>
				</div>
			</el-col>

			<el-col :span="9">
				<div class="resource-item-wrapper resource-sales">
					<div class="resource-item-title f-16">2021年产品销量图</div>
					<div class="resource-item">
						<Sales>2021年产品销量图</Sales>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Heat from './components/heat';
import Sales from './components/sales';
import Scale from './components/scale';
import Lively from './components/lively';
import Online from './components/online';

export default {
	components: { Heat, Sales, Scale, Lively, Online },
	data() {
		return {};
	},
	mounted() {},
	methods: {},
};
</script>

<style scoped lang="scss">
.resource-item-wrapper {
	background-color: #fff;
	width: 100%;
}

.resource-item-other {
	display: flex;
	height: 73px;
	padding: 27px 0 0 24px;

	.resource-other-item {
		p:first-child {
			color: #999;
			height: 20px;
			line-height: 20px;
		}
		p:last-child {
			color: #333;
			font-size: 24px;
			height: 28px;
			line-height: 28px;
			margin-top: 8px;
		}
		i {
			color: #606266;
			font-size: 16px;
			padding-left: 5px;
		}
	}
}

.resource-item-title {
	height: 55px;
	padding-left: 24px;
	line-height: 55px;
	color: var(--font-color-3);
	border-bottom: 1px solid #e4e7ed;
}

.rerouce-row-wrapper {
	margin-top: 10px;
}

.resource-map .resource-item .resource-item-inner {
	height: 455px;
	padding-bottom: 27px;
	box-sizing: border-box;
}

.resource-online .resource-item {
	height: 244px;
}

.resource-scale {
	margin-top: 10px;
	.resource-item {
		height: 244px;
	}
}

.resource-active .resource-item {
	height: 393px;
}

.resource-sales .resource-item {
	height: 393px;
}
</style>

<style>
.echart-tooltip-wrapper p {
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 100px;
}

.echart-tooltip-wrapper p > span:first-child {
	color: #606266;
}

.echart-tooltip-wrapper p > span span {
	width: 10px;
	height: 10px;
	display: inline-block;
	margin-right: 8px;
}

.echart-tooltip-wrapper p > span span.line {
	height: 2px;
	margin-bottom: 4px;
}

.echart-tooltip-wrapper p > span span.circle {
	height: 10px;
	border-radius: 50%;
}

.echart-tooltip-wrapper p > span:last-child {
	color: #333;
}
</style>