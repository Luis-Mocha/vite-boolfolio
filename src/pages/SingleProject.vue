<script>

export default {
    name: "SingleProjects",
    data() {
        return {
            baseUrlApi: 'http://127.0.0.1:8000/api/',
            baseUrlStorage: 'http://127.0.0.1:8000/storage/'
        }
    },
    mounted() {
            // richiamo i projects ogni volta che carico la pagina
            // this.getSingleProject(1);
        },
        methods: {

            // getSingleProject(projectApiPage) {
            //     axios.get(`${this.baseUrlApi}projects`, {
            //         params: {
            //             page: projectApiPage
            //         }
            //     })
            //     .then(res => {
            //         // console.log(res.data.projects);
            //         this.projects = res.data.projects
            //     })
            // },
        }
}
    
</script>

<template>
 hellooo
</template>