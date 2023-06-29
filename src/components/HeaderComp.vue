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
    nav {
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Cormorant Garamond', serif;

    .nav-logo {
    text-transform: uppercase;
    margin-right: 25px;
    line-height: 1;
    font-size: 30px;
    font-weight: 800;
    }

    ul {
    width: 70%;
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
        .nav-li {
            text-transform: uppercase;
            position: relative;
            margin-right: 40px;

            a {
                padding: 5px 0;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-between;
                font-weight: 800;
            }
        }
    }

}

/* Effetti hover di .nav-li */
.nav-li::before, .nav-li::after {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 0;
    transition: 0.8s;
}
.nav-li::before {
    right: 0;
    background: linear-gradient(90deg,#7eb09b 0%, #385f50 80%);
}
.nav-li::after {
    content: '';
    display: block;
    background: linear-gradient(270deg,#7eb09b 0%, #385f50 80%);
}
.nav-li:hover::before, .nav-li:hover::after {
    width: 100%;
}

.router-link-active::after {
    // text-decoration: double;
    content: '>';
    position: absolute;
    left: -12px;
}

</style>