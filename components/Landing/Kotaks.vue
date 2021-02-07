<!-- Menampilkan Kotak-kotak ijo -->
<template>
	<div class="container">

		<div class="row d-flex justify-content-start ">
			<div class="flex justify-content-start" id="kotak">

				<!-- Kotak 1 -->
				<div class="col-md-3  kotak" 
					v-for="(kotak, index) in kotaks" :key="kotak.judul" 
					v-bind:class="[`kotak${index+1}`]"
					v-bind:style="[`margin-top: -${(index+1) * 2}vh !important`]"	
				> 
					<h1>{{ kotak.judul }}</h1>
					<p>
						{{ kotak.penjelasan }}
					</p>
				</div>


			</div>
		</div>
	
	</div>
</template>

<script>
export default {
	data() {
		return {
			kotaks: [
				{
					judul: 'Selalu ingat 3M', 
					penjelasan:'Mari bersama kita putus mata rantai, dengan disiplin menerapkan protokol kesehatan',
					icon: '', color: ''
				},
				{
					judul: 'Memakai Masker ', 
					penjelasan:'Mengenakan masker di manapun dan kapanpun, Pakailah masker dengan benar itu akan melindungi diri sendiri dan orang lain',
					icon: '', color: ''},
				{
					judul: 'Menjaga Jarak', 
					penjelasan:'Menjaga jarak dalam interaksi minimal 1 meter, Jarak yang terlalu dekat memungkinkan menghirup droplet dari hidung dan mulut orang lain.',
					icon: '', color: ''},
				{
					judul: 'Mencuci Tangan ', 
					penjelasan:'mencuci tangan dengan air dan sabun setelah melakukan aktifitas. Gunakan handsanitizer. Jika tidak menemukan air',
					icon: '', color: ''},
				
			]
		}
	},
}
</script>

<style lang="scss">
#kotak {
	display: flex;
	margin-top: -1vh;
	z-index: 1;
	width: 100% !important;
	color: #fff;
	overflow: hidden;
	height: 230px;
	font-size: 1.2rem;

	.kotak {
		padding: 2rem;
		flex-basis: 25%;
		transition: background .1s, font .5s;


		&:hover {
			background-color: $bg-text;
			color: $bg-orange;
			height: 120%;
			cursor: pointer;
			font-size: 1.4em;
		}
	}
}

.kotak h1 {
	font-size: 1em;

	border-bottom: 1px solid rgba(255,255,255,.2);
	padding-bottom: 0.5rem;
	margin-bottom: 0.8rem;
}
.kotak p{
	font-size: .9rem;
	font-weight: 200;
	padding: 0;
	margin: 0;
	color:#f8f9fa;
	opacity: .8;
}

/* Kotak 1 - 4 */
.kotak1 {
	background-color: #009970;
}
.kotak2 {
	background-color: #008F69;	
}
.kotak3 {
	background-color:#018662;
}
.kotak4 {
	background-color:#017C5B;
}
</style>