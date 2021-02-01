<template>
<!-- Start Card -->
<div class="card text-start d-flex ">
    <div class="picture">
        <img v-if=image :src=image class="card-img-top" v-bind:alt="title" @error="gagal">
    </div>
    <div class="card-header">
        <small class="posttanggal mb-2 d-block"> {{ date }}</small>
        <!-- <div class=""> -->
            <a v-bind:href=title class="card-title">{{ title }}</a>
        <!-- </div> -->
    </div>
    <div class="card-body text-secondary">{{ description }}</div>
    
</div>
<!-- End Card -->
</template>

<script>

export default {
    props: [
        'title', 
        'image',
        'date',
        'description'
    ],
    methods: {
        gagal(event){
            event.target.src = require('@/assets/img/spin.svg')
        }
    },
}
</script>

<style>

/* Post */
.post {
	break-inside: avoid;
	margin-bottom: 1rem;
}
.card {
	border-radius: 0 !important;
	background-color: #fff;
	border-width: 0;
    padding-bottom: 1rem  !important;
    cursor: pointer;
    transition: .2s;
    font-size: 1rem;
}
.card:hover{
    background-color: var(--warna-hijau);
    color:white;
    font-size: 1.2rem;

}
.card-title {
	padding: 0;
	font-size: 1em !important;
	line-height: 1.3em !important;
	font-weight: 500 !important;
	margin: 0 !important;
}
.card-title:hover {color: inherit}

.card-header,
.card-body {
	padding-left:  .9rem !important;
	padding-right:  .9rem !important;
}
.card-header{
	background-color: unset;
	border-width: 0;

	padding-top: 0.5rem !important;
	padding-bottom: 0.5rem !important;
}
.card-body {
	padding-bottom: 0 !important;
	padding-top: 0 !important;
	font-size: .9rem;
	line-height: 1.4rem;
	white-space: pre-wrap;
}
.card-img, .card-img-top { border-width: 0; }

.card-body,
.posttanggal
{
	color: rgba(0,0,0,.5) !important;
}
.posttanggal {font-size: .7rem;}

.picture {
	background-color: #efefef;
	width: 100%;
}
.picture img {
	height: 100%;
}
</style>