<template>
    <div class="container">
        <h1>About  {{ id }}</h1>

        <fa icon="home" />
    </div>
</template>

<script>
export default {
    layout: 'blog',
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        return  {
            id: params.id
        }
    },
}
</script>