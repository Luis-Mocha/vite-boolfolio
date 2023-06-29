<script>
import axios from 'axios';

export default {
    name: "SingleProject",
    data() {
        return {
            baseUrlApi: 'http://127.0.0.1:8000/api/',
            baseUrlStorage: 'http://127.0.0.1:8000/storage/',
            singleProject: null,
        }
    },
    mounted() {
        this.getSingleProject();
    },
    methods: {

        getSingleProject() {

            axios.get(`${this.baseUrlApi}projects/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    console.log(response.data.project);
                    this.singleProject = response.data.project;
                } else {
                    // redirect alla pagina 404
                    this.$router.push({ name: 'notFound' })
                }
            });
        },
    }
}
    
</script>

<template>

    <div class="container">

        <div v-if="(this.singleProject != null)">

            <span>Nome progetto:</span>
            <h1>{{ singleProject.title }}</h1>
            
            <img :src="`${baseUrlStorage}${singleProject.cover_img}`" :alt="`Immagine ${singleProject.slug}`">

            <div class="py-3">

                <p class="card-text"><strong>Descrizione:</strong> {{singleProject.description}}</p>

                <div v-if="singleProject.type">
                    <p class=""><strong>Tipologia:</strong> {{singleProject.type.name}}</p>
                </div>

                <div v-if="singleProject.technologies.length !== 0">
                    <strong>Tecnoloogie utilizzate:</strong>
                    <ul>
                        <li v-for="(subElem, index) in singleProject.technologies" :key="index">
                            {{ subElem.name }}
                        </li>
                    </ul>
                </div>

            </div>

        </div>

    </div>
    
</template>

<style lang="scss" scoped>

    img {
        height: 300px;
        object-fit: cover;
    }

</style>