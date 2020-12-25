<template>
	<div>
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
