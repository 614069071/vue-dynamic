<template>
	<div class="banner-list-view-wrapper">
		<div class="inner-header-wrapper">
			<el-form inline label-width="80px">
				<el-form-item label="快速查询">
					<el-input placeholder="请输入关键字搜索" suffix-icon="el-icon-search"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary">新增</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="inner-container-wrapper banner-list">
			<div class="inner-container-title">广告管理列表</div>
			<el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
				<el-table-column prop="name1" label="账号名" width="120"></el-table-column>
				<el-table-column prop="name2" label="姓名" width="120"></el-table-column>
				<el-table-column prop="name3" label="投放地域"></el-table-column>
				<el-table-column prop="name4" label="投放客户"></el-table-column>
				<el-table-column prop="name5" label="投放时段"></el-table-column>
				<el-table-column prop="name6" label="创建时间"></el-table-column>
				<el-table-column label="编辑">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope)" plain type="primary" size="mini">编辑</el-button>
						<el-button size="mini">删除</el-button>
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
	name: 'banner-list',
	data() {
		return {
			dataTable: [
				{
					name1: 'admin',
					name2: '张三',
					name3: '123456',
					name4: '小小明',
					name5: '2021-01-11 至 2021-11-11',
					name6: '2121-12-12 22:22:22',
				},
			],
		};
	},
	methods: {
		handleClick(data) {
			this.$router.push('/banner/editor');

			console.log(data);
		},
	},
};
</script>

<style>
</style>