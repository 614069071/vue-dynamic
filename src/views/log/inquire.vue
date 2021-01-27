<template>
	<div class="log-inquire-view-wrapper">
		<div class="inner-header-wrapper">
			<el-date-picker type="date" placeholder="选择日期"></el-date-picker>
		</div>

		<div class="inner-container-wrapper banner-list">
			<el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column prop="name1" label="编号" width="120"></el-table-column>
				<el-table-column prop="name2" label="用户" width="120"></el-table-column>
				<el-table-column prop="name3" label="IP地址"></el-table-column>
				<el-table-column prop="name4" label="功能模块"></el-table-column>
				<el-table-column prop="name5" label="操作"></el-table-column>
				<el-table-column prop="name6" label="日志摘要"></el-table-column>
				<el-table-column prop="name7" label="日志时间"></el-table-column>
			</el-table>
		</div>

		<div class="inner-pagination-wrapper">
			<el-pagination background layout="prev, pager, next, jumper" :total="1000"></el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	name: 'log-inquire',
	data() {
		return {
			dataTable: [
				{
					name1: '1',
					name2: 'admin',
					name3: '255.255.255.255',
					name4: '运营数据查询',
					name5: '登录',
					name6: '用户账号登录',
					name7: '2021-12-12 21:22:22',
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