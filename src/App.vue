<script>
import {RouterView} from 'vue-router';
import HeaderComp from './components/HeaderComp.vue';
import AppMain from './pages/AppMain.vue';

export default {
  name: 'app',
  components: {
    HeaderComp,
    AppMain,
  },
}

</script>

<template>
  
  <HeaderComp/>

  <router-view/>

</template>

<style lang="scss">
@use './style/main.scss';
</style>
