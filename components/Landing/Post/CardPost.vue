<template>
<!-- Start Card -->
<div class="card text-start d-flex ">
    <div class="picture">
        <img v-if=image :src=image class="card-img-top" v-bind:alt="title" @error="gagal">
    </div>
    <div class="card-header">
        <small class="posttanggal mb-2 d-block"> {{ date }}</small>
            <a v-bind:href=title class="card-title">{{ title }}</a>
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

<style lang="scss">


/* Post */
.card {
    background-color: white;
    color: rgba($bg-text, $alpha: .8);

    border-radius: 0 !important;
	border-width: 0;
    padding-bottom: 1rem  !important;
    cursor: pointer;
    transition: .2s;
    font-size: 1rem;
    box-shadow: 0px 3px 0px #efefef;
    overflow: hidden;
    
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

    .card-img-top { border-radius: 0 ; }
    .card-title {
        color: inherit;
        padding: unset;
        font-size: 1em !important;
        line-height: 1.3em !important;
        font-weight: 600 !important;
        margin: 0 !important;
        
        &:hover {color: inherit}

    }

    &:hover{
        background-color: $bg-green;
        color:white !important;
        // font-size: 1.2rem;
    }
    
    .picture {
        overflow: hidden ;
        
        img{
            filter: grayscale(.3);
            height: 100%;
            transition: all .5s;

            &:hover {
                filter: unset;
                transform: rotate(25deg);
                transform: scale(1.2);
            }
        }
    }

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
</style>