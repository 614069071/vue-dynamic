<template>
	<div class="error-404-view-wrapper view-wrapper">
		<div class="error-404-inner-wrapper">
			<div class="error-404-main-wrapper">
				<div class="error-404-img-wrapper"></div>

				<p class="error-404-mes-wrapper">抱歉，你访问的页面不存在</p>

				<el-button type="primary" @click="$router.push('/')">返回首页</el-button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.error-404-view-wrapper {
	height: 100%;
}

.error-404-inner-wrapper {
	text-align: center;
	margin: 0 auto;
	height: 100%;
	min-height: 570px;
	background-color: #fff;
	position: relative;
}

.error-404-main-wrapper {
	width: 218px;
	height: 326px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.error-404-img-wrapper {
	width: 218px;
	height: 212px;
	background-image: url(../../assets/images/e4043.png),
		url(../../assets/images/e4042.png), url(../../assets/images/e4041.png);
	background-position: -6px 6px, -10px 0, 5px 0;
	background-size: 218px 212px;
	background-repeat: no-repeat;
	animation: move 0.8s forwards;
}

@keyframes move {
	0% {
		background-position: -6px 6px, -10px 0, 5px 0;
	}

	100% {
		background-position: 0 0, 0 0, 0 0;
	}
}

.error-404-mes-wrapper {
	color: var(--font-color-1);
	height: 20px;
	line-height: 20px;
	margin: 30px 0 24px 0;
}
</style>
