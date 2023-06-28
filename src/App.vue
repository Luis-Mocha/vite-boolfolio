<script>
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

  <AppMain/>

</template>

<style lang="scss">
@use './style/main.scss';
</style>
