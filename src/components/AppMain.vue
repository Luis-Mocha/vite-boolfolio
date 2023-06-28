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
            this.getProjects(1);
        },
        methods: {

            getProjects(projectApiPage) {
                axios.get(`${this.baseUrlApi}projects`, {
                    params: {
                        page: projectApiPage
                    }
                })
                .then(res => {
                    // console.log(res.data.projects);
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

            <!-- paginazione -->
            <ul class="d-flex">
                <span class="me-2">Pagina:</span>

                <!-- bottone first page -->
                <button v-if="projects.current_page != 1" @click="getProjects(1)">
                    <i class="fa-solid fa-backward"></i>
                </button>
                <!-- bottone prev -->
                <button  v-if="projects.prev_page_url"  @click="getProjects(projects.current_page - 1)">
                    <i class="fa-solid fa-caret-left"></i>
                </button>

                <li v-for="(elem, index) in projects.last_page" :key="index" :class="(projects.current_page === elem) ?'active' : '' ">
                    <button @click="getProjects(elem)">
                        {{ elem }}
                    </button>
                </li>

                <!-- bottone next -->
                <button v-if="projects.next_page_url" @click="getProjects(projects.current_page + 1)">
                    <i class="fa-solid fa-caret-right"></i>
                </button>
                <!-- bottone last page -->
                <button v-if="projects.current_page != projects.last_page" @click="getProjects(projects.last_page)">
                    <i class="fa-solid fa-forward"></i>
                </button>
            </ul>

            <div class="col-6" v-for="(elem, index) in projects.data" :key="index">

                <div class="card">
                  <img class="card-img-top" :src="`${baseUrlStorage}${elem.cover_img}`" :alt="`Immagine ${elem.slug}`">
                  <div class="card-body">
                    <h4 class="card-title">{{ elem.title }}</h4>
                    <p class="card-text">{{elem.description}}</p>

                    <div v-if="elem.type">
                        <p class="card-text"><strong>Tipologia:</strong> {{elem.type.name}}</p>
                    </div>

                    <div v-if="elem.technologies.length !== 0">
                        <strong>Tecnoloogie utilizzate:</strong>
                        <ul>
                            <li v-for="(subElem, index) in elem.technologies" :key="index">
                                {{ subElem.name }}
                            </li>
                        </ul>
                    </div>
                    

                  </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

    .card-img-top {
        height: 300px;
        object-fit: cover;
    }

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