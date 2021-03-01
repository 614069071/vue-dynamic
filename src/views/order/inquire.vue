<template>
	<div class="order-inquire-view-wrapper view-wrapper">
		<div class="inner-header-wrapper">
			<el-form inline label-width="100px" :model="dataForm">
				<el-col :span="8">
					<el-form-item label="订单编号">
						<el-input placeholder=""></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="下单人">
						<el-select v-model="dataForm.name2">
							<el-option label="李四" value="1"></el-option>
							<el-option label="张三" value="2"></el-option>
						</el-select>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="订单状态">
						<el-select v-model="dataForm.name8">
							<el-option label="已出库" value="1"></el-option>
							<el-option label="未出库" value="2"></el-option>
							<el-option label="订单未激活" value="8"></el-option>
							<el-option label="订单已激活" value="4"></el-option>
							<el-option label="全部" value="5"></el-option>
						</el-select>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="设备ID">
						<el-select v-model="dataForm.name4">
							<el-option label="H1" value="1"></el-option>
							<el-option label="H2" value="2"></el-option>
						</el-select>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="客户名称">
						<el-input placeholder=""></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="SN">
						<el-input placeholder=""></el-input>
					</el-form-item>
				</el-col>

				<el-form-item label="下单日期">
					<el-date-picker v-model="dataForm.name6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
					</el-date-picker>
				</el-form-item>

				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="inner-container-wrapper banner-list">
			<el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="name1" label="订单号" width="120"></el-table-column>
				<el-table-column prop="name2" label="SN" width="190"></el-table-column>
				<el-table-column prop="name3" label="订单数量"></el-table-column>
				<el-table-column prop="name4" label="单价"></el-table-column>
				<el-table-column prop="name5" label="设备型号"></el-table-column>
				<el-table-column prop="name6" label="下单人" width="80"></el-table-column>
				<el-table-column prop="name7" label="客户名称"></el-table-column>
				<el-table-column prop="name8" label="客户编码" width="100"></el-table-column>
				<el-table-column prop="name9" label="下单日期" width="100"></el-table-column>
				<el-table-column prop="name10" label="合同号" width="120"></el-table-column>
				<el-table-column prop="name11" label="订单状态" width="100"></el-table-column>
			</el-table>
		</div>

		<div class="inner-pagination-wrapper">
			<el-pagination background layout="prev, pager, next, jumper" :total="1000"></el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	name: 'order-inquire',
	data() {
		return {
			dataForm: {},
			dataTable: [
				{
					name1: '1125458',
					name2: '110214544 - 110216544',
					name3: '2000台',
					name4: '500元',
					name5: 'H2',
					name6: '张艳娇',
					name7: '电信运营商',
					name8: 'KH00001',
					name9: '2021-1-13',
					name10: '155445555',
					name11: '已出库',
				},
			],
		};
	},
	methods: {
		handleClick(data) {
			console.log(data);
		},
	},
};
</script>