<template>
	<div class="system-account-view-wrapper view-wrapper">
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
						<el-button @click="formEditorClick(scope.$index,scope.row)" plain type="primary" size="mini">编辑</el-button>
						<el-button size="mini" @click="formDeleteClick(scope.$index,scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<div class="inner-pagination-wrapper">
			<el-pagination background layout="prev, pager, next, jumper" :total="1000"></el-pagination>
		</div>

		<el-dialog title="编辑账号" :visible.sync="visible" width="576px">
			<el-form label-width="100px" :model="accountFormData">
				<el-form-item label="账号：">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="密码：">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="姓名：">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="绑定邮箱：">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="权限设定：">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="权限设定：">
					<el-input></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="accountCancel">取 消</el-button>
				<el-button type="primary" @click="accountSubmit">确 定</el-button>
			</span>
		</el-dialog>
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
			accountFormData: {},
			visible: false,
		};
	},
	methods: {
		accountCancel() {
			this.visible = false;
		},
		accountSubmit() {
			this.visible = false;
		},
		formEditorClick(index, data) {
			this.visible = true;

			console.log(index, data);
		},
		formDeleteClick(index, data) {
			this.$confirm('确定删除？')
				.then(() => {
					// 删除成功
				})
				.catch(() => {
					// 取消删除
				});
		},
	},
};
</script>

<style>
</style>