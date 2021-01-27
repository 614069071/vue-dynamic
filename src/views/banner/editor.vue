<template>
	<div class="banner-editor-view-wrapper">
		<div class="inner-header-wrapper"></div>

		<div class="inner-container-wrapper banner-list">
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column prop="name1" label="账号名" width="120"></el-table-column>
				<el-table-column prop="name2" label="姓名" width="120"></el-table-column>
				<el-table-column prop="name3" label="投放地域"></el-table-column>
				<el-table-column prop="name4" label="投放客户"></el-table-column>
				<el-table-column prop="name5" label="投放时段"></el-table-column>
				<el-table-column prop="name6" label="创建时间"></el-table-column>
				<el-table-column label="编辑">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope)" type="text" size="small">编辑</el-button>
						<el-button type="text" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<div class="inner-pagination-wrapper">
			<el-pagination background layout="prev, pager, next, jumper" :total="1000"></el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	name: 'banner-editor',
	data() {
		return {
			tableData: [
				{
					name1: 'admin',
					name2: '张三',
					name3: '123456',
					name4: '',
					name5: '',
					name6: '2121-12-12 22:22:22',
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