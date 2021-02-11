<template>

<div class="container py-5 text-center" :id="$device.isMobile ? 'mobileHeaderPost':''">
    <div class="row d-flex justify-content-center">
        <div class="col-lg-8 col-sm-12 col-md-12">
            <h1 class="mb-3">Posts</h1>
            <p class="text-secondary" >
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
        </div>
    </div>

    <!-- Button Latest / Popular -->
    <div class="row  d-flex justify-content-center ">
        <div class="d-flex justify-content between">
            <button class="btn btn-primary btn-sm rounded-pill w-100">Latest</button> <span class="mx-1">  </span>
            <button class="btn btn-light btn-sm rounded-pill w-100 ">Popular</button>
        </div>
    </div>
</div>

</template>

<style lang="scss">
    #mobileHeaderPost {
        h1 { font-weight: bold; }
    }
</style>


