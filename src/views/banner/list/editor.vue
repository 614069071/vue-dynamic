<template>
	<div class="banner-editor-view-wrapper">
		<div class="banner-editor-content view-wrapper">
			<div class="inner-item">
				<div class="inner-container-title">启动页广告</div>

				<div class="editor-item">
					<!-- <el-button type="primary" size="small">点击上传</el-button> -->

					<div class="la-upload-tip">只能上传jpg/png/h5文件，且不超过5M，建议尺寸为750*1334px
						<el-popover placement="right" trigger="click" @show="startPopoverShow" @hide="startPopoverHide">
							<div class="start-sample-popover sample-popover-wrapper">
								<el-carousel height="505px" arrow="never" :autoplay="startAutoplay" :interval="startNum * 1000" loop>
									<el-carousel-item v-for="item in startFileList" :key="item.url">
										<img :src="item.url" alt="">
									</el-carousel-item>
								</el-carousel>
							</div>
							<button class="la-upload-popover-btn" slot="reference">示例</button>
						</el-popover>
					</div>

					<el-upload action="#" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="startUploadRemove" :on-change="startUploadChange" :auto-upload="false" :file-list="startFileList">
						<i class="el-icon-plus"></i>
					</el-upload>

					<div class="start-show-time show-time">
						<span>显示时长(s)</span>
						<el-input-number v-model="startNum" controls-position="right" :min="1" :max="10"></el-input-number>
					</div>
				</div>
			</div>
			<div class="inner-item">
				<div class="inner-container-title">Banner广告</div>

				<div class="editor-item">
					<!-- <el-button type="primary" size="small">点击上传</el-button> -->

					<div class="la-upload-tip">只能上传jpg/png/h5文件，且不超过5M，建议尺寸为702*290px
						<el-popover placement="right" trigger="click" @show="bannerPopoverShow" @hide="bannerPopoverHide">
							<div class="banner-sample-popover sample-popover-wrapper">
								<el-carousel height="505px" arrow="never" :autoplay="bannerAutoplay" :interval="bannerNum * 1000">
									<el-carousel-item v-for="item in bannerFileList" :key="item.url">
										<img :src="item.url" alt="">
									</el-carousel-item>
								</el-carousel>
							</div>
							<button class="la-upload-popover-btn" slot="reference">示例</button>
						</el-popover>
					</div>

					<el-upload action="#" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="bannerUploadRemove" :on-change="bannerUploadChange" :auto-upload="false" :http-request="test">
						<i class="el-icon-plus"></i>
					</el-upload>

					<div class="banner-show-time show-time">
						<span>显示时长(s)</span>
						<el-input-number v-model="bannerNum" controls-position="right" :min="1" :max="10"></el-input-number>
					</div>
				</div>
			</div>

			<div class="inner-item">
				<div class="inner-container-title">投放范围</div>

				<el-form ref="put_form" :model="putFormData" inline label-width="70px">
					<el-form-item label="选择订单">
						<el-select v-model="putFormData.name1" placeholder="请选择订单">
							<el-option value="1" label="123456"></el-option>
							<el-option value="2" label="654321"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择地域">
						<el-select v-model="putFormData.name2" placeholder="请选择地域">
							<el-option value="1" label="广东"></el-option>
							<el-option value="2" label="湖北"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="选择日期">
						<el-date-picker v-model="putFormData.name3" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
					</el-form-item>

					<el-form-item label="选择平台">
						<el-select v-model="putFormData.name4" placeholder="请选择平台">
							<el-option value="IOS" label="IOS"></el-option>
							<el-option value="Android" label="Android"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
			</div>
		</div>

		<div class="save-wrapper">
			<el-button type="primary" @click="submit">保存</el-button>
		</div>

		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="previewSrc" alt="">
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'banner-editor',
	data() {
		return {
			startNum: 1,
			startAutoplay: false,
			startFileList: [],
			bannerNum: 1,
			bannerAutoplay: false,
			bannerFileList: [],
			previewSrc: '',
			dialogVisible: false,
			putFormData: {},
		};
	},
	created() {
		console.log('banner-editor');
	},
	methods: {
		test() {
			console.log('ssssss');
		},
		handlePictureCardPreview(file) {
			this.previewSrc = file.url;
			this.dialogVisible = true;
		},
		startPopoverShow() {
			console.log('startPopoverShow');
			this.startAutoplay = true;
		},
		startPopoverHide() {
			console.log('startPopoverHide');
			this.startAutoplay = false;
		},
		startUploadChange(file, files) {
			console.log(file, files);
			this.startFileList = files;
		},
		startUploadRemove(file, files) {
			console.log(file, files, 'handleRemove');
			this.startFileList = files;
		},
		bannerPopoverShow() {
			console.log('bannerPopoverShow');
			this.bannerAutoplay = true;
		},
		bannerPopoverHide() {
			console.log('bannerPopoverHide');
			this.bannerAutoplay = false;
		},
		bannerUploadChange(file, files) {
			console.log(file, files);
			this.bannerFileList = files;
		},
		bannerUploadRemove(file, files) {
			console.log(file, files, 'handleRemove');
			this.bannerFileList = files;
		},
		submit() {
			const form = this.$refs.put_form;
			console.log(form.model);
		},
	},
};
</script>

<style lang="scss">
.banner-editor-view-wrapper {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.banner-editor-content {
		flex: 1;
	}
}
.la-upload-tip {
	font-size: 12px;
	height: 31px;
	line-height: 26px;
	color: var(--font-color);
	.la-upload-popover-btn {
		color: var(--default-color);
		cursor: pointer;
		font-size: 14px;
	}
}
.sample-popover-wrapper {
	width: 285px;
	height: 505px;
	background-color: pink;
}

.show-time {
	margin-top: 24px;
	& > span {
		margin-right: 14px;
		color: var(--font-color);
		font-size: 14px;
	}
	.el-input-number .el-input {
		width: 180px;
	}
}

.save-wrapper {
	height: 56px;
	line-height: 56px;
	text-align: center;
	background-color: #fff;
	.el-button {
		width: 98px;
	}
}
</style>