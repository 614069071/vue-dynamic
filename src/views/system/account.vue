<template>
	<div class="system-account-view-wrapper">
		<div class="inner-header-wrapper">
			<el-button type="primary" size="mini">添加</el-button>
			<el-input placeholder="请输入内容" size="">
				<el-button slot="append" icon="el-icon-search"></el-button>
			</el-input>
		</div>

		<div class="inner-container-wrapper banner-list">
			<el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column prop="name1" label="账号名" width="120"></el-table-column>
				<el-table-column prop="name2" label="姓名" width="120"></el-table-column>
				<el-table-column prop="name3" label="修改密码"></el-table-column>
				<el-table-column prop="name4" label="是否锁定"></el-table-column>
				<el-table-column prop="name5" label="角色"></el-table-column>
				<el-table-column prop="name6" label="创建时间"></el-table-column>
				<el-table-column label="编辑">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope)" type="primary" size="mini">编辑</el-button>
						<el-button type="danger" size="mini">删除</el-button>
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
	name: 'system-account',
	data() {
		return {
			dataTable: [
				{
					name1: 'admin',
					name2: '张三',
					name3: '123456',
					name4: '是',
					name5: '产品经理',
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