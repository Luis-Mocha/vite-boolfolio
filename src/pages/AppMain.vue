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
                // baseUrlStorage: 'http://127.0.0.1:8000/storage/',
                types: null,
                selectedType: null,

            }
        },
        created() {
        },
        mounted() {
            // richiamo i projects ogni volta che carico la pagina
            this.getProjects(1);
            this.getTypes();
        },
        methods: {

            getProjects(projectApiPage) {

                const params = {
                    page: projectApiPage
                }

                if(this.selectedType !== 'all') {
                    params.type_id = this.selectedType
                }

                axios.get(`${this.baseUrlApi}projects`, { params })
                .then(res => {
                    console.log(res.data.projects);
                    this.projects = res.data.projects
                })
            },

            getTypes() {
                axios.get(`${this.baseUrlApi}types`)
                .then(res => {
                    // console.log(res.data);
                    this.types = res.data.types;
                })
            },

            typeFilter() {
                this.selectedType = document.getElementById("type-filter").value;
                this.getProjects(1);
            }
        }
    }
    
</script>


<template> 


    <div class="container pb-5">

        <div class="mb-4 filter-section p-3">
            <label for="" class="form-label">Type filter:</label>
            <select class="form-select form-select-lg" name="" id="type-filter" @change="typeFilter()">
                <option value="all" selected>-- All --</option>
                <option v-for="(elem, index) in types" :key="index" :value="elem.id"> {{ elem.name }}</option>
            </select>
        </div>

        <div class="d-flex justify-content-between">
            <span v-if="this.projects.total === 1">
                C'è solo "1" progetto con questa tipologia
            </span>
            <span v-else-if="this.projects.total > 1">Ci sono "{{ this.projects.total }}" progetti con questa tipologia</span>
            <span v-else> Non sono presenti progetti con questa tipologia</span>

             <!-- paginazione -->
            <div class="d-flex pagination justify-content-center" v-if="this.projects.last_page > 1">
                <!-- bottone first page -->
                <button @click="getProjects(1)" class="page-item" :class="(projects.current_page != 1) ? '' : ' disabled'">
                    <i class="fa-solid fa-backward"></i>
                </button>
                <!-- bottone prev -->
                <button  @click="getProjects(projects.current_page - 1)" :class="(projects.prev_page_url) ? '' : ' disabled'">
                    <i class="fa-solid fa-caret-left"></i>
                </button>

                <div v-for="(elem, index) in projects.last_page" :key="index" >
                    <button @click="getProjects(elem)" :class="(projects.current_page === elem) ? 'active' : '' ">
                        {{ elem }}
                    </button>
                </div>

                <!-- bottone next -->
                <button @click="getProjects(projects.current_page + 1)" :class="(projects.next_page_url) ? '' : ' disabled'">
                    <i class="fa-solid fa-caret-right"></i>
                </button>
                <!-- bottone last page -->
                <button @click="getProjects(projects.last_page)" :class="(projects.current_page != projects.last_page) ? '' : ' disabled'">
                    <i class="fa-solid fa-forward"></i>
                </button>
            </div>
        </div>

       

        <div class="card-container row g-3 my-2">
            <CardProject v-for="(elem, index) in projects.data" :key="index" :infoProject="elem"/>
        </div>

    </div>

</template>

<style lang="scss" scoped>

.filter-section {
    border: 2px solid green;

}

.pagination {

    button {
        padding: 1px 5px;

         &.active {
            background-color: green;
            color: white;  
        }

        &.disabled {
            color: rgba(0, 0, 0, 0.425);
            background-color: rgb(209, 204, 204);
            pointer-events: none;
            cursor: not-allowed;
        }
    }
}

</style>