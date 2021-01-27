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

		<el-dialog title="账号管理" :visible.sync="visible" width="500px">
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
		handleClick(data) {
			this.visible = true;
			console.log(data);
		},
		accountCancel() {
			this.visible = false;
		},
		accountSubmit() {
			this.visible = false;
		},
	},
};
</script>

<style>
</style>