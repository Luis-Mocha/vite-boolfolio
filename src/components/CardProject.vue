<script>

export default {
    name: "CardProject",
    props: ["infoProject"],
    data() {
        return {
            baseUrlStorage: 'http://127.0.0.1:8000/storage/'
        }
    },
}
    
</script>


<template>

    <div class="col-6 car px-3">

        <div class="border rounded">

            <router-link :to="{name: 'project', params: {slug: infoProject.slug} } " >

                <img class="card-img-top rounded" :src="`${baseUrlStorage}${infoProject.cover_img}`" :alt="`Immagine ${infoProject.slug}`">
                
            </router-link>
            
            <div class="card-body">

                <h4 class="card-title">{{ infoProject.title }}</h4>
                <p class="card-text">{{infoProject.description}}</p>

                <div v-if="infoProject.type">
                    <p class="card-text"><strong>Tipologia:</strong> {{infoProject.type.name}}</p>
                </div>

                <div v-if="infoProject.technologies.length !== 0">
                    <strong>Tecnoloogie utilizzate:</strong>
                    <ul>
                        <li v-for="(subElem, index) in infoProject.technologies" :key="index">
                            {{ subElem.name }}
                        </li>
                    </ul>
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

</style>