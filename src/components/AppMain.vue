<script>
    import axios from 'axios';

    export default {
        name: 'AppMain',
        components: {
        },
        data() {
            return {
                projects: [],
                baseUrlApi: 'http://127.0.0.1:8000/api/',
                baseUrlStorage: 'http://127.0.0.1:8000/storage/'

            }
        },
        created() {
        },
        mounted() {
            // richiamo i projects ogni volta che carico la pagina
            this.getProjects();
        },
        methods: {

            getProjects() {
                axios.get(`${this.baseUrlApi}projects`)
                .then(res => {
                    // console.log(res.data);
                    this.projects = res.data.projects
                })
            },
        }
    }
    
</script>


<template> 

    <h2>Projects:</h2>

    <div class="container">
        <div class="row g-3">
            <div class="col-6" v-for="(elem, index) in projects" :key="index">

                <div class="card">
                  <img class="card-img-top" :src="`${baseUrlStorage}${elem.cover_img}`" :alt="`Immagine ${elem.slug}`">
                  <div class="card-body">
                    <h4 class="card-title">{{ elem.title }}</h4>
                    <p class="card-text text-">{{elem.description}}</p>
                  </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>