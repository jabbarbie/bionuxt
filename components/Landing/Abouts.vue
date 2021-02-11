<template>
<div>

<div id="abouts" class="mb-5"></div>

<section :id="[$device.isMobile?'mobileAbout':'about']" class="d-flex justify-content-center align-items-center py-5">
	<div class="container">

		<div class="row d-flex justify-content-center ">
			<div class="col-md-5 text-end text-right">
				<h1>Probio System</h1>
				<h2>Ini mau diisi apa</h2>

				<h5 class="mt-4">
					Minus nihil illo voluptate impedit sit adipisci assumenda libero illum ex harum dolorum iste dolore dolor nostrum excepturi.
				</h5>
			</div>


			<div class="col-md-5">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					<br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
		
		</div>
	</div>

</section>
</div>

</template>

<script>
export default {
	
}
</script>

<style lang="scss">
#mobileAbout {
	text-align: center ;

	div.row {
		div:first-child{
			text-align: center !important;
		}
	}
	h1 {
		font-weight: bold;
	}
	h2 {
		display: none;
	}
}
#about {
	margin: 2rem 0;
}
#about h1 {
	font-size: 3rem;
	line-height: 0;
	margin-top: 1.5rem;
}
#about h2 {
	font-weight: normal;
}
#about h2,
#about h5{
}
</style>