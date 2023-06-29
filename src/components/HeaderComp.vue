<script>

    export default {
        name: 'HeaderComp',
    }
    
</script>


<template>

    <header>
        <div class="container">
            <nav>
                <a class="nav-logo" href="#">
                    Portfolio
                </a>
                <ul>
                    <li class="nav-li">
                        <router-link :to="{name: 'home'}">home</router-link>
                    </li>
                    <li class="nav-li">
                        <router-link :to="{name: 'projects'}">projects</router-link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    </header>

</template>

<style lang="scss" scoped>

</style>