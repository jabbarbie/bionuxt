<template>
<nav class="navbar navbar-expand-lg navbar-light p-0 pt-3 fixed-top navbar" :class="{'ubah-scroll': tampilkanNavbar}" >
  <div class="container bg-white p-0 " id="nav-container">
    <a class="navbar-brand" href="#">Probio</a>

		<div>
		<!-- Burger -->
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

		<!-- Menu -->
    <div class="collapse navbar-collapse" id="navbarMenu">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#abouts">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#posts">Article</a>
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

</template>

<script>
export default {

	data() {
        return {
            tampilkanNavbar: false,
			kursorTerakhir: 0,
			tanggal: '0',
			tombolUp: false
        }
        
    },
    mounted() {
		window.addEventListener('scroll', this.onScroll)
		this.setTanggal()
		
    },
    methods: {
        onScroll(){
            const kursorSaatIni = window.pageYOffset || document.documentElement.scrollTop
			if (kursorSaatIni < 180) {
				this.tampilkanNavbar = false
				this.tombolUp = false
				return 
			}
			
            // Update kursor terakhir jika kursur saat ini lebih kecil
			this.tombolUp = true
            this.tampilkanNavbar = true

			this.kursorTerakhir = kursorSaatIni
			this.$emit('tombolup', true)
		},
		setTanggal(){
			const Hari = ['Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu','Minggu']
			const Bulan = ['Januari', 'Februari', 'Maret', 'April','Mei','Juni','Juli','Agustus','Oktober','November','Desember']
			const t = new Date();

			this.tanggal = Hari[parseInt(t.getDay())-1] + ', ' + t.getDay() + " " +  Bulan[t.getUTCMonth()] + " " 
		
		}
    },
}
</script>

<style>
nav {
	z-index: 10 !important;
	transition: .2s;
}
#nav-container {
	padding-right: 1rem !important;
}
.navbar-brand {
	background-color: var(--warna-hijau);
	color: #fff !important;
	font-size: 1.7rem !important;
	padding: 0.7rem 1.5rem !important;
	font-weight: 600;
}

a.active {color:var(--warna-hijau) !important;}
ul.navbar-nav {
	font-size: .9em;
}
ul.navbar-nav li { padding: 0 }

a.nav-link{
	color: var(--text-gray);
	font-weight: 500;

	padding: .5rem .8rem !important;
	border-radius: 10px;
	margin-right: 0px;
}

a.nav-link:hover{
	/* background-color: var(--warna-hijau); */
	/* color: #fff !important; */
	color: var(--warna-hijau) !important;
}

button.nav-link {
	border-width: 0;
	background-color: var(--warna-hijau);
	color: white !important;
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	border-radius: 50px;
	margin-left: 1rem;
}

.ubah-scroll {
	background-color: #fff;
	padding-top: 0 !important;
	box-shadow: 0px 2px 15px rgb(0 0 0 / 10%);
	
}

.btn-up {
	transition: .2s;
}
</style>