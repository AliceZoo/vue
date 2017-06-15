<template>
  <div id="app">
    <!-- <NavView></NavView> -->
    <!-- <HomeView></HomeView> -->
    <router-view></router-view>
    <FootView></FootView>
  </div>
</template>

<script>

import FootView from './components/Footer.vue'
import {mapGetters,mapActions} from 'vuex'

export default {
  computed:mapGetters([
    'headShow'
  ]),
  components:{
    FootView
  }
}
</script>

<style>
  @import './assets/css/index.css';
</style>