<script>
    import axios from 'axios';
    import CardProject from '../components/CardProject.vue';

    export default {
        name: 'AppMain',
        components: {
            CardProject,
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

    <div class="container pb-5">
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

            <CardProject v-for="(elem, index) in projects.data" :key="index" :infoProject="elem"/>
            
        </div>
    </div>

</template>

<style lang="scss" scoped>

    li {


        &.active {
            button {
                background-color: green;
                color: white;
            }
            
        }
    }

    button {
        padding: 1px 5px;
    }

</style>