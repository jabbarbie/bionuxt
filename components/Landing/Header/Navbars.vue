<template>
<div>

<nav v-if="$device.isDesktopOrTablet" class="navbar navbar-expand-lg navbar-light p-0 pt-3 fixed-top navbar" :class="{'ubah-scroll': tampilkanNavbar}" >
  <div class="container bg-white p-0 " id="nav-container">
    <a class="navbar-brand bg-primary" href="/">{{ title }} </a>

		<div>
		<!-- Burger -->
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

		<!-- Menu -->
    <div class="collapse navbar-collapse" id="navbarMenu">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" :href="link">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" :href="[`${link}#abouts`]">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="[`${link}#posts`]">Article</a>
        </li>

				<li class="nav-item">
					<button class="nav-link">
						{{ tanggal }}
					</button>
				</li>
			</ul>

			</div>

 
    
		</div>
  </div>
</nav>

<!-- Mobile View -->
<nav v-else class="fixed-top d-flex justify-content-between alig-items-center p-3" id="mobile-header">
	<div> <fa :icon="['fas', 'bars']" fill="green"  color="white" /></div>
	<div> <fa :icon="['fas', 'leaf']" fill="green"  color="white" /></div>
	<div> <fa :icon="['fas', 'search']" fill="green"  color="white" /></div>
</nav>
</div>


</template>

<script>
export default {
	props: ['landing'],
	data() {
        return {
					link: '',
					title: 'PS',
					tampilkanNavbar: false,
					kursorTerakhir: 0,
					tanggal: '0',
					tombolUp: false,

        }
        
    },
    mounted() {
			window.addEventListener('scroll', this.onScroll)
			this.setTanggal()
			this.setLink()
    },
    methods: {
        onScroll(){
            const kursorSaatIni = window.pageYOffset || document.documentElement.scrollTop
						if (kursorSaatIni < 180) {
						this.tampilkanNavbar = false
						this.tombolUp = false
						this.title = 'PS'
						return 
			}
			
            // Update kursor terakhir jika kursur saat ini lebih kecil
			this.tombolUp = true
            this.tampilkanNavbar = true

			this.kursorTerakhir = kursorSaatIni
			this.title = 'Probio System'
			this.$emit('tombolup', true)
		},
		setTanggal(){
			const Hari = ['Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu','Minggu']
			const Bulan = ['Januari', 'Februari', 'Maret', 'April','Mei','Juni','Juli','Agustus','Oktober','November','Desember']
			const t = new Date();

			this.tanggal = Hari[parseInt(t.getDay())-1] + ', ' + t.getDay() + " " +  Bulan[t.getUTCMonth()] + " " 
		
		},
		setLink(){
			if (! this.$props.landing){
				this.link = "/"
			}
		}
    },
}
</script>

<style lang="scss" scoped>
#mobile-header {
	font-size: 1.2em;
	width: 100vw;


}
// button {border: none; background: $bg-primary;}
a.nav-link{
	font-weight: 500;

	padding: .5rem .8rem !important;
	border-radius: 10px;
	margin-right: 0px;

	&:hover{
		color:$bg-primary;
	}
}
nav {
	z-index: 10 !important;
	transition: .2s;
	
	#nav-container {
		padding-right: 1rem !important;

		
		.navbar-brand {
			font-size: 1.7rem !important;
			padding: 0.7rem 1.5rem !important;
			font-weight: 600;

			&:hover {
				background-color: $bg-hover !important;
			}
		}
	
	}

}

ul.navbar-nav {
	font-size: .9em;
	ul.navbar-nav li { padding: 0 }

	li {

		&:last-child {
			
			button{
				border: .2rem solid $bg-primary;
				background-color: $bg-primary;
				color: white ;
				padding: .4rem 1.3rem !important;
				// padding-left: 1.3rem !important;
				// padding-right: 1.3rem !important;
				border-radius: 50px;
				margin-left: 1rem;

				&:hover {
					background-color: #fff;
					color: $bg-primary;
					border-color: $bg-primary;
				}
			}
			
		}
	}
}


a.nav-link:hover{
	/* background-color: $bg-primary; */
	/* color: #fff !important; */
	color: $bg-primary !important;
}

.ubah-scroll {
	background-color: white;
	padding-top: 0 !important;
	box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
	
}

</style>