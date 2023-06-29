<script>

    export default {
        name: 'AppHome',
        components: {

        },
        data() {
            return {
            }
        },
    }
</script>

<template>

    <h1 class="text-center">
        Welcome
    </h1>

</template>

<style lang="scss" scoped>

    li {
        list-style-type: none;


        &.active {
            button {
                background-color: green;
                color: white;
            }
            
        }
    }

</style>