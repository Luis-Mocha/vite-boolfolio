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
    <div class="back-g">
        <div class="page-hero">
            <div class="jumbotron p-5 mb-4 rounded-3">
                <div class="container py-5">
            
                    <h1 class="display-5 fw-bold type" style="--n:15; width: fit-content">
                        Hello, I'm Luis
                    </h1>

                </div>
            </div>
            
            <div class="content">
                <div class="container">
                    <p>My name is Luis Mocha, lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus, enim sunt ipsam ab voluptates pariatur consectetur. Beatae autem quis, illum ea debitis exercitationem esse, perferendis eius non iste est?
                    Laboriosam facilis voluptates iure repellat quisquam ut soluta rem rerum ipsum qui suscipit accusantium, veritatis cum laudantium quas, veniam libero culpa et ad sit. Provident perspiciatis nihil non eius? Dolor?
                    Nulla amet accusantium consequatur perspiciatis possimus, placeat laborum fugiat sed! Eaque quasi quidem amet aliquam quae accusamus earum pariatur sunt temporibus? Commodi, natus! Odio numquam incidunt quae quibusdam. Placeat, laudantium.</p>
                </div>
            </div>
        </div>
    </div>

    

</template>

<style lang="scss" scoped>

.back-g {
    background: #159957;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #155799, #159957);
    background: linear-gradient(to right, #155799, #159957);


    color: white;
}

    .page-hero {
        height: calc(100vh - 90px);

        .type {
            font-family: monospace;
            color:#0000;
            background:
            linear-gradient(-90deg,#ffffff 5px,#0000 0) 10px 0,
            linear-gradient(#ffffff 0 0) 0 0;
            background-size:calc(var(--n)*1ch) 200%;
            -webkit-background-clip:padding-box,text;
            background-clip:padding-box,text;
            background-repeat:no-repeat;
            animation: 
            b .7s infinite steps(1),   
            t calc(var(--n)*0.3s) steps(var(--n)) forwards;
            }
            @keyframes t{
                from {background-size:0 200%}
            }
            @keyframes b{
                50% {background-position:0 -100%,0 0}
        }
    }

</style>