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

  <!-- <router-view/> -->

  <!-- router with transitions -->
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in"> <!-- mode="out-in" -->
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<style lang="scss">
@use './style/main.scss';

  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  .fade-enter,
  .fade-leave-to {
    // transform 0.8s,
    transition: transform 0.8s,  opacity 0.8s ease-out;
  }
</style>
