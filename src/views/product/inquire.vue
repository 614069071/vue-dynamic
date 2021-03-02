<template>
	<div class="product-inquire-view-wrapper view-wrapper">
		<div class="inner-header-wrapper">
			<el-form :model="dataForm" label-width="80px" inline>
				<el-form-item label="设备ID">
					<el-input v-model="dataForm.name1"></el-input>
				</el-form-item>
				<el-form-item label="SN">
					<el-input v-model="dataForm.name2"></el-input>
				</el-form-item>
				<el-form-item label="手机号">
					<el-input v-model="dataForm.name3"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" :loading="inquireLoading" @click="inquireFormSubmit">查询</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="inner-container-wrapper banner-list">
			<el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="name1" label="设备ID" width="100"></el-table-column>
				<el-table-column prop="name2" label="SN" width="100"></el-table-column>
				<el-table-column prop="name3" label="MAC" min-width="160"></el-table-column>
				<el-table-column prop="name4" label="IP地址" min-width="160"></el-table-column>
				<el-table-column prop="name5" label="最后心跳时间" min-width="160"></el-table-column>
				<el-table-column prop="name6" label="绑定时间" min-width="160"></el-table-column>
				<el-table-column prop="name7" label="绑定手机号" width="120"></el-table-column>
				<el-table-column prop="name8" label="状态" width="60"></el-table-column>
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
			inquireLoading: false,
			dataTable: [
				{
					name1: '15265447',
					name2: '17424242',
					name3: '00-E0-4C-1A-7F-15',
					name4: '192.168.8.163',
					name5: '2021/1/13  12:23:15',
					name6: '2021/1/13  12:23:15',
					name7: '18215485544',
					name8: '在线',
				},
			],
		};
	},
	methods: {
		inquireFormSubmit() {
			this.inquireLoading = true;
			setTimeout(() => {
				this.inquireLoading = false;
			}, 2000);
		},
	},
};
</script>