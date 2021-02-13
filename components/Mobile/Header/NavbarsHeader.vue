<template>

<!-- Mobile View -->
<div id="x" class="sticky-top d-flex justify-content-between alig-items-center p-3">
	<div> <fa :icon="['fas', 'bars']" fill="green" /></div>
	<a href="/">
		<fa :icon="['fas', 'leaf']" fill="green" color="green" />
	</a>
	<div> <fa :icon="['fas', 'search']" fill="green"  /></div>
</div>


</template>

<style lang="scss" scoped>
div#x {
	background-color: #fff;
	color: #36343a;
	border-bottom: 1px solid #efefef;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}
</style>