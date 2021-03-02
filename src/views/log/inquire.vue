<template>
	<div class="log-inquire-view-wrapper view-wrapper">
		<div class="inner-header-wrapper">
			<el-form inline label-width="80px" :model="inquireFormData">
				<el-form-item label="日期：">
					<el-date-picker type="date" placeholder="选择日期" v-model="inquireFormData.name1"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div class="inner-container-wrapper banner-list">
			<el-table ref="multipleTable" :data="dataTable" tooltip-effect="dark" style="width: 100%" @selection-change="selectionChange">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column prop="name1" label="编号" width="120"></el-table-column>
				<el-table-column prop="name2" label="用户" width="120"></el-table-column>
				<el-table-column prop="name3" label="IP地址"></el-table-column>
				<el-table-column prop="name4" label="功能模块"></el-table-column>
				<el-table-column prop="name5" label="操作"></el-table-column>
				<el-table-column prop="name6" label="日志摘要"></el-table-column>
				<el-table-column prop="name7" label="日志时间" min-width="160"></el-table-column>
			</el-table>
		</div>

		<div class="inner-pagination-wrapper">
			<el-button size="mini" plain @click="deleteCheck">删除</el-button>
			<el-pagination background layout="prev,pager,next,jumper" :total="1000"></el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	name: 'log-inquire',
	data() {
		return {
			inquireFormData: {},
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
			selectColle: [],
		};
	},
	methods: {
		selectionChange(v) {
			this.selectColle = v;
		},
		deleteCheck() {
			this.selectColle.length &&
				this.$confirm('确定删除？')
					.then(() => {
						// 删除成功
						console.log(this.selectColle);
					})
					.catch(() => {
						// 取消删除
						console.log('取消删除');
					});
		},
	},
};
</script>

<style scoped>
.log-inquire-view-wrapper .inner-pagination-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>