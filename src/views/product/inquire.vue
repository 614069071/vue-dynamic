<template>
	<div class="product-inquire-view-wrapper">
		<div class="inner-header-wrapper">
			<el-form :model="dataForm" label-width="80px" inline>
				<el-form-item label="设备ID：">
					<el-input v-model="dataForm.name1"></el-input>
				</el-form-item>
				<el-form-item label="SN：">
					<el-input v-model="dataForm.name2"></el-input>
				</el-form-item>
				<el-form-item label="手机号：">
					<el-input v-model="dataForm.name3"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="inner-container-wrapper banner-list">
			<el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="name1" label="设备ID" width="120"></el-table-column>
				<el-table-column prop="name2" label="SN" width="120"></el-table-column>
				<el-table-column prop="name3" label="MAC"></el-table-column>
				<el-table-column prop="name4" label="IP地址"></el-table-column>
				<el-table-column prop="name5" label="最后心跳时间"></el-table-column>
				<el-table-column prop="name6" label="绑定时间"></el-table-column>
				<el-table-column prop="name7" label="绑定手机号"></el-table-column>
				<el-table-column prop="name8" label="状态"></el-table-column>
			</el-table>
		</div>

		<div class="inner-pagination-wrapper">
			<el-pagination background layout="prev, pager, next, jumper" :total="1000"></el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	name: 'product-inquire',
	data() {
		return {
			dataForm: {},
			dataTable: [
				{
					name1: '15265447',
					name2: '17424242',
					name3: '00-E0-4C-1A-7F-15',
					name4: '20.210.1.124',
					name5: '2021/1/13  12:23:15',
					name6: '2021/1/13  12:23:15',
					name7: '18215485544',
					name8: '在线',
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

<style>
</style>