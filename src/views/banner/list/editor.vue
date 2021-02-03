<template>
	<div class="banner-editor-view-wrapper">
		<div class="inner-item">
			<div class="inner-container-title">启动页广告</div>

			<div class="editor-item">
				<el-button type="primary" size="small">点击上传</el-button>

				<div class="el-upload__tip">只能上传jpg/png/h5文件，且不超过5M，建议尺寸为750*1334px
					<el-popover placement="right" trigger="click" @show="startPopoverShow" @hide="startPopoverHide">
						<div class="start-sample-popover sample-popover-wrapper">
							<el-carousel height="505px" arrow="never" :autoplay="startAutoplay" :interval="startNum * 1000" loop>
								<el-carousel-item v-for="item in startFileList" :key="item.url">
									<img :src="item.url" alt="">
								</el-carousel-item>
							</el-carousel>
						</div>
						<el-button slot="reference" type="text">示例</el-button>
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
				<el-button type="primary" size="small">点击上传</el-button>

				<div class="el-upload__tip">只能上传jpg/png/h5文件，且不超过5M，建议尺寸为702*290px
					<el-popover placement="right" trigger="click" @show="bannerPopoverShow" @hide="bannerPopoverHide">
						<div class="banner-sample-popover sample-popover-wrapper">
							<el-carousel height="505px" arrow="never" :autoplay="bannerAutoplay" :interval="bannerNum * 1000">
								<el-carousel-item v-for="item in bannerFileList" :key="item.url">
									<img :src="item.url" alt="">
								</el-carousel-item>
							</el-carousel>
						</div>
						<el-button slot="reference" type="text">示例</el-button>
					</el-popover>
				</div>

				<el-upload action="#" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="bannerUploadRemove" :on-change="bannerUploadChange" :auto-upload="false">
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
		};
	},
	created() {
		console.log('banner-editor');
	},
	methods: {
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
	},
};
</script>

<style lang="scss">
.sample-popover-wrapper {
	width: 285px;
	height: 505px;
	background-color: pink;
}

.show-time {
	margin-top: 24px;
	& > span {
		margin-right: 14px;
	}
	.el-input-number .el-input {
		width: 180px;
	}
}
</style>